# Cómo agregar el video submarino de fondo

## Paso 1 — Descarga un video MP4

Aquí van los mejores videos gratuitos (uso comercial permitido, sin marca de agua):

### Recomendados de Pexels (los más realistas)

1. **Octopus camuflado en arrecife** (excelente — pulpo + corales + colores)
   https://www.pexels.com/video/octopus-camouflaging-on-coral-reef-underwater-33909034/

2. **Pulpo nadando en el océano**
   https://www.pexels.com/video/underwater-footage-of-an-octopus-swimming-in-the-ocean-15623347/

3. **Búsqueda general — arrecife de coral con peces**
   https://www.pexels.com/search/videos/coral%20reef/

4. **Búsqueda — videos submarinos**
   https://www.pexels.com/search/videos/underwater/

### Otras fuentes gratuitas

- **Pixabay**: https://pixabay.com/videos/search/coral%20reef/
- **Coverr**: https://coverr.co (busca "underwater")
- **Mixkit**: https://mixkit.co/free-stock-video (busca "ocean", "fish")

## Paso 2 — Coloca el archivo

Renombra el video descargado a `underwater.mp4` y ponlo en:

```
public/videos/underwater.mp4
```

### Recomendaciones técnicas

- **Resolución**: 1920x1080 (1080p) es suficiente. No uses 4K — pesa demasiado.
- **Tamaño ideal**: entre 5 MB y 15 MB. Más de eso y la página tarda en cargar.
- **Duración**: 15-30 segundos en bucle. Pexels normalmente tiene clips de 10-30s.
- **Comprimir si pesa mucho**: usa https://www.freeconvert.com/video-compressor o https://handbrake.fr (escritorio).

## Paso 3 (opcional) — Imagen poster de respaldo

El "poster" es la imagen que se muestra:
- Mientras el video carga (los primeros milisegundos)
- En conexiones lentas o con "ahorro de datos" activo
- Si por alguna razón el video no se reproduce

Toma un screenshot de un frame del video y guárdalo como JPG en:

```
public/images/underwater-poster.jpg
```

Tamaño recomendado: 1920x1080 px, comprimido con https://tinypng.com (debería pesar menos de 200 KB).

## ¿Y si no pongo el video?

No pasa nada — la página seguirá funcionando. Verás el gradiente azul oscuro original como fondo. El componente `UnderwaterVideo` detecta automáticamente que el archivo no existe y cae al gradiente sin errores.

## Cómo funciona internamente

El componente `components/underwater/underwater-video.tsx`:

1. Intenta cargar `/videos/underwater.mp4`
2. Si lo carga, lo reproduce en bucle (silenciado, sin controles)
3. Si falla (`onError`), oculta el video y deja ver el gradiente que está debajo
4. En conexiones lentas (saveData, 2g), muestra solo el poster (no consume datos del usuario)
5. Aplica un overlay oscuro encima para que el contenido encima sea legible

## Otros cambios hechos a la página

- **Quitados**: peces SVG (`SwimmingFish`), algas (`Seaweed`) y corales (`Coral`) acartonados.
  Los archivos siguen en `components/underwater/` por si los quieres recuperar.
- **Burbujas reducidas**: de 25 a 12, más pequeñas y con opacidad variada.
- **Video como fondo principal** con fallback al gradiente.
