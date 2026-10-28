import React, { useState } from 'react';
import { Heart, Eye, Calendar, X, ChevronDown, ChevronUp } from 'lucide-react';
import { BRAND_WATCHES_DATA, BRAND_LIST } from '../../data/brandWatchesData';
import { WatchCard } from '../../types/watch';
import {
  RolexLogo,
  PatekLogo,
  AudemarsLogo,
  CartierLogo,
  TudorLogo,
  OmegaLogo,
  BreguetLogo,
  VacheronLogo,
} from '../icons/BrandIcons';

const BRAND_LOGO_ICONS: Record<string, React.FC<{ className?: string }>> = {
  rolex: RolexLogo,
  patek_philippe: PatekLogo,
  audemars_piguet: AudemarsLogo,
  cartier: CartierLogo,
  tudor: TudorLogo,
  omega: OmegaLogo,
  breguet: BreguetLogo,
  vacheron_constantin: VacheronLogo,
};

interface BrandLogosSectionProps {
  favouriteIds: Set<string>;
  onToggleFavourite: (id: string, e: React.MouseEvent) => void;
  onViewDetails: (card: WatchCard) => void;
  onBookingView: (card: WatchCard) => void;
}

export const BrandLogosSection: React.FC<BrandLogosSectionProps> = ({
  favouriteIds,
  onToggleFavourite,
  onViewDetails,
  onBookingView,
}) => {
  // Brand categories and pictures remain hidden until clicked
  const [activeBrandId, setActiveBrandId] = useState<string | null>(null);

  const selectedBrand = activeBrandId ? BRAND_WATCHES_DATA[activeBrandId] : null;

  const handleBrandClick = (brandId: string) => {
    setActiveBrandId((prev) => (prev === brandId ? null : brandId));
  };

  return (
    <section
      id="brands"
      aria-label="Luxury Brand Showcase"
      className="py-14 lg:py-20 bg-[#faf8f5] border-b border-[#e2e8f0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading: Choose your favourite brand name */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4efe6] border border-[#e2e8f0] text-[11px] font-semibold tracking-widest text-[#9e7a35] uppercase">
            <span>Prestigious Watchmakers</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0c1b33]">
            Choose your favourite brand name
          </h2>
          <p className="text-xs sm:text-sm text-[#475569]">
            Click any brand below to reveal its respective timepiece collection and technical specifications.
          </p>
        </div>

        {/* Clean Stylish Brand Logos Showcase: 2 rows of 4 in mobile, 1 row of 8 in desktop */}
        <div className="bg-[#fcfbfa] p-3 sm:p-5 lg:p-6 rounded-2xl border border-[#cbd5e1] shadow-xs">
          <div
            role="tablist"
            aria-label="Luxury Brand Selection"
            className="grid grid-cols-4 md:grid-cols-8 gap-2 sm:gap-3 lg:gap-4 items-start"
          >
            {BRAND_LIST.map((brand) => {
              const isSelected = activeBrandId === brand.id;
              const LogoIcon = BRAND_LOGO_ICONS[brand.id];

              return (
                <button
                  key={brand.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleBrandClick(brand.id)}
                  className="group py-2 sm:py-2.5 px-1 rounded-2xl transition-all duration-300 flex flex-col items-center justify-start text-center cursor-pointer focus:outline-hidden"
                >
                  {/* Clean, stylish rounded brand logo medallion */}
                  <div
                    className={`w-13 h-13 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center p-2.5 sm:p-3.5 transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#0c1b33] text-[#dfc181] border-2 border-[#c5a059] shadow-lg ring-4 ring-[#c5a059]/25 scale-105'
                        : 'bg-white text-[#0c1b33] border-2 border-[#e2e8f0] shadow-xs group-hover:border-[#c5a059] group-hover:text-[#c5a059] group-hover:shadow-md group-hover:scale-105'
                    }`}
                  >
                    {LogoIcon && (
                      <LogoIcon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 transition-transform duration-300 group-hover:scale-110" />
                    )}
                  </div>

                  {/* Brand Name Slot: Fixed height container ensures all brand names share identical vertical center and alignment */}
                  <div className="w-full h-8 sm:h-9 flex items-center justify-center text-center px-0.5 mt-2 sm:mt-2.5">
                    <span
                      className={`font-serif text-[10.5px] sm:text-xs lg:text-[13px] font-bold tracking-wider uppercase transition-colors text-center leading-tight line-clamp-2 ${
                        isSelected ? 'text-[#c5a059]' : 'text-[#0c1b33] group-hover:text-[#c5a059]'
                      }`}
                    >
                      {brand.name}
                    </span>
                  </div>

                  {/* Subtitle Badge & Chevron: Evenly aligned baseline across all 8 brands */}
                  <div
                    className={`mt-1 inline-flex items-center justify-center gap-1 px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold transition-all ${
                      isSelected
                        ? 'bg-[#0c1b33] text-[#dfc181] border border-[#c5a059]/40 shadow-2xs'
                        : 'bg-[#f4efe6]/80 group-hover:bg-[#f4efe6] text-[#64748b] group-hover:text-[#9e7a35] border border-[#e2e8f0]'
                    }`}
                  >
                    <span className="truncate">{brand.subtitle}</span>
                    {isSelected ? (
                      <ChevronUp className="w-2.5 h-2.5 text-[#c5a059] shrink-0" />
                    ) : (
                      <ChevronDown className="w-2.5 h-2.5 text-[#94a3b8] group-hover:text-[#c5a059] shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories and respective pictures: Activated only upon click */}
        {selectedBrand && (
          <div className="mt-10 animate-fade-in space-y-8">
            {/* Expanded Brand Header Banner */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-[#e2e8f0] shadow-xs">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#c5a059]">
                    {selectedBrand.origin}
                  </span>
                  <span className="text-xs text-[#94a3b8]">•</span>
                  <span className="text-xs text-[#475569]">
                    {selectedBrand.watches.length} Curated Models
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0c1b33]">
                  {selectedBrand.name} Collection
                </h3>
                <p className="text-xs text-[#475569] italic mt-0.5">
                  "{selectedBrand.tagline}"
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveBrandId(null)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0c1b33] hover:bg-[#162a4d] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Hide Collection</span>
                </button>
              </div>
            </div>

            {/* Desktop Grid: Strictly 3 cards per horizontal row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
              {selectedBrand.watches.map((card) => {
                const isFavourited = favouriteIds.has(card.id);

                return (
                  <div
                    key={card.id}
                    className="group flex flex-col bg-[#fcfbfa] rounded-2xl border border-[#e2e8f0] hover:border-[#c5a059]/60 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Watch Image */}
                    <div className="relative aspect-4/3 overflow-hidden bg-[#f4efe6]">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          const t = e.currentTarget;
                          if (t.src.includes('i.ibb.co/')) {
                            const p = t.src.split('i.ibb.co/')[1];
                            if (p) t.src = '/assets/images/' + p.replace('/', '_');
                          }
                        }}
                      />

                      {/* Wishlist toggle */}
                      <button
                        onClick={(e) => onToggleFavourite(card.id, e)}
                        aria-label={
                          isFavourited
                            ? `Remove ${card.name} from wishlist`
                            : `Add ${card.name} to wishlist`
                        }
                        className={`absolute top-3.5 right-3.5 z-10 p-2.5 rounded-full backdrop-blur-md transition-all shadow-md cursor-pointer ${
                          isFavourited
                            ? 'bg-[#c5a059] text-white hover:bg-[#9e7a35]'
                            : 'bg-[#0c1b33]/65 text-white hover:bg-[#0c1b33]/85 hover:text-[#c5a059]'
                        }`}
                      >
                        <Heart
                          className={`w-4 h-4 ${isFavourited ? 'fill-current' : ''}`}
                        />
                      </button>

                      {/* Price tag */}
                      <div className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full bg-[#0c1b33]/85 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium tracking-wide">
                        {card.priceTag || 'Price on enquiry'}
                      </div>

                      {/* Brand & Model overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-[#0c1b33]/90 via-[#0c1b33]/40 to-transparent">
                        <span className="text-[10px] uppercase tracking-widest font-semibold text-[#dfc181] block">
                          {selectedBrand.name}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-white tracking-wide truncate">
                          {card.name}
                        </h4>
                      </div>
                    </div>

                    {/* Card Body & Action Buttons */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-1.5">
                        {card.subtitle && (
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9e7a35]">
                            {card.subtitle}
                          </p>
                        )}
                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3">
                          {card.shortDetails}
                        </p>
                      </div>

                      {/* View Details & Booking View */}
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#e2e8f0]">
                        <button
                          onClick={() => onViewDetails(card)}
                          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg border border-[#e2e8f0] bg-white hover:bg-[#f4efe6] text-[#0c1b33] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#c5a059]" />
                          <span>View Details</span>
                        </button>

                        <button
                          onClick={() => onBookingView(card)}
                          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#0c1b33] hover:bg-[#162a4d] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
                        >
                          <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                          <span>Booking View</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
