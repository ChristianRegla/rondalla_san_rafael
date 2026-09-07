export const SITE_CONFIG = {
  name: 'Rondalla San Rafael',
  location: 'Puerto Vallarta, Jalisco, México',
  domain: 'https://rondallasanrafael.com',
  encodedPhone: 'NTIzMzQ0NzgwNDYw',
  email: 'contacto@rondallasanrafael.com',
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=61593528344357',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    tiktok: 'https://tiktok.com',
    spotify: 'https://spotify.com',
  },
};

export const getWhatsAppLink = (message: string) => {
  const phone = atob(SITE_CONFIG.encodedPhone);
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};