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
