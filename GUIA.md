# Guía — cómo funciona todo y cómo seguir agregando cosas

No necesitas saber programar para usar esta guía. Todo lo que vas a
tocar son archivos de texto con un patrón que se repite.

---

## 1. Qué hay en esta carpeta

```
sorpresa-para-ella/
├── index.html                 -> portada (el corazón que late)
├── calendario.html             -> el calendario de 134 días
├── style.css                   -> todo el diseño visual
├── comun.js                    -> fondo estrellado + efecto de partículas
├── reproductor.js              -> el reproductor de música (no lo edites)
│
├── contenido-portada.js        -> ⭐ el mensaje del corazón inicial
├── contenido-calendario.js     -> ⭐ los 134 días (lo que más vas a editar)
├── catalogo-canciones.js       -> ⭐ las canciones, por categoría
│
├── script-portada.js           -> lógica de la portada (no lo edites)
├── script-calendario.js        -> lógica del calendario (no lo edites)
└── GUIA.md                     -> este archivo
```

Los tres archivos marcados con ⭐ son los que vas a tocar con más
frecuencia. Los demás ya están listos y funcionando.

---

## 2. Qué cambió en esta versión

- El calendario pasó de 90 a **134 días** (le agregué contenido nuevo).
- Mezclado entre los días dulces de siempre, ahora hay dos sabores
  nuevos repartidos al azar mientras la va abriendo:
  - **30 días "hot"**: sugerentes, con doble sentido, pensados para
    dejar espacio a la imaginación (sin ser explícitos ni vulgares).
  - **14 días "intensos"**: un estilo más crudo y directo, inspirado
    en esa estética de poesía romántica oscura que me mostraste, pero
    escrito completamente original por mí (ver el punto 3 sobre por
    qué no usé poemas reales de autores).
  - Quedan repartidos aproximadamente 1 de cada 4-5 días, nunca dos
    "hot" seguidos, y los primeros 4 días siempre son los dulces
    originales (para no arrancar con algo subido de tono de una).
- Ahora **suena música de verdad**, no solo una lista de links. Se
  explica en el punto 4.

---

## 3. Por qué no usé poemas reales de autores/Pinterest

Me pediste que buscara poemas reales de otros autores para darle un
toque más auténtico. No puedo hacer eso: reproducir el texto de un
poema con derechos de autor —así sea de una cuenta de Pinterest o
Instagram— no está permitido, sin importar qué tan corto sea el
fragmento.

Lo que sí hice: escribí contenido **original**, propio, en ese mismo
tono crudo e intenso que tienen esas cuentas (directo, un poco
obsesivo, sin miedo a sonar fuerte). Son los 14 días "intensos" que
mencioné arriba.

Si en algún momento quieres meter un poema real de un autor
específico (por ejemplo de Neruda, Benedetti, Sabines, o de alguna
cuenta que le guste a ella), tú sí puedes hacerlo: cópialo y pégalo
directamente en el campo `poema` del día que quieras en
`contenido-calendario.js`, siguiendo el mismo formato. Eso ya sería
una decisión tuya de uso personal, no algo que yo generé.

---

## 4. Cómo funciona la música (nuevo)

### La idea

No descargué ni voy a descargar canciones (eso sería piratería, no
está permitido). En cambio, uso el **reproductor oficial de YouTube**
incrustado en la página — es la misma tecnología que usa cualquier
sitio que "embebe" un video de YouTube, solo que aquí se ve un
reproductor invisible de 1x1 píxel y en su lugar aparece una barrita
abajo a la izquierda con el nombre de la canción, un botón de
pausa/play y uno para cambiar de canción.

### Cómo se elige la canción

Cada día en `contenido-calendario.js` tiene un campo `tono`, que puede
ser `"amor"`, `"filosofica"` o `"hot"`. Cuando ella abre un día, el
reproductor elige **al azar** una canción de esa categoría en
`catalogo-canciones.js`. Así, un día romántico suena distinto a uno
más filosófico o a uno hot, tal como pediste.

En la portada (antes de entrar al calendario), al tocar el corazón
suena algo de la categoría `ambiente`.

### Por qué la música empieza al hacer clic, no sola

Los navegadores no dejan que ninguna página reproduzca sonido
automáticamente sin que la persona haga clic en algo primero (es una
regla de seguridad de todos los navegadores, no algo que yo pueda
evitar). Por eso la música arranca:
- en la portada: al tocar el corazón
- en el calendario: al abrir cada día

### Las canciones que ya dejé cargadas

Metí tus 4 links (uno por categoría) más 2 canciones que encontré
reales en tu export de WhatsApp con ella (nada más busqué links de
canciones en el chat, no leí el resto de la conversación):
**"Hecha Pa' Mí" de Grupo Frontera** y **"Pero No Te Enamores" de
Fuerza Regida**, ambas ya en la categoría `amor`. También agregué
algunas canciones conocidas de The Weeknd para la categoría `hot`
(supuse que tu playlist "the weeknd sexy playlist" iba por ahí) con
sus IDs reales verificados.

El resto son **sugerencias** (nombre de canción + artista) que
pegan con cada categoría, pero les dejé el link vacío porque no los
verifiqué uno por uno. El reproductor ignora automáticamente
cualquier canción sin link, así que no rompen nada — simplemente no
van a sonar hasta que les agregues el ID.

### Cómo agregar más canciones

