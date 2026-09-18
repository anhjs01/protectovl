/* =======================================================================
   CONTENIDO-CALENDARIO.JS
   -----------------------------------------------------------------------
   Aquí viven los 216 días del calendario. Cada día es un objeto con:

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
    buenosDias: "Buenos días. Hay una luz particular en las mañanas de esta semana, de esas que entran de lado y hacen que todo se vea un poco más honesto. Hoy empieza algo que llevaba tiempo queriendo hacerte.",
    poema: [
      "Como ese amigo que nunca se cansa de estar cerca, quiero ser tu lugar seguro en los días buenos y también en los raros.",
      "Este es el primero de cincuenta días pensados para ti."
    ],
    detalle: "Cada día vas a encontrar algo distinto, prometido.",
    buenasNoches: "El día ya se apagó casi del todo, y antes de cerrar los ojos quería dejarte esto. Buenas noches. Que descanses sabiendo que ya empezamos esto juntos.",
    notaImagen: "[PARA TI] una foto tierna de un perrito, o algo que te recuerde a Snoopy.",
    notaCancion: "[PARA TI] algo suave y hogareño para abrir el calendario."
  },

  {
    dia: 2,
    categoria: "Acústico",
    icono: "🎶",
    tono: "filosofica",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Hay días que empiezan con prisa y días que empiezan despacio, y este es de los segundos, justo lo que necesitaba. Música alegre para recordar que caminar juntos es lo mejor.",
    poema: [
      "Contigo cualquier martes se siente como viernes,",
      "cualquier lugar se vuelve casa."
    ],
    detalle: "Te mando un abrazo enorme con esta canción de fondo.",
    buenasNoches: "El teléfono ya está casi sin batería, pero antes de que se apague quería mandarte esto. Que descanses plácidamente.",
    notaImagen: "[MÚSICA] Canción: Contigo",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 3,
    categoria: "Del Mar",
    icono: "🌊",
    tono: "amor",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Todavía no termino el café y ya te estoy escribiendo, para que veas el orden de prioridades que manejo. Hoy quiero hablarte de una canción sobre querer ser el único lugar al que alguien quiera volver.",
    poema: [
      "Hay una canción de Ozuna que habla de querer ser esa persona especial, la única, para alguien que le gusta de verdad.",
      "Contigo no tengo que esforzarme para eso: ya eres la única persona que quiero en este plan."
    ],
    detalle: "Se llama 'Del Mar', de Ozuna.",
    buenasNoches: "Hay una calma particular en las últimas horas del día que hace que todo se sienta más simple, más claro. Buenas noches, siendo, espero, tu única persona en este plan.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'Del Mar' - Ozuna."
  },

  {
    dia: 4,
    categoria: "Cimientos",
    icono: "🖌️",
    tono: "filosofica",
    color: { principal: "#3f8fd1", suave: "#c9e2fa", oscuro: "#081b2b" },
    buenosDias: "Buenos días. Hay algo reconfortante en empezar el día sabiendo exactamente a quién le voy a escribir primero. Hoy pensé en los cimientos, en todo lo que no se ve pero sostiene lo que sí se ve.",
    poema: [
      "Las cosas bonitas de nosotros se notan, pero lo que más valoro es lo que no se ve: la confianza, el respeto, las ganas de seguir intentando.",
      "Esos son los cimientos que de verdad importan."
    ],
    detalle: "Gracias por ayudarme a construir cimientos fuertes, no solo cosas bonitas por fuera.",
    buenasNoches: "El ruido del día por fin bajó de volumen, y en ese silencio es más fácil sentir las cosas con claridad. Buenas noches, sobre una base sólida, gracias a ti.",
    notaImagen: "[PARA TI] una foto de algún museo o arte que le guste.",
    notaCancion: "[PARA TI] algo elegante, ambiental."
  },

  {
    dia: 5,
    categoria: "Sin palabras",
    icono: "🤍",
    tono: "hot",
    color: { principal: "#e0294f", suave: "#ffc9d6", oscuro: "#20050b" },
    buenosDias: "Buenos días. Hay un silencio particular en las mañanas después de soñar contigo, uno que se queda pegado a la piel un rato antes de que el día empiece de verdad.",
    poema: [
      "No fue un sueño explícito, pero sí de esos que dejan una sensación clara al despertar: la certeza de tus manos en algún punto que ya no recuerdo bien.",
      "Hay cosas que se sienten más de lo que se logran contar, y esta mañana es una de esas."
    ],
    detalle: "No te pregunto qué soñaste tú. Prefiero que me lo cuentes cuando quieras, despacio.",
    buenasNoches: "Buenas noches. Ojalá el sueño de hoy tenga la decencia de continuar donde se quedó el de ayer.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 6,
    categoria: "Hello Kitty",
    icono: "🎀",
    tono: "amor",
    color: { principal: "#ff6fa8", suave: "#ffd7e6", oscuro: "#3a0f24" },
    buenosDias: "Buenos días. El día recién empieza a tomar forma, y ya sé que una parte buena de él tiene que ver contigo. pequeña. Espero que hoy todo te trate tan bien como te mereces.",
    poema: [
      "Hay un tipo de calma que solo llega cuando pienso en ti: como si el día, por más enredado que esté, encontrara por fin dónde sentarse a descansar.",
      "Quiero seguir siendo tu lugar suave."
    ],
    detalle: "Hoy es un día para lo tierno, lo simple, lo que no necesita esfuerzo.",
    buenasNoches: "El día se cierra, como siempre, con vos como el último pensamiento antes de apagar la luz. Buenas noches, dulzura. Que sueñes bonito.",
    notaImagen: "[PARA TI] algo rosado, tierno, tipo Hello Kitty.",
    notaCancion: "[PARA TI] algo dulce, tipo pop suave."
  },

  {
    dia: 7,
    categoria: "Vértigo",
    icono: "🌪️",
    tono: "filosofica",
    color: { principal: "#3a1f5c", suave: "#c9b8e6", oscuro: "#0c0716" },
    buenosDias: "Buenos días. Hay un tipo de silencio en las mañanas tempranas que se presta perfecto para pensar con calma, y hoy lo usé para pensar en ti. Contigo aprendí que el amor también puede dar vértigo, y no me quejo.",
    poema: [
      "Hay amores que se sienten como un paseo tranquilo, y hay otros que se sienten como el borde de algo alto, con ganas de saltar de todas formas.",
      "El mío por ti es de los segundos, y elijo saltar cada vez."
    ],
    detalle: "Gracias por ser el tipo de vértigo que vale la pena sentir.",
    buenasNoches: "Hay noches en que uno se queda despierto de más, y esta es una de esas, por pensar en ti un rato extra. Buenas noches, todavía cayendo, sin querer detenerme.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 8,
    categoria: "Girasol",
    icono: "🌻",
    tono: "amor",
    color: { principal: "#f2b705", suave: "#fff0b3", oscuro: "#251c02" },
    buenosDias: "Buenos días. Las primeras luces del día siempre me hacen pensar en empezar de cero, y hoy quise empezar pensando en ti. mi girasol. Que tu día empiece con la misma luz que tú le das al mío.",
    poema: [
      "El girasol gira buscando la luz durante todo el día; yo hago lo mismo contigo, sin importar en qué dirección empiece la mañana.",
      "Eres la claridad que hace que todo lo demás se vea mejor."
    ],
    detalle: "Significado del girasol: fidelidad y luz propia.",
    buenasNoches: "La cama todavía está fría, pero el pensamiento de ti ya la calentó un poco. Buenas noches. Descansa, mañana el sol vuelve a salir para los dos.",
    notaImagen: "[PARA TI] una foto de girasoles, o de un atardecer que te guste.",
    notaCancion: "[PARA TI] algo alegre, de esas que suben el ánimo."
  },

  {
    dia: 9,
    categoria: "Gestos",
    icono: "🎥",
    tono: "amor",
    color: { principal: "#c22b2b", suave: "#f3b3b3", oscuro: "#1a0505" },
    buenosDias: "Buenos días. Hay mañanas que parecen prometer algo bueno desde el primer minuto, y esta es una de esas. Hoy quiero hablar de los gestos pequeños, los que casi no se notan pero dicen mucho.",
    poema: [
      "Un mensaje a tiempo, una llamada sin razón, un 'cómo estás' sincero: esos son los gestos que más me gustan de nosotros.",
      "Voy a seguir cuidando esos detalles."
    ],
    detalle: "¿Cuál es un gesto pequeño tuyo que me haga sentir querido? Dime.",
    buenasNoches: "El cansancio del día ya se siente en el cuerpo, pero pensar en ti siempre alivia un poco esa parte. Buenas noches, con un gesto pequeño más sumado al día.",
    notaImagen: "[PARA TI] un póster de alguna película pendiente.",
    notaCancion: "[PARA TI] otra banda sonora que le guste."
  },

  {
    dia: 10,
    categoria: "Tono de voz",
    icono: "📻",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. Todavía no me tomo el café completo y ya voy por la mitad de este mensaje. Letras crudas y sinceras para un día de reflexión y tranquilidad.",
    poema: [
      "Querer querernos sin excusas ni atajos,",
      "sabiendo que somos el refugio del otro."
    ],
    detalle: "Tómate las cosas con calma hoy y disfruta de la música.",
    buenasNoches: "Hay un tipo de sueño que llega mejor cuando el último pensamiento del día fue bueno, y hoy lo fue, gracias a ti. Que tengas una noche sumamente tranquila.",
    notaImagen: "[MÚSICA] Canción: Querer Querernos",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 11,
    categoria: "Cerca",
    icono: "🔥",
    tono: "hot",
    color: { principal: "#d1163f", suave: "#f7bccb", oscuro: "#1c0409" },
    buenosDias: "Buenos días. Anoche pasé un rato calculando cuántos días exactos faltan para la próxima vez que estemos en el mismo cuarto.",
    poema: [
      "No es una cifra pequeña, y aun así se siente más corta cada vez que pienso en lo que quiero hacer apenas cruces la puerta.",
      "Nada elaborado. Solo cerca. Muy cerca, sin que nadie tenga prisa por moverse de ahí."
    ],
    detalle: "Guarda tiempo esa tarde. No planeo compartir tu atención con nada más.",
    buenasNoches: "Buenas noches. Un día menos, según mi cuenta poco confiable pero muy motivada.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 12,
    categoria: "Elegancia",
    icono: "👗",
    tono: "amor",
    color: { principal: "#2f6d6b", suave: "#bfe3e0", oscuro: "#08191a" },
    buenosDias: "Buenos días. Hay mañanas que se sienten como una hoja en blanco, y hoy decidí empezar la mía escribiéndote a ti. elegancia. Hoy va dedicado a esos días en que te arreglas y el mundo se detiene un segundo.",
    poema: [
      "Sé que te encantan los vestidos largos, esos que se sienten como una ocasión especial incluso en un día cualquiera.",
      "Ojalá pronto tengamos una excusa para que te pongas uno y yo solo pueda mirarte."
    ],
    detalle: "Avísame cuando tengamos ese plan elegante pendiente, ya quiero verlo.",
    buenasNoches: "Las últimas luces de la casa ya se apagaron, y en la oscuridad, como siempre, apareciste tú primero en mis pensamientos. Buenas noches, elegante hasta en sueños.",
    notaImagen: "[PARA TI] una foto suya arreglada, si tiene alguna que le guste.",
    notaCancion: "[PARA TI] algo elegante, tipo una balada especial."
  },

  {
    dia: 13,
    categoria: "Aprendizaje",
    icono: "🎀",
    tono: "amor",
    color: { principal: "#ff6fa8", suave: "#ffd7e6", oscuro: "#3a0f24" },
    buenosDias: "Buenos días. El aire todavía huele a noche cuando empiezo a escribirte esto. Contigo he aprendido cosas que no sabía que me hacían falta aprender.",
    poema: [
      "No hablo de cosas grandes, hablo de detalles: paciencia, calma, la forma correcta de escuchar.",
      "Sigues siendo de mis mejores maestras, sin proponértelo."
    ],
    detalle: "Gracias por enseñarme sin intentarlo.",
    buenasNoches: "Las estrellas, si es que se ven desde donde estás, tienen algo tuyo hoy, aunque suene un poco cursi decirlo así. Buenas noches, todavía aprendiendo de ti, con gusto.",
    notaImagen: "[PARA TI] otra foto tierna, tipo Hello Kitty.",
    notaCancion: "[PARA TI] algo dulce y liviano."
  },

  {
    dia: 14,
    categoria: "Nota musical",
    icono: "📻",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. El teléfono marcó la hora y, en automático, pensé en ti antes de pensar en cualquier pendiente del día. Melodías relajantes y letras profundas para un día tranquilo.",
    poema: [
      "Dámelo todo, tus días buenos y tus días grises,",
      "aquí estoy para compartirlo todo."
    ],
    detalle: "Una invitación a escuchar buena música y desconectarse un rato.",
    buenasNoches: "Hay una quietud distinta en las noches, de esas que invitan a pensar despacio en lo que de verdad importa. Cierra los ojos y descansa con tranquilidad.",
    notaImagen: "[MÚSICA] Canción: Dámelo Todo",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 15,
    categoria: "Trivia musical",
    icono: "🎸",
    tono: "filosofica",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. Hay una energía distinta en los días que empiezan escribiéndote, no sabría explicar bien por qué. Música alegre para mantener el buen humor durante toda la jornada.",
    poema: [
      "Contigo cualquier momento ordinario se vuelve mágico,",
      "una razón más para sonreír."
    ],
    detalle: "Ponla a sonar en tus audífonos ahora mismo.",
    buenasNoches: "Hay noches donde el cansancio gana rápido, y aun así encontré energía para pensarte un rato más. Duerme rico, te pienso un montón.",
    notaImagen: "[MÚSICA] Canción: Contigo",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 16,
    categoria: "Un día cualquiera",
    icono: "🍿",
    tono: "amor",
    color: { principal: "#a81f1f", suave: "#f0aeae", oscuro: "#160404" },
    buenosDias: "Buenos días. El café todavía está humeando cuando ya estoy pensando en qué decirte hoy. Hoy no es ninguna fecha especial, y aun así quería escribirte.",
    poema: [
      "Los días comunes también merecen mensajes bonitos, no solo los aniversarios.",
      "Este es uno de esos días comunes que quiero hacer especial solo por escribirte."
    ],
    detalle: "Feliz día cualquiera, contigo en la cabeza.",
    buenasNoches: "La luz de la lámpara es lo único encendido ya en este cuarto, y sigo aquí, pensando en cómo cerrar bien el día contigo en mente. Buenas noches, en un día cualquiera que terminó siendo bonito.",
    notaImagen: "[PARA TI] otra foto o póster de alguna película favorita.",
    notaCancion: "[PARA TI] otra banda sonora que le guste."
  },

  {
    dia: 17,
    categoria: "Tormenta",
    icono: "⛈️",
    tono: "filosofica",
    color: { principal: "#43225c", suave: "#cdb8e8", oscuro: "#0d0716" },
    buenosDias: "Buenos días. Antes de revisar cualquier otra cosa en el teléfono, ya estaba escribiéndote esto. No todos los días son sol contigo, y aun así, hasta tus tormentas prefiero a la calma de otra persona.",
    poema: [
      "Prefiero discutir contigo y hacer las paces, que tener paz forzada con alguien más.",
      "Porque hasta en tormenta, sigues siendo el lugar al que quiero volver."
    ],
    detalle: "Gracias por pelear por esto también en los días difíciles.",
    buenasNoches: "Hay noches que se sienten largas y noches que se sienten cortas, y esta, contigo en la cabeza, se sintió de las buenas. Buenas noches, después de la tormenta, todavía aquí.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 18,
    categoria: "Vivir Mi Vida",
    icono: "🎵",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. El día apenas empieza a definirse, pero ya sé que una parte de él va a estar dedicada a pensar en ti. Hoy quiero hablarte de una canción sobre disfrutar la vida a pesar de lo difícil que a veces se pone.",
    poema: [
      "Hay una canción de Marc Anthony que habla de bailar y disfrutar la vida incluso en los días grises, como una forma de resistencia alegre.",
      "Contigo se me hace más fácil vivir así, disfrutando aunque el día no esté perfecto."
    ],
    detalle: "Se llama 'Vivir Mi Vida', de Marc Anthony. Sube el volumen con esta.",
    buenasNoches: "Hay una versión más honesta de mí que solo sale de noche, y esa versión también te quiere mucho. Buenas noches, agradecido de vivir mi vida contigo cerca.",
    cancionUrl: "https://www.youtube.com/watch?v=YXnjy5YlDwk",
    notaImagen: "[MÚSICA] Canción: Amor Completo",
    notaCancion: "[PARA TI] canción real, con link real puesto para que suene ese día."
  },

  {
    dia: 19,
    categoria: "Playlist privada",
    icono: "🎧",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días. Anoche armé, casi sin querer, una lista de canciones que definitivamente no pondría si alguien más estuviera cerca.",
    poema: [
      "No es el tipo de música para fondo de oficina. Es de la que baja el volumen de todo lo demás y sube el de una sola persona en la cabeza.",
      "Esa playlist sigue privada. Por ahora."
    ],
    detalle: "El día que la escuches conmigo vas a entender por qué tiene ese nombre.",
    buenasNoches: "Buenas noches. La lista sigue creciendo, para que lo sepas.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 20,
    categoria: "Incendio",
    icono: "🔥",
    tono: "filosofica",
    color: { principal: "#4a1830", suave: "#d9a7bd", oscuro: "#120206" },
    buenosDias: "Buenos días. El cielo todavía tiene ese color raro de las mañanas que no se deciden entre gris y celeste. Hay formas de querer que queman despacio, y la mía por ti es una de esas.",
    poema: [
      "No fue un incendio rápido, fue una brasa que se quedó ahí, calentando todo poco a poco hasta que ya no hubo forma de apagarla.",
      "Y honestamente, ya ni quiero que se apague."
    ],
    detalle: "Sigues siendo el fuego más constante que he tenido.",
    buenasNoches: "El día se despide con la misma certeza de siempre: que quiero que mañana empiece igual, pensando en ti primero. Buenas noches, con la brasa todavía encendida.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 21,
    categoria: "Palabras que faltan",
    icono: "🎬",
    tono: "amor",
    color: { principal: "#a81f1f", suave: "#f0aeae", oscuro: "#160404" },
    buenosDias: "Buenos días. Hay un tipo de calma particular en escribir esto antes de que el celular empiece a sonar con todo lo demás. Hay días en que las palabras no alcanzan para explicar lo que siento, y hoy es uno de esos.",
    poema: [
      "A veces quiero decir tanto que termino sin decir nada, y espero que igual se sienta.",
      "Lo que no logro poner en palabras, espero que lo sientas en la intención."
    ],
    detalle: "Si algún día no encuentro las palabras correctas, ten paciencia, sigo intentando decírtelo bien.",
    buenasNoches: "Hay un silencio particular a esta hora que hace que las palabras pesen distinto, más sinceras. Buenas noches, con más sentido del que logré poner en palabras hoy.",
    notaImagen: "[PARA TI] otro póster o foto de cine.",
    notaCancion: "[PARA TI] algo cinematográfico."
  },

  {
    dia: 22,
    categoria: "Make You Feel My Love",
    icono: "🌧️",
    tono: "amor",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. El sol todavía no calienta del todo, pero algo aquí adentro ya empezó a hacerlo. Hoy quiero hablarte de una canción sobre todo lo que alguien estaría dispuesto a hacer con tal de que la otra persona sienta lo mucho que la quieren.",
    poema: [
      "Hay una canción de Bob Dylan, muy conocida también en la versión de Adele, que habla de enfrentar tormentas, noches largas y lo que sea necesario con tal de que el otro sienta ese amor de verdad.",
      "No hace falta que enfrente tormentas literales, pero sí quiero que sientas esto tan real como se puede sentir."
    ],
    detalle: "Se llama 'Make You Feel My Love'. La versión de Adele es preciosa, la original es de Bob Dylan.",
    buenasNoches: "Hay algo tranquilizador en saber que, sin importar cómo estuvo el día, esto de escribirte de noche no cambia. Buenas noches, esperando que hayas sentido, aunque sea un poco, todo esto.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'Make You Feel My Love' - Adele (o Bob Dylan, la original)."
  },

  {
    dia: 23,
    categoria: "Crecer juntos",
    icono: "🦸",
    tono: "amor",
    color: { principal: "#3a6ea5", suave: "#c9dcf2", oscuro: "#081321" },
    buenosDias: "Buenos días. Hay mañanas silenciosas y mañanas ruidosas, y esta, por suerte, es de las tranquilas. Hoy pensé en todo lo que hemos crecido, cada uno por su lado y también juntos.",
    poema: [
      "Me gusta la idea de que sigamos cambiando, y que ese cambio siga incluyéndonos a los dos.",
      "Quiero seguir creciendo contigo cerca, no lejos."
    ],
    detalle: "Gracias por crecer conmigo, aunque a veces duela un poco crecer.",
    buenasNoches: "El silencio de la noche siempre hace que las cosas simples, como decir buenas noches, se sientan un poco más importantes. Buenas noches, un poco más grande que ayer, gracias a ti.",
    notaImagen: "[PARA TI] algo que la haga sentir fuerte y orgullosa.",
    notaCancion: "[PARA TI] algo con energía, empoderador."
  },

  {
    dia: 24,
    categoria: "Mixtape",
    icono: "🎶",
    tono: "amor",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. El ruido de la calle todavía no arranca del todo, y en ese pequeño espacio de calma te escribo esto. Ritmo urbano para mantener presente a esa persona especial.",
    poema: [
      "Aunque el día esté ocupado y lleno de tareas,",
      "el pensamiento siempre se escapa hacia ti."
    ],
    detalle: "Ponla en tus audífonos y disfrútala.",
    buenasNoches: "Hay algo bonito en cerrar el día pensando en la misma persona con la que se abrió, y hoy fue así otra vez. Que descanses, te pienso un montón.",
    notaImagen: "[MÚSICA] Canción: Sigo Extrañándote",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 25,
    categoria: "Provocación",
    icono: "😈",
    tono: "hot",
    color: { principal: "#d1163f", suave: "#f7bccb", oscuro: "#1c0409" },
    buenosDias: "Buenos días. Anoche pensé una frase para mandarte hoy y la borré tres veces porque me pareció demasiado directa incluso para mí.",
    poema: [
      "Al final decidí no editarla más: quiero saber si logro sacarte esa sonrisa que se te escapa cuando sabes exactamente lo que estoy pensando.",
      "No prometo comportarme el resto del mensaje."
    ],
    detalle: "¿Funcionó? Contéstame con honestidad, no con cortesía.",
    buenasNoches: "Buenas noches. La frase editada tres veces sigue guardada, por si la necesito mañana.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 26,
    categoria: "Música",
    icono: "🎶",
    tono: "amor",
    color: { principal: "#c23fd1", suave: "#f2c9ff", oscuro: "#210a26" },
    buenosDias: "Buenos días. Hay mañanas donde uno se siente con ganas de todo, y esta parece ser una de esas. Hoy va dedicado a lo que suena cuando nadie más está mirando.",
    poema: [
      "Me gusta la idea de tener canciones que ya son solo nuestras, esas que apenas suenan y ya piensas en el otro.",
      "Vamos armando esa lista, poco a poco."
    ],
    detalle: "Revisa el botón de música: ahí te voy dejando canciones que me hacen pensar en ti.",
    buenasNoches: "El día ya cumplió su ciclo completo, y como siempre, terminó pensando en la misma persona con la que empezó. Buenas noches, que la última canción que escuches hoy sea una bonita.",
    notaImagen: "[PARA TI] una foto de algún concierto o momento musical juntos.",
    notaCancion: "[PARA TI] la canción que sientan que ya es 'de los dos'."
  },

  {
    dia: 27,
    categoria: "A oscuras",
    icono: "🕶️",
    tono: "hot",
    color: { principal: "#a10e35", suave: "#f0aabd", oscuro: "#140208" },
    buenosDias: "Buenos días. Hay una clase de confianza que solo se nota cuando se apagan las luces y nadie se pone nervioso.",
    poema: [
      "No hablo solo de oscuridad literal, hablo de esa seguridad de no necesitar ver para saber exactamente dónde está todo, cómo se siente todo.",
      "Contigo esa confianza ya la tengo, completa, sin ensayarla."
    ],
    detalle: "Cuando quieras repetir esa clase de cercanía, aquí sigo, sin apuro.",
    buenasNoches: "Buenas noches, a oscuras, pensando en formas de acercarme más la próxima vez.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 28,
    categoria: "Compás",
    icono: "🎼",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. El despertador sonó dos veces antes de que lograra levantarme, y en el medio, sin darme cuenta, ya estaba pensando en ti. Los acordes de bajo y las letras directas tienen un encanto único.",
    poema: [
      "Quiero ser tu abrigo favorito y tu refugio nocturno,",
      "el lugar al que siempre quieras volver."
    ],
    detalle: "Agrega esta canción a tus favoritas de la semana.",
    buenasNoches: "Las luces de la calle ya se encendieron hace rato, y aquí sigo, pensando en ti antes de dormir. Que tengas una noche muy placentera.",
    notaImagen: "[MÚSICA] Canción: I Wanna Be Yours",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 29,
    categoria: "Silencio bonito",
    icono: "🖤",
    tono: "filosofica",
    color: { principal: "#4a1830", suave: "#d9a7bd", oscuro: "#120206" },
    buenosDias: "Buenos días. Hoy el despertar fue lento, de esos donde uno se queda un rato más en la cama solo pensando. Hoy no tengo mucho que decir, y aun así quería escribirte, aunque sea poco.",
    poema: [
      "Hay silencios que incomodan y hay silencios que se sienten completos, y los que tengo contigo son de los segundos.",
      "No siempre hace falta llenar todo con palabras."
    ],
    detalle: "Gracias por los silencios cómodos que hemos tenido.",
    buenasNoches: "Afuera ya no se escucha casi nada, solo el silencio típico de esta hora, cómodo, tranquilo. Buenas noches, en un silencio bonito, pensando en ti.",
    notaImagen: "[PARA TI] otra foto de sus libros o de una biblioteca bonita.",
    notaCancion: "[PARA TI] algo con más intensidad, tipo banda sonora dramática."
  },

  {
    dia: 30,
    categoria: "Bonus privado",
    icono: "🍷",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días. El mensaje de hoy viene con contenido extra que normalmente me guardo para ocasiones especiales.",
    poema: [
      "Hay pensamientos que quedan fuera del resumen diario, como escenas que se cortan del final pero siguen existiendo en algún lado.",
      "Este es uno de esos: pendiente de estreno, en persona, sin apuro."
    ],
    detalle: "Cóbrame el extra cuando quieras. Tengo buena memoria para estas cosas.",
    buenasNoches: "Buenas noches, con el contenido extra todavía guardado, esperando su momento.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 31,
    categoria: "Volver a empezar",
    icono: "🌺",
    tono: "filosofica",
    color: { principal: "#d94fb0", suave: "#ffd6f0", oscuro: "#26071c" },
    buenosDias: "Buenos días. Todavía hace frío afuera, pero aquí adentro algo ya se siente tibio desde temprano. Cada día es una oportunidad de volver a empezar, incluso en algo que ya va bien.",
    poema: [
      "Me gusta la idea de que cada mañana podamos elegir empezar de nuevo, sin cargar los errores del día anterior.",
      "Hoy elijo empezar de nuevo contigo, otra vez, con las mismas ganas de siempre."
    ],
    detalle: "Empecemos hoy de nuevo, como si fuera el primer día, con las mismas ganas.",
    buenasNoches: "El ruido de afuera bajó por completo, y en ese silencio hay espacio de sobra para pensar en ti con calma. Buenas noches, listo para empezar de nuevo mañana.",
    notaImagen: "[PARA TI] otra foto de orquídeas.",
    notaCancion: "[PARA TI] algo elegante, tipo bolero."
  },

  {
    dia: 32,
    categoria: "Canción bajo la lluvia",
    icono: "🎧",
    tono: "filosofica",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. El primer pensamiento coherente del día, antes que cualquier lista de pendientes, fue sobre ti. Letras nostálgicas y hermosas para empezar la mañana con calma.",
    poema: [
      "Y cuando la distancia pesa en el pecho,",
      "tu recuerdo se vuelve la mejor canción."
    ],
    detalle: "Te mando un abrazo gigante para arrancar el día.",
    buenasNoches: "El cielo ya está completamente oscuro, y en algún lugar de ahí arriba hay una estrella que, según decidí hoy, es tuya. Descansa rico, nos leemos mañana.",
    notaImagen: "[MÚSICA] Canción: Colapso",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 33,
    categoria: "Canción al volante",
    icono: "📻",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. Afuera el día apenas se estira, y aquí ya estoy yo, pensando en ti antes que en cualquier otra cosa. Ritmo urbano para mantener arriba la energía en la recta final.",
    poema: [
      "Tus ojos lindos mirando hacia el frente",
      "son el mejor paisaje para cualquier día."
    ],
    detalle: "Guarda un ratito para descansar entre pendientes.",
    buenasNoches: "Las cobijas ya están listas, y en un rato, cuando cierre los ojos, sé exactamente en quién voy a pensar. Que descanses profundamente.",
    notaImagen: "[MÚSICA] Canción: Ojitos Lindos",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 34,
    categoria: "Dorado",
    icono: "✨",
    tono: "amor",
    color: { principal: "#d4af37", suave: "#f7e8b0", oscuro: "#241c04" },
    buenosDias: "Buenos días. Hay una calma particular en las primeras horas, antes de que el ruido del día se meta por todos lados. team dorado. Hoy el día se viste de tu color favorito.",
    poema: [
      "El dorado no se apaga fácil, brilla incluso con poca luz.",
      "Así eres tú, incluso en los días grises encuentras la forma de brillar un poco."
    ],
    detalle: "Hoy, si puedes, ponte algo dorado. Sé que te encanta.",
    buenasNoches: "Las cosas del día ya quedaron atrás, y lo único que sigue presente, como siempre, eres tú. Buenas noches, que sigas brillando hasta en sueños.",
    notaImagen: "[PARA TI] algo dorado que le guste: joyería, ropa, detalles.",
    notaCancion: "[PARA TI] algo con brillo, animado."
  },

  {
    dia: 35,
    categoria: "Tema principal",
    icono: "💿",
    tono: "amor",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Hay una quietud bonita en las mañanas de entre semana que casi nadie aprovecha, y hoy la usé para esto. ¡Llegamos a los 180 días! Y lo celebramos con buena música.",
    poema: [
      "Sumando 149 días de historias y canciones,",
      "comprobando que cada detalle vale oro."
    ],
    detalle: "Gracias por todo tu empeño y por hacer esto tan especial.",
    buenasNoches: "El día terminó, con sus cosas buenas y sus cosas normales, pero contigo en la mente el balance siempre sale bien. Descansa profundamente, amor.",
    notaImagen: "[MÚSICA] Canción: Colapso",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 36,
    categoria: "Costumbre",
    icono: "☁️",
    tono: "amor",
    color: { principal: "#6fb1e0", suave: "#d6ecfb", oscuro: "#071522" },
    buenosDias: "Buenos días. Hoy me desperté antes de la alarma, y en ese ratito extra, sin planearlo, ya estaba pensando en ti. Hoy quiero hablar de algo que no se nota mucho pero sostiene todo: la costumbre buena.",
    poema: [
      "Hay costumbres que aburren y hay costumbres que dan paz, y la de pensarte cada día es de las segundas.",
      "No quiero que esto deje de ser costumbre nunca."
    ],
    detalle: "Gracias por ser de las costumbres que no cansan.",
    buenasNoches: "El silencio de la casa a esta hora es distinto a cualquier otro momento del día, más íntimo, más real. Buenas noches, con la costumbre de pensarte intacta.",
    notaImagen: "[PARA TI] una foto de un cielo bonito, nubes, un atardecer.",
    notaCancion: "[PARA TI] algo soñador, tranquilo."
  },

  {
    dia: 37,
    categoria: "Constancia",
    icono: "🌹",
    tono: "amor",
    color: { principal: "#d81e3e", suave: "#ffc2ce", oscuro: "#2b0508" },
    buenosDias: "Buenos días. Hay una luz particular en las mañanas de esta semana, de esas que entran de lado y hacen que todo se vea un poco más honesto. No soy de grandes gestos todo el tiempo, pero sí soy constante, y eso también cuenta.",
    poema: [
      "Prefiero ser constante que espectacular una sola vez y después desaparecer.",
      "Aquí sigo, día tras día, constante como siempre."
    ],
    detalle: "Gracias por valorar la constancia tanto como los gestos grandes.",
    buenasNoches: "El día ya se apagó casi del todo, y antes de cerrar los ojos quería dejarte esto. Buenas noches, constante, como cada noche.",
    notaImagen: "[PARA TI] otra foto de rosas.",
    notaCancion: "[PARA TI] algo romántico, clásico."
  },

  {
    dia: 38,
    categoria: "Aplausos",
    icono: "🎵",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. Hay días que empiezan con prisa y días que empiezan despacio, y este es de los segundos, justo lo que necesitaba. Un estilo único que atrapa desde el primer acorde de bajo.",
    poema: [
      "Ser tu refugio cuando afuera todo arde",
      "es lo único que necesito para sentirme en casa."
    ],
    detalle: "Guarda esta recomendación para escucharla con calma esta tarde.",
    buenasNoches: "El teléfono ya está casi sin batería, pero antes de que se apague quería mandarte esto. Que el descanso de esta noche sea reparador y silencioso.",
    notaImagen: "[MÚSICA] Canción: I Wanna Be Yours",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 39,
    categoria: "A puerta cerrada",
    icono: "🗝️",
    tono: "hot",
    color: { principal: "#a10e35", suave: "#f0aabd", oscuro: "#140208" },
    buenosDias: "Buenos días. Hay temas que prefiero hablar contigo sin que la pantalla se interponga.",
    poema: [
      "No es que no confíe en el mensaje de texto, es que hay cosas que suenan mejor bajito, cerca, sin la distancia de por medio.",
      "Anota el tema pendiente. Cuando estemos solos, retomamos justo ahí."
    ],
    detalle: "Prepárate, la lista de temas pendientes ya no es tan corta.",
    buenasNoches: "Buenas noches, con la conversación pendiente todavía guardada bajo llave.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 40,
    categoria: "Letra que falta",
    icono: "🎤",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. Todavía no termino el café y ya te estoy escribiendo, para que veas el orden de prioridades que manejo. Folclor y modernidad unidos en una letra hermosa.",
    poema: [
      "Que bonito es quererte de esta forma tan libre,",
      "sin prisa pero sin pausa."
    ],
    detalle: "Escúchala hoy y déjate envolver por su vibra.",
    buenasNoches: "Hay una calma particular en las últimas horas del día que hace que todo se sienta más simple, más claro. Que la noche te abrace bonito.",
    notaImagen: "[MÚSICA] Canción: Tú Sí Sabes Querírmeme",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 41,
    categoria: "Recuerdos",
    icono: "📸",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. Hay algo reconfortante en empezar el día sabiendo exactamente a quién le voy a escribir primero. Hoy pensé en todo lo que quiero que quede guardado de nosotros.",
    poema: [
      "Me gusta la idea de ir guardando momentos, no solo fechas importantes, también los días comunes.",
      "Quiero que tengamos muchas fotos de cosas sin razón especial, solo porque sí."
    ],
    detalle: "Guarda hoy una foto de algo pequeño y bonito que veas, para nuestra colección.",
    buenasNoches: "El ruido del día por fin bajó de volumen, y en ese silencio es más fácil sentir las cosas con claridad. Buenas noches, otro recuerdo más guardado.",
    notaImagen: "[PARA TI] una foto de ustedes dos o de un recuerdo bonito.",
    notaCancion: "[PARA TI] algo nostálgico."
  },

  {
    dia: 42,
    categoria: "Ojitos Lindos",
    icono: "👀",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. El día recién empieza a tomar forma, y ya sé que una parte buena de él tiene que ver contigo. Hoy quiero hablarte de una canción sobre encontrar consuelo en la mirada de alguien, incluso en los días tristes.",
    poema: [
      "Hay una canción de Bad Bunny y Bomba Estéreo que habla de lo bien que se siente estar cerca de alguien con 'ojitos lindos', incluso cuando el día no ha sido el mejor.",
      "Contigo cerca, hasta los días tristes se sienten más livianos."
    ],
    detalle: "Se llama 'Ojitos Lindos', de Bad Bunny y Bomba Estéreo.",
    buenasNoches: "El día se cierra, como siempre, con vos como el último pensamiento antes de apagar la luz. Buenas noches, con tus ojitos lindos todavía en la cabeza.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'Ojitos Lindos' - Bad Bunny & Bomba Estéreo."
  },

  {
    dia: 43,
    categoria: "Volumen alto",
    icono: "🎧",
    tono: "filosofica",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. Hay un tipo de silencio en las mañanas tempranas que se presta perfecto para pensar con calma, y hoy lo usé para pensar en ti. Un recordatorio musical de que el cariño cruza cualquier distancia.",
    poema: [
      "Aunque pasen los días y los kilómetros pesen,",
      "el pensamiento siempre vuelve al punto de partida."
    ],
    detalle: "Ponla a sonar y mándame un mensajito cuando la escuches.",
    buenasNoches: "Hay noches en que uno se queda despierto de más, y esta es una de esas, por pensar en ti un rato extra. Que descanses, soñando con lo que viene.",
    notaImagen: "[MÚSICA] Canción: Sigo Extrañándote",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 44,
    categoria: "Sorpresas",
    icono: "🎁",
    tono: "amor",
    color: { principal: "#d1467f", suave: "#ffc9dd", oscuro: "#26060f" },
    buenosDias: "Buenos días. Las primeras luces del día siempre me hacen pensar en empezar de cero, y hoy quise empezar pensando en ti. Hoy quiero que estés atenta a algo pequeño.",
    poema: [
      "No todas las sorpresas tienen que ser grandes, a veces es solo un mensaje en el momento correcto.",
      "Espero que este cuente como una de esas."
    ],
    detalle: "Sorpréndete a ti misma hoy haciendo algo que se te antoje, sin razón.",
    buenasNoches: "La cama todavía está fría, pero el pensamiento de ti ya la calentó un poco. Buenas noches, con una sorpresa pequeña cumplida, espero.",
    notaImagen: "[PARA TI] algo sorpresa que le tengas preparado.",
    notaCancion: "[PARA TI] algo divertido, inesperado."
  },

  {
    dia: 45,
    categoria: "Favorito",
    icono: "🎤",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. Hay mañanas que parecen prometer algo bueno desde el primer minuto, y esta es una de esas. Hoy quiero hablarte de una canción bien simple: la de ser el favorito de alguien.",
    poema: [
      "Hay una canción de Camilo que habla de eso, de ser la persona favorita de alguien, sin necesidad de más explicación.",
      "Tú eres mi favorita, así de simple, así de claro."
    ],
    detalle: "Se llama 'Favorito', de Camilo. Y espero, con la misma sinceridad, ser también tu favorito.",
    buenasNoches: "El cansancio del día ya se siente en el cuerpo, pero pensar en ti siempre alivia un poco esa parte. Buenas noches, mi favorita, como siempre.",
    cancionUrl: "https://www.youtube.com/watch?v=2mY7AFTtYwQ",
    notaImagen: "[MÚSICA] Canción: Querer Querernos",
    notaCancion: "[PARA TI] canción real, con link real puesto para que suene ese día."
  },

  {
    dia: 46,
    categoria: "Permanencia",
    icono: "⏳",
    tono: "filosofica",
    color: { principal: "#4a1830", suave: "#d9a7bd", oscuro: "#120206" },
    buenosDias: "Buenos días. Todavía no me tomo el café completo y ya voy por la mitad de este mensaje. Hoy quiero hablar de tiempo, del que ya pasó y del que planeo seguir sumando contigo.",
    poema: [
      "No mido esto en días perfectos, lo mido en ganas de seguir sumando más, incluso en los días comunes.",
      "Y las ganas, contigo, no se me han acabado ni un solo día."
    ],
    detalle: "Aquí sigo, sumando tiempo contigo, sin planes de parar.",
    buenasNoches: "Hay un tipo de sueño que llega mejor cuando el último pensamiento del día fue bueno, y hoy lo fue, gracias a ti. Buenas noches, sumando un día más a esto que seguimos construyendo.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 47,
    categoria: "Shuffle",
    icono: "🎤",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. Hay mañanas que se sienten como una hoja en blanco, y hoy decidí empezar la mía escribiéndote a ti. Baladas intensas para cerrar los últimos días con sentimiento.",
    poema: [
      "Quiero entregarte un amor completo y sin reservas,",
      "un refugio seguro ante cualquier tormenta."
    ],
    detalle: "Tómate las cosas con calma y no te dejes abrumar hoy.",
    buenasNoches: "Las últimas luces de la casa ya se apagaron, y en la oscuridad, como siempre, apareciste tú primero en mis pensamientos. Que la noche te traiga calma absoluta.",
    notaImagen: "[MÚSICA] Canción: Amor Completo",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 48,
    categoria: "Lugares",
    icono: "🗺️",
    tono: "filosofica",
    color: { principal: "#5c7d99", suave: "#d4e3ee", oscuro: "#0d1a24" },
    buenosDias: "Buenos días. El aire todavía huele a noche cuando empiezo a escribirte esto. Hoy pensé en todos los lugares que quiero conocer contigo.",
    poema: [
      "Cada vez que veo un lugar con buena vista, pienso en lo bien que se vería contigo ahí.",
      "Vamos armando ese mapa de pendientes, poco a poco."
    ],
    detalle: "Agrega un lugar nuevo a nuestra lista de sitios por conocer.",
    buenasNoches: "Las estrellas, si es que se ven desde donde estás, tienen algo tuyo hoy, aunque suene un poco cursi decirlo así. Buenas noches, desde algún lugar imaginando el próximo destino.",
    notaImagen: "[PARA TI] una foto de un lugar que quieran visitar.",
    notaCancion: "[PARA TI] algo ambiental, para viajar con la mente."
  },

  {
    dia: 49,
    categoria: "Risas",
    icono: "😂",
    tono: "amor",
    color: { principal: "#f2a33d", suave: "#ffe0b0", oscuro: "#241a04" },
    buenosDias: "Buenos días. El teléfono marcó la hora y, en automático, pensé en ti antes de pensar en cualquier pendiente del día. Hoy no hay poesía seria, hoy toca reírse.",
    poema: [
      "Me encanta tu risa, en serio, es de mis sonidos favoritos en el mundo.",
      "Así que hoy la misión es simple: que te rías, aunque sea de algo tonto."
    ],
    detalle: "Mándame el meme o chiste más tonto que encuentres hoy.",
    buenasNoches: "Hay una quietud distinta en las noches, de esas que invitan a pensar despacio en lo que de verdad importa. Buenas noches, con la sonrisa todavía puesta, espero.",
    notaImagen: "[PARA TI] alguna foto graciosa de ustedes dos.",
    notaCancion: "[PARA TI] algo alegre, para el buen humor."
  },

  {
    dia: 50,
    categoria: "Rayando el Sol",
    icono: "☀️",
    tono: "filosofica",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Hay una energía distinta en los días que empiezan escribiéndote, no sabría explicar bien por qué. Hoy quiero hablarte de una canción de rock en español sobre un amor tan intenso que se compara con el sol.",
    poema: [
      "Hay una canción de Maná que habla de un amor que quema, que no se puede controlar del todo, algo grande e imposible de ignorar.",
      "A veces siento que lo que tengo por ti se parece a eso: algo grande, que no cabe en explicaciones cortas."
    ],
    detalle: "Se llama 'Rayando el Sol', de Maná.",
    buenasNoches: "Hay noches donde el cansancio gana rápido, y aun así encontré energía para pensarte un rato más. Buenas noches, con esa intensidad todavía rayando, como el sol de la canción.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'Rayando el Sol' - Maná."
  },

  {
    dia: 51,
    categoria: "Travesura",
    icono: "🍒",
    tono: "hot",
    color: { principal: "#b3123f", suave: "#f2b3c4", oscuro: "#170209" },
    buenosDias: "Buenos días, cómplice. Hoy amanecí con ganas de sacar esa versión tuya que solo aparece cuando cree que nadie está mirando.",
    poema: [
      "Sabes exactamente de cuál hablo: la que se ríe distinto, la que se acerca sin avisar, la que no se comporta del todo.",
      "Esa es mi favorita, para que conste."
    ],
    detalle: "Sácala más seguido. Tienes permiso total de mi parte.",
    buenasNoches: "Buenas noches, traviesa. Mañana seguimos con esto, sin prisa por terminarlo.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 52,
    categoria: "Cómo Te Atreves",
    icono: "💿",
    tono: "amor",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. El café todavía está humeando cuando ya estoy pensando en qué decirte hoy. Hoy quiero hablarte de una canción sobre lo mucho que se extraña a alguien cuando no está.",
    poema: [
      "Hay una canción de Morat que habla de reclamarle, con cariño, a alguien que se fue, por lo mucho que se le extraña.",
      "Menos mal que contigo no tengo que reclamarte eso, porque no te has ido a ningún lado."
    ],
    detalle: "Se llama 'Cómo Te Atreves', de Morat.",
    buenasNoches: "La luz de la lámpara es lo único encendido ya en este cuarto, y sigo aquí, pensando en cómo cerrar bien el día contigo en mente. Buenas noches, sin nada que reclamarte, todo bien como está.",
    notaImagen: "[MÚSICA] Canción: Contigo",
    notaCancion: "[PARA TI] canción real: 'Cómo Te Atreves' - Morat."
  },

  {
    dia: 53,
    categoria: "Complicidad",
    icono: "🔥",
    tono: "hot",
    color: { principal: "#d1163f", suave: "#f7bccb", oscuro: "#1c0409" },
    buenosDias: "Buenos días, cómplice. Hoy quiero recordarte que lo nuestro tiene registros distintos, y todos son igual de reales.",
    poema: [
      "Podemos hablar de planes serios un minuto y al siguiente decir algo que solo los dos entendemos, sin que ninguno le reste valor al otro.",
      "Esa mezcla es exactamente lo que más disfruto de esto."
    ],
    detalle: "Gracias por dejarme mostrarte todas mis versiones, no solo la presentable.",
    buenasNoches: "Buenas noches, cómplice, con ganas de todas esas versiones de nosotros otra vez.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 54,
    categoria: "Coro improvisado",
    icono: "💿",
    tono: "amor",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Antes de revisar cualquier otra cosa en el teléfono, ya estaba escribiéndote esto. Una melodía dulce para arrancar la mañana con una sonrisa.",
    poema: [
      "Tú eres la mitad que le da sentido a mis días,",
      "la pieza que faltaba en este rompecabezas."
    ],
    detalle: "Gracias por ser esa compañía tan bonita a la distancia.",
    buenasNoches: "Hay noches que se sienten largas y noches que se sienten cortas, y esta, contigo en la cabeza, se sintió de las buenas. Descansa profundamente, amor.",
    notaImagen: "[MÚSICA] Canción: La Mitad",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 55,
    categoria: "Auriculares compartidos",
    icono: "🎧",
    tono: "hot",
    color: { principal: "#a10e35", suave: "#f0aabd", oscuro: "#140208" },
    buenosDias: "Buenos días. Anoche imaginé algo simple: los dos compartiendo un solo audífono, tan cerca que la música casi sobra.",
    poema: [
      "Hay una cercanía distinta cuando dos personas escuchan lo mismo casi oído con oído, sin necesitar decir nada durante la canción entera.",
      "Quiero esa escena contigo, pronto, real, sin pantallas de por medio."
    ],
    detalle: "Trae tus audífonos la próxima vez. Ya tengo la canción elegida.",
    buenasNoches: "Buenas noches, todavía imaginando esa cercanía tan simple.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 56,
    categoria: "Ritmo propio",
    icono: "🎼",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. El día apenas empieza a definirse, pero ya sé que una parte de él va a estar dedicada a pensar en ti. Acordes luminosos para arrancar el día con una sonrisa.",
    poema: [
      "Tú trajiste brillo a mis días más grises,",
      "convirtiéndote en la melodía que siempre quiero escuchar."
    ],
    detalle: "Que nada te arrebate la sonrisa en todo el día.",
    buenasNoches: "Hay una versión más honesta de mí que solo sale de noche, y esa versión también te quiere mucho. Cierra los ojos y descansa con paz.",
    notaImagen: "[MÚSICA] Canción: Yellow",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 57,
    categoria: "Antojo",
    icono: "🍓",
    tono: "hot",
    color: { principal: "#b3123f", suave: "#f2b3c4", oscuro: "#170209" },
    buenosDias: "Buenos días. Hoy desperté con un antojo que ningún desayuno va a poder resolver.",
    poema: [
      "Hay antojos que se calman con comida y hay otros que solo se calman con una persona específica cerca, sin sustitutos posibles.",
      "Hoy es exactamente ese segundo tipo, y no tengo intención de disimularlo."
    ],
    detalle: "Anótalo: te debo consentirte como corresponde, sin apuro, cuando estemos cerca.",
    buenasNoches: "Buenas noches, con el antojo todavía sin resolver.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 58,
    categoria: "Unplugged",
    icono: "🎼",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. El cielo todavía tiene ese color raro de las mañanas que no se deciden entre gris y celeste. Baladas intensas para empezar el día con los sentimientos al tope.",
    poema: [
      "Quiero darte amor completo y sin condiciones,",
      "un amor que rompa cualquier distancia."
    ],
    detalle: "Guarda este momento musical para ti hoy.",
    buenasNoches: "El día se despide con la misma certeza de siempre: que quiero que mañana empiece igual, pensando en ti primero. Que duermas rico.",
    notaImagen: "[MÚSICA] Canción: Amor Completo",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 59,
    categoria: "Bellacoso",
    icono: "🎶",
    tono: "hot",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Hoy quiero hablarte de una canción bastante directa sobre el deseo, sin vueltas ni disculpas.",
    poema: [
      "Hay una canción de Residente y Bad Bunny que habla del deseo de una forma bien directa, sin pena, como algo normal entre dos personas que se gustan.",
      "Hoy tenía ganas de ser así de directo también."
    ],
    detalle: "Se llama 'Bellacoso', de Residente y Bad Bunny. El mismo Residente la describió como una canción sobre el deseo consensuado. Y espero que ese deseo también sea de los dos, no solo mío.",
    buenasNoches: "Buenas noches, directo y sin pena, como siempre debería ser esto.",
    cancionUrl: "https://www.youtube.com/watch?v=46rJ4y2kdow",
    notaImagen: "[MÚSICA] Canción: Just the Way You Are",
    notaCancion: "[PARA TI] canción real, con link real puesto para que suene ese día."
  },

  {
    dia: 60,
    categoria: "Mañana contigo",
    icono: "🧣",
    tono: "amor",
    color: { principal: "#7d8fa6", suave: "#dbe4ee", oscuro: "#131a22" },
    buenosDias: "Buenos días. Hay un tipo de calma particular en escribir esto antes de que el celular empiece a sonar con todo lo demás. Hoy no pienso en el mañana lejano, pienso en el mañana cercano, el de mañana mismo, contigo.",
    poema: [
      "Me gusta tener un mañana asegurado contigo, aunque sea solo un mensaje de buenos días como este.",
      "Nos vemos mañana, otra vez, aquí."
    ],
    detalle: "Ya quiero que sea mañana para escribirte de nuevo.",
    buenasNoches: "Hay un silencio particular a esta hora que hace que las palabras pesen distinto, más sinceras. Buenas noches, hasta mañana, contigo de nuevo.",
    notaImagen: "[PARA TI] otra foto de un día cómodo y relajado.",
    notaCancion: "[PARA TI] algo suave, para no hacer nada de fondo."
  },

  {
    dia: 61,
    categoria: "Die For You",
    icono: "🎵",
    tono: "hot",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. Hoy quiero hablarte de una canción sobre la devoción que a veces da un poco de miedo admitir.",
    poema: [
      "Hay una canción de The Weeknd que habla de un amor tan grande que asusta un poco decirlo en voz alta, pero que se siente real de todas formas.",
      "No sé si llegaría tan lejos como dice la canción, pero la intensidad sí la entiendo."
    ],
    detalle: "Se llama 'Die For You', de The Weeknd.",
    buenasNoches: "Buenas noches, con toda esa intensidad todavía despierta.",
    cancionUrl: "https://www.youtube.com/watch?v=gSo0YiGPgHk",
    notaImagen: "[MÚSICA] Canción: Querer Querernos",
    notaCancion: "[PARA TI] canción real, con link real puesto para que suene ese día."
  },

  {
    dia: 62,
    categoria: "La Reina",
    icono: "👑",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. El sol todavía no calienta del todo, pero algo aquí adentro ya empezó a hacerlo. reina. Hoy quiero hablarte de una canción sobre tratar a alguien como se merece, aunque actúe como si no lo necesitara.",
    poema: [
      "Hay una canción de Maluma que habla de tratar como reina a alguien que por fuera parece no necesitar a nadie, pero que por dentro sí aprecia que la consientan.",
      "Contigo quiero eso: tratarte bien, aunque sepas arreglártelas sola perfectamente."
    ],
    detalle: "Se llama 'La Reina', de Maluma.",
    buenasNoches: "Hay algo tranquilizador en saber que, sin importar cómo estuvo el día, esto de escribirte de noche no cambia. Buenas noches, reina. Descansa como te mereces.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'La Reina' - Maluma."
  },

  {
    dia: 63,
    categoria: "Morado",
    icono: "💜",
    tono: "amor",
    color: { principal: "#7b4fd1", suave: "#dccafc", oscuro: "#160a2b" },
    buenosDias: "Buenos días. Hay mañanas silenciosas y mañanas ruidosas, y esta, por suerte, es de las tranquilas. Sé que el morado es tuyo, así que hoy el día también lo es.",
    poema: [
      "El morado mezcla la calma del azul con la fuerza del rojo, y de alguna forma me recuerdas a esa mezcla exacta.",
      "Tranquila casi siempre, pero con un fuego que no se apaga cuando de verdad quieres algo."
    ],
    detalle: "Hoy, si puedes, usa algo morado. Aunque sea sin razón.",
    buenasNoches: "El silencio de la noche siempre hace que las cosas simples, como decir buenas noches, se sientan un poco más importantes. Buenas noches. Que sueñes en tu color favorito.",
    notaImagen: "[PARA TI] algo morado que te guste, ropa, flores, lo que sea.",
    notaCancion: "[PARA TI] algo con ese mismo vibe: suave pero con carácter."
  },

  {
    dia: 64,
    categoria: "Lo que no se dice",
    icono: "🏖️",
    tono: "filosofica",
    color: { principal: "#2ea3a3", suave: "#c3f0ee", oscuro: "#062020" },
    buenosDias: "Buenos días. El ruido de la calle todavía no arranca del todo, y en ese pequeño espacio de calma te escribo esto. Hay cosas que siento y que casi nunca digo en voz alta, y hoy quería nombrar una.",
    poema: [
      "A veces asumo que ya sabes cuánto me importas, y se me olvida decirlo directamente.",
      "Así que aquí está, directo: me importas más de lo que demuestro casi siempre."
    ],
    detalle: "Voy a intentar decir más seguido lo que normalmente me guardo.",
    buenasNoches: "Hay algo bonito en cerrar el día pensando en la misma persona con la que se abrió, y hoy fue así otra vez. Buenas noches, con algo importante ya dicho, por fin.",
    notaImagen: "[PARA TI] otra foto de playa o mar.",
    notaCancion: "[PARA TI] algo costero, relajado."
  },

  {
    dia: 65,
    categoria: "Siguiente canción",
    icono: "🎵",
    tono: "filosofica",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. Hay mañanas donde uno se siente con ganas de todo, y esta parece ser una de esas. A un solo paso de completar los doscientos días con la mejor música.",
    poema: [
      "A punto de cruzar el último umbral de esta etapa,",
      "sabiendo que cada nota musical valió la pena."
    ],
    detalle: "Prepara todo para mañana celebrar este hito juntos.",
    buenasNoches: "El día ya cumplió su ciclo completo, y como siempre, terminó pensando en la misma persona con la que empezó. Que duermas de la mejor manera.",
    notaImagen: "[MÚSICA] Canción: Yellow",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 66,
    categoria: "Películas",
    icono: "🎬",
    tono: "amor",
    color: { principal: "#c22b2b", suave: "#f3b3b3", oscuro: "#1a0505" },
    buenosDias: "Buenos días. El despertador sonó dos veces antes de que lograra levantarme, y en el medio, sin darme cuenta, ya estaba pensando en ti. Hoy quiero proponerte una noche de películas, aunque sea en la imaginación por ahora.",
    poema: [
      "Me gusta cómo te emocionas con las películas de amor, cómo te ríes con las comedias y cómo te quedas pensando después de un drama.",
      "Quiero ser parte de esas maratones, con palomitas y todo."
    ],
    detalle: "Hagamos una lista de películas pendientes para ver juntos.",
    buenasNoches: "Las luces de la calle ya se encendieron hace rato, y aquí sigo, pensando en ti antes de dormir. Buenas noches, que tengas sueños con final feliz.",
    notaImagen: "[PARA TI] una foto de una noche de películas, o del póster de alguna que le guste.",
    notaCancion: "[PARA TI] alguna banda sonora que le guste."
  },

  {
    dia: 67,
    categoria: "Gratitud",
    icono: "🙏",
    tono: "amor",
    color: { principal: "#e08fa0", suave: "#fcdbe3", oscuro: "#251015" },
    buenosDias: "Buenos días. Hoy el despertar fue lento, de esos donde uno se queda un rato más en la cama solo pensando. Hoy no hay poema elaborado, solo quiero decir gracias.",
    poema: [
      "Gracias por dejarme ser parte de tu día a día, aunque sea a través de una pantalla la mayoría del tiempo.",
      "Gracias por tomarte el tiempo de leer esto, día tras día."
    ],
    detalle: "Gracias, en serio, por estar.",
    buenasNoches: "Afuera ya no se escucha casi nada, solo el silencio típico de esta hora, cómodo, tranquilo. Buenas noches, agradecido de tenerte.",
    notaImagen: "[PARA TI] algo que represente gratitud para ti.",
    notaCancion: "[PARA TI] algo tranquilo y sincero."
  },

  {
    dia: 68,
    categoria: "Bis merecido",
    icono: "🍒",
    tono: "hot",
    color: { principal: "#d1163f", suave: "#f7bccb", oscuro: "#1c0409" },
    buenosDias: "Buenos días. Hay momentos que se disfrutan tanto que la mente ya empieza a planear la repetición antes de que termine el primero.",
    poema: [
      "No voy a decir a cuál me refiero con exactitud, pero algo me dice que tú también sabes exactamente cuál.",
      "Cuando quieras el bis, aquí sigo, con toda la disposición del mundo."
    ],
    detalle: "Pide el bis cuando quieras. No pienso hacerme rogar.",
    buenasNoches: "Buenas noches, pensando en repeticiones pendientes.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 69,
    categoria: "Ligereza",
    icono: "🌞",
    tono: "amor",
    color: { principal: "#f2b705", suave: "#fff0b3", oscuro: "#251c02" },
    buenosDias: "Buenos días. Todavía hace frío afuera, pero aquí adentro algo ya se siente tibio desde temprano. Contigo todo se siente más ligero, hasta los días pesados.",
    poema: [
      "No sé exactamente cómo lo haces, pero hablar contigo le quita peso a cualquier día difícil.",
      "Gracias por aligerar mis días sin siquiera intentarlo."
    ],
    detalle: "Espero poder hacer lo mismo por ti cuando lo necesites.",
    buenasNoches: "El ruido de afuera bajó por completo, y en ese silencio hay espacio de sobra para pensar en ti con calma. Buenas noches, más liviano gracias a ti.",
    notaImagen: "[PARA TI] otra foto de girasoles o un atardecer.",
    notaCancion: "[PARA TI] algo alegre, para el buen ánimo."
  },

  {
    dia: 70,
    categoria: "Mirada",
    icono: "👀",
    tono: "hot",
    color: { principal: "#b3123f", suave: "#f2b3c4", oscuro: "#170209" },
    buenosDias: "Buenos días. Hay una forma en que a veces me miras que tiene un efecto que no debería tener tan temprano en el día.",
    poema: [
      "No hace falta que digas nada cuando me miras así. El mensaje ya llega completo, sin necesidad de palabras.",
      "Y yo, sin poder evitarlo, respondo exactamente como sabes que voy a responder."
    ],
    detalle: "Sabes perfectamente lo que provoca esa mirada. No te hagas la inocente conmigo.",
    buenasNoches: "Buenas noches, todavía pensando en esa mirada de hoy.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 71,
    categoria: "Casa",
    icono: "🏚️",
    tono: "filosofica",
    color: { principal: "#6b2142", suave: "#e3b8c9", oscuro: "#180509" },
    buenosDias: "Buenos días. El primer pensamiento coherente del día, antes que cualquier lista de pendientes, fue sobre ti. No sé bien qué es un hogar, pero sé que se parece mucho a hablar contigo.",
    poema: [
      "No hace falta una casa con paredes para sentirse en un lugar seguro, a veces el hogar es una persona.",
      "Tú eres el mío, sin importar en qué ciudad estemos cada uno."
    ],
    detalle: "Gracias por ser mi lugar seguro, sin importar la distancia.",
    buenasNoches: "El cielo ya está completamente oscuro, y en algún lugar de ahí arriba hay una estrella que, según decidí hoy, es tuya. Buenas noches, en casa, aunque sea a la distancia.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 72,
    categoria: "Futuro",
    icono: "🔭",
    tono: "amor",
    color: { principal: "#3f5fd1", suave: "#c9d3fa", oscuro: "#0a1030" },
    buenosDias: "Buenos días. Afuera el día apenas se estira, y aquí ya estoy yo, pensando en ti antes que en cualquier otra cosa. Hoy quiero hablar un poco del futuro, sin miedo.",
    poema: [
      "No sé exactamente cómo se va a ver todo, pero me gusta la idea de que tú estés en el dibujo.",
      "Quiero construir cosas contigo, no solo imaginarlas."
    ],
    detalle: "Cuéntame un sueño tuyo, de esos grandes, algún día.",
    buenasNoches: "Las cobijas ya están listas, y en un rato, cuando cierre los ojos, sé exactamente en quién voy a pensar. Buenas noches, soñando en la misma dirección.",
    notaImagen: "[PARA TI] algo que represente un sueño o meta en común.",
    notaCancion: "[PARA TI] algo inspirador."
  },

  {
    dia: 73,
    categoria: "Introspección",
    icono: "🍃",
    tono: "filosofica",
    color: { principal: "#3f8f5f", suave: "#c0e8cf", oscuro: "#0a1f11" },
    buenosDias: "Buenos días. Hay una calma particular en las primeras horas, antes de que el ruido del día se meta por todos lados. Hoy amanecí más callado de lo normal, pensando en nosotros de una forma distinta.",
    poema: [
      "A veces pienso en todo lo que ha cambiado desde que empezamos esto, y no logro encontrar nada de qué arrepentirme.",
      "Eso, para mí, ya dice bastante."
    ],
    detalle: "Gracias por ser parte de mis pensamientos más tranquilos, no solo de los emocionados.",
    buenasNoches: "Las cosas del día ya quedaron atrás, y lo único que sigue presente, como siempre, eres tú. Buenas noches, en calma, pensando en lo bien que va esto.",
    notaImagen: "[PARA TI] otra foto de naturaleza, quizás de algún viaje o caminata.",
    notaCancion: "[PARA TI] algo orgánico, con sonidos naturales de fondo."
  },

  {
    dia: 74,
    categoria: "Vistas",
    icono: "🏞️",
    tono: "filosofica",
    color: { principal: "#5c7d99", suave: "#d4e3ee", oscuro: "#0d1a24" },
    buenosDias: "Buenos días. Hay una quietud bonita en las mañanas de entre semana que casi nadie aprovecha, y hoy la usé para esto. Hoy pensé en esos lugares tranquilos con vista bonita que tanto te gustan.",
    poema: [
      "Me gusta que te guste la soledad bonita, esos lugares donde no hay ruido pero sí mucho para ver.",
      "Quiero encontrar esos lugares contigo, aunque sea en silencio, aunque sea sin decir nada."
    ],
    detalle: "Hagamos una lista de lugares con buena vista para ir conociendo juntos.",
    buenasNoches: "El día terminó, con sus cosas buenas y sus cosas normales, pero contigo en la mente el balance siempre sale bien. Buenas noches, que tu mente viaje a algún lugar tranquilo.",
    notaImagen: "[PARA TI] una foto de un mirador o paisaje que le guste.",
    notaCancion: "[PARA TI] algo ambiental, de esas para contemplar."
  },

  {
    dia: 75,
    categoria: "Bajo volumen",
    icono: "🔥",
    tono: "hot",
    color: { principal: "#e0294f", suave: "#ffc9d6", oscuro: "#20050b" },
    buenosDias: "Buenos días. Hoy quiero hablarte bajito, como se hablan las cosas que son solo entre dos personas.",
    poema: [
      "No todo necesita volumen alto para tener peso. Algunas frases suenan mejor casi en susurro, cerca del oído, sin prisa por terminar.",
      "Así quiero decirte lo de hoy: despacio, bajito, cerca."
    ],
    detalle: "Acércate cuando quieras que te lo repita en persona.",
    buenasNoches: "Buenas noches, con la voz todavía baja, pensando en ti.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 76,
    categoria: "Nuestro ritmo",
    icono: "🐚",
    tono: "filosofica",
    color: { principal: "#1d8f8f", suave: "#b9ecec", oscuro: "#041a1a" },
    buenosDias: "Buenos días. Hoy me desperté antes de la alarma, y en ese ratito extra, sin planearlo, ya estaba pensando en ti. Cada relación tiene su propio ritmo, y me gusta el que hemos encontrado nosotros.",
    poema: [
      "No vamos ni muy rápido ni muy lento, vamos al ritmo que se siente correcto para los dos.",
      "Quiero que sigamos así, a nuestro paso, sin comparar con nadie más."
    ],
    detalle: "Gracias por construir este ritmo conmigo, sin apuros externos.",
    buenasNoches: "El silencio de la casa a esta hora es distinto a cualquier otro momento del día, más íntimo, más real. Buenas noches, al ritmo que se siente bien para los dos.",
    notaImagen: "[PARA TI] otra foto de playa o algo relacionado al mar.",
    notaCancion: "[PARA TI] algo con sonido de olas o ambiente costero."
  },

  {
    dia: 77,
    categoria: "Compás lento",
    icono: "🎧",
    tono: "filosofica",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. Hay una luz particular en las mañanas de esta semana, de esas que entran de lado y hacen que todo se vea un poco más honesto. Pop romántico para dedicar a distancia.",
    poema: [
      "Tal como eres me encantas, sin cambiarle nada,",
      "porque cada detalle tuyo es perfecto para mí."
    ],
    detalle: "Guarda esta energía para cuando nos encontremos.",
    buenasNoches: "El día ya se apagó casi del todo, y antes de cerrar los ojos quería dejarte esto. Que duermas bien, sabiendo que eres lo último en lo que pienso.",
    notaImagen: "[MÚSICA] Canción: Just the Way You Are",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 78,
    categoria: "Abrazo",
    icono: "🌼",
    tono: "amor",
    color: { principal: "#ff6f3d", suave: "#ffd0b8", oscuro: "#2b1104" },
    buenosDias: "Buenos días. Hay días que empiezan con prisa y días que empiezan despacio, y este es de los segundos, justo lo que necesitaba. Hoy quiero mandarte un abrazo, aunque sea de los que no se sienten físicamente.",
    poema: [
      "Hay abrazos que se dan con los brazos y abrazos que se dan con las palabras, y hoy te mando de los dos.",
      "Cuando nos veamos, te debo el físico también, y largo."
    ],
    detalle: "Considera este mensaje un abrazo apretado, de esos que no sueltan rápido.",
    buenasNoches: "El teléfono ya está casi sin batería, pero antes de que se apague quería mandarte esto. Buenas noches, abrazada, aunque sea a la distancia.",
    notaImagen: "[PARA TI] otra foto de gerberas o flores de colores.",
    notaCancion: "[PARA TI] algo animado, para el buen ánimo."
  },

  {
    dia: 79,
    categoria: "Tazas compartidas",
    icono: "📖",
    tono: "filosofica",
    color: { principal: "#6b2142", suave: "#e3b8c9", oscuro: "#180509" },
    buenosDias: "Buenos días. Todavía no termino el café y ya te estoy escribiendo, para que veas el orden de prioridades que manejo. Hoy imaginé algo simple: los dos compartiendo una taza de algo caliente, sin prisa.",
    poema: [
      "Hay conversaciones que se dan mejor con algo caliente entre las manos, sin pantallas de por medio.",
      "Quiero tener esa escena contigo pronto, real."
    ],
    detalle: "¿Café o té? Quiero saber para cuando planeemos esa escena.",
    buenasNoches: "Hay una calma particular en las últimas horas del día que hace que todo se sienta más simple, más claro. Buenas noches, con ganas de esa taza compartida pronto.",
    notaImagen: "[PARA TI] otra foto de libros o lectura.",
    notaCancion: "[PARA TI] algo con atmósfera de cierre."
  },

  {
    dia: 80,
    categoria: "Naturaleza",
    icono: "🌿",
    tono: "filosofica",
    color: { principal: "#4fa66b", suave: "#c8ecd4", oscuro: "#0a2013" },
    buenosDias: "Buenos días. Hay algo reconfortante en empezar el día sabiendo exactamente a quién le voy a escribir primero. Hoy quiero que salgas, aunque sea un rato, a ver algo verde.",
    poema: [
      "Me gusta cómo te pones cuando estás rodeada de naturaleza, como si el ruido de todo lo demás por fin se apagara.",
      "Quiero verte así más seguido."
    ],
    detalle: "Cuando podamos, busquemos un lugar con mucho verde y nos quedamos ahí sin apuro.",
    buenasNoches: "El ruido del día por fin bajó de volumen, y en ese silencio es más fácil sentir las cosas con claridad. Buenas noches, que descanses como se descansa después de un buen paseo.",
    notaImagen: "[PARA TI] una foto de un paisaje natural que les guste.",
    notaCancion: "[PARA TI] algo acústico, tranquilo."
  },

  {
    dia: 81,
    categoria: "Propuesta Indecente",
    icono: "🥂",
    tono: "hot",
    color: { principal: "#a10e35", suave: "#f0aabd", oscuro: "#140208" },
    buenosDias: "Buenos días. Hoy quiero hablarte de una canción que pide, sin rodeos, un compromiso completo y exclusivo.",
    poema: [
      "Hay una canción de Romeo Santos que habla de pedirle a alguien una entrega total, sin compartir, sin medias tintas, un compromiso serio y apasionado a la vez.",
      "No sé si llamarlo 'indecente', pero sí sé que quiero ese nivel de entrega contigo."
    ],
    detalle: "Se llama 'Propuesta Indecente', de Romeo Santos. Yo te ofrezco esa entrega completa, y también la espero de tu parte, sin dividir esto con nadie más.",
    buenasNoches: "Buenas noches, con la propuesta todavía sobre la mesa.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'Propuesta Indecente' - Romeo Santos."
  },

  {
    dia: 82,
    categoria: "Volví a Nacer",
    icono: "🌅",
    tono: "amor",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. El día recién empieza a tomar forma, y ya sé que una parte buena de él tiene que ver contigo. Hoy quiero hablarte de una canción costeña sobre sentir que la vida cambia completamente gracias a alguien.",
    poema: [
      "Hay una canción de Carlos Vives que habla de sentirse renacer, de ver la vida distinta después de que alguien especial llegó a ella.",
      "Contigo siento un poco de eso: como si ciertas partes de mi vida hubieran mejorado solo por tenerte cerca."
    ],
    detalle: "Se llama 'Volví a Nacer', de Carlos Vives.",
    buenasNoches: "El día se cierra, como siempre, con vos como el último pensamiento antes de apagar la luz. Buenas noches, sintiendo que la vida mejoró, gracias a ti.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'Volví a Nacer' - Carlos Vives."
  },

  {
    dia: 83,
    categoria: "Presente",
    icono: "🍬",
    tono: "amor",
    color: { principal: "#a9713f", suave: "#ecd2ae", oscuro: "#20130a" },
    buenosDias: "Buenos días. Hay un tipo de silencio en las mañanas tempranas que se presta perfecto para pensar con calma, y hoy lo usé para pensar en ti. Hoy quiero estar aquí, en este momento contigo, sin pensar en nada más.",
    poema: [
      "Me cuesta a veces estar solo presente, sin pensar en lo que sigue, pero contigo se me hace más fácil.",
      "Hoy elijo estar aquí, contigo, nada más."
    ],
    detalle: "Gracias por ayudarme a estar presente, sin tantas vueltas en la cabeza.",
    buenasNoches: "Hay noches en que uno se queda despierto de más, y esta es una de esas, por pensar en ti un rato extra. Buenas noches, presente, contigo, hasta el final del día.",
    notaImagen: "[PARA TI] otra foto de dulces, postres o algo así.",
    notaCancion: "[PARA TI] algo alegre y liviano."
  },

  {
    dia: 84,
    categoria: "Todo de Ti",
    icono: "🌊",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días. Hoy quiero hablarte de una canción sobre gustar de alguien por completo, sin poder señalar una sola cosa favorita.",
    poema: [
      "Hay una canción de Rauw Alejandro que habla de querer dar todo de uno mismo y, a la vez, recibir todo de la otra persona igual, sin medias tintas.",
      "Eso es justo lo que quiero contigo: no una parte, todo."
    ],
    detalle: "Se llama 'Todo de Ti', de Rauw Alejandro. Yo te doy todo de mí, y también quiero todo de ti, en la misma medida, sin que ninguno se quede corto.",
    buenasNoches: "Buenas noches, con ganas de seguir dándolo todo, y de recibirlo también.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'Todo de Ti' - Rauw Alejandro."
  },

  {
    dia: 85,
    categoria: "Caminar despacio",
    icono: "🖼️",
    tono: "filosofica",
    color: { principal: "#e0a63d", suave: "#ffe3b0", oscuro: "#241a04" },
    buenosDias: "Buenos días. Las primeras luces del día siempre me hacen pensar en empezar de cero, y hoy quise empezar pensando en ti. Hoy no tengo apuro por nada, ni siquiera por esto.",
    poema: [
      "Hay cosas que se disfrutan más caminando despacio, sin correr para llegar a ningún lado en particular.",
      "Contigo prefiero caminar despacio, disfrutando cada parte del camino."
    ],
    detalle: "No hay afán, vamos a nuestro paso, como debe ser.",
    buenasNoches: "La cama todavía está fría, pero el pensamiento de ti ya la calentó un poco. Buenas noches, caminando despacio, sin apuro, contigo.",
    notaImagen: "[PARA TI] otra foto de arte o de algo creativo suyo.",
    notaCancion: "[PARA TI] algo artístico, con textura."
  },

  {
    dia: 86,
    categoria: "Gerbera",
    icono: "🌸",
    tono: "amor",
    color: { principal: "#ff8a3d", suave: "#ffd9b8", oscuro: "#2b1404" },
    buenosDias: "Buenos días. Hay mañanas que parecen prometer algo bueno desde el primer minuto, y esta es una de esas. alegría. Hoy va dedicado a tu forma de iluminar todo lo que tocas.",
    poema: [
      "La gerbera es de las flores más alegres que existen, de colores que no piden permiso para destacar.",
      "Así eres tú: no necesitas esforzarte para alegrar un lugar, simplemente llegas y ya cambia todo."
    ],
    detalle: "Significado de la gerbera: alegría y optimismo.",
    buenasNoches: "El cansancio del día ya se siente en el cuerpo, pero pensar en ti siempre alivia un poco esa parte. Buenas noches. Que mañana sigas siendo esa luz sin siquiera intentarlo.",
    notaImagen: "[PARA TI] una foto de gerberas de colores.",
    notaCancion: "[PARA TI] algo alegre, para bailar en la cocina."
  },

  {
    dia: 87,
    categoria: "Good News",
    icono: "💿",
    tono: "filosofica",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Todavía no me tomo el café completo y ya voy por la mitad de este mensaje. Hoy quiero hablarte de una canción sobre buscar calma en medio del ruido de la cabeza.",
    poema: [
      "Hay una canción de Mac Miller que habla de la presión de siempre estar esperando algo bueno, y del cansancio que eso puede traer.",
      "Contigo cerca, la espera de esas buenas noticias se siente menos pesada."
    ],
    detalle: "Se llama 'Good News', de Mac Miller. Tranquila, para escuchar sin afán.",
    buenasNoches: "Hay un tipo de sueño que llega mejor cuando el último pensamiento del día fue bueno, y hoy lo fue, gracias a ti. Buenas noches, esperando buenas noticias, más tranquilo gracias a ti.",
    notaImagen: "[MÚSICA] Canción: Sigo Extrañándote",
    notaCancion: "[PARA TI] canción real: 'Good News' - Mac Miller."
  },

  {
    dia: 88,
    categoria: "Yellow",
    icono: "💛",
    tono: "filosofica",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. Hay mañanas que se sienten como una hoja en blanco, y hoy decidí empezar la mía escribiéndote a ti. Hoy quiero hablarte de una canción que compara a alguien con algo tan grande como las estrellas.",
    poema: [
      "Hay una canción de Coldplay que habla de querer a alguien con una intensidad tan grande como el cielo, y de haber hecho todo lo posible por esa persona, con sinceridad.",
      "Contigo entiendo esa sensación de querer algo tan grande que cuesta ponerlo en palabras normales."
    ],
    detalle: "Se llama 'Yellow', de Coldplay.",
    buenasNoches: "Las últimas luces de la casa ya se apagaron, y en la oscuridad, como siempre, apareciste tú primero en mis pensamientos. Buenas noches, mirando un cielo lleno de estrellas amarillas, pensando en ti.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'Yellow' - Coldplay."
  },

  {
    dia: 89,
    categoria: "Canción del recuerdo",
    icono: "📻",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. El aire todavía huele a noche cuando empiezo a escribirte esto. Un brillo especial en cada nota para iluminar tu mañana.",
    poema: [
      "Tú pintaste de luz cada espacio gris,",
      "volviéndote la melodía que alegra los días."
    ],
    detalle: "Que tengas un día lleno de luz y de pequeños grandes logros.",
    buenasNoches: "Las estrellas, si es que se ven desde donde estás, tienen algo tuyo hoy, aunque suene un poco cursi decirlo así. Que la noche te regale paz absoluta.",
    notaImagen: "[MÚSICA] Canción: Yellow",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 90,
    categoria: "Libros",
    icono: "📖",
    tono: "filosofica",
    color: { principal: "#6b2142", suave: "#e3b8c9", oscuro: "#180509" },
    buenosDias: "Buenos días. El teléfono marcó la hora y, en automático, pensé en ti antes de pensar en cualquier pendiente del día. lectora. Hoy quiero escribirte algo que se sienta como esos libros que tanto te gustan.",
    poema: [
      "Si esto fuera una de esas novelas de romance oscuro que te encantan, este sería el capítulo donde el protagonista se da cuenta de que ya no hay vuelta atrás.",
      "Yo ya me di cuenta hace tiempo."
    ],
    detalle: "Algún día quiero que me recomiendes tu libro favorito y leerlo solo para entenderte un poco más.",
    buenasNoches: "Hay una quietud distinta en las noches, de esas que invitan a pensar despacio en lo que de verdad importa. Buenas noches. Que tus sueños tengan tramas tan buenas como las que lees.",
    notaImagen: "[PARA TI] una foto de su libro o saga favorita.",
    notaCancion: "[PARA TI] algo con atmósfera, tipo banda sonora de película."
  },

  {
    dia: 91,
    categoria: "Después",
    icono: "🐶",
    tono: "amor",
    color: { principal: "#6fb1e0", suave: "#d6ecfb", oscuro: "#071522" },
    buenosDias: "Buenos días. Hay una energía distinta en los días que empiezan escribiéndote, no sabría explicar bien por qué. Hoy pensé menos en el ahora y más en todos los 'después' que quiero contigo.",
    poema: [
      "Hay un después de esto que ya empecé a imaginar, con más días como este, con más nosotros.",
      "No tengo apuro, pero sí tengo ganas."
    ],
    detalle: "Cuéntame uno de tus 'después' conmigo, aunque sea pequeño.",
    buenasNoches: "Hay noches donde el cansancio gana rápido, y aun así encontré energía para pensarte un rato más. Buenas noches, pensando en lo que sigue.",
    notaImagen: "[PARA TI] otra foto tierna, cerrando el ciclo de Snoopy.",
    notaCancion: "[PARA TI] algo nostálgico."
  },

  {
    dia: 92,
    categoria: "Cuenta regresiva",
    icono: "⏳",
    tono: "hot",
    color: { principal: "#a10e35", suave: "#f0aabd", oscuro: "#140208" },
    buenosDias: "Buenos días. Empecé, sin querer, una cuenta regresiva mental para la próxima vez que estemos cerca.",
    poema: [
      "No es solo verte. Es todo lo que llega con verte: el abrazo que se alarga más de lo necesario, la despedida que ninguno de los dos apura.",
      "Cuento los días. Literal, con los dedos, como si eso los acortara."
    ],
    detalle: "¿Cuántos faltan según tu cuenta? Comparemos números.",
    buenasNoches: "Buenas noches, un día menos en esta cuenta poco paciente.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 93,
    categoria: "Insomnio",
    icono: "🌙",
    tono: "filosofica",
    color: { principal: "#6b2142", suave: "#e3b8c9", oscuro: "#180509" },
    buenosDias: "Buenos días. El café todavía está humeando cuando ya estoy pensando en qué decirte hoy. aunque anoche casi no dormí pensando en nosotros.",
    poema: [
      "Hay noches en que el sueño pierde contra los pensamientos, y anoche tú ganaste esa pelea sin siquiera intentarlo.",
      "No me molesta perder horas de sueño si es pensando en construir algo contigo."
    ],
    detalle: "Espero que tú sí hayas dormido mejor que yo.",
    buenasNoches: "La luz de la lámpara es lo único encendido ya en este cuarto, y sigo aquí, pensando en cómo cerrar bien el día contigo en mente. Buenas noches, esta vez sí, con la esperanza de soñarte tranquilo.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 94,
    categoria: "Often",
    icono: "🎸",
    tono: "hot",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. Hoy quiero hablarte de una canción que, sin decirlo directamente, habla de pensar en alguien más seguido de lo normal.",
    poema: [
      "Hay una canción de The Weeknd que habla justo de eso: de tener a alguien en la cabeza con más frecuencia de la que uno admite.",
      "Contigo me pasa eso, más seguido de lo que debería para ser una mañana cualquiera."
    ],
    detalle: "Se llama 'Often', de The Weeknd. Espero que tú también pienses en mí más seguido de lo que admites.",
    buenasNoches: "Buenas noches, pensándote seguido, como siempre.",
    cancionUrl: "https://www.youtube.com/watch?v=JPIhUaONiLU",
    notaImagen: "[MÚSICA] Canción: Sigo Extrañándote",
    notaCancion: "[PARA TI] canción real, con link real puesto para que suene ese día."
  },

  {
    dia: 95,
    categoria: "Letra bonita",
    icono: "🎧",
    tono: "filosofica",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. Antes de revisar cualquier otra cosa en el teléfono, ya estaba escribiéndote esto. Un poco de rock alternativo para sacudir la modorra de la mañana.",
    poema: [
      "A veces uno se siente fuera de lugar en el mundo,",
      "hasta que encuentra a alguien que entiende sus silencios."
    ],
    detalle: "Escúchala con buenos audífonos para captar todos los detalles.",
    buenasNoches: "Hay noches que se sienten largas y noches que se sienten cortas, y esta, contigo en la cabeza, se sintió de las buenas. Descansa rico, te quiero muchísimo.",
    notaImagen: "[MÚSICA] Canción: Creep",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 96,
    categoria: "Volvamos a Ser Novios",
    icono: "🔥",
    tono: "hot",
    color: { principal: "#d1163f", suave: "#f7bccb", oscuro: "#1c0409" },
    buenosDias: "Buenos días. Hoy quiero hablarte de una canción vallenata sobre no dejar que la rutina apague lo que empezó con chispa.",
    poema: [
      "Hay una canción de Silvestre Dangond que le pide a su pareja volver a las citas, a las risas, a los gestos espontáneos de cuando todo era nuevo, en vez de dejar que el día a día apague la llama.",
      "Contigo no quiero que la rutina nos gane nunca."
    ],
    detalle: "Se llama 'Volvamos a Ser Novios', de Silvestre Dangond. Yo pongo la iniciativa de mantener viva la chispa, pero también espero que tú la sigas alimentando conmigo, de los dos lados.",
    buenasNoches: "Buenas noches, con ganas de que sigamos siendo novios, así llevemos tiempo.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'Volvamos a Ser Novios' - Silvestre Dangond."
  },

  {
    dia: 97,
    categoria: "Interludio",
    icono: "🎤",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. El día apenas empieza a definirse, pero ya sé que una parte de él va a estar dedicada a pensar en ti. Brillo y energía para un día que promete ser excelente.",
    poema: [
      "Tú pusiste color donde antes todo era monocromo,",
      "haciendo que el mundo brille distinto."
    ],
    detalle: "Un tema imperdible para cantar de camino a tus pendientes.",
    buenasNoches: "Hay una versión más honesta de mí que solo sale de noche, y esa versión también te quiere mucho. Que descanses rico, amor.",
    notaImagen: "[MÚSICA] Canción: Yellow",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 98,
    categoria: "Química",
    icono: "⚡",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días. Hay algo entre los dos que no termina de explicarse con palabras normales, y hoy tenía ganas de intentarlo igual.",
    poema: [
      "Le dicen química, pero se siente más como corriente: algo que se enciende apenas estás cerca, sin necesidad de que pase nada más.",
      "No sé cómo funciona exactamente. Solo sé que contigo nunca ha fallado."
    ],
    detalle: "¿Sientes tú también esa corriente, o soy solo yo imaginando cosas?",
    buenasNoches: "Buenas noches, todavía con la corriente encendida, sin motivo aparente.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 99,
    categoria: "Playlist compartida",
    icono: "🎧",
    tono: "amor",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. El cielo todavía tiene ese color raro de las mañanas que no se deciden entre gris y celeste. Llegamos al día 170 consolidando este viaje musical.",
    poema: [
      "Y buscando explicaciones lógicas al destino,",
      "me di cuenta de que lo nuestro no necesita reglas."
    ],
    detalle: "Gracias por caminar conmigo en cada paso de este proyecto.",
    buenasNoches: "El día se despide con la misma certeza de siempre: que quiero que mañana empiece igual, pensando en ti primero. Descansa de la mejor manera.",
    notaImagen: "[MÚSICA] Canción: The Scientist",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 100,
    categoria: "Gustos compartidos",
    icono: "🌭",
    tono: "amor",
    color: { principal: "#e0632f", suave: "#ffcfa8", oscuro: "#2b1103" },
    buenosDias: "Buenos días. Hay un tipo de calma particular en escribir esto antes de que el celular empiece a sonar con todo lo demás. Hoy quiero celebrar algo simple: lo bien que la pasamos con cosas sin importancia.",
    poema: [
      "No hace falta un plan elaborado para pasarla bien, a veces solo hace falta estar juntos, sin más.",
      "De esos momentos sin importancia guardo varios de mis recuerdos favoritos."
    ],
    detalle: "Gracias por hacer que hasta lo simple se sienta memorable.",
    buenasNoches: "Hay un silencio particular a esta hora que hace que las palabras pesen distinto, más sinceras. Buenas noches, con un buen recuerdo simple más.",
    notaImagen: "[PARA TI] otra foto de comida callejera favorita.",
    notaCancion: "[PARA TI] algo divertido, para pedir domicilio con buena música."
  },

  {
    dia: 101,
    categoria: "Tulipán",
    icono: "🌷",
    tono: "amor",
    color: { principal: "#b16fd1", suave: "#ecd6ff", oscuro: "#1c0a26" },
    buenosDias: "Buenos días. El sol todavía no calienta del todo, pero algo aquí adentro ya empezó a hacerlo. Hoy quiero decirte que no hay nadie como tú, literal.",
    poema: [
      "El tulipán morado se regala cuando alguien quiere decir «no hay nadie como tú», y eso es justo lo que pienso cada vez que te veo.",
      "No busco comparaciones porque simplemente no las hay."
    ],
    detalle: "Significado del tulipán morado: admiración y un amor único.",
    buenasNoches: "Hay algo tranquilizador en saber que, sin importar cómo estuvo el día, esto de escribirte de noche no cambia. Buenas noches, única. Así, sin punto de comparación.",
    notaImagen: "[PARA TI] una foto de tulipanes morados.",
    notaCancion: "[PARA TI] algo bonito, sin prisa."
  },

  {
    dia: 102,
    categoria: "La Bachata",
    icono: "💃",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días. Hoy quiero hablarte de una canción sobre ese flechazo inmediato que a veces pasa sin planearlo.",
    poema: [
      "Hay una canción de Manuel Turizo sobre fijarse en alguien en medio de una fiesta y no poder dejar de pensar en esa persona el resto de la noche.",
      "A mí me sigue pasando algo parecido contigo, aunque ya no seamos un flechazo nuevo."
    ],
    detalle: "Se llama 'La Bachata', de Manuel Turizo.",
    buenasNoches: "Buenas noches, todavía con ese flechazo intacto.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'La Bachata' - Manuel Turizo."
  },

  {
    dia: 103,
    categoria: "Paciencia",
    icono: "🧁",
    tono: "amor",
    color: { principal: "#a9713f", suave: "#ecd2ae", oscuro: "#20130a" },
    buenosDias: "Buenos días. Hay mañanas silenciosas y mañanas ruidosas, y esta, por suerte, es de las tranquilas. Hoy quiero agradecerte la paciencia que me has tenido en más de un día difícil.",
    poema: [
      "No siempre soy fácil, y aun así te quedas, con paciencia, esperando la mejor versión de mí.",
      "Gracias por no irte en los días complicados."
    ],
    detalle: "Prometo seguir trabajando en merecer esa paciencia.",
    buenasNoches: "El silencio de la noche siempre hace que las cosas simples, como decir buenas noches, se sientan un poco más importantes. Buenas noches, agradecido con tu paciencia, siempre.",
    notaImagen: "[PARA TI] otra foto de postres o dulces.",
    notaCancion: "[PARA TI] algo alegre y liviano."
  },

  {
    dia: 104,
    categoria: "At Last",
    icono: "✨",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. El ruido de la calle todavía no arranca del todo, y en ese pequeño espacio de calma te escribo esto. Hoy quiero hablarte de una canción sobre por fin encontrar lo que uno llevaba tiempo esperando, sin saberlo del todo.",
    poema: [
      "Hay una canción clásica de Etta James que habla de esa sensación de que la espera por fin terminó, de que el cielo cambió de color apenas llegó la persona correcta.",
      "Contigo sentí un poco de eso: como si algo que no sabía que esperaba, por fin hubiera llegado."
    ],
    detalle: "Se llama 'At Last', de Etta James.",
    buenasNoches: "Hay algo bonito en cerrar el día pensando en la misma persona con la que se abrió, y hoy fue así otra vez. Buenas noches, con la sensación de que por fin algo encajó bien.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'At Last' - Etta James."
  },

  {
    dia: 105,
    categoria: "Grabación",
    icono: "🎶",
    tono: "amor",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Hay mañanas donde uno se siente con ganas de todo, y esta parece ser una de esas. Letras profundas que hablan de la melancolía y el amor a distancia.",
    poema: [
      "Y aunque la noche sea larga y fría,",
      "pensar en ti enciende cualquier hoguera."
    ],
    detalle: "Una canción perfecta para escuchar con audífonos antes de dormir o por la tarde.",
    buenasNoches: "El día ya cumplió su ciclo completo, y como siempre, terminó pensando en la misma persona con la que empezó. Duerme bien, soñando bonito.",
    notaImagen: "[MÚSICA] Canción: Colapso",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 106,
    categoria: "Piel",
    icono: "🕯️",
    tono: "hot",
    color: { principal: "#e0294f", suave: "#ffc9d6", oscuro: "#20050b" },
    buenosDias: "Buenos días. Hoy pienso en tu piel más de lo que debería para ser una mañana cualquiera de martes.",
    poema: [
      "Me gusta imaginar cómo se sentiría el silencio entre los dos si estuviéramos cerca justo ahora, sin necesidad de decir absolutamente nada.",
      "A veces lo que más se desea no se anuncia, se deja ahí, esperando el momento correcto para aparecer."
    ],
    detalle: "Cuando nos veamos, no prometo portarme del todo bien.",
    buenasNoches: "Buenas noches, pensando en formas de estar más cerca la próxima vez.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 107,
    categoria: "Manos",
    icono: "📖",
    tono: "amor",
    color: { principal: "#e0a63d", suave: "#ffe3b0", oscuro: "#241a04" },
    buenosDias: "Buenos días. El despertador sonó dos veces antes de que lograra levantarme, y en el medio, sin darme cuenta, ya estaba pensando en ti. Hoy pensé en tus manos, en lo fácil que se siente cuando están cerca de las mías.",
    poema: [
      "Hay manos que solo sostienen, y hay manos que además sostienen a la persona completa.",
      "Las tuyas hacen las dos cosas."
    ],
    detalle: "La próxima vez que estemos cerca, no sueltes tan rápido.",
    buenasNoches: "Las luces de la calle ya se encendieron hace rato, y aquí sigo, pensando en ti antes de dormir. Buenas noches, con ganas de tenerte cerca de nuevo.",
    notaImagen: "[PARA TI] algo de cómics o historietas que le gusten.",
    notaCancion: "[PARA TI] algo nostálgico, de esas que dan ternura."
  },

  {
    dia: 108,
    categoria: "Melodía nueva",
    icono: "💿",
    tono: "amor",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Hoy el despertar fue lento, de esos donde uno se queda un rato más en la cama solo pensando. Ritmo pegadizo para dedicarle a esa persona que lo es todo.",
    poema: [
      "Tal como eres, no cambiaría ni un solo detalle,",
      "porque me encantas de pies a cabeza."
    ],
    detalle: "Guarda esta energía y ponla a sonar un rato.",
    buenasNoches: "Afuera ya no se escucha casi nada, solo el silencio típico de esta hora, cómodo, tranquilo. Duerme bien, nos leemos mañana.",
    notaImagen: "[MÚSICA] Canción: Just the Way You Are",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 109,
    categoria: "Peonía",
    icono: "🌸",
    tono: "filosofica",
    color: { principal: "#e0678f", suave: "#ffd3e2", oscuro: "#280914" },
    buenosDias: "Buenos días. Todavía hace frío afuera, pero aquí adentro algo ya se siente tibio desde temprano. mi peonía. Hoy quiero hablarte de lo que florece despacio pero se queda mucho tiempo.",
    poema: [
      "La peonía tarda en abrir, pero cuando lo hace, dura y se nota en cualquier lugar donde esté.",
      "Así ha sido esto contigo: nada apurado, pero cada vez más presente."
    ],
    detalle: "Significado de la peonía: amor duradero y buena fortuna.",
    buenasNoches: "El ruido de afuera bajó por completo, y en ese silencio hay espacio de sobra para pensar en ti con calma. Buenas noches, que sigas floreciendo a tu propio ritmo.",
    notaImagen: "[PARA TI] una foto de peonías.",
    notaCancion: "[PARA TI] algo suave, de las que duran en la memoria."
  },

  {
    dia: 110,
    categoria: "Orgullo",
    icono: "👗",
    tono: "amor",
    color: { principal: "#2f6d6b", suave: "#bfe3e0", oscuro: "#08191a" },
    buenosDias: "Buenos días. El primer pensamiento coherente del día, antes que cualquier lista de pendientes, fue sobre ti. Hoy quiero decirte, sin vueltas, que estoy orgulloso de ti.",
    poema: [
      "No siempre lo digo con estas palabras exactas, pero lo pienso seguido: admiro cómo llevas tu vida.",
      "Ese orgullo no es poca cosa para mí."
    ],
    detalle: "Sigue haciendo las cosas a tu manera, te queda bien.",
    buenasNoches: "El cielo ya está completamente oscuro, y en algún lugar de ahí arriba hay una estrella que, según decidí hoy, es tuya. Buenas noches, orgulloso de ti, como siempre.",
    notaImagen: "[PARA TI] otra foto suya arreglada.",
    notaCancion: "[PARA TI] algo elegante, tipo balada especial."
  },

  {
    dia: 111,
    categoria: "Compás rápido",
    icono: "📻",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. Afuera el día apenas se estira, y aquí ya estoy yo, pensando en ti antes que en cualquier otra cosa. Estilo alternativo con una vibra nocturna increíble.",
    poema: [
      "Quiero ser tu abrigo y tu refugio favorito,",
      "el lugar al que siempre quieras volver."
    ],
    detalle: "Que el día fluya sin errores ni complicaciones.",
    buenasNoches: "Las cobijas ya están listas, y en un rato, cuando cierre los ojos, sé exactamente en quién voy a pensar. Descansa la vista de las pantallas.",
    notaImagen: "[MÚSICA] Canción: I Wanna Be Yours",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 112,
    categoria: "Domingo cualquiera",
    icono: "🖤",
    tono: "filosofica",
    color: { principal: "#6b2142", suave: "#e3b8c9", oscuro: "#180509" },
    buenosDias: "Buenos días. Hay una calma particular en las primeras horas, antes de que el ruido del día se meta por todos lados. Hoy quería que este mensaje se sintiera como un domingo tranquilo, sin agenda.",
    poema: [
      "Me gustan los días sin plan, esos donde lo único importante es estar bien, sin afán.",
      "Ojalá tengamos muchos domingos así, juntos, sin nada urgente que hacer."
    ],
    detalle: "Aprovecha hoy para no hacer nada importante, en el buen sentido.",
    buenasNoches: "Las cosas del día ya quedaron atrás, y lo único que sigue presente, como siempre, eres tú. Buenas noches, con la calma de un buen domingo.",
    notaImagen: "[PARA TI] una foto de su lectura actual.",
    notaCancion: "[PARA TI] algo con atmósfera, tipo banda sonora."
  },

  {
    dia: 113,
    categoria: "Bis",
    icono: "🎸",
    tono: "filosofica",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. Hay una quietud bonita en las mañanas de entre semana que casi nadie aprovecha, y hoy la usé para esto. Ritmo pop optimista para recordarte lo especial que eres.",
    poema: [
      "No hay una sola cosa que cambiaría de tu forma de ser,",
      "porque eres perfecta exactamente así."
    ],
    detalle: "Súbele el volumen un par de rayitas y disfruta.",
    buenasNoches: "El día terminó, con sus cosas buenas y sus cosas normales, pero contigo en la mente el balance siempre sale bien. Que duermas bien, sabiendo lo mucho que me encantas.",
    notaImagen: "[MÚSICA] Canción: Just the Way You Are",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 114,
    categoria: "Rutina",
    icono: "🐾",
    tono: "amor",
    color: { principal: "#f4c453", suave: "#fff0c9", oscuro: "#241a05" },
    buenosDias: "Buenos días. Hoy me desperté antes de la alarma, y en ese ratito extra, sin planearlo, ya estaba pensando en ti. Ya somos parte de la rutina del otro, y eso, lejos de ser aburrido, se siente bien.",
    poema: [
      "No todo lo rutinario es malo: hay rutinas que en vez de cansar, sostienen.",
      "Ser parte de tu rutina es de las cosas que más quiero seguir siendo."
    ],
    detalle: "Espero seguir siendo parte de tus días normales, no solo de los especiales.",
    buenasNoches: "El silencio de la casa a esta hora es distinto a cualquier otro momento del día, más íntimo, más real. Buenas noches, hasta la próxima rutina compartida.",
    notaImagen: "[PARA TI] una foto de alguna salida o aventura chiquita que hayan tenido.",
    notaCancion: "[PARA TI] algo divertido, de esas para un paseo."
  },

  {
    dia: 115,
    categoria: "Segunda voz",
    icono: "😏",
    tono: "hot",
    color: { principal: "#b3123f", suave: "#f2b3c4", oscuro: "#170209" },
    buenosDias: "Buenos días. Tengo una segunda voz que casi nunca uso, y hoy amaneció con ganas de salir a saludar.",
    poema: [
      "Hay una versión mía más atrevida que la de todos los días, que solo aparece contigo, sin que yo se lo pida.",
      "Hoy decidió despertarse antes de tiempo."
    ],
    detalle: "No te sorprendas si hoy hablo distinto a lo normal.",
    buenasNoches: "Buenas noches, con la segunda voz todavía despierta.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 116,
    categoria: "Radio",
    icono: "🎵",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. Hay una luz particular en las mañanas de esta semana, de esas que entran de lado y hacen que todo se vea un poco más honesto. Un tema acústico para empezar la semana con los sentimientos a flote.",
    poema: [
      "Tus manos tienen la maña exacta de ordenar mi caos,",
      "de ponerme a sonreír sin que me dé cuenta."
    ],
    detalle: "Dedícale un momento a escuchar la instrumentación de este tema.",
    buenasNoches: "El día ya se apagó casi del todo, y antes de cerrar los ojos quería dejarte esto. Que descanses rico, nos leemos mañana.",
    notaImagen: "[MÚSICA] Canción: Tú Sí Sabes Querírmeme",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 117,
    categoria: "Juego",
    icono: "😏",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días, traviesa. Hoy tengo ganas de jugar contigo, aunque sea solo con palabras por ahora.",
    poema: [
      "Me gusta esa forma que tienes de responder cuando lees algo que no esperabas tan temprano en el día.",
      "Así que hoy no prometo comportarme, y tú tampoco tienes que hacerlo."
    ],
    detalle: "Contéstame algo atrevido si te animas. Prometo no juzgar.",
    buenasNoches: "Buenas noches, traviesa. Mañana seguimos jugando, sin reglas fijas.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 118,
    categoria: "Salchipapa",
    icono: "🍟",
    tono: "amor",
    color: { principal: "#e0632f", suave: "#ffcfa8", oscuro: "#2b1103" },
    buenosDias: "Buenos días. Hay días que empiezan con prisa y días que empiezan despacio, y este es de los segundos, justo lo que necesitaba. Hoy es un día sin filosofía, solo antojo.",
    poema: [
      "No todo tiene que ser poesía profunda: a veces el amor también es acordarse de que te encanta una buena salchipapa.",
      "Así que hoy: antojo libre, sin culpa."
    ],
    detalle: "Anótalo: te debo una salchipapa en persona, cuando quieras cobrarla.",
    buenasNoches: "El teléfono ya está casi sin batería, pero antes de que se apague quería mandarte esto. Buenas noches, satisfecha y sin remordimientos.",
    notaImagen: "[PARA TI] una foto de su comida favorita o de un antojo compartido.",
    notaCancion: "[PARA TI] algo divertido, para cocinar o pedir domicilio con buena música."
  },

  {
    dia: 119,
    categoria: "Flor de cerezo",
    icono: "🌸",
    tono: "amor",
    color: { principal: "#ffb7c5", suave: "#ffe9ee", oscuro: "#2a0f14" },
    buenosDias: "Buenos días. Todavía no termino el café y ya te estoy escribiendo, para que veas el orden de prioridades que manejo. delicadeza. Hoy va dedicado a lo bonito que dura poco pero se disfruta completo.",
    poema: [
      "La flor de cerezo no dura mucho, y aun así la gente viaja solo para verla florecer.",
      "Quiero aprender a disfrutar así cada momento contigo, sin esperar a que dure para siempre para valorarlo."
    ],
    detalle: "Significado de la flor de cerezo: belleza efímera y vivir el presente.",
    buenasNoches: "Hay una calma particular en las últimas horas del día que hace que todo se sienta más simple, más claro. Buenas noches, gracias por este momento, sea corto o largo.",
    notaImagen: "[PARA TI] una foto de flores de cerezo o de árboles floreciendo.",
    notaCancion: "[PARA TI] algo delicado, tipo piano suave."
  },

  {
    dia: 120,
    categoria: "Nosotros",
    icono: "🎉",
    tono: "amor",
    color: { principal: "#ff5d8f", suave: "#ffd7e6", oscuro: "#2a0f1c" },
    buenosDias: "Buenos días. Hoy llegamos al día 120, más de la mitad de este calendario de 241 días.",
    poema: [
      "Empezamos con un Snoopy y una promesa de acompañarte cada día, y aquí seguimos, bien pasada la mitad del camino.",
      "Gracias por leer cada uno de estos mensajes, por darle clic a cada corazón, por dejarme contarte de mil formas distintas lo mismo: que te amo.",
      "Todavía falta un buen tramo, y pienso hacerlo tan bonito como lo que ya llevamos."
    ],
    detalle: "Gracias por llegar hasta aquí. Vamos por 120 de 241, sigamos.",
    buenasNoches: "Buenas noches, a mitad de camino y con muchas ganas de seguir.",
    notaImagen: "[PARA TI] una foto bonita de los dos, para celebrar este punto medio.",
    notaCancion: "[PARA TI] una canción que sientas que representa lo que llevan hasta aquí."
  },

  {
    dia: 121,
    categoria: "Día Tras Día",
    icono: "🎧",
    tono: "amor",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. Hay algo reconfortante en empezar el día sabiendo exactamente a quién le voy a escribir primero. Hoy quiero hablarte de una canción que habla de lo que se construye con el tiempo, no de un solo momento.",
    poema: [
      "Hay una canción de Andrés Cepeda que habla de un amor que se sostiene en la constancia, en elegir a alguien un día tras otro, no solo una vez.",
      "Eso es justo lo que quiero seguir haciendo contigo."
    ],
    detalle: "Se llama 'Día Tras Día', de Andrés Cepeda. De esas baladas que suenan bien un domingo tranquilo. Yo elijo estar aquí día tras día, y también espero que tú sigas eligiendo estar aquí día tras día conmigo.",
    buenasNoches: "El ruido del día por fin bajó de volumen, y en ese silencio es más fácil sentir las cosas con claridad. Buenas noches, un día más elegido, como siempre.",
    notaImagen: "[MÚSICA] Canción: Colapso",
    notaCancion: "[PARA TI] canción real: 'Día Tras Día' - Andrés Cepeda."
  },

  {
    dia: 122,
    categoria: "Confesión atrevida",
    icono: "🖋️",
    tono: "hot",
    color: { principal: "#d1163f", suave: "#f7bccb", oscuro: "#1c0409" },
    buenosDias: "Buenos días. Hoy toca una confesión que normalmente me guardo para mí solo.",
    poema: [
      "Hay pensamientos que tengo contigo que definitivamente no son para compartir en una cena familiar.",
      "No los voy a escribir todos aquí, pero sí te aviso que existen, y que son bastante frecuentes."
    ],
    detalle: "Si quieres saber más, vas a tener que preguntarme directamente, sin rodeos.",
    buenasNoches: "Buenas noches, con la confesión ya hecha, aunque sea solo a medias.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 123,
    categoria: "Vivir Sin Aire",
    icono: "🌬️",
    tono: "filosofica",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. El día recién empieza a tomar forma, y ya sé que una parte buena de él tiene que ver contigo. Hoy quiero hablarte de una canción de rock en español sobre lo indispensable que se vuelve alguien con el tiempo.",
    poema: [
      "Hay una canción de Maná que compara la necesidad de alguien con la necesidad de respirar, algo que ya no se cuestiona, simplemente es así.",
      "No sé si sea tan extremo conmigo, pero sí sé que te has vuelto parte de lo cotidiano que ya no imagino sin ti."
    ],
    detalle: "Se llama 'Vivir Sin Aire', de Maná.",
    buenasNoches: "El día se cierra, como siempre, con vos como el último pensamiento antes de apagar la luz. Buenas noches, respirando con calma, gracias a ti.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'Vivir Sin Aire' - Maná."
  },

  {
    dia: 124,
    categoria: "Cola de reproducción",
    icono: "🎸",
    tono: "filosofica",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. Hay un tipo de silencio en las mañanas tempranas que se presta perfecto para pensar con calma, y hoy lo usé para pensar en ti. Un clásico que te ayuda a reflexionar y encontrar respuestas.",
    poema: [
      "Tratando de descifrar las reglas del destino,",
      "encontré que lo nuestro es la excepción más hermosa."
    ],
    detalle: "Gracias por cuidar de esto todos los días.",
    buenasNoches: "Hay noches en que uno se queda despierto de más, y esta es una de esas, por pensar en ti un rato extra. Descansa rico, amor.",
    notaImagen: "[MÚSICA] Canción: The Scientist",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 125,
    categoria: "Secreto",
    icono: "🗝️",
    tono: "hot",
    color: { principal: "#e0294f", suave: "#ffc9d6", oscuro: "#20050b" },
    buenosDias: "Buenos días. Tengo un pensamiento de hoy que prefiero guardarme un rato más, solo por el gusto de hacerte esperar.",
    poema: [
      "Hay cosas que se disfrutan más cuando no se dicen de una sola vez, cuando se sueltan despacio, casi por accidente.",
      "Este es uno de esos secretos: te lo cuento completo, pero solo si sabes pedirlo bien."
    ],
    detalle: "Gánatelo. Ya sabes cómo, o deberías saberlo a estas alturas.",
    buenasNoches: "Buenas noches, con el secreto todavía completo, guardado.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 126,
    categoria: "Pausa musical",
    icono: "💿",
    tono: "amor",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Las primeras luces del día siempre me hacen pensar en empezar de cero, y hoy quise empezar pensando en ti. Un clásico melancólico que nunca falla en ninguna playlist.",
    poema: [
      "Intenté buscar una explicación lógica al destino,",
      "pero encontrarte superó cualquier cálculo."
    ],
    detalle: "Disfruta de la atmósfera que crea esta canción.",
    buenasNoches: "La cama todavía está fría, pero el pensamiento de ti ya la calentó un poco. Que la noche te regale un descanso absoluto.",
    notaImagen: "[MÚSICA] Canción: The Scientist",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 127,
    categoria: "Just The Way You Are",
    icono: "🪞",
    tono: "amor",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. Hay mañanas que parecen prometer algo bueno desde el primer minuto, y esta es una de esas. Hoy quiero hablarte de una canción sobre querer a alguien exactamente como es, sin pedirle que cambie nada.",
    poema: [
      "Hay una canción de Bruno Mars que habla de decirle a alguien que no necesita maquillaje ni cambios para verse increíble, que ya es suficiente tal cual es.",
      "Eso es lo que pienso de ti: no necesitas cambiar nada para que esto funcione."
    ],
    detalle: "Se llama 'Just The Way You Are', de Bruno Mars.",
    buenasNoches: "El cansancio del día ya se siente en el cuerpo, pero pensar en ti siempre alivia un poco esa parte. Buenas noches, tal cual eres, que ya es más que suficiente.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'Just The Way You Are' - Bruno Mars."
  },

  {
    dia: 128,
    categoria: "Elegirte",
    icono: "🩷",
    tono: "amor",
    color: { principal: "#ff6fa8", suave: "#ffd7e6", oscuro: "#3a0f24" },
    buenosDias: "Buenos días. Todavía no me tomo el café completo y ya voy por la mitad de este mensaje. Hoy vuelvo a elegirte, como todos los días, aunque no siempre lo diga en voz alta.",
    poema: [
      "El amor no es solo un momento en que decides, es algo que se repite, día tras día, sin que nadie lo note.",
      "Hoy también te elijo, otra vez."
    ],
    detalle: "Voy a seguir eligiéndote, un día a la vez.",
    buenasNoches: "Hay un tipo de sueño que llega mejor cuando el último pensamiento del día fue bueno, y hoy lo fue, gracias a ti. Buenas noches, elegida otra vez hoy, sin dudarlo.",
    notaImagen: "[PARA TI] algo tierno, tipo Hello Kitty otra vez, ella se lo merece.",
    notaCancion: "[PARA TI] algo cálido, de compañía."
  },

  {
    dia: 129,
    categoria: "Escucha",
    icono: "📚",
    tono: "filosofica",
    color: { principal: "#6b2142", suave: "#e3b8c9", oscuro: "#180509" },
    buenosDias: "Buenos días. Hay mañanas que se sienten como una hoja en blanco, y hoy decidí empezar la mía escribiéndote a ti. Hoy quiero agradecerte por escucharme, incluso cuando no tengo mucho interesante que decir.",
    poema: [
      "No siempre se valora lo suficiente a alguien que escucha de verdad, sin esperar su turno para hablar.",
      "Tú lo haces, y no pasa desapercibido para mí."
    ],
    detalle: "Gracias por escucharme, de verdad, no solo por oírme.",
    buenasNoches: "Las últimas luces de la casa ya se apagaron, y en la oscuridad, como siempre, apareciste tú primero en mis pensamientos. Buenas noches, agradecido por sentirme escuchado hoy.",
    notaImagen: "[PARA TI] una foto de su estante de libros o de su lectura actual.",
    notaCancion: "[PARA TI] algo con atmósfera de historia, cinematográfico."
  },

  {
    dia: 130,
    categoria: "Hecha Pa' Mí",
    icono: "📻",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. El aire todavía huele a noche cuando empiezo a escribirte esto. Hoy quiero hablarte de una canción sobre esa sensación de que alguien encaja contigo casi por diseño.",
    poema: [
      "Hay una canción de Grupo Frontera que habla justo de eso: de sentir que alguien fue hecho para uno, que encaja de una forma que no se puede explicar del todo.",
      "Contigo siento un poco de esa misma sensación."
    ],
    detalle: "Se llama 'Hecha Pa' Mí', de Grupo Frontera. Ya sabes, la que nos hemos compartido antes. Y ojalá tú sientas que yo también fui hecho para ti, tanto como yo lo siento de ti.",
    buenasNoches: "Las estrellas, si es que se ven desde donde estás, tienen algo tuyo hoy, aunque suene un poco cursi decirlo así. Buenas noches, hecha para mí, o algo muy parecido a eso.",
    cancionUrl: "https://www.youtube.com/watch?v=IbE7peGTpmc",
    notaImagen: "[MÚSICA] Canción: Tú Sí Sabes Querírmeme",
    notaCancion: "[PARA TI] canción real, con link real puesto para que suene ese día."
  },

  {
    dia: 131,
    categoria: "Última vez",
    icono: "🕰️",
    tono: "hot",
    color: { principal: "#a10e35", suave: "#f0aabd", oscuro: "#140208" },
    buenosDias: "Buenos días. Hoy pensé en la última vez que estuvimos cerca, y no he logrado pensar en mucho más desde entonces.",
    poema: [
      "Hay recuerdos que quedan grabados con más detalle del normal, y ese es definitivamente uno de esos.",
      "Quiero que sigamos haciendo recuerdos así, seguido, sin dejar que pase tanto tiempo entre uno y otro."
    ],
    detalle: "¿Cuándo repetimos? Pregunto completamente en serio.",
    buenasNoches: "Buenas noches, todavía en ese recuerdo, sin ganas de salir de ahí.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 132,
    categoria: "Estrofa nueva",
    icono: "🎵",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. El teléfono marcó la hora y, en automático, pensé en ti antes de pensar en cualquier pendiente del día. Ritmo fresco para un día lleno de actividades y pendientes.",
    poema: [
      "Tus ojos lindos mirando hacia el frente",
      "son la mejor vista que podría desear."
    ],
    detalle: "Ponla en tu reproductor y que suene de fondo mientras trabajas.",
    buenasNoches: "Hay una quietud distinta en las noches, de esas que invitan a pensar despacio en lo que de verdad importa. Descansa la mente de tanta pantalla.",
    notaImagen: "[MÚSICA] Canción: Ojitos Lindos",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 133,
    categoria: "Canción de lunes",
    icono: "🎼",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. Hay una energía distinta en los días que empiezan escribiéndote, no sabría explicar bien por qué. Música acústica y cálida para acompañar tu café matutino.",
    poema: [
      "Que bonito es coincidir en esta vida contigo,",
      "sabiendo que cada nota nos acerca un poco más."
    ],
    detalle: "Disfruta de tu bebida caliente y relájate un rato hoy.",
    buenasNoches: "Hay noches donde el cansancio gana rápido, y aun así encontré energía para pensarte un rato más. Que tengas una noche muy tranquila y reparadora.",
    notaImagen: "[MÚSICA] Canción: Tú Sí Sabes Querírmeme",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 134,
    categoria: "Gravedad",
    icono: "🌌",
    tono: "filosofica",
    color: { principal: "#43225c", suave: "#cdb8e8", oscuro: "#0d0716" },
    buenosDias: "Buenos días. El café todavía está humeando cuando ya estoy pensando en qué decirte hoy. Todo lo importante cae hacia lo que ama, y yo aprendí a caer hacia ti sin miedo a estrellarme.",
    poema: [
      "Tu gravedad es la única que me sostiene en los días en que todo pesa más de la cuenta.",
      "No necesito otro centro si contigo ya encontré el mío."
    ],
    detalle: "Gracias por sostenerme, incluso sin saber que lo hacías.",
    buenasNoches: "La luz de la lámpara es lo único encendido ya en este cuarto, y sigo aquí, pensando en cómo cerrar bien el día contigo en mente. Buenas noches, orbitando cerca de ti, como siempre.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 135,
    categoria: "Confianza",
    icono: "☀️",
    tono: "amor",
    color: { principal: "#f2b705", suave: "#fff0b3", oscuro: "#251c02" },
    buenosDias: "Buenos días. Antes de revisar cualquier otra cosa en el teléfono, ya estaba escribiéndote esto. Hoy quiero hablar de algo que se construye despacio: la confianza.",
    poema: [
      "No es fácil confiar así, completo, sin reservas, y contigo se me ha hecho más fácil de lo que esperaba.",
      "Gracias por cuidar esa confianza."
    ],
    detalle: "Prometo seguir cuidando la tuya también.",
    buenasNoches: "Hay noches que se sienten largas y noches que se sienten cortas, y esta, contigo en la cabeza, se sintió de las buenas. Buenas noches, tranquilo, confiando en esto que construimos.",
    notaImagen: "[PARA TI] una foto de ustedes dos, si ya tienen alguna.",
    notaCancion: "[PARA TI] algo especial, tal vez la primera canción que asocien a los dos."
  },

  {
    dia: 136,
    categoria: "505",
    icono: "🚗",
    tono: "filosofica",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. El día apenas empieza a definirse, pero ya sé que una parte de él va a estar dedicada a pensar en ti. Hoy quiero hablarte de una canción sobre las ganas de llegar a algún lugar solo para estar con alguien.",
    poema: [
      "Hay una canción de Arctic Monkeys que habla de recorrer cualquier distancia con tal de volver a ver a esa persona, con una urgencia que no se puede disimular.",
      "Contigo entiendo esa urgencia: no me importaría el trayecto si al final estás tú."
    ],
    detalle: "Se llama '505', de Arctic Monkeys.",
    buenasNoches: "Hay una versión más honesta de mí que solo sale de noche, y esa versión también te quiere mucho. Buenas noches, con ganas de acortar cualquier distancia entre los dos.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: '505' - Arctic Monkeys."
  },

  {
    dia: 137,
    categoria: "Lirio",
    icono: "🤍",
    tono: "filosofica",
    color: { principal: "#efe6d8", suave: "#fbf6ec", oscuro: "#1c1a14" },
    buenosDias: "Buenos días. El cielo todavía tiene ese color raro de las mañanas que no se deciden entre gris y celeste. Hoy quiero hablarte despacio, como quien no quiere apurar nada bonito.",
    poema: [
      "El lirio no necesita gritar para ser hermoso; le basta con estar.",
      "Así quiero quererte: sin ruido, sin prisa, pero seguro."
    ],
    detalle: "Significado del lirio: pureza y una devoción tranquila.",
    buenasNoches: "El día se despide con la misma certeza de siempre: que quiero que mañana empiece igual, pensando en ti primero. Buenas noches. Que tu descanso sea tan sereno como hoy quise que fuera el día.",
    notaImagen: "[PARA TI] una foto de lirios, o algo en tonos blancos/crema.",
    notaCancion: "[PARA TI] algo instrumental, tranquilo."
  },

  {
    dia: 138,
    categoria: "Canción prestada",
    icono: "🎤",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. Hay un tipo de calma particular en escribir esto antes de que el celular empiece a sonar con todo lo demás. Estilo británico clásico con una letra que se queda grabada.",
    poema: [
      "Quiero ser tu refugio y tu canción favorita,",
      "el sitio al que siempre quieras volver."
    ],
    detalle: "Tómate una pausa y disfruta de esta gran obra musical.",
    buenasNoches: "Hay un silencio particular a esta hora que hace que las palabras pesen distinto, más sinceras. Que descanses y recargues baterías.",
    notaImagen: "[MÚSICA] Canción: I Wanna Be Yours",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 139,
    categoria: "Canción a solas",
    icono: "🌙",
    tono: "hot",
    color: { principal: "#b3123f", suave: "#f2b3c4", oscuro: "#170209" },
    buenosDias: "Buenos días. Hay canciones que solo suenan bien de verdad cuando estamos los dos, sin nadie más alrededor escuchando.",
    poema: [
      "No hablo de una canción cualquiera. Hablo de esas que se disfrutan mejor cerca, en voz baja, sin prisa por que termine.",
      "Ya tengo varias guardadas para cuando estemos a solas."
    ],
    detalle: "Prepárate. Tengo buen criterio para elegir esas canciones.",
    buenasNoches: "Buenas noches, guardando canciones para cuando estemos solos.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 140,
    categoria: "Obsesión bonita",
    icono: "🖤",
    tono: "filosofica",
    color: { principal: "#3a1f5c", suave: "#c9b8e6", oscuro: "#0c0716" },
    buenosDias: "Buenos días. El sol todavía no calienta del todo, pero algo aquí adentro ya empezó a hacerlo. Voy a ser honesto: pienso en ti más de lo que es sano admitir.",
    poema: [
      "No es una obsesión de las que dañan, es de las otras, de las que te hacen mejor persona sin que te des cuenta.",
      "Pienso en ti al despertar, y eso, lejos de cansarme, es de las pocas certezas que tengo."
    ],
    detalle: "No pienso pedir disculpas por pensar tanto en ti.",
    buenasNoches: "Hay algo tranquilizador en saber que, sin importar cómo estuvo el día, esto de escribirte de noche no cambia. Buenas noches, todavía pensando en ti, como toda la mañana.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 141,
    categoria: "Jazmín",
    icono: "🪷",
    tono: "filosofica",
    color: { principal: "#e7e0c9", suave: "#faf7ec", oscuro: "#1a170f" },
    buenosDias: "Buenos días. Hay mañanas silenciosas y mañanas ruidosas, y esta, por suerte, es de las tranquilas. Hoy quiero que el día huela bonito, como esas noches de jazmín.",
    poema: [
      "El jazmín suelta su aroma más fuerte de noche, cuando parece que nadie está mirando.",
      "Me gusta pensar que tú también guardas tus mejores partes para los momentos tranquilos, cuando de verdad importa."
    ],
    detalle: "Significado del jazmín: amor puro y una calma bonita.",
    buenasNoches: "El silencio de la noche siempre hace que las cosas simples, como decir buenas noches, se sientan un poco más importantes. Buenas noches, que el aroma del día se quede en el recuerdo.",
    notaImagen: "[PARA TI] una foto de jazmines o flores blancas pequeñas.",
    notaCancion: "[PARA TI] algo tranquilo, para la noche."
  },

  {
    dia: 142,
    categoria: "A Thousand Years",
    icono: "⏳",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. El ruido de la calle todavía no arranca del todo, y en ese pequeño espacio de calma te escribo esto. Hoy quiero hablarte de una canción sobre un amor que se siente como si llevara esperando mucho más tiempo del que en realidad lleva.",
    poema: [
      "Hay una canción de Christina Perri que habla de haber esperado mil años por alguien, y de estar dispuesto a esperar mil más si hace falta.",
      "Contigo no siento que haya esperado tanto, pero sí siento que valió la pena todo lo que esperé antes de encontrarte."
    ],
    detalle: "Se llama 'A Thousand Years', de Christina Perri.",
    buenasNoches: "Hay algo bonito en cerrar el día pensando en la misma persona con la que se abrió, y hoy fue así otra vez. Buenas noches, agradecido de no tener que esperar más.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'A Thousand Years' - Christina Perri."
  },

  {
    dia: 143,
    categoria: "Eres",
    icono: "🌻",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. Hay mañanas donde uno se siente con ganas de todo, y esta parece ser una de esas. Hoy quiero hablarte de una canción de rock en español bien simple en su mensaje: que alguien lo es todo.",
    poema: [
      "Hay una canción de Café Tacvba que habla de alguien que resume todo lo bueno en una sola persona, sin necesitar comparaciones.",
      "Contigo pasa eso: no necesito comparar, ya sé que eres mucho."
    ],
    detalle: "Se llama 'Eres', de Café Tacvba.",
    buenasNoches: "El día ya cumplió su ciclo completo, y como siempre, terminó pensando en la misma persona con la que empezó. Buenas noches, siendo simple y claro: eres mucho para mí.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'Eres' - Café Tacvba."
  },

  {
    dia: 144,
    categoria: "Peluches",
    icono: "🧸",
    tono: "amor",
    color: { principal: "#d9a066", suave: "#f5dfc0", oscuro: "#241708" },
    buenosDias: "Buenos días. El despertador sonó dos veces antes de que lograra levantarme, y en el medio, sin darme cuenta, ya estaba pensando en ti. Hoy es un día para lo que abraza sin pedir nada a cambio.",
    poema: [
      "Un peluche no promete nada y aun así, ahí está, siempre que lo necesitas.",
      "Quiero ser eso para ti también, algo a lo que puedas volver cuando el día se sienta pesado."
    ],
    detalle: "Si tienes un peluche favorito, dale un abrazo de mi parte hoy.",
    buenasNoches: "Las luces de la calle ya se encendieron hace rato, y aquí sigo, pensando en ti antes de dormir. Buenas noches. Abraza fuerte lo que te haga sentir en casa.",
    notaImagen: "[PARA TI] una foto de su peluche favorito, si tiene uno.",
    notaCancion: "[PARA TI] algo tierno, de cuna casi, para dormir tranquila."
  },

  {
    dia: 145,
    categoria: "Pensando en Ti",
    icono: "🎶",
    tono: "filosofica",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Hoy el despertar fue lento, de esos donde uno se queda un rato más en la cama solo pensando. Hoy quiero hablarte de una canción que, aunque es triste, me hace valorar más lo que tenemos.",
    poema: [
      "Hay una canción de Canserbero que habla de todo lo que se pierde cuando alguien se va, y de las ganas de no haber dejado que pasara.",
      "A mí me sirve para recordar que no quiero llegar nunca a sentir eso contigo, y que prefiero cuidar esto mientras lo tengo."
    ],
    detalle: "Se llama 'Pensando en Ti', de Canserbero. Es melancólica, pero también un buen recordatorio de no dar por sentado lo bueno.",
    buenasNoches: "Afuera ya no se escucha casi nada, solo el silencio típico de esta hora, cómodo, tranquilo. Buenas noches, agradecido de no tener que pensarte desde la distancia.",
    notaImagen: "[MÚSICA] Canción: La Mitad",
    notaCancion: "[PARA TI] canción real: 'Pensando en Ti' - Canserbero."
  },

  {
    dia: 146,
    categoria: "Something",
    icono: "🎸",
    tono: "amor",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Todavía hace frío afuera, pero aquí adentro algo ya se siente tibio desde temprano. Hoy quiero hablarte de una canción sobre esa cosa en alguien que atrae sin que uno pueda explicar bien por qué.",
    poema: [
      "Hay una canción de The Beatles que habla de algo en la forma de moverse de una persona que atrae de una manera que ninguna otra persona logra igualar.",
      "Tú tienes ese 'algo' conmigo, de esos que no se explican fácil."
    ],
    detalle: "Se llama 'Something', de The Beatles.",
    buenasNoches: "El ruido de afuera bajó por completo, y en ese silencio hay espacio de sobra para pensar en ti con calma. Buenas noches, todavía sin poder explicar bien ese algo tuyo.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'Something' - The Beatles."
  },

  {
    dia: 147,
    categoria: "Ritual",
    icono: "🔥",
    tono: "hot",
    color: { principal: "#d1163f", suave: "#f7bccb", oscuro: "#1c0409" },
    buenosDias: "Buenos días. Hoy quiero proponerte un ritual nuevo, un poco más íntimo que los que ya tenemos.",
    poema: [
      "No hablo de rituales aburridos. Hablo de los que solo existen cuando estamos los dos, a solas, sin ningún tipo de prisa.",
      "Ya quiero empezar a construir esos rituales contigo, en serio."
    ],
    detalle: "Piensa en cuál te gustaría que fuera el primero. Yo ya tengo un par de ideas.",
    buenasNoches: "Buenas noches, pensando en rituales todavía pendientes de estrenar.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 148,
    categoria: "Dedicatoria",
    icono: "🎼",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. El primer pensamiento coherente del día, antes que cualquier lista de pendientes, fue sobre ti. Letras profundas de rap consciente para reflexionar un momento.",
    poema: [
      "Querer querernos sin importar las reglas del mundo,",
      "creando nuestro propio camino."
    ],
    detalle: "Date un respiro real hoy y escucha esta letra con atención.",
    buenasNoches: "El cielo ya está completamente oscuro, y en algún lugar de ahí arriba hay una estrella que, según decidí hoy, es tuya. Que tengas una noche muy tranquila.",
    notaImagen: "[MÚSICA] Canción: Querer Querernos",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 149,
    categoria: "Descontrol",
    icono: "💥",
    tono: "hot",
    color: { principal: "#a10e35", suave: "#f0aabd", oscuro: "#140208" },
    buenosDias: "Buenos días. Hoy admito, sin vergüenza, que contigo pierdo un poco el control, y no me molesta para nada.",
    poema: [
      "Hay una versión mía más calculada que uso casi siempre, y hay otra que solo aparece contigo, que actúa más por instinto que por plan.",
      "Hoy salió esa segunda versión, sin previo aviso."
    ],
    detalle: "No pidas que me controle hoy. No va a pasar, ni lo voy a intentar.",
    buenasNoches: "Buenas noches, todavía sin mucho control, la verdad.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 150,
    categoria: "Mar",
    icono: "🌊",
    tono: "filosofica",
    color: { principal: "#2ea3a3", suave: "#c3f0ee", oscuro: "#062020" },
    buenosDias: "Buenos días. Afuera el día apenas se estira, y aquí ya estoy yo, pensando en ti antes que en cualquier otra cosa. Hoy pensé en ti y en el mar, no sé por qué siempre van juntos.",
    poema: [
      "Hay algo en el mar que se parece a ti: no siempre está tranquilo, pero siempre vuelve a calmarse.",
      "Y de todas formas, uno siempre quiere volver a verlo."
    ],
    detalle: "Cuando podamos, quiero llevarte a ver el mar y no hacer nada más que mirarlo contigo.",
    buenasNoches: "Las cobijas ya están listas, y en un rato, cuando cierre los ojos, sé exactamente en quién voy a pensar. Buenas noches, que sueñes con olas tranquilas.",
    notaImagen: "[PARA TI] una foto de playa o mar que les guste.",
    notaCancion: "[PARA TI] algo costero, relajado, de esas para playa."
  },

  {
    dia: 151,
    categoria: "Electricidad",
    icono: "⚡",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días. Hay una carga entre nosotros que últimamente no se ha podido descargar del todo como debería.",
    poema: [
      "Cada vez que nos acercamos algo se enciende, y cada vez que nos separamos ese algo se queda pendiente, acumulándose despacio.",
      "Ya va siendo hora de una buena descarga, ¿no crees?"
    ],
    detalle: "Prepárate. Hay electricidad acumulada esperando salida.",
    buenasNoches: "Buenas noches, todavía cargado, esperando el momento correcto.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 152,
    categoria: "Certezas",
    icono: "🔮",
    tono: "amor",
    color: { principal: "#8f5fd1", suave: "#e0d3fa", oscuro: "#160a2b" },
    buenosDias: "Buenos días. Hay una calma particular en las primeras horas, antes de que el ruido del día se meta por todos lados. No tengo todas las respuestas de la vida, pero de ti sí tengo certeza.",
    poema: [
      "Hay pocas cosas de las que estoy completamente seguro, y una de esas es que quiero seguir aquí, contigo.",
      "Esa certeza no ha cambiado ni un solo día."
    ],
    detalle: "Eres de las pocas certezas que tengo, y no es poca cosa.",
    buenasNoches: "Las cosas del día ya quedaron atrás, y lo único que sigue presente, como siempre, eres tú. Buenas noches, seguro de esto, como siempre.",
    notaImagen: "[PARA TI] otra foto en morado, algo que le guste especialmente.",
    notaCancion: "[PARA TI] algo con más profundidad, atmosférico."
  },

  {
    dia: 153,
    categoria: "Vibración",
    icono: "🎧",
    tono: "filosofica",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. Hay una quietud bonita en las mañanas de entre semana que casi nadie aprovecha, y hoy la usé para esto. Música alegre para recordarte que las cosas bonitas toman su tiempo.",
    poema: [
      "Caminar a tu lado convierte cualquier día común",
      "en una anécdota que vale la pena contar."
    ],
    detalle: "Guarda este tema en tu repertorio personal.",
    buenasNoches: "El día terminó, con sus cosas buenas y sus cosas normales, pero contigo en la mente el balance siempre sale bien. Que descanses profundamente.",
    notaImagen: "[MÚSICA] Canción: Contigo",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 154,
    categoria: "Lo Que en Ti Veo",
    icono: "📻",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. Hoy me desperté antes de la alarma, y en ese ratito extra, sin planearlo, ya estaba pensando en ti. Hoy quiero hablarte de una canción sobre ver en alguien algo que nadie más nota.",
    poema: [
      "Hay una canción de Andrés Cepeda que habla de todo lo que se ve en una persona cuando de verdad se le presta atención, cosas que a simple vista se podrían pasar por alto.",
      "Contigo me pasa eso: veo muchas cosas bonitas que quizás tú ni siquiera notas de ti misma."
    ],
    detalle: "Se llama 'Lo Que en Ti Veo', de Andrés Cepeda.",
    buenasNoches: "El silencio de la casa a esta hora es distinto a cualquier otro momento del día, más íntimo, más real. Buenas noches, viendo en ti lo mismo de siempre: mucho.",
    notaImagen: "[MÚSICA] Canción: Ojitos Lindos",
    notaCancion: "[PARA TI] canción real: 'Lo Que en Ti Veo' - Andrés Cepeda."
  },

  {
    dia: 155,
    categoria: "Calor",
    icono: "🌙",
    tono: "hot",
    color: { principal: "#a10e35", suave: "#f0aabd", oscuro: "#140208" },
    buenosDias: "Buenos días. Anoche no fue un sueño cualquiera, y prefiero no dar más detalles por este medio.",
    poema: [
      "Hay una parte de mí que solo te muestro cuando estamos a solas, y hoy esa parte amaneció con ganas de salir a saludar temprano.",
      "No te voy a contar todo lo que se me ocurrió, pero si me preguntas en persona no me voy a hacer el difícil."
    ],
    detalle: "Pregúntame en persona qué soñé. No te vas a arrepentir de preguntar.",
    buenasNoches: "Buenas noches, con ganas de que esta noche se repita, pero contigo de verdad presente.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 156,
    categoria: "Herida bonita",
    icono: "🥀",
    tono: "filosofica",
    color: { principal: "#5c1f3d", suave: "#d9a7bd", oscuro: "#12040a" },
    buenosDias: "Buenos días. Hay una luz particular en las mañanas de esta semana, de esas que entran de lado y hacen que todo se vea un poco más honesto. Hay amores que sanan y amores que remueven, y el tuyo hace las dos cosas a la vez.",
    poema: [
      "Me has hecho ver partes de mí que no sabía que existían, algunas bonitas, otras incómodas, todas necesarias.",
      "No todo lo que ayuda a crecer se siente cómodo, y aun así, elijo quedarme."
    ],
    detalle: "Gracias por remover lo que había que remover.",
    buenasNoches: "El día ya se apagó casi del todo, y antes de cerrar los ojos quería dejarte esto. Buenas noches, más entero de lo que estaba antes de ti.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 157,
    categoria: "Madrugada",
    icono: "🌃",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días, aunque este mensaje tiene más de madrugada que de mañana en lo que realmente dice.",
    poema: [
      "Hay una hora rara de la noche en la que pienso en ti de una forma nada inocente, sin que pueda evitarlo del todo.",
      "Si me ves con cara de poco dormida, ya sabes exactamente en qué estaba pensando."
    ],
    detalle: "Pregúntame en qué pensaba, si te atreves a preguntar.",
    buenasNoches: "Buenas noches, con la madrugada todavía rondando la cabeza.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 158,
    categoria: "Amor Libre",
    icono: "🎼",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. Hay días que empiezan con prisa y días que empiezan despacio, y este es de los segundos, justo lo que necesitaba. Hoy quiero hablarte de una canción que describe el amor como algo que libera, no que encierra.",
    poema: [
      "Hay una canción de Nach donde compara a la persona que ama con la flor más bonita y con la paz en medio del caos, y dice que a su lado se siente invencible.",
      "Contigo me pasa algo parecido: no siento que esto me quite libertad, siento que me la da."
    ],
    detalle: "Se llama 'Amor Libre', de Nach. Tiene una de esas letras que suenan a poema bien armado.",
    buenasNoches: "El teléfono ya está casi sin batería, pero antes de que se apague quería mandarte esto. Buenas noches, libre y tranquilo, gracias a ti.",
    notaImagen: "[MÚSICA] Canción: Tú Sí Sabes Querírmeme",
    notaCancion: "[PARA TI] canción real: 'Amor Libre' - Nach (feat. Shuga Wuga)."
  },

  {
    dia: 159,
    categoria: "Fuego",
    icono: "🔥",
    tono: "hot",
    color: { principal: "#b3123f", suave: "#f2b3c4", oscuro: "#170209" },
    buenosDias: "Buenos días. Hoy el mensaje viene con más temperatura de la habitual, para que lo sepas desde ya.",
    poema: [
      "Hay conversaciones que empiezan tranquilas y terminan en un lugar completamente distinto, y contigo eso pasa más seguido de lo que suelo admitir.",
      "No me quejo. Para nada, de hecho."
    ],
    detalle: "Si el chat se pone interesante más tarde, no pienso ser yo quien lo frene.",
    buenasNoches: "Buenas noches, con la temperatura todavía un poco alta.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 160,
    categoria: "Canción compartida",
    icono: "💿",
    tono: "amor",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Todavía no termino el café y ya te estoy escribiendo, para que veas el orden de prioridades que manejo. Música alegre para recordar que caminar juntos es lo mejor.",
    poema: [
      "Contigo cualquier momento se vuelve una fiesta,",
      "una razón para celebrar a la distancia."
    ],
    detalle: "Pela los audífonos y ponla a sonar.",
    buenasNoches: "Hay una calma particular en las últimas horas del día que hace que todo se sienta más simple, más claro. Que duermas bien, te pienso un montón.",
    notaImagen: "[MÚSICA] Canción: Contigo",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 161,
    categoria: "Susurro",
    icono: "🌹",
    tono: "hot",
    color: { principal: "#e0294f", suave: "#ffc9d6", oscuro: "#20050b" },
    buenosDias: "Buenos días. Hoy quiero susurrarte algo, aunque sea por escrito, aunque el susurro pierda parte de su efecto así.",
    poema: [
      "Hay cosas que solo se dicen bajito, casi al oído, y hoy tengo varias guardadas para ti, esperando el momento.",
      "Cuando estemos cerca te las digo todas, una por una, sin ningún apuro."
    ],
    detalle: "Prepárate. La lista mental se está haciendo cada vez más larga.",
    buenasNoches: "Buenas noches, con un susurro pendiente todavía sin entregar.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 162,
    categoria: "Te Mando Flores",
    icono: "🌷",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. Hay algo reconfortante en empezar el día sabiendo exactamente a quién le voy a escribir primero. Hoy quiero hablarte de una canción colombiana que va perfecto con todo lo que hemos hablado de flores en este calendario.",
    poema: [
      "Hay una canción de Fonseca que habla de mandarle flores y besos a alguien a través de los sueños, cuando no se puede estar cerca físicamente, como una forma de sentir los corazones un poco más juntos.",
      "Cada flor que aparece en este calendario tiene un poco de esa misma idea: una forma de mandarte algo bonito aunque no esté ahí en persona."
    ],
    detalle: "Se llama 'Te Mando Flores', de Fonseca.",
    buenasNoches: "El ruido del día por fin bajó de volumen, y en ese silencio es más fácil sentir las cosas con claridad. Buenas noches, con flores imaginarias mandadas hacia tu lado.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'Te Mando Flores' - Fonseca."
  },

  {
    dia: 163,
    categoria: "Compañía",
    icono: "🕸️",
    tono: "amor",
    color: { principal: "#3a6ea5", suave: "#c9dcf2", oscuro: "#081321" },
    buenosDias: "Buenos días. El día recién empieza a tomar forma, y ya sé que una parte buena de él tiene que ver contigo. Hoy quiero hablar de algo que no siempre se valora lo suficiente: la buena compañía.",
    poema: [
      "Hay compañías que llenan un espacio y compañías que llenan un silencio, y la tuya hace las dos cosas.",
      "No cambio tu compañía por nada."
    ],
    detalle: "Gracias por ser tan buena compañía, hasta en los días callados.",
    buenasNoches: "El día se cierra, como siempre, con vos como el último pensamiento antes de apagar la luz. Buenas noches, en buena compañía, aunque sea a la distancia.",
    notaImagen: "[PARA TI] algo de Spider-Man, o algo que los conecte a los dos.",
    notaCancion: "[PARA TI] algo con ritmo, entretenido."
  },

  {
    dia: 164,
    categoria: "Arte",
    icono: "🎨",
    tono: "filosofica",
    color: { principal: "#e0a63d", suave: "#ffe3b0", oscuro: "#241a04" },
    buenosDias: "Buenos días. Hay un tipo de silencio en las mañanas tempranas que se presta perfecto para pensar con calma, y hoy lo usé para pensar en ti. artista. Hoy quiero hablarte de lo que me gusta de cómo ves el mundo.",
    poema: [
      "Hay gente que mira un lugar y solo ve un lugar. Tú miras un lugar y ves color, composición, una historia.",
      "Me gusta ver el mundo un poco a través de tus ojos."
    ],
    detalle: "Cuéntame algún día cuál es la obra o el artista que más te ha movido.",
    buenasNoches: "Hay noches en que uno se queda despierto de más, y esta es una de esas, por pensar en ti un rato extra. Buenas noches, que tu mente siga pintando cosas bonitas mientras duermes.",
    notaImagen: "[PARA TI] una foto de una obra de arte que le guste, o de ella creando algo.",
    notaCancion: "[PARA TI] algo artístico, con textura, tipo lo-fi o clásico."
  },

  {
    dia: 165,
    categoria: "Orquídea",
    icono: "🌺",
    tono: "filosofica",
    color: { principal: "#d94fb0", suave: "#ffd6f0", oscuro: "#26071c" },
    buenosDias: "Buenos días. Las primeras luces del día siempre me hacen pensar en empezar de cero, y hoy quise empezar pensando en ti. elegancia. Hoy va dedicado a lo especial que eres, sin que tengas que esforzarte.",
    poema: [
      "La orquídea tiene fama de ser difícil de cuidar, pero cuando florece, no hay flor que se compare.",
      "Vale la pena todo el cuidado, contigo pasa lo mismo: vale la pena cada intento."
    ],
    detalle: "Significado de la orquídea: belleza refinada y fuerza.",
    buenasNoches: "La cama todavía está fría, pero el pensamiento de ti ya la calentó un poco. Buenas noches, mi flor difícil y hermosa.",
    notaImagen: "[PARA TI] una foto de orquídeas.",
    notaCancion: "[PARA TI] algo elegante, tipo jazz suave o bolero."
  },

  {
    dia: 166,
    categoria: "Deseo",
    icono: "🔥",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días. Hoy no vengo con poesía suave. Vengo con ganas de decirte lo que normalmente me guardo.",
    poema: [
      "Hay días en que pienso en ti de una forma que no cabe bien en un mensaje de buenos días, de esas que se sienten primero en la piel y después en la cabeza.",
      "No te voy a contar todo lo que imagino, pero sí te digo que no es poco, y que casi siempre empieza contigo cerca."
    ],
    detalle: "Guárdate esto para cuando estemos solos. Ahí sí te cuento el resto completo.",
    buenasNoches: "Buenas noches. Ojalá sueñes conmigo tan cerca como yo te imagino hoy.",
    notaImagen: "[PARA TI] algo sugerente, sutil, a tu criterio.",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo 'hot'."
  },

  {
    dia: 167,
    categoria: "Querer Querernos",
    icono: "🎵",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. Hay mañanas que parecen prometer algo bueno desde el primer minuto, y esta es una de esas. Hoy quiero hablarte de una canción que describe bastante bien esa etapa bonita del principio de algo.",
    poema: [
      "Hay una canción de Canserbero que habla de la inocencia del primer amor, de esa conexión que se siente nueva y mágica sin necesidad de complicarla.",
      "Me recuerda un poco a cómo empezó esto entre nosotros."
    ],
    detalle: "Se llama 'Querer Querernos', de Canserbero. Búscala cuando puedas, tiene un ritmo suave y una letra bonita sobre empezar a querer a alguien sin miedo.",
    buenasNoches: "El cansancio del día ya se siente en el cuerpo, pero pensar en ti siempre alivia un poco esa parte. Buenas noches, con esa misma magia del principio todavía intacta.",
    notaImagen: "[MÚSICA] Canción: Querer Querernos",
    notaCancion: "[PARA TI] canción real: 'Querer Querernos' - Canserbero. Agrégala a catalogo-canciones.js con su link si quieres que suene."
  },

  {
    dia: 168,
    categoria: "Hogar compartido",
    icono: "🥀",
    tono: "amor",
    color: { principal: "#b3123a", suave: "#f5b8c6", oscuro: "#240309" },
    buenosDias: "Buenos días. Todavía no me tomo el café completo y ya voy por la mitad de este mensaje. Hoy quiero hablar de hogar, del que se construye con una persona, no con paredes.",
    poema: [
      "No necesito una dirección para sentirme en casa, me basta con hablar contigo.",
      "Quiero seguir construyendo ese hogar, sin importar dónde estemos cada uno."
    ],
    detalle: "Gracias por ser mi hogar, incluso a la distancia.",
    buenasNoches: "Hay un tipo de sueño que llega mejor cuando el último pensamiento del día fue bueno, y hoy lo fue, gracias a ti. Buenas noches, en casa, como siempre contigo.",
    notaImagen: "[PARA TI] una foto de una rosa, quizás una un poco más silvestre.",
    notaCancion: "[PARA TI] algo con más sentimiento, profundo."
  },

  {
    dia: 169,
    categoria: "Rosa",
    icono: "🌹",
    tono: "amor",
    color: { principal: "#d81e3e", suave: "#ffc2ce", oscuro: "#2b0508" },
    buenosDias: "Buenos días. Hay mañanas que se sienten como una hoja en blanco, y hoy decidí empezar la mía escribiéndote a ti. mi rosa. Hoy no hay vueltas ni indirectas, hoy es directo: te amo.",
    poema: [
      "Dicen que la rosa roja habla de un amor que no se guarda, uno que se dice de frente.",
      "El mío es ese: profundo, sin miedo, todo para ti."
    ],
    detalle: "Significado de la rosa roja: amor profundo y pasión verdadera.",
    buenasNoches: "Las últimas luces de la casa ya se apagaron, y en la oscuridad, como siempre, apareciste tú primero en mis pensamientos. Buenas noches, sin filtros, sin miedo, tuyo.",
    notaImagen: "[PARA TI] una foto de rosas rojas.",
    notaCancion: "[PARA TI] algo romántico, de esas clásicas de amor."
  },

  {
    dia: 170,
    categoria: "Aprender de ti",
    icono: "🏆",
    tono: "amor",
    color: { principal: "#c9a227", suave: "#f4e2a0", oscuro: "#201803" },
    buenosDias: "Buenos días. El aire todavía huele a noche cuando empiezo a escribirte esto. Hoy quiero reconocer todo lo que he aprendido de ti sin que te dieras cuenta.",
    poema: [
      "Me enseñaste cosas que no estaban en ningún plan, solo pasó, viéndote manejar la vida a tu manera.",
      "Gracias por ser, sin proponértelo, una de mis mejores enseñanzas."
    ],
    detalle: "Sigo aprendiendo de ti cada día, y no me molesta para nada.",
    buenasNoches: "Las estrellas, si es que se ven desde donde estás, tienen algo tuyo hoy, aunque suene un poco cursi decirlo así. Buenas noches, un poco más sabio gracias a ti.",
    notaImagen: "[PARA TI] una foto de algún logro suyo del que esté orgullosa.",
    notaCancion: "[PARA TI] algo motivador o triunfal."
  },

  {
    dia: 171,
    categoria: "Azucena",
    icono: "🤍",
    tono: "filosofica",
    color: { principal: "#e8e2d0", suave: "#fbf8ef", oscuro: "#18160f" },
    buenosDias: "Buenos días. El teléfono marcó la hora y, en automático, pensé en ti antes de pensar en cualquier pendiente del día. elegancia tranquila. Hoy va dedicado a lo que impresiona sin alzar la voz.",
    poema: [
      "La azucena es de esas flores que entran a un lugar y automáticamente se sienten más finas las cosas.",
      "Tú tienes ese efecto también, sin proponértelo."
    ],
    detalle: "Significado de la azucena: pureza y majestuosidad.",
    buenasNoches: "Hay una quietud distinta en las noches, de esas que invitan a pensar despacio en lo que de verdad importa. Buenas noches, elegante hasta en sueños.",
    notaImagen: "[PARA TI] una foto de azucenas o flores blancas grandes.",
    notaCancion: "[PARA TI] algo elegante, tipo piano."
  },

  {
    dia: 172,
    categoria: "Lavanda",
    icono: "💐",
    tono: "amor",
    color: { principal: "#9b7fd4", suave: "#e3d9fb", oscuro: "#160c26" },
    buenosDias: "Buenos días. Hay una energía distinta en los días que empiezan escribiéndote, no sabría explicar bien por qué. calma. Hoy quiero que el día se sienta tranquilo, como tú cuando estás en paz.",
    poema: [
      "La lavanda relaja con solo olerla, dicen que ayuda a soltar el día.",
      "Espero ser, aunque sea un poco, ese mismo efecto para ti."
    ],
    detalle: "Significado de la lavanda: calma, devoción y tranquilidad.",
    buenasNoches: "Hay noches donde el cansancio gana rápido, y aun así encontré energía para pensarte un rato más. Buenas noches, que sueltes el día completo antes de dormir.",
    notaImagen: "[PARA TI] una foto de lavanda o algo en tonos morados suaves.",
    notaCancion: "[PARA TI] algo instrumental, para relajarse."
  },

  {
    dia: 173,
    categoria: "Espera",
    icono: "🕊️",
    tono: "filosofica",
    color: { principal: "#c7bfe0", suave: "#f1eefb", oscuro: "#161425" },
    buenosDias: "Buenos días. El café todavía está humeando cuando ya estoy pensando en qué decirte hoy. Hoy quiero hablar de la espera, de lo que se construye mientras se espera algo bueno.",
    poema: [
      "No todas las esperas se sienten iguales, y la de estar cerca de ti otra vez se siente distinta, más liviana.",
      "Sé esperar cuando sé que al final vale la pena."
    ],
    detalle: "Gracias por hacer que valga la pena esperar.",
    buenasNoches: "La luz de la lámpara es lo único encendido ya en este cuarto, y sigo aquí, pensando en cómo cerrar bien el día contigo en mente. Buenas noches, esperando con calma lo que sigue.",
    notaImagen: "[PARA TI] una foto de lirios o algo en tonos claros y suaves.",
    notaCancion: "[PARA TI] algo minimalista, tipo piano o guitarra sola."
  },

  {
    dia: 174,
    categoria: "Calma compartida",
    icono: "🦸‍♀️",
    tono: "amor",
    color: { principal: "#e13a3a", suave: "#ffc9c9", oscuro: "#210a0a" },
    buenosDias: "Buenos días. Antes de revisar cualquier otra cosa en el teléfono, ya estaba escribiéndote esto. Contigo aprendí que la calma también se comparte, no solo se busca a solas.",
    poema: [
      "Hay una calma que llega cuando hablo contigo, distinta a cualquier otra que haya sentido.",
      "Gracias por prestarme un poco de la tuya en mis días difíciles."
    ],
    detalle: "Espero también poder prestarte calma cuando la necesites.",
    buenasNoches: "Hay noches que se sienten largas y noches que se sienten cortas, y esta, contigo en la cabeza, se sintió de las buenas. Buenas noches, en calma, gracias a ti.",
    notaImagen: "[PARA TI] una foto de ustedes dos, o algo que represente trabajo en equipo.",
    notaCancion: "[PARA TI] algo motivador, con energía."
  },

  {
    dia: 175,
    categoria: "Créditos finales",
    icono: "🎤",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. El día apenas empieza a definirse, pero ya sé que una parte de él va a estar dedicada a pensar en ti. Ritmo fresco para alegrar la mañana más pesada.",
    poema: [
      "Tus ojos lindos iluminan cualquier espacio,",
      "borrando el cansancio en segundos."
    ],
    detalle: "Que tengas un día sumamente productivo y lleno de buena vibra.",
    buenasNoches: "Hay una versión más honesta de mí que solo sale de noche, y esa versión también te quiere mucho. Que la noche te regale un descanso reparador.",
    notaImagen: "[MÚSICA] Canción: Ojitos Lindos",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 176,
    categoria: "Impaciencia",
    icono: "⏱️",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días. Hoy no tengo paciencia para esperar a verte, y no pienso disimularlo.",
    poema: [
      "Hay días en que la distancia se siente como un detalle menor, y hay otros, como hoy, en que se siente eterna sin razón aparente.",
      "Cuenta esto como una queja formal: te quiero cerca, ya, sin más trámite."
    ],
    detalle: "Cuando nos veamos, no esperes que te salude con calma.",
    buenasNoches: "Buenas noches, con la impaciencia intacta para la próxima vez.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 177,
    categoria: "Destino",
    icono: "🔑",
    tono: "filosofica",
    color: { principal: "#5c1f3d", suave: "#d9a7bd", oscuro: "#12040a" },
    buenosDias: "Buenos días. El cielo todavía tiene ese color raro de las mañanas que no se deciden entre gris y celeste. No sé si creo mucho en el destino, pero contigo empiezo a dudar de mi propio escepticismo.",
    poema: [
      "Hay encuentros que parecen casualidad y terminan sintiéndose como otra cosa, algo más armado, más a propósito.",
      "No sé si fue destino o suerte, pero no pienso cuestionarlo demasiado."
    ],
    detalle: "Sea lo que sea que nos trajo hasta aquí, le debo una.",
    buenasNoches: "El día se despide con la misma certeza de siempre: que quiero que mañana empiece igual, pensando en ti primero. Buenas noches, agradecido con lo que sea que nos unió.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 178,
    categoria: "Café",
    icono: "☕",
    tono: "amor",
    color: { principal: "#a9784f", suave: "#eccfa0", oscuro: "#1f1206" },
    buenosDias: "Buenos días. Hay un tipo de calma particular en escribir esto antes de que el celular empiece a sonar con todo lo demás. Hoy quiero acompañarte, aunque sea de lejos, en tu primer café del día.",
    poema: [
      "Hay algo especial en esos primeros minutos del día, antes de que todo empiece a moverse rápido.",
      "Ojalá algún día podamos compartir ese momento en la misma mesa, en silencio, sin apuro."
    ],
    detalle: "Cuéntame cómo te gusta el café (o si prefieres té, también se vale).",
    buenasNoches: "Hay un silencio particular a esta hora que hace que las palabras pesen distinto, más sinceras. Buenas noches, mañana hay otro café esperando.",
    notaImagen: "[PARA TI] una foto de un café o un desayuno bonito.",
    notaCancion: "[PARA TI] algo suave, para tomar café de fondo."
  },

  {
    dia: 179,
    categoria: "Roce",
    icono: "🌶️",
    tono: "hot",
    color: { principal: "#e0294f", suave: "#ffc9d6", oscuro: "#20050b" },
    buenosDias: "Buenos días. Hoy quería mandarte algo que te sacara esa sonrisa pícara que se te escapa a veces sin que te des cuenta.",
    poema: [
      "Hay una sonrisa tuya que solo aparece cuando sabes que estoy pensando en ti de cierta forma, y hoy la quiero provocar a propósito.",
      "Si funcionó, avísame apenas la notes."
    ],
    detalle: "¿Ya se te salió la sonrisa? Esa era exactamente la idea.",
    buenasNoches: "Buenas noches, con esa sonrisa todavía dando vueltas en la cabeza.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 180,
    categoria: "Lo cotidiano",
    icono: "🌼",
    tono: "amor",
    color: { principal: "#f2e94e", suave: "#faf6cf", oscuro: "#141a08" },
    buenosDias: "Buenos días. El sol todavía no calienta del todo, pero algo aquí adentro ya empezó a hacerlo. Hoy quiero valorar lo cotidiano: un mensaje, una llamada, un 'cómo amaneciste'.",
    poema: [
      "No todo tiene que ser extraordinario para ser valioso, lo cotidiano contigo también lo es.",
      "Gracias por hacer que lo de todos los días valga la pena."
    ],
    detalle: "Hoy valora también tú algo cotidiano, aunque parezca pequeño.",
    buenasNoches: "Hay algo tranquilizador en saber que, sin importar cómo estuvo el día, esto de escribirte de noche no cambia. Buenas noches, agradecido por otro día cotidiano contigo.",
    notaImagen: "[PARA TI] otra foto de margaritas.",
    notaCancion: "[PARA TI] algo simple y bonito."
  },

  {
    dia: 181,
    categoria: "Improvisación",
    icono: "🎸",
    tono: "amor",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. Hay mañanas silenciosas y mañanas ruidosas, y esta, por suerte, es de las tranquilas. ¡Llegamos al día 150! Y se celebra con música que marca momentos.",
    poema: [
      "52 días de canciones, charlas y momentos,",
      "construyendo algo que vale oro puro."
    ],
    detalle: "Celebra este hito escuchando tu canción favorita de todo el listado.",
    buenasNoches: "El silencio de la noche siempre hace que las cosas simples, como decir buenas noches, se sientan un poco más importantes. Que descanses de la mejor manera, amor. Mañana seguimos sumando.",
    notaImagen: "[MÚSICA] Canción: La Mitad",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 182,
    categoria: "There's Nothing Holdin' Me Back",
    icono: "🔓",
    tono: "hot",
    color: { principal: "#b3123f", suave: "#f2b3c4", oscuro: "#170209" },
    buenosDias: "Buenos días. Hoy quiero hablarte de una canción sobre las ganas de estar más cerca de alguien, sin nada que lo impida.",
    poema: [
      "Hay una canción de Shawn Mendes que habla de querer avanzar rápido con alguien que le gusta, sin nada que lo detenga.",
      "A veces siento esas mismas ganas de estar más cerca tuyo, sin frenos de por medio."
    ],
    detalle: "Se llama 'There's Nothing Holdin' Me Back', de Shawn Mendes.",
    buenasNoches: "Buenas noches, con las ganas de cercanía todavía despiertas.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'There's Nothing Holdin' Me Back' - Shawn Mendes."
  },

  {
    dia: 183,
    categoria: "Canción de domingo",
    icono: "🎶",
    tono: "amor",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. El ruido de la calle todavía no arranca del todo, y en ese pequeño espacio de calma te escribo esto. Melodías dulces para recordar que eres mi mitad favorita.",
    poema: [
      "Tú eres la pieza exacta que le da sentido a mis días,",
      "la melodía que siempre quiero repetir."
    ],
    detalle: "Escúchala hoy y sonríe un momento.",
    buenasNoches: "Hay algo bonito en cerrar el día pensando en la misma persona con la que se abrió, y hoy fue así otra vez. Duerme bien, soñando bonito.",
    notaImagen: "[MÚSICA] Canción: La Mitad",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 184,
    categoria: "Piel de gallina",
    icono: "🌡️",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días. Hay algo en solo pensarte cerca que sube la temperatura sin que yo haga nada más.",
    poema: [
      "Se me pone la piel de gallina de solo imaginar tu mano en algún punto que ya sabemos los dos.",
      "No es casualidad. Es puntería exacta. Sabes perfectamente el efecto que tienes en mí."
    ],
    detalle: "Cuando te vea, prepárate, porque yo ya estoy preparado desde ahora mismo.",
    buenasNoches: "Buenas noches, con la piel todavía sensible de solo pensarte tanto.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 185,
    categoria: "Comodidad",
    icono: "🧶",
    tono: "amor",
    color: { principal: "#7d8fa6", suave: "#dbe4ee", oscuro: "#131a22" },
    buenosDias: "Buenos días. Hay mañanas donde uno se siente con ganas de todo, y esta parece ser una de esas. Hoy es de esos días para quedarse cómoda, sin apuro.",
    poema: [
      "Hay días que piden buzo, medias gruesas y no hacer nada productivo.",
      "Ojalá hoy sea uno de esos para ti, y ojalá algún día podamos tener uno así juntos."
    ],
    detalle: "Si hoy te pones tu buzo favorito, cuenta que es un abrazo mío disfrazado de tela.",
    buenasNoches: "El día ya cumplió su ciclo completo, y como siempre, terminó pensando en la misma persona con la que empezó. Buenas noches, calientita y tranquila.",
    notaImagen: "[PARA TI] una foto de un día cómodo, de esos de pijama y sofá.",
    notaCancion: "[PARA TI] algo suave, para no hacer nada de fondo."
  },

  {
    dia: 186,
    categoria: "Manía",
    icono: "🖤",
    tono: "hot",
    color: { principal: "#a10e35", suave: "#f0aabd", oscuro: "#140208" },
    buenosDias: "Buenos días. Tengo una manía nueva: pensarte en momentos que definitivamente no debería, como en medio de una reunión aburrida.",
    poema: [
      "No es normal pensar tanto en alguien en momentos tan al azar, y aun así no logro evitarlo contigo, ni lo intento en serio.",
      "Considérate oficialmente mi manía favorita de este año."
    ],
    detalle: "Si me ves distraído algún día de estos, ya sabes exactamente por qué.",
    buenasNoches: "Buenas noches, todavía con la manía completamente activa.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 187,
    categoria: "Promesas pequeñas",
    icono: "🕷️",
    tono: "amor",
    color: { principal: "#e13a3a", suave: "#ffc9c9", oscuro: "#210a0a" },
    buenosDias: "Buenos días. El despertador sonó dos veces antes de que lograra levantarme, y en el medio, sin darme cuenta, ya estaba pensando en ti. No te prometo cosas enormes, te prometo cosas pequeñas y constantes.",
    poema: [
      "Prefiero prometerte llamadas, buenos días, detalles pequeños, antes que promesas grandes que después no sé si voy a cumplir.",
      "Las pequeñas las cumplo todas."
    ],
    detalle: "Aquí va otra promesa pequeña: hoy también pienso en ti.",
    buenasNoches: "Las luces de la calle ya se encendieron hace rato, y aquí sigo, pensando en ti antes de dormir. Buenas noches, con otra promesa pequeña cumplida.",
    notaImagen: "[PARA TI] otra foto divertida de los dos.",
    notaCancion: "[PARA TI] algo con energía."
  },

  {
    dia: 188,
    categoria: "Besos en Guerra",
    icono: "🎸",
    tono: "hot",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. Hoy quiero hablarte de una canción que compara el amor con una pelea bonita, de esas que no se quieren terminar.",
    poema: [
      "Hay una canción de Morat que habla de un amor intenso, casi como una batalla, pero de las que se disfrutan, no de las que duelen.",
      "Contigo también hay chispa así a veces, y no me quejo para nada."
    ],
    detalle: "Se llama 'Besos en Guerra', de Morat.",
    buenasNoches: "Buenas noches, con la chispa todavía encendida.",
    notaImagen: "[MÚSICA] Canción: The Scientist",
    notaCancion: "[PARA TI] canción real: 'Besos en Guerra' - Morat."
  },

  {
    dia: 189,
    categoria: "Casete",
    icono: "🎵",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. Hoy el despertar fue lento, de esos donde uno se queda un rato más en la cama solo pensando. Vibra caribeña y latina para arrancar el día con buena energía.",
    poema: [
      "Dámelo todo, que de lo demás nos encargamos paso a paso,",
      "sin prisas y con el corazón por delante."
    ],
    detalle: "Que tengas un día lleno de sorpresas agradables.",
    buenasNoches: "Afuera ya no se escucha casi nada, solo el silencio típico de esta hora, cómodo, tranquilo. Que duermas de maravilla.",
    notaImagen: "[MÚSICA] Canción: Dámelo Todo",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 190,
    categoria: "Cercanía",
    icono: "💫",
    tono: "hot",
    color: { principal: "#d1163f", suave: "#f7bccb", oscuro: "#1c0409" },
    buenosDias: "Buenos días. Hoy solo quiero estar pegado a ti, literal, sin ningún espacio de por medio.",
    poema: [
      "Hay una forma de abrazar que no es solo cariño, también es ganas puras, y hoy tengo bastante de las dos cosas.",
      "Cuando te vea, prepárate para que no te suelte tan rápido como de costumbre."
    ],
    detalle: "Aparta tiempo para mí la próxima vez que nos veamos. Todo el que puedas, en serio.",
    buenasNoches: "Buenas noches, contando los días para estar cerca otra vez.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 191,
    categoria: "Spider-Man",
    icono: "🕷️",
    tono: "amor",
    color: { principal: "#e13a3a", suave: "#ffc9c9", oscuro: "#210a0a" },
    buenosDias: "Buenos días. Todavía hace frío afuera, pero aquí adentro algo ya se siente tibio desde temprano. mi persona. Hoy toca sentirse un poco invencibles.",
    poema: [
      "No necesito trepar paredes ni salvar ciudades: contigo ya me siento capaz de cualquier cosa, y eso también es una especie de superpoder.",
      "Eres la razón por la que quiero ser mejor todos los días."
    ],
    detalle: "Hoy, si algo se complica, recuerda que tienes un equipo: yo.",
    buenasNoches: "El ruido de afuera bajó por completo, y en ese silencio hay espacio de sobra para pensar en ti con calma. Buenas noches, superheroína. Mañana seguimos salvando el día juntos.",
    notaImagen: "[PARA TI] algo divertido, tipo cómic o Spider-Man.",
    notaCancion: "[PARA TI] algo con energía, para sentirse imparable."
  },

  {
    dia: 192,
    categoria: "Sin filtro",
    icono: "🔥",
    tono: "hot",
    color: { principal: "#e0294f", suave: "#ffc9d6", oscuro: "#20050b" },
    buenosDias: "Buenos días. Hoy no filtro nada: te quiero, te deseo, y las dos cosas pesan exactamente lo mismo para mí.",
    poema: [
      "A veces separamos el cariño del deseo como si uno fuera más válido o más limpio que el otro, y honestamente no creo que sea así.",
      "Contigo los dos van siempre juntos, sin ninguna pena de por medio."
    ],
    detalle: "No tengo que elegir entre quererte y desearte. Te tengo las dos cosas, completas.",
    buenasNoches: "Buenas noches, con las dos cosas intactas, como siempre han estado.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 193,
    categoria: "Horizonte",
    icono: "🌄",
    tono: "filosofica",
    color: { principal: "#4f6d8f", suave: "#c9dcee", oscuro: "#0a1622" },
    buenosDias: "Buenos días. El primer pensamiento coherente del día, antes que cualquier lista de pendientes, fue sobre ti. Hoy quiero mirar hacia adelante, hacia todo lo que todavía no hemos vivido.",
    poema: [
      "Me gusta imaginar el horizonte de esto: todo lo que falta por construir, por conocer, por vivir juntos.",
      "No tengo miedo de ese horizonte, al contrario, tengo ganas de llegar hasta allá contigo."
    ],
    detalle: "¿Qué hay en tu horizonte que te gustaría vivir conmigo? Cuéntame.",
    buenasNoches: "El cielo ya está completamente oscuro, y en algún lugar de ahí arriba hay una estrella que, según decidí hoy, es tuya. Buenas noches, mirando hacia un buen horizonte, contigo en el camino.",
    notaImagen: "[PARA TI] otra foto de un paisaje o mirador que le guste.",
    notaCancion: "[PARA TI] algo ambiental, para cerrar el día en calma."
  },

  {
    dia: 194,
    categoria: "Margarita",
    icono: "🌼",
    tono: "amor",
    color: { principal: "#f2e94e", suave: "#faf6cf", oscuro: "#141a08" },
    buenosDias: "Buenos días. Afuera el día apenas se estira, y aquí ya estoy yo, pensando en ti antes que en cualquier otra cosa. Hoy va dedicado a lo simple, que casi siempre es lo mejor.",
    poema: [
      "La margarita no necesita ser la flor más llamativa para ser de las más queridas, y tú tienes eso: una forma sencilla y honesta de hacerme feliz.",
      "Contigo hasta los días normales se sienten como una buena noticia."
    ],
    detalle: "Significado de la margarita: ternura, alegría simple y lealtad.",
    buenasNoches: "Las cobijas ya están listas, y en un rato, cuando cierre los ojos, sé exactamente en quién voy a pensar. Buenas noches, feliz a tu lado, como siempre.",
    notaImagen: "[PARA TI] una foto de margaritas.",
    notaCancion: "[PARA TI] algo simple y bonito, sin mucha producción."
  },

  {
    dia: 195,
    categoria: "Preguntas sin miedo",
    icono: "🌱",
    tono: "filosofica",
    color: { principal: "#4fa66b", suave: "#c8ecd4", oscuro: "#0a2013" },
    buenosDias: "Buenos días. Hay una calma particular en las primeras horas, antes de que el ruido del día se meta por todos lados. Hoy quiero hacerte una pregunta que normalmente da un poco de miedo hacer: ¿esto va como tú quieres que vaya?",
    poema: [
      "No siempre se pregunta por miedo a la respuesta, pero prefiero preguntar y saber, que quedarme con la duda.",
      "Espero que la respuesta se parezca a lo que yo siento."
    ],
    detalle: "Contéstame con calma, cuando quieras, no hay apuro.",
    buenasNoches: "Las cosas del día ya quedaron atrás, y lo único que sigue presente, como siempre, eres tú. Buenas noches, sin miedo a las preguntas importantes.",
    notaImagen: "[PARA TI] otra foto de naturaleza o un paisaje verde.",
    notaCancion: "[PARA TI] algo acústico."
  },

  {
    dia: 196,
    categoria: "Puerto seguro",
    icono: "🎧",
    tono: "amor",
    color: { principal: "#9c3fc2", suave: "#e6c9ff", oscuro: "#1a0a26" },
    buenosDias: "Buenos días. Hay una quietud bonita en las mañanas de entre semana que casi nadie aprovecha, y hoy la usé para esto. Hoy quiero decirte que eres mi puerto seguro, el lugar al que siempre puedo volver.",
    poema: [
      "No importa qué tan movida esté el agua afuera, contigo siempre encuentro dónde anclar.",
      "Gracias por ser ese lugar seguro para mí."
    ],
    detalle: "Espero ser también tu puerto seguro cuando lo necesites.",
    buenasNoches: "El día terminó, con sus cosas buenas y sus cosas normales, pero contigo en la mente el balance siempre sale bien. Buenas noches, anclado en un buen lugar, gracias a ti.",
    notaImagen: "[PARA TI] otra foto relacionada a la música que compartan.",
    notaCancion: "[PARA TI] su canción favorita de todos los tiempos."
  },

  {
    dia: 197,
    categoria: "Darte un Beso",
    icono: "💋",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. Hoy me desperté antes de la alarma, y en ese ratito extra, sin planearlo, ya estaba pensando en ti. Hoy quiero hablarte de una canción sobre estar dispuesto a hacer lo que sea por un solo beso.",
    poema: [
      "Hay una canción de Prince Royce que habla de la idea de dar cualquier cosa, hasta lo imposible, con tal de conseguir un beso de la persona que le gusta.",
      "Contigo entiendo esa idea de que un gesto pequeño puede valer más que cualquier otra cosa."
    ],
    detalle: "Se llama 'Darte un Beso', de Prince Royce.",
    buenasNoches: "El silencio de la casa a esta hora es distinto a cualquier otro momento del día, más íntimo, más real. Buenas noches, con un beso pendiente todavía en el aire.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'Darte un Beso' - Prince Royce."
  },

  {
    dia: 198,
    categoria: "Confesión",
    icono: "🕯️",
    tono: "filosofica",
    color: { principal: "#3a1f5c", suave: "#c9b8e6", oscuro: "#0c0716" },
    buenosDias: "Buenos días. Hay una luz particular en las mañanas de esta semana, de esas que entran de lado y hacen que todo se vea un poco más honesto. Hoy toca una confesión que no había hecho en voz alta.",
    poema: [
      "A veces tengo miedo de lo mucho que me importas, no porque esté mal, sino porque nunca había sentido algo con esta intensidad.",
      "Y aun con miedo, elijo seguir aquí, contigo."
    ],
    detalle: "Gracias por hacerme sentir seguro incluso hablando de mis miedos.",
    buenasNoches: "El día ya se apagó casi del todo, y antes de cerrar los ojos quería dejarte esto. Buenas noches, con el miedo puesto a un lado y la certeza intacta.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 199,
    categoria: "Chocolate",
    icono: "🍫",
    tono: "amor",
    color: { principal: "#8a5a3c", suave: "#e6c9a8", oscuro: "#1c0f07" },
    buenosDias: "Buenos días. Hay días que empiezan con prisa y días que empiezan despacio, y este es de los segundos, justo lo que necesitaba. Hoy va dedicado a lo que te saca sonrisas rápidas.",
    poema: [
      "Dicen que el chocolate hace bien porque libera algo en el cuerpo que se parece a la felicidad.",
      "Contigo no necesito el chocolate para sentir eso, pero acepto que hoy vengan los dos juntos."
    ],
    detalle: "Si hoy hay un chocolate cerca, piensa que ese primer cuadrito es mío.",
    buenasNoches: "El teléfono ya está casi sin batería, pero antes de que se apague quería mandarte esto. Buenas noches, que sueñes con algo tan dulce como te gusta.",
    notaImagen: "[PARA TI] una foto de chocolates, o de un antojo compartido.",
    notaCancion: "[PARA TI] algo relajado, de esas para comer algo rico de fondo."
  },

  {
    dia: 200,
    categoria: "All of Me",
    icono: "🎹",
    tono: "amor",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Todavía no termino el café y ya te estoy escribiendo, para que veas el orden de prioridades que manejo. Hoy quiero hablarte de una canción sobre entregarse completo, curvas, dudas y todo lo demás incluido.",
    poema: [
      "Hay una canción de John Legend que habla de amar a alguien con todas sus partes, hasta las que esa persona a veces no sabe cómo mostrar.",
      "Yo también quiero darte todo de mí, no solo la parte fácil de querer."
    ],
    detalle: "Se llama 'All of Me', de John Legend. Te doy todo de mí, y también quiero todo de ti, incluidas las partes que a veces te cuesta mostrar.",
    buenasNoches: "Hay una calma particular en las últimas horas del día que hace que todo se sienta más simple, más claro. Buenas noches, completo, con todas mis partes puestas en esto.",
    cancionUrl: "https://www.youtube.com/watch?v=450p7goxZqg",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real, con link real puesto para que suene ese día."
  },

  {
    dia: 201,
    categoria: "Certeza tranquila",
    icono: "🕊️",
    tono: "filosofica",
    color: { principal: "#c7bfe0", suave: "#f1eefb", oscuro: "#161425" },
    buenosDias: "Buenos días. Hay algo reconfortante en empezar el día sabiendo exactamente a quién le voy a escribir primero. Hoy no siento nervios ni dudas por esto, solo una certeza tranquila de que voy por buen camino contigo.",
    poema: [
      "Hay amores que generan ansiedad y amores que generan calma, y el tuyo, por suerte, es de los segundos.",
      "Prefiero mil veces esta tranquilidad."
    ],
    detalle: "Gracias por darme esta certeza tranquila, sin dramas innecesarios.",
    buenasNoches: "El ruido del día por fin bajó de volumen, y en ese silencio es más fácil sentir las cosas con claridad. Buenas noches, en calma, seguro de esto.",
    notaImagen: "[PARA TI] otra foto en tonos blancos o suaves.",
    notaCancion: "[PARA TI] algo minimalista."
  },

  {
    dia: 202,
    categoria: "Just Like Heaven",
    icono: "☁️",
    tono: "filosofica",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. El día recién empieza a tomar forma, y ya sé que una parte buena de él tiene que ver contigo. Hoy quiero hablarte de una canción vieja de rock sobre esos momentos con alguien que se sienten casi irreales de lo bien que están.",
    poema: [
      "Hay una canción de The Cure que describe un momento tan bueno con alguien que se siente casi como un sueño, algo que apenas se puede creer que esté pasando de verdad.",
      "Contigo tengo momentos así, de esos que después pienso 'eso pasó de verdad, qué bien'."
    ],
    detalle: "Se llama 'Just Like Heaven', de The Cure. Un clásico del rock ochentero.",
    buenasNoches: "El día se cierra, como siempre, con vos como el último pensamiento antes de apagar la luz. Buenas noches, todavía en uno de esos momentos casi de sueño.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'Just Like Heaven' - The Cure."
  },

  {
    dia: 203,
    categoria: "Eco",
    icono: "🎼",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. Hay un tipo de silencio en las mañanas tempranas que se presta perfecto para pensar con calma, y hoy lo usé para pensar en ti. Ritmos tropicales y alternativos para levantar el ánimo de inmediato.",
    poema: [
      "Bajo las luces de la ciudad que nunca duerme,",
      "tus ojos siguen siendo mi paisaje favorito."
    ],
    detalle: "Ponla a sonar bien alto y disfruta el ritmo.",
    buenasNoches: "Hay noches en que uno se queda despierto de más, y esta es una de esas, por pensar en ti un rato extra. Que el descanso limpie tu mente de cualquier carga.",
    notaImagen: "[MÚSICA] Canción: Ojitos Lindos",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 204,
    categoria: "Perfect",
    icono: "💍",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. Las primeras luces del día siempre me hacen pensar en empezar de cero, y hoy quise empezar pensando en ti. Hoy quiero hablarte de una canción sobre encontrar a alguien real, sin necesidad de que sea perfecto para que se sienta perfecto.",
    poema: [
      "Hay una canción de Ed Sheeran que habla de bailar descalzos en el pasto con alguien que no es perfecto en el sentido de las revistas, pero que se siente perfecto para uno.",
      "Eso es lo que siento contigo: no necesitas ser perfecta, ya eres exactamente lo que yo quería."
    ],
    detalle: "Se llama 'Perfect', de Ed Sheeran.",
    buenasNoches: "La cama todavía está fría, pero el pensamiento de ti ya la calentó un poco. Buenas noches, con ganas de bailar contigo algún día, descalzos, sin ocasión especial.",
    cancionUrl: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real, con link real puesto para que suene ese día."
  },

  {
    dia: 205,
    categoria: "Ternura diaria",
    icono: "🌟",
    tono: "amor",
    color: { principal: "#d4af37", suave: "#f7e8b0", oscuro: "#241c04" },
    buenosDias: "Buenos días. Hay mañanas que parecen prometer algo bueno desde el primer minuto, y esta es una de esas. ternura. Hoy quiero recordarte que no hace falta una fecha especial para sentir esto.",
    poema: [
      "La ternura que siento por ti no se guarda para ocasiones especiales, aparece en cualquier día común.",
      "Hoy también apareció, apenas desperté."
    ],
    detalle: "Gracias por sacar esa parte tierna de mí, todos los días.",
    buenasNoches: "El cansancio del día ya se siente en el cuerpo, pero pensar en ti siempre alivia un poco esa parte. Buenas noches, con toda la ternura del día todavía intacta.",
    notaImagen: "[PARA TI] otra foto en dorado.",
    notaCancion: "[PARA TI] algo con brillo, animado."
  },

  {
    dia: 206,
    categoria: "Armonía",
    icono: "🎶",
    tono: "filosofica",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Todavía no me tomo el café completo y ya voy por la mitad de este mensaje. Una canción dedicada a lo increíble que es alguien tal cual como es.",
    poema: [
      "No cambies absolutamente nada de ti,",
      "porque cuando sonríes, el mundo entero se detiene a verte."
    ],
    detalle: "Un temazo clásico para dedicar y cantar a todo pulmón.",
    buenasNoches: "Hay un tipo de sueño que llega mejor cuando el último pensamiento del día fue bueno, y hoy lo fue, gracias a ti. Descansa, aunque sé que vas a terminar tarareándola en sueños.",
    notaImagen: "[MÚSICA] Canción: Just the Way You Are",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 207,
    categoria: "Carretera con música",
    icono: "🎼",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. Hay mañanas que se sienten como una hoja en blanco, y hoy decidí empezar la mía escribiéndote a ti. Vibras relajadas y letras con sentido para empezar bien el día.",
    poema: [
      "Dámelo todo, que de lo demás nos encargamos después,",
      "sin prisa y sin mirar el reloj."
    ],
    detalle: "Disfruta de este temazo mientras te relajas un momento.",
    buenasNoches: "Las últimas luces de la casa ya se apagaron, y en la oscuridad, como siempre, apareciste tú primero en mis pensamientos. Que duermas plácidamente.",
    notaImagen: "[MÚSICA] Canción: Dámelo Todo",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 208,
    categoria: "Detalles",
    icono: "💃",
    tono: "amor",
    color: { principal: "#c23fd1", suave: "#f2c9ff", oscuro: "#210a26" },
    buenosDias: "Buenos días. El aire todavía huele a noche cuando empiezo a escribirte esto. Hoy quiero hablar de los detalles, los que a veces pasan desapercibidos pero hacen toda la diferencia.",
    poema: [
      "No siempre son los gestos grandes los que más se recuerdan, a veces es un detalle pequeño en el momento correcto.",
      "Voy a seguir cuidando esos detalles contigo."
    ],
    detalle: "¿Cuál ha sido el detalle pequeño que más te ha gustado de mí? Cuéntame.",
    buenasNoches: "Las estrellas, si es que se ven desde donde estás, tienen algo tuyo hoy, aunque suene un poco cursi decirlo así. Buenas noches, cuidando los detalles, como siempre.",
    notaImagen: "[PARA TI] una foto bailando o en algún evento con música.",
    notaCancion: "[PARA TI] algo pegajoso, para bailar."
  },

  {
    dia: 209,
    categoria: "Tarareo",
    icono: "🎤",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. El teléfono marcó la hora y, en automático, pensé en ti antes de pensar en cualquier pendiente del día. Un recordatorio musical de que los detalles pequeños son los que más importan.",
    poema: [
      "Tu amor completo llegó a desordenarme los esquemas,",
      "a volverse la canción que repito todo el día."
    ],
    detalle: "Disfruta de la melodía con los ojos cerrados un instante.",
    buenasNoches: "Hay una quietud distinta en las noches, de esas que invitan a pensar despacio en lo que de verdad importa. Que el silencio de la noche te traiga calma.",
    notaImagen: "[MÚSICA] Canción: Amor Completo",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 210,
    categoria: "Clavel",
    icono: "🌸",
    tono: "filosofica",
    color: { principal: "#d1476b", suave: "#ffc7d6", oscuro: "#230410" },
    buenosDias: "Buenos días. Hay una energía distinta en los días que empiezan escribiéndote, no sabría explicar bien por qué. Hoy va dedicado a lo constante, como el clavel, que dura y dura.",
    poema: [
      "El clavel no es la flor de la que más se habla, pero es de las que más tiempo dura fresca.",
      "Así quiero que sea esto: no necesita ser ruidoso para ser real y durar."
    ],
    detalle: "Significado del clavel: admiración duradera.",
    buenasNoches: "Hay noches donde el cansancio gana rápido, y aun así encontré energía para pensarte un rato más. Buenas noches, constante como un buen clavel.",
    notaImagen: "[PARA TI] una foto de claveles.",
    notaCancion: "[PARA TI] algo clásico, de esas que no pasan de moda."
  },

  {
    dia: 211,
    categoria: "Lo simple",
    icono: "🐻",
    tono: "amor",
    color: { principal: "#c98a4f", suave: "#f0d8b8", oscuro: "#20140a" },
    buenosDias: "Buenos días. El café todavía está humeando cuando ya estoy pensando en qué decirte hoy. Hoy va dedicado, otra vez, a lo simple: lo que no necesita explicación para sentirse bien.",
    poema: [
      "Contigo lo simple no se siente poco, se siente suficiente.",
      "Prefiero mil días simples contigo que uno complicado sin ti."
    ],
    detalle: "Gracias por hacer que lo simple alcance.",
    buenasNoches: "La luz de la lámpara es lo único encendido ya en este cuarto, y sigo aquí, pensando en cómo cerrar bien el día contigo en mente. Buenas noches, simple y tranquilo, como me gusta terminar el día.",
    notaImagen: "[PARA TI] otra foto tierna, tal vez de algún peluche que le quieras regalar.",
    notaCancion: "[PARA TI] algo tierno y calmado."
  },

  {
    dia: 212,
    categoria: "Pedido especial",
    icono: "🎧",
    tono: "filosofica",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. Antes de revisar cualquier otra cosa en el teléfono, ya estaba escribiéndote esto. Una melodía tierna para recordarte que eres mi constante favorita.",
    poema: [
      "Tú eres la mitad que le da equilibrio a mis días,",
      "la certeza en medio de cualquier duda."
    ],
    detalle: "Te mando un abrazo gigante para arrancar con toda la energía.",
    buenasNoches: "Hay noches que se sienten largas y noches que se sienten cortas, y esta, contigo en la cabeza, se sintió de las buenas. Descansa rico, nos leemos mañana.",
    notaImagen: "[MÚSICA] Canción: La Mitad",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 213,
    categoria: "Canción vieja",
    icono: "🎸",
    tono: "filosofica",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. El día apenas empieza a definirse, pero ya sé que una parte de él va a estar dedicada a pensar en ti. Acordes acústicos que hablan de quedarse cuando todo lo demás se mueve.",
    poema: [
      "Y cuando el mundo pesa demasiado en los hombros,",
      "basta con pensar en ti para aligerar la carga."
    ],
    detalle: "Un tema excelente para escuchar con audífonos por la tarde.",
    buenasNoches: "Hay una versión más honesta de mí que solo sale de noche, y esa versión también te quiere mucho. Duerme bien, nos leemos mañana con más calma.",
    notaImagen: "[MÚSICA] Canción: Colapso",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 214,
    categoria: "Intensidad",
    icono: "🖤",
    tono: "filosofica",
    color: { principal: "#5c1f3d", suave: "#d9a7bd", oscuro: "#12040a" },
    buenosDias: "Buenos días. El cielo todavía tiene ese color raro de las mañanas que no se deciden entre gris y celeste. Hoy no quiero escribirte bonito, quiero escribirte real.",
    poema: [
      "No te quiero de esa forma tranquila que cabe en una postal. Te quiero de la forma que desordena la rutina, que hace que un martes cualquiera valga la pena.",
      "Si esto fuera fácil, no significaría lo mismo."
    ],
    detalle: "Nada de lo que siento por ti ha sido a medias.",
    buenasNoches: "El día se despide con la misma certeza de siempre: que quiero que mañana empiece igual, pensando en ti primero. Buenas noches, con toda la intensidad todavía intacta.",
    notaImagen: "[PARA TI] a tu criterio, algo con textura, algo real.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 215,
    categoria: "Verdad",
    icono: "🗝️",
    tono: "filosofica",
    color: { principal: "#4a1830", suave: "#d9a7bd", oscuro: "#120206" },
    buenosDias: "Buenos días. Hay un tipo de calma particular en escribir esto antes de que el celular empiece a sonar con todo lo demás. Hoy no hay metáfora, solo la verdad simple: eres lo mejor que me ha pasado en mucho tiempo.",
    poema: [
      "A veces la poesía sobra y lo único que hace falta es decir la verdad sin adornos.",
      "Y la verdad es que no me imagino explicando estos meses sin ti en el centro de la historia."
    ],
    detalle: "Gracias por ser, sin metáforas, lo mejor que tengo.",
    buenasNoches: "Hay un silencio particular a esta hora que hace que las palabras pesen distinto, más sinceras. Buenas noches, con la verdad dicha, sin nada más que agregar.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 216,
    categoria: "Compás cercano",
    icono: "💋",
    tono: "hot",
    color: { principal: "#e0294f", suave: "#ffc9d6", oscuro: "#20050b" },
    buenosDias: "Buenos días. Hoy quiero estar en tu mismo compás, pegado, sin espacio entre los dos.",
    poema: [
      "Hay una distancia justa que me gusta contigo, y hoy la quiero bastante más corta que de costumbre.",
      "Cuando te vea, prepárate para que no respete demasiado el espacio personal."
    ],
    detalle: "Aparta un buen rato para estar cerca la próxima vez que se pueda.",
    buenasNoches: "Buenas noches, deseando estar en tu mismo compás pronto.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 217,
    categoria: "Concierto propio",
    icono: "🎶",
    tono: "amor",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. El sol todavía no calienta del todo, pero algo aquí adentro ya empezó a hacerlo. Llegamos al día 160 con buena música sonando de fondo.",
    poema: [
      "A veces las palabras sobran cuando la melodía dice todo,",
      "cuando el corazón marca el mismo compás."
    ],
    detalle: "Te mando un abrazo gigante y apretado para arrancar la jornada.",
    buenasNoches: "Hay algo tranquilizador en saber que, sin importar cómo estuvo el día, esto de escribirte de noche no cambia. Descansa rico, nos leemos mañana temprano.",
    notaImagen: "[MÚSICA] Canción: Creep",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 218,
    categoria: "Tentación",
    icono: "🍷",
    tono: "hot",
    color: { principal: "#a10e35", suave: "#f0aabd", oscuro: "#140208" },
    buenosDias: "Buenos días. Hoy vengo con ganas de tentarte un poco, sin ninguna razón especial más que las ganas mismas.",
    poema: [
      "No sé si es la falta de verte o las ganas normales de siempre, pero hoy pienso en ti de una forma bastante poco inocente.",
      "No pienso disculparme por eso, para que quede claro."
    ],
    detalle: "Dime qué se te ocurre a ti hoy. Tengo curiosidad real.",
    buenasNoches: "Buenas noches, con la tentación todavía completamente despierta.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 219,
    categoria: "Antes de ti",
    icono: "🐱",
    tono: "amor",
    color: { principal: "#ff9ecb", suave: "#ffe6f2", oscuro: "#33091c" },
    buenosDias: "Buenos días. Hay mañanas silenciosas y mañanas ruidosas, y esta, por suerte, es de las tranquilas. A veces pienso en cómo era mi rutina antes de ti, y ya casi ni la recuerdo bien.",
    poema: [
      "Hay un antes y un después marcado por ti, aunque no haya sido un momento exacto, sino una acumulación de días.",
      "Prefiero el después, sin dudarlo."
    ],
    detalle: "Gracias por cambiar el antes por algo mejor.",
    buenasNoches: "El silencio de la noche siempre hace que las cosas simples, como decir buenas noches, se sientan un poco más importantes. Buenas noches, en la mejor versión de mis días: la de después de ti.",
    notaImagen: "[PARA TI] algo tierno de Hello Kitty o similar.",
    notaCancion: "[PARA TI] algo dulce y liviano."
  },

  {
    dia: 220,
    categoria: "Canción prohibida",
    icono: "🚫",
    tono: "hot",
    color: { principal: "#b3123f", suave: "#f2b3c4", oscuro: "#170209" },
    buenosDias: "Buenos días. Tengo un pensamiento de hoy que califica claramente como contenido no apto para toda audiencia.",
    poema: [
      "No todo lo que pienso de ti es para compartir en cualquier momento del día. Algunas cosas son solo para cuando estemos a solas.",
      "Este es uno de esos pensamientos, guardado bajo llave por ahora."
    ],
    detalle: "La llave la tienes tú. Solo tienes que pedirla cuando quieras.",
    buenasNoches: "Buenas noches, con el pensamiento todavía bajo llave, esperando.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 221,
    categoria: "Disco rayado",
    icono: "🎸",
    tono: "filosofica",
    color: { principal: "#c98f9e", suave: "#f7d9e2", oscuro: "#26101a" },
    buenosDias: "Buenos días. El ruido de la calle todavía no arranca del todo, y en ese pequeño espacio de calma te escribo esto. Un toque de rock alternativo para sacudir la rutina matutina.",
    poema: [
      "A veces uno busca en el lugar equivocado,",
      "hasta que encuentra complicidad donde menos lo esperaba."
    ],
    detalle: "Gracias por hacer que los días pesen la mitad.",
    buenasNoches: "Hay algo bonito en cerrar el día pensando en la misma persona con la que se abrió, y hoy fue así otra vez. Descansa rico, amor mío.",
    notaImagen: "[MÚSICA] Canción: Creep",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 222,
    categoria: "Burbujas de Amor",
    icono: "🫧",
    tono: "amor",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Hay mañanas donde uno se siente con ganas de todo, y esta parece ser una de esas. Hoy quiero hablarte de una canción bachatera bien tierna, de esas que parecen escritas para decir cosas imposibles de forma bonita.",
    poema: [
      "Hay una canción de Juan Luis Guerra donde el cantante desea convertirse en cosas pequeñas -una gota, una ola, un pez- solo para estar cerca de la persona que ama.",
      "A mí también se me ocurren ideas así de exageradas cuando pienso en formas de estar más cerca tuyo."
    ],
    detalle: "Se llama 'Burbujas de Amor', de Juan Luis Guerra. Un clásico de la bachata dominicana.",
    buenasNoches: "El día ya cumplió su ciclo completo, y como siempre, terminó pensando en la misma persona con la que empezó. Buenas noches, convertido en algo pequeño y cerca tuyo, aunque sea solo en la imaginación.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] canción real: 'Burbujas de Amor' - Juan Luis Guerra."
  },

  {
    dia: 223,
    categoria: "Balada",
    icono: "🎵",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. El despertador sonó dos veces antes de que lograra levantarme, y en el medio, sin darme cuenta, ya estaba pensando en ti. Empezar la jornada con acordes luminosos cambia por completo la energía.",
    poema: [
      "Y tú iluminaste cada rincón oscuro,",
      "volviéndote el centro de mi universo entero."
    ],
    detalle: "Dale play y deja que la canción suene de fondo mientras haces tus cosas.",
    buenasNoches: "Las luces de la calle ya se encendieron hace rato, y aquí sigo, pensando en ti antes de dormir. Que nada te arrebate la paz hoy. Descansa.",
    notaImagen: "[MÚSICA] Canción: Yellow",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 224,
    categoria: "Cicatriz",
    icono: "🩹",
    tono: "filosofica",
    color: { principal: "#6b2142", suave: "#e3b8c9", oscuro: "#180509" },
    buenosDias: "Buenos días. Hoy el despertar fue lento, de esos donde uno se queda un rato más en la cama solo pensando. No vengo a prometerte un amor perfecto, vengo a prometerte uno real.",
    poema: [
      "Voy a fallar a veces. Voy a decir cosas mal, voy a necesitar aprender cosas que todavía no sé.",
      "Pero lo que siento por ti no tiene nada de fallido, eso lo tengo claro incluso en mis peores días."
    ],
    detalle: "Prefiero un amor real, con errores, que uno perfecto de mentira.",
    buenasNoches: "Afuera ya no se escucha casi nada, solo el silencio típico de esta hora, cómodo, tranquilo. Buenas noches, imperfecto pero seguro de esto.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'filosófica'."
  },

  {
    dia: 225,
    categoria: "Cali Pachanguero",
    icono: "🎤",
    tono: "amor",
    color: { principal: "#9e8fc9", suave: "#e2d9f7", oscuro: "#160f26" },
    buenosDias: "Buenos días. Todavía hace frío afuera, pero aquí adentro algo ya se siente tibio desde temprano. Hoy quiero hablarte de una canción sobre el orgullo de la propia tierra y las ganas de celebrar la vida.",
    poema: [
      "Hay una canción de Grupo Niche que habla del orgullo por el lugar de donde uno viene, y de las ganas de celebrarlo bailando.",
      "Me gustaría bailarla contigo algún día, en serio."
    ],
    detalle: "Se llama 'Cali Pachanguero', de Grupo Niche. Clásico de la salsa colombiana.",
    buenasNoches: "El ruido de afuera bajó por completo, y en ese silencio hay espacio de sobra para pensar en ti con calma. Buenas noches, con ganas de esa bailada pendiente.",
    cancionUrl: "https://www.youtube.com/watch?v=7KxkMLAZlzw",
    notaImagen: "[MÚSICA] Canción: Dámelo Todo",
    notaCancion: "[PARA TI] canción real, con link real puesto para que suene ese día."
  },

  {
    dia: 226,
    categoria: "Simpleza",
    icono: "🎀",
    tono: "amor",
    color: { principal: "#ff9ecb", suave: "#ffe6f2", oscuro: "#33091c" },
    buenosDias: "Buenos días. El primer pensamiento coherente del día, antes que cualquier lista de pendientes, fue sobre ti. Hoy no hay nada elaborado que decir, solo que contigo lo simple ya es suficiente.",
    poema: [
      "No necesito grandes planes ni ocasiones especiales, contigo hasta lo simple se siente completo.",
      "Ojalá sigamos teniendo muchos días simples así."
    ],
    detalle: "Gracias por hacer que lo simple se sienta suficiente.",
    buenasNoches: "El cielo ya está completamente oscuro, y en algún lugar de ahí arriba hay una estrella que, según decidí hoy, es tuya. Buenas noches, simple y bonito, como me gusta que sean los días contigo.",
    notaImagen: "[PARA TI] otra foto tierna.",
    notaCancion: "[PARA TI] algo dulce."
  },

  {
    dia: 227,
    categoria: "Volver",
    icono: "🧸",
    tono: "amor",
    color: { principal: "#d9a066", suave: "#f5dfc0", oscuro: "#241708" },
    buenosDias: "Buenos días. Afuera el día apenas se estira, y aquí ya estoy yo, pensando en ti antes que en cualquier otra cosa. No importa cómo esté el día, siempre quiero volver a ti al final.",
    poema: [
      "Hay lugares a los que uno vuelve porque se siente bien, y tú eres de esos lugares para mí.",
      "Sin importar qué tan complicado esté el día, siempre quiero volver aquí."
    ],
    detalle: "Gracias por ser un lugar al que siempre quiero volver.",
    buenasNoches: "Las cobijas ya están listas, y en un rato, cuando cierre los ojos, sé exactamente en quién voy a pensar. Buenas noches, de vuelta donde quiero estar.",
    notaImagen: "[PARA TI] otra foto tierna de peluches.",
    notaCancion: "[PARA TI] algo tierno y calmado."
  },

  {
    dia: 228,
    categoria: "Pequeñas victorias",
    icono: "🍇",
    tono: "amor",
    color: { principal: "#7b4fd1", suave: "#dccafc", oscuro: "#160a2b" },
    buenosDias: "Buenos días. Hay una calma particular en las primeras horas, antes de que el ruido del día se meta por todos lados. Hoy quiero celebrar algo pequeño contigo, no hace falta que sea grande.",
    poema: [
      "No todas las victorias necesitan aplausos, algunas solo necesitan que alguien las note.",
      "Hoy noto las tuyas, aunque sean pequeñas."
    ],
    detalle: "Cuéntame una victoria pequeña que hayas tenido esta semana, quiero celebrarla contigo.",
    buenasNoches: "Las cosas del día ya quedaron atrás, y lo único que sigue presente, como siempre, eres tú. Buenas noches, orgulloso de tus pequeñas victorias de hoy.",
    notaImagen: "[PARA TI] otra foto en tonos morados.",
    notaCancion: "[PARA TI] algo con ese mismo vibe, suave pero con carácter."
  },

  {
    dia: 229,
    categoria: "Sintonía",
    icono: "📻",
    tono: "amor",
    color: { principal: "#c9a267", suave: "#f2e0bd", oscuro: "#221805" },
    buenosDias: "Buenos días. Hay una quietud bonita en las mañanas de entre semana que casi nadie aprovecha, y hoy la usé para esto. Baladas intensas para los momentos donde se extraña de verdad.",
    poema: [
      "Quiero entregarte mi amor completo, sin medidas,",
      "sin reservas y sin mirar atrás."
    ],
    detalle: "Escúchala con atención y piensa en lo nuestro.",
    buenasNoches: "El día terminó, con sus cosas buenas y sus cosas normales, pero contigo en la mente el balance siempre sale bien. Duerme con la tranquilidad de que te pienso un montón.",
    notaImagen: "[MÚSICA] Canción: Amor Completo",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 230,
    categoria: "Cielo nocturno",
    icono: "🌌",
    tono: "filosofica",
    color: { principal: "#4f3fa8", suave: "#c9c2f2", oscuro: "#120a2b" },
    buenosDias: "Buenos días. Hoy me desperté antes de la alarma, y en ese ratito extra, sin planearlo, ya estaba pensando en ti. Hoy quiero que en algún momento mires el cielo, de día o de noche.",
    poema: [
      "Me gusta pensar que, aunque estemos lejos, en algún momento del día miramos el mismo cielo.",
      "Eso me hace sentir cerca, aunque no lo estemos físicamente."
    ],
    detalle: "Si ves una estrella fugaz, ya sabes qué pedir (es broma, o no).",
    buenasNoches: "El silencio de la casa a esta hora es distinto a cualquier otro momento del día, más íntimo, más real. Buenas noches, bajo el mismo cielo que yo.",
    notaImagen: "[PARA TI] una foto de un cielo estrellado.",
    notaCancion: "[PARA TI] algo soñador."
  },

  {
    dia: 231,
    categoria: "Contratiempo",
    icono: "🎶",
    tono: "amor",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Hay una luz particular en las mañanas de esta semana, de esas que entran de lado y hacen que todo se vea un poco más honesto. Un clásico melancólico que invita a pensar bonito.",
    poema: [
      "Tratando de descifrar las reglas del universo,",
      "descubrí que tú eres mi única excepción."
    ],
    detalle: "Gracias por ser esa compañía tan ligera y bonita.",
    buenasNoches: "El día ya se apagó casi del todo, y antes de cerrar los ojos quería dejarte esto. Descansa rico, nos leemos mañana.",
    notaImagen: "[MÚSICA] Canción: The Scientist",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 232,
    categoria: "Violeta",
    icono: "🪻",
    tono: "filosofica",
    color: { principal: "#7d5fc2", suave: "#d9cdf5", oscuro: "#150c28" },
    buenosDias: "Buenos días. Hay días que empiezan con prisa y días que empiezan despacio, y este es de los segundos, justo lo que necesitaba. mi violeta. Pequeña pero de las que más se notan.",
    poema: [
      "La violeta es chiquita comparada con otras flores, pero nadie duda de lo bonita que es.",
      "El tamaño nunca fue lo que hizo especial algo, tú eres prueba de eso."
    ],
    detalle: "Significado de la violeta: modestia y lealtad.",
    buenasNoches: "El teléfono ya está casi sin batería, pero antes de que se apague quería mandarte esto. Buenas noches, pequeña y grande a la vez.",
    notaImagen: "[PARA TI] una foto de violetas o flores moradas pequeñas.",
    notaCancion: "[PARA TI] algo delicado."
  },

  {
    dia: 233,
    categoria: "Anticipación",
    icono: "💋",
    tono: "hot",
    color: { principal: "#b3123f", suave: "#f2b3c4", oscuro: "#170209" },
    buenosDias: "Buenos días. Hoy amanecí pensando en tu boca, sin ninguna razón lógica que lo explique del todo.",
    poema: [
      "Hay besos que se piensan más de lo que se dan, y el que me debes lleva un rato viviendo cómodamente en mi cabeza.",
      "No tengo apuro, pero cuando lo cobre vas a entender exactamente por qué me tomé mi tiempo pensándolo tanto."
    ],
    detalle: "Esto es una promesa, no una amenaza. Bueno, un poco de las dos cosas.",
    buenasNoches: "Buenas noches, con ese beso pendiente todavía en deuda.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 234,
    categoria: "Segunda oportunidad",
    icono: "🌅",
    tono: "filosofica",
    color: { principal: "#2a8f8f", suave: "#b8ecec", oscuro: "#041a1a" },
    buenosDias: "Buenos días. Todavía no termino el café y ya te estoy escribiendo, para que veas el orden de prioridades que manejo. Hoy pensé en lo importante que es saber dar segundas oportunidades, incluso en los detalles pequeños.",
    poema: [
      "Nadie hace todo bien siempre, y contigo he aprendido que perdonar lo pequeño también es una forma de cuidar lo que se tiene.",
      "Gracias por darme esas segundas oportunidades cuando las he necesitado."
    ],
    detalle: "Prometo seguir mereciéndomelas.",
    buenasNoches: "Hay una calma particular en las últimas horas del día que hace que todo se sienta más simple, más claro. Buenas noches, agradecido por tu paciencia y tus segundas oportunidades.",
    notaImagen: "[PARA TI] otra foto de mar o atardecer.",
    notaCancion: "[PARA TI] algo especial, para ir cerrando el ciclo."
  },

  {
    dia: 235,
    categoria: "Ritmo lento",
    icono: "🕯️",
    tono: "hot",
    color: { principal: "#e0294f", suave: "#ffc9d6", oscuro: "#20050b" },
    buenosDias: "Buenos días. Hoy no tengo ganas de apurar nada, ni siquiera esto.",
    poema: [
      "Hay momentos que se disfrutan mucho mejor lento, sin correr a ningún lado, sin mirar el reloj cada rato.",
      "Contigo quiero exactamente ese ritmo lento, en todos los sentidos posibles."
    ],
    detalle: "No hay afán. Vamos despacio, como debería ser esta vez.",
    buenasNoches: "Buenas noches, en ritmo lento, pensando en ti sin apuro.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 236,
    categoria: "Silencio entre canciones",
    icono: "💿",
    tono: "amor",
    color: { principal: "#6b8f9e", suave: "#c9e2ea", oscuro: "#0a1a20" },
    buenosDias: "Buenos días. Hay algo reconfortante en empezar el día sabiendo exactamente a quién le voy a escribir primero. Un toque de rock clásico para despertar con fuerza.",
    poema: [
      "A veces uno se siente perdido en la multitud,",
      "hasta que encuentra a alguien que le devuelve el sentido."
    ],
    detalle: "Te mando un abrazo gigante a la distancia.",
    buenasNoches: "El ruido del día por fin bajó de volumen, y en ese silencio es más fácil sentir las cosas con claridad. Que descanses profundamente, amor.",
    notaImagen: "[MÚSICA] Canción: Creep",
    notaCancion: "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia)."
  },

  {
    dia: 237,
    categoria: "Noche",
    icono: "🌃",
    tono: "hot",
    color: { principal: "#b3123f", suave: "#f2b3c4", oscuro: "#170209" },
    buenosDias: "Buenos días, aunque este mensaje debería ser de noche, que es cuando más te pienso de esta forma en particular.",
    poema: [
      "Hay una hora de la noche en la que los pensamientos se vuelven un poco menos inocentes, y contigo esa hora llega bastante seguido.",
      "No pido perdón por eso. Solo aviso, para que no te tome por sorpresa."
    ],
    detalle: "Si te escribo tarde alguna de estas noches, ya sabes exactamente por qué.",
    buenasNoches: "Buenas noches, con la noche apenas empezando en mi cabeza.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 238,
    categoria: "Nosotros",
    icono: "🎉",
    tono: "amor",
    color: { principal: "#ff5d8f", suave: "#ffd7e6", oscuro: "#2a0f1c" },
    buenosDias: "Buenos días. Hoy es el día 241, el último de este primer calendario.",
    poema: [
      "Empezamos con un Snoopy y una promesa de acompañarte todos los días que pudiera, y aquí seguimos, muchos días después.",
      "Gracias por darle clic a cada corazón, por leer cada poema, por dejarme decirte de mil formas distintas siempre lo mismo: que te amo, que pienso en ti, que quiero estar.",
      "Esto no se termina aquí. Este es solo el primer capítulo de algo que planeo seguir construyendo contigo, un día a la vez."
    ],
    detalle: "Gracias por estos 241 días. Esto lo hice completo, pensando solo en ti.",
    buenasNoches: "Buenas noches, mi persona favorita. Fin del primer capítulo, no de la historia.",
    notaImagen: "[PARA TI] tu foto favorita de los dos, para cerrar este primer tramo con algo especial.",
    notaCancion: "[PARA TI] la canción que sientas que representa esta etapa de ustedes."
  },

  {
    dia: 239,
    categoria: "Track secreto",
    icono: "🔓",
    tono: "hot",
    color: { principal: "#d1163f", suave: "#f7bccb", oscuro: "#1c0409" },
    buenosDias: "Buenos días. Anoche encontré, sin buscarla, una canción que ahora asocio completamente contigo, y no es precisamente para escuchar en el bus.",
    poema: [
      "Hay músicas que uno guarda para momentos muy específicos, y esta se ganó ese lugar apenas la escuché una vez.",
      "No te digo cuál es todavía. Prefiero que la descubras conmigo, en el momento correcto."
    ],
    detalle: "Cuando estemos cerca, te la pongo. Ahí vas a entender por qué la guardé.",
    buenasNoches: "Buenas noches, con esa canción todavía sonando en mi cabeza.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 240,
    categoria: "Bis pendiente",
    icono: "🔥",
    tono: "hot",
    color: { principal: "#d1163f", suave: "#f7bccb", oscuro: "#1c0409" },
    buenosDias: "Buenos días. Todavía tengo pendiente ese bis que te debo desde la última vez que estuvimos cerca.",
    poema: [
      "No se me ha olvidado, para nada. Sigue en la lista de pendientes más deseados que tengo por ahí.",
      "Cuando quieras cobrarlo, aquí estoy, completamente disponible."
    ],
    detalle: "Cóbrame ese bis cuando quieras, en serio, sin avisar.",
    buenasNoches: "Buenas noches, con el bis todavía en deuda pendiente.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  },

  {
    dia: 241,
    categoria: "Frecuencia",
    icono: "📻",
    tono: "hot",
    color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
    buenosDias: "Buenos días. Hoy quiero estar sintonizado contigo, en la misma frecuencia, cerca, sin interferencia de por medio.",
    poema: [
      "Hay una frecuencia que solo se sintoniza bien cuando estamos cerca de verdad, sin distancia que la corte.",
      "Hoy tengo muchas ganas de esa buena señal contigo, completa."
    ],
    detalle: "Avísame cuándo podemos sintonizar esa frecuencia otra vez, en persona.",
    buenasNoches: "Buenas noches, buscando buena señal contigo, como siempre.",
    notaImagen: "[PARA TI] a tu criterio.",
    notaCancion: "[PARA TI] automática, catálogo 'hot'."
  }

];
