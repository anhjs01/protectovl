/* =======================================================================
   CONTENIDO-CALENDARIO.JS
   -----------------------------------------------------------------------
   Aquí viven los 134 días del calendario. Cada día es un objeto con:

     dia          -> número del día (1 a 134, no lo cambies de orden)
     categoria    -> etiqueta corta que se muestra arriba (ej: "Girasol")
     icono        -> un emoji que representa el día
     tono         -> mood musical del día: "amor", "filosofica" o "hot".
                     Determina de qué categoría del catálogo de canciones
                     se elige (al azar) la música de ese día. Ver
                     catalogo-canciones.js.
     color        -> { principal, suave, oscuro } -> tema de color del día
     buenosDias   -> primera pantalla del día (saludo corto)
     poema        -> arreglo de 1 a 3 líneas, el mensaje principal del día
     detalle      -> un "dato bonito" o guiño a algo que le gusta (opcional)
     buenasNoches -> última pantalla del día (despedida corta)
     imagen       -> (opcional, no viene por defecto) ruta a una imagen
                     tuya, ej: "imagenes/dia4.jpg" — ver GUIA.md
     cancionUrl   -> (opcional) si quieres FIJAR una canción específica
                     para ese día en vez de que sea automática por tono
     notaImagen   -> [PARA TI] idea de imagen. Nunca se muestra en pantalla.
     notaCancion  -> [PARA TI] nota sobre música. Nunca se muestra en pantalla.

   Para agregar más días en el futuro, copia un bloque completo, cámbiale
   el número "dia" al siguiente disponible y agrégalo antes del cierre
   "];". El calendario se ajusta solo.
   ======================================================================= */

