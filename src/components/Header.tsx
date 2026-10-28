import React, { useState, useEffect } from 'react';
import { Phone, Heart, Menu, X, MapPin, ChevronRight, Compass } from 'lucide-react';

interface HeaderProps {
  favouritesCount: number;
  onOpenFavourites: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  favouritesCount,
  onOpenFavourites,
  onNavigateSection,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear when the user scrolls down the website
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Hero Overview', href: '#hero', sectionId: 'hero' },
    { label: 'Brand Showcase', href: '#brands', sectionId: 'brands' },
    { label: '48-Card Motion Gallery', href: '#gallery48', sectionId: 'gallery48' },
    { label: 'Breguet Portfolio (9 Cards)', href: '#portfolio', sectionId: 'portfolio' },
    { label: 'Services (36 Cards)', href: '#services', sectionId: 'services' },
    { label: '22-Card Master Showcase', href: '#showcase22', sectionId: 'showcase22' },
    { label: 'Client Reviews', href: '#testimonials', sectionId: 'testimonials' },
    { label: 'Contact & Location', href: '#contact', sectionId: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#fcfbfa]/95 backdrop-blur-md border-b border-[#e2e8f0]/80 shadow-xs py-2 sm:py-2.5'
            : 'bg-transparent border-none shadow-none py-2.5 sm:py-3.5'
        }`}
      >
        {/* Compact main navigation container in a single unified line */}
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11 sm:h-12 gap-2">
            {/* Left side: Top corner logo kept on left side and made slightly larger */}
            <div className="flex items-center min-w-0 shrink">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('hero');
                }}
                className="group flex items-center select-none min-w-0"
              >
                <span
                  className={`font-serif text-[15px] sm:text-base md:text-lg lg:text-[19px] font-bold tracking-wide uppercase transition-colors whitespace-nowrap ${
                    isScrolled ? 'text-[#0c1b33]' : 'text-white drop-shadow-md'
                  }`}
                >
                  Intemporel_geneve
                </span>
              </a>
            </div>

            {/* Right side: Exactly 3 header icons (phone, heart, three lines) aligned with non-overlapping spacing */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 ml-auto">
              {/* 1. Phone Call Icon */}
              <a
                href="tel:+41799660156"
                aria-label="Call +41 79 966 01 56"
                title="Call Boutique: +41 79 966 01 56"
                className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border transition-all shadow-2xs shrink-0 ${
                  isScrolled
                    ? 'border-[#e2e8f0] bg-white hover:bg-[#f4efe6] text-[#0c1b33] hover:text-[#c5a059] hover:border-[#c5a059]'
                    : 'border-white/30 bg-white/90 hover:bg-white text-[#0c1b33] hover:text-[#c5a059]'
                }`}
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c5a059]" />
              </a>

              {/* 2. Wishlist Heart Option */}
              <button
                onClick={onOpenFavourites}
                aria-label={`View wishlist (${favouritesCount})`}
                title="Wishlist Favourites"
                className={`relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border transition-all shadow-2xs cursor-pointer shrink-0 ${
                  isScrolled
                    ? 'border-[#e2e8f0] bg-white hover:bg-[#f4efe6] text-[#0c1b33] hover:border-[#c5a059]'
                    : 'border-white/30 bg-white/90 hover:bg-white text-[#0c1b33]'
                }`}
              >
                <Heart
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                    favouritesCount > 0
                      ? 'text-[#c5a059] fill-[#c5a059]'
                      : 'text-[#475569]'
                  }`}
                />
                {favouritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#0c1b33] text-[#c5a059] text-[8px] sm:text-[9px] font-bold flex items-center justify-center border border-white">
                    {favouritesCount}
                  </span>
                )}
              </button>

              {/* 3. Three-Line Menu: Stays in default state, turns brown in color ONLY when clicked by the user */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open boutique navigation menu"
                title="Menu"
                className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full transition-all shadow-2xs cursor-pointer border shrink-0 ${
                  menuOpen
                    ? 'bg-[#fef3c7] text-[#78350f] border-[#78350f] ring-2 ring-[#78350f]/30 shadow-md'
                    : isScrolled
                    ? 'bg-white hover:bg-[#f4efe6] text-[#0c1b33] border-[#e2e8f0] hover:border-[#c5a059]'
                    : 'bg-white/90 hover:bg-white text-[#0c1b33] border-white/30'
                }`}
              >
                <Menu
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${menuOpen ? 'text-[#78350f]' : 'text-[#0c1b33]'}`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Modal / Drawer opened by the Three-Line Menu */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation Menu"
          className="fixed inset-0 z-50 flex justify-end bg-[#0c1b33]/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm sm:max-w-md h-full bg-[#fcfbfa] shadow-2xl border-l border-[#e2e8f0] flex flex-col text-[#0c1b33]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-[#e2e8f0] bg-[#f8f5ee] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#c5a059] block">
                  Boutique Navigation
                </span>
                <h3 className="font-serif text-lg font-bold text-[#0c1b33]">
                  Intemporel_geneve
                </h3>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 rounded-full text-[#475569] hover:text-[#0c1b33] hover:bg-black/5 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links List */}
            <div className="flex-1 p-5 overflow-y-auto space-y-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.sectionId)}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl hover:bg-[#f4efe6] text-left transition-colors group cursor-pointer"
                >
                  <span className="font-serif text-sm sm:text-base font-semibold text-[#0c1b33] group-hover:text-[#c5a059] transition-colors">
                    {link.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#cbd5e1] group-hover:text-[#c5a059] group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>

            {/* Drawer Footer */}
            <div className="p-5 border-t border-[#e2e8f0] bg-[#f8f5ee] space-y-3">
              <a
                href="tel:+41799660156"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0c1b33] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#162a4d] transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Call +41 79 966 01 56</span>
              </a>
              <p className="text-[11px] text-[#475569] text-center">
                Route des Jeunes 4bis, Geneva, Switzerland, 1227
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
