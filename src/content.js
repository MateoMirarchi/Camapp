// Todos los textos e imágenes editables de la página están acá.
// Reemplazá los valores marcados con TODO y las fotos en /public/images.

const content = {
  intro: {
    // Mensaje que aparece al abrir la carta inicial.
    message:
      'Feliz cumpleaños mi amor, espero que tengas un gran día y que te guste este segundo regalo.',
  },

  howWeMet: {
    title: 'Cómo nos conocimos',
    photo: '/images/old-photo.svg', // TODO: reemplazar por la foto vieja real
    photoAlt: 'Nuestra primera foto juntos',
    // TODO: completar con el relato de cómo se conocieron y qué pensaste/sentiste.
    text: `TODO: acá va el relato de cómo nos conocimos, qué pensé y qué sentí en ese momento.`,
  },

  reunion: {
    title: 'Nuestro reencuentro',
    mapImage: '/images/map-placeholder.svg', // TODO: reemplazar por captura real de Google Maps
    mapAlt: 'Ubicación de nuestro reencuentro en el mapa',
    // TODO: reemplazar por las coordenadas reales, formato "-34.6037, -58.3816"
    coordinates: 'TODO: -00.0000, -00.0000',
    // TODO: completar con el relato del reencuentro.
    text: `TODO: acá va el relato de nuestro reencuentro.`,
  },

  timeline: {
    title: 'Nuestra historia',
    subtitle: 'Un resumen de nuestro camino juntos',
    // TODO: completar fecha y descripción breve de cada hito.
    items: [
      { date: 'TODO: fecha', label: 'Nos conocimos', text: 'TODO: descripción breve' },
      { date: 'TODO: fecha', label: 'Nos reencontramos', text: 'TODO: descripción breve' },
      { date: 'TODO: fecha', label: 'Empezamos a salir', text: 'TODO: descripción breve' },
      { date: 'TODO: fecha', label: 'Te pedí que seas mi novia', text: 'TODO: descripción breve' },
      { date: 'TODO: fecha', label: 'Cumplimos un año', text: 'TODO: descripción breve' },
      { date: 'Hoy', label: 'Ahora', text: 'TODO: descripción breve' },
    ],
  },

  gallery: {
    title: 'Nosotros',
    subtitle: 'Un ratito de nuestros momentos juntos',
    photos: [
      { src: '/images/gallery-1.svg', alt: 'Foto 1', caption: 'TODO: caption 1' },
      { src: '/images/gallery-2.svg', alt: 'Foto 2', caption: 'TODO: caption 2' },
      { src: '/images/gallery-3.svg', alt: 'Foto 3', caption: 'TODO: caption 3' },
      { src: '/images/gallery-4.svg', alt: 'Foto 4', caption: 'TODO: caption 4' },
      { src: '/images/gallery-5.svg', alt: 'Foto 5', caption: 'TODO: caption 5' },
    ],
  },

  finalLetter: {
    title: 'Una cartita para vos',
    // TODO: completar con el texto final de la carta.
    text: `TODO: acá va el texto final de la carta.`,
    signature: 'TODO: firma (ej. "Te amo, Mateo")',
  },
};

export default content;
