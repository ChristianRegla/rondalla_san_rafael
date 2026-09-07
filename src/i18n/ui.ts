export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.media': 'Música y Video',
    'nav.contact': 'Contacto',
    'hero.title': 'Música Romántica y Tradicional para tus Eventos',
    'hero.subtitle': 'Acompañamos tus momentos más especiales en Puerto Vallarta y sus alrededores.',
    'hero.cta': 'Cotizar por WhatsApp',
    'wa.message': 'Hola, me gustaría pedir informes para cotizar un evento con la Rondalla San Rafael.',
  },
  en: {
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.media': 'Media',
    'nav.contact': 'Contact',
    'hero.title': 'Romantic and Traditional Live Music for Your Events',
    'hero.subtitle': 'Making your special moments unforgettable in Puerto Vallarta and surroundings.',
    'hero.cta': 'Book via WhatsApp',
    'wa.message': 'Hello, I would like to inquire about booking an event with Rondalla San Rafael.',
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}