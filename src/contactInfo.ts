/** Shared contact details — single source for phone & WhatsApp */
export const PHONE_DISPLAY = '0300 2506450';
export const PHONE_TEL = '+923002506450';
/** E.164 without + — required for wa.me */
const PHONE_WA_DIGITS = '923002506450';

const defaultWhatsAppText =
  'السلام علیکم، میں اپائنٹمنٹ اور علاج کے بارے میں معلومات درکار ہے۔';

/** Opens WhatsApp chat with this number (app or web) */
export const WHATSAPP_URL = `https://wa.me/${PHONE_WA_DIGITS}?text=${encodeURIComponent(defaultWhatsAppText)}`;

export const EMAIL = 'DentistInLodhran@gmail.com';

/** Official TikTok profile */
export const TIKTOK_URL = 'https://www.tiktok.com/@thedentistforu';

/**
 * Google Maps — paste your **Share → Copy link** URL here. This is the exact location
 * from the Maps app; “Open in Google Maps” on the site opens this same link.
 */
export const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/iWYx7DQ3hs6JfVc99';

/**
 * In-page map iframe. Google does not allow `maps.app.goo.gl` short links inside iframes,
 * so this uses the **same pin** as `GOOGLE_MAPS_URL`: coordinates from that link’s place
 * (Dentist in Lodhran → 29.53542, 71.6446778). If you replace the share link above, update
 * these coordinates from the new link’s URL, or paste the `src` from Maps → Share → Embed a map.
 */
export const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps?q=29.53542%2C71.6446778&z=17&hl=en&output=embed';
