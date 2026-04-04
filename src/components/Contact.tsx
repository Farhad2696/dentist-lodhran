import React from 'react';
import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react';
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../contactInfo';
import { BRAND_NAME_PLAIN } from './BrandName';
import { WhatsAppIcon } from './WhatsAppIcon';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Visit or call us
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are here to help with your dental health. Call, message on WhatsApp, email, or visit
            our clinic during working hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Clinic details</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-teal-700" size={22} aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Address</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Bin Qasim Street, Near Gulaab Marble Factory
                      <br />
                      Lodhran, Punjab 59320
                      <br />
                      Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-teal-700" size={22} aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Phone</h4>
                    <p className="text-slate-600">
                      <a
                        href={`tel:${PHONE_TEL}`}
                        className="hover:text-teal-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <WhatsAppIcon size={22} className="text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">WhatsApp</h4>
                    <p className="text-slate-600">
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded underline-offset-2 hover:underline"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-teal-700" size={22} aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Email</h4>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-slate-600 hover:text-teal-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-teal-700" size={22} aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Working hours</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Monday – Saturday: 9:00 AM – 9:00 PM
                      <br />
                      Sunday: emergency cases only
                      <br />
                      <span className="text-slate-700">24/7 emergency care available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Location</h4>
              <div className="w-full h-64 md:h-72 bg-slate-200 rounded-xl overflow-hidden shadow-md ring-1 ring-slate-200/80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3555.306076885137!2d71.644412!3d29.534863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1726951234567"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${BRAND_NAME_PLAIN} on Google Maps`}
                />
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-2xl bg-white p-8 md:p-10 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">How to reach us</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                For questions or to arrange a visit, call or WhatsApp during clinic hours, or email
                us—we will respond as soon as we can.
              </p>
              <div className="space-y-4">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold shadow-md hover:from-teal-700 hover:to-cyan-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                >
                  <Phone size={20} aria-hidden />
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  <WhatsAppIcon size={22} className="text-white" />
                  WhatsApp {PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=Inquiry%20from%20website`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl border-2 border-slate-200 text-slate-800 font-semibold hover:border-teal-300 hover:bg-teal-50/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                >
                  <Mail size={20} aria-hidden />
                  Email us
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=29.534863,71.644412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl text-teal-800 font-medium hover:bg-teal-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                >
                  <Navigation size={20} aria-hidden />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