const CALENDARIO = [

  {
    dia: 1,
    categoria: "Snoopy",
    icono: "🐶",
    tono: "amor",
    color: { principal: "#f4c453", suave: "#fff0c9", oscuro: "#241a05" },
    buenosDias: "Buenos días. Hoy empieza algo que llevaba tiempo queriendo hacerte.",
    poema: [
      "Como ese amigo que nunca se cansa de estar cerca, quiero ser tu lugar seguro en los días buenos y también en los raros.",
      "Este es el primero de cincuenta días pensados para ti."
    ],
    detalle: "Cada día vas a encontrar algo distinto, prometido.",
    buenasNoches: "Buenas noches. Que descanses sabiendo que ya empezamos esto juntos.",
    notaImagen: "[PARA TI] una foto tierna de un perrito, o algo que te recuerde a Snoopy.",
    notaCancion: "[PARA TI] algo suave y hogareño para abrir el calendario."
  },

  {
    dia: 2,
    categoria: "Girasol",
    icono: "🌻",
    tono: "amor",
    color: { principal: "#f2b705", suave: "#fff0b3", oscuro: "#251c02" },
    buenosDias: "Buenos días, mi girasol. Que tu día empiece con la misma luz que tú le das al mío.",
    poema: [
      "El girasol gira buscando la luz durante todo el día; yo hago lo mismo contigo, sin importar en qué dirección empiece la mañana.",
      "Eres la claridad que hace que todo lo demás se vea mejor."
    ],
    detalle: "Significado del girasol: fidelidad y luz propia.",
    buenasNoches: "Buenas noches. Descansa, mañana el sol vuelve a salir para los dos.",
    notaImagen: "[PARA TI] una foto de girasoles, o de un atardecer que te guste.",
    notaCancion: "[PARA TI] algo alegre, de esas que suben el ánimo."
  },

  {
    dia: 3,
    categoria: "Hello Kitty",
    icono: "🎀",
    tono: "amor",
    color: { principal: "#ff6fa8", suave: "#ffd7e6", oscuro: "#3a0f24" },
    buenosDias: "Buenos días, pequeña. Espero que hoy todo te trate tan bien como te mereces.",
    poema: [
      "Hay un tipo de calma que solo llega cuando pienso en ti: como si el día, por más enredado que esté, encontrara por fin dónde sentarse a descansar.",
      "Quiero seguir siendo tu lugar suave."
    ],
    detalle: "Hoy es un día para lo tierno, lo simple, lo que no necesita esfuerzo.",
    buenasNoches: "Buenas noches, dulzura. Que sueñes bonito.",
    notaImagen: "[PARA TI] algo rosado, tierno, tipo Hello Kitty.",
    notaCancion: "[PARA TI] algo dulce, tipo pop suave."
  },

  {
    dia: 4,
    categoria: "Chocolate",
    icono: "🍫",
    tono: "amor",
    color: { principal: "#8a5a3c", suave: "#e6c9a8", oscuro: "#1c0f07" },
    buenosDias: "Buenos días. Hoy va dedicado a lo que te saca sonrisas rápidas.",
    poema: [
      "Dicen que el chocolate hace bien porque libera algo en el cuerpo que se parece a la felicidad.",
      "Contigo no necesito el chocolate para sentir eso, pero acepto que hoy vengan los dos juntos."
    ],
    detalle: "Si hoy hay un chocolate cerca, piensa que ese primer cuadrito es mío.",
    buenasNoches: "Buenas noches, que sueñes con algo tan dulce como te gusta.",
    notaImagen: "[PARA TI] una foto de chocolates, o de un antojo compartido.",
    notaCancion: "[PARA TI] algo relajado, de esas para comer algo rico de fondo."
  },

  {
    dia: 5,
    categoria: "Deseo",
    icono: "🔥",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días. Hoy no vengo con poesía suave, vengo con ganas de decirte lo que a veces me guardo.",
    poema: [
      "Hay días en que pienso en ti de una forma que no cabe en un mensaje de buenos días, de esas que se sienten en la piel antes que en la cabeza.",
      "No te voy a decir todo lo que imagino, pero sí te digo que no es poco, y que casi todo empieza contigo cerca."
    ],
    detalle: "Guárdate esto para cuando estemos solos, ahí sí te cuento el resto.",
    buenasNoches: "Buenas noches. Ojalá sueñes conmigo tan cerca como yo te imagino hoy.",
    notaImagen: "[PARA TI] algo sugerente, sutil, a tu criterio.",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo 'hot'."
  },

  {
    dia: 6,
    categoria: "Intensidad",
    icono: "🖤",
    tono: "filosofica",
    color: { principal: "#5c1f3d", suave: "#d9a7bd", oscuro: "#12040a" },
    buenosDias: "Buenos días. Hoy no quiero escribirte bonito, quiero escribirte real.",
    poema: [
      "No te quiero de esa forma tranquila que cabe en una postal. Te quiero de la forma que desordena la rutina, que hace que un martes cualquiera valga la pena.",
      "Si esto fuera fácil, no significaría lo mismo."
    ],
    detalle: "Nada de lo que siento por ti ha sido a medias.",
    buenasNoches: "Buenas noches, con toda la intensidad todavía intacta.",
    notaImagen: "[PARA TI] a tu criterio, algo con textura, algo real.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 7,
    categoria: "Lirio",
    icono: "🤍",
    tono: "filosofica",
    color: { principal: "#efe6d8", suave: "#fbf6ec", oscuro: "#1c1a14" },
    buenosDias: "Buenos días. Hoy quiero hablarte despacio, como quien no quiere apurar nada bonito.",
    poema: [
      "El lirio no necesita gritar para ser hermoso; le basta con estar.",
      "Así quiero quererte: sin ruido, sin prisa, pero seguro."
    ],
    detalle: "Significado del lirio: pureza y una devoción tranquila.",
    buenasNoches: "Buenas noches. Que tu descanso sea tan sereno como hoy quise que fuera el día.",
    notaImagen: "[PARA TI] una foto de lirios, o algo en tonos blancos/crema.",
    notaCancion: "[PARA TI] algo instrumental, tranquilo."
  },

  {
    dia: 8,
    categoria: "Anticipación",
    icono: "💋",
    tono: "hot",
    color: { principal: "#b3123f", suave: "#f2b3c4", oscuro: "#170209" },
    buenosDias: "Buenos días. Hoy amanecí pensando en tu boca, sin ninguna razón lógica, solo pasó.",
    poema: [
      "Hay besos que se piensan más de lo que se dan, y el que me debes lleva un rato viviendo en mi cabeza.",
      "No tengo apuro, pero cuando lo cobre, vas a saber exactamente por qué me tomé mi tiempo pensándolo."
    ],
    detalle: "Esto es una promesa, no una amenaza. Bueno, un poco de las dos.",
    buenasNoches: "Buenas noches, con ese beso pendiente todavía en deuda.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 9,
    categoria: "Spider-Man",
    icono: "🕷️",
    tono: "amor",
    color: { principal: "#e13a3a", suave: "#ffc9c9", oscuro: "#210a0a" },
    buenosDias: "Buenos días, mi persona. Hoy toca sentirse un poco invencibles.",
    poema: [
      "No necesito trepar paredes ni salvar ciudades: contigo ya me siento capaz de cualquier cosa, y eso también es una especie de superpoder.",
      "Eres la razón por la que quiero ser mejor todos los días."
    ],
    detalle: "Hoy, si algo se complica, recuerda que tienes un equipo: yo.",
    buenasNoches: "Buenas noches, superheroína. Mañana seguimos salvando el día juntos.",
    notaImagen: "[PARA TI] algo divertido, tipo cómic o Spider-Man.",
    notaCancion: "[PARA TI] algo con energía, para sentirse imparable."
  },

  {
    dia: 10,
    categoria: "Morado",
    icono: "💜",
    tono: "amor",
    color: { principal: "#7b4fd1", suave: "#dccafc", oscuro: "#160a2b" },
    buenosDias: "Buenos días. Sé que el morado es tuyo, así que hoy el día también lo es.",
    poema: [
      "El morado mezcla la calma del azul con la fuerza del rojo, y de alguna forma me recuerdas a esa mezcla exacta.",
      "Tranquila casi siempre, pero con un fuego que no se apaga cuando de verdad quieres algo."
    ],
    detalle: "Hoy, si puedes, usa algo morado. Aunque sea sin razón.",
    buenasNoches: "Buenas noches. Que sueñes en tu color favorito.",
    notaImagen: "[PARA TI] algo morado que te guste, ropa, flores, lo que sea.",
    notaCancion: "[PARA TI] algo con ese mismo vibe: suave pero con carácter."
  },

  {
    dia: 11,
    categoria: "Piel",
    icono: "🕯️",
    tono: "hot",
    color: { principal: "#e0294f", suave: "#ffc9d6", oscuro: "#20050b" },
    buenosDias: "Buenos días. Hoy va directo, sin adornos: pienso en tu piel más de lo que debería para ser una mañana cualquiera.",
    poema: [
      "Me gusta imaginar cómo se sentiría el silencio entre los dos si estuviéramos cerca ahora mismo, sin necesidad de decir nada.",
      "A veces lo que más se desea no se dice, se deja ahí, esperando el momento correcto."
    ],
    detalle: "Cuando nos veamos, no prometo comportarme.",
    buenasNoches: "Buenas noches, pensando en formas de acercarme más la próxima vez.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 12,
    categoria: "Peluches",
    icono: "🧸",
    tono: "amor",
    color: { principal: "#d9a066", suave: "#f5dfc0", oscuro: "#241708" },
    buenosDias: "Buenos días. Hoy es un día para lo que abraza sin pedir nada a cambio.",
    poema: [
      "Un peluche no promete nada y aun así, ahí está, siempre que lo necesitas.",
      "Quiero ser eso para ti también, algo a lo que puedas volver cuando el día se sienta pesado."
    ],
    detalle: "Si tienes un peluche favorito, dale un abrazo de mi parte hoy.",
    buenasNoches: "Buenas noches. Abraza fuerte lo que te haga sentir en casa.",
    notaImagen: "[PARA TI] una foto de su peluche favorito, si tiene uno.",
    notaCancion: "[PARA TI] algo tierno, de cuna casi, para dormir tranquila."
  },

  {
    dia: 13,
    categoria: "Gerbera",
    icono: "🌸",
    tono: "amor",
    color: { principal: "#ff8a3d", suave: "#ffd9b8", oscuro: "#2b1404" },
    buenosDias: "Buenos días, alegría. Hoy va dedicado a tu forma de iluminar todo lo que tocas.",
    poema: [
      "La gerbera es de las flores más alegres que existen, de colores que no piden permiso para destacar.",
      "Así eres tú: no necesitas esforzarte para alegrar un lugar, simplemente llegas y ya cambia todo."
    ],
    detalle: "Significado de la gerbera: alegría y optimismo.",
    buenasNoches: "Buenas noches. Que mañana sigas siendo esa luz sin siquiera intentarlo.",
    notaImagen: "[PARA TI] una foto de gerberas de colores.",
    notaCancion: "[PARA TI] algo alegre, para bailar en la cocina."
  },

  {
    dia: 14,
    categoria: "Vértigo",
    icono: "🌪️",
    tono: "filosofica",
    color: { principal: "#3a1f5c", suave: "#c9b8e6", oscuro: "#0c0716" },
    buenosDias: "Buenos días. Contigo aprendí que el amor también puede dar vértigo, y no me quejo.",
    poema: [
      "Hay amores que se sienten como un paseo tranquilo, y hay otros que se sienten como el borde de algo alto, con ganas de saltar de todas formas.",
      "El mío por ti es de los segundos, y elijo saltar cada vez."
    ],
    detalle: "Gracias por ser el tipo de vértigo que vale la pena sentir.",
    buenasNoches: "Buenas noches, todavía cayendo, sin querer detenerme.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 15,
    categoria: "Libros",
    icono: "📖",
    tono: "filosofica",
    color: { principal: "#6b2142", suave: "#e3b8c9", oscuro: "#180509" },
    buenosDias: "Buenos días, lectora. Hoy quiero escribirte algo que se sienta como esos libros que tanto te gustan.",
    poema: [
      "Si esto fuera una de esas novelas de romance oscuro que te encantan, este sería el capítulo donde el protagonista se da cuenta de que ya no hay vuelta atrás.",
      "Yo ya me di cuenta hace tiempo."
    ],
    detalle: "Algún día quiero que me recomiendes tu libro favorito y leerlo solo para entenderte un poco más.",
    buenasNoches: "Buenas noches. Que tus sueños tengan tramas tan buenas como las que lees.",
    notaImagen: "[PARA TI] una foto de su libro o saga favorita.",
    notaCancion: "[PARA TI] algo con atmósfera, tipo banda sonora de película."
  },

  {
    dia: 16,
    categoria: "Costumbre",
    icono: "☁️",
    tono: "amor",
    color: { principal: "#6fb1e0", suave: "#d6ecfb", oscuro: "#071522" },
    buenosDias: "Buenos días. Hoy quiero hablar de algo que no se nota mucho pero sostiene todo: la costumbre buena.",
    poema: [
      "Hay costumbres que aburren y hay costumbres que dan paz, y la de pensarte cada día es de las segundas.",
      "No quiero que esto deje de ser costumbre nunca."
    ],
    detalle: "Gracias por ser de las costumbres que no cansan.",
    buenasNoches: "Buenas noches, con la costumbre de pensarte intacta.",
    notaImagen: "[PARA TI] una foto de un cielo bonito, nubes, un atardecer.",
    notaCancion: "[PARA TI] algo soñador, tranquilo."
  },

  {
    dia: 17,
    categoria: "Calor",
    icono: "🌙",
    tono: "hot",
    color: { principal: "#a10e35", suave: "#f0aabd", oscuro: "#140208" },
    buenosDias: "Buenos días. Anoche no fue un sueño cualquiera, y prefiero no dar más detalles por mensaje.",
    poema: [
      "Hay una parte de mí que solo te muestro cuando estamos a solas, y hoy esa parte tiene ganas de salir a saludar.",
      "No te voy a decir todo lo que se me ocurrió, pero si me preguntas en persona, no me voy a hacer el difícil."
    ],
    detalle: "Pregúntame en persona qué soñé. No te vas a arrepentir.",
    buenasNoches: "Buenas noches, con ganas de que esta noche se repita, pero contigo de verdad ahí.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 18,
    categoria: "Rosa",
    icono: "🌹",
    tono: "amor",
    color: { principal: "#d81e3e", suave: "#ffc2ce", oscuro: "#2b0508" },
    buenosDias: "Buenos días, mi rosa. Hoy no hay vueltas ni indirectas, hoy es directo: te amo.",
    poema: [
      "Dicen que la rosa roja habla de un amor que no se guarda, uno que se dice de frente.",
      "El mío es ese: profundo, sin miedo, todo para ti."
    ],
    detalle: "Significado de la rosa roja: amor profundo y pasión verdadera.",
    buenasNoches: "Buenas noches, sin filtros, sin miedo, tuyo.",
    notaImagen: "[PARA TI] una foto de rosas rojas.",
    notaCancion: "[PARA TI] algo romántico, de esas clásicas de amor."
  },

  {
    dia: 19,
    categoria: "Dorado",
    icono: "✨",
    tono: "amor",
    color: { principal: "#d4af37", suave: "#f7e8b0", oscuro: "#241c04" },
    buenosDias: "Buenos días, team dorado. Hoy el día se viste de tu color favorito.",
    poema: [
      "El dorado no se apaga fácil, brilla incluso con poca luz.",
      "Así eres tú, incluso en los días grises encuentras la forma de brillar un poco."
    ],
    detalle: "Hoy, si puedes, ponte algo dorado. Sé que te encanta.",
    buenasNoches: "Buenas noches, que sigas brillando hasta en sueños.",
    notaImagen: "[PARA TI] algo dorado que le guste: joyería, ropa, detalles.",
    notaCancion: "[PARA TI] algo con brillo, animado."
  },

  {
    dia: 20,
    categoria: "Cerca",
    icono: "🔥",
    tono: "hot",
    color: { principal: "#d1163f", suave: "#f7bccb", oscuro: "#1c0409" },
    buenosDias: "Buenos días. Hoy quiero estar cerca tuyo de una forma que no cabe en un mensaje de texto.",
    poema: [
      "Hay una distancia entre los dos que últimamente se siente más larga de lo normal, y no hablo solo de kilómetros.",
      "Cuando estemos cerca otra vez, no voy a tener ninguna prisa por soltarte."
    ],
    detalle: "Cuenta los días conmigo para la próxima vez que estemos juntos, en serio.",
    buenasNoches: "Buenas noches, deseando que la distancia se acorte pronto, en todos los sentidos.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 21,
    categoria: "Antes de ti",
    icono: "🐱",
    tono: "amor",
    color: { principal: "#ff9ecb", suave: "#ffe6f2", oscuro: "#33091c" },
    buenosDias: "Buenos días. A veces pienso en cómo era mi rutina antes de ti, y ya casi ni la recuerdo bien.",
    poema: [
      "Hay un antes y un después marcado por ti, aunque no haya sido un momento exacto, sino una acumulación de días.",
      "Prefiero el después, sin dudarlo."
    ],
    detalle: "Gracias por cambiar el antes por algo mejor.",
    buenasNoches: "Buenas noches, en la mejor versión de mis días: la de después de ti.",
    notaImagen: "[PARA TI] algo tierno de Hello Kitty o similar.",
    notaCancion: "[PARA TI] algo dulce y liviano."
  },

  {
    dia: 22,
    categoria: "Tulipán",
    icono: "🌷",
    tono: "amor",
    color: { principal: "#b16fd1", suave: "#ecd6ff", oscuro: "#1c0a26" },
    buenosDias: "Buenos días. Hoy quiero decirte que no hay nadie como tú, literal.",
    poema: [
      "El tulipán morado se regala cuando alguien quiere decir «no hay nadie como tú», y eso es justo lo que pienso cada vez que te veo.",
      "No busco comparaciones porque simplemente no las hay."
    ],
    detalle: "Significado del tulipán morado: admiración y un amor único.",
    buenasNoches: "Buenas noches, única. Así, sin punto de comparación.",
    notaImagen: "[PARA TI] una foto de tulipanes morados.",
    notaCancion: "[PARA TI] algo bonito, sin prisa."
  },

  {
    dia: 23,
    categoria: "Cicatriz",
    icono: "🩹",
    tono: "filosofica",
    color: { principal: "#6b2142", suave: "#e3b8c9", oscuro: "#180509" },
    buenosDias: "Buenos días. No vengo a prometerte un amor perfecto, vengo a prometerte uno real.",
    poema: [
      "Voy a fallar a veces. Voy a decir cosas mal, voy a necesitar aprender cosas que todavía no sé.",
      "Pero lo que siento por ti no tiene nada de fallido, eso lo tengo claro incluso en mis peores días."
    ],
    detalle: "Prefiero un amor real, con errores, que uno perfecto de mentira.",
    buenasNoches: "Buenas noches, imperfecto pero seguro de esto.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 24,
    categoria: "Mar",
    icono: "🌊",
    tono: "filosofica",
    color: { principal: "#2ea3a3", suave: "#c3f0ee", oscuro: "#062020" },
    buenosDias: "Buenos días. Hoy pensé en ti y en el mar, no sé por qué siempre van juntos.",
    poema: [
      "Hay algo en el mar que se parece a ti: no siempre está tranquilo, pero siempre vuelve a calmarse.",
      "Y de todas formas, uno siempre quiere volver a verlo."
    ],
    detalle: "Cuando podamos, quiero llevarte a ver el mar y no hacer nada más que mirarlo contigo.",
    buenasNoches: "Buenas noches, que sueñes con olas tranquilas.",
    notaImagen: "[PARA TI] una foto de playa o mar que les guste.",
    notaCancion: "[PARA TI] algo costero, relajado, de esas para playa."
  },

  {
    dia: 25,
    categoria: "Compañía",
    icono: "🕸️",
    tono: "amor",
    color: { principal: "#3a6ea5", suave: "#c9dcf2", oscuro: "#081321" },
    buenosDias: "Buenos días. Hoy quiero hablar de algo que no siempre se valora lo suficiente: la buena compañía.",
    poema: [
      "Hay compañías que llenan un espacio y compañías que llenan un silencio, y la tuya hace las dos cosas.",
      "No cambio tu compañía por nada."
    ],
    detalle: "Gracias por ser tan buena compañía, hasta en los días callados.",
    buenasNoches: "Buenas noches, en buena compañía, aunque sea a la distancia.",
    notaImagen: "[PARA TI] algo de Spider-Man, o algo que los conecte a los dos.",
    notaCancion: "[PARA TI] algo con ritmo, entretenido."
  },

  {
    dia: 26,
    categoria: "Juego",
    icono: "😏",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días, traviesa. Hoy quiero jugar un poco contigo, aunque sea solo con palabras.",
    poema: [
      "Me gusta cómo te pones cuando te digo cosas que no esperabas leer tan temprano.",
      "Así que hoy no prometo comportarme, y tú tampoco tienes que hacerlo."
    ],
    detalle: "Contéstame algo atrevido hoy, si te animas.",
    buenasNoches: "Buenas noches, traviesa. Mañana seguimos jugando.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 27,
    categoria: "Presente",
    icono: "🍬",
    tono: "amor",
    color: { principal: "#a9713f", suave: "#ecd2ae", oscuro: "#20130a" },
    buenosDias: "Buenos días. Hoy quiero estar aquí, en este momento contigo, sin pensar en nada más.",
    poema: [
      "Me cuesta a veces estar solo presente, sin pensar en lo que sigue, pero contigo se me hace más fácil.",
      "Hoy elijo estar aquí, contigo, nada más."
    ],
    detalle: "Gracias por ayudarme a estar presente, sin tantas vueltas en la cabeza.",
    buenasNoches: "Buenas noches, presente, contigo, hasta el final del día.",
    notaImagen: "[PARA TI] otra foto de dulces, postres o algo así.",
    notaCancion: "[PARA TI] algo alegre y liviano."
  },

  {
    dia: 28,
    categoria: "Naturaleza",
    icono: "🌿",
    tono: "filosofica",
    color: { principal: "#4fa66b", suave: "#c8ecd4", oscuro: "#0a2013" },
    buenosDias: "Buenos días. Hoy quiero que salgas, aunque sea un rato, a ver algo verde.",
    poema: [
      "Me gusta cómo te pones cuando estás rodeada de naturaleza, como si el ruido de todo lo demás por fin se apagara.",
      "Quiero verte así más seguido."
    ],
    detalle: "Cuando podamos, busquemos un lugar con mucho verde y nos quedamos ahí sin apuro.",
    buenasNoches: "Buenas noches, que descanses como se descansa después de un buen paseo.",
    notaImagen: "[PARA TI] una foto de un paisaje natural que les guste.",
    notaCancion: "[PARA TI] algo acústico, tranquilo."
  },

  {
    dia: 29,
    categoria: "Fuego",
    icono: "🔥",
    tono: "hot",
    color: { principal: "#b3123f", suave: "#f2b3c4", oscuro: "#170209" },
    buenosDias: "Buenos días. Hoy el mensaje viene con más temperatura que de costumbre.",
    poema: [
      "Hay conversaciones que empiezan tranquilas y terminan en otro lugar completamente distinto, y contigo eso pasa más seguido de lo que admito.",
      "No me quejo, para nada."
    ],
    detalle: "Si el chat se pone interesante más tarde, no voy a ser yo quien lo frene.",
    buenasNoches: "Buenas noches, con la temperatura todavía un poco alta.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 30,
    categoria: "Lavanda",
    icono: "💐",
    tono: "amor",
    color: { principal: "#9b7fd4", suave: "#e3d9fb", oscuro: "#160c26" },
    buenosDias: "Buenos días, calma. Hoy quiero que el día se sienta tranquilo, como tú cuando estás en paz.",
    poema: [
      "La lavanda relaja con solo olerla, dicen que ayuda a soltar el día.",
      "Espero ser, aunque sea un poco, ese mismo efecto para ti."
    ],
    detalle: "Significado de la lavanda: calma, devoción y tranquilidad.",
    buenasNoches: "Buenas noches, que sueltes el día completo antes de dormir.",
    notaImagen: "[PARA TI] una foto de lavanda o algo en tonos morados suaves.",
    notaCancion: "[PARA TI] algo instrumental, para relajarse."
  },

  {
    dia: 31,
    categoria: "Manos",
    icono: "📖",
    tono: "amor",
    color: { principal: "#e0a63d", suave: "#ffe3b0", oscuro: "#241a04" },
    buenosDias: "Buenos días. Hoy pensé en tus manos, en lo fácil que se siente cuando están cerca de las mías.",
    poema: [
      "Hay manos que solo sostienen, y hay manos que además sostienen a la persona completa.",
      "Las tuyas hacen las dos cosas."
    ],
    detalle: "La próxima vez que estemos cerca, no sueltes tan rápido.",
    buenasNoches: "Buenas noches, con ganas de tenerte cerca de nuevo.",
    notaImagen: "[PARA TI] algo de cómics o historietas que le gusten.",
    notaCancion: "[PARA TI] algo nostálgico, de esas que dan ternura."
  },

  {
    dia: 32,
    categoria: "Incendio",
    icono: "🔥",
    tono: "filosofica",
    color: { principal: "#4a1830", suave: "#d9a7bd", oscuro: "#120206" },
    buenosDias: "Buenos días. Hay formas de querer que queman despacio, y la mía por ti es una de esas.",
    poema: [
      "No fue un incendio rápido, fue una brasa que se quedó ahí, calentando todo poco a poco hasta que ya no hubo forma de apagarla.",
      "Y honestamente, ya ni quiero que se apague."
    ],
    detalle: "Sigues siendo el fuego más constante que he tenido.",
    buenasNoches: "Buenas noches, con la brasa todavía encendida.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 33,
    categoria: "Margarita",
    icono: "🌼",
    tono: "amor",
    color: { principal: "#f2e94e", suave: "#faf6cf", oscuro: "#141a08" },
    buenosDias: "Buenos días. Hoy va dedicado a lo simple, que casi siempre es lo mejor.",
    poema: [
      "La margarita no necesita ser la flor más llamativa para ser de las más queridas, y tú tienes eso: una forma sencilla y honesta de hacerme feliz.",
      "Contigo hasta los días normales se sienten como una buena noticia."
    ],
    detalle: "Significado de la margarita: ternura, alegría simple y lealtad.",
    buenasNoches: "Buenas noches, feliz a tu lado, como siempre.",
    notaImagen: "[PARA TI] una foto de margaritas.",
    notaCancion: "[PARA TI] algo simple y bonito, sin mucha producción."
  },

  {
    dia: 34,
    categoria: "Arte",
    icono: "🎨",
    tono: "filosofica",
    color: { principal: "#e0a63d", suave: "#ffe3b0", oscuro: "#241a04" },
    buenosDias: "Buenos días, artista. Hoy quiero hablarte de lo que me gusta de cómo ves el mundo.",
    poema: [
      "Hay gente que mira un lugar y solo ve un lugar. Tú miras un lugar y ves color, composición, una historia.",
      "Me gusta ver el mundo un poco a través de tus ojos."
    ],
    detalle: "Cuéntame algún día cuál es la obra o el artista que más te ha movido.",
    buenasNoches: "Buenas noches, que tu mente siga pintando cosas bonitas mientras duermes.",
    notaImagen: "[PARA TI] una foto de una obra de arte que le guste, o de ella creando algo.",
    notaCancion: "[PARA TI] algo artístico, con textura, tipo lo-fi o clásico."
  },

  {
    dia: 35,
    categoria: "Susurro",
    icono: "🌹",
    tono: "hot",
    color: { principal: "#e0294f", suave: "#ffc9d6", oscuro: "#20050b" },
    buenosDias: "Buenos días. Hoy quiero susurrarte algo, aunque sea por escrito.",
    poema: [
      "Hay cosas que solo se dicen bajito, casi al oído, y hoy tengo varias de esas guardadas para ti.",
      "Cuando estemos cerca te las digo todas, una por una, sin apuro."
    ],
    detalle: "Prepárate, tengo una lista mental que se está haciendo larga.",
    buenasNoches: "Buenas noches, con un susurro pendiente todavía.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 36,
    categoria: "Silencio bonito",
    icono: "🖤",
    tono: "filosofica",
    color: { principal: "#4a1830", suave: "#d9a7bd", oscuro: "#120206" },
    buenosDias: "Buenos días. Hoy no tengo mucho que decir, y aun así quería escribirte, aunque sea poco.",
    poema: [
      "Hay silencios que incomodan y hay silencios que se sienten completos, y los que tengo contigo son de los segundos.",
      "No siempre hace falta llenar todo con palabras."
    ],
    detalle: "Gracias por los silencios cómodos que hemos tenido.",
    buenasNoches: "Buenas noches, en un silencio bonito, pensando en ti.",
    notaImagen: "[PARA TI] otra foto de sus libros o de una biblioteca bonita.",
    notaCancion: "[PARA TI] algo con más intensidad, tipo banda sonora dramática."
  },

  {
    dia: 37,
    categoria: "Confianza",
    icono: "☀️",
    tono: "amor",
    color: { principal: "#f2b705", suave: "#fff0b3", oscuro: "#251c02" },
    buenosDias: "Buenos días. Hoy quiero hablar de algo que se construye despacio: la confianza.",
    poema: [
      "No es fácil confiar así, completo, sin reservas, y contigo se me ha hecho más fácil de lo que esperaba.",
      "Gracias por cuidar esa confianza."
    ],
    detalle: "Prometo seguir cuidando la tuya también.",
    buenasNoches: "Buenas noches, tranquilo, confiando en esto que construimos.",
    notaImagen: "[PARA TI] una foto de ustedes dos, si ya tienen alguna.",
    notaCancion: "[PARA TI] algo especial, tal vez la primera canción que asocien a los dos."
  },

  {
    dia: 38,
    categoria: "Tentación",
    icono: "🍷",
    tono: "hot",
    color: { principal: "#a10e35", suave: "#f0aabd", oscuro: "#140208" },
    buenosDias: "Buenos días. Hoy vengo con ganas de tentarte un poco, nada más.",
    poema: [
      "No sé si es la falta de verte o las ganas normales de siempre, pero hoy pienso en ti de una forma bastante poco inocente.",
      "No me disculpo por eso."
    ],
    detalle: "Dime qué se te ocurre a ti hoy, quiero saber.",
    buenasNoches: "Buenas noches, con la tentación todavía despierta.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 39,
    categoria: "Comodidad",
    icono: "🧶",
    tono: "amor",
    color: { principal: "#7d8fa6", suave: "#dbe4ee", oscuro: "#131a22" },
    buenosDias: "Buenos días. Hoy es de esos días para quedarse cómoda, sin apuro.",
    poema: [
      "Hay días que piden buzo, medias gruesas y no hacer nada productivo.",
      "Ojalá hoy sea uno de esos para ti, y ojalá algún día podamos tener uno así juntos."
    ],
    detalle: "Si hoy te pones tu buzo favorito, cuenta que es un abrazo mío disfrazado de tela.",
    buenasNoches: "Buenas noches, calientita y tranquila.",
    notaImagen: "[PARA TI] una foto de un día cómodo, de esos de pijama y sofá.",
    notaCancion: "[PARA TI] algo suave, para no hacer nada de fondo."
  },

  {
    dia: 40,
    categoria: "Elegirte",
    icono: "🩷",
    tono: "amor",
    color: { principal: "#ff6fa8", suave: "#ffd7e6", oscuro: "#3a0f24" },
    buenosDias: "Buenos días. Hoy vuelvo a elegirte, como todos los días, aunque no siempre lo diga en voz alta.",
    poema: [
      "El amor no es solo un momento en que decides, es algo que se repite, día tras día, sin que nadie lo note.",
      "Hoy también te elijo, otra vez."
    ],
    detalle: "Voy a seguir eligiéndote, un día a la vez.",
    buenasNoches: "Buenas noches, elegida otra vez hoy, sin dudarlo.",
    notaImagen: "[PARA TI] algo tierno, tipo Hello Kitty otra vez, ella se lo merece.",
    notaCancion: "[PARA TI] algo cálido, de compañía."
  },

  {
    dia: 41,
    categoria: "Gravedad",
    icono: "🌌",
    tono: "filosofica",
    color: { principal: "#43225c", suave: "#cdb8e8", oscuro: "#0d0716" },
    buenosDias: "Buenos días. Todo lo importante cae hacia lo que ama, y yo aprendí a caer hacia ti sin miedo a estrellarme.",
    poema: [
      "Tu gravedad es la única que me sostiene en los días en que todo pesa más de la cuenta.",
      "No necesito otro centro si contigo ya encontré el mío."
    ],
    detalle: "Gracias por sostenerme, incluso sin saber que lo hacías.",
    buenasNoches: "Buenas noches, orbitando cerca de ti, como siempre.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 42,
    categoria: "Orquídea",
    icono: "🌺",
    tono: "filosofica",
    color: { principal: "#d94fb0", suave: "#ffd6f0", oscuro: "#26071c" },
    buenosDias: "Buenos días, elegancia. Hoy va dedicado a lo especial que eres, sin que tengas que esforzarte.",
    poema: [
      "La orquídea tiene fama de ser difícil de cuidar, pero cuando florece, no hay flor que se compare.",
      "Vale la pena todo el cuidado, contigo pasa lo mismo: vale la pena cada intento."
    ],
    detalle: "Significado de la orquídea: belleza refinada y fuerza.",
    buenasNoches: "Buenas noches, mi flor difícil y hermosa.",
    notaImagen: "[PARA TI] una foto de orquídeas.",
    notaCancion: "[PARA TI] algo elegante, tipo jazz suave o bolero."
  },

  {
    dia: 43,
    categoria: "Vistas",
    icono: "🏞️",
    tono: "filosofica",
    color: { principal: "#5c7d99", suave: "#d4e3ee", oscuro: "#0d1a24" },
    buenosDias: "Buenos días. Hoy pensé en esos lugares tranquilos con vista bonita que tanto te gustan.",
    poema: [
      "Me gusta que te guste la soledad bonita, esos lugares donde no hay ruido pero sí mucho para ver.",
      "Quiero encontrar esos lugares contigo, aunque sea en silencio, aunque sea sin decir nada."
    ],
    detalle: "Hagamos una lista de lugares con buena vista para ir conociendo juntos.",
    buenasNoches: "Buenas noches, que tu mente viaje a algún lugar tranquilo.",
    notaImagen: "[PARA TI] una foto de un mirador o paisaje que le guste.",
    notaCancion: "[PARA TI] algo ambiental, de esas para contemplar."
  },

  {
    dia: 44,
    categoria: "Cercanía",
    icono: "💫",
    tono: "hot",
    color: { principal: "#d1163f", suave: "#f7bccb", oscuro: "#1c0409" },
    buenosDias: "Buenos días. Hoy solo quiero estar pegado a ti, literal, sin espacio de por medio.",
    poema: [
      "Hay una forma de abrazar que no es solo cariño, también es ganas, y hoy tengo de las dos.",
      "Cuando te vea, prepárate para que no te suelte tan rápido."
    ],
    detalle: "Aparta tiempo para mí la próxima vez que nos veamos, en serio, todo el tiempo que puedas.",
    buenasNoches: "Buenas noches, contando los días para estar cerca de nuevo.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 45,
    categoria: "Calma compartida",
    icono: "🦸‍♀️",
    tono: "amor",
    color: { principal: "#e13a3a", suave: "#ffc9c9", oscuro: "#210a0a" },
    buenosDias: "Buenos días. Contigo aprendí que la calma también se comparte, no solo se busca a solas.",
    poema: [
      "Hay una calma que llega cuando hablo contigo, distinta a cualquier otra que haya sentido.",
      "Gracias por prestarme un poco de la tuya en mis días difíciles."
    ],
    detalle: "Espero también poder prestarte calma cuando la necesites.",
    buenasNoches: "Buenas noches, en calma, gracias a ti.",
    notaImagen: "[PARA TI] una foto de ustedes dos, o algo que represente trabajo en equipo.",
    notaCancion: "[PARA TI] algo motivador, con energía."
  },

  {
    dia: 46,
    categoria: "Hogar compartido",
    icono: "🥀",
    tono: "amor",
    color: { principal: "#b3123a", suave: "#f5b8c6", oscuro: "#240309" },
    buenosDias: "Buenos días. Hoy quiero hablar de hogar, del que se construye con una persona, no con paredes.",
    poema: [
      "No necesito una dirección para sentirme en casa, me basta con hablar contigo.",
      "Quiero seguir construyendo ese hogar, sin importar dónde estemos cada uno."
    ],
    detalle: "Gracias por ser mi hogar, incluso a la distancia.",
    buenasNoches: "Buenas noches, en casa, como siempre contigo.",
    notaImagen: "[PARA TI] una foto de una rosa, quizás una un poco más silvestre.",
    notaCancion: "[PARA TI] algo con más sentimiento, profundo."
  },

  {
    dia: 47,
    categoria: "Química",
    icono: "⚡",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días. Hay algo entre los dos que no se explica del todo, y hoy quería nombrarlo.",
    poema: [
      "Le dicen química, pero se siente más como corriente: algo que se prende apenas estás cerca.",
      "No sé cómo funciona exactamente, solo sé que contigo nunca falla."
    ],
    detalle: "¿Sientes tú también esa corriente, o solo soy yo?",
    buenasNoches: "Buenas noches, todavía con la corriente encendida.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 48,
    categoria: "Salchipapa",
    icono: "🍟",
    tono: "amor",
    color: { principal: "#e0632f", suave: "#ffcfa8", oscuro: "#2b1103" },
    buenosDias: "Buenos días. Hoy es un día sin filosofía, solo antojo.",
    poema: [
      "No todo tiene que ser poesía profunda: a veces el amor también es acordarse de que te encanta una buena salchipapa.",
      "Así que hoy: antojo libre, sin culpa."
    ],
    detalle: "Anótalo: te debo una salchipapa en persona, cuando quieras cobrarla.",
    buenasNoches: "Buenas noches, satisfecha y sin remordimientos.",
    notaImagen: "[PARA TI] una foto de su comida favorita o de un antojo compartido.",
    notaCancion: "[PARA TI] algo divertido, para cocinar o pedir domicilio con buena música."
  },

  {
    dia: 49,
    categoria: "Películas",
    icono: "🎬",
    tono: "amor",
    color: { principal: "#c22b2b", suave: "#f3b3b3", oscuro: "#1a0505" },
    buenosDias: "Buenos días. Hoy quiero proponerte una noche de películas, aunque sea en la imaginación por ahora.",
    poema: [
      "Me gusta cómo te emocionas con las películas de amor, cómo te ríes con las comedias y cómo te quedas pensando después de un drama.",
      "Quiero ser parte de esas maratones, con palomitas y todo."
    ],
    detalle: "Hagamos una lista de películas pendientes para ver juntos.",
    buenasNoches: "Buenas noches, que tengas sueños con final feliz.",
    notaImagen: "[PARA TI] una foto de una noche de películas, o del póster de alguna que le guste.",
    notaCancion: "[PARA TI] alguna banda sonora que le guste."
  },

  {
    dia: 50,
    categoria: "Herida bonita",
    icono: "🥀",
    tono: "filosofica",
    color: { principal: "#5c1f3d", suave: "#d9a7bd", oscuro: "#12040a" },
    buenosDias: "Buenos días. Hay amores que sanan y amores que remueven, y el tuyo hace las dos cosas a la vez.",
    poema: [
      "Me has hecho ver partes de mí que no sabía que existían, algunas bonitas, otras incómodas, todas necesarias.",
      "No todo lo que ayuda a crecer se siente cómodo, y aun así, elijo quedarme."
    ],
    detalle: "Gracias por remover lo que había que remover.",
    buenasNoches: "Buenas noches, más entero de lo que estaba antes de ti.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 51,
    categoria: "Lo simple",
    icono: "🐻",
    tono: "amor",
    color: { principal: "#c98a4f", suave: "#f0d8b8", oscuro: "#20140a" },
    buenosDias: "Buenos días. Hoy va dedicado, otra vez, a lo simple: lo que no necesita explicación para sentirse bien.",
    poema: [
      "Contigo lo simple no se siente poco, se siente suficiente.",
      "Prefiero mil días simples contigo que uno complicado sin ti."
    ],
    detalle: "Gracias por hacer que lo simple alcance.",
    buenasNoches: "Buenas noches, simple y tranquilo, como me gusta terminar el día.",
    notaImagen: "[PARA TI] otra foto tierna, tal vez de algún peluche que le quieras regalar.",
    notaCancion: "[PARA TI] algo tierno y calmado."
  },

  {
    dia: 52,
    categoria: "Flor de cerezo",
    icono: "🌸",
    tono: "amor",
    color: { principal: "#ffb7c5", suave: "#ffe9ee", oscuro: "#2a0f14" },
    buenosDias: "Buenos días, delicadeza. Hoy va dedicado a lo bonito que dura poco pero se disfruta completo.",
    poema: [
      "La flor de cerezo no dura mucho, y aun así la gente viaja solo para verla florecer.",
      "Quiero aprender a disfrutar así cada momento contigo, sin esperar a que dure para siempre para valorarlo."
    ],
    detalle: "Significado de la flor de cerezo: belleza efímera y vivir el presente.",
    buenasNoches: "Buenas noches, gracias por este momento, sea corto o largo.",
    notaImagen: "[PARA TI] una foto de flores de cerezo o de árboles floreciendo.",
    notaCancion: "[PARA TI] algo delicado, tipo piano suave."
  },

  {
    dia: 53,
    categoria: "Antojo",
    icono: "🍓",
    tono: "hot",
    color: { principal: "#b3123f", suave: "#f2b3c4", oscuro: "#170209" },
    buenosDias: "Buenos días. Hoy tengo antojo de ti, de esos que no se quitan con nada más.",
    poema: [
      "Hay antojos que se calman con comida, y hay otros que solo se calman contigo cerca.",
      "Hoy es de los segundos, y no tengo intención de disimularlo."
    ],
    detalle: "Anótalo: te debo consentirte como te mereces, con calma y sin apuro.",
    buenasNoches: "Buenas noches, con el antojo todavía intacto.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 54,
    categoria: "Aprender de ti",
    icono: "🏆",
    tono: "amor",
    color: { principal: "#c9a227", suave: "#f4e2a0", oscuro: "#201803" },
    buenosDias: "Buenos días. Hoy quiero reconocer todo lo que he aprendido de ti sin que te dieras cuenta.",
    poema: [
      "Me enseñaste cosas que no estaban en ningún plan, solo pasó, viéndote manejar la vida a tu manera.",
      "Gracias por ser, sin proponértelo, una de mis mejores enseñanzas."
    ],
    detalle: "Sigo aprendiendo de ti cada día, y no me molesta para nada.",
    buenasNoches: "Buenas noches, un poco más sabio gracias a ti.",
    notaImagen: "[PARA TI] una foto de algún logro suyo del que esté orgullosa.",
    notaCancion: "[PARA TI] algo motivador o triunfal."
  },

  {
    dia: 55,
    categoria: "Música",
    icono: "🎶",
    tono: "amor",
    color: { principal: "#c23fd1", suave: "#f2c9ff", oscuro: "#210a26" },
    buenosDias: "Buenos días. Hoy va dedicado a lo que suena cuando nadie más está mirando.",
    poema: [
      "Me gusta la idea de tener canciones que ya son solo nuestras, esas que apenas suenan y ya piensas en el otro.",
      "Vamos armando esa lista, poco a poco."
    ],
    detalle: "Revisa el botón de música: ahí te voy dejando canciones que me hacen pensar en ti.",
    buenasNoches: "Buenas noches, que la última canción que escuches hoy sea una bonita.",
    notaImagen: "[PARA TI] una foto de algún concierto o momento musical juntos.",
    notaCancion: "[PARA TI] la canción que sientan que ya es 'de los dos'."
  },

  {
    dia: 56,
    categoria: "Roce",
    icono: "🌶️",
    tono: "hot",
    color: { principal: "#e0294f", suave: "#ffc9d6", oscuro: "#20050b" },
    buenosDias: "Buenos días. Hoy quería mandarte algo que te hiciera sonreír de esa forma pícara que se te sale a veces.",
    poema: [
      "Hay una sonrisa tuya que aparece solo cuando sabes que estoy pensando en ti de cierta forma, y hoy la quiero provocar.",
      "Si funcionó, avísame."
    ],
    detalle: "¿Ya se te salió la sonrisa pícara? Esa es la idea.",
    buenasNoches: "Buenas noches, con esa sonrisa todavía en la cabeza.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 57,
    categoria: "Elegancia",
    icono: "👗",
    tono: "amor",
    color: { principal: "#2f6d6b", suave: "#bfe3e0", oscuro: "#08191a" },
    buenosDias: "Buenos días, elegancia. Hoy va dedicado a esos días en que te arreglas y el mundo se detiene un segundo.",
    poema: [
      "Sé que te encantan los vestidos largos, esos que se sienten como una ocasión especial incluso en un día cualquiera.",
      "Ojalá pronto tengamos una excusa para que te pongas uno y yo solo pueda mirarte."
    ],
    detalle: "Avísame cuando tengamos ese plan elegante pendiente, ya quiero verlo.",
    buenasNoches: "Buenas noches, elegante hasta en sueños.",
    notaImagen: "[PARA TI] una foto suya arreglada, si tiene alguna que le guste.",
    notaCancion: "[PARA TI] algo elegante, tipo una balada especial."
  },

  {
    dia: 58,
    categoria: "Escucha",
    icono: "📚",
    tono: "filosofica",
    color: { principal: "#6b2142", suave: "#e3b8c9", oscuro: "#180509" },
    buenosDias: "Buenos días. Hoy quiero agradecerte por escucharme, incluso cuando no tengo mucho interesante que decir.",
    poema: [
      "No siempre se valora lo suficiente a alguien que escucha de verdad, sin esperar su turno para hablar.",
      "Tú lo haces, y no pasa desapercibido para mí."
    ],
    detalle: "Gracias por escucharme, de verdad, no solo por oírme.",
    buenasNoches: "Buenas noches, agradecido por sentirme escuchado hoy.",
    notaImagen: "[PARA TI] una foto de su estante de libros o de su lectura actual.",
    notaCancion: "[PARA TI] algo con atmósfera de historia, cinematográfico."
  },

  {
    dia: 59,
    categoria: "Obsesión bonita",
    icono: "🖤",
    tono: "filosofica",
    color: { principal: "#3a1f5c", suave: "#c9b8e6", oscuro: "#0c0716" },
    buenosDias: "Buenos días. Voy a ser honesto: pienso en ti más de lo que es sano admitir.",
    poema: [
      "No es una obsesión de las que dañan, es de las otras, de las que te hacen mejor persona sin que te des cuenta.",
      "Pienso en ti al despertar, y eso, lejos de cansarme, es de las pocas certezas que tengo."
    ],
    detalle: "No pienso pedir disculpas por pensar tanto en ti.",
    buenasNoches: "Buenas noches, todavía pensando en ti, como toda la mañana.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 60,
    categoria: "Espera",
    icono: "🕊️",
    tono: "filosofica",
    color: { principal: "#c7bfe0", suave: "#f1eefb", oscuro: "#161425" },
    buenosDias: "Buenos días. Hoy quiero hablar de la espera, de lo que se construye mientras se espera algo bueno.",
    poema: [
      "No todas las esperas se sienten iguales, y la de estar cerca de ti otra vez se siente distinta, más liviana.",
      "Sé esperar cuando sé que al final vale la pena."
    ],
    detalle: "Gracias por hacer que valga la pena esperar.",
    buenasNoches: "Buenas noches, esperando con calma lo que sigue.",
    notaImagen: "[PARA TI] una foto de lirios o algo en tonos claros y suaves.",
    notaCancion: "[PARA TI] algo minimalista, tipo piano o guitarra sola."
  },

  {
    dia: 61,
    categoria: "Introspección",
    icono: "🍃",
    tono: "filosofica",
    color: { principal: "#3f8f5f", suave: "#c0e8cf", oscuro: "#0a1f11" },
    buenosDias: "Buenos días. Hoy amanecí más callado de lo normal, pensando en nosotros de una forma distinta.",
    poema: [
      "A veces pienso en todo lo que ha cambiado desde que empezamos esto, y no logro encontrar nada de qué arrepentirme.",
      "Eso, para mí, ya dice bastante."
    ],
    detalle: "Gracias por ser parte de mis pensamientos más tranquilos, no solo de los emocionados.",
    buenasNoches: "Buenas noches, en calma, pensando en lo bien que va esto.",
    notaImagen: "[PARA TI] otra foto de naturaleza, quizás de algún viaje o caminata.",
    notaCancion: "[PARA TI] algo orgánico, con sonidos naturales de fondo."
  },

  {
    dia: 62,
    categoria: "Manía",
    icono: "🖤",
    tono: "hot",
    color: { principal: "#a10e35", suave: "#f0aabd", oscuro: "#140208" },
    buenosDias: "Buenos días. Tengo una manía nueva: pensarte en momentos que no debería, tipo en medio de una reunión aburrida.",
    poema: [
      "No es normal pensar tanto en alguien en momentos tan random, y aun así no puedo evitarlo contigo.",
      "Considérate oficialmente mi manía favorita."
    ],
    detalle: "Si me ves distraído un día de estos, ya sabes por qué.",
    buenasNoches: "Buenas noches, todavía con la manía activa.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 63,
    categoria: "Nuestro ritmo",
    icono: "🐚",
    tono: "filosofica",
    color: { principal: "#1d8f8f", suave: "#b9ecec", oscuro: "#041a1a" },
    buenosDias: "Buenos días. Cada relación tiene su propio ritmo, y me gusta el que hemos encontrado nosotros.",
    poema: [
      "No vamos ni muy rápido ni muy lento, vamos al ritmo que se siente correcto para los dos.",
      "Quiero que sigamos así, a nuestro paso, sin comparar con nadie más."
    ],
    detalle: "Gracias por construir este ritmo conmigo, sin apuros externos.",
    buenasNoches: "Buenas noches, al ritmo que se siente bien para los dos.",
    notaImagen: "[PARA TI] otra foto de playa o algo relacionado al mar.",
    notaCancion: "[PARA TI] algo con sonido de olas o ambiente costero."
  },

  {
    dia: 64,
    categoria: "Certezas",
    icono: "🔮",
    tono: "amor",
    color: { principal: "#8f5fd1", suave: "#e0d3fa", oscuro: "#160a2b" },
    buenosDias: "Buenos días. No tengo todas las respuestas de la vida, pero de ti sí tengo certeza.",
    poema: [
      "Hay pocas cosas de las que estoy completamente seguro, y una de esas es que quiero seguir aquí, contigo.",
      "Esa certeza no ha cambiado ni un solo día."
    ],
    detalle: "Eres de las pocas certezas que tengo, y no es poca cosa.",
    buenasNoches: "Buenas noches, seguro de esto, como siempre.",
    notaImagen: "[PARA TI] otra foto en morado, algo que le guste especialmente.",
    notaCancion: "[PARA TI] algo con más profundidad, atmosférico."
  },

  {
    dia: 65,
    categoria: "Complicidad",
    icono: "🔥",
    tono: "hot",
    color: { principal: "#d1163f", suave: "#f7bccb", oscuro: "#1c0409" },
    buenosDias: "Buenos días, cómplice. Hoy quiero recordarte que lo nuestro tiene de todo, también esto.",
    poema: [
      "Me gusta que podamos hablar bonito y también hablar así, sin que uno le quite validez al otro.",
      "Las dos partes son tuyas, las dos partes son reales."
    ],
    detalle: "Gracias por dejarme mostrarte también este lado.",
    buenasNoches: "Buenas noches, cómplice. Con ganas de las dos versiones de nosotros.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 66,
    categoria: "Cimientos",
    icono: "🖌️",
    tono: "filosofica",
    color: { principal: "#3f8fd1", suave: "#c9e2fa", oscuro: "#081b2b" },
    buenosDias: "Buenos días. Hoy pensé en los cimientos, en todo lo que no se ve pero sostiene lo que sí se ve.",
    poema: [
      "Las cosas bonitas de nosotros se notan, pero lo que más valoro es lo que no se ve: la confianza, el respeto, las ganas de seguir intentando.",
      "Esos son los cimientos que de verdad importan."
    ],
    detalle: "Gracias por ayudarme a construir cimientos fuertes, no solo cosas bonitas por fuera.",
    buenasNoches: "Buenas noches, sobre una base sólida, gracias a ti.",
    notaImagen: "[PARA TI] una foto de algún museo o arte que le guste.",
    notaCancion: "[PARA TI] algo elegante, ambiental."
  },

  {
    dia: 67,
    categoria: "Nosotros",
    icono: "🎉",
    tono: "amor",
    color: { principal: "#ff5d8f", suave: "#ffd7e6", oscuro: "#2a0f1c" },
    buenosDias: "Buenos días. Hoy llegamos al día 67, más de la mitad de este calendario de 134 días.",
    poema: [
      "Empezamos con un Snoopy y una promesa de acompañarte cada día, y aquí seguimos, bien pasada la mitad del camino.",
      "Gracias por leer cada uno de estos mensajes, por darle clic a cada corazón, por dejarme contarte de mil formas distintas lo mismo: que te amo.",
      "Todavía falta un buen tramo, y pienso hacerlo tan bonito como lo que ya llevamos."
    ],
    detalle: "Gracias por llegar hasta aquí. Vamos por 67 de 134, sigamos.",
    buenasNoches: "Buenas noches, a mitad de camino y con muchas ganas de seguir.",
    notaImagen: "[PARA TI] una foto bonita de los dos, para celebrar este punto medio.",
    notaCancion: "[PARA TI] una canción que sientas que representa lo que llevan hasta aquí."
  },

  {
    dia: 68,
    categoria: "Abrazo",
    icono: "🌼",
    tono: "amor",
    color: { principal: "#ff6f3d", suave: "#ffd0b8", oscuro: "#2b1104" },
    buenosDias: "Buenos días. Hoy quiero mandarte un abrazo, aunque sea de los que no se sienten físicamente.",
    poema: [
      "Hay abrazos que se dan con los brazos y abrazos que se dan con las palabras, y hoy te mando de los dos.",
      "Cuando nos veamos, te debo el físico también, y largo."
    ],
    detalle: "Considera este mensaje un abrazo apretado, de esos que no sueltan rápido.",
    buenasNoches: "Buenas noches, abrazada, aunque sea a la distancia.",
    notaImagen: "[PARA TI] otra foto de gerberas o flores de colores.",
    notaCancion: "[PARA TI] algo animado, para el buen ánimo."
  },

  {
    dia: 69,
    categoria: "Ritual",
    icono: "🔥",
    tono: "hot",
    color: { principal: "#d1163f", suave: "#f7bccb", oscuro: "#1c0409" },
    buenosDias: "Buenos días. Hoy quiero hablar de un ritual que me gustaría empezar contigo, uno un poco más íntimo que los demás.",
    poema: [
      "No hablo de rituales aburridos, hablo de los que solo existen cuando estamos los dos, a solas, sin prisa.",
      "Ya quiero que empecemos a construir esos rituales, en serio."
    ],
    detalle: "Piensa en cuál te gustaría que fuera nuestro primer ritual así. Yo ya tengo ideas.",
    buenasNoches: "Buenas noches, pensando en rituales pendientes.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 70,
    categoria: "Un día cualquiera",
    icono: "🍿",
    tono: "amor",
    color: { principal: "#a81f1f", suave: "#f0aeae", oscuro: "#160404" },
    buenosDias: "Buenos días. Hoy no es ninguna fecha especial, y aun así quería escribirte.",
    poema: [
      "Los días comunes también merecen mensajes bonitos, no solo los aniversarios.",
      "Este es uno de esos días comunes que quiero hacer especial solo por escribirte."
    ],
    detalle: "Feliz día cualquiera, contigo en la cabeza.",
    buenasNoches: "Buenas noches, en un día cualquiera que terminó siendo bonito.",
    notaImagen: "[PARA TI] otra foto o póster de alguna película favorita.",
    notaCancion: "[PARA TI] otra banda sonora que le guste."
  },

  {
    dia: 71,
    categoria: "Horizonte",
    icono: "🌄",
    tono: "filosofica",
    color: { principal: "#4f6d8f", suave: "#c9dcee", oscuro: "#0a1622" },
    buenosDias: "Buenos días. Hoy quiero mirar hacia adelante, hacia todo lo que todavía no hemos vivido.",
    poema: [
      "Me gusta imaginar el horizonte de esto: todo lo que falta por construir, por conocer, por vivir juntos.",
      "No tengo miedo de ese horizonte, al contrario, tengo ganas de llegar hasta allá contigo."
    ],
    detalle: "¿Qué hay en tu horizonte que te gustaría vivir conmigo? Cuéntame.",
    buenasNoches: "Buenas noches, mirando hacia un buen horizonte, contigo en el camino.",
    notaImagen: "[PARA TI] otra foto de un paisaje o mirador que le guste.",
    notaCancion: "[PARA TI] algo ambiental, para cerrar el día en calma."
  },

  {
    dia: 72,
    categoria: "Insomnio",
    icono: "🌙",
    tono: "filosofica",
    color: { principal: "#6b2142", suave: "#e3b8c9", oscuro: "#180509" },
    buenosDias: "Buenos días, aunque anoche casi no dormí pensando en nosotros.",
    poema: [
      "Hay noches en que el sueño pierde contra los pensamientos, y anoche tú ganaste esa pelea sin siquiera intentarlo.",
      "No me molesta perder horas de sueño si es pensando en construir algo contigo."
    ],
    detalle: "Espero que tú sí hayas dormido mejor que yo.",
    buenasNoches: "Buenas noches, esta vez sí, con la esperanza de soñarte tranquilo.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 73,
    categoria: "Puerto seguro",
    icono: "🎧",
    tono: "amor",
    color: { principal: "#9c3fc2", suave: "#e6c9ff", oscuro: "#1a0a26" },
    buenosDias: "Buenos días. Hoy quiero decirte que eres mi puerto seguro, el lugar al que siempre puedo volver.",
    poema: [
      "No importa qué tan movida esté el agua afuera, contigo siempre encuentro dónde anclar.",
      "Gracias por ser ese lugar seguro para mí."
    ],
    detalle: "Espero ser también tu puerto seguro cuando lo necesites.",
    buenasNoches: "Buenas noches, anclado en un buen lugar, gracias a ti.",
    notaImagen: "[PARA TI] otra foto relacionada a la música que compartan.",
    notaCancion: "[PARA TI] su canción favorita de todos los tiempos."
  },

  {
    dia: 74,
    categoria: "Segunda oportunidad",
    icono: "🌅",
    tono: "filosofica",
    color: { principal: "#2a8f8f", suave: "#b8ecec", oscuro: "#041a1a" },
    buenosDias: "Buenos días. Hoy pensé en lo importante que es saber dar segundas oportunidades, incluso en los detalles pequeños.",
    poema: [
      "Nadie hace todo bien siempre, y contigo he aprendido que perdonar lo pequeño también es una forma de cuidar lo que se tiene.",
      "Gracias por darme esas segundas oportunidades cuando las he necesitado."
    ],
    detalle: "Prometo seguir mereciéndomelas.",
    buenasNoches: "Buenas noches, agradecido por tu paciencia y tus segundas oportunidades.",
    notaImagen: "[PARA TI] otra foto de mar o atardecer.",
    notaCancion: "[PARA TI] algo especial, para ir cerrando el ciclo."
  },

  {
    dia: 75,
    categoria: "Impaciencia",
    icono: "⏱️",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días. Hoy no tengo paciencia para esperar a verte, y no lo voy a disimular.",
    poema: [
      "Hay días en que la distancia se siente como un detalle menor, y hay otros, como hoy, en que se siente eterna.",
      "Cuenta esto como una queja formal: te quiero cerca, ya."
    ],
    detalle: "Cuando nos veamos, no esperes que te salude tranquilo.",
    buenasNoches: "Buenas noches, con la impaciencia intacta para la próxima vez.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 76,
    categoria: "Peonía",
    icono: "🌸",
    tono: "filosofica",
    color: { principal: "#e0678f", suave: "#ffd3e2", oscuro: "#280914" },
    buenosDias: "Buenos días, mi peonía. Hoy quiero hablarte de lo que florece despacio pero se queda mucho tiempo.",
    poema: [
      "La peonía tarda en abrir, pero cuando lo hace, dura y se nota en cualquier lugar donde esté.",
      "Así ha sido esto contigo: nada apurado, pero cada vez más presente."
    ],
    detalle: "Significado de la peonía: amor duradero y buena fortuna.",
    buenasNoches: "Buenas noches, que sigas floreciendo a tu propio ritmo.",
    notaImagen: "[PARA TI] una foto de peonías.",
    notaCancion: "[PARA TI] algo suave, de las que duran en la memoria."
  },

  {
    dia: 77,
    categoria: "Aprendizaje",
    icono: "🎀",
    tono: "amor",
    color: { principal: "#ff6fa8", suave: "#ffd7e6", oscuro: "#3a0f24" },
    buenosDias: "Buenos días. Contigo he aprendido cosas que no sabía que me hacían falta aprender.",
    poema: [
      "No hablo de cosas grandes, hablo de detalles: paciencia, calma, la forma correcta de escuchar.",
      "Sigues siendo de mis mejores maestras, sin proponértelo."
    ],
    detalle: "Gracias por enseñarme sin intentarlo.",
    buenasNoches: "Buenas noches, todavía aprendiendo de ti, con gusto.",
    notaImagen: "[PARA TI] otra foto tierna, tipo Hello Kitty.",
    notaCancion: "[PARA TI] algo dulce y liviano."
  },

  {
    dia: 78,
    categoria: "Mirada",
    icono: "👀",
    tono: "hot",
    color: { principal: "#b3123f", suave: "#f2b3c4", oscuro: "#170209" },
    buenosDias: "Buenos días. Hay una forma en que me miras a veces que no debería tener el efecto que tiene en mí, y aun así lo tiene.",
    poema: [
      "No hace falta que digas nada, con esa mirada ya dices suficiente.",
      "Y yo, sin poder evitarlo, respondo exactamente como quieres que responda."
    ],
    detalle: "Sabes exactamente lo que haces con esa mirada. No te hagas la inocente.",
    buenasNoches: "Buenas noches, todavía pensando en esa mirada.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 79,
    categoria: "Café",
    icono: "☕",
    tono: "amor",
    color: { principal: "#a9784f", suave: "#eccfa0", oscuro: "#1f1206" },
    buenosDias: "Buenos días. Hoy quiero acompañarte, aunque sea de lejos, en tu primer café del día.",
    poema: [
      "Hay algo especial en esos primeros minutos del día, antes de que todo empiece a moverse rápido.",
      "Ojalá algún día podamos compartir ese momento en la misma mesa, en silencio, sin apuro."
    ],
    detalle: "Cuéntame cómo te gusta el café (o si prefieres té, también se vale).",
    buenasNoches: "Buenas noches, mañana hay otro café esperando.",
    notaImagen: "[PARA TI] una foto de un café o un desayuno bonito.",
    notaCancion: "[PARA TI] algo suave, para tomar café de fondo."
  },

  {
    dia: 80,
    categoria: "Crecer juntos",
    icono: "🦸",
    tono: "amor",
    color: { principal: "#3a6ea5", suave: "#c9dcf2", oscuro: "#081321" },
    buenosDias: "Buenos días. Hoy pensé en todo lo que hemos crecido, cada uno por su lado y también juntos.",
    poema: [
      "Me gusta la idea de que sigamos cambiando, y que ese cambio siga incluyéndonos a los dos.",
      "Quiero seguir creciendo contigo cerca, no lejos."
    ],
    detalle: "Gracias por crecer conmigo, aunque a veces duela un poco crecer.",
    buenasNoches: "Buenas noches, un poco más grande que ayer, gracias a ti.",
    notaImagen: "[PARA TI] algo que la haga sentir fuerte y orgullosa.",
    notaCancion: "[PARA TI] algo con energía, empoderador."
  },

  {
    dia: 81,
    categoria: "Verdad",
    icono: "🗝️",
    tono: "filosofica",
    color: { principal: "#4a1830", suave: "#d9a7bd", oscuro: "#120206" },
    buenosDias: "Buenos días. Hoy no hay metáfora, solo la verdad simple: eres lo mejor que me ha pasado en mucho tiempo.",
    poema: [
      "A veces la poesía sobra y lo único que hace falta es decir la verdad sin adornos.",
      "Y la verdad es que no me imagino explicando estos meses sin ti en el centro de la historia."
    ],
    detalle: "Gracias por ser, sin metáforas, lo mejor que tengo.",
    buenasNoches: "Buenas noches, con la verdad dicha, sin nada más que agregar.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 82,
    categoria: "Jazmín",
    icono: "🪷",
    tono: "filosofica",
    color: { principal: "#e7e0c9", suave: "#faf7ec", oscuro: "#1a170f" },
    buenosDias: "Buenos días. Hoy quiero que el día huela bonito, como esas noches de jazmín.",
    poema: [
      "El jazmín suelta su aroma más fuerte de noche, cuando parece que nadie está mirando.",
      "Me gusta pensar que tú también guardas tus mejores partes para los momentos tranquilos, cuando de verdad importa."
    ],
    detalle: "Significado del jazmín: amor puro y una calma bonita.",
    buenasNoches: "Buenas noches, que el aroma del día se quede en el recuerdo.",
    notaImagen: "[PARA TI] una foto de jazmines o flores blancas pequeñas.",
    notaCancion: "[PARA TI] algo tranquilo, para la noche."
  },

  {
    dia: 83,
    categoria: "Rutina",
    icono: "🐾",
    tono: "amor",
    color: { principal: "#f4c453", suave: "#fff0c9", oscuro: "#241a05" },
    buenosDias: "Buenos días. Ya somos parte de la rutina del otro, y eso, lejos de ser aburrido, se siente bien.",
    poema: [
      "No todo lo rutinario es malo: hay rutinas que en vez de cansar, sostienen.",
      "Ser parte de tu rutina es de las cosas que más quiero seguir siendo."
    ],
    detalle: "Espero seguir siendo parte de tus días normales, no solo de los especiales.",
    buenasNoches: "Buenas noches, hasta la próxima rutina compartida.",
    notaImagen: "[PARA TI] una foto de alguna salida o aventura chiquita que hayan tenido.",
    notaCancion: "[PARA TI] algo divertido, de esas para un paseo."
  },

  {
    dia: 84,
    categoria: "Secreto",
    icono: "🗝️",
    tono: "hot",
    color: { principal: "#e0294f", suave: "#ffc9d6", oscuro: "#20050b" },
    buenosDias: "Buenos días. Tengo un pensamiento de hoy que prefiero guardarme, al menos por ahora.",
    poema: [
      "Hay cosas que se disfrutan más cuando no se dicen todas de una vez, cuando se dejan ir soltando poco a poco.",
      "Este es uno de esos secretos: te lo cuento, pero solo si me lo ganas."
    ],
    detalle: "Gánatelo. Ya sabes cómo.",
    buenasNoches: "Buenas noches, con el secreto todavía guardado.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 85,
    categoria: "Recuerdos",
    icono: "📸",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. Hoy pensé en todo lo que quiero que quede guardado de nosotros.",
    poema: [
      "Me gusta la idea de ir guardando momentos, no solo fechas importantes, también los días comunes.",
      "Quiero que tengamos muchas fotos de cosas sin razón especial, solo porque sí."
    ],
    detalle: "Guarda hoy una foto de algo pequeño y bonito que veas, para nuestra colección.",
    buenasNoches: "Buenas noches, otro recuerdo más guardado.",
    notaImagen: "[PARA TI] una foto de ustedes dos o de un recuerdo bonito.",
    notaCancion: "[PARA TI] algo nostálgico."
  },

  {
    dia: 86,
    categoria: "Clavel",
    icono: "🌸",
    tono: "filosofica",
    color: { principal: "#d1476b", suave: "#ffc7d6", oscuro: "#230410" },
    buenosDias: "Buenos días. Hoy va dedicado a lo constante, como el clavel, que dura y dura.",
    poema: [
      "El clavel no es la flor de la que más se habla, pero es de las que más tiempo dura fresca.",
      "Así quiero que sea esto: no necesita ser ruidoso para ser real y durar."
    ],
    detalle: "Significado del clavel: admiración duradera.",
    buenasNoches: "Buenas noches, constante como un buen clavel.",
    notaImagen: "[PARA TI] una foto de claveles.",
    notaCancion: "[PARA TI] algo clásico, de esas que no pasan de moda."
  },

  {
    dia: 87,
    categoria: "Descontrol",
    icono: "💥",
    tono: "hot",
    color: { principal: "#a10e35", suave: "#f0aabd", oscuro: "#140208" },
    buenosDias: "Buenos días. Hoy admito que contigo pierdo un poco el control, y no me molesta para nada.",
    poema: [
      "Hay una versión mía más calculada, más tranquila, la que uso casi siempre.",
      "Y hay otra que solo aparece contigo, que actúa más por instinto que por plan. Hoy salió esa."
    ],
    detalle: "No pidas que me controle hoy, no va a pasar.",
    buenasNoches: "Buenas noches, todavía sin mucho control, la verdad.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 88,
    categoria: "Domingo cualquiera",
    icono: "🖤",
    tono: "filosofica",
    color: { principal: "#6b2142", suave: "#e3b8c9", oscuro: "#180509" },
    buenosDias: "Buenos días. Hoy quería que este mensaje se sintiera como un domingo tranquilo, sin agenda.",
    poema: [
      "Me gustan los días sin plan, esos donde lo único importante es estar bien, sin afán.",
      "Ojalá tengamos muchos domingos así, juntos, sin nada urgente que hacer."
    ],
    detalle: "Aprovecha hoy para no hacer nada importante, en el buen sentido.",
    buenasNoches: "Buenas noches, con la calma de un buen domingo.",
    notaImagen: "[PARA TI] una foto de su lectura actual.",
    notaCancion: "[PARA TI] algo con atmósfera, tipo banda sonora."
  },

  {
    dia: 89,
    categoria: "Risas",
    icono: "😂",
    tono: "amor",
    color: { principal: "#f2a33d", suave: "#ffe0b0", oscuro: "#241a04" },
    buenosDias: "Buenos días. Hoy no hay poesía seria, hoy toca reírse.",
    poema: [
      "Me encanta tu risa, en serio, es de mis sonidos favoritos en el mundo.",
      "Así que hoy la misión es simple: que te rías, aunque sea de algo tonto."
    ],
    detalle: "Mándame el meme o chiste más tonto que encuentres hoy.",
    buenasNoches: "Buenas noches, con la sonrisa todavía puesta, espero.",
    notaImagen: "[PARA TI] alguna foto graciosa de ustedes dos.",
    notaCancion: "[PARA TI] algo alegre, para el buen humor."
  },

  {
    dia: 90,
    categoria: "Tormenta",
    icono: "⛈️",
    tono: "filosofica",
    color: { principal: "#43225c", suave: "#cdb8e8", oscuro: "#0d0716" },
    buenosDias: "Buenos días. No todos los días son sol contigo, y aun así, hasta tus tormentas prefiero a la calma de otra persona.",
    poema: [
      "Prefiero discutir contigo y hacer las paces, que tener paz forzada con alguien más.",
      "Porque hasta en tormenta, sigues siendo el lugar al que quiero volver."
    ],
    detalle: "Gracias por pelear por esto también en los días difíciles.",
    buenasNoches: "Buenas noches, después de la tormenta, todavía aquí.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 91,
    categoria: "Violeta",
    icono: "🪻",
    tono: "filosofica",
    color: { principal: "#7d5fc2", suave: "#d9cdf5", oscuro: "#150c28" },
    buenosDias: "Buenos días, mi violeta. Pequeña pero de las que más se notan.",
    poema: [
      "La violeta es chiquita comparada con otras flores, pero nadie duda de lo bonita que es.",
      "El tamaño nunca fue lo que hizo especial algo, tú eres prueba de eso."
    ],
    detalle: "Significado de la violeta: modestia y lealtad.",
    buenasNoches: "Buenas noches, pequeña y grande a la vez.",
    notaImagen: "[PARA TI] una foto de violetas o flores moradas pequeñas.",
    notaCancion: "[PARA TI] algo delicado."
  },

  {
    dia: 92,
    categoria: "Paciencia",
    icono: "🧁",
    tono: "amor",
    color: { principal: "#a9713f", suave: "#ecd2ae", oscuro: "#20130a" },
    buenosDias: "Buenos días. Hoy quiero agradecerte la paciencia que me has tenido en más de un día difícil.",
    poema: [
      "No siempre soy fácil, y aun así te quedas, con paciencia, esperando la mejor versión de mí.",
      "Gracias por no irte en los días complicados."
    ],
    detalle: "Prometo seguir trabajando en merecer esa paciencia.",
    buenasNoches: "Buenas noches, agradecido con tu paciencia, siempre.",
    notaImagen: "[PARA TI] otra foto de postres o dulces.",
    notaCancion: "[PARA TI] algo alegre y liviano."
  },

  {
    dia: 93,
    categoria: "Provocación",
    icono: "😈",
    tono: "hot",
    color: { principal: "#d1163f", suave: "#f7bccb", oscuro: "#1c0409" },
    buenosDias: "Buenos días. Hoy no vengo con buenas intenciones, vengo con ganas de provocarte un poco.",
    poema: [
      "Me gusta ver hasta dónde puedo llevarte con solo palabras, sin haberte tocado todavía.",
      "Considera esto el inicio de algo, no el final."
    ],
    detalle: "¿Funcionó? Contéstame con la verdad.",
    buenasNoches: "Buenas noches, con la provocación todavía en el aire.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 94,
    categoria: "Pequeñas victorias",
    icono: "🍇",
    tono: "amor",
    color: { principal: "#7b4fd1", suave: "#dccafc", oscuro: "#160a2b" },
    buenosDias: "Buenos días. Hoy quiero celebrar algo pequeño contigo, no hace falta que sea grande.",
    poema: [
      "No todas las victorias necesitan aplausos, algunas solo necesitan que alguien las note.",
      "Hoy noto las tuyas, aunque sean pequeñas."
    ],
    detalle: "Cuéntame una victoria pequeña que hayas tenido esta semana, quiero celebrarla contigo.",
    buenasNoches: "Buenas noches, orgulloso de tus pequeñas victorias de hoy.",
    notaImagen: "[PARA TI] otra foto en tonos morados.",
    notaCancion: "[PARA TI] algo con ese mismo vibe, suave pero con carácter."
  },

  {
    dia: 95,
    categoria: "Gratitud",
    icono: "🙏",
    tono: "amor",
    color: { principal: "#e08fa0", suave: "#fcdbe3", oscuro: "#251015" },
    buenosDias: "Buenos días. Hoy no hay poema elaborado, solo quiero decir gracias.",
    poema: [
      "Gracias por dejarme ser parte de tu día a día, aunque sea a través de una pantalla la mayoría del tiempo.",
      "Gracias por tomarte el tiempo de leer esto, día tras día."
    ],
    detalle: "Gracias, en serio, por estar.",
    buenasNoches: "Buenas noches, agradecido de tenerte.",
    notaImagen: "[PARA TI] algo que represente gratitud para ti.",
    notaCancion: "[PARA TI] algo tranquilo y sincero."
  },

  {
    dia: 96,
    categoria: "Piel de gallina",
    icono: "🌡️",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días. Hay algo en pensarte cerca que me sube la temperatura sin que haga nada más.",
    poema: [
      "Se me pone la piel de gallina solo de imaginar tu mano donde ya sabes.",
      "No es casualidad, es puntería. Sabes exactamente el efecto que tienes en mí."
    ],
    detalle: "Cuando te vea, prepárate, porque yo ya estoy preparado desde ahora.",
    buenasNoches: "Buenas noches, con la piel todavía sensible de solo pensarte.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 97,
    categoria: "Azucena",
    icono: "🤍",
    tono: "filosofica",
    color: { principal: "#e8e2d0", suave: "#fbf8ef", oscuro: "#18160f" },
    buenosDias: "Buenos días, elegancia tranquila. Hoy va dedicado a lo que impresiona sin alzar la voz.",
    poema: [
      "La azucena es de esas flores que entran a un lugar y automáticamente se sienten más finas las cosas.",
      "Tú tienes ese efecto también, sin proponértelo."
    ],
    detalle: "Significado de la azucena: pureza y majestuosidad.",
    buenasNoches: "Buenas noches, elegante hasta en sueños.",
    notaImagen: "[PARA TI] una foto de azucenas o flores blancas grandes.",
    notaCancion: "[PARA TI] algo elegante, tipo piano."
  },

  {
    dia: 98,
    categoria: "Gestos",
    icono: "🎥",
    tono: "amor",
    color: { principal: "#c22b2b", suave: "#f3b3b3", oscuro: "#1a0505" },
    buenosDias: "Buenos días. Hoy quiero hablar de los gestos pequeños, los que casi no se notan pero dicen mucho.",
    poema: [
      "Un mensaje a tiempo, una llamada sin razón, un 'cómo estás' sincero: esos son los gestos que más me gustan de nosotros.",
      "Voy a seguir cuidando esos detalles."
    ],
    detalle: "¿Cuál es un gesto pequeño tuyo que me haga sentir querido? Dime.",
    buenasNoches: "Buenas noches, con un gesto pequeño más sumado al día.",
    notaImagen: "[PARA TI] un póster de alguna película pendiente.",
    notaCancion: "[PARA TI] otra banda sonora que le guste."
  },

  {
    dia: 99,
    categoria: "Destino",
    icono: "🔑",
    tono: "filosofica",
    color: { principal: "#5c1f3d", suave: "#d9a7bd", oscuro: "#12040a" },
    buenosDias: "Buenos días. No sé si creo mucho en el destino, pero contigo empiezo a dudar de mi propio escepticismo.",
    poema: [
      "Hay encuentros que parecen casualidad y terminan sintiéndose como otra cosa, algo más armado, más a propósito.",
      "No sé si fue destino o suerte, pero no pienso cuestionarlo demasiado."
    ],
    detalle: "Sea lo que sea que nos trajo hasta aquí, le debo una.",
    buenasNoches: "Buenas noches, agradecido con lo que sea que nos unió.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 100,
    categoria: "Ternura diaria",
    icono: "🌟",
    tono: "amor",
    color: { principal: "#d4af37", suave: "#f7e8b0", oscuro: "#241c04" },
    buenosDias: "Buenos días, ternura. Hoy quiero recordarte que no hace falta una fecha especial para sentir esto.",
    poema: [
      "La ternura que siento por ti no se guarda para ocasiones especiales, aparece en cualquier día común.",
      "Hoy también apareció, apenas desperté."
    ],
    detalle: "Gracias por sacar esa parte tierna de mí, todos los días.",
    buenasNoches: "Buenas noches, con toda la ternura del día todavía intacta.",
    notaImagen: "[PARA TI] otra foto en dorado.",
    notaCancion: "[PARA TI] algo con brillo, animado."
  },

  {
    dia: 101,
    categoria: "Volver a empezar",
    icono: "🌺",
    tono: "filosofica",
    color: { principal: "#d94fb0", suave: "#ffd6f0", oscuro: "#26071c" },
    buenosDias: "Buenos días. Cada día es una oportunidad de volver a empezar, incluso en algo que ya va bien.",
    poema: [
      "Me gusta la idea de que cada mañana podamos elegir empezar de nuevo, sin cargar los errores del día anterior.",
      "Hoy elijo empezar de nuevo contigo, otra vez, con las mismas ganas de siempre."
    ],
    detalle: "Empecemos hoy de nuevo, como si fuera el primer día, con las mismas ganas.",
    buenasNoches: "Buenas noches, listo para empezar de nuevo mañana.",
    notaImagen: "[PARA TI] otra foto de orquídeas.",
    notaCancion: "[PARA TI] algo elegante, tipo bolero."
  },

  {
    dia: 102,
    categoria: "Noche",
    icono: "🌃",
    tono: "hot",
    color: { principal: "#b3123f", suave: "#f2b3c4", oscuro: "#170209" },
    buenosDias: "Buenos días, aunque este mensaje debería ser de madrugada, que es cuando más te pienso así.",
    poema: [
      "Hay una hora de la noche en la que los pensamientos se vuelven menos inocentes, y contigo esa hora llega seguido.",
      "No pido perdón por eso, solo aviso."
    ],
    detalle: "Si te escribo tarde una de estas noches, ya sabes por qué.",
    buenasNoches: "Buenas noches, con la noche apenas empezando en mi cabeza.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 103,
    categoria: "Mañana contigo",
    icono: "🧣",
    tono: "amor",
    color: { principal: "#7d8fa6", suave: "#dbe4ee", oscuro: "#131a22" },
    buenosDias: "Buenos días. Hoy no pienso en el mañana lejano, pienso en el mañana cercano, el de mañana mismo, contigo.",
    poema: [
      "Me gusta tener un mañana asegurado contigo, aunque sea solo un mensaje de buenos días como este.",
      "Nos vemos mañana, otra vez, aquí."
    ],
    detalle: "Ya quiero que sea mañana para escribirte de nuevo.",
    buenasNoches: "Buenas noches, hasta mañana, contigo de nuevo.",
    notaImagen: "[PARA TI] otra foto de un día cómodo y relajado.",
    notaCancion: "[PARA TI] algo suave, para no hacer nada de fondo."
  },

  {
    dia: 104,
    categoria: "Detalles",
    icono: "💃",
    tono: "amor",
    color: { principal: "#c23fd1", suave: "#f2c9ff", oscuro: "#210a26" },
    buenosDias: "Buenos días. Hoy quiero hablar de los detalles, los que a veces pasan desapercibidos pero hacen toda la diferencia.",
    poema: [
      "No siempre son los gestos grandes los que más se recuerdan, a veces es un detalle pequeño en el momento correcto.",
      "Voy a seguir cuidando esos detalles contigo."
    ],
    detalle: "¿Cuál ha sido el detalle pequeño que más te ha gustado de mí? Cuéntame.",
    buenasNoches: "Buenas noches, cuidando los detalles, como siempre.",
    notaImagen: "[PARA TI] una foto bailando o en algún evento con música.",
    notaCancion: "[PARA TI] algo pegajoso, para bailar."
  },

  {
    dia: 105,
    categoria: "Sin palabras",
    icono: "🤍",
    tono: "hot",
    color: { principal: "#e0294f", suave: "#ffc9d6", oscuro: "#20050b" },
    buenosDias: "Buenos días. Hay días en que no encuentro las palabras correctas, solo las ganas correctas.",
    poema: [
      "No todo se puede decir bonito, a veces solo hay que admitir que las ganas de verte no son solo de conversar.",
      "Lo demás lo dejamos para cuando estemos cerca, sin pantalla de por medio."
    ],
    detalle: "Guarda energía para la próxima vez que nos veamos.",
    buenasNoches: "Buenas noches, con las ganas guardadas para cuando toque.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 106,
    categoria: "Ligereza",
    icono: "🌞",
    tono: "amor",
    color: { principal: "#f2b705", suave: "#fff0b3", oscuro: "#251c02" },
    buenosDias: "Buenos días. Contigo todo se siente más ligero, hasta los días pesados.",
    poema: [
      "No sé exactamente cómo lo haces, pero hablar contigo le quita peso a cualquier día difícil.",
      "Gracias por aligerar mis días sin siquiera intentarlo."
    ],
    detalle: "Espero poder hacer lo mismo por ti cuando lo necesites.",
    buenasNoches: "Buenas noches, más liviano gracias a ti.",
    notaImagen: "[PARA TI] otra foto de girasoles o un atardecer.",
    notaCancion: "[PARA TI] algo alegre, para el buen ánimo."
  },

  {
    dia: 107,
    categoria: "Futuro",
    icono: "🔭",
    tono: "amor",
    color: { principal: "#3f5fd1", suave: "#c9d3fa", oscuro: "#0a1030" },
    buenosDias: "Buenos días. Hoy quiero hablar un poco del futuro, sin miedo.",
    poema: [
      "No sé exactamente cómo se va a ver todo, pero me gusta la idea de que tú estés en el dibujo.",
      "Quiero construir cosas contigo, no solo imaginarlas."
    ],
    detalle: "Cuéntame un sueño tuyo, de esos grandes, algún día.",
    buenasNoches: "Buenas noches, soñando en la misma dirección.",
    notaImagen: "[PARA TI] algo que represente un sueño o meta en común.",
    notaCancion: "[PARA TI] algo inspirador."
  },

  {
    dia: 108,
    categoria: "Confesión",
    icono: "🕯️",
    tono: "filosofica",
    color: { principal: "#3a1f5c", suave: "#c9b8e6", oscuro: "#0c0716" },
    buenosDias: "Buenos días. Hoy toca una confesión que no había hecho en voz alta.",
    poema: [
      "A veces tengo miedo de lo mucho que me importas, no porque esté mal, sino porque nunca había sentido algo con esta intensidad.",
      "Y aun con miedo, elijo seguir aquí, contigo."
    ],
    detalle: "Gracias por hacerme sentir seguro incluso hablando de mis miedos.",
    buenasNoches: "Buenas noches, con el miedo puesto a un lado y la certeza intacta.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 109,
    categoria: "Gustos compartidos",
    icono: "🌭",
    tono: "amor",
    color: { principal: "#e0632f", suave: "#ffcfa8", oscuro: "#2b1103" },
    buenosDias: "Buenos días. Hoy quiero celebrar algo simple: lo bien que la pasamos con cosas sin importancia.",
    poema: [
      "No hace falta un plan elaborado para pasarla bien, a veces solo hace falta estar juntos, sin más.",
      "De esos momentos sin importancia guardo varios de mis recuerdos favoritos."
    ],
    detalle: "Gracias por hacer que hasta lo simple se sienta memorable.",
    buenasNoches: "Buenas noches, con un buen recuerdo simple más.",
    notaImagen: "[PARA TI] otra foto de comida callejera favorita.",
    notaCancion: "[PARA TI] algo divertido, para pedir domicilio con buena música."
  },

  {
    dia: 110,
    categoria: "Constancia",
    icono: "🌹",
    tono: "amor",
    color: { principal: "#d81e3e", suave: "#ffc2ce", oscuro: "#2b0508" },
    buenosDias: "Buenos días. No soy de grandes gestos todo el tiempo, pero sí soy constante, y eso también cuenta.",
    poema: [
      "Prefiero ser constante que espectacular una sola vez y después desaparecer.",
      "Aquí sigo, día tras día, constante como siempre."
    ],
    detalle: "Gracias por valorar la constancia tanto como los gestos grandes.",
    buenasNoches: "Buenas noches, constante, como cada noche.",
    notaImagen: "[PARA TI] otra foto de rosas.",
    notaCancion: "[PARA TI] algo romántico, clásico."
  },

  {
    dia: 111,
    categoria: "Cuenta regresiva",
    icono: "⏳",
    tono: "hot",
    color: { principal: "#a10e35", suave: "#f0aabd", oscuro: "#140208" },
    buenosDias: "Buenos días. Empiezo una cuenta regresiva mental para la próxima vez que nos veamos, y va con más ansiedad de la normal.",
    poema: [
      "No es solo verte, es todo lo que viene con verte: el abrazo que aprieta un poco más de lo necesario, la despedida que se alarga sin querer.",
      "Cuento los días, literal."
    ],
    detalle: "¿Cuántos días faltan? Dime, para empezar a contarlos juntos.",
    buenasNoches: "Buenas noches, un día menos para esa cuenta regresiva.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 112,
    categoria: "Caminar despacio",
    icono: "🖼️",
    tono: "filosofica",
    color: { principal: "#e0a63d", suave: "#ffe3b0", oscuro: "#241a04" },
    buenosDias: "Buenos días. Hoy no tengo apuro por nada, ni siquiera por esto.",
    poema: [
      "Hay cosas que se disfrutan más caminando despacio, sin correr para llegar a ningún lado en particular.",
      "Contigo prefiero caminar despacio, disfrutando cada parte del camino."
    ],
    detalle: "No hay afán, vamos a nuestro paso, como debe ser.",
    buenasNoches: "Buenas noches, caminando despacio, sin apuro, contigo.",
    notaImagen: "[PARA TI] otra foto de arte o de algo creativo suyo.",
    notaCancion: "[PARA TI] algo artístico, con textura."
  },

  {
    dia: 113,
    categoria: "Orgullo",
    icono: "👗",
    tono: "amor",
    color: { principal: "#2f6d6b", suave: "#bfe3e0", oscuro: "#08191a" },
    buenosDias: "Buenos días. Hoy quiero decirte, sin vueltas, que estoy orgulloso de ti.",
    poema: [
      "No siempre lo digo con estas palabras exactas, pero lo pienso seguido: admiro cómo llevas tu vida.",
      "Ese orgullo no es poca cosa para mí."
    ],
    detalle: "Sigue haciendo las cosas a tu manera, te queda bien.",
    buenasNoches: "Buenas noches, orgulloso de ti, como siempre.",
    notaImagen: "[PARA TI] otra foto suya arreglada.",
    notaCancion: "[PARA TI] algo elegante, tipo balada especial."
  },

  {
    dia: 114,
    categoria: "Confesión atrevida",
    icono: "🖋️",
    tono: "hot",
    color: { principal: "#d1163f", suave: "#f7bccb", oscuro: "#1c0409" },
    buenosDias: "Buenos días. Hoy toca confesar algo que normalmente me guardo para mí.",
    poema: [
      "Hay pensamientos que tengo contigo que no son precisamente para compartir en familia.",
      "No los voy a escribir todos aquí, pero sí te aviso que existen, y que son frecuentes."
    ],
    detalle: "Si quieres saber más, vas a tener que preguntarme directamente.",
    buenasNoches: "Buenas noches, con la confesión ya hecha, aunque sea a medias.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 115,
    categoria: "Sorpresas",
    icono: "🎁",
    tono: "amor",
    color: { principal: "#d1467f", suave: "#ffc9dd", oscuro: "#26060f" },
    buenosDias: "Buenos días. Hoy quiero que estés atenta a algo pequeño.",
    poema: [
      "No todas las sorpresas tienen que ser grandes, a veces es solo un mensaje en el momento correcto.",
      "Espero que este cuente como una de esas."
    ],
    detalle: "Sorpréndete a ti misma hoy haciendo algo que se te antoje, sin razón.",
    buenasNoches: "Buenas noches, con una sorpresa pequeña cumplida, espero.",
    notaImagen: "[PARA TI] algo sorpresa que le tengas preparado.",
    notaCancion: "[PARA TI] algo divertido, inesperado."
  },

  {
    dia: 116,
    categoria: "Certeza tranquila",
    icono: "🕊️",
    tono: "filosofica",
    color: { principal: "#c7bfe0", suave: "#f1eefb", oscuro: "#161425" },
    buenosDias: "Buenos días. Hoy no siento nervios ni dudas por esto, solo una certeza tranquila de que voy por buen camino contigo.",
    poema: [
      "Hay amores que generan ansiedad y amores que generan calma, y el tuyo, por suerte, es de los segundos.",
      "Prefiero mil veces esta tranquilidad."
    ],
    detalle: "Gracias por darme esta certeza tranquila, sin dramas innecesarios.",
    buenasNoches: "Buenas noches, en calma, seguro de esto.",
    notaImagen: "[PARA TI] otra foto en tonos blancos o suaves.",
    notaCancion: "[PARA TI] algo minimalista."
  },

  {
    dia: 117,
    categoria: "Casa",
    icono: "🏚️",
    tono: "filosofica",
    color: { principal: "#6b2142", suave: "#e3b8c9", oscuro: "#180509" },
    buenosDias: "Buenos días. No sé bien qué es un hogar, pero sé que se parece mucho a hablar contigo.",
    poema: [
      "No hace falta una casa con paredes para sentirse en un lugar seguro, a veces el hogar es una persona.",
      "Tú eres el mío, sin importar en qué ciudad estemos cada uno."
    ],
    detalle: "Gracias por ser mi lugar seguro, sin importar la distancia.",
    buenasNoches: "Buenas noches, en casa, aunque sea a la distancia.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 118,
    categoria: "Lugares",
    icono: "🗺️",
    tono: "filosofica",
    color: { principal: "#5c7d99", suave: "#d4e3ee", oscuro: "#0d1a24" },
    buenosDias: "Buenos días. Hoy pensé en todos los lugares que quiero conocer contigo.",
    poema: [
      "Cada vez que veo un lugar con buena vista, pienso en lo bien que se vería contigo ahí.",
      "Vamos armando ese mapa de pendientes, poco a poco."
    ],
    detalle: "Agrega un lugar nuevo a nuestra lista de sitios por conocer.",
    buenasNoches: "Buenas noches, desde algún lugar imaginando el próximo destino.",
    notaImagen: "[PARA TI] una foto de un lugar que quieran visitar.",
    notaCancion: "[PARA TI] algo ambiental, para viajar con la mente."
  },

  {
    dia: 119,
    categoria: "Volver",
    icono: "🧸",
    tono: "amor",
    color: { principal: "#d9a066", suave: "#f5dfc0", oscuro: "#241708" },
    buenosDias: "Buenos días. No importa cómo esté el día, siempre quiero volver a ti al final.",
    poema: [
      "Hay lugares a los que uno vuelve porque se siente bien, y tú eres de esos lugares para mí.",
      "Sin importar qué tan complicado esté el día, siempre quiero volver aquí."
    ],
    detalle: "Gracias por ser un lugar al que siempre quiero volver.",
    buenasNoches: "Buenas noches, de vuelta donde quiero estar.",
    notaImagen: "[PARA TI] otra foto tierna de peluches.",
    notaCancion: "[PARA TI] algo tierno y calmado."
  },

  {
    dia: 120,
    categoria: "Electricidad",
    icono: "⚡",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días. Hay una carga eléctrica entre nosotros que últimamente no se ha podido descargar como debería.",
    poema: [
      "Cada vez que nos acercamos, algo se enciende, y cada vez que nos separamos, ese algo se queda pendiente, acumulándose.",
      "Ya va siendo hora de una buena descarga."
    ],
    detalle: "Prepárate, hay electricidad acumulada esperando salida.",
    buenasNoches: "Buenas noches, todavía cargado, esperando el momento.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 121,
    categoria: "Lo cotidiano",
    icono: "🌼",
    tono: "amor",
    color: { principal: "#f2e94e", suave: "#faf6cf", oscuro: "#141a08" },
    buenosDias: "Buenos días. Hoy quiero valorar lo cotidiano: un mensaje, una llamada, un 'cómo amaneciste'.",
    poema: [
      "No todo tiene que ser extraordinario para ser valioso, lo cotidiano contigo también lo es.",
      "Gracias por hacer que lo de todos los días valga la pena."
    ],
    detalle: "Hoy valora también tú algo cotidiano, aunque parezca pequeño.",
    buenasNoches: "Buenas noches, agradecido por otro día cotidiano contigo.",
    notaImagen: "[PARA TI] otra foto de margaritas.",
    notaCancion: "[PARA TI] algo simple y bonito."
  },

  {
    dia: 122,
    categoria: "Preguntas sin miedo",
    icono: "🌱",
    tono: "filosofica",
    color: { principal: "#4fa66b", suave: "#c8ecd4", oscuro: "#0a2013" },
    buenosDias: "Buenos días. Hoy quiero hacerte una pregunta que normalmente da un poco de miedo hacer: ¿esto va como tú quieres que vaya?",
    poema: [
      "No siempre se pregunta por miedo a la respuesta, pero prefiero preguntar y saber, que quedarme con la duda.",
      "Espero que la respuesta se parezca a lo que yo siento."
    ],
    detalle: "Contéstame con calma, cuando quieras, no hay apuro.",
    buenasNoches: "Buenas noches, sin miedo a las preguntas importantes.",
    notaImagen: "[PARA TI] otra foto de naturaleza o un paisaje verde.",
    notaCancion: "[PARA TI] algo acústico."
  },

  {
    dia: 123,
    categoria: "Travesura",
    icono: "🍒",
    tono: "hot",
    color: { principal: "#b3123f", suave: "#f2b3c4", oscuro: "#170209" },
    buenosDias: "Buenos días, traviesa. Hoy tengo ganas de portarme mal, en el buen sentido.",
    poema: [
      "Hay una versión tuya que solo sale cuando cree que nadie la está viendo, y resulta que esa es mi favorita.",
      "La próxima vez que estemos solos, quiero verla de nuevo."
    ],
    detalle: "Sácala más seguido, por mí.",
    buenasNoches: "Buenas noches, traviesa. Descansa, mañana seguimos con las travesuras.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 124,
    categoria: "Simpleza",
    icono: "🎀",
    tono: "amor",
    color: { principal: "#ff9ecb", suave: "#ffe6f2", oscuro: "#33091c" },
    buenosDias: "Buenos días. Hoy no hay nada elaborado que decir, solo que contigo lo simple ya es suficiente.",
    poema: [
      "No necesito grandes planes ni ocasiones especiales, contigo hasta lo simple se siente completo.",
      "Ojalá sigamos teniendo muchos días simples así."
    ],
    detalle: "Gracias por hacer que lo simple se sienta suficiente.",
    buenasNoches: "Buenas noches, simple y bonito, como me gusta que sean los días contigo.",
    notaImagen: "[PARA TI] otra foto tierna.",
    notaCancion: "[PARA TI] algo dulce."
  },

  {
    dia: 125,
    categoria: "Lo que no se dice",
    icono: "🏖️",
    tono: "filosofica",
    color: { principal: "#2ea3a3", suave: "#c3f0ee", oscuro: "#062020" },
    buenosDias: "Buenos días. Hay cosas que siento y que casi nunca digo en voz alta, y hoy quería nombrar una.",
    poema: [
      "A veces asumo que ya sabes cuánto me importas, y se me olvida decirlo directamente.",
      "Así que aquí está, directo: me importas más de lo que demuestro casi siempre."
    ],
    detalle: "Voy a intentar decir más seguido lo que normalmente me guardo.",
    buenasNoches: "Buenas noches, con algo importante ya dicho, por fin.",
    notaImagen: "[PARA TI] otra foto de playa o mar.",
    notaCancion: "[PARA TI] algo costero, relajado."
  },

  {
    dia: 126,
    categoria: "Permanencia",
    icono: "⏳",
    tono: "filosofica",
    color: { principal: "#4a1830", suave: "#d9a7bd", oscuro: "#120206" },
    buenosDias: "Buenos días. Hoy quiero hablar de tiempo, del que ya pasó y del que planeo seguir sumando contigo.",
    poema: [
      "No mido esto en días perfectos, lo mido en ganas de seguir sumando más, incluso en los días comunes.",
      "Y las ganas, contigo, no se me han acabado ni un solo día."
    ],
    detalle: "Aquí sigo, sumando tiempo contigo, sin planes de parar.",
    buenasNoches: "Buenas noches, sumando un día más a esto que seguimos construyendo.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 127,
    categoria: "Promesas pequeñas",
    icono: "🕷️",
    tono: "amor",
    color: { principal: "#e13a3a", suave: "#ffc9c9", oscuro: "#210a0a" },
    buenosDias: "Buenos días. No te prometo cosas enormes, te prometo cosas pequeñas y constantes.",
    poema: [
      "Prefiero prometerte llamadas, buenos días, detalles pequeños, antes que promesas grandes que después no sé si voy a cumplir.",
      "Las pequeñas las cumplo todas."
    ],
    detalle: "Aquí va otra promesa pequeña: hoy también pienso en ti.",
    buenasNoches: "Buenas noches, con otra promesa pequeña cumplida.",
    notaImagen: "[PARA TI] otra foto divertida de los dos.",
    notaCancion: "[PARA TI] algo con energía."
  },

  {
    dia: 128,
    categoria: "Cielo nocturno",
    icono: "🌌",
    tono: "filosofica",
    color: { principal: "#4f3fa8", suave: "#c9c2f2", oscuro: "#120a2b" },
    buenosDias: "Buenos días. Hoy quiero que en algún momento mires el cielo, de día o de noche.",
    poema: [
      "Me gusta pensar que, aunque estemos lejos, en algún momento del día miramos el mismo cielo.",
      "Eso me hace sentir cerca, aunque no lo estemos físicamente."
    ],
    detalle: "Si ves una estrella fugaz, ya sabes qué pedir (es broma, o no).",
    buenasNoches: "Buenas noches, bajo el mismo cielo que yo.",
    notaImagen: "[PARA TI] una foto de un cielo estrellado.",
    notaCancion: "[PARA TI] algo soñador."
  },

  {
    dia: 129,
    categoria: "Sin filtro",
    icono: "🔥",
    tono: "hot",
    color: { principal: "#e0294f", suave: "#ffc9d6", oscuro: "#20050b" },
    buenosDias: "Buenos días. Hoy no filtro nada: te quiero, te deseo, y las dos cosas pesan lo mismo.",
    poema: [
      "A veces separamos el cariño del deseo como si uno fuera más válido que el otro, y no es así.",
      "Contigo los dos van juntos, siempre, sin pena."
    ],
    detalle: "No tengo que elegir entre quererte y desearte. Te tengo las dos, completas.",
    buenasNoches: "Buenas noches, con las dos cosas intactas, como siempre.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 130,
    categoria: "Después",
    icono: "🐶",
    tono: "amor",
    color: { principal: "#6fb1e0", suave: "#d6ecfb", oscuro: "#071522" },
    buenosDias: "Buenos días. Hoy pensé menos en el ahora y más en todos los 'después' que quiero contigo.",
    poema: [
      "Hay un después de esto que ya empecé a imaginar, con más días como este, con más nosotros.",
      "No tengo apuro, pero sí tengo ganas."
    ],
    detalle: "Cuéntame uno de tus 'después' conmigo, aunque sea pequeño.",
    buenasNoches: "Buenas noches, pensando en lo que sigue.",
    notaImagen: "[PARA TI] otra foto tierna, cerrando el ciclo de Snoopy.",
    notaCancion: "[PARA TI] algo nostálgico."
  },

  {
    dia: 131,
    categoria: "Palabras que faltan",
    icono: "🎬",
    tono: "amor",
    color: { principal: "#a81f1f", suave: "#f0aeae", oscuro: "#160404" },
    buenosDias: "Buenos días. Hay días en que las palabras no alcanzan para explicar lo que siento, y hoy es uno de esos.",
    poema: [
      "A veces quiero decir tanto que termino sin decir nada, y espero que igual se sienta.",
      "Lo que no logro poner en palabras, espero que lo sientas en la intención."
    ],
    detalle: "Si algún día no encuentro las palabras correctas, ten paciencia, sigo intentando decírtelo bien.",
    buenasNoches: "Buenas noches, con más sentido del que logré poner en palabras hoy.",
    notaImagen: "[PARA TI] otro póster o foto de cine.",
    notaCancion: "[PARA TI] algo cinematográfico."
  },

  {
    dia: 132,
    categoria: "Última vez",
    icono: "🕰️",
    tono: "hot",
    color: { principal: "#a10e35", suave: "#f0aabd", oscuro: "#140208" },
    buenosDias: "Buenos días. Hoy pensé en la última vez que estuvimos cerca, y no he podido pensar en mucho más desde entonces.",
    poema: [
      "Hay recuerdos que se quedan grabados más de lo normal, y ese es uno de esos.",
      "Quiero que hagamos más recuerdos así, pronto."
    ],
    detalle: "¿Cuándo repetimos? Pregunto en serio.",
    buenasNoches: "Buenas noches, todavía en ese recuerdo.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 133,
    categoria: "Tazas compartidas",
    icono: "📖",
    tono: "filosofica",
    color: { principal: "#6b2142", suave: "#e3b8c9", oscuro: "#180509" },
    buenosDias: "Buenos días. Hoy imaginé algo simple: los dos compartiendo una taza de algo caliente, sin prisa.",
    poema: [
      "Hay conversaciones que se dan mejor con algo caliente entre las manos, sin pantallas de por medio.",
      "Quiero tener esa escena contigo pronto, real."
    ],
    detalle: "¿Café o té? Quiero saber para cuando planeemos esa escena.",
    buenasNoches: "Buenas noches, con ganas de esa taza compartida pronto.",
    notaImagen: "[PARA TI] otra foto de libros o lectura.",
    notaCancion: "[PARA TI] algo con atmósfera de cierre."
  },

  {
    dia: 134,
    categoria: "Nosotros",
    icono: "🎉",
    tono: "amor",
    color: { principal: "#ff5d8f", suave: "#ffd7e6", oscuro: "#2a0f1c" },
    buenosDias: "Buenos días. Hoy es el día 134, el último de este primer calendario.",
    poema: [
      "Empezamos con un Snoopy y una promesa de acompañarte todos los días que pudiera, y aquí seguimos, muchos días después.",
      "Gracias por darle clic a cada corazón, por leer cada poema, por dejarme decirte de mil formas distintas siempre lo mismo: que te amo, que pienso en ti, que quiero estar.",
      "Esto no se termina aquí. Este es solo el primer capítulo de algo que planeo seguir construyendo contigo, un día a la vez."
    ],
    detalle: "Gracias por estos 134 días. Esto lo hice completo, pensando solo en ti.",
    buenasNoches: "Buenas noches, mi persona favorita. Fin del primer capítulo, no de la historia.",
    notaImagen: "[PARA TI] tu foto favorita de los dos, para cerrar este primer tramo con algo especial.",
    notaCancion: "[PARA TI] la canción que sientas que representa esta etapa de ustedes."
  }

];
