/* =======================================================================
   CATALOGO-CANCIONES.JS — CATALOGO REPRODUCIBLE 365 DIAS
   -----------------------------------------------------------------------
   IMPORTANTE: este archivo contiene SOLO canciones con youtubeId valido.
   No hay placeholders ni entradas con ID vacio dentro de las categorias.

   COMO AÑADIR UNA CANCION
   1) Busca el video correcto en YouTube.
   2) Copia el ID de 11 caracteres de la URL, por ejemplo:
      https://www.youtube.com/watch?v=XXXXXXXXXXX
      -> youtubeId: "XXXXXXXXXXX"
   3) Añade el objeto a la categoria que corresponda.
   4) No hace falta modificar reproductor.js.

   Si una cancion es especifica de un dia, puedes fijarla en
   contenido-calendario.js usando cancionUrl:
      cancionUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX"

   El reproductor mantiene un historial por categoria para no repetir la
   misma cancion hasta haber recorrido las disponibles.
   ======================================================================= */

const CATALOGO_CANCIONES = {
  amor: [
    { titulo: "Hecha Pa' Mí", artista: "Grupo Frontera", youtubeId: "IbE7peGTpmc", nota: "ya se la han compartido antes 💛" },
    { titulo: "Pero No Te Enamores", artista: "Fuerza Regida", youtubeId: "qGTBrBTFKOM", nota: "otra que ya se han compartido" },
    { titulo: "Perfecta", artista: "Camilo", youtubeId: "8BRXjKvWrtQ" },
    { titulo: "Favorito", artista: "Camilo", youtubeId: "2mY7AFTtYwQ" },
    { titulo: "Vivir Mi Vida", artista: "Marc Anthony", youtubeId: "YXnjy5YlDwk", nota: "salsa, para los días más alegres" },
    { titulo: "Cali Pachanguero", artista: "Grupo Niche", youtubeId: "7KxkMLAZlzw", nota: "salsa clásica, para bailar" },
    { titulo: "Cómo Te Atreves", artista: "Morat", youtubeId: "_gm5piKnrS4" },
    { titulo: "pa quererte", artista: "Rels B", youtubeId: "XQeBTVeWkDo" },
    { titulo: "Lo que hay x aquí", artista: "Rels B", youtubeId: "qWCup_EZSWE" },
    { titulo: "Te Quiero Tanto", artista: "Kevin Kaarl", youtubeId: "q07Gd6Q-7dY" },
    { titulo: "Como Me Encanta", artista: "Kevin Kaarl", youtubeId: "OgzNyN2bWac" },
    { titulo: "Die For You", artista: "The Weeknd", youtubeId: "gSo0YiGPgHk" },
    { titulo: "At Last", artista: "Etta James", youtubeId: "1qJU8G7gR_g" },
    { titulo: "Eres", artista: "Café Tacvba", youtubeId: "A9XxwAkpdV8" },
    { titulo: "All of Me", artista: "John Legend", youtubeId: "450p7goxZqg" },
    { titulo: "Perfect", artista: "Ed Sheeran", youtubeId: "2Vv-BfVoq4g" },
    { titulo: "Glue Song", artista: "beabadoobee", youtubeId: "y1cBhJLNNXU" },
    { titulo: "Best Part", artista: "Daniel Caesar feat. H.E.R.", youtubeId: "vBy7FaapGRo" },
    { titulo: "Until I Found You", artista: "Stephen Sanchez", youtubeId: "GxldQ9eX2wo" },
    { titulo: "Disfruto", artista: "Carla Morrison", youtubeId: "_ruEj-XK1lA" },
    { titulo: "Te Mando Flores", artista: "Fonseca", youtubeId: "qTLd6u0ZW6c" },
    { titulo: "Bendita Tu Luz", artista: "Maná & Juan Luis Guerra", youtubeId: "44kityInDvM" },
    { titulo: "Darte un Beso", artista: "Prince Royce", youtubeId: "bdOXnTbyk0g" },
    { titulo: "Robarte un Beso", artista: "Carlos Vives & Sebastián Yatra", youtubeId: "mtau4v6foha" },
    { titulo: "Bachata en Fukuoka", artista: "Juan Luis Guerra", youtubeId: "_4NBD3SqBwg" },
    { titulo: "Mi Persona Favorita", artista: "Alejandro Sanz & Camila Cabello", youtubeId: "W4AiOKlOO0Q" },
    { titulo: "Besos en Guerra", artista: "Morat", youtubeId: "1oeD2m2UQAI" },
    { titulo: "There's Nothing Holdin' Me Back", artista: "Shawn Mendes", youtubeId: "dT2owtxkU8k" },
    { titulo: "Something", artista: "The Beatles", youtubeId: "qCY80SdwBVI" },
    { titulo: "A Thousand Years", artista: "Christina Perri", youtubeId: "rtOvBOTyX00" },
    { titulo: "Just The Way You Are", artista: "Bruno Mars", youtubeId: "LjhCEhWiKXk" },
    { titulo: "Ojitos Lindos", artista: "Bad Bunny & Bomba Estéreo", youtubeId: "7GDp7S1HgSk" },
    { titulo: "Make You Feel My Love", artista: "Adele", youtubeId: "0put0_a--Ng" },
    { titulo: "Día Tras Día", artista: "Andrés Cepeda", youtubeId: "g3ZzqseVv6Q" },
    { titulo: "Amor Libre", artista: "Nach (feat. Shuga Wuga)", youtubeId: "tCo16l-X2QQ" },
    { titulo: "Querer Querernos", artista: "Canserbero", youtubeId: "Ei7Hp_4FbGY" },
    { titulo: "Eres Tú", artista: "Mocedades", youtubeId: "Tw69WAn2-_0" },
    { titulo: "Volvamos a Ser Novios", artista: "Silvestre Dangond & Juancho De La Espriella", youtubeId: "gBOuViKzj1Y" },
    { titulo: "La Flaca", artista: "Jarabe de Palo", youtubeId: "R2rP8ZU52gU", nota: "rock latino romántico" },
    { titulo: "Bonito", artista: "Jarabe de Palo", youtubeId: "VE3h9du3hK4", nota: "para días luminosos" },
    { titulo: "La Bachata", artista: "Manuel Turizo", youtubeId: "TiM_TFpT_DE" },
    { titulo: "Todo de Ti", artista: "Rauw Alejandro", youtubeId: "CFPLIaMpGrY" },
    { titulo: "Lo Que en Ti Veo", artista: "Kany García & Nahuel Pennisi", youtubeId: "CrTGrpnlsFI" },
    { titulo: "Volví a Nacer", artista: "Carlos Vives", youtubeId: "CJ_zRSv3Hr8" }
  ],

  filosofica: [
    { titulo: "River Flows in You", artista: "Yiruma", youtubeId: "fiBvOKmuWKg" },
    { titulo: "Nuvole Bianche", artista: "Ludovico Einaudi", youtubeId: "sR2W2scFS4Y" },
    { titulo: "Rayando el Sol", artista: "Maná", youtubeId: "8lbsQyMhMT8" },
    { titulo: "Vivir Sin Aire", artista: "Maná", youtubeId: "Mr1pHZ2_xJU" },
    { titulo: "Mystery of Love", artista: "Sufjan Stevens", youtubeId: "KQT32vW61eI" },
    { titulo: "Just Like Heaven", artista: "The Cure", youtubeId: "n3nPiBai66M" },
    { titulo: "Sweet Disposition", artista: "The Temper Trap", youtubeId: "vN7HQrgakZU" },
    { titulo: "Pensando en Ti", artista: "Canserbero", youtubeId: "kSk0kbHMGxw" },
    { titulo: "Good News", artista: "Mac Miller", youtubeId: "dLWV58BhE7Q" },
    { titulo: "Es Épico", artista: "Canserbero", youtubeId: "FEbBEAzqqtg", nota: "rap narrativo" },
    { titulo: "Yellow", artista: "Coldplay", youtubeId: "yKNxeF4KMsY" },
    { titulo: "505", artista: "Arctic Monkeys", youtubeId: "CKI8iQTgZKU" }
  ],

  hot: [
    { titulo: "Often", artista: "The Weeknd", youtubeId: "JPIhUaONiLU" },
    { titulo: "Wicked Games", artista: "The Weeknd", youtubeId: "O1OTWCd40bc" },
    { titulo: "Bellacoso", artista: "Residente & Bad Bunny", youtubeId: "46rJ4y2kdow" },
    { titulo: "Propuesta Indecente", artista: "Romeo Santos", youtubeId: "QFs3PIZb3js" },
    { titulo: "Versace on the Floor", artista: "Bruno Mars", youtubeId: "-FyjEnoIgTM" },
    { titulo: "Earned It", artista: "The Weeknd", youtubeId: "waU75jdUnYw" },
    { titulo: "Pillowtalk", artista: "ZAYN", youtubeId: "C_3d6GntKbk" },
    { titulo: "Streets", artista: "Doja Cat", youtubeId: "oqv35UZepIM" },
    { titulo: "Adorn", artista: "Miguel", youtubeId: "8dM5QYdTo08" },
    { titulo: "Agua", artista: "Jarabe de Palo", youtubeId: "2GhF2mPKnDg", nota: "clásico latino" }
  ],

  ambiente: [
    { titulo: "River Flows in You", artista: "Yiruma", youtubeId: "fiBvOKmuWKg" },
    { titulo: "Nuvole Bianche", artista: "Ludovico Einaudi", youtubeId: "sR2W2scFS4Y" },
    { titulo: "Experience", artista: "Ludovico Einaudi", youtubeId: "l6E8QbsAAJ8" },
    { titulo: "Comptine d'un autre été", artista: "Yann Tiersen", youtubeId: "znfYwABeSZ0" }
  ]
};
