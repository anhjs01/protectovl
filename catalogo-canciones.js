/* =======================================================================
   CATALOGO-CANCIONES.JS
   -----------------------------------------------------------------------
   Aquí vive la música, organizada en 4 categorías:

     amor        -> días dulces/románticos (la mayoría de los días)
     filosofica  -> días tranquilos, contemplativos, de lectura/poesía
     hot         -> días subidos de tono
     ambiente    -> música de fondo para la portada (antes de entrar
                    al calendario)

   Cada día del calendario (contenido-calendario.js) tiene un campo
   "tono" que dice de cuál de estas 3 primeras categorías se elige
   la canción (al azar, cada vez que se abre ese día). La categoría
   "ambiente" solo se usa en la portada.

   CADA CANCIÓN es un objeto:
     titulo     -> nombre de la canción
     artista    -> nombre del artista
     youtubeId  -> el ID del video de YouTube (ver abajo cómo sacarlo)
     nota       -> (opcional) algo para recordar por qué la elegiste,
                   NUNCA se muestra en pantalla, es solo para ti

   Ya dejé cargados los 4 links que me pasaste (uno por categoría) más
   un par de canciones que encontré reales en su chat de WhatsApp
   (Grupo Frontera y Fuerza Regida). El resto son sugerencias de
   canciones conocidas que pegan con cada categoría, PERO les dejé
   youtubeId vacío porque no las descargué ni verifiqué el link exacto
   — el reproductor ignora automáticamente cualquier canción sin
   youtubeId, así que no rompen nada, solo no se van a reproducir
   hasta que les agregues el ID real.

   ---------------------------------------------------------------------
   CÓMO SACAR EL "youtubeId" DE UN LINK DE YOUTUBE:
   Un link de YouTube se ve así:
       https://www.youtube.com/watch?v=XXXXXXXXXXX
   Todo lo que va después de "v=" es el ID. Ejemplo:
       https://www.youtube.com/watch?v=dQw4w9WgXcQ   →   dQw4w9WgXcQ
   Cópialo y pégalo en el campo youtubeId, entre comillas.
   ---------------------------------------------------------------------
   ======================================================================= */

const CATALOGO_CANCIONES = {

  amor: [
    { titulo: "(de tu playlist de amor)", artista: "", youtubeId: "C4hwsb1HPaU" },
    { titulo: "Hecha Pa' Mí", artista: "Grupo Frontera", youtubeId: "IbE7peGTpmc", nota: "ya se la han compartido antes 💛" },
    { titulo: "Pero No Te Enamores", artista: "Fuerza Regida", youtubeId: "qGTBrBTFKOM", nota: "otra que ya se han compartido" },
    { titulo: "Perfecta", artista: "Camilo", youtubeId: "8BRXjKvWrtQ" },
    { titulo: "Favorito", artista: "Camilo", youtubeId: "2mY7AFTtYwQ" },
    { titulo: "Vivir Mi Vida", artista: "Marc Anthony", youtubeId: "YXnjy5YlDwk", nota: "salsa, para los días más alegres" },
    { titulo: "Cali Pachanguero", artista: "Grupo Niche", youtubeId: "7KxkMLAZlzw", nota: "salsa clásica, para bailar" },
    { titulo: "Bésame Mucho", artista: "Consuelo Velázquez (clásico)", youtubeId: "" },
    { titulo: "Eres Tú", artista: "Mocedades", youtubeId: "" },
    { titulo: "Amor Eterno", artista: "Juan Gabriel", youtubeId: "" },
    { titulo: "Contigo", artista: "(elige la que ustedes sientan como suya)", youtubeId: "" },
    { titulo: "Querer Querernos", artista: "Canserbero", youtubeId: "" },
    { titulo: "Amor Libre", artista: "Nach (feat. Shuga Wuga)", youtubeId: "" },
    { titulo: "Día Tras Día", artista: "Andrés Cepeda", youtubeId: "" },
    { titulo: "Lo Que en Ti Veo", artista: "Andrés Cepeda", youtubeId: "" },
    { titulo: "Cómo Te Atreves", artista: "Morat", youtubeId: "" },
    { titulo: "[agrega otra romántica aquí]", artista: "", youtubeId: "" }
  ],

  filosofica: [
    { titulo: "(de tu playlist de lectura/poesía tranquila)", artista: "", youtubeId: "CK4M7y4Aets" },
    { titulo: "River Flows in You", artista: "Yiruma", youtubeId: "fiBvOKmuWKg" },
    { titulo: "Nuvole Bianche", artista: "Ludovico Einaudi", youtubeId: "CQ8zglIXZi8" },
    { titulo: "Comptine d'un autre été", artista: "Yann Tiersen", youtubeId: "" },
    { titulo: "Clair de Lune", artista: "Debussy", youtubeId: "" },
    { titulo: "Experience", artista: "Ludovico Einaudi", youtubeId: "" },
    { titulo: "Pensando en Ti", artista: "Canserbero", youtubeId: "" },
    { titulo: "Good News", artista: "Mac Miller", youtubeId: "" },
    { titulo: "[agrega algo instrumental o spoken word]", artista: "", youtubeId: "" }
  ],

  hot: [
    { titulo: "(de tu playlist hot)", artista: "The Weeknd", youtubeId: "47WlgETfamE" },
    { titulo: "Often", artista: "The Weeknd", youtubeId: "JPIhUaONiLU" },
    { titulo: "Save Your Tears", artista: "The Weeknd", youtubeId: "u6lihZAcy4s" },
    { titulo: "Wicked Games", artista: "The Weeknd", youtubeId: "O1OTWCd40bc" },
    { titulo: "Die For You", artista: "The Weeknd", youtubeId: "gSo0YiGPgHk" },
    { titulo: "Party Monster", artista: "The Weeknd", youtubeId: "" },
    { titulo: "The Hills", artista: "The Weeknd", youtubeId: "" },
    { titulo: "Priscilla", artista: "The Weeknd", youtubeId: "" },
    { titulo: "Besos en Guerra", artista: "Morat", youtubeId: "" },
    { titulo: "[agrega otra de tu playlist]", artista: "", youtubeId: "" },
    { titulo: "[agrega otra más]", artista: "", youtubeId: "" }
  ],

  ambiente: [
    { titulo: "(de tu playlist para el fondo de la portada)", artista: "", youtubeId: "uTBfN9KMfPk" },
    { titulo: "River Flows in You", artista: "Yiruma", youtubeId: "fiBvOKmuWKg" },
    { titulo: "Nuvole Bianche", artista: "Ludovico Einaudi", youtubeId: "CQ8zglIXZi8" },
    { titulo: "[agrega otra tranquila para el inicio]", artista: "", youtubeId: "" }
  ]

};
