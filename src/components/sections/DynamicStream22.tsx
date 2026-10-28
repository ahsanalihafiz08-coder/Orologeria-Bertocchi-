import React, { useState } from 'react';
import { Heart, Award, ArrowUpRight } from 'lucide-react';
import { WatchCard } from '../../types/watch';
import { BRAND_WATCHES_DATA } from '../../data/brandWatchesData';
import { getLuxuryWatchPlaceholder } from '../../utils/imageFallback';

interface DynamicStream22Props {
  favouriteIds: Set<string>;
  onToggleFavourite: (id: string, e: React.MouseEvent) => void;
  onViewDetails: (card: WatchCard) => void;
}

export const DynamicStream22: React.FC<DynamicStream22Props> = ({
  favouriteIds,
  onToggleFavourite,
  onViewDetails,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  // Compile exactly 22 cards: 10 Audemars Piguet + 6 Cartier + 6 Tudor
  const cards22: WatchCard[] = [
    ...BRAND_WATCHES_DATA.audemars_piguet.watches, // 10
    ...BRAND_WATCHES_DATA.cartier.watches.slice(0, 6), // 6
    ...BRAND_WATCHES_DATA.tudor.watches.slice(0, 6), // 6 -> Total 22
  ];

  return (
    <section
      aria-label="22-Card Luxury Horology Dynamic Stream"
      className="py-14 lg:py-20 bg-[#faf8f5] border-b border-[#e2e8f0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4efe6] border border-[#e2e8f0] text-[11px] font-semibold tracking-widest text-[#9e7a35] uppercase">
            <Award className="w-3 h-3 text-[#c5a059]" />
            <span>Pre-Review Horological Showcase</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c1b33]">
            Curated 22-Timepiece Master Showcase
          </h2>
          <p className="text-xs sm:text-sm text-[#475569]">
            Featuring 22 iconic selections from Audemars Piguet, Cartier, and Tudor.
          </p>
        </div>

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-xl bg-white hover:bg-[#f4efe6] border border-[#cbd5e1] text-[#0c1b33] transition-colors"
        >
          {isPaused ? 'Resume Carousel' : 'Pause Carousel'}
        </button>
      </div>

      {/* Smooth Continuous Marquee Animation */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex gap-6 ${isPaused ? '' : 'animate-stream-continuous'}`}
          style={{ width: 'max-content' }}
        >
          {cards22.concat(cards22).map((card, idx) => {
            const isFavourited = favouriteIds.has(card.id);

            return (
              <div
                key={`stream22-${card.id}-${idx}`}
                onClick={() => onViewDetails(card)}
                className="w-[215px] sm:w-[310px] shrink-0 bg-[#fcfbfa] rounded-2xl border border-[#e2e8f0] hover:border-[#c5a059] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group select-none cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[150px] sm:h-[210px] overflow-hidden bg-[#f4efe6]">
                  <img
                    src={card.image}
                    alt={card.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.startsWith('data:image/svg+xml')) {
                        target.src = getLuxuryWatchPlaceholder(card.name);
                      }
                    }}
                  />

                  {/* Top-right heart (wishlist) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavourite(card.id, e);
                    }}
                    aria-label={isFavourited ? 'Remove favourite' : 'Save favourite'}
                    className={`absolute top-2.5 right-2.5 z-10 p-1.5 sm:p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                      isFavourited
                        ? 'bg-[#c5a059] text-white shadow-md'
                        : 'bg-[#0c1b33]/65 text-white hover:bg-[#0c1b33]'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isFavourited ? 'fill-current' : ''}`} />
                  </button>

                  {/* Price Tag mentioned */}
                  <div className="absolute top-2.5 left-2.5 z-10 px-2 sm:px-2.5 py-0.5 rounded-full bg-[#0c1b33]/85 text-white text-[10px] sm:text-[11px] font-medium tracking-wide border border-white/10 shadow-xs">
                    {card.priceTag || '€22,500'}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-3 bg-linear-to-t from-[#0c1b33]/90 to-transparent">
                    <h4 className="font-serif text-sm font-bold text-white truncate">
                      {card.name}
                    </h4>
                  </div>
                </div>

                {/* Card Content without external action buttons */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2.5">
                  <p className="text-xs text-[#475569] line-clamp-2 h-9 leading-relaxed">
                    {card.shortDetails}
                  </p>

                  {/* Evenly aligned, properly fitted yellow description text line across all cards */}
                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#e2e8f0] text-[10px] sm:text-[11px] h-7">
                    <span
                      className="text-[#9e7a35] font-semibold uppercase tracking-wider truncate flex-1 min-w-0"
                      title={card.subtitle || 'Exclusive Collection'}
                    >
                      {card.subtitle || 'Exclusive Collection'}
                    </span>
                    <span className="text-[#c5a059] font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0 whitespace-nowrap">
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059]" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
