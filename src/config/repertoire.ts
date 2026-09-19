export interface Track {
  id: number;
  title: string;
  genre: string;
  duration: string;
  src: string;
  videoUrl?: string; // Propiedad para la versión de ensayo en video
  description?: {
    es: string;
    en: string;
  };
}

export const REPERTOIRE_TRACKS: Track[] = [
  {
    id: 1,
    title: 'Enamorados',
    genre: 'Bolero Tradicional',
    duration: '2:14',
    src: '/audio/cancion_1.webm',
    description: {
      es: 'Expresiva declaración romántica guiada por requintos solistas y armonía vocal a tres voces.',
      en: 'An expressive romantic declaration led by solo requintos and three-part vocal harmony.',
    },
  },
  {
    id: 2,
    title: 'No Quiero Perderte',
    genre: 'Serenata Romántica',
    duration: '2:16',
    src: '/audio/cancion_2.webm',
    description: {
      es: 'Sentida melodía de añoranza y devoción interpretada en guitarras de concierto.',
      en: 'A heartfelt melody of longing and devotion performed on concert acoustic guitars.',
    },
  },
  {
    id: 3,
    title: 'Jacaranda',
    genre: 'Bolero de Gala',
    duration: '3:10',
    src: '/audio/cancion_3.webm',
    description: {
      es: 'Pieza poética de cadencia suave y arreglo nocturnal, ideal para veladas inolvidables.',
      en: 'A poetic piece with a gentle cadence and nocturnal arrangement, ideal for unforgettable evenings.',
    },
  },
  {
    id: 4,
    title: 'Colegiala',
    genre: 'Serenata de Amor',
    duration: '3:18',
    src: '/audio/cancion_4.webm',
    description: {
      es: 'Clásico alegre y melódico predilecto para festejar momentos de ternura y complicidad.',
      en: 'A cheerful and melodic classic, favored for celebrating tender and memorable moments.',
    },
  },
  {
    id: 5,
    title: 'Yo Quisiera',
    genre: 'Balada Acústica',
    duration: '2:52',
    src: '/audio/cancion_5.webm',
    description: {
      es: 'Intimidad lírica acompañada por el pulso cálido del contrabajo y cuerdas de nylon.',
      en: 'Lyrical intimacy accompanied by the warm pulse of the upright bass and nylon strings.',
    },
  },
  {
    id: 6,
    title: 'Guitarra Sola',
    genre: 'Bolero Sentimental',
    duration: '3:27',
    src: '/audio/cancion_6.webm',
    description: {
      es: 'Arpegios profundos donde la guitarra solista dialoga con la nostalgia del canto.',
      en: 'Deep arpeggios where the solo guitar converses with the nostalgia of the vocals.',
    },
  },
  {
    id: 7,
    title: 'Juan El Pescador',
    genre: 'Tradición Romántica',
    duration: '3:34',
    src: '/audio/cancion_7.webm',
    description: {
      es: 'Narrativa popular de la costa impregnada de fuerza interpretativa y sabor marino.',
      en: 'A popular coastal narrative infused with expressive performance and maritime soul.',
    },
  },
  {
    id: 8,
    title: 'Diez Lágrimas',
    genre: 'Bolero Clásico',
    duration: '3:07',
    src: '/audio/cancion_8.webm',
    description: {
      es: 'Melodía melancólica resaltada por bordones graves y armonías vocales solemnes.',
      en: 'A melancholic melody highlighted by deep bass strings and solemn vocal harmonies.',
    },
  },
  {
    id: 9,
    title: 'Vallarta fue',
    genre: 'Serenata Mexicana',
    duration: '3:08',
    src: '/audio/cancion_9.webm',
    videoUrl: '/es/galeria?video=vallarta-fue-ensayo', 
    description: {
      es: 'Homenaje entrañable a la tierra costera, sus recuerdos y la calidez de su gente.',
      en: 'A touching homage to the coastal land, its memories, and the warmth of its people.',
    },
  },
  {
    id: 10,
    title: 'Mi canción',
    genre: 'Bolero Internacional',
    duration: '3:18',
    src: '/audio/cancion_10.webm',
    videoUrl: '/es/galeria?video=mi-cancion-presentacion',
    description: {
      es: 'Afectuosa entrega lírica en un arreglo acústico sofisticado y envolvente.',
      en: 'An affectionate lyrical delivery set to a sophisticated and immersive acoustic arrangement.',
    },
  },
  {
    id: 11,
    title: 'Soñador',
    genre: 'Bolero Nocturno',
    duration: '3:23',
    src: '/audio/cancion_11.webm',
    description: {
      es: 'Atmósfera sutil e inspiradora donde la voz principal guía un viaje de ilusión.',
      en: 'A subtle and inspiring atmosphere where the lead vocal guides a journey of hope.',
    },
  },
  {
    id: 12,
    title: 'A Mi Adorada',
    genre: 'Gala Acústica',
    duration: '4:19',
    src: '/audio/cancion_12.webm',
    videoUrl: '/es/galeria?video=a-mi-adorada-ensayo',
    description: {
      es: 'Magna obra de concierto dedicada al amor sublime, con variaciones de requinto de alta escuela.',
      en: 'A grand concert piece dedicated to sublime love, featuring high-school requinto variations.',
    },
  },
  {
    id: 13,
    title: 'La Malagueña',
    genre: 'Homenaje Sentido',
    duration: '4:11',
    src: '/audio/cancion_13.webm',
    description: {
      es: 'Virtuosísimo tradicional caracterizado por el virtuosismo vocal, falsetes y pasión folclórica.',
      en: 'A traditional masterpiece defined by vocal virtuosity, impressive falsettos, and folkloric passion.',
    },
  },
  {
    id: 14,
    title: 'Es mi canción',
    genre: 'Cierre de Gala',
    duration: '3:39',
    src: '/audio/cancion_14.webm',
    description: {
      es: 'Cierre magistral a toda orquesta acoplada, desplegando el máximo esplendor polifónico del ensamble.',
      en: 'A masterful finale with the full ensemble, showcasing the pinnacle of polyphonic harmony.',
    },
  },
];