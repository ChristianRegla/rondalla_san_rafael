export interface GalleryItem {
  id: number;
  slug?: string;
  type: "image" | "video";
  src?: string;
  poster?: string;
  videoSrc?: string;
  title: {
    es: string;
    en: string;
  };
  location: string;
  category: "all" | "videos" | "serenatas" | "bodas" | "bohemia";
  tag: {
    es: string;
    en: string;
  };
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/foto_album.webp",
    title: {
      es: "Presentación de Gala Formal",
      en: "Formal Gala Presentation",
    },
    location: "Puerto Vallarta",
    category: "bodas",
    tag: {
      es: "Boda de Gala",
      en: "Gala Wedding",
    },
  },
  {
    id: 2,
    type: "video",
    poster: "/images/poster-presentacion-1.webp",
    videoSrc: "/videos/presentacion-1.mp4",
    title: {
      es: "Interpretación en Vivo: Enamorados",
      en: "Live Performance: Enamorados",
    },
    location: "Parroquia de Nuestra Señora del Rosario",
    category: "videos",
    tag: {
      es: "Video en Vivo",
      en: "Live Video",
    },
  },
  {
    id: 3,
    type: "image",
    src: "/images/galeria-2.webp",
    title: {
      es: "Guitarras de Concierto en Maderas Nobles",
      en: "Concert Tonewood Guitars",
    },
    location: "Marina Vallarta",
    category: "bohemia",
    tag: {
      es: "Noche Bohemia",
      en: "Bohemian Night",
    },
  },
  {
    id: 4,
    type: "image",
    src: "/images/galeria-1.webp",
    title: {
      es: "Enlace Nupcial en la Playa",
      en: "Beach Wedding Serenade",
    },
    location: "Sayulita",
    category: "bodas",
    tag: {
      es: "Boda en Playa",
      en: "Beach Wedding",
    },
  },
  {
    id: 5,
    type: "video",
    poster: "/images/poster-presentacion-2.webp",
    videoSrc: "/videos/presentacion-2.mp4",
    title: {
      es: "Serenata Nocturna Acústica",
      en: "Acoustic Night Serenade",
    },
    location: "Parroquia de Nuestra Señora del Rosario",
    category: "videos",
    tag: {
      es: "Video Serenata",
      en: "Serenade Video",
    },
  },
  {
    id: 6,
    type: "image",
    src: "/images/galeria-2.webp",
    title: {
      es: "Velada Bohemia Familiar",
      en: "Family Bohemian Evening",
    },
    location: "Punta de Mita",
    category: "bohemia",
    tag: {
      es: "Reunión Familiar",
      en: "Family Gathering",
    },
  },
  {
    id: 7,
    slug: "vallarta-fue-ensayo",
    type: "video",
    poster: "/images/poster-vallarta-fue-ensayo.webp",
    videoSrc: "/videos/vallarta-fue-ensayo.mp4",
    title: {
      es: "Vallarta fue (ensayo)",
      en: "Vallarta fue (rehearsal)",
    },
    location: "Puerto Vallarta",
    category: "videos",
    tag: {
      es: "Video ensayo",
      en: "Rehearsal Video",
    },
  },
  {
    id: 8,
    slug: "mi-cancion-presentacion",
    type: "video",
    poster: "/images/poster-mi-cancion-presentacion.webp",
    videoSrc: "/videos/mi-cancion-presentacion.mp4",
    title: {
      es: "Mi canción",
      en: "Mi canción",
    },
    location: "Galerías Vallarta",
    category: "videos",
    tag: {
      es: "Video Presentación",
      en: "Presentation Video",
    },
  },
  {
    id: 9,
    slug: "a-mi-adorada-ensayo",
    type: "video",
    poster: "/images/poster-a-mi-adorada-ensayo.webp",
    videoSrc: "/videos/a-mi-adorada-ensayo.mp4",
    title: {
      es: "A mi adorada",
      en: "A mi adorada",
    },
    location: "Puerto Vallarta",
    category: "videos",
    tag: {
      es: "Video Ensayo",
      en: "Rehearsal Video",
    },
  },
  {
    id: 10,
    slug: "historia-de-un-amor-ensayo",
    type: "video",
    poster: "/images/poster-historia-de-un-amor-ensayo.webp",
    videoSrc: "/videos/historia-de-un-amor-ensayo.mp4",
    title: {
      es: "Historia de un amor (ensayo)",
      en: "Historia de un amor (rehearsal)",
    },
    location: "Puerto Vallarta",
    category: "videos",
    tag: {
      es: "Video Ensayo",
      en: "Rehearsal Video",
    },
  },
  {
    id: 11,
    type: "image",
    src: "/images/galeria-7.webp",
    title: {
      es: "Tocada en Villa Verano",
      en: "Villa Verano Serenade",
    },
    location: "Villa Verano",
    category: "bohemia",
    tag: {
      es: "Tocada en Villa Verano",
      en: "Villa Verano Serenade",
    },
  },
];

export const GALLERY_FILTERS = [
  { id: "all", label: { es: "Todo el Contenido", en: "All Content" } },
  { id: "videos", label: { es: "Videos en Vivo", en: "Live Videos" } },
  { id: "serenatas", label: { es: "Serenatas", en: "Serenades" } },
  { id: "bodas", label: { es: "Bodas & Coctel", en: "Weddings" } },
  { id: "bohemia", label: { es: "Noches Bohemias", en: "Bohemian Nights" } },
];