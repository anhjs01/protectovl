/* =======================================================================
   CANCIONES.JS
   -----------------------------------------------------------------------
   Aquí va la lista de "nuestras canciones". No reproducimos música
   dentro de la página (por temas de derechos de autor y porque los
   navegadores bloquean la reproducción automática), así que en su
   lugar mostramos una lista bonita con el nombre de cada canción;
   al tocarla, se abre el link que tú pongas (Spotify, YouTube, etc.)
   en una pestaña nueva.

   Para agregar una canción:
     1. Copia un bloque { ... } completo.
     2. Cambia "titulo" y "artista".
     3. Pega el link de Spotify o YouTube en "url".
     4. (Opcional) escribe por qué la elegiste en "nota".

   Dejé 3 ejemplos de muestra, sin link real (url: ""), para que veas
   el formato. Reemplázalos por canciones reales cuando quieras — no
   hay límite de cuántas puedes agregar.
   ======================================================================= */

const LISTA_CANCIONES = [
  {
    titulo: "[Escribe aquí el nombre de la canción]",
    artista: "[Artista]",
    url: "",
    nota: "[PARA TI] cuéntale por qué elegiste esta canción."
  },
  {
    titulo: "[Otra canción, tal vez en inglés]",
    artista: "[Artista]",
    url: "",
    nota: "[PARA TI] ¿qué recuerdo tiene esta canción para ustedes?"
  },
  {
    titulo: "[Otra canción más, en el idioma que quieras]",
    artista: "[Artista]",
    url: "",
    nota: "[PARA TI] puedes dejarla vacía si solo quieres compartir la canción."
  }
];
