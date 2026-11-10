import React from 'react';
import { Heart, Eye, Sparkles, Tag } from 'lucide-react';
import { WatchCard } from '../../types/watch';
import { handleImageError, resolveLocalImagePath } from '../../utils/imageUtils';
import { WhatsAppIcon } from '../icons/BrandIcons';

interface PortfolioSectionProps {
  cards: WatchCard[];
  favouriteIds: Set<string>;
  onToggleFavourite: (id: string, e: React.MouseEvent) => void;
  onViewDetails: (card: WatchCard) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  cards,
  favouriteIds,
  onToggleFavourite,
  onViewDetails,
}) => {
  return (
    <section
      id="portfolio"
      aria-label="Portfolio Collection"
      className="py-16 lg:py-24 bg-[#faf8f5] border-b border-[#e2e8f0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4efe6] border border-[#e2e8f0] text-xs font-semibold tracking-widest text-[#9e7a35] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Curated Timepieces</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c1b33]">
            Featured Portfolio
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Nine curated horological categories illustrating the artistry, mechanics, and graceful variety of luxury timepieces.
          </p>
          <div className="w-16 h-0.5 bg-[#c5a059] mx-auto mt-4" />
        </div>

        {/* 9 Cards Grid: Strictly 3 cards per row instead of 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => {
            const isFavourited = favouriteIds.has(card.id);

            return (
              <div
                key={card.id}
                className="group flex flex-col bg-[#fcfbfa] rounded-2xl border border-[#e2e8f0] hover:border-[#c5a059]/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => onViewDetails(card)}
              >
                {/* Image Container with Price & Title Overlay */}
                <div className="relative aspect-4/3 overflow-hidden bg-[#f4efe6]">
                  <img
                    src={resolveLocalImagePath(card.image)}
                    alt={card.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                    onError={handleImageError}
                  />

                  {/* Price Tag Mentioned on Image */}
                  <div className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full bg-[#0c1b33]/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium tracking-wide flex items-center gap-1 shadow-sm">
                    <Tag className="w-3 h-3 text-[#c5a059]" />
                    <span>{card.priceTag}</span>
                  </div>

                  {/* Heart (Wishlist) Option on Top Right Side */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavourite(card.id, e);
                    }}
                    aria-label={
                      isFavourited
                        ? `Remove ${card.name} from wishlist`
                        : `Save ${card.name} to wishlist`
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

                  {/* Collection/Brand name tasteful overlay on the image */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-[#0c1b33]/90 via-[#0c1b33]/40 to-transparent">
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-[#dfc181] block">
                      {card.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                      {card.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body: Clean presentation with price clearly mentioned */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {card.subtitle && (
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#9e7a35]">
                        {card.subtitle}
                      </p>
                    )}
                    <p className="text-sm text-[#475569] leading-relaxed line-clamp-3">
                      {card.shortDetails}
                    </p>
                  </div>

                  {/* Price Mentioned in Body + View Details trigger */}
                  <div className="space-y-3 pt-3 border-t border-[#e2e8f0]">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-[#0c1b33]">
                        <Tag className="w-3.5 h-3.5 text-[#c5a059]" />
                        <span>{card.priceTag}</span>
                      </div>
                      <span className="text-[10px] uppercase font-semibold text-[#94a3b8]">
                        Manufacture Breguet
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onViewDetails(card);
                        }}
                        className="inline-flex items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-2.5 px-1.5 sm:px-2 rounded-xl border border-[#e2e8f0] bg-white hover:bg-[#f4efe6] text-[#0c1b33] text-[10px] sm:text-[11px] lg:text-[10px] xl:text-[11px] font-semibold uppercase tracking-tight sm:tracking-normal transition-colors cursor-pointer text-center leading-tight whitespace-nowrap min-w-0"
                      >
                        <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#c5a059] shrink-0" />
                        <span className="truncate">View Details</span>
                      </button>

                      <a
                        href={`https://wa.me/13108674286?text=${encodeURIComponent(`Hello Rodeo Watch & Jewelry, I would like to inquire about: ${card.name} (${card.category}).`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-2.5 px-1.5 sm:px-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-[10px] sm:text-[11px] lg:text-[10px] xl:text-[11px] font-semibold uppercase tracking-tight sm:tracking-normal transition-colors shadow-xs text-center leading-tight whitespace-nowrap min-w-0"
                      >
                        <WhatsAppIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white shrink-0" />
                        <span className="truncate">Inquire via WhatsApp</span>
                      </a>
                    </div>
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
