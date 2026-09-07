export const SITE_CONFIG = {
  name: 'Rondalla San Rafael',
  location: 'Puerto Vallarta, Jalisco, México',
  domain: 'https://rondallasanrafael.com',
  // Número en Base64 para evitar que bots hagan scraping
  encodedPhone: 'NTIxMzIyWFhYWFhYWA==', // Reemplazarás con el btoa("521XXXXXXXXXX") real
  email: 'contacto@rondallasanrafael.com',
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    tiktok: 'https://tiktok.com',
    spotify: 'https://spotify.com',
  },
};

export const getWhatsAppLink = (message: string) => {
  if (typeof window === 'undefined') return '#';
  const phone = atob(SITE_CONFIG.encodedPhone);
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};