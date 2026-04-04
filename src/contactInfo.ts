/** Shared contact details — single source for phone & WhatsApp */
export const PHONE_DISPLAY = '0300 2506450';
export const PHONE_TEL = '+923002506450';
/** E.164 without + — required for wa.me */
const PHONE_WA_DIGITS = '923002506450';

const defaultWhatsAppText = 'Hello, I would like to inquire about Dentist In Lodhran.';

/** Opens WhatsApp chat with this number (app or web) */
export const WHATSAPP_URL = `https://wa.me/${PHONE_WA_DIGITS}?text=${encodeURIComponent(defaultWhatsAppText)}`;

export const EMAIL = 'Rashidbinmaqbool@gmail.com';

/** Official TikTok profile */
export const TIKTOK_URL = 'https://www.tiktok.com/@thedentistforu';
