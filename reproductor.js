/* =======================================================================
   REPRODUCTOR.JS — música contextual del calendario
   -----------------------------------------------------------------------
   Regla simple:
   - CATALOGO_CANCIONES contiene únicamente entradas reproducibles.
   - Al primer gesto del usuario se activa el audio.
   - Un día con canción fija tiene prioridad sobre el tono automático.
   - Si no hay canción fija, se elige una canción de su categoría.
   - La selección evita repetir una canción hasta agotar la categoría.
   - La interfaz solo muestra "pausa" cuando YouTube confirma PLAYING.

   Para añadir canciones en el futuro, solo agrega un objeto al catálogo con
   un youtubeId real de 11 caracteres. No hace falta tocar este archivo.
   ======================================================================= */

(function () {
  "use strict";

  const HISTORIAL_KEY = "sorpresa_musica_historial_v2";
  const INTRO_CATEGORIA = "ambiente";
  const CATEGORIAS_VALIDAS = ["amor", "filosofica", "hot", "ambiente"];

  let player = null;
  let apiLista = false;
  let apiCargando = false;
  let precargada = null;
  let cancionActual = null;
  let sonando = false;
  let usuarioInteractuo = false;
  let solicitudPendiente = null;
  let elBarra = null;
  let elHost = null;
  let errorPlayer = false;
  const idsFallidosSesion = new Set();

  function catalogoValido() {
    return typeof CATALOGO_CANCIONES !== "undefined" && CATALOGO_CANCIONES;
  }

  function tieneIdValido(cancion) {
    return !!cancion && /^[-_A-Za-z0-9]{11}$/.test(String(cancion.youtubeId || ""));
  }

  function listaCategoria(categoria) {
    if (!catalogoValido()) return [];
    const lista = Array.isArray(CATALOGO_CANCIONES[categoria]) ? CATALOGO_CANCIONES[categoria] : [];
    return lista.filter((c) => tieneIdValido(c) && !idsFallidosSesion.has(c.youtubeId));
  }

  function leerHistorial() {
    try {
      const raw = localStorage.getItem(HISTORIAL_KEY);
      const data = raw ? JSON.parse(raw) : {};
      return data && typeof data === "object" ? data : {};
    } catch (_) {
      return {};
    }
  }

  function guardarHistorial(data) {
    try { localStorage.setItem(HISTORIAL_KEY, JSON.stringify(data)); } catch (_) {}
  }

  function elegirCancion(categoria) {
    if (!CATEGORIAS_VALIDAS.includes(categoria)) categoria = "amor";
    const lista = listaCategoria(categoria);
    if (!lista.length) return null;

    const historial = leerHistorial();
    const usados = Array.isArray(historial[categoria]) ? historial[categoria] : [];
    let disponibles = lista.filter((c) => !usados.includes(c.youtubeId));

    // Cuando se consumió toda la categoría, empezamos una vuelta nueva.
    if (!disponibles.length) {
      historial[categoria] = [];
      disponibles = lista.slice();
    }

    // Evita repetir inmediatamente aunque la categoría tenga pocas canciones.
    if (cancionActual && disponibles.length > 1) {
      const otras = disponibles.filter((c) => c.youtubeId !== cancionActual.youtubeId);
      if (otras.length) disponibles = otras;
    }

    const elegida = disponibles[Math.floor(Math.random() * disponibles.length)];
    historial[categoria] = [...(historial[categoria] || []), elegida.youtubeId];
    guardarHistorial(historial);
    return { ...elegida, categoria };
  }

  function crearUI() {
    if (elBarra) return;

    elBarra = document.createElement("div");
    elBarra.className = "reproductor-barra";
    elBarra.innerHTML =
      '<button type="button" class="reproductor-btn" id="reproductorPlayPausa" aria-label="Pausar o reanudar">▶</button>' +
      '<span class="reproductor-info" id="reproductorInfo">Música lista</span>' +
      '<button type="button" class="reproductor-btn" id="reproductorSiguiente" aria-label="Cambiar canción">⟳</button>';
    document.body.appendChild(elBarra);

    elBarra.querySelector("#reproductorPlayPausa").addEventListener("click", function () {
      activarSonido(true);
      pausarOReanudar();
    });
    elBarra.querySelector("#reproductorSiguiente").addEventListener("click", function () {
      activarSonido(true);
      siguienteDeLaMisma();
    });
  }

  function actualizarUI() {
    crearUI();
    if (!cancionActual) return;

    elBarra.classList.add("is-visible");
    const info = elBarra.querySelector("#reproductorInfo");
    const nombre = cancionActual.artista
      ? cancionActual.titulo + " · " + cancionActual.artista
      : cancionActual.titulo;

    info.textContent = "🎵 " + nombre;
    elBarra.querySelector("#reproductorPlayPausa").textContent = sonando ? "⏸" : "▶";
    elBarra.setAttribute("data-playing", sonando ? "true" : "false");
  }

  function mostrarEstadoError(mensaje) {
    crearUI();
    elBarra.classList.add("is-visible", "is-error");
    elBarra.querySelector("#reproductorInfo").textContent = "⚠ " + mensaje;
    elBarra.querySelector("#reproductorPlayPausa").textContent = "▶";
  }

  function cargarAPI() {
    if (window.YT && typeof window.YT.Player === "function") {
      crearPlayer();
      return;
    }
    if (apiCargando) return;

    apiCargando = true;
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onload = function () {
      // La API llama a onYouTubeIframeAPIReady cuando termina de inicializar.
    };
    script.onerror = function () {
      errorPlayer = true;
      mostrarEstadoError("No se pudo cargar YouTube");
    };
    document.head.appendChild(script);

    const anterior = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () {
      if (typeof anterior === "function") anterior();
      crearPlayer();
    };
  }

  function crearPlayer() {
    if (player || !(window.YT && typeof window.YT.Player === "function")) return;

    crearUI();

    elHost = document.createElement("div");
    elHost.id = "yt-reproductor-host";
    elHost.className = "yt-reproductor-host";
    document.body.appendChild(elHost);

    player = new YT.Player(elHost.id, {
      width: "200",
      height: "200",
      playerVars: {
        autoplay: 0,
        controls: 1,
        playsinline: 1,
        rel: 0,
        modestbranding: 1,
      },
      events: {
        onReady: function () {
          apiLista = true;
          player.mute();
          precargarIntro();
          ejecutarSolicitudPendiente();
        },
        onStateChange: function (event) {
          if (event.data === 1) {
            sonando = true;
            actualizarUI();
          } else if (event.data === 0) {
            sonando = false;
            actualizarUI();
            const categoria = cancionActual && cancionActual.categoria ? cancionActual.categoria : "amor";
            siguienteDeCategoria(categoria);
          } else if (event.data === 2 || event.data === 5) {
            sonando = false;
            actualizarUI();
          }
        },
        onError: function () {
          const fallida = cancionActual;
          sonando = false;
          actualizarUI();
          solicitudPendiente = null;
          siguienteTrasFallo((fallida && fallida.categoria) || "amor", fallida);
        },
        onAutoplayBlocked: function () {
          sonando = false;
          actualizarUI();
        },
      },
    });
  }

  function marcarFallo(cancion) {
    if (cancion && cancion.youtubeId) idsFallidosSesion.add(cancion.youtubeId);
  }

  function siguienteTrasFallo(categoria, fallida) {
    marcarFallo(fallida);
    const alternativa = elegirCancion(categoria);
    if (alternativa) {
      reproducirCancion(alternativa, true);
      return true;
    }
    // Si toda la categoría quedó temporalmente fuera, intenta cualquier otra.
    for (const otra of CATEGORIAS_VALIDAS) {
      if (otra === categoria) continue;
      const respaldo = elegirCancion(otra);
      if (respaldo) {
        reproducirCancion(respaldo, true);
        return true;
      }
    }
    mostrarEstadoError("No hay otra canción disponible");
    return false;
  }

  function precargarIntro() {
    const elegida = elegirCancion(INTRO_CATEGORIA);
    if (!elegida || !player || !apiLista) return;

    precargada = elegida;
    player.mute();
    player.cueVideoById(elegida.youtubeId);
  }

  function reproducirVideo(videoId) {
    if (!player || !apiLista || !videoId) return false;
    try {
      player.loadVideoById(videoId);
      player.unMute();
      player.setVolume(100);
      player.playVideo();
      return true;
    } catch (_) {
      return false;
    }
  }

  function reproducirCancion(cancion, reemplazarPendiente) {
    if (!tieneIdValido(cancion)) return;

    cancionActual = { ...cancion };
    precargada = null;
    crearUI();

    if (!apiLista || !player) {
      solicitudPendiente = { ...cancion };
      sonando = false;
      actualizarUI();
      return;
    }

    if (!usuarioInteractuo && !reemplazarPendiente) {
      solicitudPendiente = { ...cancion };
      sonando = false;
      actualizarUI();
      return;
    }

    player.unMute();
    player.setVolume(100);
    player.loadVideoById(cancion.youtubeId);
    player.playVideo();
    sonando = false; // Solo pasa a true cuando YouTube emite PLAYING.
    actualizarUI();
  }

  function reproducirCategoria(categoria) {
    const elegida = elegirCancion(categoria || "amor");
    if (!elegida) {
      mostrarEstadoError("No hay canciones verificadas en esta categoría");
      return;
    }
    reproducirCancion(elegida, false);
  }

  function extraerId(url) {
    if (!url) return "";
    const match = String(url).match(/[?&]v=([-_A-Za-z0-9]{11})/);
    if (match) return match[1];
    const corto = String(url).match(/youtu\.be\/([-_A-Za-z0-9]{11})/);
    return corto ? corto[1] : "";
  }

  function buscarPorTitulo(titulo) {
    if (!titulo || !catalogoValido()) return null;
    const objetivo = String(titulo).trim().toLowerCase();
    for (const categoria of CATEGORIAS_VALIDAS) {
      const encontrada = listaCategoria(categoria).find((c) => String(c.titulo).trim().toLowerCase() === objetivo);
      if (encontrada) return { ...encontrada, categoria };
    }
    return null;
  }

  function reproducirDia(dia) {
    if (!dia) return;

    const idFijo = extraerId(dia.cancionUrl);
    if (idFijo) {
      const encontrada = buscarPorId(idFijo) || {
        titulo: "Canción del día",
        artista: "",
        youtubeId: idFijo,
        categoria: dia.tono || "amor",
      };
      reproducirCancion(encontrada, false);
      return;
    }

    // Algunos días antiguos guardan la canción en notaCancion o notaImagen.
    const texto = [dia.notaCancion, dia.notaImagen, dia.detalle].filter(Boolean).join(" ");
    const encontrada = buscarPorTexto(texto);
    if (encontrada) {
      reproducirCancion(encontrada, false);
      return;
    }

    reproducirCategoria(dia.tono || "amor");
  }

  function buscarPorId(id) {
    for (const categoria of CATEGORIAS_VALIDAS) {
      const encontrada = listaCategoria(categoria).find((c) => c.youtubeId === id);
      if (encontrada) return { ...encontrada, categoria };
    }
    return null;
  }

  function buscarPorTexto(texto) {
    const normalizado = String(texto || "").toLowerCase();
    let mejor = null;
    let mejorLongitud = 0;
    for (const categoria of CATEGORIAS_VALIDAS) {
      for (const cancion of listaCategoria(categoria)) {
        const titulo = String(cancion.titulo || "").toLowerCase();
        if (titulo.length >= 5 && normalizado.includes(titulo) && titulo.length > mejorLongitud) {
          mejor = { ...cancion, categoria };
          mejorLongitud = titulo.length;
        }
      }
    }
    return mejor;
  }

  function activarSonido(forzar) {
    usuarioInteractuo = true;
    if (!apiLista || !player) return;

    if (solicitudPendiente) {
      const pendiente = solicitudPendiente;
      solicitudPendiente = null;
      reproducirCancion(pendiente, true);
      return;
    }

    if (forzar && cancionActual && !sonando) {
      player.unMute();
      player.setVolume(100);
      player.playVideo();
      return;
    }

    if (!cancionActual) {
      const intro = precargada || elegirCancion(INTRO_CATEGORIA);
      if (intro) reproducirCancion(intro, true);
    }
  }

  function pausarOReanudar() {
    if (!player || !apiLista || !cancionActual) return;
    if (sonando) {
      player.pauseVideo();
    } else {
      player.unMute();
      player.setVolume(100);
      player.playVideo();
    }
  }

  function siguienteDeCategoria(categoria) {
    const siguiente = elegirCancion(categoria);
    if (siguiente) {
      reproducirCancion(siguiente, true);
      return true;
    }
    for (const otra of CATEGORIAS_VALIDAS) {
      if (otra === categoria) continue;
      const respaldo = elegirCancion(otra);
      if (respaldo) {
        reproducirCancion(respaldo, true);
        return true;
      }
    }
    return false;
  }

  function siguienteDeLaMisma() {
    return siguienteDeCategoria((cancionActual && cancionActual.categoria) || "amor");
  }

  // El primer gesto puede ocurrir antes de que YouTube termine de cargar.
  // Guardamos ese gesto y ejecutamos la solicitud cuando la API esté lista.
  function gestoInicial() {
    activarSonido(false);
  }

  function ejecutarSolicitudPendiente() {
    if (!usuarioInteractuo || !solicitudPendiente) return;
    const pendiente = solicitudPendiente;
    solicitudPendiente = null;
    reproducirCancion(pendiente, true);
  }

  document.addEventListener("pointerdown", gestoInicial, { capture: true, passive: true });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") gestoInicial();
  }, { capture: true });

  crearUI();
  cargarAPI();

  window.SorpresaReproductor = {
    reproducirCategoria,
    reproducirDia,
    reproducirId: function (id, datos) {
      if (!/^[-_A-Za-z0-9]{11}$/.test(String(id || ""))) return;
      reproducirCancion({
        titulo: datos && datos.titulo ? datos.titulo : "Canción",
        artista: datos && datos.artista ? datos.artista : "",
        youtubeId: id,
        categoria: datos && datos.categoria ? datos.categoria : "amor",
      }, false);
    },
    activarSonido,
    pausarOReanudar,
    estaSonando: function () { return sonando; },
    haIniciado: function () { return !!cancionActual; },
    cancionActual: function () { return cancionActual ? { ...cancionActual } : null; },
    limpiarHistorialMusical: function () { try { localStorage.removeItem(HISTORIAL_KEY); } catch (_) {} },
  };
})();
