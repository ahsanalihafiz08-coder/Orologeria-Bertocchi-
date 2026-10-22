import React from 'react';
import { MapPin, Phone, ExternalLink, Clock, ShieldCheck, Navigation } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from '../icons/BrandIcons';

interface ContactSectionProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onNavigateSection,
  onOpenBooking,
}) => {
  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=Via%20Calzolai%2065f%2029121%20Piacenza%20PC%20Italy';

  const mapsEmbedSrc =
    'https://maps.google.com/maps?q=Via%20Calzolai%2065f,%2029121%20Piacenza%20PC,%20Italy&t=&z=16&ie=UTF8&iwloc=&output=embed';

  const currentYear = 2026;

  const instagramProfileUrl =
    'https://www.instagram.com/orologi_f.lli_bertocchi?obrf=MWdhNTRpM2Uycmhmcg==';
  const facebookUrl =
    'https://www.facebook.com/search/top?q=Orologeria%20Bertocchi%20Piacenza';
  const whatsAppUrl =
    'https://wa.me/390523322357?text=Buongiorno%20Orologeria%20Bertocchi%20F.Lli,%20desidero%20informazioni.';

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
            <span>Visit Our Piacenza Boutique</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c1b33]">
            Contact & Boutique Location
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            We look forward to welcoming you in our historic Piacenza location. Reach out to coordinate your visit or consult on your timepiece interests.
          </p>
          <div className="w-16 h-0.5 bg-[#c5a059] mx-auto mt-4" />
        </div>

        {/* Contact Info Grid: Balanced 50/50 columns with even left and right alignment */}
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
                    Piacenza, Italy
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#0c1b33] font-medium leading-relaxed pl-13">
                Via Calzolai, 65f<br />
                29121 Piacenza PC, Italy
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

            {/* Telephone & WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#e2e8f0] shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0c1b33] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#c5a059]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0c1b33]">
                    Direct Telephone
                  </h3>
                  <span className="text-xs text-[#9e7a35] font-semibold uppercase tracking-wider">
                    Immediate Inquiries
                  </span>
                </div>
              </div>

              <div className="pl-13 space-y-3">
                <div>
                  <a
                    href="tel:+390523322357"
                    className="font-serif text-xl sm:text-2xl font-bold text-[#0c1b33] hover:text-[#c5a059] transition-colors block"
                  >
                    +39 0523 322357
                  </a>
                  <p className="text-xs text-[#475569] mt-0.5">
                    Click to dial directly from your smartphone or device.
                  </p>
                </div>

                {/* 3 Equal-Sized Communication Buttons: WhatsApp, Instagram, Facebook */}
                <div className="pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full">
                    {/* 1. WhatsApp Button */}
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-2 sm:px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs uppercase tracking-wider shadow-xs hover:shadow-md transition-all text-center"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                      <span>WhatsApp</span>
                    </a>

                    {/* 2. Instagram Button */}
                    <a
                      href={instagramProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-2 sm:px-3 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white font-semibold text-xs uppercase tracking-wider shadow-xs hover:shadow-md transition-all text-center"
                    >
                      <InstagramIcon className="w-4 h-4 text-white shrink-0" />
                      <span>Instagram</span>
                    </a>

                    {/* 3. Facebook Button */}
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-2 sm:px-3 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-semibold text-xs uppercase tracking-wider shadow-xs hover:shadow-md transition-all text-center"
                    >
                      <FacebookIcon className="w-4 h-4 text-white shrink-0" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours & Visiting Notice */}
            <div className="p-5 rounded-2xl bg-[#f4efe6] border border-[#e2e8f0] shadow-xs space-y-2 text-xs text-[#475569]">
              <div className="flex items-center gap-2 text-[#0c1b33] font-semibold">
                <Clock className="w-4 h-4 text-[#c5a059]" />
                <span>Visiting Hours & Schedule</span>
              </div>
              <p className="leading-relaxed">
                To guarantee uninterrupted, dedicated attention for examining specific watches or discussing style preferences, we recommend calling ahead at <strong>+39 0523 322357</strong> or submitting an appointment enquiry.
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Embed matching height and borders evenly */}
          <div className="flex flex-col h-full min-h-[460px] lg:min-h-full">
            <div className="rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-xs bg-[#f4efe6] relative flex-1 h-full min-h-[420px] lg:min-h-full">
              <iframe
                title="Google Maps Location of Orologeria Bertocchi F.Lli in Piacenza"
                src={mapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating map action banner */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 bg-[#0c1b33]/90 backdrop-blur-md text-white p-3.5 rounded-xl border border-white/20 shadow-lg flex items-center justify-between gap-4">
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Via Calzolai, 65f</div>
                  <div className="text-[11px] text-[#dfc181]">29121 Piacenza PC, Italy</div>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#c5a059] hover:bg-[#b38728] text-[#0c1b33] font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
                >
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER: Integral part of the Contact section */}
      <footer className="bg-[#0c1b33] text-white pt-14 pb-10 border-t border-[#c5a059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Brand column */}
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-wider text-white uppercase">
                  Orologeria Bertocchi
                </h3>
                <span className="text-xs font-semibold tracking-[0.25em] text-[#dfc181] uppercase block mt-0.5">
                  F.lli • Piacenza
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                An exclusive Italian watch boutique in Piacenza dedicated to the appreciation of timeless craftsmanship, personal style, and horological elegance.
              </p>
              <div className="text-xs text-slate-400">
                Customer Rating: 4.6 / 5 (30 Reviews)
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#dfc181]">
                Boutique Navigation
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
                    Hero Introduction
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
                    About Orologeria Bertocchi
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
                    Customer Trust (4.6★)
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
                Via Calzolai, 65f<br />
                29121 Piacenza PC<br />
                Emilia-Romagna, Italy
              </p>
              <div className="pt-1">
                <a
                  href="tel:+390523322357"
                  className="text-xs text-white hover:text-[#dfc181] font-semibold flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#dfc181]" />
                  <span>+39 0523 322357</span>
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
                Connect directly through our official social media and WhatsApp messaging channels.
              </p>

              <div className="flex items-center gap-3 pt-2">
                {/* 1. Official WhatsApp Button - Active */}
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Orologeria Bertocchi on official WhatsApp"
                  className="w-11 h-11 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all"
                  title="WhatsApp: +39 0523 322357"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </a>

                {/* 2. Official Instagram Profile Link - Active with EXACT URL */}
                <a
                  href={instagramProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Orologeria Bertocchi on official Instagram"
                  className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all"
                  title="Instagram: @orologi_f.lli_bertocchi"
                >
                  <InstagramIcon className="w-5 h-5 text-white" />
                </a>

                {/* 3. Official Facebook Page Link - Active */}
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Orologeria Bertocchi on Facebook"
                  className="w-11 h-11 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all"
                  title="Facebook: Orologeria Bertocchi Piacenza"
                >
                  <FacebookIcon className="w-5 h-5 text-white" />
                </a>

                {/* 4. Telephone Dial Button - Active */}
                <a
                  href="tel:+390523322357"
                  aria-label="Call Orologeria Bertocchi directly"
                  className="w-11 h-11 rounded-xl bg-[#162a4d] hover:bg-[#1f3763] border border-white/20 text-[#dfc181] flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all"
                  title="Telephone: +39 0523 322357"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom copyright notice */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>
              © {currentYear} Orologeria Bertocchi F.Lli. All rights reserved. Via Calzolai, 65f, 29121 Piacenza PC, Italy.
            </p>
            <p className="text-[11px] text-slate-500">
              Presented for horological appreciation & boutique inquiries.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};
