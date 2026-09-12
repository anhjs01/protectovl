/* =======================================================================
   REPRODUCTOR.JS — música de fondo real, usando el reproductor oficial
   de YouTube (embebido, sin descargar nada — 100% dentro de las reglas
   de YouTube, igual que insertar un video en cualquier página web).
   -----------------------------------------------------------------------
   No necesitas editar este archivo. El contenido de las canciones vive
   en catalogo-canciones.js.

   Por las reglas de los navegadores, la música solo puede empezar a
   sonar después de que la persona haga un clic en algo (no se puede
   forzar el sonido automático apenas abre la página). Por eso la
   música arranca:
     - en la portada: al tocar el corazón
     - en el calendario: al abrir el primer día
   ======================================================================= */

(function () {
  "use strict";

  let player = null;
  let apiLista = false;
  let pendiente = null; // videoId en espera si se pidió reproducir antes de tiempo
  let cancionActual = null;
  let sonando = false;

  /* -----------------------------------------------------------------
     1) CARGAR LA API DE YOUTUBE (una sola vez)
     ----------------------------------------------------------------- */
  function cargarAPI() {
    if (window.__ytApiCargando) return;
    window.__ytApiCargando = true;

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);

    window.onYouTubeIframeAPIReady = function () {
      crearPlayer();
    };
  }

  function crearPlayer() {
    const host = document.createElement("div");
    host.id = "yt-reproductor-host";
    host.style.position = "fixed";
    host.style.width = "1px";
    host.style.height = "1px";
    host.style.opacity = "0";
    host.style.pointerEvents = "none";
    host.style.bottom = "0";
    host.style.left = "0";
    document.body.appendChild(host);

    player = new YT.Player(host.id, {
      height: "1",
      width: "1",
      playerVars: { autoplay: 0, controls: 0, playsinline: 1 },
      events: {
        onReady: function () {
          apiLista = true;
          if (pendiente) {
            reproducirId(pendiente);
            pendiente = null;
          }
        },
        onStateChange: function (e) {
          sonando = e.data === 1; // 1 = YT.PlayerState.PLAYING
          actualizarUI();
        },
      },
    });
  }

  /* -----------------------------------------------------------------
     2) REPRODUCIR
     ----------------------------------------------------------------- */
  function reproducirId(videoId) {
    if (!videoId) return;
    if (!apiLista || !player || !player.loadVideoById) {
      pendiente = videoId;
      return;
    }
    player.loadVideoById(videoId);
    player.playVideo();
  }

  function reproducirCategoria(categoria) {
    if (typeof CATALOGO_CANCIONES === "undefined") return;
    const lista = (CATALOGO_CANCIONES[categoria] || []).filter((c) => c.youtubeId);
    if (lista.length === 0) return;

    // evita repetir la misma si hay más de una opción
    let opciones = lista;
    if (cancionActual) {
      const otras = lista.filter((c) => c.youtubeId !== cancionActual.youtubeId);
      if (otras.length > 0) opciones = otras;
    }

    const elegida = opciones[Math.floor(Math.random() * opciones.length)];
    cancionActual = elegida;
    cancionActual.categoria = categoria;
    reproducirId(elegida.youtubeId);
    actualizarUI();
  }

  function pausarOReanudar() {
    if (!player) return;
    if (sonando) {
      player.pauseVideo();
    } else if (cancionActual) {
      player.playVideo();
    }
  }

  function siguienteDeLaMisma() {
    if (cancionActual && cancionActual.categoria) {
      reproducirCategoria(cancionActual.categoria);
    }
  }

  /* -----------------------------------------------------------------
     3) UI MÍNIMA — barra flotante "sonando ahora"
     ----------------------------------------------------------------- */
  let elBarra = null;

  function crearUI() {
    if (elBarra) return;
    elBarra = document.createElement("div");
    elBarra.className = "reproductor-barra";
    elBarra.innerHTML =
      '<button type="button" class="reproductor-btn" id="reproductorPlayPausa" aria-label="Pausar o reanudar">⏸</button>' +
      '<span class="reproductor-info" id="reproductorInfo">Elegiendo música…</span>' +
      '<button type="button" class="reproductor-btn" id="reproductorSiguiente" aria-label="Cambiar canción">⟳</button>';
    document.body.appendChild(elBarra);

    elBarra.querySelector("#reproductorPlayPausa").addEventListener("click", pausarOReanudar);
    elBarra.querySelector("#reproductorSiguiente").addEventListener("click", siguienteDeLaMisma);
  }

  function actualizarUI() {
    if (!elBarra) crearUI();
    if (!cancionActual) return;
    elBarra.classList.add("is-visible");
    const info = elBarra.querySelector("#reproductorInfo");
    const nombre = cancionActual.artista
      ? cancionActual.titulo + " · " + cancionActual.artista
      : cancionActual.titulo;
    info.textContent = "🎵 " + nombre;
    elBarra.querySelector("#reproductorPlayPausa").textContent = sonando ? "⏸" : "▶";
  }

  /* -----------------------------------------------------------------
     4) INICIO
     ----------------------------------------------------------------- */
  cargarAPI();

  window.SorpresaReproductor = {
    reproducirCategoria: reproducirCategoria,
    estaSonando: function () { return sonando; },
  };
})();
