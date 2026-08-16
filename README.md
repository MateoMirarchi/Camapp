# Regalo de cumpleaños 💌

One-page en React (Vite) con animaciones de scroll y una cartita de apertura interactiva.

## Cómo correrla

```bash
npm install
npm run dev
```

Abrí la URL que te muestre la terminal (por defecto `http://localhost:5173`).

Para generar la versión final (carpeta `dist/`) lista para subir a cualquier hosting estático (Netlify, Vercel, GitHub Pages, etc.):

```bash
npm run build
```

## Qué falta completar

Todos los textos, fotos y coordenadas están centralizados en **[src/content.js](src/content.js)**. Buscá los `TODO` y reemplazalos:

- `intro.message`: ya tiene el mensaje de la carta inicial.
- `howWeMet.text`: relato de cómo se conocieron.
- `reunion.coordinates` y `reunion.text`: coordenadas exactas y relato del reencuentro.
- `timeline.items[]`: fecha y descripción breve de cada hito (nos conocimos, reencuentro, empezamos a salir, le pedí que sea mi novia, un año, ahora). Podés agregar o quitar hitos del array.
- `gallery.photos[].caption`: un epígrafe corto por foto (opcional).
- `finalLetter.text` y `finalLetter.signature`: el texto de la carta final y la firma.

## Cómo reemplazar las fotos

Las fotos son placeholders (SVG con un cartel indicando qué va ahí) dentro de `public/images/`. Para poner las reales:

1. Copiá tus fotos a `public/images/` (formato `.jpg`, `.png` o `.webp`).
2. En `src/content.js`, cambiá la ruta correspondiente, por ejemplo:
   ```js
   photo: '/images/old-photo.jpg',
   ```
3. Para el mapa (`reunion.mapImage`), podés usar una captura de pantalla de Google Maps con el pin en el lugar exacto.
4. La galería (`gallery.photos`) acepta cualquier cantidad de fotos, no solo 5 — agregá o quitá objetos del array.

## Estructura

```
src/
  content.js              # todos los textos e imágenes editables
  App.jsx                 # arma el orden de las secciones
  components/
    EnvelopeIntro.jsx      # carta cerrada + animación de apertura
    HowWeMet.jsx            # cómo nos conocimos
    Reunion.jsx              # reencuentro (mapa + coordenadas)
    Timeline.jsx              # línea de tiempo de la relación
    Gallery.jsx               # carrusel de fotos con flechas
    FinalLetter.jsx            # carta final
    Reveal.jsx                  # wrapper de animación al hacer scroll
```

## Personalizar estilos

Los colores y tipografías están como variables CSS en [src/index.css](src/index.css) (`:root`). Cambiando esos valores cambia toda la paleta de la página.
