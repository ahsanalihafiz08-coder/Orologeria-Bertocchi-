import React from 'react';
import { ArrowRight, Sparkles, MapPin, Compass } from 'lucide-react';

interface HeroSectionProps {
  onExplorePortfolio: () => void;
  onNavigateContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePortfolio,
  onNavigateContact,
}) => {
  const videoSrc =
    'https://res.cloudinary.com/o82tprxi/video/upload/v1792454527/Rolex_watch_assembling_and_rotating_20261020044132.mp4';

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative w-full aspect-16/9 min-h-[520px] max-h-[82vh] flex items-center justify-center overflow-hidden border-b border-[#e2e8f0] bg-[#0c1b33]"
    >
      {/* Background Video in Horizontal 16:9 format completely removing top and bottom blank spaces */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center pointer-events-none"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Editorial luxury dark navy & gold overlay for pristine contrast */}
        <div className="absolute inset-0 bg-linear-to-b from-[#0c1b33]/85 via-[#0c1b33]/70 to-[#0c1b33]/90" />
      </div>

      {/* Hero Content positioned seamlessly over horizontal 16:9 background video */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center">
        <div className="space-y-5 sm:space-y-6">
          {/* Boutique Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fcfbfa]/10 backdrop-blur-md border border-[#c5a059]/40 text-xs font-semibold tracking-widest text-[#dfc181] uppercase shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Orologeria Bertocchi F.Lli • Piacenza, Italy</span>
          </div>

          {/* Hero Headline */}
          <div className="space-y-2.5">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] drop-shadow-md">
              TIMELESS CRAFTSMANSHIP.{' '}
              <span className="block italic text-[#dfc181] font-normal mt-1">
                ITALIAN ELEGANCE.
              </span>
            </h1>
            <p className="text-xs sm:text-base lg:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-snug sm:leading-relaxed drop-shadow-sm px-2 sm:px-0">
              Discover fine timepieces, refined style, and timeless watchmaking inspiration.
            </p>
          </div>

          {/* Action Buttons: Horizontal and compact on both mobile and desktop */}
          <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 pt-1 max-w-md mx-auto w-full px-2 sm:px-0">
            <button
              onClick={onExplorePortfolio}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-[#c5a059] hover:bg-[#b58f48] text-[#0c1b33] font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer whitespace-nowrap"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0c1b33] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onNavigateContact}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-[11px] sm:text-xs uppercase tracking-wider border border-white/30 hover:border-[#c5a059] backdrop-blur-md transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <span>Contact Us</span>
            </button>
          </div>

          {/* Location & Heritage Note (No ratings line, clean and elegant) */}
          <div className="pt-4 sm:pt-6 border-t border-white/15 max-w-xl mx-auto flex items-center justify-center gap-6 sm:gap-10 text-slate-300 text-xs">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#c5a059]" />
              <span>Via Calzolai, 65f — Piacenza</span>
            </div>
            <div className="h-3 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#c5a059]" />
              <span>Haute Horlogerie Showcase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