Abre `catalogo-canciones.js`. Copia un bloque como este dentro de la
categoría que quieras (`amor`, `filosofica`, `hot` o `ambiente`):

```js
{ titulo: "Nombre de la canción", artista: "Artista", youtubeId: "" },
```

Para sacar el `youtubeId`: copia el link de YouTube de la canción,
por ejemplo `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, y todo lo
que va después de `v=` es el ID (`dQw4w9WgXcQ` en ese ejemplo).
Pégalo entre las comillas.

### Cómo revisar tus 4 playlists completas

Yo solo pude confirmar el primer video de cada una de tus 4
playlists (los links que me mandaste), porque YouTube no me deja ver
la lista completa de canciones de una playlist ajena. Si quieres
meter más canciones de esas mismas playlists, la forma más fácil es:
abre la playlist en YouTube, ve canción por canción, copia el link de
cada una que quieras incluir, y agrégala en `catalogo-canciones.js`
como se explicó arriba.

### Fijar una canción específica para un día puntual

Si para algún día en particular quieres una canción fija (no al
azar), agrega el campo `cancionUrl` a ese bloque en
`contenido-calendario.js`:

```js
cancionUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
```

Eso hace que aparezca un botón "🎵 Canción de hoy" dentro de la
tarjeta de ese día específico, además de la música automática por
tono.

---

## 5. Cómo funciona la experiencia completa

1. Ella abre el link → ve un corazón latiendo, con el texto "Toca el
   corazón".
2. Al tocarlo, el corazón "reacciona" y estalla en un ramillete de
   corazones y chispas, empieza a sonar música de fondo, y se abre la
   carta de bienvenida (editable en `contenido-portada.js`). El texto
   aparece de a poco. Puede tocar "Otro mensaje" para versitos al azar.
3. Toca "Abrir calendario" → llega a la cuadrícula de **134 días**.
4. Solo el día activo está desbloqueado, el resto tiene candado 🔒.
5. Al tocar el día activo: estalla un efecto con el ícono de ese día,
   cambia la música según el tono del día, y se abre la tarjeta con
   tres pasos: **Buenos días → mensaje del día → Buenas noches**.
6. Al cerrar el último paso, el día queda completado y se desbloquea
   el siguiente. Los días completados se pueden reabrir cuando quiera
   para releerlos (y reproducir su música otra vez).
7. El progreso se guarda en el navegador de quien abre el link
   (`localStorage`) — por dispositivo, no en internet.

---

## 6. Cómo agregar/editar un día del calendario

Abre `contenido-calendario.js`. Cada día es un bloque como este:

```js
{
  dia: 5,
  categoria: "Deseo",
  icono: "🔥",
  tono: "hot",
  color: { principal: "#c81d4a", suave: "#f7c0d0", oscuro: "#1a0308" },
  buenosDias: "...",
  poema: [ "...", "..." ],
  detalle: "...",
  buenasNoches: "...",
  notaImagen: "[PARA TI] idea de imagen.",
  notaCancion: "[PARA TI] nota sobre música."
},
```

Puedes editar cualquier texto con libertad. **No cambies el número
de `dia`.** El campo `tono` acepta `"amor"`, `"filosofica"` o `"hot"`
— cambia la música que suena ese día.

### Agregar el día 135 en adelante

Copia un bloque completo, cámbiale el número `dia` al siguiente
disponible, ajusta el `tono` y agrégalo antes del cierre `];`.

### Agregar una imagen a un día

Igual que antes: crea una carpeta `imagenes/`, pon tu foto ahí, y
agrega la línea `imagen: "imagenes/dia5.jpg",` dentro del bloque de
ese día. Aparece automáticamente debajo del poema.

---

## 7. Cómo cambiar el mensaje del corazón inicial

Abre `contenido-portada.js`: ahí está `CARTA_INICIAL` (el mensaje de
bienvenida) y `VERSOS_EXTRA` (los versitos al azar del botón "Otro
mensaje").

---

## 8. Cómo subirlo a GitHub Pages

1. Crea un repositorio público en GitHub.
2. Sube TODOS los archivos de esta carpeta a la raíz del repositorio,
   manteniendo los nombres exactos.
3. Ve a **Settings → Pages**, selecciona la rama `main` y carpeta
   `/root`, guarda.
4. Espera 1-2 minutos y te da un link tipo
   `https://tu-usuario.github.io/nombre-del-repositorio/`.
5. Ese es el link que le compartes — abre directo en la portada.

---

## 9. Cómo reiniciar el progreso (para pruebas)

Abajo del todo en la página del calendario hay un link "Reiniciar
progreso" que vuelve a bloquear todos los días. Es una herramienta
tuya para probar, ella no debería necesitarlo.

---

## 10. Un par de cosas a tener en cuenta

- **La música necesita internet** para sonar (se conecta a YouTube en
  vivo), igual que ya pasaba con las fuentes de letra.
- Si algún día quieres bajarle la intensidad a la mezcla de contenido
  hot, puedes cambiarle el campo `tono` de esos días a `"amor"` o
  `"filosofica"` en `contenido-calendario.js` — no necesitas borrar
  nada, con cambiar ese campo la música se ajusta sola.
- Si algo se ve en blanco o raro, revisa que **todos** los archivos
  de esta carpeta estén juntos y con el nombre exacto — el sitio ya
  tiene un aviso automático que te dice qué archivo falta si algo no
  carga bien.

---

¡Éxitos! Esto quedó pensado para que seas tú quien lo siga afinando
con el tiempo. 💫
