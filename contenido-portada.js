/* =======================================================================
   CONTENIDO-PORTADA.JS
   -----------------------------------------------------------------------
   Contenido de la primera pantalla (el corazón que late).

   CARTA_INICIAL -> el mensaje que aparece la primera vez que se toca
                    el corazón.
   VERSOS_EXTRA  -> pequeños versos que aparecen si ella toca el botón
                    "otro mensaje" antes de entrar al calendario. Puedes
                    agregar más versos cuando quieras: solo copia una
                    línea con el mismo formato y agrégala al arreglo.
   ======================================================================= */

const CARTA_INICIAL = {
  titulo: "Antes de que sigas...",
  poema: [
    "Hice este pequeño rincón solo para ti, con cositas que sé que te gustan y con todo lo que siento cuando pienso en ti.",
    "Aquí adentro te dejé un calendario con noventa días, casi tres meses, cada uno con algo distinto: un poema, un detalle, una razón nueva.",
    "Tómate tu tiempo. Esto no es para verlo una sola vez, es para volver cuando quieras."
  ],
  firma: "Con todo mi amor."
};

const VERSOS_EXTRA = [
  "No sé exactamente cuándo empezaste a gustarme tanto, solo sé que ya no quiero que pare.",
  "Si algún día dudas de cuánto me importas, vuelve a este lugar.",
  "Quererte no se siente como esfuerzo, se siente como algo que ya sabía hacer.",
  "De todas las cosas que he construido, esta es de las que más orgullo me da.",
  "Ojalá cada día pueda darte una razón nueva para sonreír, aunque sea pequeña."
];
