/* =======================================================================
   CONTENIDO-CALENDARIO.JS — EDICIÓN INMERSIVA 365 · ACTUALIZACIÓN HOGAR
   -----------------------------------------------------------------------
   Conserva el contenido y añade planes domésticos de pareja: cocinar juntos,
   películas, manta, arrunchis y juegos coquetos opcionales con consentimiento.
   ======================================================================= */

const CALENDARIO = [
  {
    "dia": 1,
    "categoria": "Snoopy",
    "icono": "🐶",
    "tono": "amor",
    "color": {
      "principal": "#f4c453",
      "suave": "#fff0c9",
      "oscuro": "#241a05"
    },
    "buenosDias": "Buenos días. Hay una luz particular en las mañanas de esta semana, de esas que entran de lado y hacen que todo se vea un poco más honesto. Hoy empieza algo que llevaba tiempo queriendo hacerte. Si hoy estuviéramos juntos, me gustaría que este día empezara en una calle que todavía no se llena de gente: la lluvia golpeando despacio los vidrios. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "poema": [
      "Como ese amigo que nunca se cansa de estar cerca, quiero ser tu lugar seguro en los días buenos y también en los raros.",
      "Este es el primero de 365 días pensados para ti.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "Cada día vas a encontrar algo distinto, prometido. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la lluvia golpeando despacio los vidrios.",
    "buenasNoches": "El día ya se apagó casi del todo, y antes de cerrar los ojos quería dejarte esto. Buenas noches. Que descanses sabiendo que ya empezamos esto juntos. Y si pudiera cerrar este día contigo, escogería escuchar contigo una canción hasta el final. Me gusta pensar que porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "notaImagen": "[PARA TI] una foto tierna de un perrito, o algo que te recuerde a Snoopy.",
    "notaCancion": "[PARA TI] algo suave y hogareño para abrir el calendario.",
    "escenaInmersiva": "Una calle que todavía no se llena de gente; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 2,
    "categoria": "Acústico",
    "icono": "🎶",
    "tono": "filosofica",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Hay días que empiezan con prisa y días que empiezan despacio, y este es de los segundos, justo lo que necesitaba. Música alegre para recordar que caminar juntos es lo mejor. Si hoy estuviéramos juntos, me gustaría que este día empezara en un parque casi vacío: el roce casual que termina sintiéndose importante. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Contigo cualquier martes se siente como viernes,",
      "cualquier lugar se vuelve casa.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "Te mando un abrazo enorme con esta canción de fondo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante.",
    "buenasNoches": "El teléfono ya está casi sin batería, pero antes de que se apague quería mandarte esto. Que descanses plácidamente. Y si pudiera cerrar este día contigo, escogería bailar contigo aunque no haya espacio. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[MÚSICA] Canción: Contigo",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un parque casi vacío; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 3,
    "categoria": "La La Land",
    "icono": "🎹",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Anoche estuve pensando en una película que quiero ver contigo, de esas que dejan ganas de bailar en la sala sin razón. Si hoy estuviéramos juntos, me gustaría que este día empezara en una playa que todavía guarda calor en la arena: la sensación de una mano buscando otra sin pensarlo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "Hay una película sobre dos personas persiguiendo sus sueños mientras intentan no perderse el uno al otro en el camino, con canciones que se quedan pegadas días después.",
      "Se llama 'La La Land'. Tiene finales agridulces, de esos que se sienten reales.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: preparen algo fácil para picar (nachos, palomitas o bruschettas), apaguen la luz grande y vean *La La Land* abrazados. Regla opcional: cada vez que haya un beso que a los dos les guste, se dan uno también. Si la película se pone demasiado bonita, se vale pausar para mirarse un rato.",
    "buenasNoches": "Buenas noches, con ganas de ese plan de cine pendiente. Y si pudiera cerrar este día contigo, escogería preguntarte qué parte del día quieres guardar. Me gusta pensar que porque elegirte también es aprender tus detalles. Después de la película, nada de levantarse enseguida: manta, un último bocado y unos minutos de arrunchis antes de dormir.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Una playa que todavía guarda calor en la arena; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 4,
    "categoria": "Del Mar",
    "icono": "🌊",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Todavía no termino el café y ya te estoy escribiendo, para que veas el orden de prioridades que manejo. Hoy quiero hablarte de una canción sobre querer ser el único lugar al que alguien quiera volver. Si hoy estuviéramos juntos, me gustaría que este día empezara en una habitación todavía en penumbra: una canción que parece llegar exactamente en el momento correcto. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "Hay una canción de Ozuna que habla de querer ser esa persona especial, la única, para alguien que le gusta de verdad.",
      "Contigo no tengo que esforzarme para eso: ya eres la única persona que quiero en este plan.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Del Mar', de Ozuna. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "Hay una calma particular en las últimas horas del día que hace que todo se sienta más simple, más claro. Buenas noches, siendo, espero, tu única persona en este plan. Y si pudiera cerrar este día contigo, escogería mirarte unos segundos más de lo necesario. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[MÚSICA] Canción: Del Mar",
    "notaCancion": "[PARA TI] canción real: 'Del Mar' - Ozuna.",
    "escenaInmersiva": "Una habitación todavía en penumbra; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 5,
    "categoria": "Cimientos",
    "icono": "🖌️",
    "tono": "filosofica",
    "color": {
      "principal": "#3f8fd1",
      "suave": "#c9e2fa",
      "oscuro": "#081b2b"
    },
    "buenosDias": "Buenos días. Hay algo reconfortante en empezar el día sabiendo exactamente a quién le voy a escribir primero. Hoy pensé en los cimientos, en todo lo que no se ve pero sostiene lo que sí se ve. Si hoy estuviéramos juntos, me gustaría que este día empezara en un sofá con una manta compartida: el calor queda después de un abrazo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "Las cosas bonitas de nosotros se notan, pero lo que más valoro es lo que no se ve: la confianza, el respeto, las ganas de seguir intentando.",
      "Esos son los cimientos que de verdad importan.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por ayudarme a construir cimientos fuertes, no solo cosas bonitas por fuera. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el calor queda después de un abrazo.",
    "buenasNoches": "El ruido del día por fin bajó de volumen, y en ese silencio es más fácil sentir las cosas con claridad. Buenas noches, sobre una base sólida, gracias a ti. Y si pudiera cerrar este día contigo, escogería pedirte que me cuentes una historia que nunca me hayas contado. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[PARA TI] una foto de algún museo o arte que le guste.",
    "notaCancion": "[PARA TI] algo elegante, ambiental.",
    "escenaInmersiva": "Un sofá con una manta compartida; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 6,
    "categoria": "Sin palabras",
    "icono": "🤍",
    "tono": "hot",
    "color": {
      "principal": "#e0294f",
      "suave": "#ffc9d6",
      "oscuro": "#20050b"
    },
    "buenosDias": "Buenos días. Hay un silencio particular en las mañanas después de soñar contigo, uno que se queda pegado a la piel un rato antes de que el día empiece de verdad. Hay algo peligrosamente bonito en saber que una persona te atrae y, al mismo tiempo, te da paz. Tú tienes esa combinación que me hace querer acercarme y quedarme.",
    "poema": [
      "No fue un sueño explícito, pero sí de esos que dejan una sensación clara al despertar: la certeza de tus manos en algún punto que ya no recuerdo bien.",
      "Hay cosas que se sienten más de lo que se logran contar, y esta mañana es una de esas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "No te pregunto qué soñaste tú. Prefiero que me lo cuentes cuando quieras, despacio. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la luz tibia que se queda unos segundos sobre la pared.",
    "buenasNoches": "Buenas noches. Ojalá el sueño de hoy tenga la decencia de continuar donde se quedó el de ayer. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un domingo lento; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 7,
    "categoria": "Hello Kitty",
    "icono": "🎀",
    "tono": "amor",
    "color": {
      "principal": "#ff6fa8",
      "suave": "#ffd7e6",
      "oscuro": "#3a0f24"
    },
    "buenosDias": "Buenos días. El día recién empieza a tomar forma, y ya sé que una parte buena de él tiene que ver contigo. pequeña. Espero que hoy todo te trate tan bien como te mereces. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cielo nublado que no termina de decidirse: el cambio de color del cielo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "poema": [
      "Hay un tipo de calma que solo llega cuando pienso en ti: como si el día, por más enredado que esté, encontrara por fin dónde sentarse a descansar.",
      "Quiero seguir siendo tu lugar suave.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Hoy es un día para lo tierno, lo simple, lo que no necesita esfuerzo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cambio de color del cielo.",
    "buenasNoches": "El día se cierra, como siempre, con vos como el último pensamiento antes de apagar la luz. Buenas noches, dulzura. Que sueñes bonito. Y si pudiera cerrar este día contigo, escogería hacerte un café y dejarlo cerca de ti sin decir demasiado. Me gusta pensar que porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "notaImagen": "[PARA TI] algo rosado, tierno, tipo Hello Kitty.",
    "notaCancion": "[PARA TI] algo dulce, tipo pop suave.",
    "escenaInmersiva": "Un cielo nublado que no termina de decidirse; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 8,
    "categoria": "A Quiet Place",
    "icono": "🤫",
    "tono": "amor",
    "color": {
      "principal": "#a10e35",
      "suave": "#f0aabd",
      "oscuro": "#140208"
    },
    "buenosDias": "Buenos días. Hoy quiero proponerte una película que da miedo de verdad, de esas donde uno termina abrazado sin darse cuenta cuándo pasó. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cama desordenada después de una noche larga: el aire fresco entrando por la ventana. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "Es sobre una familia que sobrevive quedándose en silencio absoluto para no llamar la atención de algo peligroso, y la tensión no baja en ningún momento.",
      "Se llama 'A Quiet Place'. Perfecta para verla pegados, con la excusa de que da miedo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "Prepárate para agarrarme del brazo. O yo del tuyo, lo que sea más conveniente en el momento. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el aire fresco entrando por la ventana.",
    "buenasNoches": "Buenas noches, todavía con la adrenalina de una buena película de miedo. Y si pudiera cerrar este día contigo, escogería quedarme cerca mientras haces algo que te gusta. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una cama desordenada después de una noche larga; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 9,
    "categoria": "Vértigo",
    "icono": "🌪️",
    "tono": "filosofica",
    "color": {
      "principal": "#3a1f5c",
      "suave": "#c9b8e6",
      "oscuro": "#0c0716"
    },
    "buenosDias": "Buenos días. Hay un tipo de silencio en las mañanas tempranas que se presta perfecto para pensar con calma, y hoy lo usé para pensar en ti. Contigo aprendí que el amor también puede dar vértigo, y no me quejo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una esquina iluminada por el sol de la tarde: el cansancio bonito después de un día compartido. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo me interesa más la experiencia que la perfección.",
    "poema": [
      "Hay amores que se sienten como un paseo tranquilo, y hay otros que se sienten como el borde de algo alto, con ganas de saltar de todas formas.",
      "El mío por ti es de los segundos, y elijo saltar cada vez.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por ser el tipo de vértigo que vale la pena sentir. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cansancio bonito después de un día compartido.",
    "buenasNoches": "Hay noches en que uno se queda despierto de más, y esta es una de esas, por pensar en ti un rato extra. Buenas noches, todavía cayendo, sin querer detenerme. Y si pudiera cerrar este día contigo, escogería inventarnos un plan sencillo para cuando podamos vernos. Me gusta pensar que porque contigo me interesa más la experiencia que la perfección.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Una esquina iluminada por el sol de la tarde; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 10,
    "categoria": "Girasol",
    "icono": "🌻",
    "tono": "amor",
    "color": {
      "principal": "#f2b705",
      "suave": "#fff0b3",
      "oscuro": "#251c02"
    },
    "buenosDias": "Buenos días. Las primeras luces del día siempre me hacen pensar en empezar de cero, y hoy quise empezar pensando en ti. mi girasol. Que tu día empiece con la misma luz que tú le das al mío. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina llena de pequeñas cosas por ordenar: la música escapándose de un parlante cercano. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "El girasol gira buscando la luz durante todo el día; yo hago lo mismo contigo, sin importar en qué dirección empiece la mañana.",
      "Eres la claridad que hace que todo lo demás se vea mejor.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "Significado del girasol: fidelidad y luz propia. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la música escapándose de un parlante cercano.",
    "buenasNoches": "La cama todavía está fría, pero el pensamiento de ti ya la calentó un poco. Buenas noches. Descansa, mañana el sol vuelve a salir para los dos. Y si pudiera cerrar este día contigo, escogería dejar que el silencio haga su parte. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "notaImagen": "[PARA TI] una foto de girasoles, o de un atardecer que te guste.",
    "notaCancion": "[PARA TI] algo alegre, de esas que suben el ánimo.",
    "escenaInmersiva": "Una cocina llena de pequeñas cosas por ordenar; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 11,
    "categoria": "Gestos",
    "icono": "🎥",
    "tono": "amor",
    "color": {
      "principal": "#c22b2b",
      "suave": "#f3b3b3",
      "oscuro": "#1a0505"
    },
    "buenosDias": "Buenos días. Hay mañanas que parecen prometer algo bueno desde el primer minuto, y esta es una de esas. Hoy quiero hablar de los gestos pequeños, los que casi no se notan pero dicen mucho. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina con la primera taza sobre la mesa: la tranquilidad de saber que alguien está ahí. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque no quiero quererte solamente en los momentos fáciles.",
    "poema": [
      "Un mensaje a tiempo, una llamada sin razón, un 'cómo estás' sincero: esos son los gestos que más me gustan de nosotros.",
      "Voy a seguir cuidando esos detalles.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "¿Cuál es un gesto pequeño tuyo que me haga sentir querido? Dime. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí.",
    "buenasNoches": "El cansancio del día ya se siente en el cuerpo, pero pensar en ti siempre alivia un poco esa parte. Buenas noches, con un gesto pequeño más sumado al día. Y si pudiera cerrar este día contigo, escogería elegir una película solo por la promesa de verla juntos. Me gusta pensar que porque no quiero quererte solamente en los momentos fáciles.",
    "notaImagen": "[PARA TI] un póster de alguna película pendiente.",
    "notaCancion": "[PARA TI] otra banda sonora que le guste.",
    "escenaInmersiva": "Una cocina con la primera taza sobre la mesa; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 12,
    "categoria": "Tono de voz",
    "icono": "📻",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Todavía no me tomo el café completo y ya voy por la mitad de este mensaje. Letras crudas y sinceras para un día de reflexión y tranquilidad. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa con dos vasos y algo pendiente de conversar: el silencio cómodo que no necesita explicación. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "Querer querernos sin excusas ni atajos,",
      "sabiendo que somos el refugio del otro.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "Tómate las cosas con calma hoy y disfruta de la música. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el silencio cómodo que no necesita explicación.",
    "buenasNoches": "Hay un tipo de sueño que llega mejor cuando el último pensamiento del día fue bueno, y hoy lo fue, gracias a ti. Que tengas una noche sumamente tranquila. Y si pudiera cerrar este día contigo, escogería recordar una conversación que todavía me hace sonreír. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[MÚSICA] Canción: Querer Querernos",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una mesa con dos vasos y algo pendiente de conversar; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 13,
    "categoria": "Crazy Rich Asians",
    "icono": "💍",
    "tono": "amor",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hoy va una recomendación para reírnos y suspirar un poco a la vez. Si hoy estuviéramos juntos, me gustaría que este día empezara en un día de semana que pide una pausa: la respiración tranquila cuando por fin baja el ruido del día. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "Es una comedia romántica sobre presentarle a la familia a la persona que uno ama, con toda la presión y la ternura que eso trae.",
      "Se llama 'Crazy Rich Asians'. Fácil de ver, imposible no sonreír al final.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "De esas para ver un domingo perezoso, sin pensar mucho. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la respiración tranquila cuando por fin baja el ruido del día.",
    "buenasNoches": "Buenas noches, con ganas de una tarde de domingo así, sin apuro. Y si pudiera cerrar este día contigo, escogería guardar una frase tuya para recordarla después. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Un día de semana que pide una pausa; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 14,
    "categoria": "Cerca",
    "icono": "🔥",
    "tono": "hot",
    "color": {
      "principal": "#d1163f",
      "suave": "#f7bccb",
      "oscuro": "#1c0409"
    },
    "buenosDias": "Buenos días. Anoche pasé un rato calculando cuántos días exactos faltan para la próxima vez que estemos en el mismo cuarto. Hoy te confieso algo sencillo: me encanta mirarte. No solo cuando estás arreglada, sino también cuando estás distraída, recién despierta o haciendo cualquier cosa que no creas que alguien está observando.",
    "poema": [
      "No es una cifra pequeña, y aun así se siente más corta cada vez que pienso en lo que quiero hacer apenas cruces la puerta.",
      "Nada elaborado. Solo cerca. Muy cerca, sin que nadie tenga prisa por moverse de ahí.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: cena sencilla, música bajita y después sofá. La única obligación de la noche es estar cerca; el resto puede improvisarse.",
    "buenasNoches": "Buenas noches. Un día menos, según mi cuenta poco confiable pero muy motivada. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper. Cierra los ojos imaginando el sofá, la manta y esa pausa en la que ninguno de los dos tiene ganas de mirar el reloj.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una mesa llena de papelitos y recuerdos; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 15,
    "categoria": "Elegancia",
    "icono": "👗",
    "tono": "amor",
    "color": {
      "principal": "#2f6d6b",
      "suave": "#bfe3e0",
      "oscuro": "#08191a"
    },
    "buenosDias": "Buenos días. Hay mañanas que se sienten como una hoja en blanco, y hoy decidí empezar la mía escribiéndote a ti. elegancia. Hoy va dedicado a esos días en que te arreglas y el mundo se detiene un segundo. Si hoy estuviéramos juntos, me gustaría que este día empezara en un balcón donde el cielo cambia de color: ese segundo de silencio antes de decir algo que importa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "Sé que te encantan los vestidos largos, esos que se sienten como una ocasión especial incluso en un día cualquiera.",
      "Ojalá pronto tengamos una excusa para que te pongas uno y yo solo pueda mirarte.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Avísame cuando tengamos ese plan elegante pendiente, ya quiero verlo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: ese segundo de silencio antes de decir algo que importa.",
    "buenasNoches": "Las últimas luces de la casa ya se apagaron, y en la oscuridad, como siempre, apareciste tú primero en mis pensamientos. Buenas noches, elegante hasta en sueños. Y si pudiera cerrar este día contigo, escogería hacerte reír con una tontería. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[PARA TI] una foto suya arreglada, si tiene alguna que le guste.",
    "notaCancion": "[PARA TI] algo elegante, tipo una balada especial.",
    "escenaInmersiva": "Un balcón donde el cielo cambia de color; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 16,
    "categoria": "Aprendizaje",
    "icono": "🎀",
    "tono": "amor",
    "color": {
      "principal": "#ff6fa8",
      "suave": "#ffd7e6",
      "oscuro": "#3a0f24"
    },
    "buenosDias": "Buenos días. El aire todavía huele a noche cuando empiezo a escribirte esto. Contigo he aprendido cosas que no sabía que me hacían falta aprender. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cuarto con música bajita: la sombra de las hojas moviéndose sobre el suelo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "poema": [
      "No hablo de cosas grandes, hablo de detalles: paciencia, calma, la forma correcta de escuchar.",
      "Sigues siendo de mis mejores maestras, sin proponértelo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por enseñarme sin intentarlo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sombra de las hojas moviéndose sobre el suelo.",
    "buenasNoches": "Las estrellas, si es que se ven desde donde estás, tienen algo tuyo hoy, aunque suene un poco cursi decirlo así. Buenas noches, todavía aprendiendo de ti, con gusto. Y si pudiera cerrar este día contigo, escogería mirar el cielo y buscarle un nombre a la forma de una nube. Me gusta pensar que porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "notaImagen": "[PARA TI] otra foto tierna, tipo Hello Kitty.",
    "notaCancion": "[PARA TI] algo dulce y liviano.",
    "escenaInmersiva": "Un cuarto con música bajita; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 17,
    "categoria": "Nota musical",
    "icono": "📻",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. El teléfono marcó la hora y, en automático, pensé en ti antes de pensar en cualquier pendiente del día. Melodías relajantes y letras profundas para un día tranquilo. Si hoy estuviéramos juntos, me gustaría que este día empezara en un pasillo silencioso antes de dormir: el sonido pequeño de una taza al tocar la mesa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Dámelo todo, tus días buenos y tus días grises,",
      "aquí estoy para compartirlo todo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "Una invitación a escuchar buena música y desconectarse un rato. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa. Juego de palabras: cada uno manda tres palabras que describan al otro sin usar “amor”, “bonita/o” ni “te quiero”. El otro tiene que adivinar cuál palabra le costó más elegir.",
    "buenasNoches": "Hay una quietud distinta en las noches, de esas que invitan a pensar despacio en lo que de verdad importa. Cierra los ojos y descansa con tranquilidad. Y si pudiera cerrar este día contigo, escogería caminar sin destino mientras hablamos. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[MÚSICA] Canción: Dámelo Todo",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un pasillo silencioso antes de dormir; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 18,
    "categoria": "The Menu",
    "icono": "🍽️",
    "tono": "filosofica",
    "color": {
      "principal": "#6b2142",
      "suave": "#e3b8c9",
      "oscuro": "#180509"
    },
    "buenosDias": "Buenos días. Hoy quiero recomendarte algo distinto: humor negro con un final que se queda dando vueltas en la cabeza. Si hoy estuviéramos juntos, me gustaría que este día empezara en una ventana abierta al aire fresco: la risa que llega antes que la respuesta. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "Es sobre una cena exclusiva que se va saliendo de control poco a poco, con crítica social escondida entre platos elegantes.",
      "Se llama 'The Menu'. No es para todos los gustos, pero si te gusta lo incómodo bien hecho, esta es de esas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: cocinen juntos algo que puedan comer con las manos y luego vean *The Menu*. Mientras avanza, hagan apuestas sobre qué personaje les da más mala espina.",
    "buenasNoches": "Buenas noches, todavía procesando finales de película que incomodan bien. Y si pudiera cerrar este día contigo, escogería preguntarte qué fue lo primero que pensaste al despertar. Me gusta pensar que porque elegirte también es aprender tus detalles. Después del final, quédense abrazados unos minutos hablando de qué harían ustedes si les sirvieran una cena tan rara.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Una ventana abierta al aire fresco; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 19,
    "categoria": "Trivia musical",
    "icono": "🎸",
    "tono": "filosofica",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hay una energía distinta en los días que empiezan escribiéndote, no sabría explicar bien por qué. Música alegre para mantener el buen humor durante toda la jornada. Si hoy estuviéramos juntos, me gustaría que este día empezara en un trayecto cualquiera que de pronto se vuelve especial: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "Contigo cualquier momento ordinario se vuelve mágico,",
      "una razón más para sonreír.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Ponla a sonar en tus audífonos ahora mismo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el olor de algo recién hecho.",
    "buenasNoches": "Hay noches donde el cansancio gana rápido, y aun así encontré energía para pensarte un rato más. Duerme rico, te pienso un montón. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[MÚSICA] Canción: Contigo",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un trayecto cualquiera que de pronto se vuelve especial; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 20,
    "categoria": "Un día cualquiera",
    "icono": "🍿",
    "tono": "amor",
    "color": {
      "principal": "#a81f1f",
      "suave": "#f0aeae",
      "oscuro": "#160404"
    },
    "buenosDias": "Buenos días. El café todavía está humeando cuando ya estoy pensando en qué decirte hoy. Hoy no es ninguna fecha especial, y aun así quería escribirte. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cafetería imaginaria donde solo estamos tú y yo: una canción de fondo y la sensación de que no hace falta hacer nada más. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "Los días comunes también merecen mensajes bonitos, no solo los aniversarios.",
      "Este es uno de esos días comunes que quiero hacer especial solo por escribirte.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "Feliz día cualquiera, contigo en la cabeza. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción de fondo y la sensación de que no hace falta hacer nada más.",
    "buenasNoches": "La luz de la lámpara es lo único encendido ya en este cuarto, y sigo aquí, pensando en cómo cerrar bien el día contigo en mente. Buenas noches, en un día cualquiera que terminó siendo bonito. Y si pudiera cerrar este día contigo, escogería abrazarte antes de intentar resolver cualquier cosa. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[PARA TI] otra foto o póster de alguna película favorita.",
    "notaCancion": "[PARA TI] otra banda sonora que le guste.",
    "escenaInmersiva": "Una cafetería imaginaria donde solo estamos tú y yo; una canción de fondo y la sensación de que no hace falta hacer nada más. abrazarte antes de intentar resolver cualquier cosa. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 21,
    "categoria": "Tormenta",
    "icono": "⛈️",
    "tono": "filosofica",
    "color": {
      "principal": "#43225c",
      "suave": "#cdb8e8",
      "oscuro": "#0d0716"
    },
    "buenosDias": "Buenos días. Antes de revisar cualquier otra cosa en el teléfono, ya estaba escribiéndote esto. No todos los días son sol contigo, y aun así, hasta tus tormentas prefiero a la calma de otra persona. Si hoy estuviéramos juntos, me gustaría que este día empezara en un lugar cualquiera que se convierte en nuestro por compartirlo: la lluvia golpeando despacio los vidrios. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "Prefiero discutir contigo y hacer las paces, que tener paz forzada con alguien más.",
      "Porque hasta en tormenta, sigues siendo el lugar al que quiero volver.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por pelear por esto también en los días difíciles. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la lluvia golpeando despacio los vidrios.",
    "buenasNoches": "Hay noches que se sienten largas y noches que se sienten cortas, y esta, contigo en la cabeza, se sintió de las buenas. Buenas noches, después de la tormenta, todavía aquí. Y si pudiera cerrar este día contigo, escogería escuchar contigo una canción hasta el final. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Un lugar cualquiera que se convierte en nuestro por compartirlo; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 22,
    "categoria": "Vivir Mi Vida",
    "icono": "🎵",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. El día apenas empieza a definirse, pero ya sé que una parte de él va a estar dedicada a pensar en ti. Hoy quiero hablarte de una canción sobre disfrutar la vida a pesar de lo difícil que a veces se pone. Si hoy estuviéramos juntos, me gustaría que este día empezara en una tarde que huele a lluvia: el roce casual que termina sintiéndose importante. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "poema": [
      "Hay una canción de Marc Anthony que habla de bailar y disfrutar la vida incluso en los días grises, como una forma de resistencia alegre.",
      "Contigo se me hace más fácil vivir así, disfrutando aunque el día no esté perfecto.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Vivir Mi Vida', de Marc Anthony. Sube el volumen con esta. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante.",
    "buenasNoches": "Hay una versión más honesta de mí que solo sale de noche, y esa versión también te quiere mucho. Buenas noches, agradecido de vivir mi vida contigo cerca. Y si pudiera cerrar este día contigo, escogería bailar contigo aunque no haya espacio. Me gusta pensar que porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "cancionUrl": "https://www.youtube.com/watch?v=YXnjy5YlDwk",
    "notaImagen": "[MÚSICA] Canción: Vivir Mi Vida",
    "notaCancion": "[PARA TI] canción real, con link real puesto para que suene ese día.",
    "escenaInmersiva": "Una tarde que huele a lluvia; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 23,
    "categoria": "Playlist privada",
    "icono": "🎧",
    "tono": "hot",
    "color": {
      "principal": "#c81d4a",
      "suave": "#f7c0d0",
      "oscuro": "#1a0308"
    },
    "buenosDias": "Buenos días. Anoche armé, casi sin querer, una lista de canciones que definitivamente no pondría si alguien más estuviera cerca. Hoy me gustaría robarte unos minutos sin planes ni teléfonos: solo tú, yo y esa clase de silencio que se vuelve demasiado íntimo cuando uno se gusta de verdad.",
    "poema": [
      "No es el tipo de música para fondo de oficina. Es de la que baja el volumen de todo lo demás y sube el de una sola persona en la cabeza.",
      "Esa playlist sigue privada. Por ahora.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "El día que la escuches conmigo vas a entender por qué tiene ese nombre. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sensación de una mano buscando otra sin pensarlo.",
    "buenasNoches": "Buenas noches. La lista sigue creciendo, para que lo sepas. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una noche con la ciudad respirando detrás de la ventana; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 24,
    "categoria": "Orgullo y Prejuicio",
    "icono": "📖",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. Hoy va una recomendación clásica, de esas que nunca pasan de moda. Si hoy estuviéramos juntos, me gustaría que este día empezara en un automóvil detenido mientras termina una canción: una canción que parece llegar exactamente en el momento correcto. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo me interesa más la experiencia que la perfección.",
    "poema": [
      "Es la historia de dos personas que se equivocan constantemente al juzgarse, hasta que se dan cuenta de que estaban viendo mal desde el principio.",
      "Se llama 'Orgullo y Prejuicio', la versión de 2005. Hay una escena bajo la lluvia que es prácticamente perfecta.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Ten pañuelos cerca, aunque sea comedia romántica también emociona. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "Buenas noches, con la escena de la lluvia todavía en la cabeza. Y si pudiera cerrar este día contigo, escogería mirarte unos segundos más de lo necesario. Me gusta pensar que porque contigo me interesa más la experiencia que la perfección.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Un automóvil detenido mientras termina una canción; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 25,
    "categoria": "Incendio",
    "icono": "🔥",
    "tono": "filosofica",
    "color": {
      "principal": "#4a1830",
      "suave": "#d9a7bd",
      "oscuro": "#120206"
    },
    "buenosDias": "Buenos días. El cielo todavía tiene ese color raro de las mañanas que no se deciden entre gris y celeste. Hay formas de querer queman despacio, y la mía por ti es una de esas. Si hoy estuviéramos juntos, me gustaría que este día empezara en una calle que todavía no se llena de gente: el calor queda después de un abrazo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "No fue un incendio rápido, fue una brasa que se quedó ahí, calentando todo poco a poco hasta que ya no hubo forma de apagarla.",
      "Y honestamente, ya ni quiero que se apague.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "Sigues siendo el fuego más constante que he tenido. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el calor queda después de un abrazo.",
    "buenasNoches": "El día se despide con la misma certeza de siempre: que quiero que mañana empiece igual, pensando en ti primero. Buenas noches, con la brasa todavía encendida. Y si pudiera cerrar este día contigo, escogería pedirte que me cuentes una historia que nunca me hayas contado. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Una calle que todavía no se llena de gente; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 26,
    "categoria": "Palabras que faltan",
    "icono": "🎬",
    "tono": "amor",
    "color": {
      "principal": "#a81f1f",
      "suave": "#f0aeae",
      "oscuro": "#160404"
    },
    "buenosDias": "Buenos días. Hay un tipo de calma particular en escribir esto antes de que el celular empiece a sonar con todo lo demás. Hay días en que las palabras no alcanzan para explicar lo que siento, y hoy es uno de esos. Si hoy estuviéramos juntos, me gustaría que este día empezara en un parque casi vacío: la luz tibia que se queda unos segundos sobre la pared. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque no quiero quererte solamente en los momentos fáciles.",
    "poema": [
      "A veces quiero decir tanto que termino sin decir nada, y espero que igual se sienta.",
      "Lo que no logro poner en palabras, espero que lo sientas en la intención.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "Si algún día no encuentro las palabras correctas, ten paciencia, sigo intentando decírtelo bien. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la luz tibia que se queda unos segundos sobre la pared.",
    "buenasNoches": "Hay un silencio particular a esta hora que hace que las palabras pesen distinto, más sinceras. Buenas noches, con más sentido del que logré poner en palabras hoy. Y si pudiera cerrar este día contigo, escogería dejarte una nota donde menos la esperes. Me gusta pensar que porque no quiero quererte solamente en los momentos fáciles.",
    "notaImagen": "[PARA TI] otro póster o foto de cine.",
    "notaCancion": "[PARA TI] algo cinematográfico.",
    "escenaInmersiva": "Un parque casi vacío; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 27,
    "categoria": "Make You Feel My Love",
    "icono": "🌧️",
    "tono": "amor",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. El sol todavía no calienta del todo, pero algo aquí adentro ya empezó a hacerlo. Hoy quiero hablarte de una canción sobre todo lo que alguien estaría dispuesto a hacer con tal de que la otra persona sienta lo mucho que la quieren. Si hoy estuviéramos juntos, me gustaría que este día empezara en una playa que todavía guarda calor en la arena: el cambio de color del cielo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "Hay una canción de Bob Dylan, muy conocida también en la versión de Adele, que habla de enfrentar tormentas, noches largas y lo que sea necesario con tal de que el otro sienta ese amor de verdad.",
      "No hace falta que enfrente tormentas literales, pero sí quiero que sientas esto tan real como se puede sentir.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Make You Feel My Love'. La versión de Adele es preciosa, la original es de Bob Dylan. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cambio de color del cielo.",
    "buenasNoches": "Hay algo tranquilizador en saber que, sin importar cómo estuvo el día, esto de escribirte de noche no cambia. Buenas noches, esperando que hayas sentido, aunque sea un poco, todo esto. Y si pudiera cerrar este día contigo, escogería hacerte un café y dejarlo cerca de ti sin decir demasiado. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[MÚSICA] Canción: Make You Feel My Love",
    "notaCancion": "[PARA TI] canción real: 'Make You Feel My Love' - Adele (o Bob Dylan, la original).",
    "escenaInmersiva": "Una playa que todavía guarda calor en la arena; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 28,
    "categoria": "Crecer juntos",
    "icono": "🦸",
    "tono": "amor",
    "color": {
      "principal": "#3a6ea5",
      "suave": "#c9dcf2",
      "oscuro": "#081321"
    },
    "buenosDias": "Buenos días. Hay mañanas silenciosas y mañanas ruidosas, y esta, por suerte, es de las tranquilas. Hoy pensé en todo lo que hemos crecido, cada uno por su lado y también juntos. Si hoy estuviéramos juntos, me gustaría que este día empezara en una habitación todavía en penumbra: el aire fresco entrando por la ventana. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "Me gusta la idea de que sigamos cambiando, y que ese cambio siga incluyéndonos a los dos.",
      "Quiero seguir creciendo contigo cerca, no lejos.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por crecer conmigo, aunque a veces duela un poco crecer. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el aire fresco entrando por la ventana.",
    "buenasNoches": "El silencio de la noche siempre hace que las cosas simples, como decir buenas noches, se sientan un poco más importantes. Buenas noches, un poco más grande que ayer, gracias a ti. Y si pudiera cerrar este día contigo, escogería quedarme cerca mientras haces algo que te gusta. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[PARA TI] algo que la haga sentir fuerte y orgullosa.",
    "notaCancion": "[PARA TI] algo con energía, empoderador.",
    "escenaInmersiva": "Una habitación todavía en penumbra; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 29,
    "categoria": "Deadpool",
    "icono": "🩹",
    "tono": "amor",
    "color": {
      "principal": "#c81d4a",
      "suave": "#f7c0d0",
      "oscuro": "#1a0308"
    },
    "buenosDias": "Buenos días. Hoy toca algo para reírnos sin culpa, de esas películas que no se toman en serio a propósito. Si hoy estuviéramos juntos, me gustaría que este día empezara en un sofá con una manta compartida: el cansancio bonito después de un día compartido. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Es sobre un antihéroe imperfecto que, en medio de tanto chiste, tiene una historia de amor bastante sincera de fondo.",
      "Se llama 'Deadpool'. Humor absurdo, corazón real.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "Ideal para un día que necesite reírse sin pensar mucho. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cansancio bonito después de un día compartido.",
    "buenasNoches": "Buenas noches, con ganas de reírnos juntos pronto. Y si pudiera cerrar este día contigo, escogería inventarnos un plan sencillo para cuando podamos vernos. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Un sofá con una manta compartida; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 30,
    "categoria": "Mixtape",
    "icono": "🎶",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. El ruido de la calle todavía no arranca del todo, y en ese pequeño espacio de calma te escribo esto. Ritmo urbano para mantener presente a esa persona especial. Si hoy estuviéramos juntos, me gustaría que este día empezara en un domingo lento: la música escapándose de un parlante cercano. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "Aunque el día esté ocupado y lleno de tareas,",
      "el pensamiento siempre se escapa hacia ti.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "Ponla en tus audífonos y disfrútala. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la música escapándose de un parlante cercano.",
    "buenasNoches": "Hay algo bonito en cerrar el día pensando en la misma persona con la que se abrió, y hoy fue así otra vez. Que descanses, te pienso un montón. Y si pudiera cerrar este día contigo, escogería dejar que el silencio haga su parte. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[MÚSICA] Canción: Sigo Extrañándote",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un domingo lento; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 31,
    "categoria": "Provocación",
    "icono": "😈",
    "tono": "hot",
    "color": {
      "principal": "#d1163f",
      "suave": "#f7bccb",
      "oscuro": "#1c0409"
    },
    "buenosDias": "Buenos días. Anoche pensé una frase para mandarte hoy y la borré tres veces porque me pareció demasiado directa incluso para mí. Hoy me dieron ganas de escribirte antes de que el día terminara de despertarse. No solo porque te extraño: porque hay una parte de mí que disfruta imaginarte cerca, con esa mezcla tuya de calma y peligro que me desarma.",
    "poema": [
      "Al final decidí no editarla más: quiero saber si logro sacarte esa sonrisa que se te escapa cuando sabes exactamente lo que estoy pensando.",
      "No prometo comportarme el resto del mensaje.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "¿Funcionó? Contéstame con honestidad, no con cortesía. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí.",
    "buenasNoches": "Buenas noches. La frase editada tres veces sigue guardada, por si la necesito mañana. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un cielo nublado que no termina de decidirse; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 32,
    "categoria": "Música",
    "icono": "🎶",
    "tono": "amor",
    "color": {
      "principal": "#c23fd1",
      "suave": "#f2c9ff",
      "oscuro": "#210a26"
    },
    "buenosDias": "Buenos días. Hay mañanas donde uno se siente con ganas de todo, y esta parece ser una de esas. Hoy va dedicado a lo que suena cuando nadie más está mirando. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cama desordenada después de una noche larga: el silencio cómodo que no necesita explicación. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Me gusta la idea de tener canciones que ya son solo nuestras, esas que apenas suenan y ya piensas en el otro.",
      "Vamos armando esa lista, poco a poco.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "Revisa el botón de música: ahí te voy dejando canciones que me hacen pensar en ti. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el silencio cómodo que no necesita explicación.",
    "buenasNoches": "El día ya cumplió su ciclo completo, y como siempre, terminó pensando en la misma persona con la que empezó. Buenas noches, que la última canción que escuches hoy sea una bonita. Y si pudiera cerrar este día contigo, escogería recordar una conversación que todavía me hace sonreír. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[PARA TI] una foto de algún concierto o momento musical juntos.",
    "notaCancion": "[PARA TI] la canción que sientan que ya es 'de los dos'.",
    "escenaInmersiva": "Una cama desordenada después de una noche larga; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 33,
    "categoria": "A oscuras",
    "icono": "🕶️",
    "tono": "hot",
    "color": {
      "principal": "#a10e35",
      "suave": "#f0aabd",
      "oscuro": "#140208"
    },
    "buenosDias": "Buenos días. Hay una clase de confianza que solo se nota cuando se apagan las luces y nadie se pone nervioso. Hay mañanas en las que el cariño llega primero. Hoy llegó el deseo: esas ganas tranquilas de tenerte cerca, de mirarte sin prisa y de dejar que el resto del mundo espere un rato.",
    "poema": [
      "No hablo solo de oscuridad literal, hablo de esa seguridad de no necesitar ver para saber exactamente dónde está todo, cómo se siente todo.",
      "Contigo esa confianza ya la tengo, completa, sin ensayarla.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "Cuando quieras repetir esa clase de cercanía, aquí sigo, sin apuro. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la respiración tranquila cuando por fin baja el ruido del día.",
    "buenasNoches": "Buenas noches, a oscuras, pensando en formas de acercarme más la próxima vez. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una esquina iluminada por el sol de la tarde; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 34,
    "categoria": "Your Name",
    "icono": "🌠",
    "tono": "filosofica",
    "color": {
      "principal": "#3a1f5c",
      "suave": "#c9b8e6",
      "oscuro": "#0c0716"
    },
    "buenosDias": "Buenos días. Hoy quiero recomendarte una película animada que parece simple y termina siendo devastadoramente bonita. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina llena de pequeñas cosas por ordenar: el ruido lejano de la ciudad. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "Es sobre dos personas conectadas de una forma que no logran explicar del todo, buscándose a través del tiempo sin saber si algún día van a encontrarse.",
      "Se llama 'Your Name' (Kimi no Na wa). Prepárate para sentir cosas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "Es japonesa, con subtítulos. Vale completamente la pena. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el ruido lejano de la ciudad. Juego de película: cada uno inventa una frase de dos líneas que podría decir el protagonista justo antes de besar a su persona favorita. Luego el otro decide cuál suena más a nosotros.",
    "buenasNoches": "Buenas noches, buscándote en el sentido bonito de la palabra. Y si pudiera cerrar este día contigo, escogería cocinar algo que salga imperfecto pero nuestro. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Una cocina llena de pequeñas cosas por ordenar; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 35,
    "categoria": "Compás",
    "icono": "🎼",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. El despertador sonó dos veces antes de que lograra levantarme, y en el medio, sin darme cuenta, ya estaba pensando en ti. Los acordes de bajo y las letras directas tienen un encanto único. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina con la primera taza sobre la mesa: ese segundo de silencio antes de decir algo que importa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "Quiero ser tu abrigo favorito y tu refugio nocturno,",
      "el lugar al que siempre quieras volver.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Agrega esta canción a tus favoritas de la semana. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: ese segundo de silencio antes de decir algo que importa.",
    "buenasNoches": "Las luces de la calle ya se encendieron hace rato, y aquí sigo, pensando en ti antes de dormir. Que tengas una noche muy placentera. Y si pudiera cerrar este día contigo, escogería hacerte reír con una tontería. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[MÚSICA] Canción: I Wanna Be Yours",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una cocina con la primera taza sobre la mesa; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 36,
    "categoria": "Silencio bonito",
    "icono": "🖤",
    "tono": "filosofica",
    "color": {
      "principal": "#4a1830",
      "suave": "#d9a7bd",
      "oscuro": "#120206"
    },
    "buenosDias": "Buenos días. Hoy el despertar fue lento, de esos donde uno se queda un rato más en la cama solo pensando. Hoy no tengo mucho que decir, y aun así quería escribirte, aunque sea poco. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa con dos vasos y algo pendiente de conversar: la sombra de las hojas moviéndose sobre el suelo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "Hay silencios que incomodan y hay silencios que se sienten completos, y los que tengo contigo son de los segundos.",
      "No siempre hace falta llenar todo con palabras.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por los silencios cómodos que hemos tenido. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sombra de las hojas moviéndose sobre el suelo.",
    "buenasNoches": "Afuera ya no se escucha casi nada, solo el silencio típico de esta hora, cómodo, tranquilo. Buenas noches, en un silencio bonito, pensando en ti. Y si pudiera cerrar este día contigo, escogería mirar el cielo y buscarle un nombre a la forma de una nube. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "notaImagen": "[PARA TI] otra foto de sus libros o de una biblioteca bonita.",
    "notaCancion": "[PARA TI] algo con más intensidad, tipo banda sonora dramática.",
    "escenaInmersiva": "Una mesa con dos vasos y algo pendiente de conversar; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 37,
    "categoria": "Bonus privado",
    "icono": "🍷",
    "tono": "hot",
    "color": {
      "principal": "#c81d4a",
      "suave": "#f7c0d0",
      "oscuro": "#1a0308"
    },
    "buenosDias": "Buenos días. El mensaje de hoy viene contenido extra que normalmente me guardo para ocasiones especiales. Hoy me dieron ganas de escribirte antes de que el día terminara de despertarse. No solo porque te extraño: porque hay una parte de mí que disfruta imaginarte cerca, con esa mezcla tuya de calma y peligro que me desarma.",
    "poema": [
      "Hay pensamientos que quedan fuera del resumen diario, como escenas que se cortan del final pero siguen existiendo en algún lado.",
      "Este es uno de esos: pendiente de estreno, en persona, sin apuro.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "Cóbrame el extra cuando quieras. Tengo buena memoria para estas cosas. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa.",
    "buenasNoches": "Buenas noches, con el contenido extra todavía guardado, esperando su momento. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un día de semana que pide una pausa; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 38,
    "categoria": "Volver a empezar",
    "icono": "🌺",
    "tono": "filosofica",
    "color": {
      "principal": "#d94fb0",
      "suave": "#ffd6f0",
      "oscuro": "#26071c"
    },
    "buenosDias": "Buenos días. Todavía hace frío afuera, pero aquí adentro algo ya se siente tibio desde temprano. Cada día es una oportunidad de volver a empezar, incluso en algo que ya va bien. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa llena de papelitos y recuerdos: la risa que llega antes que la respuesta. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "Me gusta la idea de que cada mañana podamos elegir empezar de nuevo, sin cargar los errores del día anterior.",
      "Hoy elijo empezar de nuevo contigo, otra vez, con las mismas ganas de siempre.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Empecemos hoy de nuevo, como si fuera el primer día, con las mismas ganas. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la risa que llega antes que la respuesta.",
    "buenasNoches": "El ruido de afuera bajó por completo, y en ese silencio hay espacio de sobra para pensar en ti con calma. Buenas noches, listo para empezar de nuevo mañana. Y si pudiera cerrar este día contigo, escogería preguntarte qué fue lo primero que pensaste al despertar. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[PARA TI] otra foto de orquídeas.",
    "notaCancion": "[PARA TI] algo elegante, tipo bolero.",
    "escenaInmersiva": "Una mesa llena de papelitos y recuerdos; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 39,
    "categoria": "Canción bajo la lluvia",
    "icono": "🎧",
    "tono": "filosofica",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. El primer pensamiento coherente del día, antes que cualquier lista de pendientes, fue sobre ti. Letras nostálgicas y hermosas para empezar la mañana con calma. Si hoy estuviéramos juntos, me gustaría que este día empezara en un balcón donde el cielo cambia de color: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo me interesa más la experiencia que la perfección.",
    "poema": [
      "Y cuando la distancia pesa en el pecho,",
      "tu recuerdo se vuelve la mejor canción.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Te mando un abrazo gigante para arrancar el día. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el olor de algo recién hecho.",
    "buenasNoches": "El cielo ya está completamente oscuro, y en algún lugar de ahí arriba hay una estrella que, según decidí hoy, es tuya. Descansa rico, nos leemos mañana. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque contigo me interesa más la experiencia que la perfección.",
    "notaImagen": "[MÚSICA] Canción: Colapso",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un balcón donde el cielo cambia de color; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 40,
    "categoria": "Corpse Bride",
    "icono": "🖤",
    "tono": "filosofica",
    "color": {
      "principal": "#4a1830",
      "suave": "#d9a7bd",
      "oscuro": "#120206"
    },
    "buenosDias": "Buenos días. Hoy va una recomendación con estética oscura pero corazón dulce, justo tu estilo. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cuarto con música bajita: una manta compartida y dos pies buscando sitio debajo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "Es sobre un compromiso accidental en el mundo de los muertos, y termina siendo, sin que uno lo espere, una historia sobre elegir bien a quién amar.",
      "Se llama 'Corpse Bride', de Tim Burton. Visualmente es una belleza.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "Encaja perfecto con esos días de vibra oscura-romántica que a veces nos dan. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una manta compartida y dos pies buscando sitio debajo.",
    "buenasNoches": "Buenas noches, con esa estética bonita-oscura todavía en la cabeza. Y si pudiera cerrar este día contigo, escogería abrazarte antes de intentar resolver cualquier cosa. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Un cuarto con música bajita; una manta compartida y dos pies buscando sitio debajo. abrazarte antes de intentar resolver cualquier cosa. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 41,
    "categoria": "Canción al volante",
    "icono": "📻",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Afuera el día apenas se estira, y aquí ya estoy yo, pensando en ti antes que en cualquier otra cosa. Ritmo urbano para mantener arriba la energía en la recta final. Si hoy estuviéramos juntos, me gustaría que este día empezara en un pasillo silencioso antes de dormir: la lluvia golpeando despacio los vidrios. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque no quiero quererte solamente en los momentos fáciles.",
    "poema": [
      "Tus ojos lindos mirando hacia el frente",
      "son el mejor paisaje para cualquier día.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "Guarda un ratito para descansar entre pendientes. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la lluvia golpeando despacio los vidrios.",
    "buenasNoches": "Las cobijas ya están listas, y en un rato, cuando cierre los ojos, sé exactamente en quién voy a pensar. Que descanses profundamente. Y si pudiera cerrar este día contigo, escogería escuchar contigo una canción hasta el final. Me gusta pensar que porque no quiero quererte solamente en los momentos fáciles.",
    "notaImagen": "[MÚSICA] Canción: Ojitos Lindos",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un pasillo silencioso antes de dormir; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 42,
    "categoria": "Dorado",
    "icono": "✨",
    "tono": "amor",
    "color": {
      "principal": "#d4af37",
      "suave": "#f7e8b0",
      "oscuro": "#241c04"
    },
    "buenosDias": "Buenos días. Hay una calma particular en las primeras horas, antes de que el ruido del día se meta por todos lados. team dorado. Hoy el día se viste de tu color favorito. Si hoy estuviéramos juntos, me gustaría que este día empezara en una ventana abierta al aire fresco: el roce casual que termina sintiéndose importante. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "El dorado no se apaga fácil, brilla incluso con poca luz.",
      "Así eres tú, incluso en los días grises encuentras la forma de brillar un poco.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "Hoy, si puedes, ponte algo dorado. Sé que te encanta. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante.",
    "buenasNoches": "Las cosas del día ya quedaron atrás, y lo único que sigue presente, como siempre, eres tú. Buenas noches, que sigas brillando hasta en sueños. Y si pudiera cerrar este día contigo, escogería bailar contigo aunque no haya espacio. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[PARA TI] algo dorado que le guste: joyería, ropa, detalles.",
    "notaCancion": "[PARA TI] algo con brillo, animado.",
    "escenaInmersiva": "Una ventana abierta al aire fresco; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 43,
    "categoria": "Tema principal",
    "icono": "💿",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Hay una quietud bonita en las mañanas de entre semana que casi nadie aprovecha, y hoy la usé para esto. ¡Llegamos al día 43 de este primer calendario! Y lo celebramos con buena música. Si hoy estuviéramos juntos, me gustaría que este día empezara en un trayecto cualquiera que de pronto se vuelve especial: la sensación de una mano buscando otra sin pensarlo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "Sumando 43 días de historias y canciones,",
      "comprobando que cada detalle vale oro.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por todo tu empeño y por hacer esto tan especial. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sensación de una mano buscando otra sin pensarlo.",
    "buenasNoches": "El día terminó, con sus cosas buenas y sus cosas normales, pero contigo en la mente el balance siempre sale bien. Descansa profundamente, amor. Y si pudiera cerrar este día contigo, escogería preguntarte qué parte del día quieres guardar. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[MÚSICA] Canción: Colapso",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un trayecto cualquiera que de pronto se vuelve especial; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 44,
    "categoria": "Costumbre",
    "icono": "☁️",
    "tono": "amor",
    "color": {
      "principal": "#6fb1e0",
      "suave": "#d6ecfb",
      "oscuro": "#071522"
    },
    "buenosDias": "Buenos días. Hoy me desperté antes de la alarma, y en ese ratito extra, sin planearlo, ya estaba pensando en ti. Hoy quiero hablar de algo que no se nota mucho pero sostiene todo: la costumbre buena. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cafetería imaginaria donde solo estamos tú y yo: una canción que parece llegar exactamente en el momento correcto. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Hay costumbres que aburren y hay costumbres que dan paz, y la de pensarte cada día es de las segundas.",
      "No quiero que esto deje de ser costumbre nunca.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por ser de las costumbres que no cansan. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "El silencio de la casa a esta hora es distinto a cualquier otro momento del día, más íntimo, más real. Buenas noches, con la costumbre de pensarte intacta. Y si pudiera cerrar este día contigo, escogería mirarte unos segundos más de lo necesario. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[PARA TI] una foto de un cielo bonito, nubes, un atardecer.",
    "notaCancion": "[PARA TI] algo soñador, tranquilo.",
    "escenaInmersiva": "Una cafetería imaginaria donde solo estamos tú y yo; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 45,
    "categoria": "Crash Landing on You",
    "icono": "🪂",
    "tono": "amor",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Sé que te gustan los k-dramas, así que hoy va una recomendación que probablemente ya conoces, pero por si acaso. Si hoy estuviéramos juntos, me gustaría que este día empezara en un lugar cualquiera que se convierte en nuestro por compartirlo: el calor queda después de un abrazo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "Es sobre una mujer que cae, literal, en un lugar completamente inesperado, y termina encontrando algo que no buscaba en absoluto.",
      "Se llama 'Crash Landing on You'. Dieciséis episodios que se sienten como cuatro.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "Prepara pañuelos y varios días libres, esta engancha rápido. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el calor queda después de un abrazo.",
    "buenasNoches": "Buenas noches, con ganas de maratonear episodios contigo pronto. Y si pudiera cerrar este día contigo, escogería pedirte que me cuentes una historia que nunca me hayas contado. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Un lugar cualquiera que se convierte en nuestro por compartirlo; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 46,
    "categoria": "Constancia",
    "icono": "🌹",
    "tono": "amor",
    "color": {
      "principal": "#d81e3e",
      "suave": "#ffc2ce",
      "oscuro": "#2b0508"
    },
    "buenosDias": "Buenos días. Hay una luz particular en las mañanas de esta semana, de esas que entran de lado y hacen que todo se vea un poco más honesto. No soy de grandes gestos todo el tiempo, pero sí soy constante, y eso también cuenta. Si hoy estuviéramos juntos, me gustaría que este día empezara en una tarde que huele a lluvia: la luz tibia que se queda unos segundos sobre la pared. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "poema": [
      "Prefiero ser constante que espectacular una sola vez y después desaparecer.",
      "Aquí sigo, día tras día, constante como siempre.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por valorar la constancia tanto como los gestos grandes. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la luz tibia que se queda unos segundos sobre la pared.",
    "buenasNoches": "El día ya se apagó casi del todo, y antes de cerrar los ojos quería dejarte esto. Buenas noches, constante, como cada noche. Y si pudiera cerrar este día contigo, escogería dejarte una nota donde menos la esperes. Me gusta pensar que porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "notaImagen": "[PARA TI] otra foto de rosas.",
    "notaCancion": "[PARA TI] algo romántico, clásico.",
    "escenaInmersiva": "Una tarde que huele a lluvia; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 47,
    "categoria": "Aplausos",
    "icono": "🎵",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hay días que empiezan con prisa y días que empiezan despacio, y este es de los segundos, justo lo que necesitaba. Un estilo único que atrapa desde el primer acorde de bajo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una noche con la ciudad respirando detrás de la ventana: el cambio de color del cielo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Ser tu refugio cuando afuera todo arde",
      "es lo único que necesito para sentirme en casa.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Guarda esta recomendación para escucharla con calma esta tarde. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cambio de color del cielo.",
    "buenasNoches": "El teléfono ya está casi sin batería, pero antes de que se apague quería mandarte esto. Que el descanso de esta noche sea reparador y silencioso. Y si pudiera cerrar este día contigo, escogería hacerte un café y dejarlo cerca de ti sin decir demasiado. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[MÚSICA] Canción: I Wanna Be Yours",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una noche con la ciudad respirando detrás de la ventana; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 48,
    "categoria": "A puerta cerrada",
    "icono": "🗝️",
    "tono": "hot",
    "color": {
      "principal": "#a10e35",
      "suave": "#f0aabd",
      "oscuro": "#140208"
    },
    "buenosDias": "Buenos días. Hay temas que prefiero hablar contigo sin que la pantalla se interponga. Hay algo peligrosamente bonito en saber que una persona te atrae y, al mismo tiempo, te da paz. Tú tienes esa combinación que me hace querer acercarme y quedarme.",
    "poema": [
      "No es que no confíe en el mensaje de texto, es que hay cosas que suenan mejor bajito, cerca, sin la distancia de por medio.",
      "Anota el tema pendiente. Cuando estemos solos, retomamos justo ahí.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "Prepárate, la lista de temas pendientes ya no es tan corta. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el aire fresco entrando por la ventana.",
    "buenasNoches": "Buenas noches, con la conversación pendiente todavía guardada bajo llave. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un automóvil detenido mientras termina una canción; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 49,
    "categoria": "Letra que falta",
    "icono": "🎤",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. Todavía no termino el café y ya te estoy escribiendo, para que veas el orden de prioridades que manejo. Folclor y modernidad unidos en una letra hermosa. Si hoy estuviéramos juntos, me gustaría que este día empezara en una calle que todavía no se llena de gente: el cansancio bonito después de un día compartido. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "Que bonito es quererte de esta forma tan libre,",
      "sin prisa pero sin pausa.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "Escúchala hoy y déjate envolver por su vibra. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cansancio bonito después de un día compartido.",
    "buenasNoches": "Hay una calma particular en las últimas horas del día que hace que todo se sienta más simple, más claro. Que la noche te abrace bonito. Y si pudiera cerrar este día contigo, escogería inventarnos un plan sencillo para cuando podamos vernos. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[MÚSICA] Canción: Tú Sí Sabes Querírmeme",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una calle que todavía no se llena de gente; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 50,
    "categoria": "Goblin",
    "icono": "⚔️",
    "tono": "filosofica",
    "color": {
      "principal": "#3a1f5c",
      "suave": "#c9b8e6",
      "oscuro": "#0c0716"
    },
    "buenosDias": "Buenos días. Otra recomendación de k-drama, esta vez con toque fantástico y bastante melancólico. Si hoy estuviéramos juntos, me gustaría que este día empezara en un parque casi vacío: la música escapándose de un parlante cercano. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "Es sobre un ser inmortal que busca la forma de terminar su existencia eterna, hasta que conoce a alguien que le hace querer quedarse un poco más.",
      "Se llama 'Goblin'. Fotografía preciosa, historia que pega fuerte.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "De esas series que dejan pensando varios días después de terminarlas. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la música escapándose de un parlante cercano.",
    "buenasNoches": "Buenas noches, con ganas de quedarme un poco más, como en la serie. Y si pudiera cerrar este día contigo, escogería dejar que el silencio haga su parte. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Un parque casi vacío; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 51,
    "categoria": "Recuerdos",
    "icono": "📸",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hay algo reconfortante en empezar el día sabiendo exactamente a quién le voy a escribir primero. Hoy pensé en todo lo que quiero quede guardado de nosotros. Si hoy estuviéramos juntos, me gustaría que este día empezara en una playa que todavía guarda calor en la arena: la tranquilidad de saber que alguien está ahí. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "Me gusta la idea de ir guardando momentos, no solo fechas importantes, también los días comunes.",
      "Quiero que tengamos muchas fotos de cosas sin razón especial, solo porque sí.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "Guarda hoy una foto de algo pequeño y bonito que veas, para nuestra colección. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí. Reto de recuerdos: cada uno manda una palabra que solo tenga sentido por algo que vivimos juntos. Sin explicar nada; el otro tiene que adivinar el recuerdo.",
    "buenasNoches": "El ruido del día por fin bajó de volumen, y en ese silencio es más fácil sentir las cosas con claridad. Buenas noches, otro recuerdo más guardado. Y si pudiera cerrar este día contigo, escogería elegir una película solo por la promesa de verla juntos. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "notaImagen": "[PARA TI] una foto de ustedes dos o de un recuerdo bonito.",
    "notaCancion": "[PARA TI] algo nostálgico.",
    "escenaInmersiva": "Una playa que todavía guarda calor en la arena; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 52,
    "categoria": "Ojitos Lindos",
    "icono": "👀",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. El día recién empieza a tomar forma, y ya sé que una parte buena de él tiene que ver contigo. Hoy quiero hablarte de una canción sobre encontrar consuelo en la mirada de alguien, incluso en los días tristes. Si hoy estuviéramos juntos, me gustaría que este día empezara en una habitación todavía en penumbra: el silencio cómodo que no necesita explicación. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "poema": [
      "Hay una canción de Bad Bunny y Bomba Estéreo que habla de lo bien que se siente estar cerca de alguien con 'ojitos lindos', incluso cuando el día no ha sido el mejor.",
      "Contigo cerca, hasta los días tristes se sienten más livianos.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Ojitos Lindos', de Bad Bunny y Bomba Estéreo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el silencio cómodo que no necesita explicación.",
    "buenasNoches": "El día se cierra, como siempre, con vos como el último pensamiento antes de apagar la luz. Buenas noches, con tus ojitos lindos todavía en la cabeza. Y si pudiera cerrar este día contigo, escogería recordar una conversación que todavía me hace sonreír. Me gusta pensar que porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "notaImagen": "[MÚSICA] Canción: Ojitos Lindos",
    "notaCancion": "[PARA TI] canción real: 'Ojitos Lindos' - Bad Bunny & Bomba Estéreo.",
    "escenaInmersiva": "Una habitación todavía en penumbra; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 53,
    "categoria": "Volumen alto",
    "icono": "🎧",
    "tono": "filosofica",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hay un tipo de silencio en las mañanas tempranas que se presta perfecto para pensar con calma, y hoy lo usé para pensar en ti. Un recordatorio musical de que el cariño cruza cualquier distancia. Si hoy estuviéramos juntos, me gustaría que este día empezara en un sofá con una manta compartida: la respiración tranquila cuando por fin baja el ruido del día. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "Aunque pasen los días y los kilómetros pesen,",
      "el pensamiento siempre vuelve al punto de partida.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "Ponla a sonar y mándame un mensajito cuando la escuches. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la respiración tranquila cuando por fin baja el ruido del día.",
    "buenasNoches": "Hay noches en que uno se queda despierto de más, y esta es una de esas, por pensar en ti un rato extra. Que descanses, soñando con lo que viene. Y si pudiera cerrar este día contigo, escogería guardar una frase tuya para recordarla después. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[MÚSICA] Canción: Sigo Extrañándote",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un sofá con una manta compartida; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 54,
    "categoria": "Sorpresas",
    "icono": "🎁",
    "tono": "amor",
    "color": {
      "principal": "#d1467f",
      "suave": "#ffc9dd",
      "oscuro": "#26060f"
    },
    "buenosDias": "Buenos días. Las primeras luces del día siempre me hacen pensar en empezar de cero, y hoy quise empezar pensando en ti. Hoy quiero que estés atenta a algo pequeño. Si hoy estuviéramos juntos, me gustaría que este día empezara en un domingo lento: el ruido lejano de la ciudad. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo me interesa más la experiencia que la perfección.",
    "poema": [
      "No todas las sorpresas tienen que ser grandes, a veces es solo un mensaje en el momento correcto.",
      "Espero que este cuente como una de esas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "Sorpréndete a ti misma hoy haciendo algo que se te antoje, sin razón. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el ruido lejano de la ciudad.",
    "buenasNoches": "La cama todavía está fría, pero el pensamiento de ti ya la calentó un poco. Buenas noches, con una sorpresa pequeña cumplida, espero. Y si pudiera cerrar este día contigo, escogería cocinar algo que salga imperfecto pero nuestro. Me gusta pensar que porque contigo me interesa más la experiencia que la perfección.",
    "notaImagen": "[PARA TI] algo sorpresa que le tengas preparado.",
    "notaCancion": "[PARA TI] algo divertido, inesperado.",
    "escenaInmersiva": "Un domingo lento; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 55,
    "categoria": "Favorito",
    "icono": "🎤",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. Hay mañanas que parecen prometer algo bueno desde el primer minuto, y esta es una de esas. Hoy quiero hablarte de una canción bien simple: la de ser el favorito de alguien. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cielo nublado que no termina de decidirse: ese segundo de silencio antes de decir algo que importa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "Hay una canción de Camilo que habla de eso, de ser la persona favorita de alguien, sin necesidad de más explicación.",
      "Tú eres mi favorita, así de simple, así de claro.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Favorito', de Camilo. Y espero, con la misma sinceridad, ser también tu favorito. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: ese segundo de silencio antes de decir algo que importa.",
    "buenasNoches": "El cansancio del día ya se siente en el cuerpo, pero pensar en ti siempre alivia un poco esa parte. Buenas noches, mi favorita, como siempre. Y si pudiera cerrar este día contigo, escogería hacerte reír con una tontería. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "cancionUrl": "https://www.youtube.com/watch?v=2mY7AFTtYwQ",
    "notaImagen": "[MÚSICA] Canción: Favorito",
    "notaCancion": "[PARA TI] canción real, con link real puesto para que suene ese día.",
    "escenaInmersiva": "Un cielo nublado que no termina de decidirse; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 56,
    "categoria": "Bridgerton",
    "icono": "🎻",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy va una serie de época, de esas con vestidos elegantes y tensión romántica que se estira episodios enteros. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cama desordenada después de una noche larga: la sombra de las hojas moviéndose sobre el suelo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque no quiero quererte solamente en los momentos fáciles.",
    "poema": [
      "Es sobre familias de la alta sociedad inglesa buscando pareja entre bailes, chismes y miradas que dicen más que las palabras.",
      "Se llama 'Bridgerton'. Guilty pleasure garantizado.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: bebida favorita, algo para picar y *Bridgerton* con las luces bajas. Regla coqueta: por cada escena de tensión romántica que ambos reconozcan, un beso. Si la tensión sube demasiado, pausa y arrunchis.",
    "buenasNoches": "Buenas noches, con miradas de época todavía en la cabeza. Y si pudiera cerrar este día contigo, escogería mirar el cielo y buscarle un nombre a la forma de una nube. Me gusta pensar que porque no quiero quererte solamente en los momentos fáciles. La mejor parte puede ser apagar la pantalla y quedarse un rato juntos, todavía con la música de la serie en la cabeza.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Una cama desordenada después de una noche larga; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 57,
    "categoria": "Permanencia",
    "icono": "⏳",
    "tono": "filosofica",
    "color": {
      "principal": "#4a1830",
      "suave": "#d9a7bd",
      "oscuro": "#120206"
    },
    "buenosDias": "Buenos días. Todavía no me tomo el café completo y ya voy por la mitad de este mensaje. Hoy quiero hablar de tiempo, del que ya pasó y del que planeo seguir sumando contigo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una esquina iluminada por el sol de la tarde: el sonido pequeño de una taza al tocar la mesa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "No mido esto en días perfectos, lo mido en ganas de seguir sumando más, incluso en los días comunes.",
      "Y las ganas, contigo, no se me han acabado ni un solo día.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "Aquí sigo, sumando tiempo contigo, sin planes de parar. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa.",
    "buenasNoches": "Hay un tipo de sueño que llega mejor cuando el último pensamiento del día fue bueno, y hoy lo fue, gracias a ti. Buenas noches, sumando un día más a esto que seguimos construyendo. Y si pudiera cerrar este día contigo, escogería caminar sin destino mientras hablamos. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Una esquina iluminada por el sol de la tarde; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 58,
    "categoria": "Shuffle",
    "icono": "🎤",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. Hay mañanas que se sienten como una hoja en blanco, y hoy decidí empezar la mía escribiéndote a ti. Baladas intensas para cerrar los últimos días con sentimiento. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina llena de pequeñas cosas por ordenar: la risa que llega antes que la respuesta. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "Quiero entregarte un amor completo y sin reservas,",
      "un refugio seguro ante cualquier tormenta.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Tómate las cosas con calma y no te dejes abrumar hoy. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la risa que llega antes que la respuesta.",
    "buenasNoches": "Las últimas luces de la casa ya se apagaron, y en la oscuridad, como siempre, apareciste tú primero en mis pensamientos. Que la noche te traiga calma absoluta. Y si pudiera cerrar este día contigo, escogería preguntarte qué fue lo primero que pensaste al despertar. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[MÚSICA] Canción: Amor Completo",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una cocina llena de pequeñas cosas por ordenar; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 59,
    "categoria": "Lugares",
    "icono": "🗺️",
    "tono": "filosofica",
    "color": {
      "principal": "#5c7d99",
      "suave": "#d4e3ee",
      "oscuro": "#0d1a24"
    },
    "buenosDias": "Buenos días. El aire todavía huele a noche cuando empiezo a escribirte esto. Hoy pensé en todos los lugares que quiero conocer contigo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina con la primera taza sobre la mesa: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Cada vez que veo un lugar con buena vista, pienso en lo bien que se vería contigo ahí.",
      "Vamos armando ese mapa de pendientes, poco a poco.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Agrega un lugar nuevo a nuestra lista de sitios por conocer. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el olor de algo recién hecho.",
    "buenasNoches": "Las estrellas, si es que se ven desde donde estás, tienen algo tuyo hoy, aunque suene un poco cursi decirlo así. Buenas noches, desde algún lugar imaginando el próximo destino. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[PARA TI] una foto de un lugar que quieran visitar.",
    "notaCancion": "[PARA TI] algo ambiental, para viajar con la mente.",
    "escenaInmersiva": "Una cocina con la primera taza sobre la mesa; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 60,
    "categoria": "Risas",
    "icono": "😂",
    "tono": "amor",
    "color": {
      "principal": "#f2a33d",
      "suave": "#ffe0b0",
      "oscuro": "#241a04"
    },
    "buenosDias": "Buenos días. El teléfono marcó la hora y, en automático, pensé en ti antes de pensar en cualquier pendiente del día. Hoy no hay poesía seria, hoy toca reírse. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa con dos vasos y algo pendiente de conversar: la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "Me encanta tu risa, en serio, es de mis sonidos favoritos en el mundo.",
      "Así que hoy la misión es simple: que te rías, aunque sea de algo tonto.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "Mándame el meme o chiste más tonto que encuentres hoy. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras.",
    "buenasNoches": "Hay una quietud distinta en las noches, de esas que invitan a pensar despacio en lo que de verdad importa. Buenas noches, con la sonrisa todavía puesta, espero. Y si pudiera cerrar este día contigo, escogería abrazarte antes de intentar resolver cualquier cosa. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[PARA TI] alguna foto graciosa de ustedes dos.",
    "notaCancion": "[PARA TI] algo alegre, para el buen humor.",
    "escenaInmersiva": "Una mesa con dos vasos y algo pendiente de conversar; la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras. abrazarte antes de intentar resolver cualquier cosa. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 61,
    "categoria": "La Casa de Papel",
    "icono": "🎭",
    "tono": "filosofica",
    "color": {
      "principal": "#c22b2b",
      "suave": "#f3b3b3",
      "oscuro": "#1a0505"
    },
    "buenosDias": "Buenos días. Hoy va una serie española que seguramente ya viste, pero siempre vale la pena repetir. Si hoy estuviéramos juntos, me gustaría que este día empezara en un día de semana que pide una pausa: la lluvia golpeando despacio los vidrios. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "poema": [
      "Es sobre un grupo que planea el atraco perfecto, con personajes que uno termina queriendo aunque estén haciendo algo completamente ilegal.",
      "Se llama 'La Casa de Papel'. La canción que usan de fondo va a quedarse sonando en tu cabeza días después.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "Si ya la viste, siempre se puede repetir algún capítulo favorito. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la lluvia golpeando despacio los vidrios.",
    "buenasNoches": "Buenas noches, planeando el próximo maratón de series. Y si pudiera cerrar este día contigo, escogería escuchar contigo una canción hasta el final. Me gusta pensar que porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Un día de semana que pide una pausa; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 62,
    "categoria": "Rayando el Sol",
    "icono": "☀️",
    "tono": "filosofica",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Hay una energía distinta en los días que empiezan escribiéndote, no sabría explicar bien por qué. Hoy quiero hablarte de una canción de rock en español sobre un amor tan intenso que se compara con el sol. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa llena de papelitos y recuerdos: el roce casual que termina sintiéndose importante. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Hay una canción de Maná que habla de un amor que quema, que no se puede controlar del todo, algo grande e imposible de ignorar.",
      "A veces siento que lo que tengo por ti se parece a eso: algo grande, que no cabe en explicaciones cortas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Rayando el Sol', de Maná. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante.",
    "buenasNoches": "Hay noches donde el cansancio gana rápido, y aun así encontré energía para pensarte un rato más. Buenas noches, con esa intensidad todavía rayando, como el sol de la canción. Y si pudiera cerrar este día contigo, escogería bailar contigo aunque no haya espacio. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[MÚSICA] Canción: Rayando el Sol",
    "notaCancion": "[PARA TI] canción real: 'Rayando el Sol' - Maná.",
    "escenaInmersiva": "Una mesa llena de papelitos y recuerdos; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 63,
    "categoria": "Travesura",
    "icono": "🍒",
    "tono": "hot",
    "color": {
      "principal": "#b3123f",
      "suave": "#f2b3c4",
      "oscuro": "#170209"
    },
    "buenosDias": "Buenos días, cómplice. Hoy amanecí con ganas de sacar esa versión tuya que solo aparece cuando cree que nadie está mirando. Hay mañanas en las que el cariño llega primero. Hoy llegó el deseo: esas ganas tranquilas de tenerte cerca, de mirarte sin prisa y de dejar que el resto del mundo espere un rato.",
    "poema": [
      "Sabes exactamente de cuál hablo: la que se ríe distinto, la que se acerca sin avisar, la que no se comporta del todo.",
      "Esa es mi favorita, para que conste.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "Sácala más seguido. Tienes permiso total de mi parte. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sensación de una mano buscando otra sin pensarlo.",
    "buenasNoches": "Buenas noches, traviesa. Mañana seguimos con esto, sin prisa por terminarlo. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un balcón donde el cielo cambia de color; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 64,
    "categoria": "Cómo Te Atreves",
    "icono": "💿",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. El café todavía está humeando cuando ya estoy pensando en qué decirte hoy. Hoy quiero hablarte de una canción sobre lo mucho que se extraña a alguien cuando no está. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cuarto con música bajita: una canción que parece llegar exactamente en el momento correcto. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "Hay una canción de Morat que habla de reclamarle, con cariño, a alguien que se fue, por lo mucho que se le extraña.",
      "Menos mal que contigo no tengo que reclamarte eso, porque no te has ido a ningún lado.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Cómo Te Atreves', de Morat. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "La luz de la lámpara es lo único encendido ya en este cuarto, y sigo aquí, pensando en cómo cerrar bien el día contigo en mente. Buenas noches, sin nada que reclamarte, todo bien como está. Y si pudiera cerrar este día contigo, escogería mirarte unos segundos más de lo necesario. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[MÚSICA] Canción: Cómo Te Atreves",
    "notaCancion": "[PARA TI] canción real: 'Cómo Te Atreves' - Morat.",
    "escenaInmersiva": "Un cuarto con música bajita; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 65,
    "categoria": "Complicidad",
    "icono": "🔥",
    "tono": "hot",
    "color": {
      "principal": "#d1163f",
      "suave": "#f7bccb",
      "oscuro": "#1c0409"
    },
    "buenosDias": "Buenos días, cómplice. Hoy quiero recordarte que lo nuestro tiene registros distintos, y todos son igual de reales. Hoy me gustaría robarte unos minutos sin planes ni teléfonos: solo tú, yo y esa clase de silencio que se vuelve demasiado íntimo cuando uno se gusta de verdad.",
    "poema": [
      "Podemos hablar de planes serios un minuto y al siguiente decir algo que solo los dos entendemos, sin que ninguno le reste valor al otro.",
      "Esa mezcla es exactamente lo que más disfruto de esto.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por dejarme mostrarte todas mis versiones, no solo la presentable. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el calor queda después de un abrazo.",
    "buenasNoches": "Buenas noches, cómplice, con ganas de todas esas versiones de nosotros otra vez. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un pasillo silencioso antes de dormir; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 66,
    "categoria": "Coro improvisado",
    "icono": "💿",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Antes de revisar cualquier otra cosa en el teléfono, ya estaba escribiéndote esto. Una melodía dulce para arrancar la mañana con una sonrisa. Si hoy estuviéramos juntos, me gustaría que este día empezara en una ventana abierta al aire fresco: la luz tibia que se queda unos segundos sobre la pared. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "Tú eres la mitad que le da sentido a mis días,",
      "la pieza que faltaba en este rompecabezas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por ser esa compañía tan bonita a la distancia. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la luz tibia que se queda unos segundos sobre la pared.",
    "buenasNoches": "Hay noches que se sienten largas y noches que se sienten cortas, y esta, contigo en la cabeza, se sintió de las buenas. Descansa profundamente, amor. Y si pudiera cerrar este día contigo, escogería dejarte una nota donde menos la esperes. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "notaImagen": "[MÚSICA] Canción: La Mitad",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una ventana abierta al aire fresco; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 67,
    "categoria": "Business Proposal",
    "icono": "💼",
    "tono": "hot",
    "color": {
      "principal": "#d1163f",
      "suave": "#f7bccb",
      "oscuro": "#1c0409"
    },
    "buenosDias": "Buenos días. Otro k-drama, esta vez de esos con tensión y comedia mezcladas de forma perfecta. Hoy me dieron ganas de escribirte antes de que el día terminara de despertarse. No solo porque te extraño: porque hay una parte de mí que disfruta imaginarte cerca, con esa mezcla tuya de calma y peligro que me desarma.",
    "poema": [
      "Es sobre una cita a ciegas que sale completamente distinta a lo planeado, con química que se nota desde el primer capítulo.",
      "Se llama 'Business Proposal'. Ligera, divertida, con suficiente tensión para mantener enganchado.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: hagan snacks antes de empezar *Business Proposal* y vean mínimo dos capítulos abrazados. Regla: quien se ría primero durante una escena romántica recibe un beso; quien diga 'qué lindos' pierde y recibe otro.",
    "buenasNoches": "Buenas noches, con ganas de ese maratón de capítulos, abrazados. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches. Si se les hace tarde, terminen el capítulo a medias: también es romántico tener una historia esperándolos para mañana.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un trayecto cualquiera que de pronto se vuelve especial; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 68,
    "categoria": "Ritmo propio",
    "icono": "🎼",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. El día apenas empieza a definirse, pero ya sé que una parte de él va a estar dedicada a pensar en ti. Acordes luminosos para arrancar el día con una sonrisa. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cafetería imaginaria donde solo estamos tú y yo: el aire fresco entrando por la ventana. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "Tú trajiste brillo a mis días más grises,",
      "convirtiéndote en la melodía que siempre quiero escuchar.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "Que nada te arrebate la sonrisa en todo el día. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el aire fresco entrando por la ventana. Juego de imaginación: completa “si hoy aparecieras en mi puerta, lo primero que haría sería…”. Una respuesta tierna, una graciosa y una un poquito coqueta.",
    "buenasNoches": "Hay una versión más honesta de mí que solo sale de noche, y esa versión también te quiere mucho. Cierra los ojos y descansa con paz. Y si pudiera cerrar este día contigo, escogería quedarme cerca mientras haces algo que te gusta. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[MÚSICA] Canción: Yellow",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una cafetería imaginaria donde solo estamos tú y yo; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 69,
    "categoria": "Auriculares compartidos",
    "icono": "🎧",
    "tono": "hot",
    "color": {
      "principal": "#a10e35",
      "suave": "#f0aabd",
      "oscuro": "#140208"
    },
    "buenosDias": "Buenos días. Anoche imaginé algo simple: los dos compartiendo un solo audífono, tan cerca que la música casi sobra. Hay mañanas en las que el cariño llega primero. Hoy llegó el deseo: esas ganas tranquilas de tenerte cerca, de mirarte sin prisa y de dejar que el resto del mundo espere un rato.",
    "poema": [
      "Hay una cercanía distinta cuando dos personas escuchan lo mismo casi oído con oído, sin necesitar decir nada durante la canción entera.",
      "Quiero esa escena contigo, pronto, real, sin pantallas de por medio.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "Trae tus audífonos la próxima vez. Ya tengo la canción elegida. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cansancio bonito después de un día compartido.",
    "buenasNoches": "Buenas noches, todavía imaginando esa cercanía tan simple. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un lugar cualquiera que se convierte en nuestro por compartirlo; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 70,
    "categoria": "Unplugged",
    "icono": "🎼",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. El cielo todavía tiene ese color raro de las mañanas que no se deciden entre gris y celeste. Baladas intensas para empezar el día con los sentimientos al tope. Si hoy estuviéramos juntos, me gustaría que este día empezara en una tarde que huele a lluvia: la música escapándose de un parlante cercano. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "Quiero darte amor completo y sin condiciones,",
      "un amor que rompa cualquier distancia.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "Guarda este momento musical para ti hoy. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la música escapándose de un parlante cercano.",
    "buenasNoches": "El día se despide con la misma certeza de siempre: que quiero que mañana empiece igual, pensando en ti primero. Que duermas rico. Y si pudiera cerrar este día contigo, escogería dejar que el silencio haga su parte. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "notaImagen": "[MÚSICA] Canción: Amor Completo",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una tarde que huele a lluvia; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 71,
    "categoria": "Antojo",
    "icono": "🍓",
    "tono": "hot",
    "color": {
      "principal": "#b3123f",
      "suave": "#f2b3c4",
      "oscuro": "#170209"
    },
    "buenosDias": "Buenos días. Hoy desperté con un antojo que ningún desayuno va a poder resolver. Hoy me gustaría robarte unos minutos sin planes ni teléfonos: solo tú, yo y esa clase de silencio que se vuelve demasiado íntimo cuando uno se gusta de verdad.",
    "poema": [
      "Hay antojos que se calman con comida y hay otros que solo se calman con una persona específica cerca, sin sustitutos posibles.",
      "Hoy es exactamente ese segundo tipo, y no tengo intención de disimularlo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "Anótalo: te debo consentirte como corresponde, sin apuro, cuando estemos cerca. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí.",
    "buenasNoches": "Buenas noches, con el antojo todavía sin resolver. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una noche con la ciudad respirando detrás de la ventana; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 72,
    "categoria": "Veinte Poemas de Amor",
    "icono": "📕",
    "tono": "amor",
    "color": {
      "principal": "#d81e3e",
      "suave": "#ffc2ce",
      "oscuro": "#2b0508"
    },
    "buenosDias": "Buenos días. Hoy quiero recomendarte un libro que seguramente ya conoces, pero que nunca sobra releer. Si hoy estuviéramos juntos, me gustaría que este día empezara en un automóvil detenido mientras termina una canción: el silencio cómodo que no necesita explicación. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "Es una colección de poemas que hablan del amor desde todos los ángulos posibles: la distancia, el cuerpo, la melancolía, la costumbre.",
      "Se llama 'Veinte poemas de amor y una canción desesperada', de Pablo Neruda. Un clásico que sigue pegando fuerte.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "Si tienes un poema favorito de ahí, cuéntame cuál es. Tengo curiosidad. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el silencio cómodo que no necesita explicación.",
    "buenasNoches": "Buenas noches, con ganas de leer poesía contigo en voz alta algún día. Y si pudiera cerrar este día contigo, escogería recordar una conversación que todavía me hace sonreír. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Un automóvil detenido mientras termina una canción; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 73,
    "categoria": "Bellacoso",
    "icono": "🎶",
    "tono": "hot",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Hoy quiero hablarte de una canción bastante directa sobre el deseo, sin vueltas ni disculpas. Hoy me dieron ganas de escribirte antes de que el día terminara de despertarse. No solo porque te extraño: porque hay una parte de mí que disfruta imaginarte cerca, con esa mezcla tuya de calma y peligro que me desarma.",
    "poema": [
      "Hay una canción de Residente y Bad Bunny que habla del deseo de una forma bien directa, sin pena, como algo normal entre dos personas que se gustan.",
      "Hoy tenía ganas de ser así de directo también.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Bellacoso', de Residente y Bad Bunny. El mismo Residente la describió como una canción sobre el deseo consensuado. Y espero que ese deseo también sea de los dos, no solo mío. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la respiración tranquila cuando por fin baja el ruido del día.",
    "buenasNoches": "Buenas noches, directo y sin pena, como siempre debería ser esto. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "cancionUrl": "https://www.youtube.com/watch?v=46rJ4y2kdow",
    "notaImagen": "[MÚSICA] Canción: Bellacoso",
    "notaCancion": "[PARA TI] canción real, con link real puesto para que suene ese día.",
    "escenaInmersiva": "Una calle que todavía no se llena de gente; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 74,
    "categoria": "Mañana contigo",
    "icono": "🧣",
    "tono": "amor",
    "color": {
      "principal": "#7d8fa6",
      "suave": "#dbe4ee",
      "oscuro": "#131a22"
    },
    "buenosDias": "Buenos días. Hay un tipo de calma particular en escribir esto antes de que el celular empiece a sonar con todo lo demás. Hoy no pienso en el mañana lejano, pienso en el mañana cercano, el de mañana mismo, contigo. Si hoy estuviéramos juntos, me gustaría que este día empezara en un parque casi vacío: el ruido lejano de la ciudad. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Me gusta tener un mañana asegurado contigo, aunque sea solo un mensaje de buenos días como este.",
      "Nos vemos mañana, otra vez, aquí.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "Ya quiero que sea mañana para escribirte de nuevo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el ruido lejano de la ciudad.",
    "buenasNoches": "Hay un silencio particular a esta hora que hace que las palabras pesen distinto, más sinceras. Buenas noches, hasta mañana, contigo de nuevo. Y si pudiera cerrar este día contigo, escogería cocinar algo que salga imperfecto pero nuestro. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[PARA TI] otra foto de un día cómodo y relajado.",
    "notaCancion": "[PARA TI] algo suave, para no hacer nada de fondo.",
    "escenaInmersiva": "Un parque casi vacío; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 75,
    "categoria": "Die For You",
    "icono": "🎵",
    "tono": "hot",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy quiero hablarte de una canción sobre la devoción que a veces da un poco de miedo admitir. Hay mañanas en las que el cariño llega primero. Hoy llegó el deseo: esas ganas tranquilas de tenerte cerca, de mirarte sin prisa y de dejar que el resto del mundo espere un rato.",
    "poema": [
      "Hay una canción de The Weeknd que habla de un amor tan grande que asusta un poco decirlo en voz alta, pero que se siente real de todas formas.",
      "No sé si llegaría tan lejos como dice la canción, pero la intensidad sí la entiendo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Die For You', de The Weeknd. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: ese segundo de silencio antes de decir algo que importa.",
    "buenasNoches": "Buenas noches, con toda esa intensidad todavía despierta. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "cancionUrl": "https://www.youtube.com/watch?v=gSo0YiGPgHk",
    "notaImagen": "[MÚSICA] Canción: Die For You",
    "notaCancion": "[PARA TI] canción real, con link real puesto para que suene ese día.",
    "escenaInmersiva": "Una playa que todavía guarda calor en la arena; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 76,
    "categoria": "La Reina",
    "icono": "👑",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. El sol todavía no calienta del todo, pero algo aquí adentro ya empezó a hacerlo. reina. Hoy quiero hablarte de una canción sobre tratar a alguien como se merece, aunque actúe como si no lo necesitara. Si hoy estuviéramos juntos, me gustaría que este día empezara en una habitación todavía en penumbra: la sombra de las hojas moviéndose sobre el suelo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "poema": [
      "Hay una canción de Maluma que habla de tratar como reina a alguien que por fuera parece no necesitar a nadie, pero que por dentro sí aprecia que la consientan.",
      "Contigo quiero eso: tratarte bien, aunque sepas arreglártelas sola perfectamente.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'La Reina', de Maluma. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sombra de las hojas moviéndose sobre el suelo.",
    "buenasNoches": "Hay algo tranquilizador en saber que, sin importar cómo estuvo el día, esto de escribirte de noche no cambia. Buenas noches, reina. Descansa como te mereces. Y si pudiera cerrar este día contigo, escogería mirar el cielo y buscarle un nombre a la forma de una nube. Me gusta pensar que porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "notaImagen": "[MÚSICA] Canción: La Reina",
    "notaCancion": "[PARA TI] canción real: 'La Reina' - Maluma.",
    "escenaInmersiva": "Una habitación todavía en penumbra; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 77,
    "categoria": "El Amor en los Tiempos del Cólera",
    "icono": "🌹",
    "tono": "amor",
    "color": {
      "principal": "#b3123f",
      "suave": "#f2b3c4",
      "oscuro": "#170209"
    },
    "buenosDias": "Buenos días. Hoy va una recomendación de un colombiano que sabía escribir sobre el amor mejor que casi nadie. Si hoy estuviéramos juntos, me gustaría que este día empezara en un sofá con una manta compartida: el sonido pequeño de una taza al tocar la mesa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Es la historia de un amor que espera más de cincuenta años para poder ser, contada con esa forma tan particular de escribir que tenía el autor.",
      "Se llama 'El amor en los tiempos del cólera', de Gabriel García Márquez. Larga, pero vale cada página.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "Uno de esos libros que hacen creer un poco más en la paciencia y en los tiempos correctos. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa.",
    "buenasNoches": "Buenas noches, creyendo un poco más en los tiempos correctos, gracias a este libro. Y si pudiera cerrar este día contigo, escogería caminar sin destino mientras hablamos. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Un sofá con una manta compartida; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 78,
    "categoria": "Morado",
    "icono": "💜",
    "tono": "amor",
    "color": {
      "principal": "#7b4fd1",
      "suave": "#dccafc",
      "oscuro": "#160a2b"
    },
    "buenosDias": "Buenos días. Hay mañanas silenciosas y mañanas ruidosas, y esta, por suerte, es de las tranquilas. Sé que el morado es tuyo, así que hoy el día también lo es. Si hoy estuviéramos juntos, me gustaría que este día empezara en un domingo lento: la risa que llega antes que la respuesta. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "El morado mezcla la calma del azul con la fuerza del rojo, y de alguna forma me recuerdas a esa mezcla exacta.",
      "Tranquila casi siempre, pero con un fuego que no se apaga cuando de verdad quieres algo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Hoy, si puedes, usa algo morado. Aunque sea sin razón. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la risa que llega antes que la respuesta.",
    "buenasNoches": "El silencio de la noche siempre hace que las cosas simples, como decir buenas noches, se sientan un poco más importantes. Buenas noches. Que sueñes en tu color favorito. Y si pudiera cerrar este día contigo, escogería preguntarte qué fue lo primero que pensaste al despertar. Me gusta pensar que porque elegirte también es aprender tus detalles.",
    "notaImagen": "[PARA TI] algo morado que te guste, ropa, flores, lo que sea.",
    "notaCancion": "[PARA TI] algo con ese mismo vibe: suave pero con carácter.",
    "escenaInmersiva": "Un domingo lento; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 79,
    "categoria": "Lo que no se dice",
    "icono": "🏖️",
    "tono": "filosofica",
    "color": {
      "principal": "#2ea3a3",
      "suave": "#c3f0ee",
      "oscuro": "#062020"
    },
    "buenosDias": "Buenos días. El ruido de la calle todavía no arranca del todo, y en ese pequeño espacio de calma te escribo esto. Hay cosas que siento y que casi nunca digo en voz alta, y hoy quería nombrar una. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cielo nublado que no termina de decidirse: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "A veces asumo que ya sabes cuánto me importas, y se me olvida decirlo directamente.",
      "Así que aquí está, directo: me importas más de lo que demuestro casi siempre.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Voy a intentar decir más seguido lo que normalmente me guardo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el olor de algo recién hecho.",
    "buenasNoches": "Hay algo bonito en cerrar el día pensando en la misma persona con la que se abrió, y hoy fue así otra vez. Buenas noches, con algo importante ya dicho, por fin. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[PARA TI] otra foto de playa o mar.",
    "notaCancion": "[PARA TI] algo costero, relajado.",
    "escenaInmersiva": "Un cielo nublado que no termina de decidirse; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 80,
    "categoria": "Siguiente canción",
    "icono": "🎵",
    "tono": "filosofica",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hay mañanas donde uno se siente con ganas de todo, y esta parece ser una de esas. A un solo paso de completar los doscientos días con la mejor música. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cama desordenada después de una noche larga: una canción de fondo y la sensación de que no hace falta hacer nada más. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "A punto de cruzar el último umbral de esta etapa,",
      "sabiendo que cada nota musical valió la pena.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "Prepara todo para mañana celebrar este hito juntos. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción de fondo y la sensación de que no hace falta hacer nada más.",
    "buenasNoches": "El día ya cumplió su ciclo completo, y como siempre, terminó pensando en la misma persona con la que empezó. Que duermas de la mejor manera. Y si pudiera cerrar este día contigo, escogería abrazarte antes de intentar resolver cualquier cosa. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[MÚSICA] Canción: Yellow",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una cama desordenada después de una noche larga; una canción de fondo y la sensación de que no hace falta hacer nada más. abrazarte antes de intentar resolver cualquier cosa. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 81,
    "categoria": "Películas",
    "icono": "🎬",
    "tono": "amor",
    "color": {
      "principal": "#c22b2b",
      "suave": "#f3b3b3",
      "oscuro": "#1a0505"
    },
    "buenosDias": "Buenos días. El despertador sonó dos veces antes de que lograra levantarme, y en el medio, sin darme cuenta, ya estaba pensando en ti. Hoy quiero proponerte una noche de películas, aunque sea en la imaginación por ahora. Si hoy estuviéramos juntos, me gustaría que este día empezara en una esquina iluminada por el sol de la tarde: la lluvia golpeando despacio los vidrios. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "Me gusta cómo te emocionas con las películas de amor, cómo te ríes con las comedias y cómo te quedas pensando después de un drama.",
      "Quiero ser parte de esas maratones, con palomitas y todo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: hagan una lista de cinco películas pendientes y dejen que una moneda decida la de hoy. Después, sofá, manta y algo dulce.",
    "buenasNoches": "Las luces de la calle ya se encendieron hace rato, y aquí sigo, pensando en ti antes de dormir. Buenas noches, que tengas sueños con final feliz. Y si pudiera cerrar este día contigo, escogería escuchar contigo una canción hasta el final. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura. La noche ideal no necesita una película perfecta; solo una que nos deje con ganas de quedarnos un rato más juntos.",
    "notaImagen": "[PARA TI] una foto de una noche de películas, o del póster de alguna que le guste.",
    "notaCancion": "[PARA TI] alguna banda sonora que le guste.",
    "escenaInmersiva": "Una esquina iluminada por el sol de la tarde; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 82,
    "categoria": "Delta de Venus",
    "icono": "🖋️",
    "tono": "hot",
    "color": {
      "principal": "#a10e35",
      "suave": "#f0aabd",
      "oscuro": "#140208"
    },
    "buenosDias": "Buenos días. Hoy va una recomendación un poco más atrevida, para esos días donde el ánimo pide algo distinto. Si estuvieras aquí, probablemente encontraría una excusa para quedarme un poco más cerca de ti. Hay personas que uno abraza por costumbre; contigo siempre aparece la tentación de no soltarte todavía.",
    "poema": [
      "Es una colección de relatos eróticos escritos con una prosa cuidada, nada vulgar, más bien sugerente y literaria.",
      "Se llama 'Delta de Venus', de Anaïs Nin. De esos libros que se leen despacio, sin apuro.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "No es para leer en el bus. O tal vez sí, tú decides qué tan atrevida te sientes hoy. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante.",
    "buenasNoches": "Buenas noches, con ganas de una lectura así de sugerente pronto. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una cocina llena de pequeñas cosas por ordenar; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 83,
    "categoria": "Gratitud",
    "icono": "🙏",
    "tono": "amor",
    "color": {
      "principal": "#e08fa0",
      "suave": "#fcdbe3",
      "oscuro": "#251015"
    },
    "buenosDias": "Buenos días. Hoy el despertar fue lento, de esos donde uno se queda un rato más en la cama solo pensando. Hoy no hay poema elaborado, solo quiero decir gracias. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina con la primera taza sobre la mesa: la sensación de una mano buscando otra sin pensarlo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "Gracias por dejarme ser parte de tu día a día, aunque sea a través de una pantalla la mayoría del tiempo.",
      "Gracias por tomarte el tiempo de leer esto, día tras día.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias, en serio, por estar. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sensación de una mano buscando otra sin pensarlo.",
    "buenasNoches": "Afuera ya no se escucha casi nada, solo el silencio típico de esta hora, cómodo, tranquilo. Buenas noches, agradecido de tenerte. Y si pudiera cerrar este día contigo, escogería preguntarte qué parte del día quieres guardar. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[PARA TI] algo que represente gratitud para ti.",
    "notaCancion": "[PARA TI] algo tranquilo y sincero.",
    "escenaInmersiva": "Una cocina con la primera taza sobre la mesa; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 84,
    "categoria": "Bis merecido",
    "icono": "🍒",
    "tono": "hot",
    "color": {
      "principal": "#d1163f",
      "suave": "#f7bccb",
      "oscuro": "#1c0409"
    },
    "buenosDias": "Buenos días. Hay momentos que se disfrutan tanto que la mente ya empieza a planear la repetición antes de que termine el primero. Hay algo peligrosamente bonito en saber que una persona te atrae y, al mismo tiempo, te da paz. Tú tienes esa combinación que me hace querer acercarme y quedarme.",
    "poema": [
      "No voy a decir a cuál me refiero con exactitud, pero algo me dice que tú también sabes exactamente cuál.",
      "Cuando quieras el bis, aquí sigo, con toda la disposición del mundo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Pide el bis cuando quieras. No pienso hacerme rogar. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "Buenas noches, pensando en repeticiones pendientes. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una mesa con dos vasos y algo pendiente de conversar; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 85,
    "categoria": "Ligereza",
    "icono": "🌞",
    "tono": "amor",
    "color": {
      "principal": "#f2b705",
      "suave": "#fff0b3",
      "oscuro": "#251c02"
    },
    "buenosDias": "Buenos días. Todavía hace frío afuera, pero aquí adentro algo ya se siente tibio desde temprano. Contigo todo se siente más ligero, hasta los días pesados. Si hoy estuviéramos juntos, me gustaría que este día empezara en un día de semana que pide una pausa: el calor queda después de un abrazo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "No sé exactamente cómo lo haces, pero hablar contigo le quita peso a cualquier día difícil.",
      "Gracias por aligerar mis días sin siquiera intentarlo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "Espero poder hacer lo mismo por ti cuando lo necesites. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el calor queda después de un abrazo. Mini juego: cada uno describe una cita perfecta usando solo cinco palabras. Después comparan las dos versiones y rescatan las mejores partes para construir una sexta palabra imaginaria.",
    "buenasNoches": "El ruido de afuera bajó por completo, y en ese silencio hay espacio de sobra para pensar en ti con calma. Buenas noches, más liviano gracias a ti. Y si pudiera cerrar este día contigo, escogería pedirte que me cuentes una historia que nunca me hayas contado. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "notaImagen": "[PARA TI] otra foto de girasoles o un atardecer.",
    "notaCancion": "[PARA TI] algo alegre, para el buen ánimo.",
    "escenaInmersiva": "Un día de semana que pide una pausa; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 86,
    "categoria": "Mirada",
    "icono": "👀",
    "tono": "hot",
    "color": {
      "principal": "#b3123f",
      "suave": "#f2b3c4",
      "oscuro": "#170209"
    },
    "buenosDias": "Buenos días. Hay una forma en que a veces me miras que tiene un efecto que no debería tener tan temprano en el día. Hoy te confieso algo sencillo: me encanta mirarte. No solo cuando estás arreglada, sino también cuando estás distraída, recién despierta o haciendo cualquier cosa que no creas que alguien está observando.",
    "poema": [
      "No hace falta que digas nada cuando me miras así. El mensaje ya llega completo, sin necesidad de palabras.",
      "Y yo, sin poder evitarlo, respondo exactamente como sabes que voy a responder.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "Sabes perfectamente lo que provoca esa mirada. No te hagas la inocente conmigo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la luz tibia que se queda unos segundos sobre la pared.",
    "buenasNoches": "Buenas noches, todavía pensando en esa mirada de hoy. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una mesa llena de papelitos y recuerdos; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 87,
    "categoria": "Casa",
    "icono": "🏚️",
    "tono": "filosofica",
    "color": {
      "principal": "#6b2142",
      "suave": "#e3b8c9",
      "oscuro": "#180509"
    },
    "buenosDias": "Buenos días. El primer pensamiento coherente del día, antes que cualquier lista de pendientes, fue sobre ti. No sé bien qué es un hogar, pero sé que se parece mucho a hablar contigo. Si hoy estuviéramos juntos, me gustaría que este día empezara en un balcón donde el cielo cambia de color: el cambio de color del cielo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "No hace falta una casa con paredes para sentirse en un lugar seguro, a veces el hogar es una persona.",
      "Tú eres el mío, sin importar en qué ciudad estemos cada uno.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por ser mi lugar seguro, sin importar la distancia. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cambio de color del cielo.",
    "buenasNoches": "El cielo ya está completamente oscuro, y en algún lugar de ahí arriba hay una estrella que, según decidí hoy, es tuya. Buenas noches, en casa, aunque sea a la distancia. Y si pudiera cerrar este día contigo, escogería hacerte un café y dejarlo cerca de ti sin decir demasiado. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Un balcón donde el cielo cambia de color; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 88,
    "categoria": "Poemas de Sabines",
    "icono": "🕯️",
    "tono": "filosofica",
    "color": {
      "principal": "#6b2142",
      "suave": "#e3b8c9",
      "oscuro": "#180509"
    },
    "buenosDias": "Buenos días. Hoy quiero recomendarte a un poeta mexicano que escribía sobre el amor sin adornos innecesarios, directo al hueso. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cuarto con música bajita: el aire fresco entrando por la ventana. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "Sus poemas hablan de amor con una honestidad que a veces incomoda un poco, de esas que se sienten reales en vez de bonitas nada más.",
      "Se llama Jaime Sabines. Busca 'Los amorosos' cuando tengas tiempo tranquilo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "No es poesía fácil de digerir rápido. Se disfruta mejor despacio. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el aire fresco entrando por la ventana.",
    "buenasNoches": "Buenas noches, con ganas de leer algo honesto y directo contigo. Y si pudiera cerrar este día contigo, escogería quedarme cerca mientras haces algo que te gusta. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Un cuarto con música bajita; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 89,
    "categoria": "Futuro",
    "icono": "🔭",
    "tono": "amor",
    "color": {
      "principal": "#3f5fd1",
      "suave": "#c9d3fa",
      "oscuro": "#0a1030"
    },
    "buenosDias": "Buenos días. Afuera el día apenas se estira, y aquí ya estoy yo, pensando en ti antes que en cualquier otra cosa. Hoy quiero hablar un poco del futuro, sin miedo. Si hoy estuviéramos juntos, me gustaría que este día empezara en un pasillo silencioso antes de dormir: el cansancio bonito después de un día compartido. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "No sé exactamente cómo se va a ver todo, pero me gusta la idea de que tú estés en el dibujo.",
      "Quiero construir cosas contigo, no solo imaginarlas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "Cuéntame un sueño tuyo, de esos grandes, algún día. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cansancio bonito después de un día compartido.",
    "buenasNoches": "Las cobijas ya están listas, y en un rato, cuando cierre los ojos, sé exactamente en quién voy a pensar. Buenas noches, soñando en la misma dirección. Y si pudiera cerrar este día contigo, escogería inventarnos un plan sencillo para cuando podamos vernos. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[PARA TI] algo que represente un sueño o meta en común.",
    "notaCancion": "[PARA TI] algo inspirador.",
    "escenaInmersiva": "Un pasillo silencioso antes de dormir; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 90,
    "categoria": "Introspección",
    "icono": "🍃",
    "tono": "filosofica",
    "color": {
      "principal": "#3f8f5f",
      "suave": "#c0e8cf",
      "oscuro": "#0a1f11"
    },
    "buenosDias": "Buenos días. Hay una calma particular en las primeras horas, antes de que el ruido del día se meta por todos lados. Hoy amanecí más callado de lo normal, pensando en nosotros de una forma distinta. Si hoy estuviéramos juntos, me gustaría que este día empezara en una ventana abierta al aire fresco: la música escapándose de un parlante cercano. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "A veces pienso en todo lo que ha cambiado desde que empezamos esto, y no logro encontrar nada de qué arrepentirme.",
      "Eso, para mí, ya dice bastante.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por ser parte de mis pensamientos más tranquilos, no solo de los emocionados. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la música escapándose de un parlante cercano.",
    "buenasNoches": "Las cosas del día ya quedaron atrás, y lo único que sigue presente, como siempre, eres tú. Buenas noches, en calma, pensando en lo bien que va esto. Y si pudiera cerrar este día contigo, escogería dejar que el silencio haga su parte. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[PARA TI] otra foto de naturaleza, quizás de algún viaje o caminata.",
    "notaCancion": "[PARA TI] algo orgánico, con sonidos naturales de fondo.",
    "escenaInmersiva": "Una ventana abierta al aire fresco; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 91,
    "categoria": "Vistas",
    "icono": "🏞️",
    "tono": "filosofica",
    "color": {
      "principal": "#5c7d99",
      "suave": "#d4e3ee",
      "oscuro": "#0d1a24"
    },
    "buenosDias": "Buenos días. Hay una quietud bonita en las mañanas de entre semana que casi nadie aprovecha, y hoy la usé para esto. Hoy pensé en esos lugares tranquilos con vista bonita que tanto te gustan. Si hoy estuviéramos juntos, me gustaría que este día empezara en un trayecto cualquiera que de pronto se vuelve especial: la tranquilidad de saber que alguien está ahí. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "poema": [
      "Me gusta que te guste la soledad bonita, esos lugares donde no hay ruido pero sí mucho para ver.",
      "Quiero encontrar esos lugares contigo, aunque sea en silencio, aunque sea sin decir nada.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "Hagamos una lista de lugares con buena vista para ir conociendo juntos. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí.",
    "buenasNoches": "El día terminó, con sus cosas buenas y sus cosas normales, pero contigo en la mente el balance siempre sale bien. Buenas noches, que tu mente viaje a algún lugar tranquilo. Y si pudiera cerrar este día contigo, escogería elegir una película solo por la promesa de verla juntos. Me gusta pensar que porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "notaImagen": "[PARA TI] una foto de un mirador o paisaje que le guste.",
    "notaCancion": "[PARA TI] algo ambiental, de esas para contemplar.",
    "escenaInmersiva": "Un trayecto cualquiera que de pronto se vuelve especial; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 92,
    "categoria": "Bajo volumen",
    "icono": "🔥",
    "tono": "hot",
    "color": {
      "principal": "#e0294f",
      "suave": "#ffc9d6",
      "oscuro": "#20050b"
    },
    "buenosDias": "Buenos días. Hoy quiero hablarte bajito, como se hablan las cosas que son solo entre dos personas. Hoy te confieso algo sencillo: me encanta mirarte. No solo cuando estás arreglada, sino también cuando estás distraída, recién despierta o haciendo cualquier cosa que no creas que alguien está observando.",
    "poema": [
      "No todo necesita volumen alto para tener peso. Algunas frases suenan mejor casi en susurro, cerca del oído, sin prisa por terminar.",
      "Así quiero decirte lo de hoy: despacio, bajito, cerca.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "Acércate cuando quieras que te lo repita en persona. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el silencio cómodo que no necesita explicación.",
    "buenasNoches": "Buenas noches, con la voz todavía baja, pensando en ti. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una cafetería imaginaria donde solo estamos tú y yo; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 93,
    "categoria": "Poemas de Benedetti",
    "icono": "📗",
    "tono": "amor",
    "color": {
      "principal": "#4fa66b",
      "suave": "#c8ecd4",
      "oscuro": "#0a2013"
    },
    "buenosDias": "Buenos días. Hoy va un poeta uruguayo que escribía sobre el amor cotidiano, el de todos los días, no solo el de las grandes ocasiones. Si hoy estuviéramos juntos, me gustaría que este día empezara en un lugar cualquiera que se convierte en nuestro por compartirlo: la respiración tranquila cuando por fin baja el ruido del día. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "Sus poemas hablan de amores que se construyen despacio, con humor, con ternura, sin necesidad de grandes dramas.",
      "Se llama Mario Benedetti. 'Táctica y estrategia' es un buen punto de partida.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "De esos poetas que hacen sentir que el amor normal también es suficiente. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la respiración tranquila cuando por fin baja el ruido del día.",
    "buenasNoches": "Buenas noches, creyendo en el amor de todos los días, como el que tenemos. Y si pudiera cerrar este día contigo, escogería guardar una frase tuya para recordarla después. Me gusta pensar que porque elegirte también es aprender tus detalles.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Un lugar cualquiera que se convierte en nuestro por compartirlo; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 94,
    "categoria": "Nuestro ritmo",
    "icono": "🐚",
    "tono": "filosofica",
    "color": {
      "principal": "#1d8f8f",
      "suave": "#b9ecec",
      "oscuro": "#041a1a"
    },
    "buenosDias": "Buenos días. Hoy me desperté antes de la alarma, y en ese ratito extra, sin planearlo, ya estaba pensando en ti. Cada relación tiene su propio ritmo, y me gusta el que hemos encontrado nosotros. Si hoy estuviéramos juntos, me gustaría que este día empezara en una tarde que huele a lluvia: el ruido lejano de la ciudad. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "No vamos ni muy rápido ni muy lento, vamos al ritmo que se siente correcto para los dos.",
      "Quiero que sigamos así, a nuestro paso, sin comparar con nadie más.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por construir este ritmo conmigo, sin apuros externos. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el ruido lejano de la ciudad.",
    "buenasNoches": "El silencio de la casa a esta hora es distinto a cualquier otro momento del día, más íntimo, más real. Buenas noches, al ritmo que se siente bien para los dos. Y si pudiera cerrar este día contigo, escogería cocinar algo que salga imperfecto pero nuestro. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[PARA TI] otra foto de playa o algo relacionado al mar.",
    "notaCancion": "[PARA TI] algo con sonido de olas o ambiente costero.",
    "escenaInmersiva": "Una tarde que huele a lluvia; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 95,
    "categoria": "Compás lento",
    "icono": "🎧",
    "tono": "filosofica",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hay una luz particular en las mañanas de esta semana, de esas que entran de lado y hacen que todo se vea un poco más honesto. Pop romántico para dedicar a distancia. Si hoy estuviéramos juntos, me gustaría que este día empezara en una noche con la ciudad respirando detrás de la ventana: ese segundo de silencio antes de decir algo que importa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "Tal como eres me encantas, sin cambiarle nada,",
      "porque cada detalle tuyo es perfecto para mí.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Guarda esta energía para cuando nos encontremos. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: ese segundo de silencio antes de decir algo que importa.",
    "buenasNoches": "El día ya se apagó casi del todo, y antes de cerrar los ojos quería dejarte esto. Que duermas bien, sabiendo que eres lo último en lo que pienso. Y si pudiera cerrar este día contigo, escogería hacerte reír con una tontería. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[MÚSICA] Canción: Just the Way You Are",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una noche con la ciudad respirando detrás de la ventana; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 96,
    "categoria": "Abrazo",
    "icono": "🌼",
    "tono": "amor",
    "color": {
      "principal": "#ff6f3d",
      "suave": "#ffd0b8",
      "oscuro": "#2b1104"
    },
    "buenosDias": "Buenos días. Hay días que empiezan con prisa y días que empiezan despacio, y este es de los segundos, justo lo que necesitaba. Hoy quiero mandarte un abrazo, aunque sea de los que no se sienten físicamente. Si hoy estuviéramos juntos, me gustaría que este día empezara en un automóvil detenido mientras termina una canción: la sombra de las hojas moviéndose sobre el suelo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "Hay abrazos que se dan con los brazos y abrazos que se dan con las palabras, y hoy te mando de los dos.",
      "Cuando nos veamos, te debo el físico también, y largo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "Considera este mensaje un abrazo apretado, de esos que no sueltan rápido. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sombra de las hojas moviéndose sobre el suelo.",
    "buenasNoches": "El teléfono ya está casi sin batería, pero antes de que se apague quería mandarte esto. Buenas noches, abrazada, aunque sea a la distancia. Y si pudiera cerrar este día contigo, escogería mirar el cielo y buscarle un nombre a la forma de una nube. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "notaImagen": "[PARA TI] otra foto de gerberas o flores de colores.",
    "notaCancion": "[PARA TI] algo animado, para el buen ánimo.",
    "escenaInmersiva": "Un automóvil detenido mientras termina una canción; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 97,
    "categoria": "Tazas compartidas",
    "icono": "📖",
    "tono": "filosofica",
    "color": {
      "principal": "#6b2142",
      "suave": "#e3b8c9",
      "oscuro": "#180509"
    },
    "buenosDias": "Buenos días. Todavía no termino el café y ya te estoy escribiendo, para que veas el orden de prioridades que manejo. Hoy imaginé algo simple: los dos compartiendo una taza de algo caliente, sin prisa. Si hoy estuviéramos juntos, me gustaría que este día empezara en una calle que todavía no se llena de gente: el sonido pequeño de una taza al tocar la mesa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "poema": [
      "Hay conversaciones que se dan mejor con algo caliente entre las manos, sin pantallas de por medio.",
      "Quiero tener esa escena contigo pronto, real.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "¿Café o té? Quiero saber para cuando planeemos esa escena. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa.",
    "buenasNoches": "Hay una calma particular en las últimas horas del día que hace que todo se sienta más simple, más claro. Buenas noches, con ganas de esa taza compartida pronto. Y si pudiera cerrar este día contigo, escogería caminar sin destino mientras hablamos. Me gusta pensar que porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "notaImagen": "[PARA TI] otra foto de libros o lectura.",
    "notaCancion": "[PARA TI] algo con atmósfera de cierre.",
    "escenaInmersiva": "Una calle que todavía no se llena de gente; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 98,
    "categoria": "Las Edades de Lulú",
    "icono": "🔥",
    "tono": "hot",
    "color": {
      "principal": "#c81d4a",
      "suave": "#f7c0d0",
      "oscuro": "#1a0308"
    },
    "buenosDias": "Buenos días. Otra recomendación con más temperatura, de una escritora española que no le tenía miedo a lo explícito bien escrito. Hoy te confieso algo sencillo: me encanta mirarte. No solo cuando estás arreglada, sino también cuando estás distraída, recién despierta o haciendo cualquier cosa que no creas que alguien está observando.",
    "poema": [
      "Es la historia de un despertar sexual contado sin pena, con una prosa que sorprende por lo bien construida que está incluso en las partes más atrevidas.",
      "Se llama 'Las edades de Lulú', de Almudena Grandes.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Polémico en su momento, pero literariamente bien logrado. Juzga tú misma. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la risa que llega antes que la respuesta.",
    "buenasNoches": "Buenas noches, con curiosidad literaria y algo más despierta. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un parque casi vacío; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 99,
    "categoria": "Naturaleza",
    "icono": "🌿",
    "tono": "filosofica",
    "color": {
      "principal": "#4fa66b",
      "suave": "#c8ecd4",
      "oscuro": "#0a2013"
    },
    "buenosDias": "Buenos días. Hay algo reconfortante en empezar el día sabiendo exactamente a quién le voy a escribir primero. Hoy quiero que salgas, aunque sea un rato, a ver algo verde. Si hoy estuviéramos juntos, me gustaría que este día empezara en una playa que todavía guarda calor en la arena: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo me interesa más la experiencia que la perfección.",
    "poema": [
      "Me gusta cómo te pones cuando estás rodeada de naturaleza, como si el ruido de todo lo demás por fin se apagara.",
      "Quiero verte así más seguido.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Cuando podamos, busquemos un lugar con mucho verde y nos quedamos ahí sin apuro. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el olor de algo recién hecho.",
    "buenasNoches": "El ruido del día por fin bajó de volumen, y en ese silencio es más fácil sentir las cosas con claridad. Buenas noches, que descanses como se descansa después de un buen paseo. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque contigo me interesa más la experiencia que la perfección.",
    "notaImagen": "[PARA TI] una foto de un paisaje natural que les guste.",
    "notaCancion": "[PARA TI] algo acústico, tranquilo.",
    "escenaInmersiva": "Una playa que todavía guarda calor en la arena; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 100,
    "categoria": "Propuesta Indecente",
    "icono": "🥂",
    "tono": "hot",
    "color": {
      "principal": "#a10e35",
      "suave": "#f0aabd",
      "oscuro": "#140208"
    },
    "buenosDias": "Buenos días. Hoy quiero hablarte de una canción que pide, sin rodeos, un compromiso completo y exclusivo. Si estuvieras aquí, probablemente encontraría una excusa para quedarme un poco más cerca de ti. Hay personas que uno abraza por costumbre; contigo siempre aparece la tentación de no soltarte todavía.",
    "poema": [
      "Hay una canción de Romeo Santos que habla de pedirle a alguien una entrega total, sin compartir, sin medias tintas, un compromiso serio y apasionado a la vez.",
      "No sé si llamarlo 'indecente', pero sí sé que quiero ese nivel de entrega contigo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Propuesta Indecente', de Romeo Santos. Yo te ofrezco esa entrega completa, y también la espero de tu parte, sin dividir esto con nadie más. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una manta compartida y dos pies buscando sitio debajo.",
    "buenasNoches": "Buenas noches, con la propuesta todavía sobre la mesa. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[MÚSICA] Canción: Propuesta Indecente",
    "notaCancion": "[PARA TI] canción real: 'Propuesta Indecente' - Romeo Santos.",
    "escenaInmersiva": "Una habitación todavía en penumbra; una manta compartida y dos pies buscando sitio debajo. abrazarte antes de intentar resolver cualquier cosa. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 101,
    "categoria": "Volví a Nacer",
    "icono": "🌅",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. El día recién empieza a tomar forma, y ya sé que una parte buena de él tiene que ver contigo. Hoy quiero hablarte de una canción costeña sobre sentir que la vida cambia completamente gracias a alguien. Si hoy estuviéramos juntos, me gustaría que este día empezara en un sofá con una manta compartida: la lluvia golpeando despacio los vidrios. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque no quiero quererte solamente en los momentos fáciles.",
    "poema": [
      "Hay una canción de Carlos Vives que habla de sentirse renacer, de ver la vida distinta después de que alguien especial llegó a ella.",
      "Contigo siento un poco de eso: como si ciertas partes de mi vida hubieran mejorado solo por tenerte cerca.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Volví a Nacer', de Carlos Vives. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la lluvia golpeando despacio los vidrios.",
    "buenasNoches": "El día se cierra, como siempre, con vos como el último pensamiento antes de apagar la luz. Buenas noches, sintiendo que la vida mejoró, gracias a ti. Y si pudiera cerrar este día contigo, escogería escuchar contigo una canción hasta el final. Me gusta pensar que porque no quiero quererte solamente en los momentos fáciles.",
    "notaImagen": "[MÚSICA] Canción: Volví a Nacer",
    "notaCancion": "[PARA TI] canción real: 'Volví a Nacer' - Carlos Vives.",
    "escenaInmersiva": "Un sofá con una manta compartida; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 102,
    "categoria": "Presente",
    "icono": "🍬",
    "tono": "amor",
    "color": {
      "principal": "#a9713f",
      "suave": "#ecd2ae",
      "oscuro": "#20130a"
    },
    "buenosDias": "Buenos días. Hay un tipo de silencio en las mañanas tempranas que se presta perfecto para pensar con calma, y hoy lo usé para pensar en ti. Hoy quiero estar aquí, en este momento contigo, sin pensar en nada más. Si hoy estuviéramos juntos, me gustaría que este día empezara en un domingo lento: el roce casual que termina sintiéndose importante. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "Me cuesta a veces estar solo presente, sin pensar en lo que sigue, pero contigo se me hace más fácil.",
      "Hoy elijo estar aquí, contigo, nada más.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por ayudarme a estar presente, sin tantas vueltas en la cabeza. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante. Juego de palabras: “te reconocería incluso si…” y cada uno completa la frase con tres situaciones imposibles. La idea es ver qué detalles del otro ya tenemos grabados.",
    "buenasNoches": "Hay noches en que uno se queda despierto de más, y esta es una de esas, por pensar en ti un rato extra. Buenas noches, presente, contigo, hasta el final del día. Y si pudiera cerrar este día contigo, escogería bailar contigo aunque no haya espacio. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[PARA TI] otra foto de dulces, postres o algo así.",
    "notaCancion": "[PARA TI] algo alegre y liviano.",
    "escenaInmersiva": "Un domingo lento; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 103,
    "categoria": "Todo de Ti",
    "icono": "🌊",
    "tono": "hot",
    "color": {
      "principal": "#c81d4a",
      "suave": "#f7c0d0",
      "oscuro": "#1a0308"
    },
    "buenosDias": "Buenos días. Hoy quiero hablarte de una canción sobre gustar de alguien por completo, sin poder señalar una sola cosa favorita. Hoy me dieron ganas de escribirte antes de que el día terminara de despertarse. No solo porque te extraño: porque hay una parte de mí que disfruta imaginarte cerca, con esa mezcla tuya de calma y peligro que me desarma.",
    "poema": [
      "Hay una canción de Rauw Alejandro que habla de querer dar todo de uno mismo y, a la vez, recibir todo de la otra persona igual, sin medias tintas.",
      "Eso es justo lo que quiero contigo: no una parte, todo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Todo de Ti', de Rauw Alejandro. Yo te doy todo de mí, y también quiero todo de ti, en la misma medida, sin que ninguno se quede corto. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sensación de una mano buscando otra sin pensarlo.",
    "buenasNoches": "Buenas noches, con ganas de seguir dándolo todo, y de recibirlo también. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[MÚSICA] Canción: Todo de Ti",
    "notaCancion": "[PARA TI] canción real: 'Todo de Ti' - Rauw Alejandro.",
    "escenaInmersiva": "Un cielo nublado que no termina de decidirse; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 104,
    "categoria": "El Buen Hijo",
    "icono": "🗝️",
    "tono": "filosofica",
    "color": {
      "principal": "#3a1f5c",
      "suave": "#c9b8e6",
      "oscuro": "#0c0716"
    },
    "buenosDias": "Buenos días. Hoy quiero recomendarte un libro bien distinto a los demás, de esos oscuros y perturbadores que sé que también disfrutas. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cama desordenada después de una noche larga: una canción que parece llegar exactamente en el momento correcto. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Es un thriller psicológico coreano sobre un hombre con amnesia que despierta junto al cuerpo de su madre, sin poder confiar del todo en su propia memoria.",
      "Se llama 'El buen hijo', de You-Jeong Jeong. Empieza lento y termina siendo imposible de soltar.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Un libro que no te va a dejar dormir tranquila, en el buen sentido de la frase. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "Buenas noches, con la mente todavía dándole vueltas a una buena historia oscura. Y si pudiera cerrar este día contigo, escogería mirarte unos segundos más de lo necesario. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Una cama desordenada después de una noche larga; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 105,
    "categoria": "Caminar despacio",
    "icono": "🖼️",
    "tono": "filosofica",
    "color": {
      "principal": "#e0a63d",
      "suave": "#ffe3b0",
      "oscuro": "#241a04"
    },
    "buenosDias": "Buenos días. Las primeras luces del día siempre me hacen pensar en empezar de cero, y hoy quise empezar pensando en ti. Hoy no tengo apuro por nada, ni siquiera por esto. Si hoy estuviéramos juntos, me gustaría que este día empezara en una esquina iluminada por el sol de la tarde: el calor queda después de un abrazo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "Hay cosas que se disfrutan más caminando despacio, sin correr para llegar a ningún lado en particular.",
      "Contigo prefiero caminar despacio, disfrutando cada parte del camino.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "No hay afán, vamos a nuestro paso, como debe ser. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el calor queda después de un abrazo.",
    "buenasNoches": "La cama todavía está fría, pero el pensamiento de ti ya la calentó un poco. Buenas noches, caminando despacio, sin apuro, contigo. Y si pudiera cerrar este día contigo, escogería pedirte que me cuentes una historia que nunca me hayas contado. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[PARA TI] otra foto de arte o de algo creativo suyo.",
    "notaCancion": "[PARA TI] algo artístico, con textura.",
    "escenaInmersiva": "Una esquina iluminada por el sol de la tarde; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 106,
    "categoria": "Gerbera",
    "icono": "🌸",
    "tono": "amor",
    "color": {
      "principal": "#ff8a3d",
      "suave": "#ffd9b8",
      "oscuro": "#2b1404"
    },
    "buenosDias": "Buenos días. Hay mañanas que parecen prometer algo bueno desde el primer minuto, y esta es una de esas. alegría. Hoy va dedicado a tu forma de iluminar todo lo que tocas. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina llena de pequeñas cosas por ordenar: la luz tibia que se queda unos segundos sobre la pared. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "poema": [
      "La gerbera es de las flores más alegres que existen, de colores que no piden permiso para destacar.",
      "Así eres tú: no necesitas esforzarte para alegrar un lugar, simplemente llegas y ya cambia todo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "Significado de la gerbera: alegría y optimismo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la luz tibia que se queda unos segundos sobre la pared.",
    "buenasNoches": "El cansancio del día ya se siente en el cuerpo, pero pensar en ti siempre alivia un poco esa parte. Buenas noches. Que mañana sigas siendo esa luz sin siquiera intentarlo. Y si pudiera cerrar este día contigo, escogería dejarte una nota donde menos la esperes. Me gusta pensar que porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "notaImagen": "[PARA TI] una foto de gerberas de colores.",
    "notaCancion": "[PARA TI] algo alegre, para bailar en la cocina.",
    "escenaInmersiva": "Una cocina llena de pequeñas cosas por ordenar; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 107,
    "categoria": "Good News",
    "icono": "💿",
    "tono": "filosofica",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Todavía no me tomo el café completo y ya voy por la mitad de este mensaje. Hoy quiero hablarte de una canción sobre buscar calma en medio del ruido de la cabeza. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina con la primera taza sobre la mesa: el cambio de color del cielo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Hay una canción de Mac Miller que habla de la presión de siempre estar esperando algo bueno, y del cansancio que eso puede traer.",
      "Contigo cerca, la espera de esas buenas noticias se siente menos pesada.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Good News', de Mac Miller. Tranquila, para escuchar sin afán. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cambio de color del cielo.",
    "buenasNoches": "Hay un tipo de sueño que llega mejor cuando el último pensamiento del día fue bueno, y hoy lo fue, gracias a ti. Buenas noches, esperando buenas noticias, más tranquilo gracias a ti. Y si pudiera cerrar este día contigo, escogería hacerte un café y dejarlo cerca de ti sin decir demasiado. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[MÚSICA] Canción: Good News",
    "notaCancion": "[PARA TI] canción real: 'Good News' - Mac Miller.",
    "escenaInmersiva": "Una cocina con la primera taza sobre la mesa; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 108,
    "categoria": "Yellow",
    "icono": "💛",
    "tono": "filosofica",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hay mañanas que se sienten como una hoja en blanco, y hoy decidí empezar la mía escribiéndote a ti. Hoy quiero hablarte de una canción que compara a alguien con algo tan grande como las estrellas. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa con dos vasos y algo pendiente de conversar: el aire fresco entrando por la ventana. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "Hay una canción de Coldplay que habla de querer a alguien con una intensidad tan grande como el cielo, y de haber hecho todo lo posible por esa persona, con sinceridad.",
      "Contigo entiendo esa sensación de querer algo tan grande que cuesta ponerlo en palabras normales.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Yellow', de Coldplay. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el aire fresco entrando por la ventana.",
    "buenasNoches": "Las últimas luces de la casa ya se apagaron, y en la oscuridad, como siempre, apareciste tú primero en mis pensamientos. Buenas noches, mirando un cielo lleno de estrellas amarillas, pensando en ti. Y si pudiera cerrar este día contigo, escogería quedarme cerca mientras haces algo que te gusta. Me gusta pensar que porque elegirte también es aprender tus detalles.",
    "notaImagen": "[MÚSICA] Canción: Yellow",
    "notaCancion": "[PARA TI] canción real: 'Yellow' - Coldplay.",
    "escenaInmersiva": "Una mesa con dos vasos y algo pendiente de conversar; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 109,
    "categoria": "American Pie",
    "icono": "🥧",
    "tono": "amor",
    "color": {
      "principal": "#f2b705",
      "suave": "#fff0b3",
      "oscuro": "#251c02"
    },
    "buenosDias": "Buenos días. Hoy va una recomendación sin ninguna pretensión de arte: comedia adolescente absurda, de las que hacen reír sin pensar mucho. Si hoy estuviéramos juntos, me gustaría que este día empezara en un día de semana que pide una pausa: el cansancio bonito después de un día compartido. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "Es sobre un grupo de amigos torpes intentando sobrevivir las últimas semanas del colegio, con humor que no se toma en serio a sí mismo en ningún momento.",
      "Se llama 'American Pie'. De esas películas vergonzosas que uno ve sin culpa.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "Ideal para un día que solo pida reírse de tonterías, sin ningún mensaje profundo detrás. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cansancio bonito después de un día compartido.",
    "buenasNoches": "Buenas noches, con ganas de una risa tonta contigo pronto. Y si pudiera cerrar este día contigo, escogería inventarnos un plan sencillo para cuando podamos vernos. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Un día de semana que pide una pausa; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 110,
    "categoria": "Canción del recuerdo",
    "icono": "📻",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. El aire todavía huele a noche cuando empiezo a escribirte esto. Un brillo especial en cada nota para iluminar tu mañana. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa llena de papelitos y recuerdos: la música escapándose de un parlante cercano. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "Tú pintaste de luz cada espacio gris,",
      "volviéndote la melodía que alegra los días.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "Que tengas un día lleno de luz y de pequeños grandes logros. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la música escapándose de un parlante cercano.",
    "buenasNoches": "Las estrellas, si es que se ven desde donde estás, tienen algo tuyo hoy, aunque suene un poco cursi decirlo así. Que la noche te regale paz absoluta. Y si pudiera cerrar este día contigo, escogería dejar que el silencio haga su parte. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[MÚSICA] Canción: Yellow",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una mesa llena de papelitos y recuerdos; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 111,
    "categoria": "Libros",
    "icono": "📖",
    "tono": "filosofica",
    "color": {
      "principal": "#6b2142",
      "suave": "#e3b8c9",
      "oscuro": "#180509"
    },
    "buenosDias": "Buenos días. El teléfono marcó la hora y, en automático, pensé en ti antes de pensar en cualquier pendiente del día. lectora. Hoy quiero escribirte algo que se sienta como esos libros que tanto te gustan. Si hoy estuviéramos juntos, me gustaría que este día empezara en un balcón donde el cielo cambia de color: la tranquilidad de saber que alguien está ahí. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "Si esto fuera una de esas novelas de romance oscuro que te encantan, este sería el capítulo donde el protagonista se da cuenta de que ya no hay vuelta atrás.",
      "Yo ya me di cuenta hace tiempo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "Algún día quiero que me recomiendes tu libro favorito y leerlo solo para entenderte un poco más. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí.",
    "buenasNoches": "Hay una quietud distinta en las noches, de esas que invitan a pensar despacio en lo que de verdad importa. Buenas noches. Que tus sueños tengan tramas tan buenas como las que lees. Y si pudiera cerrar este día contigo, escogería elegir una película solo por la promesa de verla juntos. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "notaImagen": "[PARA TI] una foto de su libro o saga favorita.",
    "notaCancion": "[PARA TI] algo con atmósfera, tipo banda sonora de película.",
    "escenaInmersiva": "Un balcón donde el cielo cambia de color; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 112,
    "categoria": "Después",
    "icono": "🐶",
    "tono": "amor",
    "color": {
      "principal": "#6fb1e0",
      "suave": "#d6ecfb",
      "oscuro": "#071522"
    },
    "buenosDias": "Buenos días. Hay una energía distinta en los días que empiezan escribiéndote, no sabría explicar bien por qué. Hoy pensé menos en el ahora y más en todos los 'después' que quiero contigo. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cuarto con música bajita: el silencio cómodo que no necesita explicación. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "poema": [
      "Hay un después de esto que ya empecé a imaginar, con más días como este, con más nosotros.",
      "No tengo apuro, pero sí tengo ganas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "Cuéntame uno de tus 'después' conmigo, aunque sea pequeño. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el silencio cómodo que no necesita explicación.",
    "buenasNoches": "Hay noches donde el cansancio gana rápido, y aun así encontré energía para pensarte un rato más. Buenas noches, pensando en lo que sigue. Y si pudiera cerrar este día contigo, escogería recordar una conversación que todavía me hace sonreír. Me gusta pensar que porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "notaImagen": "[PARA TI] otra foto tierna, cerrando el ciclo de Snoopy.",
    "notaCancion": "[PARA TI] algo nostálgico.",
    "escenaInmersiva": "Un cuarto con música bajita; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 113,
    "categoria": "Cuenta regresiva",
    "icono": "⏳",
    "tono": "hot",
    "color": {
      "principal": "#a10e35",
      "suave": "#f0aabd",
      "oscuro": "#140208"
    },
    "buenosDias": "Buenos días. Empecé, sin querer, una cuenta regresiva mental para la próxima vez que estemos cerca. Hoy me gustaría robarte unos minutos sin planes ni teléfonos: solo tú, yo y esa clase de silencio que se vuelve demasiado íntimo cuando uno se gusta de verdad.",
    "poema": [
      "No es solo verte. Es todo lo que llega con verte: el abrazo que se alarga más de lo necesario, la despedida que ninguno de los dos apura.",
      "Cuento los días. Literal, con los dedos, como si eso los acortara.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "¿Cuántos faltan según tu cuenta? Comparemos números. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la respiración tranquila cuando por fin baja el ruido del día.",
    "buenasNoches": "Buenas noches, un día menos en esta cuenta poco paciente. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un pasillo silencioso antes de dormir; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 114,
    "categoria": "Ted",
    "icono": "🧸",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy va otra de humor absurdo, sobre un oso de peluche que cobra vida y no tiene ningún filtro para hablar. Si hoy estuviéramos juntos, me gustaría que este día empezara en una ventana abierta al aire fresco: el ruido lejano de la ciudad. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo me interesa más la experiencia que la perfección.",
    "poema": [
      "Es sobre un hombre que nunca creció del todo, acompañado de su mejor amigo de peluche con la boca más sucia del cine.",
      "Se llama 'Ted'. Vulgar a propósito, pero con corazón de fondo, como casi todo lo bueno de humor absurdo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "No es para ver con la familia. Perfecta para una noche de risas sin filtro. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el ruido lejano de la ciudad.",
    "buenasNoches": "Buenas noches, todavía riéndome de chistes de mal gusto contigo. Y si pudiera cerrar este día contigo, escogería cocinar algo que salga imperfecto pero nuestro. Me gusta pensar que porque contigo me interesa más la experiencia que la perfección.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Una ventana abierta al aire fresco; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 115,
    "categoria": "Insomnio",
    "icono": "🌙",
    "tono": "filosofica",
    "color": {
      "principal": "#6b2142",
      "suave": "#e3b8c9",
      "oscuro": "#180509"
    },
    "buenosDias": "Buenos días. El café todavía está humeando cuando ya estoy pensando en qué decirte hoy. aunque anoche casi no dormí pensando en nosotros. Si hoy estuviéramos juntos, me gustaría que este día empezara en un trayecto cualquiera que de pronto se vuelve especial: ese segundo de silencio antes de decir algo que importa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "Hay noches en que el sueño pierde contra los pensamientos, y anoche tú ganaste esa pelea sin siquiera intentarlo.",
      "No me molesta perder horas de sueño si es pensando en construir algo contigo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Espero que tú sí hayas dormido mejor que yo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: ese segundo de silencio antes de decir algo que importa. Juego nocturno: una pregunta cada uno, pero la respuesta tiene que empezar con “te diría esto al oído…”. Puede ser profunda, absurda o coqueta.",
    "buenasNoches": "La luz de la lámpara es lo único encendido ya en este cuarto, y sigo aquí, pensando en cómo cerrar bien el día contigo en mente. Buenas noches, esta vez sí, con la esperanza de soñarte tranquilo. Y si pudiera cerrar este día contigo, escogería hacerte reír con una tontería. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Un trayecto cualquiera que de pronto se vuelve especial; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 116,
    "categoria": "Often",
    "icono": "🎸",
    "tono": "hot",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hoy quiero hablarte de una canción que, sin decirlo directamente, habla de pensar en alguien más seguido de lo normal. Hoy te confieso algo sencillo: me encanta mirarte. No solo cuando estás arreglada, sino también cuando estás distraída, recién despierta o haciendo cualquier cosa que no creas que alguien está observando.",
    "poema": [
      "Hay una canción de The Weeknd que habla justo de eso: de tener a alguien en la cabeza con más frecuencia de la que uno admite.",
      "Contigo me pasa eso, más seguido de lo que debería para ser una mañana cualquiera.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Often', de The Weeknd. Espero que tú también pienses en mí más seguido de lo que admites. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sombra de las hojas moviéndose sobre el suelo.",
    "buenasNoches": "Buenas noches, pensándote seguido, como siempre. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "cancionUrl": "https://www.youtube.com/watch?v=JPIhUaONiLU",
    "notaImagen": "[MÚSICA] Canción: Often",
    "notaCancion": "[PARA TI] canción real, con link real puesto para que suene ese día.",
    "escenaInmersiva": "Una cafetería imaginaria donde solo estamos tú y yo; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 117,
    "categoria": "Letra bonita",
    "icono": "🎧",
    "tono": "filosofica",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Antes de revisar cualquier otra cosa en el teléfono, ya estaba escribiéndote esto. Un poco de rock alternativo para sacudir la modorra de la mañana. Si hoy estuviéramos juntos, me gustaría que este día empezara en un lugar cualquiera que se convierte en nuestro por compartirlo: el sonido pequeño de una taza al tocar la mesa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "A veces uno se siente fuera de lugar en el mundo,",
      "hasta que encuentra a alguien que entiende sus silencios.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "Escúchala con buenos audífonos para captar todos los detalles. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa.",
    "buenasNoches": "Hay noches que se sienten largas y noches que se sienten cortas, y esta, contigo en la cabeza, se sintió de las buenas. Descansa rico, te quiero muchísimo. Y si pudiera cerrar este día contigo, escogería caminar sin destino mientras hablamos. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[MÚSICA] Canción: Creep",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un lugar cualquiera que se convierte en nuestro por compartirlo; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 118,
    "categoria": "Volvamos a Ser Novios",
    "icono": "🔥",
    "tono": "hot",
    "color": {
      "principal": "#d1163f",
      "suave": "#f7bccb",
      "oscuro": "#1c0409"
    },
    "buenosDias": "Buenos días. Hoy quiero hablarte de una canción vallenata sobre no dejar que la rutina apague lo que empezó con chispa. Si estuvieras aquí, probablemente encontraría una excusa para quedarme un poco más cerca de ti. Hay personas que uno abraza por costumbre; contigo siempre aparece la tentación de no soltarte todavía.",
    "poema": [
      "Hay una canción de Silvestre Dangond que le pide a su pareja volver a las citas, a las risas, a los gestos espontáneos de cuando todo era nuevo, en vez de dejar que el día a día apague la llama.",
      "Contigo no quiero que la rutina nos gane nunca.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Volvamos a Ser Novios', de Silvestre Dangond. Yo pongo la iniciativa de mantener viva la chispa, pero también espero que tú la sigas alimentando conmigo, de los dos lados. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la risa que llega antes que la respuesta.",
    "buenasNoches": "Buenas noches, con ganas de que sigamos siendo novios, así llevemos tiempo. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[MÚSICA] Canción: Volvamos a Ser Novios",
    "notaCancion": "[PARA TI] canción real: 'Volvamos a Ser Novios' - Silvestre Dangond.",
    "escenaInmersiva": "Una tarde que huele a lluvia; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 119,
    "categoria": "Interludio",
    "icono": "🎤",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. El día apenas empieza a definirse, pero ya sé que una parte de él va a estar dedicada a pensar en ti. Brillo y energía para un día que promete ser excelente. Si hoy estuviéramos juntos, me gustaría que este día empezara en una noche con la ciudad respirando detrás de la ventana: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Tú pusiste color donde antes todo era monocromo,",
      "haciendo que el mundo brille distinto.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Un tema imperdible para cantar de camino a tus pendientes. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el olor de algo recién hecho. Reto musical: elige una canción que te recuerde a mí sin decir por qué. Yo intento adivinar la historia que hay detrás.",
    "buenasNoches": "Hay una versión más honesta de mí que solo sale de noche, y esa versión también te quiere mucho. Que descanses rico, amor. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[MÚSICA] Canción: Yellow",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una noche con la ciudad respirando detrás de la ventana; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 120,
    "categoria": "Norwegian Wood",
    "icono": "📘",
    "tono": "filosofica",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Hoy quiero recomendarte un autor japonés que escribe sobre el amor mezclado con melancolía, de una forma muy particular. Si hoy estuviéramos juntos, me gustaría que este día empezara en un automóvil detenido mientras termina una canción: la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "Es una historia sobre la nostalgia, la pérdida y el amor juvenil, contada con esa calma tan característica del autor, donde no pasa casi nada y aun así pasa todo.",
      "Se llama 'Tokio Blues (Norwegian Wood)', de Haruki Murakami.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "De esos libros que se sienten como una conversación larga y honesta con alguien que ya no está. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras.",
    "buenasNoches": "Buenas noches, con esa melancolía bonita todavía en la cabeza. Y si pudiera cerrar este día contigo, escogería abrazarte antes de intentar resolver cualquier cosa. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Un automóvil detenido mientras termina una canción; la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras. abrazarte antes de intentar resolver cualquier cosa. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 121,
    "categoria": "Química",
    "icono": "⚡",
    "tono": "hot",
    "color": {
      "principal": "#c81d4a",
      "suave": "#f7c0d0",
      "oscuro": "#1a0308"
    },
    "buenosDias": "Buenos días. Hay algo entre los dos que no termina de explicarse con palabras normales, y hoy tenía ganas de intentarlo igual. Hoy me dieron ganas de escribirte antes de que el día terminara de despertarse. No solo porque te extraño: porque hay una parte de mí que disfruta imaginarte cerca, con esa mezcla tuya de calma y peligro que me desarma.",
    "poema": [
      "Le dicen química, pero se siente más como corriente: algo que se enciende apenas estás cerca, sin necesidad de que pase nada más.",
      "No sé cómo funciona exactamente. Solo sé que contigo nunca ha fallado.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "¿Sientes tú también esa corriente, o soy solo yo imaginando cosas? Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la lluvia golpeando despacio los vidrios.",
    "buenasNoches": "Buenas noches, todavía con la corriente encendida, sin motivo aparente. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una calle que todavía no se llena de gente; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 122,
    "categoria": "Playlist compartida",
    "icono": "🎧",
    "tono": "amor",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. El cielo todavía tiene ese color raro de las mañanas que no se deciden entre gris y celeste. Llegamos al día 122 consolidando este viaje musical. Si hoy estuviéramos juntos, me gustaría que este día empezara en un parque casi vacío: el roce casual que termina sintiéndose importante. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Y buscando explicaciones lógicas al destino,",
      "me di cuenta de que lo nuestro no necesita reglas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por caminar conmigo en cada paso de este proyecto. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante.",
    "buenasNoches": "El día se despide con la misma certeza de siempre: que quiero que mañana empiece igual, pensando en ti primero. Descansa de la mejor manera. Y si pudiera cerrar este día contigo, escogería bailar contigo aunque no haya espacio. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[MÚSICA] Canción: The Scientist",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un parque casi vacío; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 123,
    "categoria": "Gustos compartidos",
    "icono": "🌭",
    "tono": "amor",
    "color": {
      "principal": "#e0632f",
      "suave": "#ffcfa8",
      "oscuro": "#2b1103"
    },
    "buenosDias": "Buenos días. Hay un tipo de calma particular en escribir esto antes de que el celular empiece a sonar con todo lo demás. Hoy quiero celebrar algo simple: lo bien que la pasamos con cosas sin importancia. Si hoy estuviéramos juntos, me gustaría que este día empezara en una playa que todavía guarda calor en la arena: la sensación de una mano buscando otra sin pensarlo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "No hace falta un plan elaborado para pasarla bien, a veces solo hace falta estar juntos, sin más.",
      "De esos momentos sin importancia guardo varios de mis recuerdos favoritos.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por hacer que hasta lo simple se sienta memorable. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sensación de una mano buscando otra sin pensarlo.",
    "buenasNoches": "Hay un silencio particular a esta hora que hace que las palabras pesen distinto, más sinceras. Buenas noches, con un buen recuerdo simple más. Y si pudiera cerrar este día contigo, escogería preguntarte qué parte del día quieres guardar. Me gusta pensar que porque elegirte también es aprender tus detalles.",
    "notaImagen": "[PARA TI] otra foto de comida callejera favorita.",
    "notaCancion": "[PARA TI] algo divertido, para pedir domicilio con buena música.",
    "escenaInmersiva": "Una playa que todavía guarda calor en la arena; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 124,
    "categoria": "Tulipán",
    "icono": "🌷",
    "tono": "amor",
    "color": {
      "principal": "#b16fd1",
      "suave": "#ecd6ff",
      "oscuro": "#1c0a26"
    },
    "buenosDias": "Buenos días. El sol todavía no calienta del todo, pero algo aquí adentro ya empezó a hacerlo. Hoy quiero decirte que no hay nadie como tú, literal. Si hoy estuviéramos juntos, me gustaría que este día empezara en una habitación todavía en penumbra: una canción que parece llegar exactamente en el momento correcto. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "El tulipán morado se regala cuando alguien quiere decir «no hay nadie como tú», y eso es justo lo que pienso cada vez que te veo.",
      "No busco comparaciones porque simplemente no las hay.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Significado del tulipán morado: admiración y un amor único. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "Hay algo tranquilizador en saber que, sin importar cómo estuvo el día, esto de escribirte de noche no cambia. Buenas noches, única. Así, sin punto de comparación. Y si pudiera cerrar este día contigo, escogería mirarte unos segundos más de lo necesario. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[PARA TI] una foto de tulipanes morados.",
    "notaCancion": "[PARA TI] algo bonito, sin prisa.",
    "escenaInmersiva": "Una habitación todavía en penumbra; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 125,
    "categoria": "Chocolate y Fresas al Champán",
    "icono": "🍓",
    "tono": "hot",
    "color": {
      "principal": "#c81d4a",
      "suave": "#f7c0d0",
      "oscuro": "#1a0308"
    },
    "buenosDias": "Buenos días. Hoy va una idea que combina dos de las cosas que más te gustan: el chocolate y algo con burbujas. Hoy me gustaría robarte unos minutos sin planes ni teléfonos: solo tú, yo y esa clase de silencio que se vuelve demasiado íntimo cuando uno se gusta de verdad.",
    "poema": [
      "Fresas bañadas en chocolate derretido, con una copa de algo espumoso al lado. Simple, pero de esas combinaciones que se sienten como ocasión especial aunque sea un martes cualquiera.",
      "Dicen que las fresas con chocolate tienen fama de despertar los sentidos. No sé qué tan cierto sea, pero no hace falta ciencia para disfrutarlo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "Hagámoslo una noche cualquiera, sin esperar ocasión especial para consentirte. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el calor queda después de un abrazo.",
    "buenasNoches": "Buenas noches, con el antojo de esa combinación todavía presente. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un sofá con una manta compartida; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 126,
    "categoria": "Paciencia",
    "icono": "🧁",
    "tono": "amor",
    "color": {
      "principal": "#a9713f",
      "suave": "#ecd2ae",
      "oscuro": "#20130a"
    },
    "buenosDias": "Buenos días. Hay mañanas silenciosas y mañanas ruidosas, y esta, por suerte, es de las tranquilas. Hoy quiero agradecerte la paciencia que me has tenido en más de un día difícil. Si hoy estuviéramos juntos, me gustaría que este día empezara en un domingo lento: la luz tibia que se queda unos segundos sobre la pared. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "No siempre soy fácil, y aun así te quedas, con paciencia, esperando la mejor versión de mí.",
      "Gracias por no irte en los días complicados.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "Prometo seguir trabajando en merecer esa paciencia. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la luz tibia que se queda unos segundos sobre la pared.",
    "buenasNoches": "El silencio de la noche siempre hace que las cosas simples, como decir buenas noches, se sientan un poco más importantes. Buenas noches, agradecido con tu paciencia, siempre. Y si pudiera cerrar este día contigo, escogería dejarte una nota donde menos la esperes. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "notaImagen": "[PARA TI] otra foto de postres o dulces.",
    "notaCancion": "[PARA TI] algo alegre y liviano.",
    "escenaInmersiva": "Un domingo lento; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 127,
    "categoria": "La Bachata",
    "icono": "💃",
    "tono": "hot",
    "color": {
      "principal": "#c81d4a",
      "suave": "#f7c0d0",
      "oscuro": "#1a0308"
    },
    "buenosDias": "Buenos días. Hoy quiero hablarte de una canción sobre ese flechazo inmediato que a veces pasa sin planearlo. Hoy me dieron ganas de escribirte antes de que el día terminara de despertarse. No solo porque te extraño: porque hay una parte de mí que disfruta imaginarte cerca, con esa mezcla tuya de calma y peligro que me desarma.",
    "poema": [
      "Hay una canción de Manuel Turizo sobre fijarse en alguien en medio de una fiesta y no poder dejar de pensar en esa persona el resto de la noche.",
      "A mí me sigue pasando algo parecido contigo, aunque ya no seamos un flechazo nuevo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'La Bachata', de Manuel Turizo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cambio de color del cielo.",
    "buenasNoches": "Buenas noches, todavía con ese flechazo intacto. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[MÚSICA] Canción: La Bachata",
    "notaCancion": "[PARA TI] canción real: 'La Bachata' - Manuel Turizo.",
    "escenaInmersiva": "Un cielo nublado que no termina de decidirse; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 128,
    "categoria": "At Last",
    "icono": "✨",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. El ruido de la calle todavía no arranca del todo, y en ese pequeño espacio de calma te escribo esto. Hoy quiero hablarte de una canción sobre por fin encontrar lo que uno llevaba tiempo esperando, sin saberlo del todo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cama desordenada después de una noche larga: el aire fresco entrando por la ventana. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "Hay una canción clásica de Etta James que habla de esa sensación de que la espera por fin terminó, de que el cielo cambió de color apenas llegó la persona correcta.",
      "Contigo sentí un poco de eso: como si algo que no sabía que esperaba, por fin hubiera llegado.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'At Last', de Etta James. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el aire fresco entrando por la ventana.",
    "buenasNoches": "Hay algo bonito en cerrar el día pensando en la misma persona con la que se abrió, y hoy fue así otra vez. Buenas noches, con la sensación de que por fin algo encajó bien. Y si pudiera cerrar este día contigo, escogería quedarme cerca mientras haces algo que te gusta. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[MÚSICA] Canción: At Last",
    "notaCancion": "[PARA TI] canción real: 'At Last' - Etta James.",
    "escenaInmersiva": "Una cama desordenada después de una noche larga; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 129,
    "categoria": "Grabación",
    "icono": "🎶",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Hay mañanas donde uno se siente con ganas de todo, y esta parece ser una de esas. Letras profundas que hablan de la melancolía y el amor a distancia. Si hoy estuviéramos juntos, me gustaría que este día empezara en una esquina iluminada por el sol de la tarde: el cansancio bonito después de un día compartido. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo me interesa más la experiencia que la perfección.",
    "poema": [
      "Y aunque la noche sea larga y fría,",
      "pensar en ti enciende cualquier hoguera.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "Una canción perfecta para escuchar con audífonos antes de dormir o por la tarde. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cansancio bonito después de un día compartido.",
    "buenasNoches": "El día ya cumplió su ciclo completo, y como siempre, terminó pensando en la misma persona con la que empezó. Duerme bien, soñando bonito. Y si pudiera cerrar este día contigo, escogería inventarnos un plan sencillo para cuando podamos vernos. Me gusta pensar que porque contigo me interesa más la experiencia que la perfección.",
    "notaImagen": "[MÚSICA] Canción: Colapso",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una esquina iluminada por el sol de la tarde; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 130,
    "categoria": "Té de Jengibre y Canela",
    "icono": "🍵",
    "tono": "amor",
    "color": {
      "principal": "#a9713f",
      "suave": "#ecd2ae",
      "oscuro": "#20130a"
    },
    "buenosDias": "Buenos días. Hoy va una bebida calientita para esos días fríos de Bogotá, fácil de hacer en casa. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina llena de pequeñas cosas por ordenar: la música escapándose de un parlante cercano. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "Jengibre fresco, canela en rama, un poco de miel, y agua caliente. Nada complicado, pero calienta el cuerpo entero desde el primer sorbo.",
      "Perfecto para tomar mientras hablamos de cualquier cosa, envueltos en una cobija.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: preparen té de jengibre y canela juntos, pongan una película tranquila y conviertan el sofá en refugio. Uno prepara las tazas y el otro se encarga de elegir la manta.",
    "buenasNoches": "Buenas noches, con ese calorcito todavía en las manos. Y si pudiera cerrar este día contigo, escogería dejar que el silencio haga su parte. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte. Cuando se acabe la película, quédense con las tazas vacías entre las manos y el hombro del otro al lado.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Una cocina llena de pequeñas cosas por ordenar; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 131,
    "categoria": "Piel",
    "icono": "🕯️",
    "tono": "hot",
    "color": {
      "principal": "#e0294f",
      "suave": "#ffc9d6",
      "oscuro": "#20050b"
    },
    "buenosDias": "Buenos días. Hoy pienso en tu piel más de lo que debería para ser una mañana cualquiera de martes. Hoy me gustaría robarte unos minutos sin planes ni teléfonos: solo tú, yo y esa clase de silencio que se vuelve demasiado íntimo cuando uno se gusta de verdad.",
    "poema": [
      "Me gusta imaginar cómo se sentiría el silencio entre los dos si estuviéramos cerca justo ahora, sin necesidad de decir absolutamente nada.",
      "A veces lo que más se desea no se anuncia, se deja ahí, esperando el momento correcto para aparecer.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "Cuando nos veamos, no prometo portarme del todo bien. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí.",
    "buenasNoches": "Buenas noches, pensando en formas de estar más cerca la próxima vez. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una cocina con la primera taza sobre la mesa; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 132,
    "categoria": "Manos",
    "icono": "📖",
    "tono": "amor",
    "color": {
      "principal": "#e0a63d",
      "suave": "#ffe3b0",
      "oscuro": "#241a04"
    },
    "buenosDias": "Buenos días. El despertador sonó dos veces antes de que lograra levantarme, y en el medio, sin darme cuenta, ya estaba pensando en ti. Hoy pensé en tus manos, en lo fácil que se siente cuando están cerca de las mías. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa con dos vasos y algo pendiente de conversar: el silencio cómodo que no necesita explicación. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "Hay manos que solo sostienen, y hay manos que además sostienen a la persona completa.",
      "Las tuyas hacen las dos cosas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "La próxima vez que estemos cerca, no sueltes tan rápido. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el silencio cómodo que no necesita explicación.",
    "buenasNoches": "Las luces de la calle ya se encendieron hace rato, y aquí sigo, pensando en ti antes de dormir. Buenas noches, con ganas de tenerte cerca de nuevo. Y si pudiera cerrar este día contigo, escogería recordar una conversación que todavía me hace sonreír. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[PARA TI] algo de cómics o historietas que le gusten.",
    "notaCancion": "[PARA TI] algo nostálgico, de esas que dan ternura.",
    "escenaInmersiva": "Una mesa con dos vasos y algo pendiente de conversar; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 133,
    "categoria": "Melodía nueva",
    "icono": "💿",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Hoy el despertar fue lento, de esos donde uno se queda un rato más en la cama solo pensando. Ritmo pegadizo para dedicarle a esa persona que lo es todo. Si hoy estuviéramos juntos, me gustaría que este día empezara en un día de semana que pide una pausa: la respiración tranquila cuando por fin baja el ruido del día. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "Tal como eres, no cambiaría ni un solo detalle,",
      "porque me encantas de pies a cabeza.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "Guarda esta energía y ponla a sonar un rato. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la respiración tranquila cuando por fin baja el ruido del día.",
    "buenasNoches": "Afuera ya no se escucha casi nada, solo el silencio típico de esta hora, cómodo, tranquilo. Duerme bien, nos leemos mañana. Y si pudiera cerrar este día contigo, escogería guardar una frase tuya para recordarla después. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[MÚSICA] Canción: Just the Way You Are",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un día de semana que pide una pausa; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 134,
    "categoria": "Peonía",
    "icono": "🌸",
    "tono": "filosofica",
    "color": {
      "principal": "#e0678f",
      "suave": "#ffd3e2",
      "oscuro": "#280914"
    },
    "buenosDias": "Buenos días. Todavía hace frío afuera, pero aquí adentro algo ya se siente tibio desde temprano. mi peonía. Hoy quiero hablarte de lo que florece despacio pero se queda mucho tiempo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa llena de papelitos y recuerdos: el ruido lejano de la ciudad. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "La peonía tarda en abrir, pero cuando lo hace, dura y se nota en cualquier lugar donde esté.",
      "Así ha sido esto contigo: nada apurado, pero cada vez más presente.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "Significado de la peonía: amor duradero y buena fortuna. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el ruido lejano de la ciudad.",
    "buenasNoches": "El ruido de afuera bajó por completo, y en ese silencio hay espacio de sobra para pensar en ti con calma. Buenas noches, que sigas floreciendo a tu propio ritmo. Y si pudiera cerrar este día contigo, escogería cocinar algo que salga imperfecto pero nuestro. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[PARA TI] una foto de peonías.",
    "notaCancion": "[PARA TI] algo suave, de las que duran en la memoria.",
    "escenaInmersiva": "Una mesa llena de papelitos y recuerdos; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 135,
    "categoria": "Orgullo",
    "icono": "👗",
    "tono": "amor",
    "color": {
      "principal": "#2f6d6b",
      "suave": "#bfe3e0",
      "oscuro": "#08191a"
    },
    "buenosDias": "Buenos días. El primer pensamiento coherente del día, antes que cualquier lista de pendientes, fue sobre ti. Hoy quiero decirte, sin vueltas, que estoy orgulloso de ti. Si hoy estuviéramos juntos, me gustaría que este día empezara en un balcón donde el cielo cambia de color: ese segundo de silencio antes de decir algo que importa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "No siempre lo digo con estas palabras exactas, pero lo pienso seguido: admiro cómo llevas tu vida.",
      "Ese orgullo no es poca cosa para mí.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Sigue haciendo las cosas a tu manera, te queda bien. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: ese segundo de silencio antes de decir algo que importa.",
    "buenasNoches": "El cielo ya está completamente oscuro, y en algún lugar de ahí arriba hay una estrella que, según decidí hoy, es tuya. Buenas noches, orgulloso de ti, como siempre. Y si pudiera cerrar este día contigo, escogería hacerte reír con una tontería. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[PARA TI] otra foto suya arreglada.",
    "notaCancion": "[PARA TI] algo elegante, tipo balada especial.",
    "escenaInmersiva": "Un balcón donde el cielo cambia de color; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 136,
    "categoria": "Sangría Casera",
    "icono": "🍷",
    "tono": "hot",
    "color": {
      "principal": "#a10e35",
      "suave": "#f0aabd",
      "oscuro": "#140208"
    },
    "buenosDias": "Buenos días. Hoy va una idea para una tarde de esas que se alargan sin querer: sangría casera, hecha entre los dos. Si estuvieras aquí, probablemente encontraría una excusa para quedarme un poco más cerca de ti. Hay personas que uno abraza por costumbre; contigo siempre aparece la tentación de no soltarte todavía.",
    "poema": [
      "Vino tinto, fruta picada, un poco de licor y tiempo para que se mezcle todo bien. Se prepara con calma, y se disfruta con más calma todavía.",
      "De esas bebidas que invitan a quedarse sentados hablando por horas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "Piquemos la fruta juntos, ese paso siempre termina siendo el más entretenido. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sombra de las hojas moviéndose sobre el suelo.",
    "buenasNoches": "Buenas noches, con ganas de esa tarde larga, sangría de por medio. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un cuarto con música bajita; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 137,
    "categoria": "Compás rápido",
    "icono": "📻",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Afuera el día apenas se estira, y aquí ya estoy yo, pensando en ti antes que en cualquier otra cosa. Estilo alternativo con una vibra nocturna increíble. Si hoy estuviéramos juntos, me gustaría que este día empezara en un pasillo silencioso antes de dormir: el sonido pequeño de una taza al tocar la mesa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Quiero ser tu abrigo y tu refugio favorito,",
      "el lugar al que siempre quieras volver.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "Que el día fluya sin errores ni complicaciones. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa.",
    "buenasNoches": "Las cobijas ya están listas, y en un rato, cuando cierre los ojos, sé exactamente en quién voy a pensar. Descansa la vista de las pantallas. Y si pudiera cerrar este día contigo, escogería caminar sin destino mientras hablamos. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[MÚSICA] Canción: I Wanna Be Yours",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un pasillo silencioso antes de dormir; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 138,
    "categoria": "Domingo cualquiera",
    "icono": "🖤",
    "tono": "filosofica",
    "color": {
      "principal": "#6b2142",
      "suave": "#e3b8c9",
      "oscuro": "#180509"
    },
    "buenosDias": "Buenos días. Hay una calma particular en las primeras horas, antes de que el ruido del día se meta por todos lados. Hoy quería que este mensaje se sintiera como un domingo tranquilo, sin agenda. Si hoy estuviéramos juntos, me gustaría que este día empezara en una ventana abierta al aire fresco: la risa que llega antes que la respuesta. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "Me gustan los días sin plan, esos donde lo único importante es estar bien, sin afán.",
      "Ojalá tengamos muchos domingos así, juntos, sin nada urgente que hacer.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Aprovecha hoy para no hacer nada importante, en el buen sentido. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la risa que llega antes que la respuesta. Juego de domingo: cada uno inventa un plan absurdo para dos con tres cosas que haya en la casa. Gana el que consiga que el otro diga “eso sí lo haría contigo”.",
    "buenasNoches": "Las cosas del día ya quedaron atrás, y lo único que sigue presente, como siempre, eres tú. Buenas noches, con la calma de un buen domingo. Y si pudiera cerrar este día contigo, escogería preguntarte qué fue lo primero que pensaste al despertar. Me gusta pensar que porque elegirte también es aprender tus detalles.",
    "notaImagen": "[PARA TI] una foto de su lectura actual.",
    "notaCancion": "[PARA TI] algo con atmósfera, tipo banda sonora.",
    "escenaInmersiva": "Una ventana abierta al aire fresco; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 139,
    "categoria": "Bis",
    "icono": "🎸",
    "tono": "filosofica",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hay una quietud bonita en las mañanas de entre semana que casi nadie aprovecha, y hoy la usé para esto. Ritmo pop optimista para recordarte lo especial que eres. Si hoy estuviéramos juntos, me gustaría que este día empezara en un trayecto cualquiera que de pronto se vuelve especial: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "No hay una sola cosa que cambiaría de tu forma de ser,",
      "porque eres perfecta exactamente así.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Súbele el volumen un par de rayitas y disfruta. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el olor de algo recién hecho.",
    "buenasNoches": "El día terminó, con sus cosas buenas y sus cosas normales, pero contigo en la mente el balance siempre sale bien. Que duermas bien, sabiendo lo mucho que me encantas. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[MÚSICA] Canción: Just the Way You Are",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un trayecto cualquiera que de pronto se vuelve especial; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 140,
    "categoria": "Rutina",
    "icono": "🐾",
    "tono": "amor",
    "color": {
      "principal": "#f4c453",
      "suave": "#fff0c9",
      "oscuro": "#241a05"
    },
    "buenosDias": "Buenos días. Hoy me desperté antes de la alarma, y en ese ratito extra, sin planearlo, ya estaba pensando en ti. Ya somos parte de la rutina del otro, y eso, lejos de ser aburrido, se siente bien. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cafetería imaginaria donde solo estamos tú y yo: una canción de fondo y la sensación de que no hace falta hacer nada más. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "No todo lo rutinario es malo: hay rutinas que en vez de cansar, sostienen.",
      "Ser parte de tu rutina es de las cosas que más quiero seguir siendo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "Espero seguir siendo parte de tus días normales, no solo de los especiales. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción de fondo y la sensación de que no hace falta hacer nada más.",
    "buenasNoches": "El silencio de la casa a esta hora es distinto a cualquier otro momento del día, más íntimo, más real. Buenas noches, hasta la próxima rutina compartida. Y si pudiera cerrar este día contigo, escogería abrazarte antes de intentar resolver cualquier cosa. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[PARA TI] una foto de alguna salida o aventura chiquita que hayan tenido.",
    "notaCancion": "[PARA TI] algo divertido, de esas para un paseo.",
    "escenaInmersiva": "Una cafetería imaginaria donde solo estamos tú y yo; una canción de fondo y la sensación de que no hace falta hacer nada más. abrazarte antes de intentar resolver cualquier cosa. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 141,
    "categoria": "Noche de Manualidades",
    "icono": "✂️",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. Hoy quiero proponerte algo creativo y sin presión: una noche haciendo algo con las manos, sin buscar quede perfecto. Si hoy estuviéramos juntos, me gustaría que este día empezara en un lugar cualquiera que se convierte en nuestro por compartirlo: la lluvia golpeando despacio los vidrios. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "Puede ser pintar algo simple, armar un scrapbook con fotos nuestras, o cualquier cosa que se nos ocurra en el momento.",
      "Lo importante no es el resultado, es el rato entretenido haciéndolo juntos.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "Compremos materiales baratos y veamos qué sale, sin ninguna expectativa alta. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la lluvia golpeando despacio los vidrios.",
    "buenasNoches": "Buenas noches, con ganas de crear algo torcido y bonito contigo. Y si pudiera cerrar este día contigo, escogería escuchar contigo una canción hasta el final. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Un lugar cualquiera que se convierte en nuestro por compartirlo; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 142,
    "categoria": "Segunda voz",
    "icono": "😏",
    "tono": "hot",
    "color": {
      "principal": "#b3123f",
      "suave": "#f2b3c4",
      "oscuro": "#170209"
    },
    "buenosDias": "Buenos días. Tengo una segunda voz que casi nunca uso, y hoy amaneció con ganas de salir a saludar. Si estuvieras aquí, probablemente encontraría una excusa para quedarme un poco más cerca de ti. Hay personas que uno abraza por costumbre; contigo siempre aparece la tentación de no soltarte todavía.",
    "poema": [
      "Hay una versión mía más atrevida que la de todos los días, que solo aparece contigo, sin que yo se lo pida.",
      "Hoy decidió despertarse antes de tiempo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "No te sorprendas si hoy hablo distinto a lo normal. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante.",
    "buenasNoches": "Buenas noches, con la segunda voz todavía despierta. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una tarde que huele a lluvia; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 143,
    "categoria": "Radio",
    "icono": "🎵",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hay una luz particular en las mañanas de esta semana, de esas que entran de lado y hacen que todo se vea un poco más honesto. Un tema acústico para empezar la semana con los sentimientos a flote. Si hoy estuviéramos juntos, me gustaría que este día empezara en una noche con la ciudad respirando detrás de la ventana: la sensación de una mano buscando otra sin pensarlo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "Tus manos tienen la maña exacta de ordenar mi caos,",
      "de ponerme a sonreír sin que me dé cuenta.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "Dedícale un momento a escuchar la instrumentación de este tema. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sensación de una mano buscando otra sin pensarlo.",
    "buenasNoches": "El día ya se apagó casi del todo, y antes de cerrar los ojos quería dejarte esto. Que descanses rico, nos leemos mañana. Y si pudiera cerrar este día contigo, escogería preguntarte qué parte del día quieres guardar. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[MÚSICA] Canción: Tú Sí Sabes Querírmeme",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una noche con la ciudad respirando detrás de la ventana; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 144,
    "categoria": "Juego",
    "icono": "😏",
    "tono": "hot",
    "color": {
      "principal": "#c81d4a",
      "suave": "#f7c0d0",
      "oscuro": "#1a0308"
    },
    "buenosDias": "Buenos días, traviesa. Hoy tengo ganas de jugar contigo, aunque sea solo con palabras por ahora. Hay algo peligrosamente bonito en saber que una persona te atrae y, al mismo tiempo, te da paz. Tú tienes esa combinación que me hace querer acercarme y quedarme.",
    "poema": [
      "Me gusta esa forma que tienes de responder cuando lees algo que no esperabas tan temprano en el día.",
      "Así que hoy no prometo comportarme, y tú tampoco tienes que hacerlo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Contéstame algo atrevido si te animas. Prometo no juzgar. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "Buenas noches, traviesa. Mañana seguimos jugando, sin reglas fijas. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un automóvil detenido mientras termina una canción; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 145,
    "categoria": "Salchipapa",
    "icono": "🍟",
    "tono": "amor",
    "color": {
      "principal": "#e0632f",
      "suave": "#ffcfa8",
      "oscuro": "#2b1103"
    },
    "buenosDias": "Buenos días. Hay días que empiezan con prisa y días que empiezan despacio, y este es de los segundos, justo lo que necesitaba. Hoy es un día sin filosofía, solo antojo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una calle que todavía no se llena de gente: el calor queda después de un abrazo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "No todo tiene que ser poesía profunda: a veces el amor también es acordarse de que te encanta una buena salchipapa.",
      "Así que hoy: antojo libre, sin culpa.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "Anótalo: te debo una salchipapa en persona, cuando quieras cobrarla. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el calor queda después de un abrazo.",
    "buenasNoches": "El teléfono ya está casi sin batería, pero antes de que se apague quería mandarte esto. Buenas noches, satisfecha y sin remordimientos. Y si pudiera cerrar este día contigo, escogería pedirte que me cuentes una historia que nunca me hayas contado. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "notaImagen": "[PARA TI] una foto de su comida favorita o de un antojo compartido.",
    "notaCancion": "[PARA TI] algo divertido, para cocinar o pedir domicilio con buena música.",
    "escenaInmersiva": "Una calle que todavía no se llena de gente; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 146,
    "categoria": "Álbum de Fotos Casero",
    "icono": "📸",
    "tono": "amor",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hoy quiero proponerte armar algo que dure: un álbum de fotos nuestro, hecho a mano. Si hoy estuviéramos juntos, me gustaría que este día empezara en un parque casi vacío: la luz tibia que se queda unos segundos sobre la pared. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque no quiero quererte solamente en los momentos fáciles.",
    "poema": [
      "Imprimir fotos, pegarlas, escribir alguna nota chiquita al lado de cada una. Algo simple, pero que en unos años se va a sentir como un tesoro.",
      "De esos proyectos que parecen pequeños pero terminan siendo de los recuerdos más bonitos.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "Empecemos con las fotos que ya tenemos, y vamos sumando con el tiempo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la luz tibia que se queda unos segundos sobre la pared.",
    "buenasNoches": "Buenas noches, pensando en ese álbum que todavía nos falta empezar. Y si pudiera cerrar este día contigo, escogería dejarte una nota donde menos la esperes. Me gusta pensar que porque no quiero quererte solamente en los momentos fáciles.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Un parque casi vacío; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 147,
    "categoria": "Flor de cerezo",
    "icono": "🌸",
    "tono": "amor",
    "color": {
      "principal": "#ffb7c5",
      "suave": "#ffe9ee",
      "oscuro": "#2a0f14"
    },
    "buenosDias": "Buenos días. Todavía no termino el café y ya te estoy escribiendo, para que veas el orden de prioridades que manejo. delicadeza. Hoy va dedicado a lo bonito que dura poco pero se disfruta completo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una playa que todavía guarda calor en la arena: el cambio de color del cielo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "La flor de cerezo no dura mucho, y aun así la gente viaja solo para verla florecer.",
      "Quiero aprender a disfrutar así cada momento contigo, sin esperar a que dure para siempre para valorarlo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Significado de la flor de cerezo: belleza efímera y vivir el presente. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cambio de color del cielo.",
    "buenasNoches": "Hay una calma particular en las últimas horas del día que hace que todo se sienta más simple, más claro. Buenas noches, gracias por este momento, sea corto o largo. Y si pudiera cerrar este día contigo, escogería hacerte un café y dejarlo cerca de ti sin decir demasiado. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[PARA TI] una foto de flores de cerezo o de árboles floreciendo.",
    "notaCancion": "[PARA TI] algo delicado, tipo piano suave.",
    "escenaInmersiva": "Una playa que todavía guarda calor en la arena; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 148,
    "categoria": "Nosotros",
    "icono": "🎉",
    "tono": "amor",
    "color": {
      "principal": "#ff5d8f",
      "suave": "#ffd7e6",
      "oscuro": "#2a0f1c"
    },
    "buenosDias": "Buenos días. Hoy llegamos al día 148, todavía antes de la mitad de este calendario de 365 días. Si hoy estuviéramos juntos, me gustaría que este día empezara en una habitación todavía en penumbra: el aire fresco entrando por la ventana. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "Empezamos con un Snoopy y una promesa de acompañarte cada día, y aquí seguimos, bien pasada la mitad del camino.",
      "Gracias por leer cada uno de estos mensajes, por darle clic a cada corazón, por dejarme contarte de mil formas distintas lo mismo: que te amo.",
      "Todavía falta un buen tramo, y pienso hacerlo tan bonito como lo que ya llevamos.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por llegar hasta aquí. Vamos por 148 de 365, sigamos. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el aire fresco entrando por la ventana.",
    "buenasNoches": "Buenas noches, a mitad de camino y con muchas ganas de seguir. Y si pudiera cerrar este día contigo, escogería quedarme cerca mientras haces algo que te gusta. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[PARA TI] una foto bonita de los dos, para celebrar este punto medio.",
    "notaCancion": "[PARA TI] una canción que sientas que representa lo que llevan hasta aquí.",
    "escenaInmersiva": "Una habitación todavía en penumbra; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 149,
    "categoria": "Día Tras Día",
    "icono": "🎧",
    "tono": "amor",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hay algo reconfortante en empezar el día sabiendo exactamente a quién le voy a escribir primero. Hoy quiero hablarte de una canción que habla de lo que se construye con el tiempo, no de un solo momento. Si hoy estuviéramos juntos, me gustaría que este día empezara en un sofá con una manta compartida: el cansancio bonito después de un día compartido. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Hay una canción de Andrés Cepeda que habla de un amor que se sostiene en la constancia, en elegir a alguien un día tras otro, no solo una vez.",
      "Eso es justo lo que quiero seguir haciendo contigo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Día Tras Día', de Andrés Cepeda. De esas baladas que suenan bien un domingo tranquilo. Yo elijo estar aquí día tras día, y también espero que tú sigas eligiendo estar aquí día tras día conmigo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cansancio bonito después de un día compartido.",
    "buenasNoches": "El ruido del día por fin bajó de volumen, y en ese silencio es más fácil sentir las cosas con claridad. Buenas noches, un día más elegido, como siempre. Y si pudiera cerrar este día contigo, escogería inventarnos un plan sencillo para cuando podamos vernos. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[MÚSICA] Canción: Día Tras Día",
    "notaCancion": "[PARA TI] canción real: 'Día Tras Día' - Andrés Cepeda.",
    "escenaInmersiva": "Un sofá con una manta compartida; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 150,
    "categoria": "Confesión atrevida",
    "icono": "🖋️",
    "tono": "hot",
    "color": {
      "principal": "#d1163f",
      "suave": "#f7bccb",
      "oscuro": "#1c0409"
    },
    "buenosDias": "Buenos días. Hoy toca una confesión que normalmente me guardo para mí solo. Hay algo peligrosamente bonito en saber que una persona te atrae y, al mismo tiempo, te da paz. Tú tienes esa combinación que me hace querer acercarme y quedarme.",
    "poema": [
      "Hay pensamientos que tengo contigo que definitivamente no son para compartir en una cena familiar.",
      "No los voy a escribir todos aquí, pero sí te aviso que existen, y que son bastante frecuentes.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "Si quieres saber más, vas a tener que preguntarme directamente, sin rodeos. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la música escapándose de un parlante cercano.",
    "buenasNoches": "Buenas noches, con la confesión ya hecha, aunque sea solo a medias. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un domingo lento; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 151,
    "categoria": "Vivir Sin Aire",
    "icono": "🌬️",
    "tono": "filosofica",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. El día recién empieza a tomar forma, y ya sé que una parte buena de él tiene que ver contigo. Hoy quiero hablarte de una canción de rock en español sobre lo indispensable que se vuelve alguien con el tiempo. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cielo nublado que no termina de decidirse: la tranquilidad de saber que alguien está ahí. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "poema": [
      "Hay una canción de Maná que compara la necesidad de alguien con la necesidad de respirar, algo que ya no se cuestiona, simplemente es así.",
      "No sé si sea tan extremo conmigo, pero sí sé que te has vuelto parte de lo cotidiano que ya no imagino sin ti.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Vivir Sin Aire', de Maná. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí.",
    "buenasNoches": "El día se cierra, como siempre, con vos como el último pensamiento antes de apagar la luz. Buenas noches, respirando con calma, gracias a ti. Y si pudiera cerrar este día contigo, escogería elegir una película solo por la promesa de verla juntos. Me gusta pensar que porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "notaImagen": "[MÚSICA] Canción: Vivir Sin Aire",
    "notaCancion": "[PARA TI] canción real: 'Vivir Sin Aire' - Maná.",
    "escenaInmersiva": "Un cielo nublado que no termina de decidirse; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 152,
    "categoria": "Cola de reproducción",
    "icono": "🎸",
    "tono": "filosofica",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hay un tipo de silencio en las mañanas tempranas que se presta perfecto para pensar con calma, y hoy lo usé para pensar en ti. Un clásico que te ayuda a reflexionar y encontrar respuestas. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cama desordenada después de una noche larga: el silencio cómodo que no necesita explicación. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Tratando de descifrar las reglas del destino,",
      "encontré que lo nuestro es la excepción más hermosa.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por cuidar de esto todos los días. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el silencio cómodo que no necesita explicación.",
    "buenasNoches": "Hay noches en que uno se queda despierto de más, y esta es una de esas, por pensar en ti un rato extra. Descansa rico, amor. Y si pudiera cerrar este día contigo, escogería recordar una conversación que todavía me hace sonreír. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[MÚSICA] Canción: The Scientist",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una cama desordenada después de una noche larga; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 153,
    "categoria": "Pasta al Vino",
    "icono": "🍝",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy quiero proponerte algo distinto: cocinar juntos en vez de solo mandarte un mensaje. Si hoy estuviéramos juntos, me gustaría que este día empezara en una esquina iluminada por el sol de la tarde: la respiración tranquila cuando por fin baja el ruido del día. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "Una pasta simple con ajo, aceite de oliva y un chorrito de vino blanco no necesita más de veinte minutos ni mucha experiencia en la cocina.",
      "Es de esas recetas donde lo importante no es la comida, es la excusa para estar juntos moviéndonos por la misma cocina pequeña.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: pasta al vino a cuatro manos. Uno pica el ajo, el otro controla la pasta y cambian de tarea a mitad de camino. Después, comen en la mesa con una sola vela y pasan al sofá sin recoger inmediatamente.",
    "buenasNoches": "Buenas noches, pensando en esa cocina compartida pendiente. Y si pudiera cerrar este día contigo, escogería guardar una frase tuya para recordarla después. Me gusta pensar que porque elegirte también es aprender tus detalles. Después de cocinar juntos, quiero esa parte que casi nunca aparece en las recetas: platos a un lado, música bajita y nosotros arrunchados sin ninguna prisa.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Una esquina iluminada por el sol de la tarde; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 154,
    "categoria": "Secreto",
    "icono": "🗝️",
    "tono": "hot",
    "color": {
      "principal": "#e0294f",
      "suave": "#ffc9d6",
      "oscuro": "#20050b"
    },
    "buenosDias": "Buenos días. Tengo un pensamiento de hoy que prefiero guardarme un rato más, solo por el gusto de hacerte esperar. Si estuvieras aquí, probablemente encontraría una excusa para quedarme un poco más cerca de ti. Hay personas que uno abraza por costumbre; contigo siempre aparece la tentación de no soltarte todavía.",
    "poema": [
      "Hay cosas que se disfrutan más cuando no se dicen de una sola vez, cuando se sueltan despacio, casi por accidente.",
      "Este es uno de esos secretos: te lo cuento completo, pero solo si sabes pedirlo bien.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "Gánatelo. Ya sabes cómo, o deberías saberlo a estas alturas. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el ruido lejano de la ciudad.",
    "buenasNoches": "Buenas noches, con el secreto todavía completo, guardado. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una cocina llena de pequeñas cosas por ordenar; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 155,
    "categoria": "Pausa musical",
    "icono": "💿",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Las primeras luces del día siempre me hacen pensar en empezar de cero, y hoy quise empezar pensando en ti. Un clásico melancólico que nunca falla en ninguna playlist. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina con la primera taza sobre la mesa: ese segundo de silencio antes de decir algo que importa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "Intenté buscar una explicación lógica al destino,",
      "pero encontrarte superó cualquier cálculo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Disfruta de la atmósfera que crea esta canción. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: ese segundo de silencio antes de decir algo que importa.",
    "buenasNoches": "La cama todavía está fría, pero el pensamiento de ti ya la calentó un poco. Que la noche te regale un descanso absoluto. Y si pudiera cerrar este día contigo, escogería hacerte reír con una tontería. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[MÚSICA] Canción: The Scientist",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una cocina con la primera taza sobre la mesa; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 156,
    "categoria": "Just The Way You Are",
    "icono": "🪞",
    "tono": "amor",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hay mañanas que parecen prometer algo bueno desde el primer minuto, y esta es una de esas. Hoy quiero hablarte de una canción sobre querer a alguien exactamente como es, sin pedirle que cambie nada. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa con dos vasos y algo pendiente de conversar: la sombra de las hojas moviéndose sobre el suelo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "Hay una canción de Bruno Mars que habla de decirle a alguien que no necesita maquillaje ni cambios para verse increíble, que ya es suficiente tal cual es.",
      "Eso es lo que pienso de ti: no necesitas cambiar nada para que esto funcione.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Just The Way You Are', de Bruno Mars. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sombra de las hojas moviéndose sobre el suelo.",
    "buenasNoches": "El cansancio del día ya se siente en el cuerpo, pero pensar en ti siempre alivia un poco esa parte. Buenas noches, tal cual eres, que ya es más que suficiente. Y si pudiera cerrar este día contigo, escogería mirar el cielo y buscarle un nombre a la forma de una nube. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "notaImagen": "[MÚSICA] Canción: Just The Way You Are",
    "notaCancion": "[PARA TI] canción real: 'Just The Way You Are' - Bruno Mars.",
    "escenaInmersiva": "Una mesa con dos vasos y algo pendiente de conversar; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 157,
    "categoria": "Elegirte",
    "icono": "🩷",
    "tono": "amor",
    "color": {
      "principal": "#ff6fa8",
      "suave": "#ffd7e6",
      "oscuro": "#3a0f24"
    },
    "buenosDias": "Buenos días. Todavía no me tomo el café completo y ya voy por la mitad de este mensaje. Hoy vuelvo a elegirte, como todos los días, aunque no siempre lo diga en voz alta. Si hoy estuviéramos juntos, me gustaría que este día empezara en un día de semana que pide una pausa: el sonido pequeño de una taza al tocar la mesa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "poema": [
      "El amor no es solo un momento en que decides, es algo que se repite, día tras día, sin que nadie lo note.",
      "Hoy también te elijo, otra vez.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "Voy a seguir eligiéndote, un día a la vez. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa.",
    "buenasNoches": "Hay un tipo de sueño que llega mejor cuando el último pensamiento del día fue bueno, y hoy lo fue, gracias a ti. Buenas noches, elegida otra vez hoy, sin dudarlo. Y si pudiera cerrar este día contigo, escogería caminar sin destino mientras hablamos. Me gusta pensar que porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "notaImagen": "[PARA TI] algo tierno, tipo Hello Kitty otra vez, ella se lo merece.",
    "notaCancion": "[PARA TI] algo cálido, de compañía.",
    "escenaInmersiva": "Un día de semana que pide una pausa; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 158,
    "categoria": "Fondue de Chocolate",
    "icono": "🍫",
    "tono": "amor",
    "color": {
      "principal": "#a9713f",
      "suave": "#ecd2ae",
      "oscuro": "#20130a"
    },
    "buenosDias": "Buenos días. Hoy va una idea dulce: chocolate derretido, frutas cortadas, y una excusa perfecta para compartir del mismo plato. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa llena de papelitos y recuerdos: la risa que llega antes que la respuesta. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "Un fondue de chocolate no necesita casi nada: chocolate de buena calidad, un poco de crema, y algo de fruta para mojar.",
      "Es de esas recetas que se sienten más como un plan que como una comida.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: fondue de chocolate con fresas y banano. Cada uno prepara un bocado para el otro y le pone un topping sorpresa. Si quieren convertirlo en juego, cada bocado favorito se paga con un beso.",
    "buenasNoches": "Buenas noches, con ganas de ese chocolate compartido pronto. Y si pudiera cerrar este día contigo, escogería preguntarte qué fue lo primero que pensaste al despertar. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes. La cocina puede terminar hecha un pequeño desastre; no importa. Lo importante es terminar riéndonos en el sofá con chocolate todavía en los dedos.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Una mesa llena de papelitos y recuerdos; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 159,
    "categoria": "Escucha",
    "icono": "📚",
    "tono": "filosofica",
    "color": {
      "principal": "#6b2142",
      "suave": "#e3b8c9",
      "oscuro": "#180509"
    },
    "buenosDias": "Buenos días. Hay mañanas que se sienten como una hoja en blanco, y hoy decidí empezar la mía escribiéndote a ti. Hoy quiero agradecerte por escucharme, incluso cuando no tengo mucho interesante que decir. Si hoy estuviéramos juntos, me gustaría que este día empezara en un balcón donde el cielo cambia de color: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo me interesa más la experiencia que la perfección.",
    "poema": [
      "No siempre se valora lo suficiente a alguien que escucha de verdad, sin esperar su turno para hablar.",
      "Tú lo haces, y no pasa desapercibido para mí.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por escucharme, de verdad, no solo por oírme. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el olor de algo recién hecho.",
    "buenasNoches": "Las últimas luces de la casa ya se apagaron, y en la oscuridad, como siempre, apareciste tú primero en mis pensamientos. Buenas noches, agradecido por sentirme escuchado hoy. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque contigo me interesa más la experiencia que la perfección.",
    "notaImagen": "[PARA TI] una foto de su estante de libros o de su lectura actual.",
    "notaCancion": "[PARA TI] algo con atmósfera de historia, cinematográfico.",
    "escenaInmersiva": "Un balcón donde el cielo cambia de color; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 160,
    "categoria": "Hecha Pa' Mí",
    "icono": "📻",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. El aire todavía huele a noche cuando empiezo a escribirte esto. Hoy quiero hablarte de una canción sobre esa sensación de que alguien encaja contigo casi por diseño. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cuarto con música bajita: una manta compartida y dos pies buscando sitio debajo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "Hay una canción de Grupo Frontera que habla justo de eso: de sentir que alguien fue hecho para uno, que encaja de una forma que no se puede explicar del todo.",
      "Contigo siento un poco de esa misma sensación.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Hecha Pa' Mí', de Grupo Frontera. Ya sabes, la que nos hemos compartido antes. Y ojalá tú sientas que yo también fui hecho para ti, tanto como yo lo siento de ti. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una manta compartida y dos pies buscando sitio debajo.",
    "buenasNoches": "Las estrellas, si es que se ven desde donde estás, tienen algo tuyo hoy, aunque suene un poco cursi decirlo así. Buenas noches, hecha para mí, o algo muy parecido a eso. Y si pudiera cerrar este día contigo, escogería abrazarte antes de intentar resolver cualquier cosa. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "cancionUrl": "https://www.youtube.com/watch?v=IbE7peGTpmc",
    "notaImagen": "[MÚSICA] Canción: Hecha Pa' Mí",
    "notaCancion": "[PARA TI] canción real, con link real puesto para que suene ese día.",
    "escenaInmersiva": "Un cuarto con música bajita; una manta compartida y dos pies buscando sitio debajo. abrazarte antes de intentar resolver cualquier cosa. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 161,
    "categoria": "Última vez",
    "icono": "🕰️",
    "tono": "hot",
    "color": {
      "principal": "#a10e35",
      "suave": "#f0aabd",
      "oscuro": "#140208"
    },
    "buenosDias": "Buenos días. Hoy pensé en la última vez que estuvimos cerca, y no he logrado pensar en mucho más desde entonces. Hoy me gustaría robarte unos minutos sin planes ni teléfonos: solo tú, yo y esa clase de silencio que se vuelve demasiado íntimo cuando uno se gusta de verdad.",
    "poema": [
      "Hay recuerdos que quedan grabados con más detalle del normal, y ese es definitivamente uno de esos.",
      "Quiero que sigamos haciendo recuerdos así, seguido, sin dejar que pase tanto tiempo entre uno y otro.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "¿Cuándo repetimos? Pregunto completamente en serio. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la lluvia golpeando despacio los vidrios.",
    "buenasNoches": "Buenas noches, todavía en ese recuerdo, sin ganas de salir de ahí. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un pasillo silencioso antes de dormir; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 162,
    "categoria": "Estrofa nueva",
    "icono": "🎵",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. El teléfono marcó la hora y, en automático, pensé en ti antes de pensar en cualquier pendiente del día. Ritmo fresco para un día lleno de actividades y pendientes. Si hoy estuviéramos juntos, me gustaría que este día empezara en una ventana abierta al aire fresco: el roce casual que termina sintiéndose importante. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "Tus ojos lindos mirando hacia el frente",
      "son la mejor vista que podría desear.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "Ponla en tu reproductor y que suene de fondo mientras trabajas. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante.",
    "buenasNoches": "Hay una quietud distinta en las noches, de esas que invitan a pensar despacio en lo que de verdad importa. Descansa la mente de tanta pantalla. Y si pudiera cerrar este día contigo, escogería bailar contigo aunque no haya espacio. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[MÚSICA] Canción: Ojitos Lindos",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una ventana abierta al aire fresco; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 163,
    "categoria": "Arepas Rellenas",
    "icono": "🫓",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy va algo bien nuestro: arepas rellenas, hechas en casa, sin prisa. Si hoy estuviéramos juntos, me gustaría que este día empezara en un trayecto cualquiera que de pronto se vuelve especial: la sensación de una mano buscando otra sin pensarlo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "Cada quien puede rellenar la suya como quiera: queso, hogao, carne desmechada, lo que se antoje ese día.",
      "Es de esas comidas simples que terminan siendo una excusa perfecta para pasar la tarde en la cocina.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: arepas rellenas hechas entre los dos. Uno arma las arepas y el otro prepara el relleno; luego cambian. Después, película elegida por quien no cocinó el relleno.",
    "buenasNoches": "Buenas noches, con antojo de arepas caseras contigo. Y si pudiera cerrar este día contigo, escogería preguntarte qué parte del día quieres guardar. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día. Después de cenar, arrunchis sin celulares durante media hora. Que la comida sea solo la excusa para llegar a esa parte.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Un trayecto cualquiera que de pronto se vuelve especial; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 164,
    "categoria": "Canción de lunes",
    "icono": "🎼",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. Hay una energía distinta en los días que empiezan escribiéndote, no sabría explicar bien por qué. Música acústica y cálida para acompañar tu café matutino. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cafetería imaginaria donde solo estamos tú y yo: una canción que parece llegar exactamente en el momento correcto. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Que bonito es coincidir en esta vida contigo,",
      "sabiendo que cada nota nos acerca un poco más.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Disfruta de tu bebida caliente y relájate un rato hoy. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "Hay noches donde el cansancio gana rápido, y aun así encontré energía para pensarte un rato más. Que tengas una noche muy tranquila y reparadora. Y si pudiera cerrar este día contigo, escogería mirarte unos segundos más de lo necesario. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[MÚSICA] Canción: Tú Sí Sabes Querírmeme",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una cafetería imaginaria donde solo estamos tú y yo; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 165,
    "categoria": "Gravedad",
    "icono": "🌌",
    "tono": "filosofica",
    "color": {
      "principal": "#43225c",
      "suave": "#cdb8e8",
      "oscuro": "#0d0716"
    },
    "buenosDias": "Buenos días. El café todavía está humeando cuando ya estoy pensando en qué decirte hoy. Todo lo importante cae hacia lo que ama, y yo aprendí a caer hacia ti sin miedo a estrellarme. Si hoy estuviéramos juntos, me gustaría que este día empezara en un lugar cualquiera que se convierte en nuestro por compartirlo: el calor queda después de un abrazo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "Tu gravedad es la única que me sostiene en los días en que todo pesa más de la cuenta.",
      "No necesito otro centro si contigo ya encontré el mío.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por sostenerme, incluso sin saber que lo hacías. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el calor queda después de un abrazo.",
    "buenasNoches": "La luz de la lámpara es lo único encendido ya en este cuarto, y sigo aquí, pensando en cómo cerrar bien el día contigo en mente. Buenas noches, orbitando cerca de ti, como siempre. Y si pudiera cerrar este día contigo, escogería pedirte que me cuentes una historia que nunca me hayas contado. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Un lugar cualquiera que se convierte en nuestro por compartirlo; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 166,
    "categoria": "Confianza",
    "icono": "☀️",
    "tono": "amor",
    "color": {
      "principal": "#f2b705",
      "suave": "#fff0b3",
      "oscuro": "#251c02"
    },
    "buenosDias": "Buenos días. Antes de revisar cualquier otra cosa en el teléfono, ya estaba escribiéndote esto. Hoy quiero hablar de algo que se construye despacio: la confianza. Si hoy estuviéramos juntos, me gustaría que este día empezara en una tarde que huele a lluvia: la luz tibia que se queda unos segundos sobre la pared. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "poema": [
      "No es fácil confiar así, completo, sin reservas, y contigo se me ha hecho más fácil de lo que esperaba.",
      "Gracias por cuidar esa confianza.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "Prometo seguir cuidando la tuya también. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la luz tibia que se queda unos segundos sobre la pared.",
    "buenasNoches": "Hay noches que se sienten largas y noches que se sienten cortas, y esta, contigo en la cabeza, se sintió de las buenas. Buenas noches, tranquilo, confiando en esto que construimos. Y si pudiera cerrar este día contigo, escogería dejarte una nota donde menos la esperes. Me gusta pensar que porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "notaImagen": "[PARA TI] una foto de ustedes dos, si ya tienen alguna.",
    "notaCancion": "[PARA TI] algo especial, tal vez la primera canción que asocien a los dos.",
    "escenaInmersiva": "Una tarde que huele a lluvia; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 167,
    "categoria": "505",
    "icono": "🚗",
    "tono": "filosofica",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. El día apenas empieza a definirse, pero ya sé que una parte de él va a estar dedicada a pensar en ti. Hoy quiero hablarte de una canción sobre las ganas de llegar a algún lugar solo para estar con alguien. Si hoy estuviéramos juntos, me gustaría que este día empezara en una noche con la ciudad respirando detrás de la ventana: el cambio de color del cielo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Hay una canción de Arctic Monkeys que habla de recorrer cualquier distancia con tal de volver a ver a esa persona, con una urgencia que no se puede disimular.",
      "Contigo entiendo esa urgencia: no me importaría el trayecto si al final estás tú.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama '505', de Arctic Monkeys. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cambio de color del cielo.",
    "buenasNoches": "Hay una versión más honesta de mí que solo sale de noche, y esa versión también te quiere mucho. Buenas noches, con ganas de acortar cualquier distancia entre los dos. Y si pudiera cerrar este día contigo, escogería hacerte un café y dejarlo cerca de ti sin decir demasiado. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[MÚSICA] Canción: 505",
    "notaCancion": "[PARA TI] canción real: '505' - Arctic Monkeys.",
    "escenaInmersiva": "Una noche con la ciudad respirando detrás de la ventana; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 168,
    "categoria": "Lirio",
    "icono": "🤍",
    "tono": "filosofica",
    "color": {
      "principal": "#efe6d8",
      "suave": "#fbf6ec",
      "oscuro": "#1c1a14"
    },
    "buenosDias": "Buenos días. El cielo todavía tiene ese color raro de las mañanas que no se deciden entre gris y celeste. Hoy quiero hablarte despacio, como quien no quiere apurar nada bonito. Si hoy estuviéramos juntos, me gustaría que este día empezara en un automóvil detenido mientras termina una canción: el aire fresco entrando por la ventana. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "El lirio no necesita gritar para ser hermoso; le basta con estar.",
      "Así quiero quererte: sin ruido, sin prisa, pero seguro.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "Significado del lirio: pureza y una devoción tranquila. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el aire fresco entrando por la ventana.",
    "buenasNoches": "El día se despide con la misma certeza de siempre: que quiero que mañana empiece igual, pensando en ti primero. Buenas noches. Que tu descanso sea tan sereno como hoy quise que fuera el día. Y si pudiera cerrar este día contigo, escogería quedarme cerca mientras haces algo que te gusta. Me gusta pensar que porque elegirte también es aprender tus detalles.",
    "notaImagen": "[PARA TI] una foto de lirios, o algo en tonos blancos/crema.",
    "notaCancion": "[PARA TI] algo instrumental, tranquilo.",
    "escenaInmersiva": "Un automóvil detenido mientras termina una canción; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 169,
    "categoria": "Noche de Tacos",
    "icono": "🌮",
    "tono": "amor",
    "color": {
      "principal": "#e0632f",
      "suave": "#ffcfa8",
      "oscuro": "#2b1103"
    },
    "buenosDias": "Buenos días. Hoy va una idea divertida: armar tacos cada quien a su gusto, con las manos, sin tanta formalidad. Si hoy estuviéramos juntos, me gustaría que este día empezara en una calle que todavía no se llena de gente: el cansancio bonito después de un día compartido. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "Tortillas calientes, varias proteínas, salsas de distinto picor, y que cada quien arme el suyo como quiera.",
      "Hay algo entretenido en comer así, cerca, compartiendo salsas y riéndose de quién eligió mal el picante.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "Prepárate, voy a exagerar con la salsa picante solo para ver tu reacción. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cansancio bonito después de un día compartido.",
    "buenasNoches": "Buenas noches, con antojo de esa noche de tacos desordenada. Y si pudiera cerrar este día contigo, escogería inventarnos un plan sencillo para cuando podamos vernos. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una calle que todavía no se llena de gente; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 170,
    "categoria": "Canción prestada",
    "icono": "🎤",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. Hay un tipo de calma particular en escribir esto antes de que el celular empiece a sonar con todo lo demás. Estilo británico clásico con una letra que se queda grabada. Si hoy estuviéramos juntos, me gustaría que este día empezara en un parque casi vacío: la música escapándose de un parlante cercano. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "Quiero ser tu refugio y tu canción favorita,",
      "el sitio al que siempre quieras volver.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "Tómate una pausa y disfruta de esta gran obra musical. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la música escapándose de un parlante cercano. Juego de canciones: manda tres títulos que juntos formen una frase sobre nosotros. Sin explicar la frase; el otro tiene que descifrarla.",
    "buenasNoches": "Hay un silencio particular a esta hora que hace que las palabras pesen distinto, más sinceras. Que descanses y recargues baterías. Y si pudiera cerrar este día contigo, escogería dejar que el silencio haga su parte. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[MÚSICA] Canción: I Wanna Be Yours",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un parque casi vacío; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 171,
    "categoria": "Canción a solas",
    "icono": "🌙",
    "tono": "hot",
    "color": {
      "principal": "#b3123f",
      "suave": "#f2b3c4",
      "oscuro": "#170209"
    },
    "buenosDias": "Buenos días. Hay canciones que solo suenan bien de verdad cuando estamos los dos, sin nadie más alrededor escuchando. Hay mañanas en las que el cariño llega primero. Hoy llegó el deseo: esas ganas tranquilas de tenerte cerca, de mirarte sin prisa y de dejar que el resto del mundo espere un rato.",
    "poema": [
      "No hablo de una canción cualquiera. Hablo de esas que se disfrutan mejor cerca, en voz baja, sin prisa por que termine.",
      "Ya tengo varias guardadas para cuando estemos a solas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "Prepárate. Tengo buen criterio para elegir esas canciones. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí.",
    "buenasNoches": "Buenas noches, guardando canciones para cuando estemos solos. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una playa que todavía guarda calor en la arena; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 172,
    "categoria": "Obsesión bonita",
    "icono": "🖤",
    "tono": "filosofica",
    "color": {
      "principal": "#3a1f5c",
      "suave": "#c9b8e6",
      "oscuro": "#0c0716"
    },
    "buenosDias": "Buenos días. El sol todavía no calienta del todo, pero algo aquí adentro ya empezó a hacerlo. Voy a ser honesto: pienso en ti más de lo que es sano admitir. Si hoy estuviéramos juntos, me gustaría que este día empezara en una habitación todavía en penumbra: el silencio cómodo que no necesita explicación. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "poema": [
      "No es una obsesión de las que dañan, es de las otras, de las que te hacen mejor persona sin que te des cuenta.",
      "Pienso en ti al despertar, y eso, lejos de cansarme, es de las pocas certezas que tengo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "No pienso pedir disculpas por pensar tanto en ti. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el silencio cómodo que no necesita explicación.",
    "buenasNoches": "Hay algo tranquilizador en saber que, sin importar cómo estuvo el día, esto de escribirte de noche no cambia. Buenas noches, todavía pensando en ti, como toda la mañana. Y si pudiera cerrar este día contigo, escogería recordar una conversación que todavía me hace sonreír. Me gusta pensar que porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Una habitación todavía en penumbra; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 173,
    "categoria": "Jazmín",
    "icono": "🪷",
    "tono": "filosofica",
    "color": {
      "principal": "#e7e0c9",
      "suave": "#faf7ec",
      "oscuro": "#1a170f"
    },
    "buenosDias": "Buenos días. Hay mañanas silenciosas y mañanas ruidosas, y esta, por suerte, es de las tranquilas. Hoy quiero que el día huela bonito, como esas noches de jazmín. Si hoy estuviéramos juntos, me gustaría que este día empezara en un sofá con una manta compartida: la respiración tranquila cuando por fin baja el ruido del día. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "El jazmín suelta su aroma más fuerte de noche, cuando parece que nadie está mirando.",
      "Me gusta pensar que tú también guardas tus mejores partes para los momentos tranquilos, cuando de verdad importa.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "Significado del jazmín: amor puro y una calma bonita. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la respiración tranquila cuando por fin baja el ruido del día.",
    "buenasNoches": "El silencio de la noche siempre hace que las cosas simples, como decir buenas noches, se sientan un poco más importantes. Buenas noches, que el aroma del día se quede en el recuerdo. Y si pudiera cerrar este día contigo, escogería guardar una frase tuya para recordarla después. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[PARA TI] una foto de jazmines o flores blancas pequeñas.",
    "notaCancion": "[PARA TI] algo tranquilo, para la noche.",
    "escenaInmersiva": "Un sofá con una manta compartida; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 174,
    "categoria": "Panqueques Domingueros",
    "icono": "🥞",
    "tono": "amor",
    "color": {
      "principal": "#f2e94e",
      "suave": "#faf6cf",
      "oscuro": "#141a08"
    },
    "buenosDias": "Buenos días. Hoy va una idea para una mañana lenta: panqueques hechos en pijama, sin apuro por nada. Si hoy estuviéramos juntos, me gustaría que este día empezara en un domingo lento: el ruido lejano de la ciudad. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo me interesa más la experiencia que la perfección.",
    "poema": [
      "No hace falta receta complicada, solo harina, huevo, leche, y ganas de quedarse en casa toda la mañana.",
      "Es de esos planes que se sienten más como un abrazo que como un desayuno.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: panqueques domingueros. Uno prepara la mezcla y el otro inventa toppings. Después desayunen tarde viendo una película que ya hayan visto mil veces.",
    "buenasNoches": "Buenas noches, soñando con ese desayuno lento de domingo. Y si pudiera cerrar este día contigo, escogería cocinar algo que salga imperfecto pero nuestro. Me gusta pensar que porque contigo me interesa más la experiencia que la perfección. Un domingo perfecto termina con migas en la manta, sueño y ganas de quedarse cinco minutos más abrazados.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Un domingo lento; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 175,
    "categoria": "A Thousand Years",
    "icono": "⏳",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. El ruido de la calle todavía no arranca del todo, y en ese pequeño espacio de calma te escribo esto. Hoy quiero hablarte de una canción sobre un amor que se siente como si llevara esperando mucho más tiempo del que en realidad lleva. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cielo nublado que no termina de decidirse: ese segundo de silencio antes de decir algo que importa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "Hay una canción de Christina Perri que habla de haber esperado mil años por alguien, y de estar dispuesto a esperar mil más si hace falta.",
      "Contigo no siento que haya esperado tanto, pero sí siento que valió la pena todo lo que esperé antes de encontrarte.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'A Thousand Years', de Christina Perri. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: ese segundo de silencio antes de decir algo que importa.",
    "buenasNoches": "Hay algo bonito en cerrar el día pensando en la misma persona con la que se abrió, y hoy fue así otra vez. Buenas noches, agradecido de no tener que esperar más. Y si pudiera cerrar este día contigo, escogería hacerte reír con una tontería. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "notaImagen": "[MÚSICA] Canción: A Thousand Years",
    "notaCancion": "[PARA TI] canción real: 'A Thousand Years' - Christina Perri.",
    "escenaInmersiva": "Un cielo nublado que no termina de decidirse; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 176,
    "categoria": "Eres",
    "icono": "🌻",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. Hay mañanas donde uno se siente con ganas de todo, y esta parece ser una de esas. Hoy quiero hablarte de una canción de rock en español bien simple en su mensaje: que alguien lo es todo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cama desordenada después de una noche larga: la sombra de las hojas moviéndose sobre el suelo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque no quiero quererte solamente en los momentos fáciles.",
    "poema": [
      "Hay una canción de Café Tacvba que habla de alguien que resume todo lo bueno en una sola persona, sin necesitar comparaciones.",
      "Contigo pasa eso: no necesito comparar, ya sé que eres mucho.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Eres', de Café Tacvba. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sombra de las hojas moviéndose sobre el suelo.",
    "buenasNoches": "El día ya cumplió su ciclo completo, y como siempre, terminó pensando en la misma persona con la que empezó. Buenas noches, siendo simple y claro: eres mucho para mí. Y si pudiera cerrar este día contigo, escogería mirar el cielo y buscarle un nombre a la forma de una nube. Me gusta pensar que porque no quiero quererte solamente en los momentos fáciles.",
    "notaImagen": "[MÚSICA] Canción: Eres",
    "notaCancion": "[PARA TI] canción real: 'Eres' - Café Tacvba.",
    "escenaInmersiva": "Una cama desordenada después de una noche larga; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 177,
    "categoria": "Peluches",
    "icono": "🧸",
    "tono": "amor",
    "color": {
      "principal": "#d9a066",
      "suave": "#f5dfc0",
      "oscuro": "#241708"
    },
    "buenosDias": "Buenos días. El despertador sonó dos veces antes de que lograra levantarme, y en el medio, sin darme cuenta, ya estaba pensando en ti. Hoy es un día para lo que abraza sin pedir nada a cambio. Si hoy estuviéramos juntos, me gustaría que este día empezara en una esquina iluminada por el sol de la tarde: el sonido pequeño de una taza al tocar la mesa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "Un peluche no promete nada y aun así, ahí está, siempre que lo necesitas.",
      "Quiero ser eso para ti también, algo a lo que puedas volver cuando el día se sienta pesado.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "Si tienes un peluche favorito, dale un abrazo de mi parte hoy. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa.",
    "buenasNoches": "Las luces de la calle ya se encendieron hace rato, y aquí sigo, pensando en ti antes de dormir. Buenas noches. Abraza fuerte lo que te haga sentir en casa. Y si pudiera cerrar este día contigo, escogería caminar sin destino mientras hablamos. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[PARA TI] una foto de su peluche favorito, si tiene uno.",
    "notaCancion": "[PARA TI] algo tierno, de cuna casi, para dormir tranquila.",
    "escenaInmersiva": "Una esquina iluminada por el sol de la tarde; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 178,
    "categoria": "Pensando en Ti",
    "icono": "🎶",
    "tono": "filosofica",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Hoy el despertar fue lento, de esos donde uno se queda un rato más en la cama solo pensando. Hoy quiero hablarte de una canción que, aunque es triste, me hace valorar más lo que tenemos. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina llena de pequeñas cosas por ordenar: la risa que llega antes que la respuesta. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "Hay una canción de Canserbero que habla de todo lo que se pierde cuando alguien se va, y de las ganas de no haber dejado que pasara.",
      "A mí me sirve para recordar que no quiero llegar nunca a sentir eso contigo, y que prefiero cuidar esto mientras lo tengo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Pensando en Ti', de Canserbero. Es melancólica, pero también un buen recordatorio de no dar por sentado lo bueno. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la risa que llega antes que la respuesta.",
    "buenasNoches": "Afuera ya no se escucha casi nada, solo el silencio típico de esta hora, cómodo, tranquilo. Buenas noches, agradecido de no tener que pensarte desde la distancia. Y si pudiera cerrar este día contigo, escogería preguntarte qué fue lo primero que pensaste al despertar. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[MÚSICA] Canción: Pensando en Ti",
    "notaCancion": "[PARA TI] canción real: 'Pensando en Ti' - Canserbero.",
    "escenaInmersiva": "Una cocina llena de pequeñas cosas por ordenar; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 179,
    "categoria": "Pan de Ajo Casero",
    "icono": "🥖",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy va algo simple pero rico: pan de ajo casero, de esos que llenan la casa de un olor buenísimo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina con la primera taza sobre la mesa: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Mantequilla, ajo picado, un poco de perejil, y horno. Nada complicado, pero el resultado siempre sorprende.",
      "Combina perfecto con una copa de vino y una conversación larga.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: pan de ajo casero para acompañar la cena. Pongan música mientras cocinan y, cuando salga del horno, no se sienten inmediatamente: prueben un pedazo juntos en la cocina.",
    "buenasNoches": "Buenas noches, con el antojo de ese olor a pan recién hecho. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban. Después de comer, sofá y manta. Me gusta la idea de que cocinar contigo termine siempre en una excusa para acercarnos más.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Una cocina con la primera taza sobre la mesa; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 180,
    "categoria": "Something",
    "icono": "🎸",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Todavía hace frío afuera, pero aquí adentro algo ya se siente tibio desde temprano. Hoy quiero hablarte de una canción sobre esa cosa en alguien que atrae sin que uno pueda explicar bien por qué. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa con dos vasos y algo pendiente de conversar: la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "Hay una canción de The Beatles que habla de algo en la forma de moverse de una persona que atrae de una manera que ninguna otra persona logra igualar.",
      "Tú tienes ese 'algo' conmigo, de esos que no se explican fácil.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Something', de The Beatles. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras.",
    "buenasNoches": "El ruido de afuera bajó por completo, y en ese silencio hay espacio de sobra para pensar en ti con calma. Buenas noches, todavía sin poder explicar bien ese algo tuyo. Y si pudiera cerrar este día contigo, escogería abrazarte antes de intentar resolver cualquier cosa. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[MÚSICA] Canción: Something",
    "notaCancion": "[PARA TI] canción real: 'Something' - The Beatles.",
    "escenaInmersiva": "Una mesa con dos vasos y algo pendiente de conversar; la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras. abrazarte antes de intentar resolver cualquier cosa. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 181,
    "categoria": "Ritual",
    "icono": "🔥",
    "tono": "hot",
    "color": {
      "principal": "#d1163f",
      "suave": "#f7bccb",
      "oscuro": "#1c0409"
    },
    "buenosDias": "Buenos días. Hoy quiero proponerte un ritual nuevo, un poco más íntimo que los que ya tenemos. Hoy me dieron ganas de escribirte antes de que el día terminara de despertarse. No solo porque te extraño: porque hay una parte de mí que disfruta imaginarte cerca, con esa mezcla tuya de calma y peligro que me desarma.",
    "poema": [
      "No hablo de rituales aburridos. Hablo de los que solo existen cuando estamos los dos, a solas, sin ningún tipo de prisa.",
      "Ya quiero empezar a construir esos rituales contigo, en serio.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "Piensa en cuál te gustaría que fuera el primero. Yo ya tengo un par de ideas. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la lluvia golpeando despacio los vidrios.",
    "buenasNoches": "Buenas noches, pensando en rituales todavía pendientes de estrenar. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un día de semana que pide una pausa; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 182,
    "categoria": "Dedicatoria",
    "icono": "🎼",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. El primer pensamiento coherente del día, antes que cualquier lista de pendientes, fue sobre ti. Letras profundas de rap consciente para reflexionar un momento. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa llena de papelitos y recuerdos: el roce casual que termina sintiéndose importante. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Querer querernos sin importar las reglas del mundo,",
      "creando nuestro propio camino.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "Date un respiro real hoy y escucha esta letra con atención. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante.",
    "buenasNoches": "El cielo ya está completamente oscuro, y en algún lugar de ahí arriba hay una estrella que, según decidí hoy, es tuya. Que tengas una noche muy tranquila. Y si pudiera cerrar este día contigo, escogería bailar contigo aunque no haya espacio. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[MÚSICA] Canción: Querer Querernos",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una mesa llena de papelitos y recuerdos; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 183,
    "categoria": "Descontrol",
    "icono": "💥",
    "tono": "hot",
    "color": {
      "principal": "#a10e35",
      "suave": "#f0aabd",
      "oscuro": "#140208"
    },
    "buenosDias": "Buenos días. Hoy admito, sin vergüenza, que contigo pierdo un poco el control, y no me molesta para nada. Hay mañanas en las que el cariño llega primero. Hoy llegó el deseo: esas ganas tranquilas de tenerte cerca, de mirarte sin prisa y de dejar que el resto del mundo espere un rato.",
    "poema": [
      "Hay una versión mía más calculada que uso casi siempre, y hay otra que solo aparece contigo, que actúa más por instinto que por plan.",
      "Hoy salió esa segunda versión, sin previo aviso.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "No pidas que me controle hoy. No va a pasar, ni lo voy a intentar. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sensación de una mano buscando otra sin pensarlo.",
    "buenasNoches": "Buenas noches, todavía sin mucho control, la verdad. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un balcón donde el cielo cambia de color; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 184,
    "categoria": "Mar",
    "icono": "🌊",
    "tono": "filosofica",
    "color": {
      "principal": "#2ea3a3",
      "suave": "#c3f0ee",
      "oscuro": "#062020"
    },
    "buenosDias": "Buenos días. Afuera el día apenas se estira, y aquí ya estoy yo, pensando en ti antes que en cualquier otra cosa. Hoy pensé en ti y en el mar, no sé por qué siempre van juntos. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cuarto con música bajita: una canción que parece llegar exactamente en el momento correcto. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "Hay algo en el mar que se parece a ti: no siempre está tranquilo, pero siempre vuelve a calmarse.",
      "Y de todas formas, uno siempre quiere volver a verlo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Cuando podamos, quiero llevarte a ver el mar y no hacer nada más que mirarlo contigo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto. Juego de imaginación: si el mar pudiera guardar un secreto nuestro, ¿qué secreto le dejarías? Vale responder bonito, raro o peligrosamente coqueto.",
    "buenasNoches": "Las cobijas ya están listas, y en un rato, cuando cierre los ojos, sé exactamente en quién voy a pensar. Buenas noches, que sueñes con olas tranquilas. Y si pudiera cerrar este día contigo, escogería mirarte unos segundos más de lo necesario. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[PARA TI] una foto de playa o mar que les guste.",
    "notaCancion": "[PARA TI] algo costero, relajado, de esas para playa.",
    "escenaInmersiva": "Un cuarto con música bajita; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 185,
    "categoria": "Monserrate",
    "icono": "⛰️",
    "tono": "filosofica",
    "color": {
      "principal": "#5c7d99",
      "suave": "#d4e3ee",
      "oscuro": "#0d1a24"
    },
    "buenosDias": "Buenos días. Hoy pensé en un plan clásico pero que nunca falla: subir a Monserrate a ver caer el sol sobre toda la ciudad. Si hoy estuviéramos juntos, me gustaría que este día empezara en un pasillo silencioso antes de dormir: el calor queda después de un abrazo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "Desde arriba, Bogotá se ve distinta: más pequeña, más tranquila, como si todo lo que preocupa allá abajo perdiera un poco de peso.",
      "Podemos subir caminando o en el teleférico, y bajar a comer algo caliente después, con el frío ya metido en los huesos.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "El santuario arriba también vale la pena verlo, aunque sea solo por la arquitectura. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el calor queda después de un abrazo.",
    "buenasNoches": "Buenas noches, con la ciudad entera todavía en la cabeza, vista desde arriba. Y si pudiera cerrar este día contigo, escogería pedirte que me cuentes una historia que nunca me hayas contado. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Un pasillo silencioso antes de dormir; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 186,
    "categoria": "Electricidad",
    "icono": "⚡",
    "tono": "hot",
    "color": {
      "principal": "#c81d4a",
      "suave": "#f7c0d0",
      "oscuro": "#1a0308"
    },
    "buenosDias": "Buenos días. Hay una carga entre nosotros que últimamente no se ha podido descargar del todo como debería. Hay algo peligrosamente bonito en saber que una persona te atrae y, al mismo tiempo, te da paz. Tú tienes esa combinación que me hace querer acercarme y quedarme.",
    "poema": [
      "Cada vez que nos acercamos algo se enciende, y cada vez que nos separamos ese algo se queda pendiente, acumulándose despacio.",
      "Ya va siendo hora de una buena descarga, ¿no crees?",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "Prepárate. Hay electricidad acumulada esperando salida. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la luz tibia que se queda unos segundos sobre la pared.",
    "buenasNoches": "Buenas noches, todavía cargado, esperando el momento correcto. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una ventana abierta al aire fresco; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 187,
    "categoria": "Certezas",
    "icono": "🔮",
    "tono": "amor",
    "color": {
      "principal": "#8f5fd1",
      "suave": "#e0d3fa",
      "oscuro": "#160a2b"
    },
    "buenosDias": "Buenos días. Hay una calma particular en las primeras horas, antes de que el ruido del día se meta por todos lados. No tengo todas las respuestas de la vida, pero de ti sí tengo certeza. Si hoy estuviéramos juntos, me gustaría que este día empezara en un trayecto cualquiera que de pronto se vuelve especial: el cambio de color del cielo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "poema": [
      "Hay pocas cosas de las que estoy completamente seguro, y una de esas es que quiero seguir aquí, contigo.",
      "Esa certeza no ha cambiado ni un solo día.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Eres de las pocas certezas que tengo, y no es poca cosa. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cambio de color del cielo. Reto de certezas: cada uno escribe tres “sé que tú…” y una “todavía quiero descubrir…”. La última puede abrir una conversación inesperada.",
    "buenasNoches": "Las cosas del día ya quedaron atrás, y lo único que sigue presente, como siempre, eres tú. Buenas noches, seguro de esto, como siempre. Y si pudiera cerrar este día contigo, escogería hacerte un café y dejarlo cerca de ti sin decir demasiado. Me gusta pensar que porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "notaImagen": "[PARA TI] otra foto en morado, algo que le guste especialmente.",
    "notaCancion": "[PARA TI] algo con más profundidad, atmosférico.",
    "escenaInmersiva": "Un trayecto cualquiera que de pronto se vuelve especial; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 188,
    "categoria": "Vibración",
    "icono": "🎧",
    "tono": "filosofica",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hay una quietud bonita en las mañanas de entre semana que casi nadie aprovecha, y hoy la usé para esto. Música alegre para recordarte que las cosas bonitas toman su tiempo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cafetería imaginaria donde solo estamos tú y yo: el aire fresco entrando por la ventana. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "Caminar a tu lado convierte cualquier día común",
      "en una anécdota que vale la pena contar.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "Guarda este tema en tu repertorio personal. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el aire fresco entrando por la ventana.",
    "buenasNoches": "El día terminó, con sus cosas buenas y sus cosas normales, pero contigo en la mente el balance siempre sale bien. Que descanses profundamente. Y si pudiera cerrar este día contigo, escogería quedarme cerca mientras haces algo que te gusta. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[MÚSICA] Canción: Contigo",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una cafetería imaginaria donde solo estamos tú y yo; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 189,
    "categoria": "Lo Que en Ti Veo",
    "icono": "📻",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy me desperté antes de la alarma, y en ese ratito extra, sin planearlo, ya estaba pensando en ti. Hoy quiero hablarte de una canción sobre ver en alguien algo que nadie más nota. Si hoy estuviéramos juntos, me gustaría que este día empezara en un lugar cualquiera que se convierte en nuestro por compartirlo: el cansancio bonito después de un día compartido. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo me interesa más la experiencia que la perfección.",
    "poema": [
      "Hay una canción de Andrés Cepeda que habla de todo lo que se ve en una persona cuando de verdad se le presta atención, cosas que a simple vista se podrían pasar por alto.",
      "Contigo me pasa eso: veo muchas cosas bonitas que quizás tú ni siquiera notas de ti misma.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Lo Que en Ti Veo', de Andrés Cepeda. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cansancio bonito después de un día compartido.",
    "buenasNoches": "El silencio de la casa a esta hora es distinto a cualquier otro momento del día, más íntimo, más real. Buenas noches, viendo en ti lo mismo de siempre: mucho. Y si pudiera cerrar este día contigo, escogería inventarnos un plan sencillo para cuando podamos vernos. Me gusta pensar que porque contigo me interesa más la experiencia que la perfección.",
    "notaImagen": "[MÚSICA] Canción: Lo Que en Ti Veo",
    "notaCancion": "[PARA TI] canción real: 'Lo Que en Ti Veo' - Andrés Cepeda.",
    "escenaInmersiva": "Un lugar cualquiera que se convierte en nuestro por compartirlo; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 190,
    "categoria": "La Candelaria",
    "icono": "🏘️",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy quiero proponerte perdernos un rato por las calles de La Candelaria, sin ruta fija. Si hoy estuviéramos juntos, me gustaría que este día empezara en una tarde que huele a lluvia: la música escapándose de un parlante cercano. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "Casas coloniales de colores, grafitis enormes en cada esquina, y el Chorro de Quevedo al final del recorrido, con sus historias de cuenteros callejeros.",
      "Ahí cerca hay canelazo caliente, perfecto para el frío del centro.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "Vamos sin apuro, deteniéndonos en cada mural que nos guste. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la música escapándose de un parlante cercano.",
    "buenasNoches": "Buenas noches, con ganas de perdernos por esas calles contigo. Y si pudiera cerrar este día contigo, escogería dejar que el silencio haga su parte. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Una tarde que huele a lluvia; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 191,
    "categoria": "Calor",
    "icono": "🌙",
    "tono": "hot",
    "color": {
      "principal": "#a10e35",
      "suave": "#f0aabd",
      "oscuro": "#140208"
    },
    "buenosDias": "Buenos días. Anoche no fue un sueño cualquiera, y prefiero no dar más detalles por este medio. Hoy me gustaría robarte unos minutos sin planes ni teléfonos: solo tú, yo y esa clase de silencio que se vuelve demasiado íntimo cuando uno se gusta de verdad.",
    "poema": [
      "Hay una parte de mí que solo te muestro cuando estamos a solas, y hoy esa parte amaneció con ganas de salir a saludar temprano.",
      "No te voy a contar todo lo que se me ocurrió, pero si me preguntas en persona no me voy a hacer el difícil.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "Pregúntame en persona qué soñé. No te vas a arrepentir de preguntar. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí.",
    "buenasNoches": "Buenas noches, con ganas de que esta noche se repita, pero contigo de verdad presente. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una noche con la ciudad respirando detrás de la ventana; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 192,
    "categoria": "Herida bonita",
    "icono": "🥀",
    "tono": "filosofica",
    "color": {
      "principal": "#5c1f3d",
      "suave": "#d9a7bd",
      "oscuro": "#12040a"
    },
    "buenosDias": "Buenos días. Hay una luz particular en las mañanas de esta semana, de esas que entran de lado y hacen que todo se vea un poco más honesto. Hay amores que sanan y amores que remueven, y el tuyo hace las dos cosas a la vez. Si hoy estuviéramos juntos, me gustaría que este día empezara en un automóvil detenido mientras termina una canción: el silencio cómodo que no necesita explicación. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "Me has hecho ver partes de mí que no sabía que existían, algunas bonitas, otras incómodas, todas necesarias.",
      "No todo lo que ayuda a crecer se siente cómodo, y aun así, elijo quedarme.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por remover lo que había que remover. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el silencio cómodo que no necesita explicación.",
    "buenasNoches": "El día ya se apagó casi del todo, y antes de cerrar los ojos quería dejarte esto. Buenas noches, más entero de lo que estaba antes de ti. Y si pudiera cerrar este día contigo, escogería recordar una conversación que todavía me hace sonreír. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Un automóvil detenido mientras termina una canción; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 193,
    "categoria": "Madrugada",
    "icono": "🌃",
    "tono": "hot",
    "color": {
      "principal": "#c81d4a",
      "suave": "#f7c0d0",
      "oscuro": "#1a0308"
    },
    "buenosDias": "Buenos días, aunque este mensaje tiene más de madrugada que de mañana en lo que realmente dice. Hoy me dieron ganas de escribirte antes de que el día terminara de despertarse. No solo porque te extraño: porque hay una parte de mí que disfruta imaginarte cerca, con esa mezcla tuya de calma y peligro que me desarma.",
    "poema": [
      "Hay una hora rara de la noche en la que pienso en ti de una forma nada inocente, sin que pueda evitarlo del todo.",
      "Si me ves con cara de poco dormida, ya sabes exactamente en qué estaba pensando.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "Pregúntame en qué pensaba, si te atreves a preguntar. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la respiración tranquila cuando por fin baja el ruido del día.",
    "buenasNoches": "Buenas noches, con la madrugada todavía rondando la cabeza. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una calle que todavía no se llena de gente; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 194,
    "categoria": "Amor Libre",
    "icono": "🎼",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. Hay días que empiezan con prisa y días que empiezan despacio, y este es de los segundos, justo lo que necesitaba. Hoy quiero hablarte de una canción que describe el amor como algo que libera, no que encierra. Si hoy estuviéramos juntos, me gustaría que este día empezara en un parque casi vacío: el ruido lejano de la ciudad. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Hay una canción de Nach donde compara a la persona que ama con la flor más bonita y con la paz en medio del caos, y dice que a su lado se siente invencible.",
      "Contigo me pasa algo parecido: no siento que esto me quite libertad, siento que me la da.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Amor Libre', de Nach. Tiene una de esas letras que suenan a poema bien armado. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el ruido lejano de la ciudad.",
    "buenasNoches": "El teléfono ya está casi sin batería, pero antes de que se apague quería mandarte esto. Buenas noches, libre y tranquilo, gracias a ti. Y si pudiera cerrar este día contigo, escogería cocinar algo que salga imperfecto pero nuestro. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[MÚSICA] Canción: Amor Libre",
    "notaCancion": "[PARA TI] canción real: 'Amor Libre' - Nach (feat. Shuga Wuga).",
    "escenaInmersiva": "Un parque casi vacío; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 195,
    "categoria": "Torre Colpatria",
    "icono": "🌃",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Hoy pensé en un plan de noche: subir a un mirador y ver Bogotá encendida, completa. Si hoy estuviéramos juntos, me gustaría que este día empezara en una playa que todavía guarda calor en la arena: ese segundo de silencio antes de decir algo que importa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "Desde arriba, la ciudad se ve como un mapa de luces sin fin, y siempre queda ese momento de silencio donde ninguno de los dos dice nada, solo mira.",
      "Vale la pena verla así al menos una vez.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Llevemos algo caliente para tomar, el viento allá arriba pega fuerte. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: ese segundo de silencio antes de decir algo que importa.",
    "buenasNoches": "Buenas noches, pensando en esa ciudad llena de luces, contigo cerca. Y si pudiera cerrar este día contigo, escogería hacerte reír con una tontería. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Una playa que todavía guarda calor en la arena; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 196,
    "categoria": "Fuego",
    "icono": "🔥",
    "tono": "hot",
    "color": {
      "principal": "#b3123f",
      "suave": "#f2b3c4",
      "oscuro": "#170209"
    },
    "buenosDias": "Buenos días. Hoy el mensaje viene con más temperatura de la habitual, para que lo sepas desde ya. Si estuvieras aquí, probablemente encontraría una excusa para quedarme un poco más cerca de ti. Hay personas que uno abraza por costumbre; contigo siempre aparece la tentación de no soltarte todavía.",
    "poema": [
      "Hay conversaciones que empiezan tranquilas y terminan en un lugar completamente distinto, y contigo eso pasa más seguido de lo que suelo admitir.",
      "No me quejo. Para nada, de hecho.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "Si el chat se pone interesante más tarde, no pienso ser yo quien lo frene. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sombra de las hojas moviéndose sobre el suelo.",
    "buenasNoches": "Buenas noches, con la temperatura todavía un poco alta. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una habitación todavía en penumbra; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 197,
    "categoria": "Canción compartida",
    "icono": "💿",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Todavía no termino el café y ya te estoy escribiendo, para que veas el orden de prioridades que manejo. Música alegre para recordar que caminar juntos es lo mejor. Si hoy estuviéramos juntos, me gustaría que este día empezara en un sofá con una manta compartida: el sonido pequeño de una taza al tocar la mesa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Contigo cualquier momento se vuelve una fiesta,",
      "una razón para celebrar a la distancia.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "Pela los audífonos y ponla a sonar. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa.",
    "buenasNoches": "Hay una calma particular en las últimas horas del día que hace que todo se sienta más simple, más claro. Que duermas bien, te pienso un montón. Y si pudiera cerrar este día contigo, escogería caminar sin destino mientras hablamos. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[MÚSICA] Canción: Contigo",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un sofá con una manta compartida; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 198,
    "categoria": "Susurro",
    "icono": "🌹",
    "tono": "hot",
    "color": {
      "principal": "#e0294f",
      "suave": "#ffc9d6",
      "oscuro": "#20050b"
    },
    "buenosDias": "Buenos días. Hoy quiero susurrarte algo, aunque sea por escrito, aunque el susurro pierda parte de su efecto así. Hay algo peligrosamente bonito en saber que una persona te atrae y, al mismo tiempo, te da paz. Tú tienes esa combinación que me hace querer acercarme y quedarme.",
    "poema": [
      "Hay cosas que solo se dicen bajito, casi al oído, y hoy tengo varias guardadas para ti, esperando el momento.",
      "Cuando estemos cerca te las digo todas, una por una, sin ningún apuro.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Prepárate. La lista mental se está haciendo cada vez más larga. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la risa que llega antes que la respuesta.",
    "buenasNoches": "Buenas noches, con un susurro pendiente todavía sin entregar. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un domingo lento; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 199,
    "categoria": "Te Mando Flores",
    "icono": "🌷",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hay algo reconfortante en empezar el día sabiendo exactamente a quién le voy a escribir primero. Hoy quiero hablarte de una canción colombiana que va perfecto con todo lo que hemos hablado de flores en este calendario. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cielo nublado que no termina de decidirse: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "Hay una canción de Fonseca que habla de mandarle flores y besos a alguien a través de los sueños, cuando no se puede estar cerca físicamente, como una forma de sentir los corazones un poco más juntos.",
      "Cada flor que aparece en este calendario tiene un poco de esa misma idea: una forma de mandarte algo bonito aunque no esté ahí en persona.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Te Mando Flores', de Fonseca. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el olor de algo recién hecho.",
    "buenasNoches": "El ruido del día por fin bajó de volumen, y en ese silencio es más fácil sentir las cosas con claridad. Buenas noches, con flores imaginarias mandadas hacia tu lado. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[MÚSICA] Canción: Te Mando Flores",
    "notaCancion": "[PARA TI] canción real: 'Te Mando Flores' - Fonseca.",
    "escenaInmersiva": "Un cielo nublado que no termina de decidirse; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 200,
    "categoria": "Compañía",
    "icono": "🕸️",
    "tono": "amor",
    "color": {
      "principal": "#3a6ea5",
      "suave": "#c9dcf2",
      "oscuro": "#081321"
    },
    "buenosDias": "Buenos días. El día recién empieza a tomar forma, y ya sé que una parte buena de él tiene que ver contigo. Hoy quiero hablar de algo que no siempre se valora lo suficiente: la buena compañía. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cama desordenada después de una noche larga: una canción de fondo y la sensación de que no hace falta hacer nada más. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "Hay compañías que llenan un espacio y compañías que llenan un silencio, y la tuya hace las dos cosas.",
      "No cambio tu compañía por nada.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por ser tan buena compañía, hasta en los días callados. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción de fondo y la sensación de que no hace falta hacer nada más.",
    "buenasNoches": "El día se cierra, como siempre, con vos como el último pensamiento antes de apagar la luz. Buenas noches, en buena compañía, aunque sea a la distancia. Y si pudiera cerrar este día contigo, escogería abrazarte antes de intentar resolver cualquier cosa. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[PARA TI] algo de Spider-Man, o algo que los conecte a los dos.",
    "notaCancion": "[PARA TI] algo con ritmo, entretenido.",
    "escenaInmersiva": "Una cama desordenada después de una noche larga; una canción de fondo y la sensación de que no hace falta hacer nada más. abrazarte antes de intentar resolver cualquier cosa. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 201,
    "categoria": "Cerro de Guadalupe",
    "icono": "🗻",
    "tono": "amor",
    "color": {
      "principal": "#4fa66b",
      "suave": "#c8ecd4",
      "oscuro": "#0a2013"
    },
    "buenosDias": "Buenos días. Hoy quiero proponerte una alternativa menos conocida a Monserrate, con vistas igual de buenas. Si hoy estuviéramos juntos, me gustaría que este día empezara en una esquina iluminada por el sol de la tarde: la lluvia golpeando despacio los vidrios. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "El Cerro de Guadalupe queda un poco más lejos y menos gente lo visita, así que se siente más tranquilo, casi como si fuera solo nuestro.",
      "La vista desde arriba compite perfectamente con la del cerro más famoso.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "Un plan menos turístico, más para nosotros dos solos. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la lluvia golpeando despacio los vidrios.",
    "buenasNoches": "Buenas noches, pensando en vistas tranquilas, lejos del ruido. Y si pudiera cerrar este día contigo, escogería escuchar contigo una canción hasta el final. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Una esquina iluminada por el sol de la tarde; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 202,
    "categoria": "Arte",
    "icono": "🎨",
    "tono": "filosofica",
    "color": {
      "principal": "#e0a63d",
      "suave": "#ffe3b0",
      "oscuro": "#241a04"
    },
    "buenosDias": "Buenos días. Hay un tipo de silencio en las mañanas tempranas que se presta perfecto para pensar con calma, y hoy lo usé para pensar en ti. artista. Hoy quiero hablarte de lo que me gusta de cómo ves el mundo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina llena de pequeñas cosas por ordenar: el roce casual que termina sintiéndose importante. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "poema": [
      "Hay gente que mira un lugar y solo ve un lugar. Tú miras un lugar y ves color, composición, una historia.",
      "Me gusta ver el mundo un poco a través de tus ojos.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "Cuéntame algún día cuál es la obra o el artista que más te ha movido. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante.",
    "buenasNoches": "Hay noches en que uno se queda despierto de más, y esta es una de esas, por pensar en ti un rato extra. Buenas noches, que tu mente siga pintando cosas bonitas mientras duermes. Y si pudiera cerrar este día contigo, escogería bailar contigo aunque no haya espacio. Me gusta pensar que porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "notaImagen": "[PARA TI] una foto de una obra de arte que le guste, o de ella creando algo.",
    "notaCancion": "[PARA TI] algo artístico, con textura, tipo lo-fi o clásico.",
    "escenaInmersiva": "Una cocina llena de pequeñas cosas por ordenar; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 203,
    "categoria": "Orquídea",
    "icono": "🌺",
    "tono": "filosofica",
    "color": {
      "principal": "#d94fb0",
      "suave": "#ffd6f0",
      "oscuro": "#26071c"
    },
    "buenosDias": "Buenos días. Las primeras luces del día siempre me hacen pensar en empezar de cero, y hoy quise empezar pensando en ti. elegancia. Hoy va dedicado a lo especial que eres, sin que tengas que esforzarte. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina con la primera taza sobre la mesa: la sensación de una mano buscando otra sin pensarlo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "La orquídea tiene fama de ser difícil de cuidar, pero cuando florece, no hay flor que se compare.",
      "Vale la pena todo el cuidado, contigo pasa lo mismo: vale la pena cada intento.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "Significado de la orquídea: belleza refinada y fuerza. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sensación de una mano buscando otra sin pensarlo.",
    "buenasNoches": "La cama todavía está fría, pero el pensamiento de ti ya la calentó un poco. Buenas noches, mi flor difícil y hermosa. Y si pudiera cerrar este día contigo, escogería preguntarte qué parte del día quieres guardar. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[PARA TI] una foto de orquídeas.",
    "notaCancion": "[PARA TI] algo elegante, tipo jazz suave o bolero.",
    "escenaInmersiva": "Una cocina con la primera taza sobre la mesa; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 204,
    "categoria": "Deseo",
    "icono": "🔥",
    "tono": "hot",
    "color": {
      "principal": "#c81d4a",
      "suave": "#f7c0d0",
      "oscuro": "#1a0308"
    },
    "buenosDias": "Buenos días. Hoy no vengo con poesía suave. Vengo con ganas de decirte lo que normalmente me guardo. Hay algo peligrosamente bonito en saber que una persona te atrae y, al mismo tiempo, te da paz. Tú tienes esa combinación que me hace querer acercarme y quedarme.",
    "poema": [
      "Hay días en que pienso en ti de una forma que no cabe bien en un mensaje de buenos días, de esas que se sienten primero en la piel y después en la cabeza.",
      "No te voy a contar todo lo que imagino, pero sí te digo que no es poco, y que casi siempre empieza contigo cerca.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Guárdate esto para cuando estemos solos. Ahí sí te cuento el resto completo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "Buenas noches. Ojalá sueñes conmigo tan cerca como yo te imagino hoy. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] algo sugerente, sutil, a tu criterio.",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo 'hot'.",
    "escenaInmersiva": "Una mesa con dos vasos y algo pendiente de conversar; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 205,
    "categoria": "Querer Querernos",
    "icono": "🎵",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hay mañanas que parecen prometer algo bueno desde el primer minuto, y esta es una de esas. Hoy quiero hablarte de una canción que describe bastante bien esa etapa bonita del principio de algo. Si hoy estuviéramos juntos, me gustaría que este día empezara en un día de semana que pide una pausa: el calor queda después de un abrazo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "Hay una canción de Canserbero que habla de la inocencia del primer amor, de esa conexión que se siente nueva y mágica sin necesidad de complicarla.",
      "Me recuerda un poco a cómo empezó esto entre nosotros.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Querer Querernos', de Canserbero. Búscala cuando puedas, tiene un ritmo suave y una letra bonita sobre empezar a querer a alguien sin miedo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el calor queda después de un abrazo.",
    "buenasNoches": "El cansancio del día ya se siente en el cuerpo, pero pensar en ti siempre alivia un poco esa parte. Buenas noches, con esa misma magia del principio todavía intacta. Y si pudiera cerrar este día contigo, escogería pedirte que me cuentes una historia que nunca me hayas contado. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "notaImagen": "[MÚSICA] Canción: Querer Querernos",
    "notaCancion": "[PARA TI] canción real: 'Querer Querernos' - Canserbero.",
    "escenaInmersiva": "Un día de semana que pide una pausa; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 206,
    "categoria": "Museo del Oro",
    "icono": "🏛️",
    "tono": "filosofica",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy quiero proponerte un plan cultural: perdernos por horas entre piezas de oro precolombino. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa llena de papelitos y recuerdos: la luz tibia que se queda unos segundos sobre la pared. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque no quiero quererte solamente en los momentos fáciles.",
    "poema": [
      "El Museo del Oro guarda miles de piezas hechas por manos de hace siglos, cada una con una historia que nadie terminó de contar del todo.",
      "Después podemos caminar hasta alguna cafetería cercana y hablar de cuál pieza nos gustó más.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "Cerca hay varias cafeterías perfectas para cerrar la tarde con un buen café. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la luz tibia que se queda unos segundos sobre la pared.",
    "buenasNoches": "Buenas noches, todavía pensando en piezas de oro con siglos de historia. Y si pudiera cerrar este día contigo, escogería dejarte una nota donde menos la esperes. Me gusta pensar que porque no quiero quererte solamente en los momentos fáciles.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Una mesa llena de papelitos y recuerdos; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 207,
    "categoria": "Hogar compartido",
    "icono": "🥀",
    "tono": "amor",
    "color": {
      "principal": "#b3123a",
      "suave": "#f5b8c6",
      "oscuro": "#240309"
    },
    "buenosDias": "Buenos días. Todavía no me tomo el café completo y ya voy por la mitad de este mensaje. Hoy quiero hablar de hogar, del que se construye con una persona, no con paredes. Si hoy estuviéramos juntos, me gustaría que este día empezara en un balcón donde el cielo cambia de color: el cambio de color del cielo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "No necesito una dirección para sentirme en casa, me basta con hablar contigo.",
      "Quiero seguir construyendo ese hogar, sin importar dónde estemos cada uno.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por ser mi hogar, incluso a la distancia. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cambio de color del cielo.",
    "buenasNoches": "Hay un tipo de sueño que llega mejor cuando el último pensamiento del día fue bueno, y hoy lo fue, gracias a ti. Buenas noches, en casa, como siempre contigo. Y si pudiera cerrar este día contigo, escogería hacerte un café y dejarlo cerca de ti sin decir demasiado. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[PARA TI] una foto de una rosa, quizás una un poco más silvestre.",
    "notaCancion": "[PARA TI] algo con más sentimiento, profundo.",
    "escenaInmersiva": "Un balcón donde el cielo cambia de color; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 208,
    "categoria": "Rosa",
    "icono": "🌹",
    "tono": "amor",
    "color": {
      "principal": "#d81e3e",
      "suave": "#ffc2ce",
      "oscuro": "#2b0508"
    },
    "buenosDias": "Buenos días. Hay mañanas que se sienten como una hoja en blanco, y hoy decidí empezar la mía escribiéndote a ti. mi rosa. Hoy no hay vueltas ni indirectas, hoy es directo: te amo. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cuarto con música bajita: el aire fresco entrando por la ventana. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "Dicen que la rosa roja habla de un amor que no se guarda, uno que se dice de frente.",
      "El mío es ese: profundo, sin miedo, todo para ti.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "Significado de la rosa roja: amor profundo y pasión verdadera. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el aire fresco entrando por la ventana.",
    "buenasNoches": "Las últimas luces de la casa ya se apagaron, y en la oscuridad, como siempre, apareciste tú primero en mis pensamientos. Buenas noches, sin filtros, sin miedo, tuyo. Y si pudiera cerrar este día contigo, escogería quedarme cerca mientras haces algo que te gusta. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[PARA TI] una foto de rosas rojas.",
    "notaCancion": "[PARA TI] algo romántico, de esas clásicas de amor.",
    "escenaInmersiva": "Un cuarto con música bajita; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 209,
    "categoria": "Aprender de ti",
    "icono": "🏆",
    "tono": "amor",
    "color": {
      "principal": "#c9a227",
      "suave": "#f4e2a0",
      "oscuro": "#201803"
    },
    "buenosDias": "Buenos días. El aire todavía huele a noche cuando empiezo a escribirte esto. Hoy quiero reconocer todo lo que he aprendido de ti sin que te dieras cuenta. Si hoy estuviéramos juntos, me gustaría que este día empezara en un pasillo silencioso antes de dormir: el cansancio bonito después de un día compartido. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Me enseñaste cosas que no estaban en ningún plan, solo pasó, viéndote manejar la vida a tu manera.",
      "Gracias por ser, sin proponértelo, una de mis mejores enseñanzas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "Sigo aprendiendo de ti cada día, y no me molesta para nada. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cansancio bonito después de un día compartido.",
    "buenasNoches": "Las estrellas, si es que se ven desde donde estás, tienen algo tuyo hoy, aunque suene un poco cursi decirlo así. Buenas noches, un poco más sabio gracias a ti. Y si pudiera cerrar este día contigo, escogería inventarnos un plan sencillo para cuando podamos vernos. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[PARA TI] una foto de algún logro suyo del que esté orgullosa.",
    "notaCancion": "[PARA TI] algo motivador o triunfal.",
    "escenaInmersiva": "Un pasillo silencioso antes de dormir; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 210,
    "categoria": "Azucena",
    "icono": "🤍",
    "tono": "filosofica",
    "color": {
      "principal": "#e8e2d0",
      "suave": "#fbf8ef",
      "oscuro": "#18160f"
    },
    "buenosDias": "Buenos días. El teléfono marcó la hora y, en automático, pensé en ti antes de pensar en cualquier pendiente del día. elegancia tranquila. Hoy va dedicado a lo que impresiona sin alzar la voz. Si hoy estuviéramos juntos, me gustaría que este día empezara en una ventana abierta al aire fresco: la música escapándose de un parlante cercano. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "La azucena es de esas flores que entran a un lugar y automáticamente se sienten más finas las cosas.",
      "Tú tienes ese efecto también, sin proponértelo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "Significado de la azucena: pureza y majestuosidad. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la música escapándose de un parlante cercano.",
    "buenasNoches": "Hay una quietud distinta en las noches, de esas que invitan a pensar despacio en lo que de verdad importa. Buenas noches, elegante hasta en sueños. Y si pudiera cerrar este día contigo, escogería dejar que el silencio haga su parte. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[PARA TI] una foto de azucenas o flores blancas grandes.",
    "notaCancion": "[PARA TI] algo elegante, tipo piano.",
    "escenaInmersiva": "Una ventana abierta al aire fresco; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 211,
    "categoria": "Jardín Botánico",
    "icono": "🌿",
    "tono": "amor",
    "color": {
      "principal": "#4fa66b",
      "suave": "#c8ecd4",
      "oscuro": "#0a2013"
    },
    "buenosDias": "Buenos días. Hoy pensé en un plan tranquilo: perdernos entre plantas y flores un rato, sin afán de nada. Si hoy estuviéramos juntos, me gustaría que este día empezara en un trayecto cualquiera que de pronto se vuelve especial: la tranquilidad de saber que alguien está ahí. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "poema": [
      "El Jardín Botánico tiene rincones con flores de todos los colores, invernaderos, y suficiente verde para olvidar que estamos en medio de una ciudad tan grande.",
      "Un buen lugar para caminar despacio, sin destino fijo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "Llevemos algo para picar y busquemos un rincón bonito para sentarnos un rato. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí.",
    "buenasNoches": "Buenas noches, entre flores imaginarias, pensando en ti. Y si pudiera cerrar este día contigo, escogería elegir una película solo por la promesa de verla juntos. Me gusta pensar que porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Un trayecto cualquiera que de pronto se vuelve especial; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 212,
    "categoria": "Lavanda",
    "icono": "💐",
    "tono": "amor",
    "color": {
      "principal": "#9b7fd4",
      "suave": "#e3d9fb",
      "oscuro": "#160c26"
    },
    "buenosDias": "Buenos días. Hay una energía distinta en los días que empiezan escribiéndote, no sabría explicar bien por qué. calma. Hoy quiero que el día se sienta tranquilo, como tú cuando estás en paz. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cafetería imaginaria donde solo estamos tú y yo: el silencio cómodo que no necesita explicación. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "La lavanda relaja con solo olerla, dicen que ayuda a soltar el día.",
      "Espero ser, aunque sea un poco, ese mismo efecto para ti.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "Significado de la lavanda: calma, devoción y tranquilidad. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el silencio cómodo que no necesita explicación.",
    "buenasNoches": "Hay noches donde el cansancio gana rápido, y aun así encontré energía para pensarte un rato más. Buenas noches, que sueltes el día completo antes de dormir. Y si pudiera cerrar este día contigo, escogería recordar una conversación que todavía me hace sonreír. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[PARA TI] una foto de lavanda o algo en tonos morados suaves.",
    "notaCancion": "[PARA TI] algo instrumental, para relajarse.",
    "escenaInmersiva": "Una cafetería imaginaria donde solo estamos tú y yo; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 213,
    "categoria": "Espera",
    "icono": "🕊️",
    "tono": "filosofica",
    "color": {
      "principal": "#c7bfe0",
      "suave": "#f1eefb",
      "oscuro": "#161425"
    },
    "buenosDias": "Buenos días. El café todavía está humeando cuando ya estoy pensando en qué decirte hoy. Hoy quiero hablar de la espera, de lo que se construye mientras se espera algo bueno. Si hoy estuviéramos juntos, me gustaría que este día empezara en un lugar cualquiera que se convierte en nuestro por compartirlo: la respiración tranquila cuando por fin baja el ruido del día. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "No todas las esperas se sienten iguales, y la de estar cerca de ti otra vez se siente distinta, más liviana.",
      "Sé esperar cuando sé que al final vale la pena.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por hacer que valga la pena esperar. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la respiración tranquila cuando por fin baja el ruido del día.",
    "buenasNoches": "La luz de la lámpara es lo único encendido ya en este cuarto, y sigo aquí, pensando en cómo cerrar bien el día contigo en mente. Buenas noches, esperando con calma lo que sigue. Y si pudiera cerrar este día contigo, escogería guardar una frase tuya para recordarla después. Me gusta pensar que porque elegirte también es aprender tus detalles.",
    "notaImagen": "[PARA TI] una foto de lirios o algo en tonos claros y suaves.",
    "notaCancion": "[PARA TI] algo minimalista, tipo piano o guitarra sola.",
    "escenaInmersiva": "Un lugar cualquiera que se convierte en nuestro por compartirlo; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 214,
    "categoria": "Calma compartida",
    "icono": "🦸‍♀️",
    "tono": "amor",
    "color": {
      "principal": "#e13a3a",
      "suave": "#ffc9c9",
      "oscuro": "#210a0a"
    },
    "buenosDias": "Buenos días. Antes de revisar cualquier otra cosa en el teléfono, ya estaba escribiéndote esto. Contigo aprendí que la calma también se comparte, no solo se busca a solas. Si hoy estuviéramos juntos, me gustaría que este día empezara en una tarde que huele a lluvia: el ruido lejano de la ciudad. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "Hay una calma que llega cuando hablo contigo, distinta a cualquier otra que haya sentido.",
      "Gracias por prestarme un poco de la tuya en mis días difíciles.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "Espero también poder prestarte calma cuando la necesites. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el ruido lejano de la ciudad.",
    "buenasNoches": "Hay noches que se sienten largas y noches que se sienten cortas, y esta, contigo en la cabeza, se sintió de las buenas. Buenas noches, en calma, gracias a ti. Y si pudiera cerrar este día contigo, escogería cocinar algo que salga imperfecto pero nuestro. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[PARA TI] una foto de ustedes dos, o algo que represente trabajo en equipo.",
    "notaCancion": "[PARA TI] algo motivador, con energía.",
    "escenaInmersiva": "Una tarde que huele a lluvia; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 215,
    "categoria": "Créditos finales",
    "icono": "🎤",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. El día apenas empieza a definirse, pero ya sé que una parte de él va a estar dedicada a pensar en ti. Ritmo fresco para alegrar la mañana más pesada. Si hoy estuviéramos juntos, me gustaría que este día empezara en una noche con la ciudad respirando detrás de la ventana: ese segundo de silencio antes de decir algo que importa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "Tus ojos lindos iluminan cualquier espacio,",
      "borrando el cansancio en segundos.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Que tengas un día sumamente productivo y lleno de buena vibra. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: ese segundo de silencio antes de decir algo que importa.",
    "buenasNoches": "Hay una versión más honesta de mí que solo sale de noche, y esa versión también te quiere mucho. Que la noche te regale un descanso reparador. Y si pudiera cerrar este día contigo, escogería hacerte reír con una tontería. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[MÚSICA] Canción: Ojitos Lindos",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una noche con la ciudad respirando detrás de la ventana; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 216,
    "categoria": "Impaciencia",
    "icono": "⏱️",
    "tono": "hot",
    "color": {
      "principal": "#c81d4a",
      "suave": "#f7c0d0",
      "oscuro": "#1a0308"
    },
    "buenosDias": "Buenos días. Hoy no tengo paciencia para esperar a verte, y no pienso disimularlo. Hay algo peligrosamente bonito en saber que una persona te atrae y, al mismo tiempo, te da paz. Tú tienes esa combinación que me hace querer acercarme y quedarme.",
    "poema": [
      "Hay días en que la distancia se siente como un detalle menor, y hay otros, como hoy, en que se siente eterna sin razón aparente.",
      "Cuenta esto como una queja formal: te quiero cerca, ya, sin más trámite.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "Cuando nos veamos, no esperes que te salude con calma. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sombra de las hojas moviéndose sobre el suelo.",
    "buenasNoches": "Buenas noches, con la impaciencia intacta para la próxima vez. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un automóvil detenido mientras termina una canción; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 217,
    "categoria": "Campo de Girasoles",
    "icono": "🌻",
    "tono": "amor",
    "color": {
      "principal": "#f2b705",
      "suave": "#fff0b3",
      "oscuro": "#251c02"
    },
    "buenosDias": "Buenos días. Hoy quiero proponerte una escapada corta: hay un campo de girasoles cerca de Bogotá, en Subachoque, que solo florece en ciertas épocas. Si hoy estuviéramos juntos, me gustaría que este día empezara en una calle que todavía no se llena de gente: el sonido pequeño de una taza al tocar la mesa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "poema": [
      "Un mar amarillo hasta donde alcanza la vista, con montañas de fondo. Vale la pena revisar cuándo está en floración antes de ir.",
      "Las fotos ahí siempre quedan bonitas, aunque lo mejor es simplemente estar ahí, caminando entre las flores.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "Averigüemos las fechas exactas de floración antes de planearlo, para no ir en época equivocada. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa.",
    "buenasNoches": "Buenas noches, imaginando ese mar amarillo contigo caminando en medio. Y si pudiera cerrar este día contigo, escogería caminar sin destino mientras hablamos. Me gusta pensar que porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Una calle que todavía no se llena de gente; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 218,
    "categoria": "Destino",
    "icono": "🔑",
    "tono": "filosofica",
    "color": {
      "principal": "#5c1f3d",
      "suave": "#d9a7bd",
      "oscuro": "#12040a"
    },
    "buenosDias": "Buenos días. El cielo todavía tiene ese color raro de las mañanas que no se deciden entre gris y celeste. No sé si creo mucho en el destino, pero contigo empiezo a dudar de mi propio escepticismo. Si hoy estuviéramos juntos, me gustaría que este día empezara en un parque casi vacío: la risa que llega antes que la respuesta. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "Hay encuentros que parecen casualidad y terminan sintiéndose como otra cosa, algo más armado, más a propósito.",
      "No sé si fue destino o suerte, pero no pienso cuestionarlo demasiado.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Sea lo que sea que nos trajo hasta aquí, le debo una. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la risa que llega antes que la respuesta.",
    "buenasNoches": "El día se despide con la misma certeza de siempre: que quiero que mañana empiece igual, pensando en ti primero. Buenas noches, agradecido con lo que sea que nos unió. Y si pudiera cerrar este día contigo, escogería preguntarte qué fue lo primero que pensaste al despertar. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Un parque casi vacío; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 219,
    "categoria": "Café",
    "icono": "☕",
    "tono": "amor",
    "color": {
      "principal": "#a9784f",
      "suave": "#eccfa0",
      "oscuro": "#1f1206"
    },
    "buenosDias": "Buenos días. Hay un tipo de calma particular en escribir esto antes de que el celular empiece a sonar con todo lo demás. Hoy quiero acompañarte, aunque sea de lejos, en tu primer café del día. Si hoy estuviéramos juntos, me gustaría que este día empezara en una playa que todavía guarda calor en la arena: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo me interesa más la experiencia que la perfección.",
    "poema": [
      "Hay algo especial en esos primeros minutos del día, antes de que todo empiece a moverse rápido.",
      "Ojalá algún día podamos compartir ese momento en la misma mesa, en silencio, sin apuro.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Cuéntame cómo te gusta el café (o si prefieres té, también se vale). Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el olor de algo recién hecho.",
    "buenasNoches": "Hay un silencio particular a esta hora que hace que las palabras pesen distinto, más sinceras. Buenas noches, mañana hay otro café esperando. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque contigo me interesa más la experiencia que la perfección.",
    "notaImagen": "[PARA TI] una foto de un café o un desayuno bonito.",
    "notaCancion": "[PARA TI] algo suave, para tomar café de fondo.",
    "escenaInmersiva": "Una playa que todavía guarda calor en la arena; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 220,
    "categoria": "Roce",
    "icono": "🌶️",
    "tono": "hot",
    "color": {
      "principal": "#e0294f",
      "suave": "#ffc9d6",
      "oscuro": "#20050b"
    },
    "buenosDias": "Buenos días. Hoy quería mandarte algo que te sacara esa sonrisa pícara que se te escapa a veces sin que te des cuenta. Si estuvieras aquí, probablemente encontraría una excusa para quedarme un poco más cerca de ti. Hay personas que uno abraza por costumbre; contigo siempre aparece la tentación de no soltarte todavía.",
    "poema": [
      "Hay una sonrisa tuya que solo aparece cuando sabes que estoy pensando en ti de cierta forma, y hoy la quiero provocar a propósito.",
      "Si funcionó, avísame apenas la notes.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "¿Ya se te salió la sonrisa? Esa era exactamente la idea. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una manta compartida y dos pies buscando sitio debajo.",
    "buenasNoches": "Buenas noches, con esa sonrisa todavía dando vueltas en la cabeza. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una habitación todavía en penumbra; una manta compartida y dos pies buscando sitio debajo. abrazarte antes de intentar resolver cualquier cosa. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 221,
    "categoria": "Lo cotidiano",
    "icono": "🌼",
    "tono": "amor",
    "color": {
      "principal": "#f2e94e",
      "suave": "#faf6cf",
      "oscuro": "#141a08"
    },
    "buenosDias": "Buenos días. El sol todavía no calienta del todo, pero algo aquí adentro ya empezó a hacerlo. Hoy quiero valorar lo cotidiano: un mensaje, una llamada, un 'cómo amaneciste'. Si hoy estuviéramos juntos, me gustaría que este día empezara en un sofá con una manta compartida: la lluvia golpeando despacio los vidrios. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque no quiero quererte solamente en los momentos fáciles.",
    "poema": [
      "No todo tiene que ser extraordinario para ser valioso, lo cotidiano contigo también lo es.",
      "Gracias por hacer que lo de todos los días valga la pena.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "Hoy valora también tú algo cotidiano, aunque parezca pequeño. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la lluvia golpeando despacio los vidrios. Juego cotidiano: elige un objeto que tengas cerca y conviértelo en una excusa romántica para una cita imaginaria. Cuanto más absurdo, mejor.",
    "buenasNoches": "Hay algo tranquilizador en saber que, sin importar cómo estuvo el día, esto de escribirte de noche no cambia. Buenas noches, agradecido por otro día cotidiano contigo. Y si pudiera cerrar este día contigo, escogería escuchar contigo una canción hasta el final. Me gusta pensar que porque no quiero quererte solamente en los momentos fáciles.",
    "notaImagen": "[PARA TI] otra foto de margaritas.",
    "notaCancion": "[PARA TI] algo simple y bonito.",
    "escenaInmersiva": "Un sofá con una manta compartida; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 222,
    "categoria": "Ciclovía Dominical",
    "icono": "🚲",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Hoy quiero proponerte un plan activo: recorrer la ciclovía un domingo, sin afán, parando donde nos provoque. Si hoy estuviéramos juntos, me gustaría que este día empezara en un domingo lento: el roce casual que termina sintiéndose importante. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "Los domingos, varias calles de Bogotá se cierran a los carros y se llenan de bicicletas, gente corriendo, familias caminando.",
      "Podemos terminar en alguna cafetería del camino, con las piernas cansadas y buena conversación.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "Yo llevo el agua, tú eliges la ruta. O al revés, como prefieras. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante.",
    "buenasNoches": "Buenas noches, con las piernas cansadas de imaginar ese paseo. Y si pudiera cerrar este día contigo, escogería bailar contigo aunque no haya espacio. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Un domingo lento; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 223,
    "categoria": "Improvisación",
    "icono": "🎸",
    "tono": "amor",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hay mañanas silenciosas y mañanas ruidosas, y esta, por suerte, es de las tranquilas. ¡Llegamos al día 223! Y se celebra con música que marca momentos. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cielo nublado que no termina de decidirse: la sensación de una mano buscando otra sin pensarlo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "223 días de canciones, charlas y momentos,",
      "construyendo algo que vale oro puro.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "Celebra este hito escuchando tu canción favorita de todo el listado. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sensación de una mano buscando otra sin pensarlo.",
    "buenasNoches": "El silencio de la noche siempre hace que las cosas simples, como decir buenas noches, se sientan un poco más importantes. Que descanses de la mejor manera, amor. Mañana seguimos sumando. Y si pudiera cerrar este día contigo, escogería preguntarte qué parte del día quieres guardar. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[MÚSICA] Canción: La Mitad",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un cielo nublado que no termina de decidirse; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 224,
    "categoria": "There's Nothing Holdin' Me Back",
    "icono": "🔓",
    "tono": "amor",
    "color": {
      "principal": "#b3123f",
      "suave": "#f2b3c4",
      "oscuro": "#170209"
    },
    "buenosDias": "Buenos días. Hoy quiero hablarte de una canción sobre las ganas de estar más cerca de alguien, sin nada que lo impida. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cama desordenada después de una noche larga: una canción que parece llegar exactamente en el momento correcto. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Hay una canción de Shawn Mendes que habla de querer avanzar rápido con alguien que le gusta, sin nada que lo detenga.",
      "A veces siento esas mismas ganas de estar más cerca tuyo, sin frenos de por medio.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'There's Nothing Holdin' Me Back', de Shawn Mendes. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "Buenas noches, con las ganas de cercanía todavía despiertas. Y si pudiera cerrar este día contigo, escogería mirarte unos segundos más de lo necesario. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[MÚSICA] Canción: There's Nothing Holdin' Me Back",
    "notaCancion": "[PARA TI] canción real: 'There's Nothing Holdin' Me Back' - Shawn Mendes.",
    "escenaInmersiva": "Una cama desordenada después de una noche larga; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 225,
    "categoria": "Canción de domingo",
    "icono": "🎶",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. El ruido de la calle todavía no arranca del todo, y en ese pequeño espacio de calma te escribo esto. Melodías dulces para recordar que eres mi mitad favorita. Si hoy estuviéramos juntos, me gustaría que este día empezara en una esquina iluminada por el sol de la tarde: el calor queda después de un abrazo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "Tú eres la pieza exacta que le da sentido a mis días,",
      "la melodía que siempre quiero repetir.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "Escúchala hoy y sonríe un momento. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el calor queda después de un abrazo.",
    "buenasNoches": "Hay algo bonito en cerrar el día pensando en la misma persona con la que se abrió, y hoy fue así otra vez. Duerme bien, soñando bonito. Y si pudiera cerrar este día contigo, escogería pedirte que me cuentes una historia que nunca me hayas contado. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[MÚSICA] Canción: La Mitad",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una esquina iluminada por el sol de la tarde; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 226,
    "categoria": "Piel de gallina",
    "icono": "🌡️",
    "tono": "hot",
    "color": {
      "principal": "#c81d4a",
      "suave": "#f7c0d0",
      "oscuro": "#1a0308"
    },
    "buenosDias": "Buenos días. Hay algo en solo pensarte cerca que sube la temperatura sin que yo haga nada más. Si estuvieras aquí, probablemente encontraría una excusa para quedarme un poco más cerca de ti. Hay personas que uno abraza por costumbre; contigo siempre aparece la tentación de no soltarte todavía.",
    "poema": [
      "Se me pone la piel de gallina de solo imaginar tu mano en algún punto que ya sabemos los dos.",
      "No es casualidad. Es puntería exacta. Sabes perfectamente el efecto que tienes en mí.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "Cuando te vea, prepárate, porque yo ya estoy preparado desde ahora mismo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la luz tibia que se queda unos segundos sobre la pared.",
    "buenasNoches": "Buenas noches, con la piel todavía sensible de solo pensarte tanto. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una cocina llena de pequeñas cosas por ordenar; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 227,
    "categoria": "Comodidad",
    "icono": "🧶",
    "tono": "amor",
    "color": {
      "principal": "#7d8fa6",
      "suave": "#dbe4ee",
      "oscuro": "#131a22"
    },
    "buenosDias": "Buenos días. Hay mañanas donde uno se siente con ganas de todo, y esta parece ser una de esas. Hoy es de esos días para quedarse cómoda, sin apuro. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina con la primera taza sobre la mesa: el cambio de color del cielo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Hay días que piden buzo, medias gruesas y no hacer nada productivo.",
      "Ojalá hoy sea uno de esos para ti, y ojalá algún día podamos tener uno así juntos.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Si hoy te pones tu buzo favorito, cuenta que es un abrazo mío disfrazado de tela. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cambio de color del cielo.",
    "buenasNoches": "El día ya cumplió su ciclo completo, y como siempre, terminó pensando en la misma persona con la que empezó. Buenas noches, calientita y tranquila. Y si pudiera cerrar este día contigo, escogería hacerte un café y dejarlo cerca de ti sin decir demasiado. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[PARA TI] una foto de un día cómodo, de esos de pijama y sofá.",
    "notaCancion": "[PARA TI] algo suave, para no hacer nada de fondo.",
    "escenaInmersiva": "Una cocina con la primera taza sobre la mesa; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 228,
    "categoria": "Spa en Pareja",
    "icono": "🧖",
    "tono": "hot",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hoy quiero proponerte algo relajado: un día de spa, solo para desconectarnos un rato de todo. Hay algo peligrosamente bonito en saber que una persona te atrae y, al mismo tiempo, te da paz. Tú tienes esa combinación que me hace querer acercarme y quedarme.",
    "poema": [
      "Masajes, jacuzzi, algo de calma después de semanas ocupadas. A veces hace falta parar del todo, sin celular, sin pendientes, solo nosotros.",
      "Hay varios lugares en la ciudad con planes en pareja que valen completamente la pena.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "Busquemos fecha para este plan, lo necesitamos más de lo que creemos. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el aire fresco entrando por la ventana.",
    "buenasNoches": "Buenas noches, ya relajándome solo de imaginar ese plan. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una mesa con dos vasos y algo pendiente de conversar; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 229,
    "categoria": "Promesas pequeñas",
    "icono": "🕷️",
    "tono": "amor",
    "color": {
      "principal": "#e13a3a",
      "suave": "#ffc9c9",
      "oscuro": "#210a0a"
    },
    "buenosDias": "Buenos días. El despertador sonó dos veces antes de que lograra levantarme, y en el medio, sin darme cuenta, ya estaba pensando en ti. No te prometo cosas enormes, te prometo cosas pequeñas y constantes. Si hoy estuviéramos juntos, me gustaría que este día empezara en un día de semana que pide una pausa: el cansancio bonito después de un día compartido. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "Prefiero prometerte llamadas, buenos días, detalles pequeños, antes que promesas grandes que después no sé si voy a cumplir.",
      "Las pequeñas las cumplo todas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "Aquí va otra promesa pequeña: hoy también pienso en ti. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cansancio bonito después de un día compartido.",
    "buenasNoches": "Las luces de la calle ya se encendieron hace rato, y aquí sigo, pensando en ti antes de dormir. Buenas noches, con otra promesa pequeña cumplida. Y si pudiera cerrar este día contigo, escogería inventarnos un plan sencillo para cuando podamos vernos. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[PARA TI] otra foto divertida de los dos.",
    "notaCancion": "[PARA TI] algo con energía.",
    "escenaInmersiva": "Un día de semana que pide una pausa; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 230,
    "categoria": "Manía",
    "icono": "🖤",
    "tono": "hot",
    "color": {
      "principal": "#a10e35",
      "suave": "#f0aabd",
      "oscuro": "#140208"
    },
    "buenosDias": "Buenos días. Tengo una manía nueva: pensarte en momentos que definitivamente no debería, como en medio de una reunión aburrida. Hoy te confieso algo sencillo: me encanta mirarte. No solo cuando estás arreglada, sino también cuando estás distraída, recién despierta o haciendo cualquier cosa que no creas que alguien está observando.",
    "poema": [
      "No es normal pensar tanto en alguien en momentos tan al azar, y aun así no logro evitarlo contigo, ni lo intento en serio.",
      "Considérate oficialmente mi manía favorita de este año.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "Si me ves distraído algún día de estos, ya sabes exactamente por qué. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la música escapándose de un parlante cercano.",
    "buenasNoches": "Buenas noches, todavía con la manía completamente activa. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una mesa llena de papelitos y recuerdos; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 231,
    "categoria": "Casete",
    "icono": "🎵",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy el despertar fue lento, de esos donde uno se queda un rato más en la cama solo pensando. Vibra caribeña y latina para arrancar el día con buena energía. Si hoy estuviéramos juntos, me gustaría que este día empezara en un balcón donde el cielo cambia de color: la tranquilidad de saber que alguien está ahí. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "Dámelo todo, que de lo demás nos encargamos paso a paso,",
      "sin prisas y con el corazón por delante.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "Que tengas un día lleno de sorpresas agradables. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí.",
    "buenasNoches": "Afuera ya no se escucha casi nada, solo el silencio típico de esta hora, cómodo, tranquilo. Que duermas de maravilla. Y si pudiera cerrar este día contigo, escogería elegir una película solo por la promesa de verla juntos. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "notaImagen": "[MÚSICA] Canción: Dámelo Todo",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un balcón donde el cielo cambia de color; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 232,
    "categoria": "Besos en Guerra",
    "icono": "🎸",
    "tono": "amor",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hoy quiero hablarte de una canción que compara el amor con una pelea bonita, de esas que no se quieren terminar. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cuarto con música bajita: el silencio cómodo que no necesita explicación. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "poema": [
      "Hay una canción de Morat que habla de un amor intenso, casi como una batalla, pero de las que se disfrutan, no de las que duelen.",
      "Contigo también hay chispa así a veces, y no me quejo para nada.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Besos en Guerra', de Morat. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el silencio cómodo que no necesita explicación.",
    "buenasNoches": "Buenas noches, con la chispa todavía encendida. Y si pudiera cerrar este día contigo, escogería recordar una conversación que todavía me hace sonreír. Me gusta pensar que porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "notaImagen": "[MÚSICA] Canción: Besos en Guerra",
    "notaCancion": "[PARA TI] canción real: 'Besos en Guerra' - Morat.",
    "escenaInmersiva": "Un cuarto con música bajita; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 233,
    "categoria": "Clase de Cerámica",
    "icono": "🏺",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy quiero proponerte algo creativo: una clase de pintura o cerámica, con copa de vino incluida. Si hoy estuviéramos juntos, me gustaría que este día empezara en un pasillo silencioso antes de dormir: la respiración tranquila cuando por fin baja el ruido del día. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "Hacer algo con las manos, sin ser expertos en nada, riéndonos de lo torcido que nos queda, puede ser un plan mejor de lo que suena.",
      "Al final nos llevamos algo hecho por nosotros mismos, imperfecto pero nuestro.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "Busquemos un taller cerca y probemos, aunque nos quede horrible el resultado. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la respiración tranquila cuando por fin baja el ruido del día.",
    "buenasNoches": "Buenas noches, con ganas de hacer algo torcido y perfecto contigo. Y si pudiera cerrar este día contigo, escogería guardar una frase tuya para recordarla después. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Un pasillo silencioso antes de dormir; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 234,
    "categoria": "Cercanía",
    "icono": "💫",
    "tono": "hot",
    "color": {
      "principal": "#d1163f",
      "suave": "#f7bccb",
      "oscuro": "#1c0409"
    },
    "buenosDias": "Buenos días. Hoy solo quiero estar pegado a ti, literal, sin ningún espacio de por medio. Hay algo peligrosamente bonito en saber que una persona te atrae y, al mismo tiempo, te da paz. Tú tienes esa combinación que me hace querer acercarme y quedarme.",
    "poema": [
      "Hay una forma de abrazar que no es solo cariño, también es ganas puras, y hoy tengo bastante de las dos cosas.",
      "Cuando te vea, prepárate para que no te suelte tan rápido como de costumbre.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "Aparta tiempo para mí la próxima vez que nos veamos. Todo el que puedas, en serio. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el ruido lejano de la ciudad.",
    "buenasNoches": "Buenas noches, contando los días para estar cerca otra vez. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una ventana abierta al aire fresco; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 235,
    "categoria": "Spider-Man",
    "icono": "🕷️",
    "tono": "amor",
    "color": {
      "principal": "#e13a3a",
      "suave": "#ffc9c9",
      "oscuro": "#210a0a"
    },
    "buenosDias": "Buenos días. Todavía hace frío afuera, pero aquí adentro algo ya se siente tibio desde temprano. mi persona. Hoy toca sentirse un poco invencibles. Si hoy estuviéramos juntos, me gustaría que este día empezara en un trayecto cualquiera que de pronto se vuelve especial: ese segundo de silencio antes de decir algo que importa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "No necesito trepar paredes ni salvar ciudades: contigo ya me siento capaz de cualquier cosa, y eso también es una especie de superpoder.",
      "Eres la razón por la que quiero ser mejor todos los días.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Hoy, si algo se complica, recuerda que tienes un equipo: yo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: ese segundo de silencio antes de decir algo que importa.",
    "buenasNoches": "El ruido de afuera bajó por completo, y en ese silencio hay espacio de sobra para pensar en ti con calma. Buenas noches, superheroína. Mañana seguimos salvando el día juntos. Y si pudiera cerrar este día contigo, escogería hacerte reír con una tontería. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "notaImagen": "[PARA TI] algo divertido, tipo cómic o Spider-Man.",
    "notaCancion": "[PARA TI] algo con energía, para sentirse imparable.",
    "escenaInmersiva": "Un trayecto cualquiera que de pronto se vuelve especial; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 236,
    "categoria": "Sin filtro",
    "icono": "🔥",
    "tono": "hot",
    "color": {
      "principal": "#e0294f",
      "suave": "#ffc9d6",
      "oscuro": "#20050b"
    },
    "buenosDias": "Buenos días. Hoy no filtro nada: te quiero, te deseo, y las dos cosas pesan exactamente lo mismo para mí. Hoy te confieso algo sencillo: me encanta mirarte. No solo cuando estás arreglada, sino también cuando estás distraída, recién despierta o haciendo cualquier cosa que no creas que alguien está observando.",
    "poema": [
      "A veces separamos el cariño del deseo como si uno fuera más válido o más limpio que el otro, y honestamente no creo que sea así.",
      "Contigo los dos van siempre juntos, sin ninguna pena de por medio.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "No tengo que elegir entre quererte y desearte. Te tengo las dos cosas, completas. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sombra de las hojas moviéndose sobre el suelo.",
    "buenasNoches": "Buenas noches, con las dos cosas intactas, como siempre han estado. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una cafetería imaginaria donde solo estamos tú y yo; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 237,
    "categoria": "Horizonte",
    "icono": "🌄",
    "tono": "filosofica",
    "color": {
      "principal": "#4f6d8f",
      "suave": "#c9dcee",
      "oscuro": "#0a1622"
    },
    "buenosDias": "Buenos días. El primer pensamiento coherente del día, antes que cualquier lista de pendientes, fue sobre ti. Hoy quiero mirar hacia adelante, hacia todo lo que todavía no hemos vivido. Si hoy estuviéramos juntos, me gustaría que este día empezara en un lugar cualquiera que se convierte en nuestro por compartirlo: el sonido pequeño de una taza al tocar la mesa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "Me gusta imaginar el horizonte de esto: todo lo que falta por construir, por conocer, por vivir juntos.",
      "No tengo miedo de ese horizonte, al contrario, tengo ganas de llegar hasta allá contigo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "¿Qué hay en tu horizonte que te gustaría vivir conmigo? Cuéntame. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa.",
    "buenasNoches": "El cielo ya está completamente oscuro, y en algún lugar de ahí arriba hay una estrella que, según decidí hoy, es tuya. Buenas noches, mirando hacia un buen horizonte, contigo en el camino. Y si pudiera cerrar este día contigo, escogería caminar sin destino mientras hablamos. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[PARA TI] otra foto de un paisaje o mirador que le guste.",
    "notaCancion": "[PARA TI] algo ambiental, para cerrar el día en calma.",
    "escenaInmersiva": "Un lugar cualquiera que se convierte en nuestro por compartirlo; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 238,
    "categoria": "Islas del Rosario",
    "icono": "🏝️",
    "tono": "amor",
    "color": {
      "principal": "#2ea3a3",
      "suave": "#c3f0ee",
      "oscuro": "#062020"
    },
    "buenosDias": "Buenos días. Hoy quiero hablarte de un plan pendiente en la costa: un día completo en las Islas del Rosario. Si hoy estuviéramos juntos, me gustaría que este día empezara en una tarde que huele a lluvia: la risa que llega antes que la respuesta. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "Agua turquesa, arena blanca, y un rato lejos de todo lo que pesa en la rutina normal.",
      "Ya conocemos parte de la costa, pero este plan específico todavía está pendiente entre nosotros.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Cuando podamos organizarlo bien, ese día se lo debemos a nosotros mismos. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la risa que llega antes que la respuesta. Juego de viaje: cada uno elige una isla imaginaria, una comida y una canción. Con esas tres cosas tienen que inventar nuestra primera noche allí.",
    "buenasNoches": "Buenas noches, con los pies imaginarios todavía en esa arena blanca. Y si pudiera cerrar este día contigo, escogería preguntarte qué fue lo primero que pensaste al despertar. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Una tarde que huele a lluvia; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 239,
    "categoria": "Margarita",
    "icono": "🌼",
    "tono": "amor",
    "color": {
      "principal": "#f2e94e",
      "suave": "#faf6cf",
      "oscuro": "#141a08"
    },
    "buenosDias": "Buenos días. Afuera el día apenas se estira, y aquí ya estoy yo, pensando en ti antes que en cualquier otra cosa. Hoy va dedicado a lo simple, que casi siempre es lo mejor. Si hoy estuviéramos juntos, me gustaría que este día empezara en una noche con la ciudad respirando detrás de la ventana: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "La margarita no necesita ser la flor más llamativa para ser de las más queridas, y tú tienes eso: una forma sencilla y honesta de hacerme feliz.",
      "Contigo hasta los días normales se sienten como una buena noticia.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Significado de la margarita: ternura, alegría simple y lealtad. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el olor de algo recién hecho.",
    "buenasNoches": "Las cobijas ya están listas, y en un rato, cuando cierre los ojos, sé exactamente en quién voy a pensar. Buenas noches, feliz a tu lado, como siempre. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[PARA TI] una foto de margaritas.",
    "notaCancion": "[PARA TI] algo simple y bonito, sin mucha producción.",
    "escenaInmersiva": "Una noche con la ciudad respirando detrás de la ventana; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 240,
    "categoria": "Preguntas sin miedo",
    "icono": "🌱",
    "tono": "filosofica",
    "color": {
      "principal": "#4fa66b",
      "suave": "#c8ecd4",
      "oscuro": "#0a2013"
    },
    "buenosDias": "Buenos días. Hay una calma particular en las primeras horas, antes de que el ruido del día se meta por todos lados. Hoy quiero hacerte una pregunta que normalmente da un poco de miedo hacer: ¿esto va como tú quieres que vaya? Si hoy estuviéramos juntos, me gustaría que este día empezara en un automóvil detenido mientras termina una canción: la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "No siempre se pregunta por miedo a la respuesta, pero prefiero preguntar y saber, que quedarme con la duda.",
      "Espero que la respuesta se parezca a lo que yo siento.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "Contéstame con calma, cuando quieras, no hay apuro. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras.",
    "buenasNoches": "Las cosas del día ya quedaron atrás, y lo único que sigue presente, como siempre, eres tú. Buenas noches, sin miedo a las preguntas importantes. Y si pudiera cerrar este día contigo, escogería abrazarte antes de intentar resolver cualquier cosa. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[PARA TI] otra foto de naturaleza o un paisaje verde.",
    "notaCancion": "[PARA TI] algo acústico.",
    "escenaInmersiva": "Un automóvil detenido mientras termina una canción; la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras. abrazarte antes de intentar resolver cualquier cosa. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 241,
    "categoria": "Puerto seguro",
    "icono": "🎧",
    "tono": "amor",
    "color": {
      "principal": "#9c3fc2",
      "suave": "#e6c9ff",
      "oscuro": "#1a0a26"
    },
    "buenosDias": "Buenos días. Hay una quietud bonita en las mañanas de entre semana que casi nadie aprovecha, y hoy la usé para esto. Hoy quiero decirte que eres mi puerto seguro, el lugar al que siempre puedo volver. Si hoy estuviéramos juntos, me gustaría que este día empezara en una calle que todavía no se llena de gente: la lluvia golpeando despacio los vidrios. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "poema": [
      "No importa qué tan movida esté el agua afuera, contigo siempre encuentro dónde anclar.",
      "Gracias por ser ese lugar seguro para mí.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "Espero ser también tu puerto seguro cuando lo necesites. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la lluvia golpeando despacio los vidrios.",
    "buenasNoches": "El día terminó, con sus cosas buenas y sus cosas normales, pero contigo en la mente el balance siempre sale bien. Buenas noches, anclado en un buen lugar, gracias a ti. Y si pudiera cerrar este día contigo, escogería escuchar contigo una canción hasta el final. Me gusta pensar que porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "notaImagen": "[PARA TI] otra foto relacionada a la música que compartan.",
    "notaCancion": "[PARA TI] su canción favorita de todos los tiempos.",
    "escenaInmersiva": "Una calle que todavía no se llena de gente; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 242,
    "categoria": "Darte un Beso",
    "icono": "💋",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy me desperté antes de la alarma, y en ese ratito extra, sin planearlo, ya estaba pensando en ti. Hoy quiero hablarte de una canción sobre estar dispuesto a hacer lo que sea por un solo beso. Si hoy estuviéramos juntos, me gustaría que este día empezara en un parque casi vacío: el roce casual que termina sintiéndose importante. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Hay una canción de Prince Royce que habla de la idea de dar cualquier cosa, hasta lo imposible, con tal de conseguir un beso de la persona que le gusta.",
      "Contigo entiendo esa idea de que un gesto pequeño puede valer más que cualquier otra cosa.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Darte un Beso', de Prince Royce. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante.",
    "buenasNoches": "El silencio de la casa a esta hora es distinto a cualquier otro momento del día, más íntimo, más real. Buenas noches, con un beso pendiente todavía en el aire. Y si pudiera cerrar este día contigo, escogería bailar contigo aunque no haya espacio. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[MÚSICA] Canción: Darte un Beso",
    "notaCancion": "[PARA TI] canción real: 'Darte un Beso' - Prince Royce.",
    "escenaInmersiva": "Un parque casi vacío; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 243,
    "categoria": "Atardecer en la Muralla",
    "icono": "🌅",
    "tono": "amor",
    "color": {
      "principal": "#e0632f",
      "suave": "#ffcfa8",
      "oscuro": "#2b1103"
    },
    "buenosDias": "Buenos días. Hoy pensé en un momento específico de Cartagena: el atardecer visto desde la muralla, con el cielo entero cambiando de color. Si hoy estuviéramos juntos, me gustaría que este día empezara en una playa que todavía guarda calor en la arena: la sensación de una mano buscando otra sin pensarlo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "El sol cayendo sobre el mar, la ciudad amurallada iluminándose poco a poco, y ese calor de la costa que ya conocemos bien los dos.",
      "De los mejores momentos del día para estar ahí, sin apuro, solo mirando.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "Busquemos ese rato tranquilo la próxima vez que estemos por allá. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sensación de una mano buscando otra sin pensarlo.",
    "buenasNoches": "Buenas noches, con ese cielo cartagenero todavía en la memoria. Y si pudiera cerrar este día contigo, escogería preguntarte qué parte del día quieres guardar. Me gusta pensar que porque elegirte también es aprender tus detalles.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Una playa que todavía guarda calor en la arena; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 244,
    "categoria": "Confesión",
    "icono": "🕯️",
    "tono": "filosofica",
    "color": {
      "principal": "#3a1f5c",
      "suave": "#c9b8e6",
      "oscuro": "#0c0716"
    },
    "buenosDias": "Buenos días. Hay una luz particular en las mañanas de esta semana, de esas que entran de lado y hacen que todo se vea un poco más honesto. Hoy toca una confesión que no había hecho en voz alta. Si hoy estuviéramos juntos, me gustaría que este día empezara en una habitación todavía en penumbra: una canción que parece llegar exactamente en el momento correcto. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "A veces tengo miedo de lo mucho que me importas, no porque esté mal, sino porque nunca había sentido algo con esta intensidad.",
      "Y aun con miedo, elijo seguir aquí, contigo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por hacerme sentir seguro incluso hablando de mis miedos. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "El día ya se apagó casi del todo, y antes de cerrar los ojos quería dejarte esto. Buenas noches, con el miedo puesto a un lado y la certeza intacta. Y si pudiera cerrar este día contigo, escogería mirarte unos segundos más de lo necesario. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Una habitación todavía en penumbra; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 245,
    "categoria": "Chocolate",
    "icono": "🍫",
    "tono": "amor",
    "color": {
      "principal": "#8a5a3c",
      "suave": "#e6c9a8",
      "oscuro": "#1c0f07"
    },
    "buenosDias": "Buenos días. Hay días que empiezan con prisa y días que empiezan despacio, y este es de los segundos, justo lo que necesitaba. Hoy va dedicado a lo que te saca sonrisas rápidas. Si hoy estuviéramos juntos, me gustaría que este día empezara en un sofá con una manta compartida: el calor queda después de un abrazo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "Dicen que el chocolate hace bien porque libera algo en el cuerpo que se parece a la felicidad.",
      "Contigo no necesito el chocolate para sentir eso, pero acepto que hoy vengan los dos juntos.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "Si hoy hay un chocolate cerca, piensa que ese primer cuadrito es mío. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el calor queda después de un abrazo.",
    "buenasNoches": "El teléfono ya está casi sin batería, pero antes de que se apague quería mandarte esto. Buenas noches, que sueñes con algo tan dulce como te gusta. Y si pudiera cerrar este día contigo, escogería pedirte que me cuentes una historia que nunca me hayas contado. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[PARA TI] una foto de chocolates, o de un antojo compartido.",
    "notaCancion": "[PARA TI] algo relajado, de esas para comer algo rico de fondo.",
    "escenaInmersiva": "Un sofá con una manta compartida; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 246,
    "categoria": "All of Me",
    "icono": "🎹",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Todavía no termino el café y ya te estoy escribiendo, para que veas el orden de prioridades que manejo. Hoy quiero hablarte de una canción sobre entregarse completo, curvas, dudas y todo lo demás incluido. Si hoy estuviéramos juntos, me gustaría que este día empezara en un domingo lento: la luz tibia que se queda unos segundos sobre la pared. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "Hay una canción de John Legend que habla de amar a alguien con todas sus partes, hasta las que esa persona a veces no sabe cómo mostrar.",
      "Yo también quiero darte todo de mí, no solo la parte fácil de querer.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'All of Me', de John Legend. Te doy todo de mí, y también quiero todo de ti, incluidas las partes que a veces te cuesta mostrar. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la luz tibia que se queda unos segundos sobre la pared.",
    "buenasNoches": "Hay una calma particular en las últimas horas del día que hace que todo se sienta más simple, más claro. Buenas noches, completo, con todas mis partes puestas en esto. Y si pudiera cerrar este día contigo, escogería dejarte una nota donde menos la esperes. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "cancionUrl": "https://www.youtube.com/watch?v=450p7goxZqg",
    "notaImagen": "[MÚSICA] Canción: All of Me",
    "notaCancion": "[PARA TI] canción real, con link real puesto para que suene ese día.",
    "escenaInmersiva": "Un domingo lento; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 247,
    "categoria": "Certeza tranquila",
    "icono": "🕊️",
    "tono": "filosofica",
    "color": {
      "principal": "#c7bfe0",
      "suave": "#f1eefb",
      "oscuro": "#161425"
    },
    "buenosDias": "Buenos días. Hay algo reconfortante en empezar el día sabiendo exactamente a quién le voy a escribir primero. Hoy no siento nervios ni dudas por esto, solo una certeza tranquila de que voy por buen camino contigo. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cielo nublado que no termina de decidirse: el cambio de color del cielo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "poema": [
      "Hay amores que generan ansiedad y amores que generan calma, y el tuyo, por suerte, es de los segundos.",
      "Prefiero mil veces esta tranquilidad.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por darme esta certeza tranquila, sin dramas innecesarios. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cambio de color del cielo.",
    "buenasNoches": "El ruido del día por fin bajó de volumen, y en ese silencio es más fácil sentir las cosas con claridad. Buenas noches, en calma, seguro de esto. Y si pudiera cerrar este día contigo, escogería hacerte un café y dejarlo cerca de ti sin decir demasiado. Me gusta pensar que porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "notaImagen": "[PARA TI] otra foto en tonos blancos o suaves.",
    "notaCancion": "[PARA TI] algo minimalista.",
    "escenaInmersiva": "Un cielo nublado que no termina de decidirse; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 248,
    "categoria": "Just Like Heaven",
    "icono": "☁️",
    "tono": "filosofica",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. El día recién empieza a tomar forma, y ya sé que una parte buena de él tiene que ver contigo. Hoy quiero hablarte de una canción vieja de rock sobre esos momentos con alguien que se sienten casi irreales de lo bien que están. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cama desordenada después de una noche larga: el aire fresco entrando por la ventana. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "Hay una canción de The Cure que describe un momento tan bueno con alguien que se siente casi como un sueño, algo que apenas se puede creer que esté pasando de verdad.",
      "Contigo tengo momentos así, de esos que después pienso 'eso pasó de verdad, qué bien'.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Just Like Heaven', de The Cure. Un clásico del rock ochentero. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el aire fresco entrando por la ventana.",
    "buenasNoches": "El día se cierra, como siempre, con vos como el último pensamiento antes de apagar la luz. Buenas noches, todavía en uno de esos momentos casi de sueño. Y si pudiera cerrar este día contigo, escogería quedarme cerca mientras haces algo que te gusta. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[MÚSICA] Canción: Just Like Heaven",
    "notaCancion": "[PARA TI] canción real: 'Just Like Heaven' - The Cure.",
    "escenaInmersiva": "Una cama desordenada después de una noche larga; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 249,
    "categoria": "Castillo San Felipe",
    "icono": "🏰",
    "tono": "filosofica",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy quiero hablarte de un lugar con historia de verdad, de esos que hacen pensar en todo lo que pasó ahí antes que nosotros. Si hoy estuviéramos juntos, me gustaría que este día empezara en una esquina iluminada por el sol de la tarde: el cansancio bonito después de un día compartido. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo me interesa más la experiencia que la perfección.",
    "poema": [
      "El Castillo San Felipe de Barajas tiene túneles, historias de batallas, y una vista de la ciudad que compensa la caminata para llegar arriba.",
      "Da gusto recorrer lugares así tomados de la mano, imaginando cómo era todo hace siglos.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "Vale la pena ir temprano, antes de que apriete el calor de la costa. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cansancio bonito después de un día compartido.",
    "buenasNoches": "Buenas noches, pensando en historias de siglos atrás, contigo cerca. Y si pudiera cerrar este día contigo, escogería inventarnos un plan sencillo para cuando podamos vernos. Me gusta pensar que porque contigo me interesa más la experiencia que la perfección.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Una esquina iluminada por el sol de la tarde; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 250,
    "categoria": "Eco",
    "icono": "🎼",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. Hay un tipo de silencio en las mañanas tempranas que se presta perfecto para pensar con calma, y hoy lo usé para pensar en ti. Ritmos tropicales y alternativos para levantar el ánimo de inmediato. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina llena de pequeñas cosas por ordenar: la música escapándose de un parlante cercano. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "Bajo las luces de la ciudad que nunca duerme,",
      "tus ojos siguen siendo mi paisaje favorito.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "Ponla a sonar bien alto y disfruta el ritmo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la música escapándose de un parlante cercano.",
    "buenasNoches": "Hay noches en que uno se queda despierto de más, y esta es una de esas, por pensar en ti un rato extra. Que el descanso limpie tu mente de cualquier carga. Y si pudiera cerrar este día contigo, escogería dejar que el silencio haga su parte. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "notaImagen": "[MÚSICA] Canción: Ojitos Lindos",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una cocina llena de pequeñas cosas por ordenar; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 251,
    "categoria": "Perfect",
    "icono": "💍",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Las primeras luces del día siempre me hacen pensar en empezar de cero, y hoy quise empezar pensando en ti. Hoy quiero hablarte de una canción sobre encontrar a alguien real, sin necesidad de que sea perfecto para que se sienta perfecto. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina con la primera taza sobre la mesa: la tranquilidad de saber que alguien está ahí. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque no quiero quererte solamente en los momentos fáciles.",
    "poema": [
      "Hay una canción de Ed Sheeran que habla de bailar descalzos en el pasto con alguien que no es perfecto en el sentido de las revistas, pero que se siente perfecto para uno.",
      "Eso es lo que siento contigo: no necesitas ser perfecta, ya eres exactamente lo que yo quería.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Perfect', de Ed Sheeran. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí.",
    "buenasNoches": "La cama todavía está fría, pero el pensamiento de ti ya la calentó un poco. Buenas noches, con ganas de bailar contigo algún día, descalzos, sin ocasión especial. Y si pudiera cerrar este día contigo, escogería elegir una película solo por la promesa de verla juntos. Me gusta pensar que porque no quiero quererte solamente en los momentos fáciles.",
    "cancionUrl": "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    "notaImagen": "[MÚSICA] Canción: Perfect",
    "notaCancion": "[PARA TI] canción real, con link real puesto para que suene ese día.",
    "escenaInmersiva": "Una cocina con la primera taza sobre la mesa; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 252,
    "categoria": "Ternura diaria",
    "icono": "🌟",
    "tono": "amor",
    "color": {
      "principal": "#d4af37",
      "suave": "#f7e8b0",
      "oscuro": "#241c04"
    },
    "buenosDias": "Buenos días. Hay mañanas que parecen prometer algo bueno desde el primer minuto, y esta es una de esas. ternura. Hoy quiero recordarte que no hace falta una fecha especial para sentir esto. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa con dos vasos y algo pendiente de conversar: el silencio cómodo que no necesita explicación. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "La ternura que siento por ti no se guarda para ocasiones especiales, aparece en cualquier día común.",
      "Hoy también apareció, apenas desperté.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por sacar esa parte tierna de mí, todos los días. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el silencio cómodo que no necesita explicación.",
    "buenasNoches": "El cansancio del día ya se siente en el cuerpo, pero pensar en ti siempre alivia un poco esa parte. Buenas noches, con toda la ternura del día todavía intacta. Y si pudiera cerrar este día contigo, escogería recordar una conversación que todavía me hace sonreír. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[PARA TI] otra foto en dorado.",
    "notaCancion": "[PARA TI] algo con brillo, animado.",
    "escenaInmersiva": "Una mesa con dos vasos y algo pendiente de conversar; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 253,
    "categoria": "Armonía",
    "icono": "🎶",
    "tono": "filosofica",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Todavía no me tomo el café completo y ya voy por la mitad de este mensaje. Una canción dedicada a lo increíble que es alguien tal cual como es. Si hoy estuviéramos juntos, me gustaría que este día empezara en un día de semana que pide una pausa: la respiración tranquila cuando por fin baja el ruido del día. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "No cambies absolutamente nada de ti,",
      "porque cuando sonríes, el mundo entero se detiene a verte.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "Un temazo clásico para dedicar y cantar a todo pulmón. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la respiración tranquila cuando por fin baja el ruido del día. Juego de karaoke: uno empieza una frase romántica improvisada y el otro debe continuarla rimando. Si la rima sale terrible, se acepta como parte del encanto.",
    "buenasNoches": "Hay un tipo de sueño que llega mejor cuando el último pensamiento del día fue bueno, y hoy lo fue, gracias a ti. Descansa, aunque sé que vas a terminar tarareándola en sueños. Y si pudiera cerrar este día contigo, escogería guardar una frase tuya para recordarla después. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[MÚSICA] Canción: Just the Way You Are",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un día de semana que pide una pausa; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 254,
    "categoria": "Getsemaní",
    "icono": "🎨",
    "tono": "amor",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hoy quiero hablarte de un barrio de Cartagena con una energía distinta a la zona amurallada más turística. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa llena de papelitos y recuerdos: el ruido lejano de la ciudad. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Getsemaní tiene arte callejero enorme en cada pared, ambiente bohemio, y menos gente tomando fotos con el celular en alto todo el tiempo.",
      "De esos lugares donde se siente más la ciudad real, no solo la postal.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "Caminemos ahí una tarde entera, sin ruta fija, solo mirando murales. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el ruido lejano de la ciudad.",
    "buenasNoches": "Buenas noches, entre murales imaginarios de colores, pensando en ese plan. Y si pudiera cerrar este día contigo, escogería cocinar algo que salga imperfecto pero nuestro. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Una mesa llena de papelitos y recuerdos; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 255,
    "categoria": "Carretera con música",
    "icono": "🎼",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. Hay mañanas que se sienten como una hoja en blanco, y hoy decidí empezar la mía escribiéndote a ti. Vibras relajadas y letras con sentido para empezar bien el día. Si hoy estuviéramos juntos, me gustaría que este día empezara en un balcón donde el cielo cambia de color: ese segundo de silencio antes de decir algo que importa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "Dámelo todo, que de lo demás nos encargamos después,",
      "sin prisa y sin mirar el reloj.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Disfruta de este temazo mientras te relajas un momento. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: ese segundo de silencio antes de decir algo que importa. Reto de carretera: cada uno arma una mini playlist de cinco canciones para “irnos sin avisarle a nadie”. Luego comparen cuál de las dos tiene mejor historia.",
    "buenasNoches": "Las últimas luces de la casa ya se apagaron, y en la oscuridad, como siempre, apareciste tú primero en mis pensamientos. Que duermas plácidamente. Y si pudiera cerrar este día contigo, escogería hacerte reír con una tontería. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[MÚSICA] Canción: Dámelo Todo",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un balcón donde el cielo cambia de color; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 256,
    "categoria": "Detalles",
    "icono": "💃",
    "tono": "amor",
    "color": {
      "principal": "#c23fd1",
      "suave": "#f2c9ff",
      "oscuro": "#210a26"
    },
    "buenosDias": "Buenos días. El aire todavía huele a noche cuando empiezo a escribirte esto. Hoy quiero hablar de los detalles, los que a veces pasan desapercibidos pero hacen toda la diferencia. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cuarto con música bajita: la sombra de las hojas moviéndose sobre el suelo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "poema": [
      "No siempre son los gestos grandes los que más se recuerdan, a veces es un detalle pequeño en el momento correcto.",
      "Voy a seguir cuidando esos detalles contigo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "¿Cuál ha sido el detalle pequeño que más te ha gustado de mí? Cuéntame. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sombra de las hojas moviéndose sobre el suelo.",
    "buenasNoches": "Las estrellas, si es que se ven desde donde estás, tienen algo tuyo hoy, aunque suene un poco cursi decirlo así. Buenas noches, cuidando los detalles, como siempre. Y si pudiera cerrar este día contigo, escogería mirar el cielo y buscarle un nombre a la forma de una nube. Me gusta pensar que porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "notaImagen": "[PARA TI] una foto bailando o en algún evento con música.",
    "notaCancion": "[PARA TI] algo pegajoso, para bailar.",
    "escenaInmersiva": "Un cuarto con música bajita; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 257,
    "categoria": "Tarareo",
    "icono": "🎤",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. El teléfono marcó la hora y, en automático, pensé en ti antes de pensar en cualquier pendiente del día. Un recordatorio musical de que los detalles pequeños son los que más importan. Si hoy estuviéramos juntos, me gustaría que este día empezara en un pasillo silencioso antes de dormir: el sonido pequeño de una taza al tocar la mesa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Tu amor completo llegó a desordenarme los esquemas,",
      "a volverse la canción que repito todo el día.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "Disfruta de la melodía con los ojos cerrados un instante. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa.",
    "buenasNoches": "Hay una quietud distinta en las noches, de esas que invitan a pensar despacio en lo que de verdad importa. Que el silencio de la noche te traiga calma. Y si pudiera cerrar este día contigo, escogería caminar sin destino mientras hablamos. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[MÚSICA] Canción: Amor Completo",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un pasillo silencioso antes de dormir; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 258,
    "categoria": "Clavel",
    "icono": "🌸",
    "tono": "filosofica",
    "color": {
      "principal": "#d1476b",
      "suave": "#ffc7d6",
      "oscuro": "#230410"
    },
    "buenosDias": "Buenos días. Hay una energía distinta en los días que empiezan escribiéndote, no sabría explicar bien por qué. Hoy va dedicado a lo constante, como el clavel, que dura y dura. Si hoy estuviéramos juntos, me gustaría que este día empezara en una ventana abierta al aire fresco: la risa que llega antes que la respuesta. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "El clavel no es la flor de la que más se habla, pero es de las que más tiempo dura fresca.",
      "Así quiero que sea esto: no necesita ser ruidoso para ser real y durar.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Significado del clavel: admiración duradera. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la risa que llega antes que la respuesta.",
    "buenasNoches": "Hay noches donde el cansancio gana rápido, y aun así encontré energía para pensarte un rato más. Buenas noches, constante como un buen clavel. Y si pudiera cerrar este día contigo, escogería preguntarte qué fue lo primero que pensaste al despertar. Me gusta pensar que porque elegirte también es aprender tus detalles.",
    "notaImagen": "[PARA TI] una foto de claveles.",
    "notaCancion": "[PARA TI] algo clásico, de esas que no pasan de moda.",
    "escenaInmersiva": "Una ventana abierta al aire fresco; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 259,
    "categoria": "Gran Malecón",
    "icono": "🌊",
    "tono": "amor",
    "color": {
      "principal": "#2ea3a3",
      "suave": "#c3f0ee",
      "oscuro": "#062020"
    },
    "buenosDias": "Buenos días. Hoy quiero hablarte de un plan en Barranquilla: caminar por el Gran Malecón del Río, con el Magdalena al lado. Si hoy estuviéramos juntos, me gustaría que este día empezara en un trayecto cualquiera que de pronto se vuelve especial: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "Un espacio largo junto al río, con zonas verdes, lugares para comer, y suficiente espacio para caminar de la mano sin apuro.",
      "De noche se pone bonito con las luces reflejadas en el agua.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Terminemos ahí una tarde con algo de comer típico de la zona. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el olor de algo recién hecho.",
    "buenasNoches": "Buenas noches, con el río Magdalena imaginario todavía sonando de fondo. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Un trayecto cualquiera que de pronto se vuelve especial; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 260,
    "categoria": "Lo simple",
    "icono": "🐻",
    "tono": "amor",
    "color": {
      "principal": "#c98a4f",
      "suave": "#f0d8b8",
      "oscuro": "#20140a"
    },
    "buenosDias": "Buenos días. El café todavía está humeando cuando ya estoy pensando en qué decirte hoy. Hoy va dedicado, otra vez, a lo simple: lo que no necesita explicación para sentirse bien. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cafetería imaginaria donde solo estamos tú y yo: una canción de fondo y la sensación de que no hace falta hacer nada más. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "Contigo lo simple no se siente poco, se siente suficiente.",
      "Prefiero mil días simples contigo que uno complicado sin ti.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por hacer que lo simple alcance. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción de fondo y la sensación de que no hace falta hacer nada más.",
    "buenasNoches": "La luz de la lámpara es lo único encendido ya en este cuarto, y sigo aquí, pensando en cómo cerrar bien el día contigo en mente. Buenas noches, simple y tranquilo, como me gusta terminar el día. Y si pudiera cerrar este día contigo, escogería abrazarte antes de intentar resolver cualquier cosa. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[PARA TI] otra foto tierna, tal vez de algún peluche que le quieras regalar.",
    "notaCancion": "[PARA TI] algo tierno y calmado.",
    "escenaInmersiva": "Una cafetería imaginaria donde solo estamos tú y yo; una canción de fondo y la sensación de que no hace falta hacer nada más. abrazarte antes de intentar resolver cualquier cosa. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 261,
    "categoria": "Pedido especial",
    "icono": "🎧",
    "tono": "filosofica",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Antes de revisar cualquier otra cosa en el teléfono, ya estaba escribiéndote esto. Una melodía tierna para recordarte que eres mi constante favorita. Si hoy estuviéramos juntos, me gustaría que este día empezara en un lugar cualquiera que se convierte en nuestro por compartirlo: la lluvia golpeando despacio los vidrios. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "Tú eres la mitad que le da equilibrio a mis días,",
      "la certeza en medio de cualquier duda.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "Te mando un abrazo gigante para arrancar con toda la energía. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la lluvia golpeando despacio los vidrios.",
    "buenasNoches": "Hay noches que se sienten largas y noches que se sienten cortas, y esta, contigo en la cabeza, se sintió de las buenas. Descansa rico, nos leemos mañana. Y si pudiera cerrar este día contigo, escogería escuchar contigo una canción hasta el final. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "notaImagen": "[MÚSICA] Canción: La Mitad",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un lugar cualquiera que se convierte en nuestro por compartirlo; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 262,
    "categoria": "Canción vieja",
    "icono": "🎸",
    "tono": "filosofica",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. El día apenas empieza a definirse, pero ya sé que una parte de él va a estar dedicada a pensar en ti. Acordes acústicos que hablan de quedarse cuando todo lo demás se mueve. Si hoy estuviéramos juntos, me gustaría que este día empezara en una tarde que huele a lluvia: el roce casual que termina sintiéndose importante. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "poema": [
      "Y cuando el mundo pesa demasiado en los hombros,",
      "basta con pensar en ti para aligerar la carga.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "Un tema excelente para escuchar con audífonos por la tarde. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante.",
    "buenasNoches": "Hay una versión más honesta de mí que solo sale de noche, y esa versión también te quiere mucho. Duerme bien, nos leemos mañana con más calma. Y si pudiera cerrar este día contigo, escogería bailar contigo aunque no haya espacio. Me gusta pensar que porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "notaImagen": "[MÚSICA] Canción: Colapso",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una tarde que huele a lluvia; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 263,
    "categoria": "Intensidad",
    "icono": "🖤",
    "tono": "filosofica",
    "color": {
      "principal": "#5c1f3d",
      "suave": "#d9a7bd",
      "oscuro": "#12040a"
    },
    "buenosDias": "Buenos días. El cielo todavía tiene ese color raro de las mañanas que no se deciden entre gris y celeste. Hoy no quiero escribirte bonito, quiero escribirte real. Si hoy estuviéramos juntos, me gustaría que este día empezara en una noche con la ciudad respirando detrás de la ventana: la sensación de una mano buscando otra sin pensarlo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "No te quiero de esa forma tranquila que cabe en una postal. Te quiero de la forma que desordena la rutina, que hace que un martes cualquiera valga la pena.",
      "Si esto fuera fácil, no significaría lo mismo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "Nada de lo que siento por ti ha sido a medias. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sensación de una mano buscando otra sin pensarlo.",
    "buenasNoches": "El día se despide con la misma certeza de siempre: que quiero que mañana empiece igual, pensando en ti primero. Buenas noches, con toda la intensidad todavía intacta. Y si pudiera cerrar este día contigo, escogería preguntarte qué parte del día quieres guardar. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[PARA TI] a tu criterio, algo con textura, algo real.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Una noche con la ciudad respirando detrás de la ventana; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 264,
    "categoria": "Verdad",
    "icono": "🗝️",
    "tono": "filosofica",
    "color": {
      "principal": "#4a1830",
      "suave": "#d9a7bd",
      "oscuro": "#120206"
    },
    "buenosDias": "Buenos días. Hay un tipo de calma particular en escribir esto antes de que el celular empiece a sonar con todo lo demás. Hoy no hay metáfora, solo la verdad simple: eres lo mejor que me ha pasado en mucho tiempo. Si hoy estuviéramos juntos, me gustaría que este día empezara en un automóvil detenido mientras termina una canción: una canción que parece llegar exactamente en el momento correcto. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo me interesa más la experiencia que la perfección.",
    "poema": [
      "A veces la poesía sobra y lo único que hace falta es decir la verdad sin adornos.",
      "Y la verdad es que no me imagino explicando estos meses sin ti en el centro de la historia.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por ser, sin metáforas, lo mejor que tengo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "Hay un silencio particular a esta hora que hace que las palabras pesen distinto, más sinceras. Buenas noches, con la verdad dicha, sin nada más que agregar. Y si pudiera cerrar este día contigo, escogería mirarte unos segundos más de lo necesario. Me gusta pensar que porque contigo me interesa más la experiencia que la perfección.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Un automóvil detenido mientras termina una canción; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 265,
    "categoria": "Playas de Puerto Colombia",
    "icono": "🏖️",
    "tono": "amor",
    "color": {
      "principal": "#2ea3a3",
      "suave": "#c3f0ee",
      "oscuro": "#062020"
    },
    "buenosDias": "Buenos días. Hoy pensé en salir un poco de la ciudad: las playas cerca de Puerto Colombia, más tranquilas que las típicas de postal. Si hoy estuviéramos juntos, me gustaría que este día empezara en una calle que todavía no se llena de gente: el calor queda después de un abrazo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "Un ratito fuera de Barranquilla, con mar, arena, y menos multitudes que en otros destinos más conocidos de la costa.",
      "De esos planes cortos que rinden mucho más de lo que cuestan en tiempo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "Un fin de semana cualquiera, sin mucho plan más que llegar y quedarnos. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el calor queda después de un abrazo.",
    "buenasNoches": "Buenas noches, con arena imaginaria todavía entre los dedos. Y si pudiera cerrar este día contigo, escogería pedirte que me cuentes una historia que nunca me hayas contado. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Una calle que todavía no se llena de gente; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 266,
    "categoria": "Compás cercano",
    "icono": "💋",
    "tono": "hot",
    "color": {
      "principal": "#e0294f",
      "suave": "#ffc9d6",
      "oscuro": "#20050b"
    },
    "buenosDias": "Buenos días. Hoy quiero estar en tu mismo compás, pegado, sin espacio entre los dos. Hoy te confieso algo sencillo: me encanta mirarte. No solo cuando estás arreglada, sino también cuando estás distraída, recién despierta o haciendo cualquier cosa que no creas que alguien está observando.",
    "poema": [
      "Hay una distancia justa que me gusta contigo, y hoy la quiero bastante más corta que de costumbre.",
      "Cuando te vea, prepárate para que no respete demasiado el espacio personal.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "Aparta un buen rato para estar cerca la próxima vez que se pueda. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la luz tibia que se queda unos segundos sobre la pared.",
    "buenasNoches": "Buenas noches, deseando estar en tu mismo compás pronto. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un parque casi vacío; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 267,
    "categoria": "Concierto propio",
    "icono": "🎶",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. El sol todavía no calienta del todo, pero algo aquí adentro ya empezó a hacerlo. Llegamos al día 267 con buena música sonando de fondo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una playa que todavía guarda calor en la arena: el cambio de color del cielo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "A veces las palabras sobran cuando la melodía dice todo,",
      "cuando el corazón marca el mismo compás.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Te mando un abrazo gigante y apretado para arrancar la jornada. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cambio de color del cielo.",
    "buenasNoches": "Hay algo tranquilizador en saber que, sin importar cómo estuvo el día, esto de escribirte de noche no cambia. Descansa rico, nos leemos mañana temprano. Y si pudiera cerrar este día contigo, escogería hacerte un café y dejarlo cerca de ti sin decir demasiado. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[MÚSICA] Canción: Creep",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una playa que todavía guarda calor en la arena; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 268,
    "categoria": "Tentación",
    "icono": "🍷",
    "tono": "hot",
    "color": {
      "principal": "#a10e35",
      "suave": "#f0aabd",
      "oscuro": "#140208"
    },
    "buenosDias": "Buenos días. Hoy vengo con ganas de tentarte un poco, sin ninguna razón especial más que las ganas mismas. Si estuvieras aquí, probablemente encontraría una excusa para quedarme un poco más cerca de ti. Hay personas que uno abraza por costumbre; contigo siempre aparece la tentación de no soltarte todavía.",
    "poema": [
      "No sé si es la falta de verte o las ganas normales de siempre, pero hoy pienso en ti de una forma bastante poco inocente.",
      "No pienso disculparme por eso, para que quede claro.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "Dime qué se te ocurre a ti hoy. Tengo curiosidad real. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el aire fresco entrando por la ventana.",
    "buenasNoches": "Buenas noches, con la tentación todavía completamente despierta. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una habitación todavía en penumbra; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 269,
    "categoria": "Antes de ti",
    "icono": "🐱",
    "tono": "amor",
    "color": {
      "principal": "#ff9ecb",
      "suave": "#ffe6f2",
      "oscuro": "#33091c"
    },
    "buenosDias": "Buenos días. Hay mañanas silenciosas y mañanas ruidosas, y esta, por suerte, es de las tranquilas. A veces pienso en cómo era mi rutina antes de ti, y ya casi ni la recuerdo bien. Si hoy estuviéramos juntos, me gustaría que este día empezara en un sofá con una manta compartida: el cansancio bonito después de un día compartido. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Hay un antes y un después marcado por ti, aunque no haya sido un momento exacto, sino una acumulación de días.",
      "Prefiero el después, sin dudarlo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por cambiar el antes por algo mejor. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cansancio bonito después de un día compartido.",
    "buenasNoches": "El silencio de la noche siempre hace que las cosas simples, como decir buenas noches, se sientan un poco más importantes. Buenas noches, en la mejor versión de mis días: la de después de ti. Y si pudiera cerrar este día contigo, escogería inventarnos un plan sencillo para cuando podamos vernos. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[PARA TI] algo tierno de Hello Kitty o similar.",
    "notaCancion": "[PARA TI] algo dulce y liviano.",
    "escenaInmersiva": "Un sofá con una manta compartida; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 270,
    "categoria": "Barrio El Prado",
    "icono": "🏡",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy quiero hablarte de un rincón de Barranquilla con arquitectura bonita y menos ruido que el centro. Si hoy estuviéramos juntos, me gustaría que este día empezara en un domingo lento: la música escapándose de un parlante cercano. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "El barrio El Prado tiene casas antiguas, árboles grandes, y una calma que contrasta con el resto de la ciudad tan movida.",
      "Perfecto para caminar despacio una tarde, sin destino fijo, solo mirando fachadas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "Si ese día queremos salir a comer, que sea una excepción especial; si no, volvamos a casa por algo sencillo y terminemos la noche en el sofá. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la música escapándose de un parlante cercano.",
    "buenasNoches": "Buenas noches, caminando calles tranquilas en la imaginación, contigo. Y si pudiera cerrar este día contigo, escogería dejar que el silencio haga su parte. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Un domingo lento; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 271,
    "categoria": "Canción prohibida",
    "icono": "🚫",
    "tono": "hot",
    "color": {
      "principal": "#b3123f",
      "suave": "#f2b3c4",
      "oscuro": "#170209"
    },
    "buenosDias": "Buenos días. Tengo un pensamiento de hoy que califica claramente como contenido no apto para toda audiencia. Hoy me dieron ganas de escribirte antes de que el día terminara de despertarse. No solo porque te extraño: porque hay una parte de mí que disfruta imaginarte cerca, con esa mezcla tuya de calma y peligro que me desarma.",
    "poema": [
      "No todo lo que pienso de ti es para compartir en cualquier momento del día. Algunas cosas son solo para cuando estemos a solas.",
      "Este es uno de esos pensamientos, guardado bajo llave por ahora.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "La llave la tienes tú. Solo tienes que pedirla cuando quieras. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí.",
    "buenasNoches": "Buenas noches, con el pensamiento todavía bajo llave, esperando. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un cielo nublado que no termina de decidirse; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 272,
    "categoria": "Disco rayado",
    "icono": "🎸",
    "tono": "filosofica",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. El ruido de la calle todavía no arranca del todo, y en ese pequeño espacio de calma te escribo esto. Un toque de rock alternativo para sacudir la rutina matutina. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cama desordenada después de una noche larga: el silencio cómodo que no necesita explicación. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "A veces uno busca en el lugar equivocado,",
      "hasta que encuentra complicidad donde menos lo esperaba.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por hacer que los días pesen la mitad. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el silencio cómodo que no necesita explicación. Juego de palabras: completa “me gusta cuando tú…” con cinco finales distintos, pero uno tiene que ser completamente inesperado. El otro elige su favorito.",
    "buenasNoches": "Hay algo bonito en cerrar el día pensando en la misma persona con la que se abrió, y hoy fue así otra vez. Descansa rico, amor mío. Y si pudiera cerrar este día contigo, escogería recordar una conversación que todavía me hace sonreír. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[MÚSICA] Canción: Creep",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una cama desordenada después de una noche larga; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 273,
    "categoria": "Burbujas de Amor",
    "icono": "🫧",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Hay mañanas donde uno se siente con ganas de todo, y esta parece ser una de esas. Hoy quiero hablarte de una canción bachatera bien tierna, de esas que parecen escritas para decir cosas imposibles de forma bonita. Si hoy estuviéramos juntos, me gustaría que este día empezara en una esquina iluminada por el sol de la tarde: la respiración tranquila cuando por fin baja el ruido del día. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "Hay una canción de Juan Luis Guerra donde el cantante desea convertirse en cosas pequeñas -una gota, una ola, un pez- solo para estar cerca de la persona que ama.",
      "A mí también se me ocurren ideas así de exageradas cuando pienso en formas de estar más cerca tuyo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Burbujas de Amor', de Juan Luis Guerra. Un clásico de la bachata dominicana. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la respiración tranquila cuando por fin baja el ruido del día.",
    "buenasNoches": "El día ya cumplió su ciclo completo, y como siempre, terminó pensando en la misma persona con la que empezó. Buenas noches, convertido en algo pequeño y cerca tuyo, aunque sea solo en la imaginación. Y si pudiera cerrar este día contigo, escogería guardar una frase tuya para recordarla después. Me gusta pensar que porque elegirte también es aprender tus detalles.",
    "notaImagen": "[MÚSICA] Canción: Burbujas de Amor",
    "notaCancion": "[PARA TI] canción real: 'Burbujas de Amor' - Juan Luis Guerra.",
    "escenaInmersiva": "Una esquina iluminada por el sol de la tarde; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 274,
    "categoria": "Balada",
    "icono": "🎵",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. El despertador sonó dos veces antes de que lograra levantarme, y en el medio, sin darme cuenta, ya estaba pensando en ti. Empezar la jornada con acordes luminosos cambia por completo la energía. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina llena de pequeñas cosas por ordenar: el ruido lejano de la ciudad. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "Y tú iluminaste cada rincón oscuro,",
      "volviéndote el centro de mi universo entero.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "Dale play y deja que la canción suene de fondo mientras haces tus cosas. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el ruido lejano de la ciudad.",
    "buenasNoches": "Las luces de la calle ya se encendieron hace rato, y aquí sigo, pensando en ti antes de dormir. Que nada te arrebate la paz hoy. Descansa. Y si pudiera cerrar este día contigo, escogería cocinar algo que salga imperfecto pero nuestro. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[MÚSICA] Canción: Yellow",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una cocina llena de pequeñas cosas por ordenar; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 275,
    "categoria": "Domingo de Pijama",
    "icono": "🛋️",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. Hoy quiero proponerte el plan más simple de todos: no salir de pijama en todo el día. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina con la primera taza sobre la mesa: ese segundo de silencio antes de decir algo que importa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "A veces el mejor plan es no tener ningún plan: quedarse en cama hasta tarde, ver algo en la tele, no arreglarse para nadie.",
      "De esos domingos que después se recuerdan con más cariño que los planes elaborados.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Cero afán, cero agenda. Solo estar. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: ese segundo de silencio antes de decir algo que importa.",
    "buenasNoches": "Buenas noches, todavía en modo pijama, sin ganas de que se acabe el día. Y si pudiera cerrar este día contigo, escogería hacerte reír con una tontería. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Una cocina con la primera taza sobre la mesa; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 276,
    "categoria": "Cicatriz",
    "icono": "🩹",
    "tono": "filosofica",
    "color": {
      "principal": "#6b2142",
      "suave": "#e3b8c9",
      "oscuro": "#180509"
    },
    "buenosDias": "Buenos días. Hoy el despertar fue lento, de esos donde uno se queda un rato más en la cama solo pensando. No vengo a prometerte un amor perfecto, vengo a prometerte uno real. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa con dos vasos y algo pendiente de conversar: la sombra de las hojas moviéndose sobre el suelo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "Voy a fallar a veces. Voy a decir cosas mal, voy a necesitar aprender cosas que todavía no sé.",
      "Pero lo que siento por ti no tiene nada de fallido, eso lo tengo claro incluso en mis peores días.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "Prefiero un amor real, con errores, que uno perfecto de mentira. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sombra de las hojas moviéndose sobre el suelo. Juego honesto: cada uno dice una imperfección propia que le gustaría que el otro aprendiera a querer. Después, una cosa del otro que ya aprendió a querer precisamente por ser imperfecta.",
    "buenasNoches": "Afuera ya no se escucha casi nada, solo el silencio típico de esta hora, cómodo, tranquilo. Buenas noches, imperfecto pero seguro de esto. Y si pudiera cerrar este día contigo, escogería mirar el cielo y buscarle un nombre a la forma de una nube. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Una mesa con dos vasos y algo pendiente de conversar; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 277,
    "categoria": "Cali Pachanguero",
    "icono": "🎤",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. Todavía hace frío afuera, pero aquí adentro algo ya se siente tibio desde temprano. Hoy quiero hablarte de una canción sobre el orgullo de la propia tierra y las ganas de celebrar la vida. Si hoy estuviéramos juntos, me gustaría que este día empezara en un día de semana que pide una pausa: el sonido pequeño de una taza al tocar la mesa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "poema": [
      "Hay una canción de Grupo Niche que habla del orgullo por el lugar de donde uno viene, y de las ganas de celebrarlo bailando.",
      "Me gustaría bailarla contigo algún día, en serio.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "Se llama 'Cali Pachanguero', de Grupo Niche. Clásico de la salsa colombiana. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa.",
    "buenasNoches": "El ruido de afuera bajó por completo, y en ese silencio hay espacio de sobra para pensar en ti con calma. Buenas noches, con ganas de esa bailada pendiente. Y si pudiera cerrar este día contigo, escogería caminar sin destino mientras hablamos. Me gusta pensar que porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "cancionUrl": "https://www.youtube.com/watch?v=7KxkMLAZlzw",
    "notaImagen": "[MÚSICA] Canción: Cali Pachanguero",
    "notaCancion": "[PARA TI] canción real, con link real puesto para que suene ese día.",
    "escenaInmersiva": "Un día de semana que pide una pausa; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 278,
    "categoria": "Simpleza",
    "icono": "🎀",
    "tono": "amor",
    "color": {
      "principal": "#ff9ecb",
      "suave": "#ffe6f2",
      "oscuro": "#33091c"
    },
    "buenosDias": "Buenos días. El primer pensamiento coherente del día, antes que cualquier lista de pendientes, fue sobre ti. Hoy no hay nada elaborado que decir, solo que contigo lo simple ya es suficiente. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa llena de papelitos y recuerdos: la risa que llega antes que la respuesta. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "No necesito grandes planes ni ocasiones especiales, contigo hasta lo simple se siente completo.",
      "Ojalá sigamos teniendo muchos días simples así.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por hacer que lo simple se sienta suficiente. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la risa que llega antes que la respuesta.",
    "buenasNoches": "El cielo ya está completamente oscuro, y en algún lugar de ahí arriba hay una estrella que, según decidí hoy, es tuya. Buenas noches, simple y bonito, como me gusta que sean los días contigo. Y si pudiera cerrar este día contigo, escogería preguntarte qué fue lo primero que pensaste al despertar. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[PARA TI] otra foto tierna.",
    "notaCancion": "[PARA TI] algo dulce.",
    "escenaInmersiva": "Una mesa llena de papelitos y recuerdos; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 279,
    "categoria": "Volver",
    "icono": "🧸",
    "tono": "amor",
    "color": {
      "principal": "#d9a066",
      "suave": "#f5dfc0",
      "oscuro": "#241708"
    },
    "buenosDias": "Buenos días. Afuera el día apenas se estira, y aquí ya estoy yo, pensando en ti antes que en cualquier otra cosa. No importa cómo esté el día, siempre quiero volver a ti al final. Si hoy estuviéramos juntos, me gustaría que este día empezara en un balcón donde el cielo cambia de color: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo me interesa más la experiencia que la perfección.",
    "poema": [
      "Hay lugares a los que uno vuelve porque se siente bien, y tú eres de esos lugares para mí.",
      "Sin importar qué tan complicado esté el día, siempre quiero volver aquí.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por ser un lugar al que siempre quiero volver. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el olor de algo recién hecho.",
    "buenasNoches": "Las cobijas ya están listas, y en un rato, cuando cierre los ojos, sé exactamente en quién voy a pensar. Buenas noches, de vuelta donde quiero estar. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque contigo me interesa más la experiencia que la perfección.",
    "notaImagen": "[PARA TI] otra foto tierna de peluches.",
    "notaCancion": "[PARA TI] algo tierno y calmado.",
    "escenaInmersiva": "Un balcón donde el cielo cambia de color; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 280,
    "categoria": "Pequeñas victorias",
    "icono": "🍇",
    "tono": "amor",
    "color": {
      "principal": "#7b4fd1",
      "suave": "#dccafc",
      "oscuro": "#160a2b"
    },
    "buenosDias": "Buenos días. Hay una calma particular en las primeras horas, antes de que el ruido del día se meta por todos lados. Hoy quiero celebrar algo pequeño contigo, no hace falta que sea grande. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cuarto con música bajita: una manta compartida y dos pies buscando sitio debajo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "No todas las victorias necesitan aplausos, algunas solo necesitan que alguien las note.",
      "Hoy noto las tuyas, aunque sean pequeñas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "Cuéntame una victoria pequeña que hayas tenido esta semana, quiero celebrarla contigo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una manta compartida y dos pies buscando sitio debajo.",
    "buenasNoches": "Las cosas del día ya quedaron atrás, y lo único que sigue presente, como siempre, eres tú. Buenas noches, orgulloso de tus pequeñas victorias de hoy. Y si pudiera cerrar este día contigo, escogería abrazarte antes de intentar resolver cualquier cosa. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "notaImagen": "[PARA TI] otra foto en tonos morados.",
    "notaCancion": "[PARA TI] algo con ese mismo vibe, suave pero con carácter.",
    "escenaInmersiva": "Un cuarto con música bajita; una manta compartida y dos pies buscando sitio debajo. abrazarte antes de intentar resolver cualquier cosa. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 281,
    "categoria": "Noche de Juegos de Mesa",
    "icono": "🎲",
    "tono": "hot",
    "color": {
      "principal": "#d1163f",
      "suave": "#f7bccb",
      "oscuro": "#1c0409"
    },
    "buenosDias": "Buenos días. Hoy quiero proponerte algo competitivo: una noche de juegos de mesa, con apuestas de por medio. Hoy me gustaría robarte unos minutos sin planes ni teléfonos: solo tú, yo y esa clase de silencio que se vuelve demasiado íntimo cuando uno se gusta de verdad.",
    "poema": [
      "No hablo de dinero. Hablo de apuestas más interesantes, de esas que se cobran en persona, con calma.",
      "Prepárate para perder, porque no pienso dejarte ganar fácil.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "Elige el juego. Yo elijo qué se apuesta. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la lluvia golpeando despacio los vidrios.",
    "buenasNoches": "Buenas noches, pensando en esa apuesta pendiente todavía sin cobrar. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un pasillo silencioso antes de dormir; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 282,
    "categoria": "Sintonía",
    "icono": "📻",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hay una quietud bonita en las mañanas de entre semana que casi nadie aprovecha, y hoy la usé para esto. Baladas intensas para los momentos donde se extraña de verdad. Si hoy estuviéramos juntos, me gustaría que este día empezara en una ventana abierta al aire fresco: el roce casual que termina sintiéndose importante. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "Quiero entregarte mi amor completo, sin medidas,",
      "sin reservas y sin mirar atrás.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "Escúchala con atención y piensa en lo nuestro. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante.",
    "buenasNoches": "El día terminó, con sus cosas buenas y sus cosas normales, pero contigo en la mente el balance siempre sale bien. Duerme con la tranquilidad de que te pienso un montón. Y si pudiera cerrar este día contigo, escogería bailar contigo aunque no haya espacio. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[MÚSICA] Canción: Amor Completo",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una ventana abierta al aire fresco; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 283,
    "categoria": "Cielo nocturno",
    "icono": "🌌",
    "tono": "filosofica",
    "color": {
      "principal": "#4f3fa8",
      "suave": "#c9c2f2",
      "oscuro": "#120a2b"
    },
    "buenosDias": "Buenos días. Hoy me desperté antes de la alarma, y en ese ratito extra, sin planearlo, ya estaba pensando en ti. Hoy quiero que en algún momento mires el cielo, de día o de noche. Si hoy estuviéramos juntos, me gustaría que este día empezara en un trayecto cualquiera que de pronto se vuelve especial: la sensación de una mano buscando otra sin pensarlo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "Me gusta pensar que, aunque estemos lejos, en algún momento del día miramos el mismo cielo.",
      "Eso me hace sentir cerca, aunque no lo estemos físicamente.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "Si ves una estrella fugaz, ya sabes qué pedir (es broma, o no). Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sensación de una mano buscando otra sin pensarlo.",
    "buenasNoches": "El silencio de la casa a esta hora es distinto a cualquier otro momento del día, más íntimo, más real. Buenas noches, bajo el mismo cielo que yo. Y si pudiera cerrar este día contigo, escogería preguntarte qué parte del día quieres guardar. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[PARA TI] una foto de un cielo estrellado.",
    "notaCancion": "[PARA TI] algo soñador.",
    "escenaInmersiva": "Un trayecto cualquiera que de pronto se vuelve especial; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 284,
    "categoria": "Contratiempo",
    "icono": "🎶",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Hay una luz particular en las mañanas de esta semana, de esas que entran de lado y hacen que todo se vea un poco más honesto. Un clásico melancólico que invita a pensar bonito. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cafetería imaginaria donde solo estamos tú y yo: una canción que parece llegar exactamente en el momento correcto. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Tratando de descifrar las reglas del universo,",
      "descubrí que tú eres mi única excepción.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por ser esa compañía tan ligera y bonita. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "El día ya se apagó casi del todo, y antes de cerrar los ojos quería dejarte esto. Descansa rico, nos leemos mañana. Y si pudiera cerrar este día contigo, escogería mirarte unos segundos más de lo necesario. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[MÚSICA] Canción: The Scientist",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Una cafetería imaginaria donde solo estamos tú y yo; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 285,
    "categoria": "Violeta",
    "icono": "🪻",
    "tono": "filosofica",
    "color": {
      "principal": "#7d5fc2",
      "suave": "#d9cdf5",
      "oscuro": "#150c28"
    },
    "buenosDias": "Buenos días. Hay días que empiezan con prisa y días que empiezan despacio, y este es de los segundos, justo lo que necesitaba. mi violeta. Pequeña pero de las que más se notan. Si hoy estuviéramos juntos, me gustaría que este día empezara en un lugar cualquiera que se convierte en nuestro por compartirlo: el calor queda después de un abrazo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "La violeta es chiquita comparada con otras flores, pero nadie duda de lo bonita que es.",
      "El tamaño nunca fue lo que hizo especial algo, tú eres prueba de eso.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "Significado de la violeta: modestia y lealtad. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el calor queda después de un abrazo.",
    "buenasNoches": "El teléfono ya está casi sin batería, pero antes de que se apague quería mandarte esto. Buenas noches, pequeña y grande a la vez. Y si pudiera cerrar este día contigo, escogería pedirte que me cuentes una historia que nunca me hayas contado. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[PARA TI] una foto de violetas o flores moradas pequeñas.",
    "notaCancion": "[PARA TI] algo delicado.",
    "escenaInmersiva": "Un lugar cualquiera que se convierte en nuestro por compartirlo; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 286,
    "categoria": "Maratón Bajo las Cobijas",
    "icono": "🧣",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Hoy quiero proponerte un plan de esos que no necesitan salir de casa: maratón de series completo, bajo las cobijas. Si hoy estuviéramos juntos, me gustaría que este día empezara en una tarde que huele a lluvia: la luz tibia que se queda unos segundos sobre la pared. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "poema": [
      "Snacks a la mano, luces bajitas, y ningún compromiso más que terminar la temporada completa si el cuerpo aguanta.",
      "De esos planes que se sienten mejor entre más flojos y sin culpa sean.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: maratón bajo las cobijas. Elige tú la serie y yo pongo los snacks. Regla: si uno dice 'solo un capítulo más', automáticamente tiene que acercarse y dar un beso al otro.",
    "buenasNoches": "Buenas noches, todavía envuelto en cobijas imaginarias, pensando en ese plan. Y si pudiera cerrar este día contigo, escogería dejarte una nota donde menos la esperes. Me gusta pensar que porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías. Si la serie nos gana hasta tarde, que nos encuentre juntos, con la pantalla ya apagada y la cabeza apoyada en el hombro del otro.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'amor'.",
    "escenaInmersiva": "Una tarde que huele a lluvia; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 287,
    "categoria": "Anticipación",
    "icono": "💋",
    "tono": "hot",
    "color": {
      "principal": "#b3123f",
      "suave": "#f2b3c4",
      "oscuro": "#170209"
    },
    "buenosDias": "Buenos días. Hoy amanecí pensando en tu boca, sin ninguna razón lógica que lo explique del todo. Hoy me gustaría robarte unos minutos sin planes ni teléfonos: solo tú, yo y esa clase de silencio que se vuelve demasiado íntimo cuando uno se gusta de verdad.",
    "poema": [
      "Hay besos que se piensan más de lo que se dan, y el que me debes lleva un rato viviendo cómodamente en mi cabeza.",
      "No tengo apuro, pero cuando lo cobre vas a entender exactamente por qué me tomé mi tiempo pensándolo tanto.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Esto es una promesa, no una amenaza. Bueno, un poco de las dos cosas. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cambio de color del cielo.",
    "buenasNoches": "Buenas noches, con ese beso pendiente todavía en deuda. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una noche con la ciudad respirando detrás de la ventana; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 288,
    "categoria": "Segunda oportunidad",
    "icono": "🌅",
    "tono": "filosofica",
    "color": {
      "principal": "#2a8f8f",
      "suave": "#b8ecec",
      "oscuro": "#041a1a"
    },
    "buenosDias": "Buenos días. Todavía no termino el café y ya te estoy escribiendo, para que veas el orden de prioridades que manejo. Hoy pensé en lo importante que es saber dar segundas oportunidades, incluso en los detalles pequeños. Si hoy estuviéramos juntos, me gustaría que este día empezara en un automóvil detenido mientras termina una canción: el aire fresco entrando por la ventana. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "Nadie hace todo bien siempre, y contigo he aprendido que perdonar lo pequeño también es una forma de cuidar lo que se tiene.",
      "Gracias por darme esas segundas oportunidades cuando las he necesitado.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "Prometo seguir mereciéndomelas. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el aire fresco entrando por la ventana.",
    "buenasNoches": "Hay una calma particular en las últimas horas del día que hace que todo se sienta más simple, más claro. Buenas noches, agradecido por tu paciencia y tus segundas oportunidades. Y si pudiera cerrar este día contigo, escogería quedarme cerca mientras haces algo que te gusta. Me gusta pensar que porque elegirte también es aprender tus detalles.",
    "notaImagen": "[PARA TI] otra foto de mar o atardecer.",
    "notaCancion": "[PARA TI] algo especial, para ir cerrando el ciclo.",
    "escenaInmersiva": "Un automóvil detenido mientras termina una canción; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 289,
    "categoria": "Ritmo lento",
    "icono": "🕯️",
    "tono": "hot",
    "color": {
      "principal": "#e0294f",
      "suave": "#ffc9d6",
      "oscuro": "#20050b"
    },
    "buenosDias": "Buenos días. Hoy no tengo ganas de apurar nada, ni siquiera esto. Hoy me dieron ganas de escribirte antes de que el día terminara de despertarse. No solo porque te extraño: porque hay una parte de mí que disfruta imaginarte cerca, con esa mezcla tuya de calma y peligro que me desarma.",
    "poema": [
      "Hay momentos que se disfrutan mucho mejor lento, sin correr a ningún lado, sin mirar el reloj cada rato.",
      "Contigo quiero exactamente ese ritmo lento, en todos los sentidos posibles.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "No hay afán. Vamos despacio, como debería ser esta vez. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cansancio bonito después de un día compartido.",
    "buenasNoches": "Buenas noches, en ritmo lento, pensando en ti sin apuro. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una calle que todavía no se llena de gente; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 290,
    "categoria": "Silencio entre canciones",
    "icono": "💿",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Hay algo reconfortante en empezar el día sabiendo exactamente a quién le voy a escribir primero. Un toque de rock clásico para despertar con fuerza. Si hoy estuviéramos juntos, me gustaría que este día empezara en un parque casi vacío: la música escapándose de un parlante cercano. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "A veces uno se siente perdido en la multitud,",
      "hasta que encuentra a alguien que le devuelve el sentido.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "Te mando un abrazo gigante a la distancia. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la música escapándose de un parlante cercano.",
    "buenasNoches": "El ruido del día por fin bajó de volumen, y en ese silencio es más fácil sentir las cosas con claridad. Que descanses profundamente, amor. Y si pudiera cerrar este día contigo, escogería dejar que el silencio haga su parte. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[MÚSICA] Canción: Creep",
    "notaCancion": "[PARA TI] la música de este día se elige sola del catálogo (no verifiqué el artista original que traía este bloque, así que no lo mantuve como referencia).",
    "escenaInmersiva": "Un parque casi vacío; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 291,
    "categoria": "Lluvia y Té Caliente",
    "icono": "☔",
    "tono": "filosofica",
    "color": {
      "principal": "#5c7d99",
      "suave": "#d4e3ee",
      "oscuro": "#0d1a24"
    },
    "buenosDias": "Buenos días. Hoy pensé en esos días de lluvia que invitan a quedarse adentro, con algo caliente en las manos y conversaciones largas. Si hoy estuviéramos juntos, me gustaría que este día empezara en una playa que todavía guarda calor en la arena: la tranquilidad de saber que alguien está ahí. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "No hay mucho que planear en un día así: solo el sonido de la lluvia afuera, algo caliente para tomar, y tiempo de sobra para hablar de cualquier cosa.",
      "De esos días simples que terminan siendo de los más recordados, sin razón aparente.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "Cuando llueva fuerte algún día, aprovechemos para este plan sin agenda. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí.",
    "buenasNoches": "Buenas noches, con el sonido de lluvia imaginaria todavía de fondo. Y si pudiera cerrar este día contigo, escogería elegir una película solo por la promesa de verla juntos. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'filosófica'.",
    "escenaInmersiva": "Una playa que todavía guarda calor en la arena; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 292,
    "categoria": "Noche",
    "icono": "🌃",
    "tono": "hot",
    "color": {
      "principal": "#b3123f",
      "suave": "#f2b3c4",
      "oscuro": "#170209"
    },
    "buenosDias": "Buenos días, aunque este mensaje debería ser de noche, que es cuando más te pienso de esta forma en particular. Si estuvieras aquí, probablemente encontraría una excusa para quedarme un poco más cerca de ti. Hay personas que uno abraza por costumbre; contigo siempre aparece la tentación de no soltarte todavía.",
    "poema": [
      "Hay una hora de la noche en la que los pensamientos se vuelven un poco menos inocentes, y contigo esa hora llega bastante seguido.",
      "No pido perdón por eso. Solo aviso, para que no te tome por sorpresa.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "Si te escribo tarde alguna de estas noches, ya sabes exactamente por qué. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el silencio cómodo que no necesita explicación.",
    "buenasNoches": "Buenas noches, con la noche apenas empezando en mi cabeza. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Una habitación todavía en penumbra; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 293,
    "categoria": "Bis pendiente",
    "icono": "🔥",
    "tono": "hot",
    "color": {
      "principal": "#d1163f",
      "suave": "#f7bccb",
      "oscuro": "#1c0409"
    },
    "buenosDias": "Buenos días. Todavía tengo pendiente ese bis que te debo desde la última vez que estuvimos cerca. Hoy me gustaría robarte unos minutos sin planes ni teléfonos: solo tú, yo y esa clase de silencio que se vuelve demasiado íntimo cuando uno se gusta de verdad.",
    "poema": [
      "No se me ha olvidado, para nada. Sigue en la lista de pendientes más deseados que tengo por ahí.",
      "Cuando quieras cobrarlo, aquí estoy, completamente disponible.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "Cóbrame ese bis cuando quieras, en serio, sin avisar. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la respiración tranquila cuando por fin baja el ruido del día.",
    "buenasNoches": "Buenas noches, con el bis todavía en deuda pendiente. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un sofá con una manta compartida; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 294,
    "categoria": "Frecuencia",
    "icono": "📻",
    "tono": "hot",
    "color": {
      "principal": "#c81d4a",
      "suave": "#f7c0d0",
      "oscuro": "#1a0308"
    },
    "buenosDias": "Buenos días. Hoy quiero estar sintonizado contigo, en la misma frecuencia, cerca, sin interferencia de por medio. Hay algo peligrosamente bonito en saber que una persona te atrae y, al mismo tiempo, te da paz. Tú tienes esa combinación que me hace querer acercarme y quedarme.",
    "poema": [
      "Hay una frecuencia que solo se sintoniza bien cuando estamos cerca de verdad, sin distancia que la corte.",
      "Hoy tengo muchas ganas de esa buena señal contigo, completa.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "Avísame cuándo podemos sintonizar esa frecuencia otra vez, en persona. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el ruido lejano de la ciudad.",
    "buenasNoches": "Buenas noches, buscando buena señal contigo, como siempre. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un domingo lento; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 295,
    "categoria": "Track secreto",
    "icono": "🔓",
    "tono": "hot",
    "color": {
      "principal": "#d1163f",
      "suave": "#f7bccb",
      "oscuro": "#1c0409"
    },
    "buenosDias": "Buenos días. Anoche encontré, sin buscarla, una canción que ahora asocio completamente contigo, y no es precisamente para escuchar en el bus. Hoy me dieron ganas de escribirte antes de que el día terminara de despertarse. No solo porque te extraño: porque hay una parte de mí que disfruta imaginarte cerca, con esa mezcla tuya de calma y peligro que me desarma.",
    "poema": [
      "Hay músicas que uno guarda para momentos muy específicos, y esta se ganó ese lugar apenas la escuché una vez.",
      "No te digo cuál es todavía. Prefiero que la descubras conmigo, en el momento correcto.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Cuando estemos cerca, te la pongo. Ahí vas a entender por qué la guardé. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: ese segundo de silencio antes de decir algo que importa.",
    "buenasNoches": "Buenas noches, con esa canción todavía sonando en mi cabeza. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] a tu criterio.",
    "notaCancion": "[PARA TI] automática, catálogo 'hot'.",
    "escenaInmersiva": "Un cielo nublado que no termina de decidirse; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 296,
    "categoria": "Nosotros",
    "icono": "🎉",
    "tono": "amor",
    "color": {
      "principal": "#ff5d8f",
      "suave": "#ffd7e6",
      "oscuro": "#2a0f1c"
    },
    "buenosDias": "Buenos días. Hoy cerramos el primer gran tramo del calendario: el día 296. Todavía quedan 69 días nuevos por descubrir, pero quería detenerme aquí un segundo para agradecerte por haber llegado hasta este punto. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cama desordenada después de una noche larga: la sombra de las hojas moviéndose sobre el suelo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque no quiero quererte solamente en los momentos fáciles.",
    "poema": [
      "Empezamos con un Snoopy y una promesa de acompañarte todos los días que pudiera, y aquí seguimos, muchos días después.",
      "Gracias por darle clic a cada corazón, por leer cada poema, por dejarme decirte de mil formas distintas siempre lo mismo: que te amo, que pienso en ti, que quiero estar.",
      "Esto no se termina aquí. Este es solo el primer capítulo de algo que planeo seguir construyendo contigo, un día a la vez.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "Gracias por estos 296 días. Esto lo hice completo, pensando solo en ti. Y todavía faltan 69 días para cerrar el año. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sombra de las hojas moviéndose sobre el suelo.",
    "buenasNoches": "Buenas noches, mi persona favorita. Fin del primer capítulo, no de la historia. Y si pudiera cerrar este día contigo, escogería mirar el cielo y buscarle un nombre a la forma de una nube. Me gusta pensar que porque no quiero quererte solamente en los momentos fáciles.",
    "notaImagen": "[PARA TI] tu foto favorita de los dos, para cerrar este primer tramo con algo especial.",
    "notaCancion": "[PARA TI] la canción que sientas que representa esta etapa de ustedes.",
    "escenaInmersiva": "Una cama desordenada después de una noche larga; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 297,
    "categoria": "Café compartido",
    "icono": "☕",
    "tono": "amor",
    "color": {
      "principal": "#a9784f",
      "suave": "#f1dfcf",
      "oscuro": "#21130c"
    },
    "buenosDias": "Buenos días. Hoy no quería hablarte de grandes promesas. Quería imaginar algo mucho más sencillo: tú frente a mí, dos tazas calientes, el sueño todavía pegado a los ojos y esa conversación que empieza sin saber a qué hora va a terminar. Si hoy estuviéramos juntos, me gustaría que este día empezara en una esquina iluminada por el sol de la tarde: el sonido pequeño de una taza al tocar la mesa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "Hay intimidades que no necesitan una fecha especial: compartir el primer sorbo, mirarnos todavía despeinados y sonreír porque sí.",
      "Si algún día me preguntas qué quiero de una mañana perfecta, probablemente empiece por tenerte enfrente.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan: preparen dos cafés o chocolates, apaguen las notificaciones durante veinte minutos y háganse tres preguntas que nunca se hayan hecho. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa.",
    "buenasNoches": "Buenas noches. Me quedo con esa imagen de los dos en una mesa pequeña, hablando de cualquier cosa mientras el mundo espera afuera. Hay futuros que se sienten bonitos precisamente porque son sencillos. Y si pudiera cerrar este día contigo, escogería caminar sin destino mientras hablamos. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[PARA TI] dos tazas, una mesa junto a una ventana y luz de mañana.",
    "notaCancion": "[MÚSICA] Just The Way You Are — Bruno Mars, o una balada equivalente del catálogo.",
    "escenaInmersiva": "Una esquina iluminada por el sol de la tarde; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 298,
    "categoria": "Cartas que no se envían",
    "icono": "✉️",
    "tono": "filosofica",
    "color": {
      "principal": "#6b2142",
      "suave": "#e3b8c9",
      "oscuro": "#180509"
    },
    "buenosDias": "Buenos días. Hoy quiero proponerte algo raro: escribir una carta que no tenga que leer nadie. Solo ustedes dos, cada uno desde su lado, contando qué parte del otro espera conservar incluso cuando pasen muchos años. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina llena de pequeñas cosas por ordenar: la risa que llega antes que la respuesta. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "Escribe aquello que quizá nunca dices porque en persona se queda atrapado entre la vergüenza y la costumbre.",
      "No hace falta que sea perfecta; algunas verdades pierden belleza cuando intentamos escribirlas demasiado bonito.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Actividad: diez minutos, papel y cero correcciones. Al terminar pueden leerla o guardarla para abrirla dentro de un año. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la risa que llega antes que la respuesta.",
    "buenasNoches": "Buenas noches. Ojalá hoy hayas dejado sobre el papel una parte de ti que normalmente escondes detrás de un 'todo bien'. A veces amar también es atreverse a ser leído de verdad. Y si pudiera cerrar este día contigo, escogería preguntarte qué fue lo primero que pensaste al despertar. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[PARA TI] un sobre escrito a mano sobre una cama o escritorio.",
    "notaCancion": "[MÚSICA] River Flows in You — Yiruma.",
    "escenaInmersiva": "Una cocina llena de pequeñas cosas por ordenar; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 299,
    "categoria": "La playlist imposible",
    "icono": "🎧",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy tenemos una misión absurda y preciosa: construir una playlist de diez canciones donde cada canción tenga que representar una parte distinta de nosotros. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina con la primera taza sobre la mesa: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Una para cómo empezó todo, otra para una pelea que sobrevivimos, otra para una noche que todavía recuerdas, otra para lo que sueñas que venga.",
      "Al final no tendremos solo música; tendremos una especie de álbum secreto de nuestra historia.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Regla: cada uno elige cinco canciones y explica una sola frase sobre por qué la eligió. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el olor de algo recién hecho.",
    "buenasNoches": "Buenas noches. Si hoy terminamos una playlist que cuenta nuestra historia sin necesidad de explicarla, entonces hicimos algo más importante de lo que parecía al despertar. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[PARA TI] una pantalla con una playlist compartida y audífonos.",
    "notaCancion": "[MÚSICA] usar una de las canciones elegidas por ustedes; idealmente alternar español e inglés.",
    "escenaInmersiva": "Una cocina con la primera taza sobre la mesa; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 300,
    "categoria": "Tres recuerdos",
    "icono": "📷",
    "tono": "amor",
    "color": {
      "principal": "#d1467f",
      "suave": "#ffc9dd",
      "oscuro": "#26060f"
    },
    "buenosDias": "Buenos días. Día 300. En lugar de hacer una celebración enorme, quiero que hoy nos detengamos en tres recuerdos que todavía consiguen cambiarte la cara cuando aparecen en la conversación. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa con dos vasos y algo pendiente de conversar: la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "Uno puede recordar una fecha y olvidar el resto, pero hay momentos que el cuerpo guarda completos: una risa, una mirada, una frase dicha en el momento exacto.",
      "Hoy quiero volver a esos lugares contigo, aunque sea solamente con la memoria.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "Mándense tres fotos o describan tres recuerdos sin decir la fecha. El otro tiene que adivinar cuál es cuál. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras.",
    "buenasNoches": "Buenas noches. Tres recuerdos parecen pocos hasta que uno empieza a contarlos. Qué bonito que después de 300 días todavía tengamos tantos de dónde escoger. Y si pudiera cerrar este día contigo, escogería abrazarte antes de intentar resolver cualquier cosa. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[PARA TI] collage de tres fotos reales de ustedes.",
    "notaCancion": "[MÚSICA] Te Mando Flores — Fonseca.",
    "escenaInmersiva": "Una mesa con dos vasos y algo pendiente de conversar; la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras. abrazarte antes de intentar resolver cualquier cosa. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 301,
    "categoria": "Cena a cuatro manos",
    "icono": "🍝",
    "tono": "amor",
    "color": {
      "principal": "#a9713f",
      "suave": "#ecd2ae",
      "oscuro": "#20130a"
    },
    "buenosDias": "Buenos días. Hoy la cita ocurre en la cocina. No importa si uno corta demasiado grande y el otro se roba ingredientes: quiero que la comida salga de las cuatro manos, no de una sola persona trabajando mientras la otra mira. Si hoy estuviéramos juntos, me gustaría que este día empezara en un día de semana que pide una pausa: la lluvia golpeando despacio los vidrios. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "poema": [
      "Cocinar juntos tiene algo bonito porque obliga a coordinarse, probar, improvisar y reírse cuando algo sale distinto a la receta.",
      "Al final, la comida puede quedar perfecta o no; lo importante es que la noche tenga una historia que contar.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: cena a cuatro manos con pasta, tomate, ajo y albahaca. Cocinen con música, prueben la salsa directamente de la cuchara y, al terminar, no corran a lavar todo: primero una copa, una película corta y arrunchis.",
    "buenasNoches": "Buenas noches. Me gusta la idea de terminar con platos en el fregadero y una cocina que huele a algo que hicimos juntos. Hay planes que parecen pequeños hasta que se convierten en recuerdos. Y si pudiera cerrar este día contigo, escogería escuchar contigo una canción hasta el final. Me gusta pensar que porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías. La cocina queda para mañana. Esta noche quiero recordar más el olor del ajo, tu risa y el momento en que terminamos sentados juntos.",
    "notaImagen": "[PARA TI] dos personas cocinando pasta en una cocina cálida.",
    "notaCancion": "[MÚSICA] una playlist de salsa romántica;",
    "escenaInmersiva": "Un día de semana que pide una pausa; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 302,
    "categoria": "Origami de dos",
    "icono": "🪽",
    "tono": "filosofica",
    "color": {
      "principal": "#6fb1e0",
      "suave": "#d6ecfb",
      "oscuro": "#071522"
    },
    "buenosDias": "Buenos días. Hoy quiero que hagamos algo inútil en el mejor sentido: doblar una hoja hasta convertirla en una figura que no necesitábamos, pero que dentro de unos meses nos va a recordar esta noche. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa llena de papelitos y recuerdos: el roce casual que termina sintiéndose importante. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Doblar papel parece sencillo hasta que una esquina se resiste y los dos terminan riéndose de una instrucción que nadie entendió.",
      "Me gusta esa clase de tiempo: el que no produce nada urgente y, precisamente por eso, produce memoria.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "Actividad: hagan dos grullas de origami. Cada uno escribe una palabra dentro de la suya antes de cerrarla. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante.",
    "buenasNoches": "Buenas noches. Que tu grulla quede cerca de la cama y la mía cerca de la mesa. Dos papeles pequeños para recordar que también sabemos construir cosas juntos. Y si pudiera cerrar este día contigo, escogería bailar contigo aunque no haya espacio. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[PARA TI] dos grullas de papel sobre una mesa.",
    "notaCancion": "[MÚSICA] Nuvole Bianche — Ludovico Einaudi.",
    "escenaInmersiva": "Una mesa llena de papelitos y recuerdos; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 303,
    "categoria": "Mirarte",
    "icono": "🪞",
    "tono": "hot",
    "color": {
      "principal": "#a10e35",
      "suave": "#f0aabd",
      "oscuro": "#140208"
    },
    "buenosDias": "Buenos días. Hoy voy a admitir algo sin darle demasiadas vueltas: me gusta mirarte. No solamente cuando estás arreglada; también cuando estás distraída, cuando te miras al espejo, cuando todavía no sabes que te estoy observando con una sonrisa. Hay mañanas en las que el cariño llega primero. Hoy llegó el deseo: esas ganas tranquilas de tenerte cerca, de mirarte sin prisa y de dejar que el resto del mundo espere un rato.",
    "poema": [
      "Hay algo peligroso en acostumbrarse a la belleza de alguien, porque uno empieza a creer que verla todos los días la vuelve normal.",
      "Contigo me pasa al revés: mientras más te conozco, más detalles encuentro que me distraen.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "Mensaje sugerente: si algún día te arreglas frente al espejo, acuérdate de que hay alguien que podría quedarse mirándote mucho más tiempo del prudente. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sensación de una mano buscando otra sin pensarlo.",
    "buenasNoches": "Buenas noches. Me quedo con una imagen tuya frente al espejo y esa sensación de querer acercarme solo para comprobar si de cerca eres todavía más bonita. Sí, probablemente lo eres. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] espejo, luz tenue, perfume o detalle elegante; sin desnudez explícita.",
    "notaCancion": "[MÚSICA] Often — The Weeknd.",
    "escenaInmersiva": "Un balcón donde el cielo cambia de color; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 304,
    "categoria": "Preguntas difíciles",
    "icono": "❓",
    "tono": "amor",
    "color": {
      "principal": "#3f5fd1",
      "suave": "#c9d3fa",
      "oscuro": "#0a1030"
    },
    "buenosDias": "Buenos días. Hoy no quiero preguntarte qué comida te gusta ni cuál es tu color favorito. Quiero entrar un poquito más adentro: qué miedo te gustaría dejar atrás, qué versión de ti quieres conocer y qué esperas que nunca cambie entre nosotros. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cuarto con música bajita: una canción que parece llegar exactamente en el momento correcto. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "Conocer a alguien no es memorizar sus gustos; es aprender dónde se le quiebra la voz y qué sueños le dan vergüenza contar.",
      "Quiero seguir descubriendo esas partes tuyas que no aparecen en una conversación rápida.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Juego: cada uno escribe tres preguntas profundas. Se responden sin interrumpir y sin convertir las respuestas en discusión. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "Buenas noches. Gracias por dejarme entrar un poco más en tu mundo hoy. Quiero conocer incluso las partes que todavía no sabes cómo explicar. Y si pudiera cerrar este día contigo, escogería mirarte unos segundos más de lo necesario. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[PARA TI] dos hojas con preguntas escritas a mano.",
    "notaCancion": "[MÚSICA] Good News — Mac Miller.",
    "escenaInmersiva": "Un cuarto con música bajita; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 305,
    "categoria": "Desayuno improvisado",
    "icono": "🥞",
    "tono": "amor",
    "color": {
      "principal": "#f2b705",
      "suave": "#fff0b3",
      "oscuro": "#251c02"
    },
    "buenosDias": "Buenos días. Hoy quiero que el desayuno sea una excusa para no tener prisa. Pan, fruta, huevos, pancakes o lo que haya; la regla es sentarse juntos y no mirar el teléfono durante los primeros quince minutos. Si hoy estuviéramos juntos, me gustaría que este día empezara en un pasillo silencioso antes de dormir: el calor queda después de un abrazo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "Hay mañanas que merecen cubiertos desordenados, migas sobre la mesa y una conversación que se alarga porque nadie está intentando llegar a ninguna parte.",
      "Si algún día tenemos una mañana así, quiero acordarme de lo bien que se sentía no necesitar nada más.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "Idea: pancakes sencillos con banano y canela; cada uno decora el plato del otro. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el calor queda después de un abrazo.",
    "buenasNoches": "Buenas noches. Hay días que se recuerdan por un acontecimiento enorme y otros por un desayuno tonto que nos hizo reír. Prefiero tener muchos de los segundos contigo. Y si pudiera cerrar este día contigo, escogería pedirte que me cuentes una historia que nunca me hayas contado. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[PARA TI] desayuno para dos junto a una ventana.",
    "notaCancion": "[MÚSICA] Just The Way You Are — Bruno Mars.",
    "escenaInmersiva": "Un pasillo silencioso antes de dormir; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 306,
    "categoria": "Película para abrazarse",
    "icono": "🎬",
    "tono": "amor",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hoy la recomendación es de esas que justifican apagar las luces, preparar algo para picar y dejar que una historia haga el resto: una película romántica que podamos comentar sin miedo a decir 'qué cursi'. Si hoy estuviéramos juntos, me gustaría que este día empezara en una ventana abierta al aire fresco: la luz tibia que se queda unos segundos sobre la pared. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "No quiero una película perfecta; quiero una que nos haga mirarnos en algún momento y pensar que algunas escenas se parecen un poquito a nosotros.",
      "Y si termina siendo demasiado sentimental, peor para nosotros: tendremos que abrazarnos durante los créditos.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: vean *About Time* con una manta compartida. Regla: cada momento de la película que les haga pensar 'yo también quiero vivir eso contigo' se marca con un beso o un abrazo largo. Si quieren hacerlo más juguetón: cada vez que alguno diga “quiero eso con nosotros”, el otro recibe un beso.",
    "buenasNoches": "Buenas noches. Algunas películas terminan cuando aparecen los créditos; otras se quedan un rato más porque uno empieza a imaginar su propia versión de la historia. Y si pudiera cerrar este día contigo, escogería dejarte una nota donde menos la esperes. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura. Después, cada uno dice un momento pequeño de la vida real que quisiera repetir para siempre con el otro.",
    "notaImagen": "[PARA TI] sofá, manta y luces bajas.",
    "notaCancion": "[MÚSICA] A Thousand Years — Christina Perri.",
    "escenaInmersiva": "Una ventana abierta al aire fresco; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 307,
    "categoria": "El juego de los cinco minutos",
    "icono": "⏱️",
    "tono": "amor",
    "color": {
      "principal": "#d94fb0",
      "suave": "#ffd6f0",
      "oscuro": "#26071c"
    },
    "buenosDias": "Buenos días. Hoy tenemos un juego ridículamente sencillo: cinco minutos para dibujarnos mutuamente sin levantar el lápiz del papel. No importa si terminamos pareciendo extraterrestres. Si hoy estuviéramos juntos, me gustaría que este día empezara en un trayecto cualquiera que de pronto se vuelve especial: el cambio de color del cielo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "poema": [
      "El dibujo no tiene que parecerse a la persona; tiene que parecerse a cómo la ves.",
      "Y quizá ahí esté la parte bonita: descubrir qué detalles nota el otro cuando mira.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Pongan un temporizador de cinco minutos y dibujen el retrato del otro. Al final, firmen el dibujo como si fuera una obra de museo. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cambio de color del cielo.",
    "buenasNoches": "Buenas noches. Espero que hoy te hayas reído de mi dibujo y, aunque sea un poquito, de la forma en que te miro. No sé dibujarte, pero sí sé mirarte con cariño. Y si pudiera cerrar este día contigo, escogería hacerte un café y dejarlo cerca de ti sin decir demasiado. Me gusta pensar que porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "notaImagen": "[PARA TI] dos dibujos imperfectos de pareja.",
    "notaCancion": "[MÚSICA] algo alegre de Café Tacvba o Morat.",
    "escenaInmersiva": "Un trayecto cualquiera que de pronto se vuelve especial; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 308,
    "categoria": "El lugar favorito",
    "icono": "📍",
    "tono": "filosofica",
    "color": {
      "principal": "#3a1f5c",
      "suave": "#c9b8e6",
      "oscuro": "#0c0716"
    },
    "buenosDias": "Buenos días. Hoy quiero preguntarte por un lugar que quizá no sea turístico, bonito ni especial para nadie más. Ese lugar al que volverías porque allí pasó algo que todavía te acompaña. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cafetería imaginaria donde solo estamos tú y yo: el aire fresco entrando por la ventana. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "Los lugares no guardan recuerdos por sí solos; somos nosotros quienes dejamos una parte de la vida pegada a sus paredes, sus calles o sus ventanas.",
      "Quiero conocer esos lugares tuyos, incluso los que solo existen en tu memoria.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "Compartan una ubicación en el mapa que tenga un recuerdo importante y cuenten la historia detrás. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el aire fresco entrando por la ventana.",
    "buenasNoches": "Buenas noches. Hoy viajé contigo sin moverme demasiado: bastó escuchar dónde fuiste, qué sentiste y por qué ese lugar todavía significa algo. Y si pudiera cerrar este día contigo, escogería quedarme cerca mientras haces algo que te gusta. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[PARA TI] mapa con dos puntos marcados.",
    "notaCancion": "[MÚSICA] Yellow — Coldplay.",
    "escenaInmersiva": "Una cafetería imaginaria donde solo estamos tú y yo; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 309,
    "categoria": "Pizza de nosotros",
    "icono": "🍕",
    "tono": "amor",
    "color": {
      "principal": "#c22b2b",
      "suave": "#f3b3b3",
      "oscuro": "#1a0505"
    },
    "buenosDias": "Buenos días. Hoy vamos a diseñar una pizza que tenga una parte de cada uno. No hace falta que tenga sentido culinario; quiero saber qué ingredientes pondrías de tu lado y cuáles dejarías para el mío. Si hoy estuviéramos juntos, me gustaría que este día empezara en un lugar cualquiera que se convierte en nuestro por compartirlo: el cansancio bonito después de un día compartido. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo me interesa más la experiencia que la perfección.",
    "poema": [
      "Hay relaciones que se parecen a una receta exacta y otras que funcionan porque cada uno aporta algo distinto.",
      "Nosotros me gustan más como esas pizzas con demasiadas cosas, pero que por alguna razón terminan sabiendo bien.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: pizza mitad y mitad. Cada uno elige un ingrediente sorpresa para la mitad del otro. Mientras está en el horno, armen el sofá y elijan una película.",
    "buenasNoches": "Buenas noches. Si hoy hubo harina en la mesa, salsa en los dedos y alguna discusión absurda sobre queso, entonces fue una buena noche. Y si pudiera cerrar este día contigo, escogería inventarnos un plan sencillo para cuando podamos vernos. Me gusta pensar que porque contigo me interesa más la experiencia que la perfección. Después de la pizza viene lo importante: plato en la mesa, luces bajas, película y ese arrunchis que hace que el tiempo se vuelva lento.",
    "notaImagen": "[PARA TI] pizza casera dividida en dos mitades diferentes.",
    "notaCancion": "[MÚSICA] Vivir Mi Vida — Marc Anthony.",
    "escenaInmersiva": "Un lugar cualquiera que se convierte en nuestro por compartirlo; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 310,
    "categoria": "Lo que admiro",
    "icono": "🌙",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy no quiero decir solamente que eres bonita. Quiero hablar de esas cosas tuyas que quizá tú misma no consideras especiales y que yo sí veo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una tarde que huele a lluvia: la música escapándose de un parlante cercano. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "Admiro cómo reaccionas cuando algo te importa, la forma en que cuidas ciertos detalles y esa manera tuya de seguir incluso cuando estás cansada.",
      "Hay belleza que se ve en una foto y otra que solo aparece después de conocer a alguien. La tuya tiene de las dos.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "Reto: cada uno debe decir cinco cosas del otro que no tengan nada que ver con apariencia física. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la música escapándose de un parlante cercano.",
    "buenasNoches": "Buenas noches. Hoy te miro con una gratitud distinta: no solamente por ser mi pareja, sino por la persona que eres cuando nadie está intentando impresionarme. Y si pudiera cerrar este día contigo, escogería dejar que el silencio haga su parte. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "notaImagen": "[PARA TI] retrato natural, sin posar demasiado.",
    "notaCancion": "[MÚSICA] Lo Que en Ti Veo — Andrés Cepeda.",
    "escenaInmersiva": "Una tarde que huele a lluvia; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 311,
    "categoria": "Noche de preguntas rápidas",
    "icono": "⚡",
    "tono": "amor",
    "color": {
      "principal": "#ff9ecb",
      "suave": "#ffe6f2",
      "oscuro": "#33091c"
    },
    "buenosDias": "Buenos días. Hoy quiero jugar a responder sin pensar demasiado. Playa o montaña. Madrugar o trasnochar. Beso largo o abrazo largo. Viaje improvisado o plan perfecto. Si hoy estuviéramos juntos, me gustaría que este día empezara en una noche con la ciudad respirando detrás de la ventana: la tranquilidad de saber que alguien está ahí. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque no quiero quererte solamente en los momentos fáciles.",
    "poema": [
      "Las respuestas rápidas tienen algo divertido porque a veces dejan escapar preferencias que nunca aparecen en una conversación seria.",
      "Y si alguna respuesta nos sorprende, mejor: todavía tenemos cosas que descubrir.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "Hagan veinte preguntas rápidas. Prohibido decir 'me da igual' más de dos veces. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí.",
    "buenasNoches": "Buenas noches. Hoy descubrimos pequeñas cosas y probablemente discutimos por alguna elección absurda. Me encanta que contigo hasta eso pueda ser una cita. Y si pudiera cerrar este día contigo, escogería elegir una película solo por la promesa de verla juntos. Me gusta pensar que porque no quiero quererte solamente en los momentos fáciles.",
    "notaImagen": "[PARA TI] tarjetas con preguntas rápidas.",
    "notaCancion": "[MÚSICA] una canción pop alegre elegida entre los dos.",
    "escenaInmersiva": "Una noche con la ciudad respirando detrás de la ventana; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 312,
    "categoria": "Cerca del oído",
    "icono": "🔥",
    "tono": "hot",
    "color": {
      "principal": "#d1163f",
      "suave": "#f7bccb",
      "oscuro": "#1c0409"
    },
    "buenosDias": "Buenos días. Hoy me dieron ganas de decirte algo que probablemente suena mejor cerca que escrito: me encanta la idea de tenerte a pocos centímetros, hablar bajito y ver cómo intentas seguir una conversación mientras yo no dejo de mirarte. Hay algo peligrosamente bonito en saber que una persona te atrae y, al mismo tiempo, te da paz. Tú tienes esa combinación que me hace querer acercarme y quedarme.",
    "poema": [
      "Hay una distancia exacta que deja de sentirse cómoda cuando te deseo cerca: la suficiente para escucharte respirar, demasiado lejos para no querer acortarla.",
      "Y sí, me gusta imaginar ese momento más de lo que debería admitir a esta hora.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "Mensaje sugerente: cuando estemos juntos, quiero un rato sin teléfonos, sin ruido y con esa clase de cercanía que hace que las palabras empiecen a sobrar. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el silencio cómodo que no necesita explicación.",
    "buenasNoches": "Buenas noches. Hoy me voy a dormir con una idea muy concreta: tú cerca, mi voz bajita y ninguna prisa por separarnos. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] luz cálida, dos siluetas cercanas; sin desnudez explícita.",
    "notaCancion": "[MÚSICA] Wicked Games — The Weeknd.",
    "escenaInmersiva": "Un automóvil detenido mientras termina una canción; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 313,
    "categoria": "Libro subrayado",
    "icono": "📖",
    "tono": "filosofica",
    "color": {
      "principal": "#6b2142",
      "suave": "#e3b8c9",
      "oscuro": "#180509"
    },
    "buenosDias": "Buenos días. Hoy quiero regalarte una recomendación para leer despacio: un libro que no tengas que terminar rápido, sino dejar que te encuentre en distintas partes de la vida. Si hoy estuviéramos juntos, me gustaría que este día empezara en una calle que todavía no se llena de gente: la respiración tranquila cuando por fin baja el ruido del día. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "Un buen libro no siempre responde algo; a veces solo encuentra la pregunta que llevabas meses evitando.",
      "Y me gusta pensar que una pareja también puede ser eso: alguien con quien uno aprende a hacerse mejores preguntas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "Recomendación: 'Los días del abandono' de Elena Ferrante si quieres una lectura intensa sobre identidad y vínculos; no es una historia romántica cómoda, y precisamente por eso puede dar conversación. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la respiración tranquila cuando por fin baja el ruido del día.",
    "buenasNoches": "Buenas noches. Ojalá algún día tengamos un libro lleno de páginas dobladas, frases subrayadas y conversaciones que empezaron por una historia ajena y terminaron hablando de nosotros. Y si pudiera cerrar este día contigo, escogería guardar una frase tuya para recordarla después. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[PARA TI] libro abierto con lápiz y una taza al lado.",
    "notaCancion": "[MÚSICA] Experience — Ludovico Einaudi.",
    "escenaInmersiva": "Una calle que todavía no se llena de gente; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 314,
    "categoria": "Noche sin pantallas",
    "icono": "🕯️",
    "tono": "amor",
    "color": {
      "principal": "#d4af37",
      "suave": "#f7e8b0",
      "oscuro": "#241c04"
    },
    "buenosDias": "Buenos días. Hoy quiero proponerte una cita extraña para esta época: una hora sin pantallas. Una lámpara, música bajita, algo de comer y nosotros hablando como si no existiera nada más. Si hoy estuviéramos juntos, me gustaría que este día empezara en un parque casi vacío: el ruido lejano de la ciudad. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Quizá al principio busquemos el teléfono por costumbre. Después llegará ese silencio cómodo en el que ya no hace falta llenarlo todo.",
      "Hay una intimidad muy particular en descubrir que todavía sabemos entretenernos mirándonos.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "Dejen los celulares lejos durante una hora. Pueden jugar cartas, cocinar, dibujar o simplemente conversar. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el ruido lejano de la ciudad.",
    "buenasNoches": "Buenas noches. Una hora parece poco hasta que nadie mira la pantalla y empiezas a notar la cantidad de cosas que pasan cuando realmente estás presente. Y si pudiera cerrar este día contigo, escogería cocinar algo que salga imperfecto pero nuestro. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[PARA TI] lámpara cálida, velas y dos vasos sobre una mesa.",
    "notaCancion": "[MÚSICA] At Last — Etta James.",
    "escenaInmersiva": "Un parque casi vacío; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 315,
    "categoria": "Mi versión favorita de ti",
    "icono": "💗",
    "tono": "amor",
    "color": {
      "principal": "#ff6fa8",
      "suave": "#ffd7e6",
      "oscuro": "#3a0f24"
    },
    "buenosDias": "Buenos días. Tengo muchas versiones favoritas de ti: cuando te arreglas, cuando te ríes hasta perder la compostura, cuando estás concentrada, cuando tienes sueño y todavía intentas seguir hablando conmigo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una playa que todavía guarda calor en la arena: ese segundo de silencio antes de decir algo que importa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "No quiero quedarme con una sola versión porque sería como querer a una fotografía.",
      "Quiero todas: la brillante, la cansada, la seria, la ridícula, la que sabe exactamente lo que quiere y la que todavía está descubriéndolo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Cada uno debe elegir una versión del otro que adore y contar por qué. No vale repetir 'porque eres linda'. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: ese segundo de silencio antes de decir algo que importa.",
    "buenasNoches": "Buenas noches. Hoy me quedo pensando en todas esas pequeñas versiones tuyas que he tenido la suerte de conocer. Qué bonito no tener que elegir solo una. Y si pudiera cerrar este día contigo, escogería hacerte reír con una tontería. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[PARA TI] varias fotos espontáneas, no necesariamente posadas.",
    "notaCancion": "[MÚSICA] Perfecta — Camilo.",
    "escenaInmersiva": "Una playa que todavía guarda calor en la arena; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 316,
    "categoria": "Noche de karaoke",
    "icono": "🎤",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. Hoy quiero que cantemos mal. Muy mal. Elegimos una canción que el otro conozca, ponemos la letra en pantalla y nos comprometemos a no tener vergüenza durante tres minutos. Si hoy estuviéramos juntos, me gustaría que este día empezara en una habitación todavía en penumbra: la sombra de las hojas moviéndose sobre el suelo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "poema": [
      "Hay una libertad extraña en hacer el ridículo con alguien que te quiere igual después.",
      "Quizá por eso las mejores citas no son las que salen perfectas, sino las que terminan en carcajadas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "Karaoke por turnos: una canción que te encanta, una que le encanta al otro y una que ninguno sabe cantar bien. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sombra de las hojas moviéndose sobre el suelo.",
    "buenasNoches": "Buenas noches. Si hoy terminamos afónicos, desafinados y felices, entonces cumplimos perfectamente la misión. Y si pudiera cerrar este día contigo, escogería mirar el cielo y buscarle un nombre a la forma de una nube. Me gusta pensar que porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "notaImagen": "[PARA TI] dos micrófonos improvisados y luces de colores.",
    "notaCancion": "[MÚSICA] Vivir Mi Vida — Marc Anthony o Cali Pachanguero — Grupo Niche.",
    "escenaInmersiva": "Una habitación todavía en penumbra; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 317,
    "categoria": "Cielo de madrugada",
    "icono": "🌌",
    "tono": "filosofica",
    "color": {
      "principal": "#3a1f5c",
      "suave": "#c9b8e6",
      "oscuro": "#0c0716"
    },
    "buenosDias": "Buenos días. Hay conversaciones que solo aparecen cuando todo está oscuro y nadie tiene prisa. Hoy quiero reservar una para hablar de dónde nos gustaría estar dentro de cinco años, sin convertirlo en una promesa rígida. Si hoy estuviéramos juntos, me gustaría que este día empezara en un sofá con una manta compartida: el sonido pequeño de una taza al tocar la mesa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "El futuro no tiene que parecerse exactamente a lo que imaginamos para ser bonito.",
      "Solo necesito que, cuando lo miremos desde lejos, todavía haya una parte de nosotros que diga: qué bueno que seguimos aquí.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "Actividad: hagan una lista de cinco cosas que quieren vivir juntos, sin poner fechas ni dinero de por medio. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa.",
    "buenasNoches": "Buenas noches. Me gusta imaginar que, dentro de muchos años, todavía tendremos conversaciones nocturnas sobre todo lo que nos falta por conocer. Y si pudiera cerrar este día contigo, escogería caminar sin destino mientras hablamos. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[PARA TI] cielo estrellado o ventana de noche.",
    "notaCancion": "[MÚSICA] Clair de Lune — Debussy.",
    "escenaInmersiva": "Un sofá con una manta compartida; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 318,
    "categoria": "Helado casero",
    "icono": "🍓",
    "tono": "amor",
    "color": {
      "principal": "#d1467f",
      "suave": "#ffc9dd",
      "oscuro": "#26060f"
    },
    "buenosDias": "Buenos días. Hoy quiero una cita que empiece con algo frío y termine con dos personas riéndose de cómo quedó el experimento. Helado casero, frutas y una cucharita para compartir. Si hoy estuviéramos juntos, me gustaría que este día empezara en un domingo lento: la risa que llega antes que la respuesta. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "Las recetas más bonitas no siempre son las más complicadas; a veces solo necesitan algo dulce, una cocina y alguien con quien ensuciar un poco la mesa.",
      "Me gusta que nuestras mejores historias puedan empezar con cosas tan pequeñas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: helado de banano con cacao o fresas. Cada uno inventa un topping para el otro y le pone un nombre ridículo. Después, película corta y manta.",
    "buenasNoches": "Buenas noches. Si hoy terminamos compartiendo el último bocado de un postre que hicimos juntos, entonces el día tuvo exactamente el tipo de final quería. Y si pudiera cerrar este día contigo, escogería preguntarte qué fue lo primero que pensaste al despertar. Me gusta pensar que porque elegirte también es aprender tus detalles. Si queda helado en la cuchara, compártanlo. Si queda un poco de sueño, también.",
    "notaImagen": "[PARA TI] dos cucharas sobre un postre casero.",
    "notaCancion": "[MÚSICA] Favorito — Camilo.",
    "escenaInmersiva": "Un domingo lento; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 319,
    "categoria": "El álbum de nuestra historia",
    "icono": "💿",
    "tono": "amor",
    "color": {
      "principal": "#6b8f9e",
      "suave": "#c9e2ea",
      "oscuro": "#0a1a20"
    },
    "buenosDias": "Buenos días. Hoy quiero que hagamos algo que dentro de diez años va a valer mucho más que ahora: ordenar nuestras fotos favoritas y elegir solo doce. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cielo nublado que no termina de decidirse: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "Doce imágenes para contar una historia completa. No las más bonitas, sino las que todavía tienen sonido, olor, una frase o una sensación pegada.",
      "Porque una foto puede guardar un instante; nosotros le ponemos la historia.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Elijan una foto por cada mes reciente o por cada etapa importante. Escriban debajo una sola frase que explique por qué sobrevivió a la selección. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el olor de algo recién hecho.",
    "buenasNoches": "Buenas noches. Hoy convertimos recuerdos sueltos en una historia. Y qué suerte que esa historia todavía tenga páginas nuevas por llenar. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[PARA TI] collage de doce fotos.",
    "notaCancion": "[MÚSICA] Make You Feel My Love — Adele.",
    "escenaInmersiva": "Un cielo nublado que no termina de decidirse; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 320,
    "categoria": "La puerta cerrada",
    "icono": "🔐",
    "tono": "hot",
    "color": {
      "principal": "#a10e35",
      "suave": "#f0aabd",
      "oscuro": "#140208"
    },
    "buenosDias": "Buenos días. Hoy me apetece una idea sencilla y un poco peligrosa: una tarde en la que cerremos la puerta, dejemos el teléfono lejos y decidamos que durante un rato no existe ninguna obligación. Hoy te confieso algo sencillo: me encanta mirarte. No solo cuando estás arreglada, sino también cuando estás distraída, recién despierta o haciendo cualquier cosa que no creas que alguien está observando.",
    "poema": [
      "No necesito que pase nada extraordinario para querer tenerte cerca.",
      "A veces el deseo empieza precisamente ahí: en saber que tenemos un espacio solo nuestro y que nadie nos está esperando.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "Mensaje sugerente: quiero una tarde de cercanía, besos, miradas largas y esa clase de silencio que solo aparece cuando ya no hace falta hablar tanto. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción de fondo y la sensación de que no hace falta hacer nada más.",
    "buenasNoches": "Buenas noches. Hoy me quedo con ganas de esa puerta cerrada, de la luz baja y de tenerte suficientemente cerca como para olvidarme de mirar la hora. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] puerta entreabierta y luz cálida; sugerente, no explícito.",
    "notaCancion": "[MÚSICA] Propuesta Indecente — Romeo Santos.",
    "escenaInmersiva": "Una cama desordenada después de una noche larga; una canción de fondo y la sensación de que no hace falta hacer nada más. abrazarte antes de intentar resolver cualquier cosa. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 321,
    "categoria": "Reto de memoria",
    "icono": "🧠",
    "tono": "amor",
    "color": {
      "principal": "#3f8fd1",
      "suave": "#c9e2fa",
      "oscuro": "#081b2b"
    },
    "buenosDias": "Buenos días. Hoy quiero comprobar cuánto nos hemos estado mirando de verdad. Cada uno escribe cinco detalles físicos o gestos pequeños del otro que recuerde sin mirar ninguna foto. Si hoy estuviéramos juntos, me gustaría que este día empezara en una esquina iluminada por el sol de la tarde: la lluvia golpeando despacio los vidrios. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "Recordar el color de una prenda es fácil; recordar cómo cambia tu expresión justo antes de reírte requiere haber estado presente.",
      "Quiero aprender esos detalles tuyos hasta que se vuelvan parte de mi memoria cotidiana.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "Comparen las listas y descubran qué cosas observó uno que el otro ni siquiera sabía que hacía. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la lluvia golpeando despacio los vidrios.",
    "buenasNoches": "Buenas noches. Me gusta pensar que amarte también significa aprenderte lentamente, detalle por detalle, sin sentir que alguna vez termino de conocerte. Y si pudiera cerrar este día contigo, escogería escuchar contigo una canción hasta el final. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "notaImagen": "[PARA TI] libreta con dos listas escritas a mano.",
    "notaCancion": "[MÚSICA] Something — The Beatles.",
    "escenaInmersiva": "Una esquina iluminada por el sol de la tarde; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 322,
    "categoria": "Paseo sin destino",
    "icono": "🚶",
    "tono": "filosofica",
    "color": {
      "principal": "#6fb1e0",
      "suave": "#d6ecfb",
      "oscuro": "#071522"
    },
    "buenosDias": "Buenos días. Hoy no quiero proponerte un lugar. Quiero proponerte caminar sin destino durante un rato y elegir juntos dónde doblar en cada esquina. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina llena de pequeñas cosas por ordenar: el roce casual que termina sintiéndose importante. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "poema": [
      "Hay algo liberador en no saber exactamente dónde vas a terminar.",
      "Quizá las mejores historias de una pareja también funcionan así: no porque todo esté planeado, sino porque ambos siguen eligiendo la siguiente esquina.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "Regla del paseo: cada uno decide un giro alternadamente. Al final, compren o preparen algo pequeño para comer y comenten qué descubrieron. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante. Juego del paseo: durante la caminata, cada uno puede decir “pausa” una vez. Al hacerlo, tienen que inventar una historia romántica sobre la primera persona interesante que vean.",
    "buenasNoches": "Buenas noches. Hoy no necesitábamos un destino; necesitábamos caminar al mismo ritmo. A veces eso basta. Y si pudiera cerrar este día contigo, escogería bailar contigo aunque no haya espacio. Me gusta pensar que porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "notaImagen": "[PARA TI] dos sombras caminando al atardecer.",
    "notaCancion": "[MÚSICA] Burbujas de Amor — Juan Luis Guerra.",
    "escenaInmersiva": "Una cocina llena de pequeñas cosas por ordenar; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 323,
    "categoria": "Serie de domingo",
    "icono": "📺",
    "tono": "amor",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hoy quiero una serie que se convierta en territorio compartido: una que ninguno pueda seguir sin el otro porque necesitamos comentar cada episodio juntos. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina con la primera taza sobre la mesa: la sensación de una mano buscando otra sin pensarlo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "Compartir una serie parece una tontería hasta que una frase del personaje se convierte en un chiste interno que seguimos usando meses después.",
      "Quiero más de esas pequeñas cosas que solo nosotros entendemos.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: *Normal People* es para verla despacio. Si una escena se siente especialmente íntima, pueden usar una regla coqueta: una prenda menos por cada escena subida de tono, siempre con acuerdo de los dos; si prefieren algo más suave, simplemente un beso por escena. Si la regla de las prendas no les apetece, cambien la apuesta por besos, abrazos o simplemente pausar para mirarse. La gracia es la tensión, no cumplir una cuota.",
    "buenasNoches": "Buenas noches. Que tengamos muchas historias de ficción que terminen convirtiéndose en pequeñas historias nuestras. Y si pudiera cerrar este día contigo, escogería preguntarte qué parte del día quieres guardar. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes. La idea no es terminar rápido la serie, sino quedarse cerca, hablar cuando una escena les mueva algo y respetar siempre el ritmo de ambos.",
    "notaImagen": "[PARA TI] sofá, manta y una pantalla pausada.",
    "notaCancion": "[MÚSICA] Yellow — Coldplay.",
    "escenaInmersiva": "Una cocina con la primera taza sobre la mesa; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 324,
    "categoria": "Beso pendiente",
    "icono": "💋",
    "tono": "hot",
    "color": {
      "principal": "#d1163f",
      "suave": "#f7bccb",
      "oscuro": "#1c0409"
    },
    "buenosDias": "Buenos días. Hoy solo quiero dejar una provocación pequeña: tengo un beso pendiente contigo y sospecho que no va a ser precisamente rápido. Hay algo peligrosamente bonito en saber que una persona te atrae y, al mismo tiempo, te da paz. Tú tienes esa combinación que me hace querer acercarme y quedarme.",
    "poema": [
      "Hay besos que son saludo y hay otros que hacen que uno olvide por unos segundos qué iba a decir.",
      "El mío contigo tiene una tendencia peligrosa a pertenecer a la segunda categoría.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Mensaje sugerente: cuando nos veamos, no me reclames si me quedo un segundo de más cerca de ti. Ya estás avisada. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "Buenas noches. Me voy a dormir con ese beso pendiente rondándome la cabeza. No sé cuándo nos veremos, pero ya sé exactamente dónde quiero que empiece. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] labios y luz cálida, sin contenido explícito.",
    "notaCancion": "[MÚSICA] Bellacoso — Residente & Bad Bunny.",
    "escenaInmersiva": "Una mesa con dos vasos y algo pendiente de conversar; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 325,
    "categoria": "Receta de colores",
    "icono": "🥗",
    "tono": "amor",
    "color": {
      "principal": "#7aa85c",
      "suave": "#dcebcf",
      "oscuro": "#14200e"
    },
    "buenosDias": "Buenos días. Hoy la cocina se convierte en una paleta. Quiero que armemos una ensalada o bowl donde cada uno elija ingredientes por un color distinto. Si hoy estuviéramos juntos, me gustaría que este día empezara en un día de semana que pide una pausa: el calor queda después de un abrazo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "Me gusta cuando una comida deja de ser solamente comida y se convierte en una actividad compartida.",
      "Dos personas eligiendo cosas diferentes y descubriendo que juntas hacen algo más bonito.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "Idea: bowl de frutas o ensalada multicolor. Cada uno elige tres ingredientes sin decirle al otro cuáles son. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el calor queda después de un abrazo.",
    "buenasNoches": "Buenas noches. Hoy terminamos comiendo algo que ninguno habría preparado exactamente igual por separado. Esa mezcla también me gusta para nosotros. Y si pudiera cerrar este día contigo, escogería pedirte que me cuentes una historia que nunca me hayas contado. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "notaImagen": "[PARA TI] bowl colorido preparado entre dos.",
    "notaCancion": "[MÚSICA] Volví a Nacer — Carlos Vives.",
    "escenaInmersiva": "Un día de semana que pide una pausa; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 326,
    "categoria": "Lo que quiero aprender contigo",
    "icono": "🧩",
    "tono": "filosofica",
    "color": {
      "principal": "#4a1830",
      "suave": "#d9a7bd",
      "oscuro": "#120206"
    },
    "buenosDias": "Buenos días. Hoy quiero hacer una lista que no tenga destinos ni compras ni cosas enormes: quiero saber qué te gustaría aprender conmigo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa llena de papelitos y recuerdos: la luz tibia que se queda unos segundos sobre la pared. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque no quiero quererte solamente en los momentos fáciles.",
    "poema": [
      "Bailar mal, cocinar algo nuevo, aprender una canción, hacer cerámica, hablar otro idioma, armar un mueble sin discutir demasiado.",
      "No importa qué sea. Me interesa la versión de nosotros que aparece cuando ninguno sabe muy bien lo que está haciendo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "Cada uno escribe cinco cosas que quisiera aprender juntos. Elijan una y pónganle fecha. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la luz tibia que se queda unos segundos sobre la pared.",
    "buenasNoches": "Buenas noches. Ojalá nos queden muchísimas cosas por aprender, porque significaría que todavía tenemos muchas primeras veces compartidas. Y si pudiera cerrar este día contigo, escogería dejarte una nota donde menos la esperes. Me gusta pensar que porque no quiero quererte solamente en los momentos fáciles.",
    "notaImagen": "[PARA TI] dos personas aprendiendo una manualidad.",
    "notaCancion": "[MÚSICA] Experience — Ludovico Einaudi.",
    "escenaInmersiva": "Una mesa llena de papelitos y recuerdos; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 327,
    "categoria": "Domingo de manta",
    "icono": "🧸",
    "tono": "amor",
    "color": {
      "principal": "#ff9ecb",
      "suave": "#ffe6f2",
      "oscuro": "#33091c"
    },
    "buenosDias": "Buenos días. Hoy no hace falta hacer nada impresionante. Quiero una manta, algo caliente para tomar, una película que podamos pausar para hablar y la posibilidad de quedarnos quietos sin sentir culpa. Si hoy estuviéramos juntos, me gustaría que este día empezara en un balcón donde el cielo cambia de color: el cambio de color del cielo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "El descanso compartido también es una forma de intimidad.",
      "Hay personas con las que uno necesita entretenerse y personas con las que también sabe simplemente estar. Tú eres de las segundas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: domingo de manta. Bebida caliente, snacks y una película elegida al azar entre tres. Regla coqueta opcional: cada beso de la película se replica con uno de ustedes; si aparece una escena de tensión, pausa de diez segundos para un beso largo.",
    "buenasNoches": "Buenas noches. Qué suerte encontrar a alguien con quien el silencio no se siente como vacío. Y si pudiera cerrar este día contigo, escogería hacerte un café y dejarlo cerca de ti sin decir demasiado. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia. Y cuando termine, no se levanten enseguida. Cinco minutos de arrunchis sin hablar pueden ser el mejor final.",
    "notaImagen": "[PARA TI] manta, dos tazas y una película pausada.",
    "notaCancion": "[MÚSICA] At Last — Etta James.",
    "escenaInmersiva": "Un balcón donde el cielo cambia de color; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 328,
    "categoria": "Poema a medias",
    "icono": "🖋️",
    "tono": "filosofica",
    "color": {
      "principal": "#6b2142",
      "suave": "#e3b8c9",
      "oscuro": "#180509"
    },
    "buenosDias": "Buenos días. Hoy quiero escribir un poema contigo. Yo pongo la primera línea, tú la segunda, yo la tercera, y seguimos hasta que salga algo que ninguno habría escrito solo. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cuarto con música bajita: el aire fresco entrando por la ventana. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "No quiero controlar el resultado; quiero ver qué pasa cuando una emoción pasa de una persona a otra y cambia un poco en el camino.",
      "Quizá terminemos con algo hermoso. Quizá terminemos riéndonos. Las dos opciones me gustan.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "Empiecen con: 'Hoy te pensé antes de que saliera el sol…' y alternen una línea cada uno. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el aire fresco entrando por la ventana.",
    "buenasNoches": "Buenas noches. Hoy no te escribí un poema terminado; te propuse construir uno conmigo. Me gusta más así. Y si pudiera cerrar este día contigo, escogería quedarme cerca mientras haces algo que te gusta. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[PARA TI] dos bolígrafos y una hoja con versos alternados.",
    "notaCancion": "[MÚSICA] Comptine d'un autre été — Yann Tiersen.",
    "escenaInmersiva": "Un cuarto con música bajita; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 329,
    "categoria": "Perfume",
    "icono": "🌹",
    "tono": "hot",
    "color": {
      "principal": "#a10e35",
      "suave": "#f0aabd",
      "oscuro": "#140208"
    },
    "buenosDias": "Buenos días. Hay cosas que la memoria no guarda con palabras. Un perfume, por ejemplo, puede devolver a alguien a una habitación completa en menos de un segundo. El tuyo tiene ese poder conmigo. Hoy me gustaría robarte unos minutos sin planes ni teléfonos: solo tú, yo y esa clase de silencio que se vuelve demasiado íntimo cuando uno se gusta de verdad.",
    "poema": [
      "Quizá por eso me gusta tanto estar cerca de ti: porque no solo te veo; también te reconozco por detalles que nadie más podría explicar.",
      "Hay una clase de deseo que empieza mucho antes del contacto, en la anticipación de saber que esa persona está cerca.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "Mensaje sugerente: algún día ponte tu perfume favorito y acércate sin decirme nada. Quiero ver cuánto tardo en sonreír. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cansancio bonito después de un día compartido.",
    "buenasNoches": "Buenas noches. Hoy me quedo pensando en esa mezcla de memoria y deseo que puede provocar un simple aroma. Tú tienes demasiados detalles capaces de distraerme. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] frasco de perfume y luz cálida; elegante, no explícito.",
    "notaCancion": "[MÚSICA] Often — The Weeknd.",
    "escenaInmersiva": "Un pasillo silencioso antes de dormir; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 330,
    "categoria": "Doce deseos",
    "icono": "✨",
    "tono": "amor",
    "color": {
      "principal": "#d4af37",
      "suave": "#f7e8b0",
      "oscuro": "#241c04"
    },
    "buenosDias": "Buenos días. Hoy cada uno tiene que pedir doce deseos para la relación. No valen objetos. Solo experiencias, emociones, aprendizajes o momentos. Si hoy estuviéramos juntos, me gustaría que este día empezara en una ventana abierta al aire fresco: la música escapándose de un parlante cercano. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "Quiero deseos que puedan convertirse en recuerdos: una madrugada hablando, un viaje improvisado, una comida que aprendimos juntos, una canción que termine siendo nuestra.",
      "El amor también necesita imaginación para seguir creciendo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "Escriban seis deseos cada uno y guárdenlos. Revisen la lista dentro de seis meses. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la música escapándose de un parlante cercano.",
    "buenasNoches": "Buenas noches. Hoy no prometimos que todo pasará exactamente como lo imaginamos. Solo nos permitimos imaginarlo juntos, y eso ya me parece precioso. Y si pudiera cerrar este día contigo, escogería dejar que el silencio haga su parte. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[PARA TI] doce papelitos con deseos en un frasco.",
    "notaCancion": "[MÚSICA] A Thousand Years — Christina Perri.",
    "escenaInmersiva": "Una ventana abierta al aire fresco; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 331,
    "categoria": "Salsa lenta",
    "icono": "💃",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. Hoy no quiero una salsa para bailar rápido. Quiero una canción lenta, un espacio pequeño y la excusa de aprender a movernos juntos aunque ninguno sea exactamente un profesional. Si hoy estuviéramos juntos, me gustaría que este día empezara en un trayecto cualquiera que de pronto se vuelve especial: la tranquilidad de saber que alguien está ahí. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "poema": [
      "Bailar cerca tiene una conversación que no usa palabras: un paso, una pausa, una mano que guía y otra que decide quedarse.",
      "Me gusta imaginar que algún día podremos reconocernos también por ese ritmo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "Pongan una salsa lenta y bailen una canción completa sin corregirse. Solo sigan el ritmo que encuentren. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí.",
    "buenasNoches": "Buenas noches. Si hoy aprendimos un paso nuevo o simplemente nos pisamos los pies, igual cuenta. La parte importante era estar cerca. Y si pudiera cerrar este día contigo, escogería elegir una película solo por la promesa de verla juntos. Me gusta pensar que porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "notaImagen": "[PARA TI] pareja bailando salsa en una sala pequeña.",
    "notaCancion": "[MÚSICA] Cali Pachanguero — Grupo Niche, o una salsa romántica de Frankie Ruiz/Jerry Rivera.",
    "escenaInmersiva": "Un trayecto cualquiera que de pronto se vuelve especial; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 332,
    "categoria": "Una pregunta incómoda",
    "icono": "🖤",
    "tono": "filosofica",
    "color": {
      "principal": "#3a1f5c",
      "suave": "#c9b8e6",
      "oscuro": "#0c0716"
    },
    "buenosDias": "Buenos días. Hoy toca una pregunta incómoda pero útil: ¿qué cosa pequeña podría hacer yo para hacerte sentir más querida cuando estés teniendo un día malo? Si hoy estuviéramos juntos, me gustaría que este día empezara en una cafetería imaginaria donde solo estamos tú y yo: el silencio cómodo que no necesita explicación. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Amar a alguien también es aprender su manual de emergencia, esas pequeñas cosas que ayudan cuando no hay soluciones grandes.",
      "Quiero conocer el tuyo, no para arreglarte, sino para acompañarte mejor.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "Cada uno completa: 'Cuando estoy mal, no necesito que me arregles; me ayuda que…' Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el silencio cómodo que no necesita explicación.",
    "buenasNoches": "Buenas noches. Gracias por enseñarme un poquito más sobre cómo cuidarte. Quiero aprender a quererte también en los días difíciles. Y si pudiera cerrar este día contigo, escogería recordar una conversación que todavía me hace sonreír. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[PARA TI] dos notas escritas con formas de acompañarse.",
    "notaCancion": "[MÚSICA] Good News — Mac Miller.",
    "escenaInmersiva": "Una cafetería imaginaria donde solo estamos tú y yo; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 333,
    "categoria": "Noche de postres",
    "icono": "🍫",
    "tono": "amor",
    "color": {
      "principal": "#a9713f",
      "suave": "#ecd2ae",
      "oscuro": "#20130a"
    },
    "buenosDias": "Buenos días. Hoy la cena puede ser cualquier cosa; el verdadero protagonista será el postre. Quiero una noche dedicada a probar cosas dulces y decidir cuál merece repetirse. Si hoy estuviéramos juntos, me gustaría que este día empezara en un lugar cualquiera que se convierte en nuestro por compartirlo: la respiración tranquila cuando por fin baja el ruido del día. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "Hay placeres que no necesitan una explicación profunda. A veces una fresa con chocolate y una risa son exactamente lo que hacía falta.",
      "No todo tiene que enseñarnos algo; algunas noches solo tienen que hacernos felices.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: noche de postres. Frutas, chocolate derretido, galletas y dos toppings sorpresa. Cada uno prepara el bocado favorito del otro y luego ven algo corto juntos.",
    "buenasNoches": "Buenas noches. Hoy la vida se sintió pequeña en el mejor sentido: algo dulce, una conversación y tú. A veces eso es suficiente. Y si pudiera cerrar este día contigo, escogería guardar una frase tuya para recordarla después. Me gusta pensar que porque elegirte también es aprender tus detalles. Una noche así debería terminar con chocolate, risas y una manta compartida, no con la cocina perfectamente ordenada.",
    "notaImagen": "[PARA TI] fresas con chocolate y dos cucharitas.",
    "notaCancion": "[MÚSICA] Favorito — Camilo.",
    "escenaInmersiva": "Un lugar cualquiera que se convierte en nuestro por compartirlo; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 334,
    "categoria": "La canción que te dedicaría",
    "icono": "🎶",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy quiero que elijas una canción que no necesariamente sea romántica, pero que por alguna razón te haga pensar en mí. Yo haré lo mismo contigo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una tarde que huele a lluvia: el ruido lejano de la ciudad. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "A veces una canción se convierte en recuerdo sin pedir permiso.",
      "No porque describa exactamente una historia, sino porque estaba sonando cuando una persona nos importaba demasiado.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "Compartan una canción y expliquen el recuerdo que la acompaña sin copiar ninguna letra. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el ruido lejano de la ciudad.",
    "buenasNoches": "Buenas noches. Hoy una canción tuvo tu nombre sin necesitar decirlo. Me gusta cuando la música hace ese trabajo silencioso. Y si pudiera cerrar este día contigo, escogería cocinar algo que salga imperfecto pero nuestro. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[PARA TI] dos audífonos compartidos.",
    "notaCancion": "[MÚSICA] elección libre de ambos; el objetivo es construir una nueva asociación.",
    "escenaInmersiva": "Una tarde que huele a lluvia; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 335,
    "categoria": "Domingo de mercado",
    "icono": "🛒",
    "tono": "amor",
    "color": {
      "principal": "#7aa85c",
      "suave": "#dcebcf",
      "oscuro": "#14200e"
    },
    "buenosDias": "Buenos días. Hoy el plan es elegir juntos ingredientes sin llevar una receta definida. Solo tres colores, dos frutas, algo crujiente y algo que ninguno haya probado antes. Si hoy estuviéramos juntos, me gustaría que este día empezara en una noche con la ciudad respirando detrás de la ventana: ese segundo de silencio antes de decir algo que importa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "Me gustan los planes que empiezan con una bolsa vacía y terminan en una mesa llena.",
      "Elegir juntos también es una forma de construir: pequeñas decisiones que después se convierten en una experiencia compartida.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: vayan al mercado solo por ingredientes para una merienda inventada. Al volver, cocínenla juntos, pónganle un nombre absurdo y sírvanla como si fuera un restaurante de cinco estrellas.",
    "buenasNoches": "Buenas noches. Hoy cocinamos sin saber exactamente qué estábamos haciendo y terminamos con algo que solo nosotros sabremos reproducir. Y si pudiera cerrar este día contigo, escogería hacerte reír con una tontería. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión. Después del 'restaurante', cierren la noche en casa: película, sofá y la satisfacción de haber creado algo que solo existe porque lo hicimos juntos.",
    "notaImagen": "[PARA TI] frutas, panes y verduras sobre una mesa.",
    "notaCancion": "[MÚSICA] Volví a Nacer — Carlos Vives.",
    "escenaInmersiva": "Una noche con la ciudad respirando detrás de la ventana; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 336,
    "categoria": "La foto que no borraríamos",
    "icono": "📸",
    "tono": "filosofica",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hoy quiero elegir una foto que no borraríamos aunque cambiáramos de teléfono diez veces. No tiene que ser la más bonita; tiene que ser la que guarda algo que no queremos perder. Si hoy estuviéramos juntos, me gustaría que este día empezara en un automóvil detenido mientras termina una canción: la sombra de las hojas moviéndose sobre el suelo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "Las mejores fotos no siempre son las que salen perfectas. A veces alguien está desenfocado, el cielo está gris o la cámara tiembla.",
      "Pero si al verla podemos volver a ese momento, entonces hizo su trabajo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "Elijan una foto cada uno y cuenten qué estaba pasando cinco minutos antes de que fuera tomada. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sombra de las hojas moviéndose sobre el suelo.",
    "buenasNoches": "Buenas noches. Qué raro y bonito que una imagen tan pequeña pueda abrir una puerta completa hacia un día que ya pasó. Y si pudiera cerrar este día contigo, escogería mirar el cielo y buscarle un nombre a la forma de una nube. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "notaImagen": "[PARA TI] una foto espontánea, no necesariamente perfecta.",
    "notaCancion": "[MÚSICA] Te Mando Flores — Fonseca.",
    "escenaInmersiva": "Un automóvil detenido mientras termina una canción; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 337,
    "categoria": "Noches de miradas",
    "icono": "👀",
    "tono": "hot",
    "color": {
      "principal": "#d1163f",
      "suave": "#f7bccb",
      "oscuro": "#1c0409"
    },
    "buenosDias": "Buenos días. Hoy quiero hablar de algo que me parece más íntimo de lo que parece: mirarte cuando tú sabes que te estoy mirando y ninguno de los dos rompe el momento. Hoy me dieron ganas de escribirte antes de que el día terminara de despertarse. No solo porque te extraño: porque hay una parte de mí que disfruta imaginarte cerca, con esa mezcla tuya de calma y peligro que me desarma.",
    "poema": [
      "Hay miradas que preguntan y miradas que responden.",
      "La tuya a veces me deja exactamente en ese punto donde una conversación podría seguir, pero ninguno tiene muchas ganas de usar palabras.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "Mensaje sugerente: cuando estemos juntos, quiero una de esas pausas largas en las que solo nos miramos y sonreímos antes de acercarnos. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa.",
    "buenasNoches": "Buenas noches. Me voy a dormir pensando en esa mirada tuya que dura un segundo más de lo necesario. Sí, ese segundo me gusta demasiado. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] dos personas mirándose con luz tenue; sugerente, sin desnudez.",
    "notaCancion": "[MÚSICA] Wicked Games — The Weeknd.",
    "escenaInmersiva": "Una calle que todavía no se llena de gente; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 338,
    "categoria": "El libro de nosotros",
    "icono": "📚",
    "tono": "amor",
    "color": {
      "principal": "#6b2142",
      "suave": "#e3b8c9",
      "oscuro": "#180509"
    },
    "buenosDias": "Buenos días. Hoy quiero que inventemos títulos para capítulos de nuestra historia. No hace falta escribirlos todavía; solo ponerles nombre a las etapas que ya vivimos. Si hoy estuviéramos juntos, me gustaría que este día empezara en un parque casi vacío: la risa que llega antes que la respuesta. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "Una relación también puede leerse hacia atrás: el capítulo que parecía pequeño termina siendo el que explica todo lo que vino después.",
      "Quiero que tengamos suficientes capítulos para olvidar cuál fue el primero que nos hizo pensar que esto iba en serio.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Escriban diez títulos de capítulos. Pueden ser graciosos, dramáticos, cursis o completamente absurdos. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la risa que llega antes que la respuesta.",
    "buenasNoches": "Buenas noches. Hoy no escribimos la historia completa. Solo pusimos algunos títulos y dejamos páginas en blanco. Me gusta que todavía quede tanto por contar. Y si pudiera cerrar este día contigo, escogería preguntarte qué fue lo primero que pensaste al despertar. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[PARA TI] cuaderno con títulos de capítulos escritos a mano.",
    "notaCancion": "[MÚSICA] All of Me — John Legend.",
    "escenaInmersiva": "Un parque casi vacío; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 339,
    "categoria": "Cocinar a ciegas",
    "icono": "🙈",
    "tono": "amor",
    "color": {
      "principal": "#d1467f",
      "suave": "#ffc9dd",
      "oscuro": "#26060f"
    },
    "buenosDias": "Buenos días. Hoy quiero confiarte una misión absurda: uno de los dos tiene los ojos cerrados y el otro tiene que guiarlo para preparar algo sencillo sin tocar los ingredientes equivocados. Si hoy estuviéramos juntos, me gustaría que este día empezara en una playa que todavía guarda calor en la arena: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo me interesa más la experiencia que la perfección.",
    "poema": [
      "Confiar también puede ser reírse mientras alguien intenta encontrar una cuchara con los ojos cerrados.",
      "La confianza no siempre aparece en momentos solemnes; muchas veces se construye en pequeñas tonterías compartidas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: cocinar a ciegas, pero de forma segura. Mejor armen un sándwich, decoren un postre o preparen una tabla de frutas; nada de cuchillos ni fuego con los ojos vendados. Después, película y manta.",
    "buenasNoches": "Buenas noches. Hoy la confianza tuvo forma de una cocina desordenada y muchas risas. Me gusta esa versión de nosotros. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque contigo me interesa más la experiencia que la perfección. La parte divertida no es que salga perfecto: es reírnos, probarlo juntos y terminar cerca.",
    "notaImagen": "[PARA TI] dos personas decorando un postre, una con los ojos cerrados.",
    "notaCancion": "[MÚSICA] Como Me Encanta — Kevin Kaarl.",
    "escenaInmersiva": "Una playa que todavía guarda calor en la arena; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 340,
    "categoria": "Un día sin plan",
    "icono": "☁️",
    "tono": "filosofica",
    "color": {
      "principal": "#6fb1e0",
      "suave": "#d6ecfb",
      "oscuro": "#071522"
    },
    "buenosDias": "Buenos días. Hoy quiero quitarle la obligación a la cita de ser una cita. Nos levantamos, elegimos algo para comer, salimos si queremos, nos quedamos si queremos y vemos qué pasa. Si hoy estuviéramos juntos, me gustaría que este día empezara en una habitación todavía en penumbra: una manta compartida y dos pies buscando sitio debajo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "poema": [
      "Hay días que se sienten más vivos cuando dejamos de exigirles que sean memorables.",
      "Quizá el recuerdo termine siendo precisamente este: que por unas horas no tuvimos que impresionar a nadie.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "Regla única: no hacer una lista de actividades. Solo decidir la siguiente cosa cuando termine la anterior. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una manta compartida y dos pies buscando sitio debajo. Juego sin plan: durante una hora no se permite decir “no sé”. Si uno no sabe qué hacer, el otro decide. La única regla es que la siguiente actividad tenga que acercarlos un poquito más.",
    "buenasNoches": "Buenas noches. Hoy no cumplimos un itinerario y, sin embargo, el día se sintió completo. Me gusta mucho esa clase de libertad contigo. Y si pudiera cerrar este día contigo, escogería abrazarte antes de intentar resolver cualquier cosa. Me gusta pensar que porque me gusta la vida cuando tiene tu nombre escondido en alguna parte.",
    "notaImagen": "[PARA TI] una ventana abierta y una cama desordenada de domingo.",
    "notaCancion": "[MÚSICA] River Flows in You — Yiruma.",
    "escenaInmersiva": "Una habitación todavía en penumbra; una manta compartida y dos pies buscando sitio debajo. abrazarte antes de intentar resolver cualquier cosa. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 341,
    "categoria": "Tu risa",
    "icono": "😂",
    "tono": "amor",
    "color": {
      "principal": "#f2b705",
      "suave": "#fff0b3",
      "oscuro": "#251c02"
    },
    "buenosDias": "Buenos días. Hoy el tema eres tú riéndote. Esa risa que empieza de una forma y termina completamente distinta porque ya perdiste el control. Si hoy estuviéramos juntos, me gustaría que este día empezara en un sofá con una manta compartida: la lluvia golpeando despacio los vidrios. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque no quiero quererte solamente en los momentos fáciles.",
    "poema": [
      "Hay personas que iluminan una habitación entrando; tú tienes otra manera: haces que la habitación se sienta más viva cuando te ríes.",
      "Y admito que a veces digo cosas solo para conseguir esa risa una vez más.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "Reto: cada uno debe enviar al otro algo que sepa que probablemente le va a sacar una risa hoy. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la lluvia golpeando despacio los vidrios.",
    "buenasNoches": "Buenas noches. Si hoy conseguí escucharte reír aunque fuera una vez, siento que el día tuvo una pequeña victoria. Y si pudiera cerrar este día contigo, escogería escuchar contigo una canción hasta el final. Me gusta pensar que porque no quiero quererte solamente en los momentos fáciles.",
    "notaImagen": "[PARA TI] foto espontánea riéndose.",
    "notaCancion": "[MÚSICA] Vivir Mi Vida — Marc Anthony.",
    "escenaInmersiva": "Un sofá con una manta compartida; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 342,
    "categoria": "Noche de estrellas",
    "icono": "⭐",
    "tono": "filosofica",
    "color": {
      "principal": "#3a1f5c",
      "suave": "#c9b8e6",
      "oscuro": "#0c0716"
    },
    "buenosDias": "Buenos días. Hoy quiero que miremos el cielo aunque sea desde una ventana. No para pedirle nada, sino para recordar que nuestras preocupaciones son pequeñas y que aun así nuestras historias importan. Si hoy estuviéramos juntos, me gustaría que este día empezara en un domingo lento: el roce casual que termina sintiéndose importante. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "Dos personas pueden mirar la misma estrella desde lugares distintos y seguir compartiendo el mismo pensamiento.",
      "A veces la distancia no elimina la cercanía; solo la obliga a encontrar otras formas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "Busquen una constelación y lean juntos un poco sobre ella. Después inventen una constelación que represente algo de ustedes. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante.",
    "buenasNoches": "Buenas noches. Que hoy haya una estrella imaginaria guardando un secreto de los dos. Mañana seguimos. Y si pudiera cerrar este día contigo, escogería bailar contigo aunque no haya espacio. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[PARA TI] cielo estrellado visto desde una ventana.",
    "notaCancion": "[MÚSICA] Yellow — Coldplay.",
    "escenaInmersiva": "Un domingo lento; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 343,
    "categoria": "Bachata en la sala",
    "icono": "🎵",
    "tono": "amor",
    "color": {
      "principal": "#9e8fc9",
      "suave": "#e2d9f7",
      "oscuro": "#160f26"
    },
    "buenosDias": "Buenos días. Hoy quiero convertir la sala en una pista pequeña. Una bachata, una canción completa y la misión de no separarnos demasiado mientras dure. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cielo nublado que no termina de decidirse: la sensación de una mano buscando otra sin pensarlo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "La música hace que el cuerpo diga cosas que la cabeza todavía no sabe explicar.",
      "Quizá por eso bailar contigo siempre me parece un poco más íntimo que simplemente escuchar una canción.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "Pongan una bachata lenta y aprendan juntos un paso sencillo. No corrijan demasiado; déjense llevar. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sensación de una mano buscando otra sin pensarlo.",
    "buenasNoches": "Buenas noches. Si hoy aprendimos a seguir el mismo ritmo, aunque haya sido torpemente, ya hicimos algo bonito. Y si pudiera cerrar este día contigo, escogería preguntarte qué parte del día quieres guardar. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[PARA TI] pareja bailando bachata en casa.",
    "notaCancion": "[MÚSICA] Darte un Beso — Prince Royce.",
    "escenaInmersiva": "Un cielo nublado que no termina de decidirse; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 344,
    "categoria": "La pregunta del futuro",
    "icono": "🔭",
    "tono": "amor",
    "color": {
      "principal": "#3f5fd1",
      "suave": "#c9d3fa",
      "oscuro": "#0a1030"
    },
    "buenosDias": "Buenos días. Si dentro de diez años alguien nos preguntara cuál fue una de las cosas más bonitas que hicimos juntos, ¿qué te gustaría poder contarle? Si hoy estuviéramos juntos, me gustaría que este día empezara en una cama desordenada después de una noche larga: una canción que parece llegar exactamente en el momento correcto. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "No quiero imaginar solo casas, viajes o fotografías.",
      "Quiero imaginar una colección de momentos que nos hagan decir: tuvimos una vida llena de pequeñas aventuras.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Cada uno inventa tres recuerdos futuros que le gustaría tener. No se pueden repetir. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "Buenas noches. Hoy hablamos de recuerdos que todavía no existen. Me gusta que podamos imaginarlos sin saber exactamente cómo llegarán. Y si pudiera cerrar este día contigo, escogería mirarte unos segundos más de lo necesario. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "notaImagen": "[PARA TI] dos personas mirando un horizonte.",
    "notaCancion": "[MÚSICA] A Thousand Years — Christina Perri.",
    "escenaInmersiva": "Una cama desordenada después de una noche larga; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 345,
    "categoria": "La cena del otro",
    "icono": "🍲",
    "tono": "amor",
    "color": {
      "principal": "#a9713f",
      "suave": "#ecd2ae",
      "oscuro": "#20130a"
    },
    "buenosDias": "Buenos días. Hoy cada uno cocina para el otro, pero hay una regla: quien recibe no puede criticar nada hasta haber probado el último bocado. Si hoy estuviéramos juntos, me gustaría que este día empezara en una esquina iluminada por el sol de la tarde: el calor queda después de un abrazo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "Cuidar a alguien también puede verse como preguntar qué le apetece y recordar cómo le gusta.",
      "No hace falta una receta complicada para decir 'pensé en ti mientras preparaba esto'.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: la cena del otro. Elige una receta que sientas que representa a tu pareja: pasta, tacos, arroz, tortilla o lo que se te ocurra. Quien recibe no puede criticar hasta el último bocado; después toca abrazo y postre.",
    "buenasNoches": "Buenas noches. Hoy alguien cocinó pensando en mí y yo cociné pensando en alguien. Me gusta esa simetría sencilla del cariño. Y si pudiera cerrar este día contigo, escogería pedirte que me cuentes una historia que nunca me hayas contado. Me gusta pensar que porque todavía me interesa descubrirte. Quiero que esta cena se recuerde por el cariño con que la hicimos, no por si quedó perfecta.",
    "notaImagen": "[PARA TI] dos platos diferentes preparados por cada miembro de la pareja.",
    "notaCancion": "[MÚSICA] Volvamos a Ser Novios — Silvestre Dangond.",
    "escenaInmersiva": "Una esquina iluminada por el sol de la tarde; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 346,
    "categoria": "Ven aquí",
    "icono": "🔥",
    "tono": "hot",
    "color": {
      "principal": "#d1163f",
      "suave": "#f7bccb",
      "oscuro": "#1c0409"
    },
    "buenosDias": "Buenos días. Hoy no voy a esconderlo detrás de una metáfora: me encantas. Me encanta tu forma de moverte, la manera en que te ves cuando estás tranquila y esa sensación de querer acercarme cuando te tengo enfrente. Si estuvieras aquí, probablemente encontraría una excusa para quedarme un poco más cerca de ti. Hay personas que uno abraza por costumbre; contigo siempre aparece la tentación de no soltarte todavía.",
    "poema": [
      "Hay deseos que no necesitan convertirse en una escena para sentirse intensos.",
      "A veces basta pensar en tu cuerpo cerca del mío, en tu mirada y en ese segundo antes de tocarnos, para que el resto del día cambie de temperatura.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejarte una nota donde menos la esperes; ahí también está mi manera de quererte."
    ],
    "detalle": "Mensaje sugerente: si hoy me dices 'ven', probablemente no necesites repetirlo dos veces. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la luz tibia que se queda unos segundos sobre la pared.",
    "buenasNoches": "Buenas noches. Me voy a dormir con ganas de tenerte cerca, de esas ganas que no hacen ruido pero se quedan dando vueltas hasta que cierro los ojos. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] silueta de pareja muy cercana, luz tenue, sin desnudez.",
    "notaCancion": "[MÚSICA] Propuesta Indecente — Romeo Santos.",
    "escenaInmersiva": "Una cocina llena de pequeñas cosas por ordenar; la luz tibia que se queda unos segundos sobre la pared. dejarte una nota donde menos la esperes. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 347,
    "categoria": "Caja de recuerdos",
    "icono": "📦",
    "tono": "filosofica",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hoy quiero empezar una caja de recuerdos: una entrada, una nota, una fotografía, una pulsera, una servilleta con una fecha, cualquier cosa pequeña que tenga una historia. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cocina con la primera taza sobre la mesa: el cambio de color del cielo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "Las cosas que guardamos rara vez son valiosas por sí mismas.",
      "Lo que importa es que un día alguien las sostuvo y pensó: esto no quiero olvidarlo.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte un café y dejarlo cerca de ti sin decir demasiado; ahí también está mi manera de quererte."
    ],
    "detalle": "Cada uno elige un objeto pequeño que represente un momento de ustedes y escribe detrás por qué lo guardaría. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cambio de color del cielo.",
    "buenasNoches": "Buenas noches. Hoy no acumulamos cosas; acumulamos significado. Y eso me parece mucho más bonito. Y si pudiera cerrar este día contigo, escogería hacerte un café y dejarlo cerca de ti sin decir demasiado. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[PARA TI] caja de madera con pequeños recuerdos.",
    "notaCancion": "[MÚSICA] River Flows in You — Yiruma.",
    "escenaInmersiva": "Una cocina con la primera taza sobre la mesa; el cambio de color del cielo. hacerte un café y dejarlo cerca de ti sin decir demasiado. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 348,
    "categoria": "La receta secreta",
    "icono": "🍓",
    "tono": "amor",
    "color": {
      "principal": "#d1467f",
      "suave": "#ffc9dd",
      "oscuro": "#26060f"
    },
    "buenosDias": "Buenos días. Hoy quiero inventar una receta que tenga nombre propio. Puede ser un postre, una bebida o una combinación completamente absurda. Lo importante es que solo nosotros sepamos cómo se prepara. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa con dos vasos y algo pendiente de conversar: el aire fresco entrando por la ventana. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "Las parejas terminan creando pequeños idiomas privados: palabras, gestos, bromas y sabores que no significan lo mismo para nadie más.",
      "Me gusta la idea de cocinar uno de esos idiomas juntos.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: quedarme cerca mientras haces algo que te gusta; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: inventen un postre de tres ingredientes y pónganle un nombre que solo tenga sentido para ustedes. Luego cómanlo viendo una película que ninguno haya visto.",
    "buenasNoches": "Buenas noches. Hoy creamos otra pequeña cosa que solo nosotros entendemos. Me encanta esa colección secreta que estamos construyendo. Y si pudiera cerrar este día contigo, escogería quedarme cerca mientras haces algo que te gusta. Me gusta pensar que porque elegirte también es aprender tus detalles. Si el postre sale raro, mejor: esas son las cosas que después terminan convertidas en recuerdos.",
    "notaImagen": "[PARA TI] postre casero con una nota que diga el nombre inventado.",
    "notaCancion": "[MÚSICA] Favorito — Camilo.",
    "escenaInmersiva": "Una mesa con dos vasos y algo pendiente de conversar; el aire fresco entrando por la ventana. quedarme cerca mientras haces algo que te gusta. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 349,
    "categoria": "Una tarde de museo",
    "icono": "🖼️",
    "tono": "filosofica",
    "color": {
      "principal": "#3f8fd1",
      "suave": "#c9e2fa",
      "oscuro": "#081b2b"
    },
    "buenosDias": "Buenos días. Hoy quiero una cita en la que no tengamos que hablar todo el tiempo: caminar entre obras, detenernos frente a una que nos guste y preguntarnos qué ve el otro que nosotros no vemos. Si hoy estuviéramos juntos, me gustaría que este día empezara en un día de semana que pide una pausa: el cansancio bonito después de un día compartido. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque la intimidad también es sentirse tranquilo delante de alguien.",
    "poema": [
      "Dos personas pueden mirar el mismo cuadro y vivir historias completamente distintas dentro de él.",
      "Quizá amar también tenga algo de eso: aprender a mirar desde el mundo del otro sin dejar de tener el propio.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: inventarnos un plan sencillo para cuando podamos vernos; ahí también está mi manera de quererte."
    ],
    "detalle": "Si no pueden ir a un museo, hagan una visita virtual y elijan cinco obras. Cada uno escoge una favorita sin revelar cuál hasta el final. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el cansancio bonito después de un día compartido.",
    "buenasNoches": "Buenas noches. Hoy no necesitábamos estar de acuerdo en lo que era bonito. Me gustó descubrir qué cosas te detienen cuando miras el mundo. Y si pudiera cerrar este día contigo, escogería inventarnos un plan sencillo para cuando podamos vernos. Me gusta pensar que porque la intimidad también es sentirse tranquilo delante de alguien.",
    "notaImagen": "[PARA TI] pareja frente a una obra de arte.",
    "notaCancion": "[MÚSICA] Nuvole Bianche — Ludovico Einaudi.",
    "escenaInmersiva": "Un día de semana que pide una pausa; el cansancio bonito después de un día compartido. inventarnos un plan sencillo para cuando podamos vernos. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 350,
    "categoria": "Cincuenta preguntas",
    "icono": "💬",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy quiero cincuenta preguntas pequeñas. No para hacer un interrogatorio, sino para descubrir detalles que normalmente se pierden entre las conversaciones de todos los días. Si hoy estuviéramos juntos, me gustaría que este día empezara en una mesa llena de papelitos y recuerdos: la música escapándose de un parlante cercano. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "¿Qué olor te recuerda a casa? ¿Qué canción te da vergüenza admitir que te encanta? ¿Qué cosa te gustaría hacer una vez antes de cumplir cierta edad?",
      "Las respuestas no tienen que ser profundas; a veces una tontería revela una parte preciosa de alguien.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: dejar que el silencio haga su parte; ahí también está mi manera de quererte."
    ],
    "detalle": "Pueden usar preguntas propias o una lista de preguntas para parejas y responder cinco por día hasta terminar las cincuenta. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la música escapándose de un parlante cercano.",
    "buenasNoches": "Buenas noches. Después de cincuenta preguntas quizá conozca algunas respuestas nuevas, pero seguro me quedarán otras cincuenta ganas de seguir preguntándote cosas. Y si pudiera cerrar este día contigo, escogería dejar que el silencio haga su parte. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión.",
    "notaImagen": "[PARA TI] tarjetas de preguntas sobre una mesa.",
    "notaCancion": "[MÚSICA] playlist variada de ambos.",
    "escenaInmersiva": "Una mesa llena de papelitos y recuerdos; la música escapándose de un parlante cercano. dejar que el silencio haga su parte. Porque el deseo de verte no siempre necesita una gran ocasión."
  },
  {
    "dia": 351,
    "categoria": "Una flor por una razón",
    "icono": "🌷",
    "tono": "amor",
    "color": {
      "principal": "#d94fb0",
      "suave": "#ffd6f0",
      "oscuro": "#26071c"
    },
    "buenosDias": "Buenos días. Hoy quiero elegir una flor que represente algo de ti, pero no por su significado típico. Quiero inventarle uno propio basándome en una característica tuya. Si hoy estuviéramos juntos, me gustaría que este día empezara en un balcón donde el cielo cambia de color: la tranquilidad de saber que alguien está ahí. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "poema": [
      "Una flor puede significar amor, paciencia o deseo según un libro; pero nosotros podemos decidir que una flor significa 'la forma en que te ríes cuando intentas no hacerlo'.",
      "Los significados más bonitos son los que construyen dos personas.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: elegir una película solo por la promesa de verla juntos; ahí también está mi manera de quererte."
    ],
    "detalle": "Elijan una flor cada uno y creen un significado privado para ella. Guárdenlo como una pequeña contraseña emocional. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de saber que alguien está ahí.",
    "buenasNoches": "Buenas noches. Desde hoy esa flor tiene otro significado para mí. Ya no será solamente una flor; será una parte de nuestra historia. Y si pudiera cerrar este día contigo, escogería elegir una película solo por la promesa de verla juntos. Me gusta pensar que porque contigo hasta lo cotidiano puede tener una segunda lectura.",
    "notaImagen": "[PARA TI] dos flores diferentes con pequeñas notas.",
    "notaCancion": "[MÚSICA] Te Mando Flores — Fonseca.",
    "escenaInmersiva": "Un balcón donde el cielo cambia de color; la tranquilidad de saber que alguien está ahí. elegir una película solo por la promesa de verla juntos. Porque contigo hasta lo cotidiano puede tener una segunda lectura."
  },
  {
    "dia": 352,
    "categoria": "Maratón de cortos",
    "icono": "🎞️",
    "tono": "amor",
    "color": {
      "principal": "#c98f9e",
      "suave": "#f7d9e2",
      "oscuro": "#26101a"
    },
    "buenosDias": "Buenos días. Hoy no necesitamos una película de dos horas. Quiero tres cortometrajes de géneros distintos y una conversación después de cada uno. Si hoy estuviéramos juntos, me gustaría que este día empezara en un cuarto con música bajita: el silencio cómodo que no necesita explicación. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay formas de cariño que no hacen ruido y aun así se quedan.",
    "poema": [
      "Una historia de diez minutos puede quedarse contigo más que una de dos horas si encuentra exactamente el lugar donde estabas sensible.",
      "Quiero saber qué historias te encuentran a ti.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: recordar una conversación que todavía me hace sonreír; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: maratón de tres cortos —uno romántico, uno divertido y uno extraño— con snacks hechos por ustedes. Después de cada uno, un beso si les gustó; dos si les dio vergüenza admitir cuánto les gustó.",
    "buenasNoches": "Buenas noches. Hoy vimos historias pequeñas y terminamos hablando de nosotros. Ese es exactamente el tipo de plan que me gusta. Y si pudiera cerrar este día contigo, escogería recordar una conversación que todavía me hace sonreír. Me gusta pensar que porque hay formas de cariño que no hacen ruido y aun así se quedan. La última película puede quedar a medias. El plan verdadero es terminar la noche juntos, hablando y riéndonos de las escenas.",
    "notaImagen": "[PARA TI] proyector casero con tres títulos escritos en papel.",
    "notaCancion": "[MÚSICA] Something — The Beatles.",
    "escenaInmersiva": "Un cuarto con música bajita; el silencio cómodo que no necesita explicación. recordar una conversación que todavía me hace sonreír. Porque hay formas de cariño que no hacen ruido y aun así se quedan."
  },
  {
    "dia": 353,
    "categoria": "La llamada larga",
    "icono": "📞",
    "tono": "amor",
    "color": {
      "principal": "#6fb1e0",
      "suave": "#d6ecfb",
      "oscuro": "#071522"
    },
    "buenosDias": "Buenos días. Hoy no hace falta tener tema. Quiero una llamada que empiece con '¿qué haces?' y termine mucho después, cuando alguno de los dos se dé cuenta de que ya debería estar durmiendo. Si hoy estuviéramos juntos, me gustaría que este día empezara en un pasillo silencioso antes de dormir: la respiración tranquila cuando por fin baja el ruido del día. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el amor también vive en las cosas que casi nadie considera importantes.",
    "poema": [
      "Hay conversaciones que no tienen un punto importante y aun así son importantes.",
      "Porque no estamos buscando información; estamos buscando compañía.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: guardar una frase tuya para recordarla después; ahí también está mi manera de quererte."
    ],
    "detalle": "Regla: no preparar preguntas. Solo llamar y dejar que la conversación se mueva sola. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la respiración tranquila cuando por fin baja el ruido del día.",
    "buenasNoches": "Buenas noches. Me gustan esas llamadas en las que al final ninguno recuerda cómo empezó la conversación. Significa que nos quedamos por nosotros, no por el tema. Y si pudiera cerrar este día contigo, escogería guardar una frase tuya para recordarla después. Me gusta pensar que porque el amor también vive en las cosas que casi nadie considera importantes.",
    "notaImagen": "[PARA TI] pantalla de llamada con dos tazas cerca.",
    "notaCancion": "[MÚSICA] pa quererte — Rels B.",
    "escenaInmersiva": "Un pasillo silencioso antes de dormir; la respiración tranquila cuando por fin baja el ruido del día. guardar una frase tuya para recordarla después. Porque el amor también vive en las cosas que casi nadie considera importantes."
  },
  {
    "dia": 354,
    "categoria": "El regalo invisible",
    "icono": "🎁",
    "tono": "filosofica",
    "color": {
      "principal": "#6b2142",
      "suave": "#e3b8c9",
      "oscuro": "#180509"
    },
    "buenosDias": "Buenos días. Hoy no quiero regalarte algo que puedas guardar en una repisa. Quiero regalarte una promesa de comportamiento: una cosa concreta que voy a intentar hacer mejor por ti. Si hoy estuviéramos juntos, me gustaría que este día empezara en una ventana abierta al aire fresco: el ruido lejano de la ciudad. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque contigo me interesa más la experiencia que la perfección.",
    "poema": [
      "Los regalos que duran más no siempre vienen envueltos.",
      "A veces son cambios pequeños: escuchar mejor, preguntar antes de asumir, tener paciencia cuando sería más fácil cerrarse.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: cocinar algo que salga imperfecto pero nuestro; ahí también está mi manera de quererte."
    ],
    "detalle": "Cada uno escribe una conducta que quiere cuidar más en la relación y la convierte en un compromiso pequeño y realista. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el ruido lejano de la ciudad.",
    "buenasNoches": "Buenas noches. Hoy el regalo no cabía en una caja. Ojalá se note en la forma en que te trato mañana. Y si pudiera cerrar este día contigo, escogería cocinar algo que salga imperfecto pero nuestro. Me gusta pensar que porque contigo me interesa más la experiencia que la perfección.",
    "notaImagen": "[PARA TI] una cinta alrededor de una nota escrita a mano.",
    "notaCancion": "[MÚSICA] Perfect — Ed Sheeran.",
    "escenaInmersiva": "Una ventana abierta al aire fresco; el ruido lejano de la ciudad. cocinar algo que salga imperfecto pero nuestro. Porque contigo me interesa más la experiencia que la perfección."
  },
  {
    "dia": 355,
    "categoria": "Noches de deseo",
    "icono": "🌶️",
    "tono": "hot",
    "color": {
      "principal": "#d1163f",
      "suave": "#f7bccb",
      "oscuro": "#1c0409"
    },
    "buenosDias": "Buenos días. Hoy voy a ser un poco menos inocente: me gusta imaginarte cerca cuando el día ya terminó, cuando estás más relajada y no tienes que hacer nada para impresionar a nadie. Hoy me dieron ganas de escribirte antes de que el día terminara de despertarse. No solo porque te extraño: porque hay una parte de mí que disfruta imaginarte cerca, con esa mezcla tuya de calma y peligro que me desarma.",
    "poema": [
      "Me gusta tu cuerpo, sí, pero todavía más me gusta cómo se siente el deseo cuando está mezclado con confianza.",
      "Esa mezcla de querer acercarme y saber que puedo hacerlo despacio, sin convertir el momento en una carrera, me parece mucho más intensa.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacerte reír con una tontería; ahí también está mi manera de quererte."
    ],
    "detalle": "Mensaje sugerente: una noche con luz baja, música suave, besos largos y la libertad de parar cuando cualquiera quiera. La intimidad también es confianza. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: ese segundo de silencio antes de decir algo que importa.",
    "buenasNoches": "Buenas noches. Hoy me voy a dormir con ganas de verte y con esa imaginación peligrosa que aparece cuando uno quiere a alguien y además le atrae muchísimo. Buenas noches. Y antes de dormir te dejo una confesión: si estuvieras aquí, probablemente me costaría mucho conformarme con un beso de buenas noches.",
    "notaImagen": "[PARA TI] ambiente íntimo con luz cálida y sombras; sin desnudez.",
    "notaCancion": "[MÚSICA] Often — The Weeknd.",
    "escenaInmersiva": "Un trayecto cualquiera que de pronto se vuelve especial; ese segundo de silencio antes de decir algo que importa. hacerte reír con una tontería. Porque me gusta la vida cuando tiene tu nombre escondido en alguna parte."
  },
  {
    "dia": 356,
    "categoria": "Álbum de voz",
    "icono": "🎙️",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. Hoy quiero guardar tu voz. No una grabación perfecta, sino mensajes cortos: una historia de infancia, una cosa que te haga reír, algo que esperas del futuro. Si hoy estuviéramos juntos, me gustaría que este día empezara en una cafetería imaginaria donde solo estamos tú y yo: la sombra de las hojas moviéndose sobre el suelo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque no quiero quererte solamente en los momentos fáciles.",
    "poema": [
      "La voz también es memoria.",
      "Algún día una grabación de treinta segundos puede devolvernos exactamente a esta etapa de la vida, con la forma en que hablábamos y nos reíamos ahora.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirar el cielo y buscarle un nombre a la forma de una nube; ahí también está mi manera de quererte."
    ],
    "detalle": "Graben tres audios cada uno y guárdenlos en una carpeta con la fecha. No hace falta publicarlos ni compartirlos con nadie. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sombra de las hojas moviéndose sobre el suelo.",
    "buenasNoches": "Buenas noches. Hoy guardamos un pedacito de nosotros que no depende de una foto. Me encanta la idea de que el futuro pueda escucharnos como somos ahora. Y si pudiera cerrar este día contigo, escogería mirar el cielo y buscarle un nombre a la forma de una nube. Me gusta pensar que porque no quiero quererte solamente en los momentos fáciles.",
    "notaImagen": "[PARA TI] icono de nota de voz y una fecha.",
    "notaCancion": "[MÚSICA] voz de ustedes como protagonista; música de fondo opcional.",
    "escenaInmersiva": "Una cafetería imaginaria donde solo estamos tú y yo; la sombra de las hojas moviéndose sobre el suelo. mirar el cielo y buscarle un nombre a la forma de una nube. Porque no quiero quererte solamente en los momentos fáciles."
  },
  {
    "dia": 357,
    "categoria": "Búsqueda del tesoro",
    "icono": "🗺️",
    "tono": "amor",
    "color": {
      "principal": "#7aa85c",
      "suave": "#dcebcf",
      "oscuro": "#14200e"
    },
    "buenosDias": "Buenos días. Hoy quiero esconder tres pistas para que el otro encuentre un pequeño detalle. No tiene que ser un regalo; puede ser una nota, una foto o un mensaje que solo tenga sentido al llegar a la última pista. Si hoy estuviéramos juntos, me gustaría que este día empezara en un lugar cualquiera que se convierte en nuestro por compartirlo: el sonido pequeño de una taza al tocar la mesa. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque me gusta que podamos convertir cualquier lugar en una historia.",
    "poema": [
      "Jugar a buscar algo es una forma sencilla de devolverle sorpresa a una relación.",
      "No porque necesitemos grandes misterios, sino porque a veces está bien sentir curiosidad por lo que la otra persona preparó.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: caminar sin destino mientras hablamos; ahí también está mi manera de quererte."
    ],
    "detalle": "Tres pistas: una visible, una escondida y una que dependa de un recuerdo compartido. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el sonido pequeño de una taza al tocar la mesa. Búsqueda de palabras: escondan tres notas con una sola palabra cada una. Juntas deben formar una frase que solo nosotros entenderíamos. La última pista puede terminar en un beso.",
    "buenasNoches": "Buenas noches. Hoy volvimos a jugar. Me gusta que una relación adulta todavía tenga espacio para pequeñas tonterías que nos hacen ilusión. Y si pudiera cerrar este día contigo, escogería caminar sin destino mientras hablamos. Me gusta pensar que porque me gusta que podamos convertir cualquier lugar en una historia.",
    "notaImagen": "[PARA TI] tres papelitos con flechas y corazones.",
    "notaCancion": "[MÚSICA] una canción alegre que ambos conozcan.",
    "escenaInmersiva": "Un lugar cualquiera que se convierte en nuestro por compartirlo; el sonido pequeño de una taza al tocar la mesa. caminar sin destino mientras hablamos. Porque me gusta que podamos convertir cualquier lugar en una historia."
  },
  {
    "dia": 358,
    "categoria": "La historia detrás",
    "icono": "🎼",
    "tono": "filosofica",
    "color": {
      "principal": "#3a1f5c",
      "suave": "#c9b8e6",
      "oscuro": "#0c0716"
    },
    "buenosDias": "Buenos días. Hoy quiero elegir una canción no por su letra, sino por su historia: quién la escribió, qué estaba pasando alrededor y por qué terminó existiendo. Si hoy estuviéramos juntos, me gustaría que este día empezara en una tarde que huele a lluvia: la risa que llega antes que la respuesta. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "poema": [
      "A veces conocer el origen de una canción cambia la forma en que la escuchamos.",
      "La música deja de ser solo sonido y se convierte en una pequeña ventana hacia la vida de otra persona.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué fue lo primero que pensaste al despertar; ahí también está mi manera de quererte."
    ],
    "detalle": "Elijan una canción del catálogo y busquen la historia de su creación. Después cuenten qué parte de esa historia les llamó más la atención. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la risa que llega antes que la respuesta.",
    "buenasNoches": "Buenas noches. Hoy una canción tuvo una vida antes de llegar a nuestros oídos. Me gusta pensar que nosotros también estamos escribiendo la historia de las canciones que algún día nos recordarán. Y si pudiera cerrar este día contigo, escogería preguntarte qué fue lo primero que pensaste al despertar. Me gusta pensar que porque algunas personas llegan y cambian la escala con la que medimos un día.",
    "notaImagen": "[PARA TI] portada de una canción y una pequeña ficha sobre su historia.",
    "notaCancion": "[MÚSICA] investigar contexto de la canción elegida; no copiar letras.",
    "escenaInmersiva": "Una tarde que huele a lluvia; la risa que llega antes que la respuesta. preguntarte qué fue lo primero que pensaste al despertar. Porque algunas personas llegan y cambian la escala con la que medimos un día."
  },
  {
    "dia": 359,
    "categoria": "Noche de tacos",
    "icono": "🌮",
    "tono": "amor",
    "color": {
      "principal": "#c22b2b",
      "suave": "#f3b3b3",
      "oscuro": "#1a0505"
    },
    "buenosDias": "Buenos días. Hoy quiero una cena donde cada uno arme el taco del otro. La única regla es que tiene que incluir algo que sabes que le gusta y algo que normalmente no elegiría. Si hoy estuviéramos juntos, me gustaría que este día empezara en una noche con la ciudad respirando detrás de la ventana: el olor de algo recién hecho. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban.",
    "poema": [
      "Conocer a alguien también es recordar pequeños gustos: cuánto picante tolera, qué textura evita, qué salsa siempre busca primero.",
      "La comida se vuelve otra manera de decir 'te conozco'.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: hacer una foto de un momento que normalmente nadie fotografiaría; ahí también está mi manera de quererte."
    ],
    "detalle": "Plan en casa: noche de tacos. Monten todo en la mesa, cocinen juntos y armen cada taco al gusto. Después elijan una película. Regla: por cada beso que ocurra en pantalla, uno de ustedes recibe uno; por cada escena especialmente intensa, pausa para un beso largo o un abrazo, según les provoque.",
    "buenasNoches": "Buenas noches. Hoy te alimenté con una mezcla de cosas que sé que te gustan y una sorpresa que quizá no esperabas. Me gusta aprenderte incluso en la mesa. Y si pudiera cerrar este día contigo, escogería hacer una foto de un momento que normalmente nadie fotografiaría. Me gusta pensar que porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban. Después de los tacos y la película, sofá, manta y cero afán. Quiero que esta noche termine cerca, no perfecta.",
    "notaImagen": "[PARA TI] mesa de tacos para dos.",
    "notaCancion": "[MÚSICA] Cali Pachanguero — Grupo Niche.",
    "escenaInmersiva": "Una noche con la ciudad respirando detrás de la ventana; el olor de algo recién hecho. hacer una foto de un momento que normalmente nadie fotografiaría. Porque quiero que algún día recordemos estas pequeñas escenas y nos dé risa lo mucho que significaban."
  },
  {
    "dia": 360,
    "categoria": "Un año en palabras",
    "icono": "📅",
    "tono": "amor",
    "color": {
      "principal": "#d4af37",
      "suave": "#f7e8b0",
      "oscuro": "#241c04"
    },
    "buenosDias": "Buenos días. Estamos llegando al final de este calendario y quiero hacer algo diferente: resumir todo lo que hemos vivido no con fechas, sino con palabras. Si hoy estuviéramos juntos, me gustaría que este día empezara en un automóvil detenido mientras termina una canción: la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque todavía me interesa descubrirte.",
    "poema": [
      "Elige diez palabras que describan lo que hemos sido: quizá risa, paciencia, distancia, deseo, hogar, música, aprendizaje, calma, locura, futuro.",
      "No tienen que ser perfectas. Solo tienen que ser nuestras.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: abrazarte antes de intentar resolver cualquier cosa; ahí también está mi manera de quererte."
    ],
    "detalle": "Cada uno escribe diez palabras y luego intentan construir una frase usando todas. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras.",
    "buenasNoches": "Buenas noches. Después de tantos días, todavía me parece increíble que diez palabras puedan quedarse cortas para describir todo lo que cabe entre dos personas. Y si pudiera cerrar este día contigo, escogería abrazarte antes de intentar resolver cualquier cosa. Me gusta pensar que porque todavía me interesa descubrirte.",
    "notaImagen": "[PARA TI] diez palabras escritas alrededor de una foto de ustedes.",
    "notaCancion": "[MÚSICA] All of Me — John Legend.",
    "escenaInmersiva": "Un automóvil detenido mientras termina una canción; la tranquilidad de estar juntos sin tener que llenar cada segundo con palabras. abrazarte antes de intentar resolver cualquier cosa. Porque todavía me interesa descubrirte."
  },
  {
    "dia": 361,
    "categoria": "Lo que todavía no sabes",
    "icono": "🔒",
    "tono": "amor",
    "color": {
      "principal": "#4a1830",
      "suave": "#d9a7bd",
      "oscuro": "#120206"
    },
    "buenosDias": "Buenos días. Aunque llevemos muchísimo tiempo conociéndonos, todavía hay cosas que no sabes de mí y probablemente otras que yo todavía no sé de ti. Si hoy estuviéramos juntos, me gustaría que este día empezara en una calle que todavía no se llena de gente: la lluvia golpeando despacio los vidrios. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "poema": [
      "No quiero que conocernos sea una carrera hacia el final.",
      "Quiero que siempre quede una puerta pequeña sin abrir, no por distancia, sino porque todavía nos quedan años para descubrir qué hay detrás.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: escuchar contigo una canción hasta el final; ahí también está mi manera de quererte."
    ],
    "detalle": "Cada uno comparte tres cosas que nunca haya contado al otro: pueden ser recuerdos, gustos, miedos pequeños o sueños raros. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la lluvia golpeando despacio los vidrios.",
    "buenasNoches": "Buenas noches. Qué bonito saber que todavía puedo sorprenderte sin dejar de ser la persona que ya conoces. Y si pudiera cerrar este día contigo, escogería escuchar contigo una canción hasta el final. Me gusta pensar que porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías.",
    "notaImagen": "[PARA TI] una puerta entreabierta con luz al fondo.",
    "notaCancion": "[MÚSICA] Eres — Café Tacvba.",
    "escenaInmersiva": "Una calle que todavía no se llena de gente; la lluvia golpeando despacio los vidrios. escuchar contigo una canción hasta el final. Porque quiero conocer incluso las versiones de ti que no aparecen en las fotografías."
  },
  {
    "dia": 362,
    "categoria": "La promesa pequeña",
    "icono": "🤍",
    "tono": "amor",
    "color": {
      "principal": "#c9a267",
      "suave": "#f2e0bd",
      "oscuro": "#221805"
    },
    "buenosDias": "Buenos días. No quiero terminar este recorrido con una promesa enorme. Quiero una pequeña: seguir prestando atención a ti. Si hoy estuviéramos juntos, me gustaría que este día empezara en un parque casi vacío: el roce casual que termina sintiéndose importante. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque hay recuerdos que empiezan siendo una escena pequeña.",
    "poema": [
      "A los cambios de humor, a las cosas que te emocionan, a lo que te preocupa, a la forma en que te gusta que te quieran.",
      "Porque el amor no solo se declara; también se observa, se aprende y se practica.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: bailar contigo aunque no haya espacio; ahí también está mi manera de quererte."
    ],
    "detalle": "Cada uno completa: 'Quiero seguir aprendiendo de ti que…' y guarda la respuesta. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: el roce casual que termina sintiéndose importante.",
    "buenasNoches": "Buenas noches. Si algo quiero llevarme de todos estos días es esto: seguir mirándote con curiosidad, incluso cuando ya crea conocerte de memoria. Y si pudiera cerrar este día contigo, escogería bailar contigo aunque no haya espacio. Me gusta pensar que porque hay recuerdos que empiezan siendo una escena pequeña.",
    "notaImagen": "[PARA TI] una nota pequeña doblada y guardada en un libro.",
    "notaCancion": "[MÚSICA] At Last — Etta James.",
    "escenaInmersiva": "Un parque casi vacío; el roce casual que termina sintiéndose importante. bailar contigo aunque no haya espacio. Porque hay recuerdos que empiezan siendo una escena pequeña."
  },
  {
    "dia": 363,
    "categoria": "La última cita del calendario",
    "icono": "🌹",
    "tono": "amor",
    "color": {
      "principal": "#d81e3e",
      "suave": "#ffc2ce",
      "oscuro": "#2b0508"
    },
    "buenosDias": "Buenos días. Hoy quiero que la cita no dependa de nada sofisticado. Tú eliges la comida, yo elijo la música y entre los dos decidimos qué historia queremos ver o qué juego queremos jugar. Si hoy estuviéramos juntos, me gustaría que este día empezara en una playa que todavía guarda calor en la arena: la sensación de una mano buscando otra sin pensarlo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque elegirte también es aprender tus detalles.",
    "poema": [
      "Después de tantos días, la idea que más me gusta sigue siendo la misma: compartir tiempo contigo.",
      "Cambian las recetas, las canciones y los planes. La parte importante sigue sentándose enfrente de mí.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: preguntarte qué parte del día quieres guardar; ahí también está mi manera de quererte."
    ],
    "detalle": "Hagan una cita completamente diseñada por el otro. Quien recibe no puede pedir cambios hasta que termine la noche. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: la sensación de una mano buscando otra sin pensarlo.",
    "buenasNoches": "Buenas noches. Si mañana todo volviera a empezar, todavía elegiría otra noche contigo. Supongo que eso es lo que intenté decir durante todo este calendario. Y si pudiera cerrar este día contigo, escogería preguntarte qué parte del día quieres guardar. Me gusta pensar que porque elegirte también es aprender tus detalles.",
    "notaImagen": "[PARA TI] mesa para dos con una rosa.",
    "notaCancion": "[MÚSICA] la canción favorita de ella, elegida por ella.",
    "escenaInmersiva": "Una playa que todavía guarda calor en la arena; la sensación de una mano buscando otra sin pensarlo. preguntarte qué parte del día quieres guardar. Porque elegirte también es aprender tus detalles."
  },
  {
    "dia": 364,
    "categoria": "Un día antes",
    "icono": "🌙",
    "tono": "hot",
    "color": {
      "principal": "#a10e35",
      "suave": "#f0aabd",
      "oscuro": "#140208"
    },
    "buenosDias": "Buenos días. Falta un solo día para cerrar este primer año de mensajes, y todavía tengo ganas de decirte algo que no cabe bien en una despedida: me sigues gustando. Muchísimo. Si estuvieras aquí, probablemente encontraría una excusa para quedarme un poco más cerca de ti. Hay personas que uno abraza por costumbre; contigo siempre aparece la tentación de no soltarte todavía.",
    "poema": [
      "Me gusta tu forma de ser, tu voz, tu risa y sí, también me encanta tu cuerpo y la manera en que me distraes cuando estás cerca.",
      "Después de tantos días, el deseo no desapareció entre las costumbres; aprendió a convivir con ellas y a hacerse más tranquilo, más seguro, más nuestro.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: mirarte unos segundos más de lo necesario; ahí también está mi manera de quererte."
    ],
    "detalle": "Mensaje sugerente: mañana será el cierre del calendario, pero no pienso dejar que eso sea el cierre de las ganas de seguir conquistándote. Hoy, entre todo lo que tenga que pasar, quiero guardar una escena pequeña: una canción que parece llegar exactamente en el momento correcto.",
    "buenasNoches": "Buenas noches. Mañana termina una lista de días, no las ganas de buscarte, abrazarte, besarte y seguir descubriendo todo lo que todavía me atrae de ti. Buenas noches, preciosa. Hay una clase de cercanía que empieza mucho antes de tocarse: una mirada sostenida, una sonrisa que tarda en irse, un silencio que ninguno quiere romper.",
    "notaImagen": "[PARA TI] luz nocturna, dos copas o dos vasos, ambiente íntimo y elegante.",
    "notaCancion": "[MÚSICA] Propuesta Indecente — Romeo Santos.",
    "escenaInmersiva": "Una habitación todavía en penumbra; una canción que parece llegar exactamente en el momento correcto. mirarte unos segundos más de lo necesario. Porque la intimidad también es sentirse tranquilo delante de alguien."
  },
  {
    "dia": 365,
    "categoria": "No es el final",
    "icono": "❤️",
    "tono": "amor",
    "color": {
      "principal": "#ff5d8f",
      "suave": "#ffd7e6",
      "oscuro": "#2a0f1c"
    },
    "buenosDias": "Buenos días. Hoy es el día 365. Un año entero de pequeñas ideas, canciones, poemas, recomendaciones, juegos, recetas, noches y maneras distintas de decirte una cosa bastante sencilla: te amo. Si hoy estuviéramos juntos, me gustaría que este día empezara en un sofá con una manta compartida: el calor queda después de un abrazo. Me quedaría un momento ahí contigo, sin correr hacia lo siguiente, porque el deseo de verte no siempre necesita una gran ocasión.",
    "poema": [
      "Empezamos con una pantalla y una intención. Después llegaron las canciones, las flores, las películas, las preguntas, las comidas, los planes y todas esas pequeñas escenas que imaginamos juntos.",
      "Si algo aprendí escribiéndote durante un año es que el amor no necesita decir exactamente lo mismo todos los días; necesita encontrar nuevas formas de sentirse verdadero.",
      "Así que no quiero cerrar esto con una despedida. Quiero dejar una puerta abierta: mañana no habrá una tarjeta nueva esperando, pero sí habrá otra mañana para seguir eligiéndote.",
      "Y si algún día olvidas cuánto significaste para mí, vuelve a esta escena: pedirte que me cuentes una historia que nunca me hayas contado; ahí también está mi manera de quererte."
    ],
    "detalle": "Cierre en casa: preparen juntos la comida que más hayan repetido durante el año, elijan la película que más los represente y hagan una última noche de manta. Pueden recuperar cualquiera de los juegos coquetos del calendario si ambos quieren.",
    "buenasNoches": "Buenas noches, mi amor. Hoy sí cierro el calendario. Pero no cierro la historia, ni las canciones, ni las conversaciones, ni las ganas de verte, ni esa costumbre que empezó hace 365 días y que espero que siga mucho después de que esta pantalla deje de contar los días. Y si pudiera cerrar este día contigo, escogería pedirte que me cuentes una historia que nunca me hayas contado. Me gusta pensar que porque el deseo de verte no siempre necesita una gran ocasión. No es el final: es la primera noche después de 365 días en la que podemos elegir qué tradición queremos repetir juntos.",
    "notaImagen": "[PARA TI] la foto favorita de ustedes dos, con una pequeña fecha o nota escrita a mano.",
    "notaCancion": "[PARA TI] canción final elegida por ustedes dos; que sea la que represente este año, no la que yo elija por ustedes.",
    "escenaInmersiva": "Un sofá con una manta compartida; el calor queda después de un abrazo. pedirte que me cuentes una historia que nunca me hayas contado. Porque el deseo de verte no siempre necesita una gran ocasión."
  }
];
