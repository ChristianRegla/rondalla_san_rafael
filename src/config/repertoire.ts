export interface Track {
  id: number;
  title: string;
  genre: string;
  duration: string;
  src: string;
  description?: {
    es: string;
    en: string;
  };
}

/**
 * Repertorio de Estudio - Rondalla San Rafael de Puerto Vallarta
 * Puedes ajustar los títulos reales de cada pista según el disco físico.
 */
export const REPERTOIRE_TRACKS: Track[] = [
  {
    id: 1,
    title: 'Gema',
    genre: 'Bolero Tradicional',
    duration: '3:15',
    src: '/audio/cancion_1.webm',
    description: {
      es: 'Un clásico inmortal interpretado con requinto solista y armonía a tres voces.',
      en: 'An immortal classic performed with solo requinto and three-part vocal harmony.',
    },
  },
  {
    id: 2,
    title: 'Cien Años',
    genre: 'Serenata Romántica',
    duration: '2:45',
    src: '/audio/cancion_2.webm',
    description: {
      es: 'Melodía entrañable de añoranza y devoción con guitarras de concierto.',
      en: 'A tender melody of devotion and nostalgia on concert acoustic guitars.',
    },
  },
  {
    id: 3,
    title: 'Sabor a Mí',
    genre: 'Bolero de Gala',
    duration: '3:05',
    src: '/audio/cancion_3.webm',
    description: {
      es: 'El himno romántico de Álvaro Carrillo en un arreglo cálido y nocturnal.',
      en: 'The legendary romantic ballad by Álvaro Carrillo in a warm acoustic arrangement.',
    },
  },
  {
    id: 4,
    title: 'Tres Regalos',
    genre: 'Serenata de Amor',
    duration: '3:30',
    src: '/audio/cancion_4.webm',
    description: {
      es: 'Cielo, luna y estrellas: la pieza predilecta para pedidas de mano y aniversarios.',
      en: 'The favored piece for marriage proposals and anniversary celebrations.',
    },
  },
  {
    id: 5,
    title: 'Motivos',
    genre: 'Balada Acústica',
    duration: '2:50',
    src: '/audio/cancion_5.webm',
    description: {
      es: 'Poesía acústica pura acompañada por el pulso suave del contrabajo.',
      en: 'Pure acoustic poetry accompanied by the gentle pulse of the upright bass.',
    },
  },
  {
    id: 6,
    title: 'Contigo en la Distancia',
    genre: 'Bolero Sentimental',
    duration: '3:12',
    src: '/audio/cancion_6.webm',
    description: {
      es: 'Intimidad vocal que trasciende el tiempo y la lejanía.',
      en: 'Intimate vocal delivery that transcends distance and time.',
    },
  },
  {
    id: 7,
    title: 'Hermoso Cariño',
    genre: 'Tradición Romántica',
    duration: '3:40',
    src: '/audio/cancion_7.webm',
    description: {
      es: 'Fuerza interpretativa y alegría para celebrar a quienes más amamos.',
      en: 'Expressive acoustic passion to celebrate our most cherished ones.',
    },
  },
  {
    id: 8,
    title: 'El Reloj',
    genre: 'Bolero Clásico',
    duration: '2:58',
    src: '/audio/cancion_8.webm',
    description: {
      es: 'Arpegios de requinto que detienen el tiempo en cada nota.',
      en: 'Intricate requinto arpeggios that stop time with every note.',
    },
  },
  {
    id: 9,
    title: 'Si Nos Dejan',
    genre: 'Serenata Mexicana',
    duration: '3:22',
    src: '/audio/cancion_9.webm',
    description: {
      es: 'La promesa de un amor eterno adaptada a la calidez de las cuerdas.',
      en: 'The eternal promise of love set to the warmth of nylon and bronze strings.',
    },
  },
  {
    id: 10,
    title: 'Bésame Mucho',
    genre: 'Bolero Internacional',
    duration: '3:10',
    src: '/audio/cancion_10.webm',
    description: {
      es: 'La obra maestra de Consuelo Velázquez en versión de concierto.',
      en: 'Consuelo Velázquez’s world-renowned masterpiece in concert string arrangement.',
    },
  },
  {
    id: 11,
    title: 'La Barca',
    genre: 'Bolero Nocturno',
    duration: '2:48',
    src: '/audio/cancion_11.webm',
    description: {
      es: 'Suave vaivén de cuerdas que evoca las olas de la Bahía de Banderas.',
      en: 'A gentle rhythm of strings evoking the evening waves of Banderas Bay.',
    },
  },
  {
    id: 12,
    title: 'Solamente Una Vez',
    genre: 'Gala Acústica',
    duration: '3:18',
    src: '/audio/cancion_12.webm',
    description: {
      es: 'Elegancia pura del cancionero romántico mexicano para veladas especiales.',
      en: 'Refined Mexican songwriting tailored for distinguished gala evenings.',
    },
  },
  {
    id: 13,
    title: 'Amor Eterno',
    genre: 'Homenaje Sentido',
    duration: '3:02',
    src: '/audio/cancion_13.webm',
    description: {
      es: 'Interpretación conmovedora y solemne para honrar recuerdos imborrables.',
      en: 'A heartfelt, solemn performance honoring unforgettable memories.',
    },
  },
  {
    id: 14,
    title: 'Serenata de Amor',
    genre: 'Cierre de Gala',
    duration: '3:25',
    src: '/audio/cancion_14.webm',
    description: {
      es: 'Broche de oro con toda la armonía vocal de la Rondalla San Rafael.',
      en: 'A signature finale highlighting the complete vocal harmony of the ensemble.',
    },
  },
];
