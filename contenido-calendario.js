/* =======================================================================
   CONTENIDO-CALENDARIO.JS
   -----------------------------------------------------------------------
   Aquí viven los 50 días del calendario. Cada día es un objeto con:

     dia          -> número del día (1 a 50, no lo cambies de orden)
     categoria    -> etiqueta corta que se muestra arriba (ej: "Girasol")
     icono        -> un emoji que representa el día
     color        -> { principal, suave, oscuro } -> tema de color del día
     buenosDias   -> primera pantalla del día (saludo corto)
     poema        -> arreglo de 1 a 3 líneas, el mensaje principal del día
     detalle      -> un "dato bonito" o guiño a algo que le gusta (opcional)
     buenasNoches -> última pantalla del día (despedida corta)
     notaImagen   -> [PARA TI] idea de imagen que podrías poner ese día.
                     No es código, es solo una sugerencia para cuando
                     quieras agregar tus propias fotos (ver GUIA.md).
     notaCancion  -> [PARA TI] idea del tipo de canción que pegaría ese día.

   Para agregar más días en el futuro (día 51, 52...) solo copia un
   bloque completo, cámbiale el número "dia" y todos los textos, y
   agrégalo antes del cierre "];". El calendario se ajusta solo.
   ======================================================================= */

const CALENDARIO = [

  {
    dia: 1,
    categoria: "Snoopy",
    icono: "🐶",
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
    categoria: "Lirio",
    icono: "🤍",
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
    dia: 6,
    categoria: "Spider-Man",
    icono: "🕷️",
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
    dia: 7,
    categoria: "Morado",
    icono: "💜",
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
    dia: 8,
    categoria: "Peluches",
    icono: "🧸",
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
    dia: 9,
    categoria: "Gerbera",
    icono: "🌸",
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
    dia: 10,
    categoria: "Libros",
    icono: "📖",
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
    dia: 11,
    categoria: "Snoopy",
    icono: "☁️",
    color: { principal: "#6fb1e0", suave: "#d6ecfb", oscuro: "#071522" },
    buenosDias: "Buenos días, mi cielo. Literal, hoy quiero que mires hacia arriba un rato.",
    poema: [
      "Hay tardes en las que solo quiero quedarme mirando el mismo cielo que tú, aunque estemos lejos, aunque no digamos nada.",
      "Contigo hasta lo lento se disfruta."
    ],
    detalle: "Si ves una nube con alguna forma rara hoy, mándame foto.",
    buenasNoches: "Buenas noches. Flotando cerca de ti, como siempre.",
    notaImagen: "[PARA TI] una foto de un cielo bonito, nubes, un atardecer.",
    notaCancion: "[PARA TI] algo soñador, tranquilo."
  },
  {
    dia: 12,
    categoria: "Rosa",
    icono: "🌹",
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
    dia: 13,
    categoria: "Dorado",
    icono: "✨",
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
    dia: 14,
    categoria: "Hello Kitty",
    icono: "🐱",
    color: { principal: "#ff9ecb", suave: "#ffe6f2", oscuro: "#33091c" },
    buenosDias: "Buenos días, mi favorita. Así, sin competencia, sin comparación.",
    poema: [
      "De todas las cosas buenas que me han pasado, tú sigues siendo mi favorita, la que no cambiaría ni por el mejor de los días.",
      "Eres ese detalle pequeño que hace que todo lo demás tenga sentido."
    ],
    detalle: "Hoy no hace falta un motivo grande para sonreír, tú ya eres motivo suficiente.",
    buenasNoches: "Buenas noches, favorita mía.",
    notaImagen: "[PARA TI] algo tierno de Hello Kitty o similar.",
    notaCancion: "[PARA TI] algo dulce y liviano."
  },
  {
    dia: 15,
    categoria: "Tulipán",
    icono: "🌷",
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
    dia: 16,
    categoria: "Mar",
    icono: "🌊",
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
    dia: 17,
    categoria: "Spider-Man",
    icono: "🕸️",
    color: { principal: "#3a6ea5", suave: "#c9dcf2", oscuro: "#081321" },
    buenosDias: "Buenos días. Hoy quiero recordarte que estamos bien enredados en esto.",
    poema: [
      "Como una telaraña bien tejida, así se sienten los días contigo: todo conectado, todo sostenido, nada suelto.",
      "Si alguna vez el mundo se complica, aquí estoy, listo para resolverlo juntos."
    ],
    detalle: "Sea lo que sea que pase hoy, cuenta conmigo.",
    buenasNoches: "Buenas noches, atrapado en ti, felizmente.",
    notaImagen: "[PARA TI] algo de Spider-Man, o algo que los conecte a los dos.",
    notaCancion: "[PARA TI] algo con ritmo, entretenido."
  },
  {
    dia: 18,
    categoria: "Chocolate",
    icono: "🍬",
    color: { principal: "#a9713f", suave: "#ecd2ae", oscuro: "#20130a" },
    buenosDias: "Buenos días, dulzura. Literal, hoy es un día dedicado a lo dulce.",
    poema: [
      "Hay días que necesitan azúcar para sostenerse, y otros que solo te necesitan a ti.",
      "Hoy quise darte los dos."
    ],
    detalle: "Si te antojas de algo dulce hoy, no te aguantes, date el gusto.",
    buenasNoches: "Buenas noches, que tengas sueños tan dulces como te gustan las cosas.",
    notaImagen: "[PARA TI] otra foto de dulces, postres o algo así.",
    notaCancion: "[PARA TI] algo alegre y liviano."
  },
  {
    dia: 19,
    categoria: "Naturaleza",
    icono: "🌿",
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
    dia: 20,
    categoria: "Lavanda",
    icono: "💐",
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
    dia: 21,
    categoria: "Snoopy",
    icono: "📖",
    color: { principal: "#e0a63d", suave: "#ffe3b0", oscuro: "#241a04" },
    buenosDias: "Buenos días. Hoy va una pequeña historia sobre nosotros, a lo Snoopy.",
    poema: [
      "Si esto fuera una tira cómica, seríamos esos dos personajes que nunca dicen todo lo que sienten, pero que se nota de todas formas.",
      "Prefiero decírtelo directo: te quiero, sin viñetas ni globos de texto."
    ],
    detalle: "Algún día quiero hacer contigo una historia de esas que se cuentan por años.",
    buenasNoches: "Buenas noches, hasta el próximo capítulo.",
    notaImagen: "[PARA TI] algo de cómics o historietas que le gusten.",
    notaCancion: "[PARA TI] algo nostálgico, de esas que dan ternura."
  },
  {
    dia: 22,
    categoria: "Margarita",
    icono: "🌼",
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
    dia: 23,
    categoria: "Arte",
    icono: "🎨",
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
    dia: 24,
    categoria: "Libros",
    icono: "🖤",
    color: { principal: "#4a1830", suave: "#d9a7bd", oscuro: "#120206" },
    buenosDias: "Buenos días. Hoy toca lo intenso, como esos libros que no puedes soltar.",
    poema: [
      "Me gusta que te guste lo oscuro, lo intenso, lo que no es fácil de resumir en una frase.",
      "Contigo también siento eso: algo profundo, que no se explica fácil, pero que no se puede soltar."
    ],
    detalle: "Si algún día me prestas uno de tus libros favoritos, prometo cuidarlo como si fuera tuyo (porque lo es).",
    buenasNoches: "Buenas noches, que tu próximo capítulo de sueños sea de los buenos.",
    notaImagen: "[PARA TI] otra foto de sus libros o de una biblioteca bonita.",
    notaCancion: "[PARA TI] algo con más intensidad, tipo banda sonora dramática."
  },
  {
    dia: 25,
    categoria: "Girasol",
    icono: "☀️",
    color: { principal: "#f2b705", suave: "#fff0b3", oscuro: "#251c02" },
    buenosDias: "Buenos días. Vamos a la mitad del camino, y sigues siendo mi motivo favorito para seguir.",
    poema: [
      "A veces no necesito que el día empiece bien, solo necesito saber que voy a hablar contigo en algún momento.",
      "Eso ya lo cambia todo."
    ],
    detalle: "Vamos por la mitad de los cincuenta días. Gracias por llegar hasta aquí conmigo.",
    buenasNoches: "Buenas noches, mitad de camino y toda la vida por delante.",
    notaImagen: "[PARA TI] una foto de ustedes dos, si ya tienen alguna.",
    notaCancion: "[PARA TI] algo especial, tal vez la primera canción que asocien a los dos."
  },
  {
    dia: 26,
    categoria: "Comodidad",
    icono: "🧶",
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
    dia: 27,
    categoria: "Hello Kitty",
    icono: "🩷",
    color: { principal: "#ff6fa8", suave: "#ffd7e6", oscuro: "#3a0f24" },
    buenosDias: "Buenos días, compañera. Hoy quiero recordarte que no estás sola en nada.",
    poema: [
      "Como ese amigo que nunca se cansa de estar cerca, quiero ser tu lugar seguro en los días buenos y también en los raros.",
      "No hacen falta grandes gestos: contigo, hasta lo simple se siente como hogar."
    ],
    detalle: "Cualquier cosa que necesites hoy, aunque sea solo hablar, aquí estoy.",
    buenasNoches: "Buenas noches, a tu lado, siempre.",
    notaImagen: "[PARA TI] algo tierno, tipo Hello Kitty otra vez, ella se lo merece.",
    notaCancion: "[PARA TI] algo cálido, de compañía."
  },
  {
    dia: 28,
    categoria: "Orquídea",
    icono: "🌺",
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
    dia: 29,
    categoria: "Vistas",
    icono: "🏞️",
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
    dia: 30,
    categoria: "Spider-Man",
    icono: "🦸‍♀️",
    color: { principal: "#e13a3a", suave: "#ffc9c9", oscuro: "#210a0a" },
    buenosDias: "Buenos días, mi equipo. Hoy quiero recordarte que esto lo hacemos entre los dos.",
    poema: [
      "Ningún héroe hace todo solo, siempre hay alguien que sostiene mientras el otro respira.",
      "Contigo quiero ser ese equilibrio: tú y yo, turnándonos para sostener."
    ],
    detalle: "Gracias por sostenerme también a mí cuando lo he necesitado.",
    buenasNoches: "Buenas noches, mi persona de equipo favorita.",
    notaImagen: "[PARA TI] una foto de ustedes dos, o algo que represente trabajo en equipo.",
    notaCancion: "[PARA TI] algo motivador, con energía."
  },
  {
    dia: 31,
    categoria: "Rosa",
    icono: "🥀",
    color: { principal: "#b3123a", suave: "#f5b8c6", oscuro: "#240309" },
    buenosDias: "Buenos días. Hoy quiero hablarte de lo que no es perfecto, y aun así vale la pena.",
    poema: [
      "Hasta la rosa más bonita tiene espinas, y aun así nadie deja de quererla por eso.",
      "Quererte incluye tus espinas también, no solo los pétalos."
    ],
    detalle: "Gracias por dejarme ver también tus días difíciles, no solo los fáciles.",
    buenasNoches: "Buenas noches, completa, espinas y pétalos incluidos.",
    notaImagen: "[PARA TI] una foto de una rosa, quizás una un poco más silvestre.",
    notaCancion: "[PARA TI] algo con más sentimiento, profundo."
  },
  {
    dia: 32,
    categoria: "Salchipapa",
    icono: "🍟",
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
    dia: 33,
    categoria: "Películas",
    icono: "🎬",
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
    dia: 34,
    categoria: "Peluches",
    icono: "🐻",
    color: { principal: "#c98a4f", suave: "#f0d8b8", oscuro: "#20140a" },
    buenosDias: "Buenos días. Hoy quiero que te sientas tan abrazada como con tu peluche favorito.",
    poema: [
      "Ojalá pudiera convertirme en abrazo cuando no estoy cerca.",
      "Mientras tanto, que un peluche haga ese trabajo por mí."
    ],
    detalle: "Cuando nos veamos te debo un abrazo largo, de esos que no se cortan rápido.",
    buenasNoches: "Buenas noches, abrazada aunque sea en la distancia.",
    notaImagen: "[PARA TI] otra foto tierna, tal vez de algún peluche que le quieras regalar.",
    notaCancion: "[PARA TI] algo tierno y calmado."
  },
  {
    dia: 35,
    categoria: "Flor de cerezo",
    icono: "🌸",
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
    dia: 36,
    categoria: "Dorado",
    icono: "🏆",
    color: { principal: "#c9a227", suave: "#f4e2a0", oscuro: "#201803" },
    buenosDias: "Buenos días, campeona. Hoy va dedicado a lo mucho que has logrado.",
    poema: [
      "El dorado también es el color de los premios, de lo que se gana con esfuerzo.",
      "Y tú, sin que siempre te lo diga, te has ganado muchas cosas que ni te has dado cuenta."
    ],
    detalle: "Estoy orgulloso de ti, aunque no siempre lo diga en voz alta.",
    buenasNoches: "Buenas noches, campeona de mi día a día.",
    notaImagen: "[PARA TI] una foto de algún logro suyo del que esté orgullosa.",
    notaCancion: "[PARA TI] algo motivador o triunfal."
  },
  {
    dia: 37,
    categoria: "Música",
    icono: "🎶",
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
    dia: 38,
    categoria: "Elegancia",
    icono: "👗",
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
    dia: 39,
    categoria: "Libros",
    icono: "📚",
    color: { principal: "#6b2142", suave: "#e3b8c9", oscuro: "#180509" },
    buenosDias: "Buenos días. Hoy va un mensaje directo de esos que parecen sacados de tus libros favoritos.",
    poema: [
      "Si alguien me preguntara cómo se siente esto, diría que se siente como el capítulo antes del final, cuando ya sabes que quieres quedarte hasta la última página.",
      "Contigo quiero llegar hasta el final del libro, y después empezar otro."
    ],
    detalle: "Cuéntame cuál ha sido el final de libro que más te ha marcado.",
    buenasNoches: "Buenas noches, hasta el próximo capítulo de esto que estamos escribiendo.",
    notaImagen: "[PARA TI] una foto de su estante de libros o de su lectura actual.",
    notaCancion: "[PARA TI] algo con atmósfera de historia, cinematográfico."
  },
  {
    dia: 40,
    categoria: "Lirio",
    icono: "🕊️",
    color: { principal: "#c7bfe0", suave: "#f1eefb", oscuro: "#161425" },
    buenosDias: "Buenos días, paz. Hoy quiero que el día se sienta liviano.",
    poema: [
      "Hay personas que llegan y ponen todo patas arriba, y hay personas que llegan y todo se acomoda solo.",
      "Tú eres de las segundas."
    ],
    detalle: "Gracias por la calma que traes, aunque tú no siempre te sientas calmada por dentro.",
    buenasNoches: "Buenas noches, en paz, como mereces estar siempre.",
    notaImagen: "[PARA TI] una foto de lirios o algo en tonos claros y suaves.",
    notaCancion: "[PARA TI] algo minimalista, tipo piano o guitarra sola."
  },
  {
    dia: 41,
    categoria: "Naturaleza",
    icono: "🍃",
    color: { principal: "#3f8f5f", suave: "#c0e8cf", oscuro: "#0a1f11" },
    buenosDias: "Buenos días. Hoy quiero recordarte que está bien tomarse las cosas con calma, como la naturaleza.",
    poema: [
      "Nada en la naturaleza crece a la fuerza, todo tiene su tiempo.",
      "Tú también tienes derecho a tu propio tiempo para todo, y yo voy a esperar contigo."
    ],
    detalle: "No hay apuro, para nada de lo que estemos construyendo.",
    buenasNoches: "Buenas noches, creciendo a tu propio ritmo.",
    notaImagen: "[PARA TI] otra foto de naturaleza, quizás de algún viaje o caminata.",
    notaCancion: "[PARA TI] algo orgánico, con sonidos naturales de fondo."
  },
  {
    dia: 42,
    categoria: "Mar",
    icono: "🐚",
    color: { principal: "#1d8f8f", suave: "#b9ecec", oscuro: "#041a1a" },
    buenosDias: "Buenos días. Hoy vuelvo al mar, porque contigo siempre termino volviendo ahí.",
    poema: [
      "Dicen que el sonido del mar tranquiliza porque se parece al sonido que escuchábamos antes de nacer.",
      "Espero ser, de alguna forma, un sonido igual de tranquilo para ti."
    ],
    detalle: "Cuando estemos frente al mar, quiero que sea sin afán, sin planes, solo estar.",
    buenasNoches: "Buenas noches, que el sonido de las olas te acompañe hasta dormir.",
    notaImagen: "[PARA TI] otra foto de playa o algo relacionado al mar.",
    notaCancion: "[PARA TI] algo con sonido de olas o ambiente costero."
  },
  {
    dia: 43,
    categoria: "Morado",
    icono: "🔮",
    color: { principal: "#8f5fd1", suave: "#e0d3fa", oscuro: "#160a2b" },
    buenosDias: "Buenos días, misteriosa. Hoy va dedicado a lo que no siempre dices en voz alta.",
    poema: [
      "El morado también es el color de lo místico, de lo que no se explica del todo.",
      "Hay partes tuyas que todavía estoy descubriendo, y me gusta que así sea, poco a poco."
    ],
    detalle: "Cuéntame hoy algo que no sepa de ti, aunque sea algo pequeño.",
    buenasNoches: "Buenas noches, misteriosa. Mañana sigo descubriéndote.",
    notaImagen: "[PARA TI] otra foto en morado, algo que le guste especialmente.",
    notaCancion: "[PARA TI] algo con más profundidad, atmosférico."
  },
  {
    dia: 44,
    categoria: "Arte",
    icono: "🖌️",
    color: { principal: "#3f8fd1", suave: "#c9e2fa", oscuro: "#081b2b" },
    buenosDias: "Buenos días, obra de arte. Hoy va dedicado a lo única que eres.",
    poema: [
      "Ninguna obra de arte es igual a otra, ni siquiera cuando el mismo artista intenta repetirla.",
      "Tú tampoco tienes copia, y eso es justo lo que más me gusta."
    ],
    detalle: "Algún día quiero ir contigo a un museo o galería, solo para verte mirar el arte.",
    buenasNoches: "Buenas noches, obra irrepetible.",
    notaImagen: "[PARA TI] una foto de algún museo o arte que le guste.",
    notaCancion: "[PARA TI] algo elegante, ambiental."
  },
  {
    dia: 45,
    categoria: "Gerbera",
    icono: "🌼",
    color: { principal: "#ff6f3d", suave: "#ffd0b8", oscuro: "#2b1104" },
    buenosDias: "Buenos días. Hoy va dedicado, otra vez, a tu forma de alegrar todo sin esfuerzo.",
    poema: [
      "Ya te lo dije una vez, pero se repite porque sigue siendo cierto: no necesitas esforzarte para alegrar un lugar.",
      "Simplemente llegas y ya todo se siente mejor."
    ],
    detalle: "Gracias por seguir siendo así, incluso en tus días no tan buenos.",
    buenasNoches: "Buenas noches, alegría mía.",
    notaImagen: "[PARA TI] otra foto de gerberas o flores de colores.",
    notaCancion: "[PARA TI] algo animado, para el buen ánimo."
  },
  {
    dia: 46,
    categoria: "Películas",
    icono: "🍿",
    color: { principal: "#a81f1f", suave: "#f0aeae", oscuro: "#160404" },
    buenosDias: "Buenos días. Hoy va otra dedicada al cine, porque sé que te encanta.",
    poema: [
      "Si nuestra historia fuera una película, no sería de esas de acción sin descanso, sería de esas lentas, con buenos diálogos, que uno quiere ver otra vez.",
      "De esas que al final dejan ganas de más."
    ],
    detalle: "¿Cuál es esa película que puedes ver mil veces y nunca te cansa?",
    buenasNoches: "Buenas noches, hasta la próxima escena.",
    notaImagen: "[PARA TI] otra foto o póster de alguna película favorita.",
    notaCancion: "[PARA TI] otra banda sonora que le guste."
  },
  {
    dia: 47,
    categoria: "Vistas",
    icono: "🌄",
    color: { principal: "#4f6d8f", suave: "#c9dcee", oscuro: "#0a1622" },
    buenosDias: "Buenos días. Casi llegamos al final del calendario, y quiero que hoy respires un poco.",
    poema: [
      "Me gustaría que este mensaje te llegara justo en un momento tranquilo, viendo algo bonito, sin afán.",
      "Si no es así, guárdalo para cuando lo necesites."
    ],
    detalle: "Ya casi terminamos estos cincuenta días, pero esto apenas empieza.",
    buenasNoches: "Buenas noches, desde algún lugar tranquilo pensando en ti.",
    notaImagen: "[PARA TI] otra foto de un paisaje o mirador que le guste.",
    notaCancion: "[PARA TI] algo ambiental, para cerrar el día en calma."
  },
  {
    dia: 48,
    categoria: "Música",
    icono: "🎧",
    color: { principal: "#9c3fc2", suave: "#e6c9ff", oscuro: "#1a0a26" },
    buenosDias: "Buenos días. Hoy quiero que pongas tu canción favorita antes de hacer cualquier otra cosa.",
    poema: [
      "La música tiene esa cosa de guardar momentos completos dentro de tres minutos.",
      "Quiero que sigamos llenando la lista de canciones que después, sin querer, nos van a recordar a este momento."
    ],
    detalle: "Revisa el botón de música otra vez, ahí sigo dejando cosas para ti.",
    buenasNoches: "Buenas noches, con buena música de fondo, espero.",
    notaImagen: "[PARA TI] otra foto relacionada a la música que compartan.",
    notaCancion: "[PARA TI] su canción favorita de todos los tiempos."
  },
  {
    dia: 49,
    categoria: "Mar",
    icono: "🌅",
    color: { principal: "#2a8f8f", suave: "#b8ecec", oscuro: "#041a1a" },
    buenosDias: "Buenos días. Ya casi terminamos este primer calendario, y quiero cerrarlo bonito.",
    poema: [
      "Desde la música hasta el mar, dijiste que te gustaba la naturaleza y todo lo que tuviera buena vista.",
      "Quiero ser parte de todos esos paisajes que todavía te faltan por ver."
    ],
    detalle: "Mañana es el último día de este calendario, pero no el último mensaje que te voy a escribir en la vida.",
    buenasNoches: "Buenas noches, casi al final de este primer viaje.",
    notaImagen: "[PARA TI] otra foto de mar o atardecer.",
    notaCancion: "[PARA TI] algo especial, para ir cerrando el ciclo."
  },
  {
    dia: 50,
    categoria: "Nosotros",
    icono: "🎉",
    color: { principal: "#ff5d8f", suave: "#ffd7e6", oscuro: "#2a0f1c" },
    buenosDias: "Buenos días. Hoy llegamos a la mitad de este calendario: cincuenta días de noventa, un mes y medio completo.",
    poema: [
      "Empezamos con un Snoopy y una promesa de acompañarte cada día, y aquí seguimos, justo en la mitad del camino.",
      "Gracias por leer cada uno de estos mensajes, por darle clic a cada corazón, por dejarme contarte de mil formas distintas lo mismo: que te amo.",
      "Todavía falta la otra mitad, y pienso hacerla tan bonita como esta primera parte."
    ],
    detalle: "Gracias por llegar hasta el día cincuenta. Vamos a la mitad, sigamos.",
    buenasNoches: "Buenas noches, a mitad de camino y con muchas ganas de seguir.",
    notaImagen: "[PARA TI] una foto bonita de los dos, para celebrar este punto medio.",
    notaCancion: "[PARA TI] una canción que sientas que representa lo que llevan hasta aquí."
  },
  {
    dia: 51,
    categoria: "Peonía",
    icono: "🌸",
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
    dia: 52,
    categoria: "Hello Kitty",
    icono: "🎀",
    color: { principal: "#ff6fa8", suave: "#ffd7e6", oscuro: "#3a0f24" },
    buenosDias: "Buenos días, ternura. Ya vamos por más de cincuenta días y sigues siendo mi parte favorita de todos ellos.",
    poema: [
      "No me cansa repetir lo mismo de formas distintas: me gustas, me importas, quiero estar.",
      "Hoy simplemente quería que lo supieras otra vez."
    ],
    detalle: "A veces lo simple hay que decirlo seguido, no solo una vez.",
    buenasNoches: "Buenas noches, dulce como siempre.",
    notaImagen: "[PARA TI] otra foto tierna, tipo Hello Kitty.",
    notaCancion: "[PARA TI] algo dulce y liviano."
  },
  {
    dia: 53,
    categoria: "Café",
    icono: "☕",
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
    dia: 54,
    categoria: "Spider-Man",
    icono: "🦸",
    color: { principal: "#3a6ea5", suave: "#c9dcf2", oscuro: "#081321" },
    buenosDias: "Buenos días, mi heroína favorita. Hoy toca recordar lo fuerte que eres, aunque no siempre te lo digas.",
    poema: [
      "Nadie ve todo lo que cargas y aun así sigues, eso también es un superpoder.",
      "Yo sí lo veo, y te admiro por eso más de lo que imaginas."
    ],
    detalle: "Si hoy sientes que cargas mucho, suéltame algo de peso, para eso estoy.",
    buenasNoches: "Buenas noches, guerrera. Descansa, mañana sigues siendo increíble.",
    notaImagen: "[PARA TI] algo que la haga sentir fuerte y orgullosa.",
    notaCancion: "[PARA TI] algo con energía, empoderador."
  },
  {
    dia: 55,
    categoria: "Jazmín",
    icono: "🪷",
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
    dia: 56,
    categoria: "Snoopy",
    icono: "🐾",
    color: { principal: "#f4c453", suave: "#fff0c9", oscuro: "#241a05" },
    buenosDias: "Buenos días, compañera de aventuras chiquitas.",
    poema: [
      "No todas las aventuras necesitan ser grandes: a veces es solo un día cualquiera, bien acompañado.",
      "Contigo hasta lo pequeño se siente aventura."
    ],
    detalle: "¿Cuál ha sido tu aventura pequeña favorita de esta semana?",
    buenasNoches: "Buenas noches, aventurera.",
    notaImagen: "[PARA TI] una foto de alguna salida o aventura chiquita que hayan tenido.",
    notaCancion: "[PARA TI] algo divertido, de esas para un paseo."
  },
  {
    dia: 57,
    categoria: "Recuerdos",
    icono: "📸",
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
    dia: 58,
    categoria: "Clavel",
    icono: "🌸",
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
    dia: 59,
    categoria: "Libros",
    icono: "🖤",
    color: { principal: "#6b2142", suave: "#e3b8c9", oscuro: "#180509" },
    buenosDias: "Buenos días, lectora empedernida. Hoy toca hablar de finales que enganchan.",
    poema: [
      "Me gustan los libros que dejan ganas de más al terminar el capítulo.",
      "Contigo pasa igual: cada día que hablamos me deja con ganas del siguiente."
    ],
    detalle: "¿Ya empezaste algún libro nuevo? Cuéntame de qué va.",
    buenasNoches: "Buenas noches, hasta el próximo capítulo de esto.",
    notaImagen: "[PARA TI] una foto de su lectura actual.",
    notaCancion: "[PARA TI] algo con atmósfera, tipo banda sonora."
  },
  {
    dia: 60,
    categoria: "Risas",
    icono: "😂",
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
    dia: 61,
    categoria: "Violeta",
    icono: "🪻",
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
    dia: 62,
    categoria: "Chocolate",
    icono: "🧁",
    color: { principal: "#a9713f", suave: "#ecd2ae", oscuro: "#20130a" },
    buenosDias: "Buenos días, dulzura. Otra vez el antojo de hoy va por ahí.",
    poema: [
      "No sé si es la costumbre o que de verdad funciona, pero algo dulce siempre ayuda un poco al día.",
      "Tú también ayudas, casi de la misma forma."
    ],
    detalle: "Date un gusto dulce hoy, sin remordimientos.",
    buenasNoches: "Buenas noches, dulce hasta en sueños.",
    notaImagen: "[PARA TI] otra foto de postres o dulces.",
    notaCancion: "[PARA TI] algo alegre y liviano."
  },
  {
    dia: 63,
    categoria: "Morado",
    icono: "🍇",
    color: { principal: "#7b4fd1", suave: "#dccafc", oscuro: "#160a2b" },
    buenosDias: "Buenos días, team dorado y morado. Hoy le toca al morado otra vez.",
    poema: [
      "Ya perdí la cuenta de cuántas veces te he dicho que el morado te queda bien, pero sigue siendo cierto.",
      "Así que hoy, otra vez, va dedicado a tu color."
    ],
    detalle: "Si puedes, usa algo morado hoy, por variar del dorado.",
    buenasNoches: "Buenas noches, en tu color favorito.",
    notaImagen: "[PARA TI] otra foto en tonos morados.",
    notaCancion: "[PARA TI] algo con ese mismo vibe, suave pero con carácter."
  },
  {
    dia: 64,
    categoria: "Gratitud",
    icono: "🙏",
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
    dia: 65,
    categoria: "Azucena",
    icono: "🤍",
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
    dia: 66,
    categoria: "Películas",
    icono: "🎥",
    color: { principal: "#c22b2b", suave: "#f3b3b3", oscuro: "#1a0505" },
    buenosDias: "Buenos días. Hoy va otra dedicada al cine, porque nunca es suficiente.",
    poema: [
      "Creo que ya te debo como cinco maratones de películas pendientes.",
      "Prometo que en algún momento las vamos a ver todas, una por una."
    ],
    detalle: "Empecemos a anotar la lista oficial de pendientes de cine.",
    buenasNoches: "Buenas noches, hasta los próximos créditos.",
    notaImagen: "[PARA TI] un póster de alguna película pendiente.",
    notaCancion: "[PARA TI] otra banda sonora que le guste."
  },
  {
    dia: 67,
    categoria: "Dorado",
    icono: "🌟",
    color: { principal: "#d4af37", suave: "#f7e8b0", oscuro: "#241c04" },
    buenosDias: "Buenos días, estrella dorada. Literal, hoy brillas fuerte.",
    poema: [
      "No hace falta ocasión especial para brillar, tú lo haces en cualquier día común.",
      "Ojalá te veas hoy como yo te veo."
    ],
    detalle: "Ponte algo dorado hoy, aunque sea un detalle pequeño.",
    buenasNoches: "Buenas noches, estrella.",
    notaImagen: "[PARA TI] otra foto en dorado.",
    notaCancion: "[PARA TI] algo con brillo, animado."
  },
  {
    dia: 68,
    categoria: "Orquídea",
    icono: "🌺",
    color: { principal: "#d94fb0", suave: "#ffd6f0", oscuro: "#26071c" },
    buenosDias: "Buenos días, difícil y hermosa. Otra vez la orquídea de hoy es para ti.",
    poema: [
      "Cuidar una orquídea toma paciencia, pero nadie se arrepiente cuando florece.",
      "Contigo también hay que tener paciencia a veces, y jamás me he arrepentido."
    ],
    detalle: "Gracias por dejarme tener paciencia contigo, y por tenerla tú conmigo también.",
    buenasNoches: "Buenas noches, mi flor paciente.",
    notaImagen: "[PARA TI] otra foto de orquídeas.",
    notaCancion: "[PARA TI] algo elegante, tipo bolero."
  },
  {
    dia: 69,
    categoria: "Comodidad",
    icono: "🧣",
    color: { principal: "#7d8fa6", suave: "#dbe4ee", oscuro: "#131a22" },
    buenosDias: "Buenos días. Otro día de esos cómodos, sin afán.",
    poema: [
      "A veces el mejor plan es no tener plan: solo estar cómoda, sin hacer nada productivo.",
      "Ojalá hoy sea de esos días para ti."
    ],
    detalle: "Ponte lo más cómodo que tengas hoy, sin culpa.",
    buenasNoches: "Buenas noches, calientita otra vez.",
    notaImagen: "[PARA TI] otra foto de un día cómodo y relajado.",
    notaCancion: "[PARA TI] algo suave, para no hacer nada de fondo."
  },
  {
    dia: 70,
    categoria: "Música",
    icono: "💃",
    color: { principal: "#c23fd1", suave: "#f2c9ff", oscuro: "#210a26" },
    buenosDias: "Buenos días. Hoy toca moverse un poco, aunque sea bailando en la cocina.",
    poema: [
      "Me gusta imaginarte bailando sola en tu cuarto cuando crees que nadie te ve.",
      "Algún día quiero bailar contigo, aunque los dos bailemos mal."
    ],
    detalle: "Pon una canción y baila aunque sea treinta segundos hoy.",
    buenasNoches: "Buenas noches, con el ritmo todavía en el cuerpo.",
    notaImagen: "[PARA TI] una foto bailando o en algún evento con música.",
    notaCancion: "[PARA TI] algo pegajoso, para bailar."
  },
  {
    dia: 71,
    categoria: "Girasol",
    icono: "🌞",
    color: { principal: "#f2b705", suave: "#fff0b3", oscuro: "#251c02" },
    buenosDias: "Buenos días, luz. Otra vez el girasol de hoy va para ti.",
    poema: [
      "Van más de setenta días de esto y sigues siendo la razón por la que quiero escribir uno más.",
      "Eso ya dice bastante."
    ],
    detalle: "Gracias por seguir aquí, leyendo cada uno.",
    buenasNoches: "Buenas noches, sigues siendo mi luz favorita.",
    notaImagen: "[PARA TI] otra foto de girasoles o un atardecer.",
    notaCancion: "[PARA TI] algo alegre, para el buen ánimo."
  },
  {
    dia: 72,
    categoria: "Futuro",
    icono: "🔭",
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
    dia: 73,
    categoria: "Salchipapa",
    icono: "🌭",
    color: { principal: "#e0632f", suave: "#ffcfa8", oscuro: "#2b1103" },
    buenosDias: "Buenos días. Otra vez el antojo simple del día: comida callejera.",
    poema: [
      "No todo tiene que ser romántico para ser especial, a veces solo es una buena salchipapa compartida.",
      "Sigo debiéndote esa, no se me ha olvidado."
    ],
    detalle: "¿Qué otro antojo callejero se te antoja hoy?",
    buenasNoches: "Buenas noches, satisfecha otra vez.",
    notaImagen: "[PARA TI] otra foto de comida callejera favorita.",
    notaCancion: "[PARA TI] algo divertido, para pedir domicilio con buena música."
  },
  {
    dia: 74,
    categoria: "Rosa",
    icono: "🌹",
    color: { principal: "#d81e3e", suave: "#ffc2ce", oscuro: "#2b0508" },
    buenosDias: "Buenos días, mi rosa. Ya van varias veces que te digo esto y sigue siendo tan cierto como la primera vez.",
    poema: [
      "No me canso de compararte con la misma flor, porque sigue siendo la que mejor te describe.",
      "Profunda, bonita, con carácter."
    ],
    detalle: "Significado de la rosa, otra vez: amor que no se esconde.",
    buenasNoches: "Buenas noches, mi rosa de siempre.",
    notaImagen: "[PARA TI] otra foto de rosas.",
    notaCancion: "[PARA TI] algo romántico, clásico."
  },
  {
    dia: 75,
    categoria: "Arte",
    icono: "🖼️",
    color: { principal: "#e0a63d", suave: "#ffe3b0", oscuro: "#241a04" },
    buenosDias: "Buenos días, artista. Hoy quiero que veas algo bonito, aunque sea por accidente.",
    poema: [
      "El arte no siempre está en un museo, a veces está en cómo alguien arregla su cuarto o combina su ropa.",
      "Tú tienes ese ojo, aunque no siempre lo notes."
    ],
    detalle: "Fíjate hoy en algo que te parezca bonito, aunque sea pequeño.",
    buenasNoches: "Buenas noches, con buen ojo hasta para soñar.",
    notaImagen: "[PARA TI] otra foto de arte o de algo creativo suyo.",
    notaCancion: "[PARA TI] algo artístico, con textura."
  },
  {
    dia: 76,
    categoria: "Elegancia",
    icono: "👗",
    color: { principal: "#2f6d6b", suave: "#bfe3e0", oscuro: "#08191a" },
    buenosDias: "Buenos días, elegancia. Otra vez pensando en ese plan pendiente.",
    poema: [
      "Sigo con ganas de verte arreglada, de esas ocasiones que se sienten especiales.",
      "Ya casi encontramos la excusa perfecta, lo presiento."
    ],
    detalle: "Empecemos a planear esa salida elegante que tenemos pendiente.",
    buenasNoches: "Buenas noches, elegante hasta en sueños, otra vez.",
    notaImagen: "[PARA TI] otra foto suya arreglada.",
    notaCancion: "[PARA TI] algo elegante, tipo balada especial."
  },
  {
    dia: 77,
    categoria: "Sorpresas",
    icono: "🎁",
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
    dia: 78,
    categoria: "Lirio",
    icono: "🕊️",
    color: { principal: "#c7bfe0", suave: "#f1eefb", oscuro: "#161425" },
    buenosDias: "Buenos días, calma. Otra vez el lirio de hoy es para recordarte que está bien ir despacio.",
    poema: [
      "Van casi ochenta días de esto, y ninguno ha sido apurado.",
      "Así lo quiero seguir haciendo: sin prisa, pero sin parar."
    ],
    detalle: "No hay afán con nada de esto, ni con lo nuestro.",
    buenasNoches: "Buenas noches, tranquila, como siempre debiste estar.",
    notaImagen: "[PARA TI] otra foto en tonos blancos o suaves.",
    notaCancion: "[PARA TI] algo minimalista."
  },
  {
    dia: 79,
    categoria: "Lugares",
    icono: "🗺️",
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
    dia: 80,
    categoria: "Peluches",
    icono: "🧸",
    color: { principal: "#d9a066", suave: "#f5dfc0", oscuro: "#241708" },
    buenosDias: "Buenos días. Hoy, otra vez, dedicado a lo que abraza sin condiciones.",
    poema: [
      "Ya perdí la cuenta de cuántas veces te he dicho esto, pero lo repito: quiero ser tu lugar seguro.",
      "No me cansa decirlo de nuevo."
    ],
    detalle: "Abraza algo hoy de mi parte, lo que tengas a la mano.",
    buenasNoches: "Buenas noches, abrazada otra vez.",
    notaImagen: "[PARA TI] otra foto tierna de peluches.",
    notaCancion: "[PARA TI] algo tierno y calmado."
  },
  {
    dia: 81,
    categoria: "Margarita",
    icono: "🌼",
    color: { principal: "#f2e94e", suave: "#faf6cf", oscuro: "#141a08" },
    buenosDias: "Buenos días. Otra vez lo simple es protagonista hoy.",
    poema: [
      "Van más de ochenta días y sigo creyendo que lo simple es lo que más dura.",
      "Contigo, lo simple siempre ha sido suficiente."
    ],
    detalle: "Hoy no necesitas nada extra para estar bien, ya eres suficiente así.",
    buenasNoches: "Buenas noches, simple y bonita, como siempre.",
    notaImagen: "[PARA TI] otra foto de margaritas.",
    notaCancion: "[PARA TI] algo simple y bonito."
  },
  {
    dia: 82,
    categoria: "Naturaleza",
    icono: "🌱",
    color: { principal: "#4fa66b", suave: "#c8ecd4", oscuro: "#0a2013" },
    buenosDias: "Buenos días. Ya casi terminamos estos tres meses, y sigo pensando en todo lo verde que nos falta por ver.",
    poema: [
      "Como una planta, esto también ha ido creciendo despacio, un día a la vez.",
      "Y mira todo lo que ya lleva creciendo."
    ],
    detalle: "Ochenta y dos días de esto. Ninguno fue en vano.",
    buenasNoches: "Buenas noches, creciendo todavía.",
    notaImagen: "[PARA TI] otra foto de naturaleza o un paisaje verde.",
    notaCancion: "[PARA TI] algo acústico."
  },
  {
    dia: 83,
    categoria: "Hello Kitty",
    icono: "🎀",
    color: { principal: "#ff9ecb", suave: "#ffe6f2", oscuro: "#33091c" },
    buenosDias: "Buenos días, mi favorita de siempre. Ya casi terminamos este primer tramo.",
    poema: [
      "Sigues siendo mi persona favorita, ahora con más razones que hace ochenta y tres días.",
      "Cada día que pasa se suma, no se resta."
    ],
    detalle: "Gracias por seguir aquí hasta este punto.",
    buenasNoches: "Buenas noches, favorita de siempre.",
    notaImagen: "[PARA TI] otra foto tierna.",
    notaCancion: "[PARA TI] algo dulce."
  },
  {
    dia: 84,
    categoria: "Mar",
    icono: "🏖️",
    color: { principal: "#2ea3a3", suave: "#c3f0ee", oscuro: "#062020" },
    buenosDias: "Buenos días. Otra vez el mar en la cabeza hoy.",
    poema: [
      "Cada vez que pienso en el mar, pienso en lo bien que se sentiría verlo contigo, o repetirlo si ya lo hemos visto juntos.",
      "Ya casi terminamos estos tres meses, y ese plan del mar sigue en pie."
    ],
    detalle: "Anota el mar en la lista de planes pendientes, en serio.",
    buenasNoches: "Buenas noches, con sonido de olas de fondo, espero.",
    notaImagen: "[PARA TI] otra foto de playa o mar.",
    notaCancion: "[PARA TI] algo costero, relajado."
  },
  {
    dia: 85,
    categoria: "Spider-Man",
    icono: "🕷️",
    color: { principal: "#e13a3a", suave: "#ffc9c9", oscuro: "#210a0a" },
    buenosDias: "Buenos días, mi equipo favorito. Ya casi llegamos al final de este primer calendario.",
    poema: [
      "Ochenta y cinco días sosteniendo esto, aunque tú no sepas que también lo sostienes desde tu lado.",
      "Gracias por seguir aquí."
    ],
    detalle: "Este equipo sigue firme, pase lo que pase.",
    buenasNoches: "Buenas noches, mi compañera de equipo.",
    notaImagen: "[PARA TI] otra foto divertida de los dos.",
    notaCancion: "[PARA TI] algo con energía."
  },
  {
    dia: 86,
    categoria: "Cielo nocturno",
    icono: "🌌",
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
    dia: 87,
    categoria: "Snoopy",
    icono: "🐶",
    color: { principal: "#6fb1e0", suave: "#d6ecfb", oscuro: "#071522" },
    buenosDias: "Buenos días, compañera. Casi llegamos al día noventa, ¿lo puedes creer?",
    poema: [
      "Empezamos esto con un Snoopy el día uno, y aquí seguimos, casi tres meses después.",
      "Ninguno de estos días fue al azar, cada uno lo pensé para ti."
    ],
    detalle: "Gracias por acompañarme en esto de escribirte todos los días.",
    buenasNoches: "Buenas noches, casi al final de este primer tramo.",
    notaImagen: "[PARA TI] otra foto tierna, cerrando el ciclo de Snoopy.",
    notaCancion: "[PARA TI] algo nostálgico."
  },
  {
    dia: 88,
    categoria: "Películas",
    icono: "🎬",
    color: { principal: "#a81f1f", suave: "#f0aeae", oscuro: "#160404" },
    buenosDias: "Buenos días. Si esto fuera una película, ya estaríamos cerca del final del segundo acto.",
    poema: [
      "Y en las buenas películas, el final del segundo acto es justo antes de que todo se ponga mejor.",
      "Así que esto no es un final, es apenas el principio de algo más grande."
    ],
    detalle: "Ya casi llegamos al día noventa, prepárate.",
    buenasNoches: "Buenas noches, quedan pocas escenas de este primer tramo.",
    notaImagen: "[PARA TI] otro póster o foto de cine.",
    notaCancion: "[PARA TI] algo cinematográfico."
  },
  {
    dia: 89,
    categoria: "Libros",
    icono: "📖",
    color: { principal: "#6b2142", suave: "#e3b8c9", oscuro: "#180509" },
    buenosDias: "Buenos días, lectora. Estamos a un día de terminar este primer libro que escribimos juntos.",
    poema: [
      "Si esto fuera una novela, este sería el penúltimo capítulo, ese donde todo empieza a acomodarse antes del final.",
      "Mañana cerramos este primer libro, pero ya sé que va a haber una segunda parte."
    ],
    detalle: "Prepárate para el capítulo final de mañana.",
    buenasNoches: "Buenas noches, penúltima noche de este primer tramo.",
    notaImagen: "[PARA TI] otra foto de libros o lectura.",
    notaCancion: "[PARA TI] algo con atmósfera de cierre."
  },
  {
    dia: 90,
    categoria: "Nosotros",
    icono: "🎉",
    color: { principal: "#ff5d8f", suave: "#ffd7e6", oscuro: "#2a0f1c" },
    buenosDias: "Buenos días. Hoy es el día noventa: tres meses completos de escribirte algo distinto cada día.",
    poema: [
      "Empezamos con un Snoopy y una promesa de acompañarte todos los días que pudiera, y aquí seguimos, noventa días después.",
      "Gracias por darle clic a cada corazón, por leer cada poema, por dejarme decirte de mil formas distintas siempre lo mismo: que te amo, que pienso en ti, que quiero estar.",
      "Esto no se termina aquí. Este es solo el primer capítulo de algo que planeo seguir construyendo contigo, un día a la vez."
    ],
    detalle: "Gracias por estos tres meses. Esto lo hice completo, pensando solo en ti.",
    buenasNoches: "Buenas noches, mi persona favorita. Fin del primer capítulo, no de la historia.",
    notaImagen: "[PARA TI] tu foto favorita de los dos, para cerrar este primer tramo con algo especial.",
    notaCancion: "[PARA TI] la canción que sientas que representa esta etapa de ustedes."
  }

];

