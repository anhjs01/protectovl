# Guía — cómo funciona todo y cómo seguir agregando cosas

No necesitas saber programar para usar esta guía. Todo lo que vas a
tocar son archivos de texto con un patrón que se repite.

---

## 1. Qué hay en esta carpeta

```
sorpresa-para-ella/
├── index.html                 -> portada (el corazón que late)
├── calendario.html             -> el calendario de 50 días
├── style.css                   -> todo el diseño visual
├── comun.js                    -> fondo estrellado + widget de música
│
├── contenido-portada.js        -> ⭐ el mensaje del corazón inicial
├── contenido-calendario.js     -> ⭐ los 50 días (lo que más vas a editar)
├── canciones.js                -> ⭐ la lista de "nuestras canciones"
│
├── script-portada.js           -> lógica de la portada (no lo edites)
├── script-calendario.js        -> lógica del calendario (no lo edites)
└── GUIA.md                     -> este archivo
```

Los tres archivos marcados con ⭐ son los únicos que necesitas tocar.
Los demás ya están listos y funcionando.

---

## 2. Cómo funciona la experiencia completa

1. Ella abre el link → ve un corazón latiendo, con el texto "Toca el
   corazón".
2. Al tocarlo, el corazón "reacciona" (un pequeño salto) y estalla en
   un ramillete de corazones y chispas antes de abrirse la carta de
   bienvenida (la puedes editar en `contenido-portada.js`). El texto
   de la carta aparece de a poco, no todo de golpe. Puede tocar "Otro
   mensaje" para ver un versito corto al azar, cuantas veces quiera
   (con su propio mini estallido cada vez).
3. Toca "Abrir calendario" → llega a la cuadrícula de **90 días**
   (tres meses).
4. Solo el día activo está desbloqueado. Los demás se ven con un
   candado 🔒 (a propósito: así se mantiene la sorpresa).
5. Al tocar el día activo, estalla un pequeño efecto con el ícono de
   ese día, y se abre una tarjeta con tres pasos: **Buenos días → el
   mensaje del día (poema + detalle) → Buenas noches**. Al cerrar el
   último paso, ese día queda marcado como completado y se desbloquea
   el siguiente.
6. Los días ya completados se pueden volver a abrir cuando quiera,
   para releerlos (con su check ✓ y su color).
7. El progreso se guarda automáticamente en el navegador de quien
   abre el link (`localStorage`). Si ella lo abre otro día desde el
   mismo celular/computador, sigue donde se quedó.

   **Importante:** el progreso se guarda por navegador/dispositivo,
   no en internet. Si ella lo abre desde el celular y luego desde un
   computador, en el computador el calendario empezaría de nuevo. Para
   el uso normal (ella abriéndolo siempre desde su celular) esto
   funciona perfecto.

---

## 3. Cómo agregar/editar un día del calendario

Abre `contenido-calendario.js`. Vas a ver 50 bloques como este:

```js
{
  dia: 4,
  categoria: "Chocolate",
  icono: "🍫",
  color: { principal: "#8a5a3c", suave: "#e6c9a8", oscuro: "#1c0f07" },
  buenosDias: "Buenos días. Hoy va dedicado a lo que te saca sonrisas rápidas.",
  poema: [
    "Primera línea del mensaje.",
    "Segunda línea, opcional."
  ],
  detalle: "Un dato o guiño bonito, opcional.",
  buenasNoches: "Buenas noches, que sueñes con algo dulce.",
  notaImagen: "[PARA TI] idea de imagen para este día.",
  notaCancion: "[PARA TI] idea de canción para este día."
},
```

Puedes editar el texto de cualquier día con total libertad: cambia
`buenosDias`, `poema`, `detalle` o `buenasNoches` cuantas veces
quieras. **No cambies el número de `dia`** (eso es lo que mantiene el
orden del calendario).

`notaImagen` y `notaCancion` son solo notas para ti — **nunca se
muestran en la página**, son solo un recordatorio de qué imagen o
canción pegarías ahí. Están para que no se te olvide la idea.

### Agregar el día 91 en adelante

Copia un bloque completo, pégalo antes del `];` final, y cambia el
número de `dia` al siguiente disponible (51, 52...). El calendario se
ajusta solo — no necesitas tocar `script-calendario.js` para nada.

---

## 4. Cómo agregar una imagen a un día

1. Crea una carpeta llamada `imagenes` dentro de esta misma carpeta
   (al lado de `index.html`).
2. Pon ahí tu foto, por ejemplo `dia4.jpg`.
3. En `contenido-calendario.js`, en el bloque de ese día, agrega una
   línea nueva `imagen: "imagenes/dia4.jpg",` (puedes ponerla
   justo después de `detalle`). Por ejemplo:

