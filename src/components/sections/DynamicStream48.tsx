import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { WatchCard } from '../../types/watch';
import { BRAND_WATCHES_DATA } from '../../data/brandWatchesData';
import { getLuxuryWatchPlaceholder } from '../../utils/imageFallback';

interface DynamicStream48Props {
  favouriteIds: Set<string>;
  onToggleFavourite: (id: string, e: React.MouseEvent) => void;
  onViewDetails: (card: WatchCard) => void;
}

export const DynamicStream48: React.FC<DynamicStream48Props> = ({
  favouriteIds,
  onToggleFavourite,
  onViewDetails,
}) => {
  // Exactly 48 distinct cards from Rolex (10), Patek (10), Audemars (10), Cartier (10), and Tudor (8)
  const all48Cards: WatchCard[] = [
    ...BRAND_WATCHES_DATA.rolex.watches, // 10
    ...BRAND_WATCHES_DATA.patek_philippe.watches, // 10
    ...BRAND_WATCHES_DATA.audemars_piguet.watches, // 10
    ...BRAND_WATCHES_DATA.cartier.watches, // 10
    ...BRAND_WATCHES_DATA.tudor.watches.slice(0, 8), // 8 -> 48 total
  ];

  // Split into 2 rows with exactly 24 cards on top and 24 cards on the bottom
  const rowTop = all48Cards.slice(0, 24);
  const rowBottom = all48Cards.slice(24, 48);

  const renderCard = (card: WatchCard, prefix: string) => {
    const isFavourited = favouriteIds.has(card.id);

    return (
      <div
        key={`${prefix}-${card.id}`}
        onClick={() => onViewDetails(card)}
        className="w-[200px] sm:w-[310px] lg:w-[340px] shrink-0 bg-[#fcfbfa] rounded-2xl border border-[#e2e8f0] hover:border-[#c5a059] shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group select-none cursor-pointer"
      >
        {/* Watch Image */}
        <div className="relative h-[160px] sm:h-[240px] overflow-hidden bg-[#f4efe6]">
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

          {/* Price Tag mentioned clearly */}
          <div className="absolute top-2.5 left-2.5 z-10 px-2 sm:px-2.5 py-0.5 rounded-full bg-[#0c1b33]/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium tracking-wide border border-white/10 shadow-xs">
            {card.priceTag || '€19,500'}
          </div>

          {/* Heart (wishlist) icon on the right side */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavourite(card.id, e);
            }}
            aria-label={isFavourited ? `Remove ${card.name} from wishlist` : `Add ${card.name} to wishlist`}
            className={`absolute top-2.5 right-2.5 z-10 p-1.5 sm:p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
              isFavourited
                ? 'bg-[#c5a059] text-white shadow-md'
                : 'bg-[#0c1b33]/65 text-white hover:bg-[#0c1b33]/90 hover:text-[#c5a059]'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isFavourited ? 'fill-current' : ''}`} />
          </button>

          {/* Name overlay */}
          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-linear-to-t from-[#0c1b33]/90 via-[#0c1b33]/45 to-transparent">
            <h4 className="font-serif text-sm sm:text-base lg:text-lg font-bold text-white truncate">
              {card.name}
            </h4>
            {card.subtitle && (
              <p className="text-[10px] sm:text-xs text-[#dfc181] truncate font-medium mt-0.5">
                {card.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="gallery48"
      aria-label="48-Card Dynamic Horology Stream"
      className="py-16 lg:py-24 bg-[#f8f5ee] border-b border-[#e2e8f0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e2e8f0] text-xs font-semibold tracking-widest text-[#9e7a35] uppercase mb-2.5 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>Haute Horlogerie Dual-Motion Stream</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0c1b33]">
          48-Card Dynamic Horology Stream
        </h2>
        <p className="text-sm text-[#475569] mt-1 max-w-2xl">
          Top 24 timepieces glide right, bottom 24 timepieces glide left. Click any watch card to inspect detailed manufacture specifications.
        </p>
      </div>

      {/* 2 Rows: 24 Cards on Top (glides right) and 24 Cards on Bottom (glides left) */}
      <div className="space-y-6 sm:space-y-8">
        {/* Row 1: Top 24 Cards - Continuous Glide Towards RIGHT */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-6 animate-stream-right"
            style={{ width: 'max-content' }}
          >
            {rowTop.concat(rowTop).map((card, idx) =>
              renderCard(card, `top-${idx}`)
            )}
          </div>
        </div>

        {/* Row 2: Bottom 24 Cards - Continuous Glide Towards LEFT */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-6 animate-stream-left"
            style={{ width: 'max-content' }}
          >
            {rowBottom.concat(rowBottom).map((card, idx) =>
              renderCard(card, `bottom-${idx}`)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
