# GUÍA — ACTUALIZACIÓN DEL REPRODUCTOR DE YOUTUBE

## Arquitectura actual
El proyecto usa YouTube como fuente principal. El catálogo `catalogo-canciones.js` contiene únicamente entradas con un `youtubeId` válido de 11 caracteres.

### Para añadir una canción
1. Busca la canción completa en YouTube.
2. Prioriza canal oficial, audio oficial, lyric video oficial o una subida legítima de duración normal.
3. Comprueba que no sea Short, clip, teaser, tutorial, karaoke, mix o fragmento.
4. Copia la URL `https://www.youtube.com/watch?v=XXXXXXXXXXX`.
5. Toma solo los 11 caracteres de `XXXXXXXXXXX`.
6. Añade el objeto a la categoría correcta en `catalogo-canciones.js`.

Ejemplo:
```js
{ titulo: "Mi Canción", artista: "Artista", youtubeId: "XXXXXXXXXXX", nota: "video completo" }
```

## Categorías
- `amor`: románticas, bachata, pop amoroso, salsa romántica, vallenato romántico.
- `filosofica`: introspectivas, nostálgicas, reflexivas, rap con contenido emocional.
- `hot`: R&B, sensual, urbano y canciones con energía íntima.
- `ambiente`: piano, instrumental y música suave.

## Reproducción continua
Cuando una canción termina (`ENDED`), el reproductor selecciona automáticamente otra de la misma categoría. Si una categoría se queda sin opciones válidas, prueba otra categoría.

Si YouTube devuelve un error, esa ID se marca como fallida durante la sesión y se busca otra canción; así no se repite indefinidamente un video que no puede reproducirse.

## Canción fija para un día
Si un día necesita una canción concreta, en `contenido-calendario.js` puedes usar:
```js
cancionUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
```
El reproductor intenta primero esa canción.

## Caché
Cuando se cambie `catalogo-canciones.js`, si el navegador sigue usando una versión antigua, haz una recarga forzada (`Ctrl+F5`) o cambia el parámetro `?v=` de los scripts en el HTML.

## Importante
Que un video exista en YouTube no garantiza que siempre permita reproducción incrustada. YouTube puede cambiar su disponibilidad, región, privacidad o permisos de inserción. Por eso el reproductor tiene salto automático ante errores.

## Listas
- `LISTA-CANCIONES-YOUTUBE.md`: canciones que sí están actualmente dentro del catálogo.
- `LISTA-CANCIONES-PENDIENTES-YOUTUBE.txt`: canciones de la antigua biblioteca local que todavía no se meten porque no se verificó una versión completa de YouTube.
