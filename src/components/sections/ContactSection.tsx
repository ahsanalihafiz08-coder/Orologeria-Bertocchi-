import React from 'react';
import { MapPin, Phone, Clock, Navigation, Mail, ExternalLink } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from '../icons/BrandIcons';

interface ContactSectionProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onNavigateSection,
  onOpenBooking: _onOpenBooking,
}) => {
  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=550%20S%20Hill%20St%20Ste%201238%2C%20Los%20Angeles%2C%20CA%2090013%2C%20United%20States';

  const mapsEmbedSrc =
    'https://maps.google.com/maps?q=550%20S%20Hill%20St%20Ste%201238,%20Los%20Angeles,%20CA%2090013,%20United%20States&t=&z=16&ie=UTF8&iwloc=&output=embed';

  const currentYear = 2026;

  const instagramProfileUrl =
    'https://www.instagram.com/rodeowatches?obrf=MW1kNDd0bGZwc3Z0Zg==';
  const whatsAppUrl =
    'https://wa.me/13108674286?text=Hello%20Rodeo%20Watch%20%26%20Jewelry,%20I%20would%20like%20information%20regarding%20your%20timepieces.';
  const emailAddress = 'rodeowatches@gmail.com';
  const phoneNumber = '+1 310 867 4286';
  const phoneCallHref = 'tel:+13108674286';
  const businessAddress = '550 S Hill St Ste 1238, Los Angeles, CA 90013, United States';

  return (
    <section
      id="contact"
      aria-label="Contact and Boutique Location"
      className="bg-[#fcfbfa] pt-16 lg:pt-24 border-t border-[#e2e8f0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4efe6] border border-[#e2e8f0] text-xs font-semibold tracking-widest text-[#9e7a35] uppercase">
            <span>Visit Our Los Angeles Showroom</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c1b33]">
            Contact & Boutique Location
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            We look forward to welcoming you to Rodeo Watch & Jewelry. Reach out to coordinate your private visit or consult on our exclusive fine timepieces and jewelry.
          </p>
          <div className="w-16 h-0.5 bg-[#c5a059] mx-auto mt-4" />
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch mb-16">
          {/* Left Column: Contact Cards */}
          <div className="flex flex-col justify-between space-y-5 sm:space-y-6">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#e2e8f0] shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0c1b33] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#c5a059]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0c1b33]">
                    Boutique Address
                  </h3>
                  <span className="text-xs text-[#9e7a35] font-semibold uppercase tracking-wider">
                    Los Angeles, California
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#0c1b33] font-medium leading-relaxed pl-13">
                550 S Hill St Ste 1238<br />
                Los Angeles, CA 90013, United States
              </p>

              <div className="pl-13 pt-1">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0c1b33] hover:text-[#c5a059] transition-colors group"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#c5a059] group-hover:scale-110 transition-transform" />
                  <span>Get Directions via Google Maps</span>
                </a>
              </div>
            </div>

            {/* Telephone & Communication Card */}
            <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#e2e8f0] shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0c1b33] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#c5a059]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0c1b33]">
                    Direct Telephone & Email
                  </h3>
                  <span className="text-xs text-[#9e7a35] font-semibold uppercase tracking-wider">
                    Immediate Inquiries & WhatsApp
                  </span>
                </div>
              </div>

              <div className="pl-13 space-y-3">
                <div className="space-y-1">
                  <a
                    href={phoneCallHref}
                    className="font-serif text-xl sm:text-2xl font-bold text-[#0c1b33] hover:text-[#c5a059] transition-colors block"
                  >
                    {phoneNumber}
                  </a>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0c1b33] hover:text-[#c5a059] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>{emailAddress}</span>
                  </a>
                  <p className="text-xs text-[#475569] mt-0.5">
                    Click to call, text, or email directly from your device.
                  </p>
                </div>

                {/* Communication Buttons */}
                <div className="pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
                    {/* 1. WhatsApp Button */}
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs uppercase tracking-wider shadow-xs hover:shadow-md transition-all text-center"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                      <span>WhatsApp (+1 310 867 4286)</span>
                    </a>

                    {/* 2. Instagram Button */}
                    <a
                      href={instagramProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white font-semibold text-xs uppercase tracking-wider shadow-xs hover:shadow-md transition-all text-center"
                    >
                      <InstagramIcon className="w-4 h-4 text-white shrink-0" />
                      <span>@rodeowatches</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours & Visiting Notice */}
            <div className="p-5 rounded-2xl bg-[#f4efe6] border border-[#e2e8f0] shadow-xs space-y-2 text-xs text-[#475569]">
              <div className="flex items-center gap-2 text-[#0c1b33] font-semibold">
                <Clock className="w-4 h-4 text-[#c5a059]" />
                <span>Visiting Hours & Appointments</span>
              </div>
              <p className="leading-relaxed">
                To guarantee uninterrupted, dedicated attention for examining specific watches or fine jewelry, we recommend calling ahead at <strong>{phoneNumber}</strong>, messaging on WhatsApp, or submitting an appointment enquiry.
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="flex flex-col h-full min-h-[460px] lg:min-h-full">
            <div className="rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-xs bg-[#f4efe6] relative flex-1 h-full min-h-[420px] lg:min-h-full">
              {/* Top-Right Interactive Direct Map Action Button */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-20 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0c1b33]/95 hover:bg-[#0c1b33] text-white text-xs font-bold uppercase tracking-wider shadow-lg border border-white/20 backdrop-blur-md transition-all hover:scale-105 group cursor-pointer"
                title="Open location directly in Google Maps"
              >
                <Navigation className="w-3.5 h-3.5 text-[#c5a059] group-hover:scale-110 transition-transform" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
              </a>

              <iframe
                title="Google Maps Location of Rodeo Watch & Jewelry in Los Angeles, California"
                src={mapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating map action banner with direct interactive button */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 bg-[#0c1b33]/90 backdrop-blur-md text-white p-3.5 rounded-xl border border-white/20 shadow-lg flex items-center justify-between gap-4 z-10">
                <div className="text-left min-w-0">
                  <div className="text-xs font-bold text-white truncate">550 S Hill St Ste 1238</div>
                  <div className="text-[11px] text-[#dfc181] truncate">Los Angeles, CA 90013, United States</div>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#c5a059] hover:bg-[#dfc181] text-[#0c1b33] font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Map Location</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#0c1b33] text-white pt-14 pb-10 border-t border-[#c5a059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Brand column */}
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-wider text-white uppercase">
                  Rodeo Watch & Jewelry
                </h3>
                <span className="text-xs font-semibold tracking-[0.25em] text-[#dfc181] uppercase block mt-0.5">
                  Boutique • Los Angeles
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                An exclusive luxury watch and fine jewelry boutique in Los Angeles dedicated to timeless craftsmanship, bespoke service, and horological distinction.
              </p>
              <div className="text-xs text-[#dfc181] font-semibold">
                Customer Rating: 5.0 (3 stars)
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#dfc181]">
                Showroom Navigation
              </h4>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li>
                  <a
                    href="#hero"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateSection('hero');
                    }}
                    className="hover:text-[#dfc181] transition-colors"
                  >
                    Hero Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#brands"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateSection('brands');
                    }}
                    className="hover:text-[#dfc181] transition-colors"
                  >
                    Brand Showcase
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateSection('about');
                    }}
                    className="hover:text-[#dfc181] transition-colors"
                  >
                    About Rodeo Watch & Jewelry
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateSection('portfolio');
                    }}
                    className="hover:text-[#dfc181] transition-colors"
                  >
                    Portfolio (9 Categories)
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateSection('services');
                    }}
                    className="hover:text-[#dfc181] transition-colors"
                  >
                    Services (36 Topics)
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateSection('testimonials');
                    }}
                    className="hover:text-[#dfc181] transition-colors"
                  >
                    Reviews (5.0 ★★★)
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateSection('contact');
                    }}
                    className="hover:text-[#dfc181] transition-colors"
                  >
                    Contact & Location
                  </a>
                </li>
              </ul>
            </div>

            {/* Location & Telephone */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#dfc181]">
                Boutique Location
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                550 S Hill St Ste 1238<br />
                Los Angeles, CA 90013, United States
              </p>
              <div className="pt-1 space-y-1.5">
                <a
                  href={phoneCallHref}
                  className="text-xs text-white hover:text-[#dfc181] font-semibold flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#dfc181]" />
                  <span>{phoneNumber}</span>
                </a>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-xs text-white hover:text-[#dfc181] font-semibold flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#dfc181]" />
                  <span>{emailAddress}</span>
                </a>
              </div>
              <div className="text-[11px] text-slate-400 italic">
                Direct telephone & WhatsApp inquiries are welcomed.
              </div>
            </div>

            {/* Active Social Media & Messaging Buttons */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#dfc181]">
                Official Social & Messaging
              </h4>
              <p className="text-xs text-slate-300">
                Connect directly through our official Instagram and WhatsApp channels.
              </p>

              <div className="flex items-center gap-3 pt-2">
                {/* 1. Official WhatsApp Button */}
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Rodeo Watch & Jewelry on official WhatsApp"
                  className="w-11 h-11 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all"
                  title="WhatsApp: +1 310 867 4286"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </a>

                {/* 2. Official Instagram Profile Link */}
                <a
                  href={instagramProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Rodeo Watch & Jewelry on Instagram"
                  className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all"
                  title="Instagram: @rodeowatches"
                >
                  <InstagramIcon className="w-5 h-5 text-white" />
                </a>

                {/* 3. Telephone Dial Button */}
                <a
                  href={phoneCallHref}
                  aria-label="Call Rodeo Watch & Jewelry directly"
                  className="w-11 h-11 rounded-xl bg-[#162a4d] hover:bg-[#1f3763] border border-white/20 text-[#dfc181] flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all"
                  title="Telephone: +1 310 867 4286"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom copyright notice */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>
              © {currentYear} Rodeo Watch & Jewelry. All rights reserved. {businessAddress}.
            </p>
            <p className="text-[11px] text-slate-500">
              Presented for horological appreciation & fine jewelry consultations.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};
