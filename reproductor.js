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
  let audioLocal = null;
  let fuenteActual = "youtube";
  let colaLocalFallback = null;

  // Archivos locales opcionales. Se leen desde musica-local.js si existe.
  // Ejemplo: { titulo: "Perfect", artista: "Ed Sheeran", archivo: "Perfect - Ed Sheeran.mp3", categoria: "amor" }
  function catalogoLocalValido() {
    return typeof CATALOGO_MUSICA_LOCAL !== "undefined" && Array.isArray(CATALOGO_MUSICA_LOCAL);
  }

  function buscarLocalParaCancion(cancion) {
    if (!catalogoLocalValido() || !cancion) return null;
    const titulo = String(cancion.titulo || "").trim().toLowerCase();
    const artista = String(cancion.artista || "").trim().toLowerCase();
    return CATALOGO_MUSICA_LOCAL.find((item) => {
      if (!item || !item.archivo) return false;
      const it = String(item.titulo || "").trim().toLowerCase();
      const ia = String(item.artista || "").trim().toLowerCase();
      return (titulo && it === titulo && (!artista || !ia || ia === artista)) ||
             (titulo && it === titulo);
    }) || null;
  }

  function reproducirLocal(cancion, local) {
    if (!local || !local.archivo) return false;
    try {
      if (!audioLocal) {
        audioLocal = document.createElement("audio");
        audioLocal.preload = "auto";
        audioLocal.addEventListener("ended", siguienteAutomatico);
        audioLocal.addEventListener("play", function () { sonando = true; actualizarUI(); });
        audioLocal.addEventListener("pause", function () { if (fuenteActual === "local") { sonando = false; actualizarUI(); } });
        audioLocal.addEventListener("error", function () {
          if (fuenteActual === "local") {
            sonando = false;
            intentarAlternativaTrasError(cancionActual, "local");
          }
        });
        document.body.appendChild(audioLocal);
      }
      fuenteActual = "local";
      cancionActual = { ...cancion, localArchivo: local.archivo };
      audioLocal.src = "musica/" + encodeURIComponent(local.archivo);
      audioLocal.load();
      const promesa = audioLocal.play();
      if (promesa && typeof promesa.catch === "function") promesa.catch(() => { sonando = false; actualizarUI(); });
      actualizarUI();
      return true;
    } catch (_) {
      return false;
    }
  }

  function catalogoValido() {
    return typeof CATALOGO_CANCIONES !== "undefined" && CATALOGO_CANCIONES;
  }

  function tieneIdValido(cancion) {
    return !!cancion && /^[-_A-Za-z0-9]{11}$/.test(String(cancion.youtubeId || ""));
  }

  function listaCategoria(categoria) {
    if (!catalogoValido()) return [];
    const lista = Array.isArray(CATALOGO_CANCIONES[categoria]) ? CATALOGO_CANCIONES[categoria] : [];
    return lista.filter(tieneIdValido);
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

  function elegirCancion(categoria, excluirIds) {
    if (!CATEGORIAS_VALIDAS.includes(categoria)) categoria = "amor";
    const lista = listaCategoria(categoria);
    if (!lista.length) return null;

    const excluidos = excluirIds instanceof Set ? excluirIds : new Set();
    const historial = leerHistorial();
    const usados = Array.isArray(historial[categoria]) ? historial[categoria] : [];
    let disponibles = lista.filter((c) => !usados.includes(c.youtubeId) && !excluidos.has(c.youtubeId));

    // Si ya se recorrió toda la categoría, empieza otra vuelta, pero conserva
    // fuera los videos que acaban de fallar durante esta sesión.
    if (!disponibles.length) {
      historial[categoria] = [];
      disponibles = lista.filter((c) => !excluidos.has(c.youtubeId));
    }

    // Evita repetir inmediatamente cuando hay más de una alternativa.
    if (cancionActual && disponibles.length > 1) {
      const otras = disponibles.filter((c) => c.youtubeId !== cancionActual.youtubeId);
      if (otras.length) disponibles = otras;
    }

    if (!disponibles.length) return null;
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
      '<button type="button" class="reproductor-btn" id="reproductorLocal" aria-label="Usar archivo local">💿</button>' +
      '<button type="button" class="reproductor-btn" id="reproductorSiguiente" aria-label="Cambiar canción">⟳</button>';
    document.body.appendChild(elBarra);

    elBarra.querySelector("#reproductorPlayPausa").addEventListener("click", function () {
      activarSonido(true);
      pausarOReanudar();
    });
    elBarra.querySelector("#reproductorLocal").addEventListener("click", function () {
      activarSonido(true);
      if (!cancionActual) return;
      const local = buscarLocalParaCancion(cancionActual);
      if (local) {
        reproducirLocal(cancionActual, local);
      } else {
        mostrarEstadoError("No tienes este archivo en la carpeta musica/");
      }
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

    info.textContent = (fuenteActual === "local" ? "💿 " : "🎵 ") + nombre;
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

    const origen = (location.protocol === "http:" || location.protocol === "https:") ? location.origin : undefined;
    const variablesPlayer = {
      autoplay: 0,
      controls: 1,
      playsinline: 1,
      rel: 0,
      modestbranding: 1,
    };
    if (origen) variablesPlayer.origin = origen;

    player = new YT.Player(elHost.id, {
      width: "200",
      height: "200",
      playerVars: variablesPlayer,
      events: {
        onReady: function () {
          apiLista = true;
          player.mute();
          precargarIntro();
          ejecutarSolicitudPendiente();
        },
        onStateChange: function (event) {
          if (event.data === 1) {
            fuenteActual = "youtube";
            sonando = true;
          } else if (event.data === 0) {
            sonando = false;
            actualizarUI();
            // Cuando una canción termina, encadenamos otra automáticamente.
            siguienteAutomatico();
            return;
          } else if (event.data === 2 || event.data === 5) {
            sonando = false;
          }
          actualizarUI();
        },
        onError: function (event) {
          const fallida = cancionActual ? { ...cancionActual } : solicitudPendiente ? { ...solicitudPendiente } : null;
          intentarAlternativaTrasError(fallida, event && event.data);
        },
        onAutoplayBlocked: function () {
          sonando = false;
          actualizarUI();
        },
      },
    });
  }

  function marcarIdFallido(id, codigo) {
    // 100 = eliminado/privado; 101/150 = no permite reproducción incrustada.
    // 2 = ID inválido. Son fallos que sí justifican cambiar de video.
    if (id && [2, 100, 101, 150].includes(Number(codigo))) {
      idsFallidosSesion.add(String(id));
    }
  }

  function elegirAlternativa(categoriaOriginal) {
    const intentos = [];
    const orden = [];
    if (CATEGORIAS_VALIDAS.includes(categoriaOriginal)) orden.push(categoriaOriginal);
    for (const categoria of CATEGORIAS_VALIDAS) {
      if (!orden.includes(categoria)) orden.push(categoria);
    }

    for (const categoria of orden) {
      const alternativa = elegirCancion(categoria, idsFallidosSesion);
      if (alternativa) {
        intentos.push(alternativa);
        return alternativa;
      }
    }
    return null;
  }

  function intentarAlternativaTrasError(cancionFallida, codigo) {
    marcarIdFallido(cancionFallida && cancionFallida.youtubeId, codigo);
    sonando = false;
    actualizarUI();

    // Primera alternativa: el mismo tema desde un archivo local del usuario.
    const local = codigo === "local" ? null : buscarLocalParaCancion(cancionFallida);
    if (local && reproducirLocal(cancionFallida, local)) return;

    const categoria = (cancionFallida && cancionFallida.categoria) || "amor";
    const alternativa = elegirAlternativa(categoria);
    if (!alternativa) {
      mostrarEstadoError("No queda otro video disponible en este momento");
      return;
    }

    cancionActual = { ...alternativa };
    precargada = null;
    solicitudPendiente = { ...alternativa };
    crearUI();
    elBarra.querySelector("#reproductorInfo").textContent = "↻ Cambiando a otra versión…";
    actualizarUI();

    // Si ya hubo interacción, intentamos inmediatamente. Si no, queda pendiente
    // hasta el siguiente gesto, respetando las reglas de autoplay del navegador.
    if (usuarioInteractuo) {
      const pendiente = solicitudPendiente;
      solicitudPendiente = null;
      reproducirCancion(pendiente, true);
    }
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

  function siguienteAutomatico() {
    if (!usuarioInteractuo || !cancionActual) return;
    const siguiente = elegirCancion(cancionActual.categoria || "amor", idsFallidosSesion);
    if (!siguiente) return;

    const local = buscarLocalParaCancion(siguiente);
    if (local && reproducirLocal(siguiente, local)) return;

    reproducirCancion(siguiente, true);
  }

  function reproducirCancion(cancion, reemplazarPendiente) {
    if (!tieneIdValido(cancion)) return;

    cancionActual = { ...cancion };
    precargada = null;
    fuenteActual = "youtube";
    if (audioLocal) { try { audioLocal.pause(); } catch (_) {} }
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

    fuenteActual = "youtube";
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
    if (!cancionActual) return;
    if (fuenteActual === "local" && audioLocal) {
      if (sonando) audioLocal.pause();
      else audioLocal.play().catch(() => {});
      return;
    }
    if (!player || !apiLista) return;
    if (sonando) {
      player.pauseVideo();
    } else {
      player.unMute();
      player.setVolume(100);
      player.playVideo();
    }
  }

  function siguienteDeLaMisma() {
    if (!cancionActual) {
      reproducirCategoria(INTRO_CATEGORIA);
      return;
    }
    siguienteAutomatico();
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
    fuenteActual: function () { return fuenteActual; },
    reproducirLocal: function (datos) {
      const local = buscarLocalParaCancion(datos);
      return local ? reproducirLocal(datos, local) : false;
    },
    limpiarHistorialMusical: function () { try { localStorage.removeItem(HISTORIAL_KEY); } catch (_) {} },
  };
})();
