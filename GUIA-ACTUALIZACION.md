# GUÍA DE ACTUALIZACIÓN — CALENDARIO 365

## 1. Estructura musical actual

El proyecto tiene dos fuentes de música:

1. **YouTube** — `catalogo-canciones.js`
2. **Archivos locales** — `catalogo-musica-local.js` + carpeta `musica/`

El reproductor puede cambiar automáticamente entre ambas fuentes.

### Orden de funcionamiento

- Si un día tiene `cancionUrl`, esa canción de YouTube tiene prioridad.
- Si la canción de YouTube falla y existe el mismo tema en `musica/`, intenta el archivo local.
- Si no existe localmente, busca otra canción válida de la categoría.
- Cuando una canción termina, el reproductor selecciona automáticamente la siguiente.
- El botón `💿` de la barra permite intentar manualmente la versión local de la canción actual.
- El botón `⟳` cambia a otra canción.

## 2. Cómo añadir una canción LOCAL

### Paso 1 — consigue legalmente el archivo

Usa una fuente en la que tengas derecho a usar y alojar el audio. El proyecto no necesita descargar las canciones desde YouTube.

### Paso 2 — usa el nombre exacto

Ejemplo:

`Perfect - Ed Sheeran.mp3`

Debe quedar dentro de:

`musica/Perfect - Ed Sheeran.mp3`

### Paso 3 — registra el archivo

Abre `catalogo-musica-local.js` y añade:

```js
{ titulo: "Perfect", artista: "Ed Sheeran", genero: "amor", archivo: "Perfect - Ed Sheeran.mp3" }
```

No necesitas modificar `reproductor.js`.

### Recomendación

El nombre de `titulo` y `artista` debe coincidir con la entrada de YouTube si quieres que el fallback encuentre automáticamente la misma canción.

## 3. Cómo añadir una canción de YouTube

Abre `catalogo-canciones.js`.

Una URL como:

`https://www.youtube.com/watch?v=XXXXXXXXXXX`

usa este ID:

`XXXXXXXXXXX`

Añade el objeto dentro de la categoría correspondiente:

```js
{ titulo: "Nombre", artista: "Artista", youtubeId: "XXXXXXXXXXX" }
```

El ID debe tener exactamente 11 caracteres válidos.

### Categorías actuales

- `amor`
- `filosofica`
- `hot`
- `ambiente`

No añadas un video de pocos segundos, un Short, un teaser, un clip incompleto o un resultado que no sea la canción completa.

## 4. Cómo fijar una canción a un día

Dentro de un objeto de `contenido-calendario.js` puedes usar:

```js
cancionUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
```

La canción fija del día tiene prioridad.

Si esa versión deja de funcionar, el reproductor puede intentar el respaldo local y después otra canción.

## 5. Qué hacer cuando YouTube dice “Video no disponible”

No cambies inmediatamente toda la canción del calendario.

Prueba en este orden:

1. Otra versión de la misma canción.
2. Video oficial.
3. Audio oficial.
4. Lyric video de una fuente que permita inserción.
5. Versión en vivo completa.
6. Si ninguna versión funciona dentro del sitio, usa el archivo local.

Una URL que funciona en youtube.com no garantiza que el mismo video pueda reproducirse dentro de un iframe. El propietario puede bloquear la inserción, el video puede ser privado/eliminado o existir otra restricción.

## 6. Cuando una canción termina

El reproductor ya está preparado para encadenar automáticamente otra canción.

Esto aplica tanto a YouTube como a los archivos locales.

No hace falta crear un botón nuevo para cada canción.

## 7. Carpeta `musica/`

Ejemplo:

```text
musica/
  Perfect - Ed Sheeran.mp3
  All of Me - John Legend.mp3
  Good News - Mac Miller.mp3
  La Flaca - Jarabe de Palo.mp3
  Vivo en el Limbo - Kaleth Morales.mp3
```

Puedes añadir solo 5 canciones, 20, 70 o más. El catálogo puede contener referencias a canciones que todavía no tienes físicamente; el reproductor solo podrá reproducir localmente las que realmente existan en `musica/`.

## 8. GitHub Pages y el tamaño de la música

GitHub Pages establece un máximo publicado de **1 GB** y un límite flexible de ancho de banda de **100 GB al mes**. GitHub recomienda mantener el repositorio alrededor de 1 GB o menos. Además, GitHub bloquea archivos individuales mayores de 100 MiB. Git LFS **no funciona con sitios GitHub Pages**, por lo que no es una solución para poner una biblioteca enorme en Pages.

Por eso, para este proyecto recomiendo:

- MP3 de **128–192 kbps** para una biblioteca personal ligera.
- Evitar WAV/FLAC si el objetivo es mantener el sitio pequeño.
- No intentar meter una biblioteca de varios GB directamente en GitHub Pages.
- Si la biblioteca crece demasiado, mantener el código en GitHub Pages y mover los audios a un servicio de almacenamiento/CDN que permita servir archivos de audio de forma autorizada.

Una canción MP3 típica de 3–5 minutos puede pesar varios MB; 70 canciones comprimidas razonablemente pueden caber dentro del límite, pero hay que controlar el tamaño real del repositorio y del sitio.

## 9. Archivo de referencia musical

`LISTA-CANCIONES-LOCAL.txt` contiene:

- canciones que ya están en YouTube dentro del proyecto;
- nombre exacto que debe tener el archivo local;
- enlaces de YouTube cuando fueron verificados;
- canciones adicionales para ampliar la biblioteca;
- géneros y artistas sugeridos.

No necesitas descargar toda la lista. Es una biblioteca de referencia para ir construyendo la colección con el tiempo.

## 10. Archivos que NO necesitas tocar

Normalmente no necesitas editar:

- `reproductor.js`
- `script-calendario.js`
- `script-portada.js`
- `style.css`

Para música nueva, normalmente solo necesitas:

- `catalogo-canciones.js` → YouTube
- `catalogo-musica-local.js` → archivos locales
- `musica/` → archivos MP3
- `contenido-calendario.js` → solo si quieres fijar una canción concreta a un día

## 11. Caché del navegador

Cuando actualices JavaScript, si GitHub Pages parece seguir mostrando una versión antigua:

1. Haz una recarga fuerte (`Ctrl + F5`).
2. Si continúa, abre una ventana privada/incógnito.
3. Después comprueba que el archivo publicado en GitHub contiene el cambio.

## 12. Objetivo final del sistema

La idea no es depender de una sola plataforma:

```text
             ┌── YouTube ── funciona ──▶ reproduce
             │
Canción ─────┤
             │
             └── YouTube falla
                    │
                    ▼
              archivo local
                    │
             ┌──────┴──────┐
             │             │
          existe         no existe
             │             │
             ▼             ▼
          reproduce     siguiente canción

Al terminar cualquier canción:
                    ▼
              siguiente canción
```

Así puedes seguir probando versiones de YouTube cuando quieras, pero la biblioteca local queda como respaldo estable.