```js
{
  dia: 4,
  categoria: "Chocolate",
  icono: "🍫",
  color: { principal: "#8a5a3c", suave: "#e6c9a8", oscuro: "#1c0f07" },
  buenosDias: "...",
  poema: [ "...", "..." ],
  detalle: "...",
  imagen: "imagenes/dia4.jpg",
  buenasNoches: "...",
  ...
},
```

La imagen va a aparecer automáticamente debajo del poema, con bordes
redondeados, ya con el estilo de la página. Si no agregas `imagen`,
simplemente no se muestra nada ahí — no rompe nada dejarlo así.

**Ideas de imágenes** (como mencionaste): fotos de los dos juntos,
fotos de ella o de ti de pequeños, una flor que represente el día, un
fondo relacionado al poema. Tú decides cuáles van en qué día — usa
las notas en `notaImagen` como recordatorio de tus propias ideas.

---

## 5. Cómo agregar canciones (el botón 🎵)

No metemos música que se reproduzca sola en la página. Por dos
razones prácticas: los navegadores bloquean el autoplay con sonido
(así que casi nunca suena de verdad), y usar canciones con derechos
de autor directamente en el código no es algo que pueda hacer por ti.

En cambio, hay un botoncito 🎵 flotante (abajo a la derecha, en
ambas páginas) que abre una lista de "Nuestras canciones". Al tocar
una, se abre su link de Spotify/YouTube en una pestaña nueva.

Para agregar canciones, abre `canciones.js`:

```js
{
  titulo: "Nombre de la canción",
  artista: "Artista",
  url: "https://open.spotify.com/track/...",
  nota: "Por qué la elegiste (opcional, no se muestra en pantalla, es solo para ti)"
},
```

Copia un bloque, pega tu link real de Spotify o YouTube, y listo.
Puedes agregar tantas como quieras, en español, inglés o cualquier
idioma — tal como lo pediste.

### Si de verdad quieres música de fondo automática

Es posible, pero tiene una condición: necesitas un archivo de audio
que sea legalmente tuyo (una pista instrumental libre de derechos,
o algo que hayas comprado/descargado con licencia). Si consigues ese
archivo, dime y te dejo el código para que se reproduzca de fondo con
un botón de encendido/apagado (nunca autoplay forzado con sonido,
porque los navegadores lo bloquean de todas formas).

---

## 6. Cómo cambiar el mensaje del corazón inicial

Abre `contenido-portada.js`. Ahí están:

- `CARTA_INICIAL`: el mensaje que aparece la primera vez.
- `VERSOS_EXTRA`: la lista de versitos cortos que aparecen al azar
  cuando toca "Otro mensaje". Puedes agregar más simplemente
  agregando una línea nueva entre comillas dentro del arreglo.

---

## 7. Cómo subirlo a GitHub Pages

1. Crea un repositorio nuevo en GitHub (puede ser público o privado
   — si es privado, GitHub Pages gratis no funciona, así que si
   quieres el link gratis, tiene que ser público; nadie va a
   encontrar el link a menos que se lo compartas).
2. Sube TODOS los archivos de esta carpeta (manteniendo los nombres
   exactos) a la raíz del repositorio.
3. Ve a **Settings → Pages** del repositorio.
4. En "Branch", selecciona `main` (o `master`) y carpeta `/root`,
   guarda.
5. Espera 1-2 minutos y GitHub te va a dar un link parecido a:
   `https://tu-usuario.github.io/nombre-del-repositorio/`
6. Ese es el link que le compartes a ella. Va a abrir directo en
   `index.html` (la portada con el corazón).

---

## 8. Cómo reiniciar el progreso (para pruebas)

Abajo del todo en la página del calendario hay un link pequeño que
dice "Reiniciar progreso". Te va a pedir confirmación y, si aceptas,
vuelve a bloquear todos los días. Úsalo para probar el calendario
completo desde el día 1 sin tener que esperar. Ella no debería
necesitar tocarlo nunca — es más una herramienta tuya para revisar
que todo se vea bien antes de enviarle el link.

---

## 9. Ideas para seguir haciendo crecer esto con el tiempo

Ya me contaste bastante de lo que le gusta — lo integré en los 50
días (chocolates, el morado, peluches, lirios, gerberas, girasoles,
libros y dark romance, salchipapa, vestidos largos, el dorado,
buzos, películas de amor y comedia, música y baile, arte, lugares
solitarios con buena vista, naturaleza, playa y mar). Si con el
tiempo descubres más cosas que le gustan, solo agrega un día nuevo
(día 51, 52...) siguiendo el mismo patrón del punto 3.

Otras ideas si quieres seguir expandiendo esto más adelante:
- Un día "especial" para fechas importantes (aniversario, cumpleaños)
  que aparezca fuera del orden normal.
- Una segunda tanda de 50 días cuando termine esta.
- Agregar `imagen` a los días que más te importen primero (no hace
  falta que se lo hagas a los 50 de una vez).

---

¡Éxitos! Esto quedó pensado para que crezca contigo, no para
mostrarse una sola vez. 💫
