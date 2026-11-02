/* =======================================================================
   COMUN.JS — fondo estrellado, partículas y registro PWA.
   ======================================================================= */
(function () {
  "use strict";
  function crearFondo() {
    const contenedor = document.getElementById("stars");
    if (!contenedor) return;
    const totalEstrellas = window.innerWidth < 560 ? 70 : 130;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < totalEstrellas; i++) {
      const estrella = document.createElement("span");
      estrella.className = "star";
      const tam = Math.random() * 2 + 1;
      estrella.style.width = tam + "px"; estrella.style.height = tam + "px";
      estrella.style.left = Math.random() * 100 + "%"; estrella.style.top = Math.random() * 100 + "%";
      estrella.style.animationDuration = (Math.random() * 3 + 2.5).toFixed(2) + "s";
      estrella.style.animationDelay = (Math.random() * 5).toFixed(2) + "s";
      estrella.style.setProperty("--max-op", (Math.random() * 0.5 + 0.5).toFixed(2));
      frag.appendChild(estrella);
    }
    const petalos = ["🌸", "✨", "🌷"];
    const totalPetalos = window.innerWidth < 560 ? 6 : 10;
    for (let i = 0; i < totalPetalos; i++) {
      const p = document.createElement("span"); p.className = "petalo";
      p.textContent = petalos[i % petalos.length]; p.style.left = Math.random() * 100 + "%";
      p.style.fontSize = (Math.random() * 0.6 + 0.8) + "rem";
      p.style.animationDuration = (Math.random() * 12 + 14) + "s";
      p.style.animationDelay = (Math.random() * 14) + "s";
      p.style.setProperty("--drift", (Math.random() * 80 - 40) + "px"); frag.appendChild(p);
    }
    contenedor.appendChild(frag);
  }
  function estallarParticulas(origen, opciones) {
    opciones = opciones || {}; const simbolos = opciones.simbolos || ["💗", "✨"];
    const cantidad = opciones.cantidad || 12; const rect = origen.getBoundingClientRect();
    const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
    for (let i = 0; i < cantidad; i++) {
      const s = document.createElement("span"); s.className = "particula-vuelo";
      s.textContent = simbolos[i % simbolos.length]; s.style.left = cx + "px"; s.style.top = cy + "px";
      const angulo = (i / cantidad) * Math.PI * 2 + Math.random() * 0.4;
      const distancia = 55 + Math.random() * 70;
      s.style.setProperty("--tx", Math.cos(angulo) * distancia + "px");
      s.style.setProperty("--ty", Math.sin(angulo) * distancia + "px");
      s.style.fontSize = Math.random() * 10 + 14 + "px"; s.style.animationDelay = Math.random() * 0.12 + "s";
      document.body.appendChild(s); setTimeout(() => s.remove(), 1100);
    }
  }
  crearFondo();
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(err => console.warn("No se pudo activar el modo instalable:", err)));
  }
  window.SorpresaComun = { crearFondo, estallarParticulas };
})();