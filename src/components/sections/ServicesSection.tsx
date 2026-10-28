import React, { useState } from 'react';
import { Heart, Eye, Calendar, Tag, Filter, ShoppingBag } from 'lucide-react';
import { WatchCard } from '../../types/watch';
import { SERVICES_CATEGORIES } from '../../data/servicesData';

interface ServicesSectionProps {
  cards: WatchCard[];
  favouriteIds: Set<string>;
  onToggleFavourite: (id: string, e: React.MouseEvent) => void;
  onViewDetails: (card: WatchCard) => void;
  onBookingView: (card: WatchCard) => void;
  onAddToCart: (card: WatchCard, e: React.MouseEvent) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  cards,
  favouriteIds,
  onToggleFavourite,
  onViewDetails,
  onBookingView,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredCards =
    selectedCategory === 'All'
      ? cards
      : cards.filter((c) => c.category === selectedCategory);

  return (
    <section
      id="services"
      aria-label="Services & Watch Categories"
      className="py-16 lg:py-24 bg-[#fcfbfa] border-b border-[#e2e8f0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4efe6] border border-[#e2e8f0] text-xs font-semibold tracking-widest text-[#9e7a35] uppercase">
            <span>Boutique Catalog & Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c1b33]">
            Watch Collections & Inquiry Topics
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Browse our 36 distinct watch categories, style consultation topics, and gift ideas. Select any topic to view detailed information or request an appointment in Geneva.
          </p>
          <div className="w-16 h-0.5 bg-[#c5a059] mx-auto mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          <div className="flex items-center gap-1.5 mr-2 text-xs font-semibold text-[#475569] uppercase tracking-wider hidden sm:flex">
            <Filter className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Filter:</span>
          </div>
          {SERVICES_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const count =
              cat === 'All'
                ? cards.length
                : cards.filter((c) => c.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#0c1b33] text-white border-[#0c1b33] shadow-md'
                    : 'bg-white text-[#475569] border-[#e2e8f0] hover:border-[#c5a059] hover:bg-[#f4efe6]'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] ${
                    isActive
                      ? 'bg-[#c5a059] text-[#0c1b33]'
                      : 'bg-[#f4efe6] text-[#475569]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 36 Cards Grid: Strictly 3 cards per row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 sm:gap-8">
          {filteredCards.map((card) => {
            const isFavourited = favouriteIds.has(card.id);

            return (
              <div
                key={card.id}
                className="group flex flex-col bg-[#fcfbfa] rounded-2xl border border-[#e2e8f0] hover:border-[#c5a059]/50 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Image Container with Price on the left side: Aspect ratio optimized for desktop compactness */}
                <div className="relative aspect-4/3 md:aspect-16/10 lg:aspect-16/10 overflow-hidden bg-[#f4efe6]">
                  <img
                    src={card.image}
                    alt={card.name}
                    referrerPolicy="no-referrer"
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

                  {/* Price Tag mentioned on the left side */}
                  <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-[#0c1b33]/90 backdrop-blur-md border border-white/20 text-white text-[10.5px] font-medium tracking-wide flex items-center gap-1 shadow-sm">
                    <Tag className="w-3 h-3 text-[#c5a059]" />
                    <span>{card.priceTag || '€14,800'}</span>
                  </div>

                  {/* Heart icon in the upper-right corner */}
                  <button
                    onClick={(e) => onToggleFavourite(card.id, e)}
                    aria-label={isFavourited ? `Remove ${card.name} from favourites` : `Save ${card.name} to favourites`}
                    className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all shadow-md cursor-pointer ${
                      isFavourited
                        ? 'bg-[#c5a059] text-white hover:bg-[#9e7a35]'
                        : 'bg-[#0c1b33]/60 text-white hover:bg-[#0c1b33]/80 hover:text-[#c5a059]'
                    }`}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${isFavourited ? 'fill-current' : ''}`}
                    />
                  </button>

                  {/* Subtle category badge at bottom of image */}
                  <div className="absolute inset-x-0 bottom-0 p-2.5 bg-linear-to-t from-[#0c1b33]/80 to-transparent">
                    <span className="text-[9.5px] font-bold uppercase tracking-widest text-[#dfc181]">
                      {card.category}
                    </span>
                  </div>
                </div>

                {/* Card Content: Compact vertical length for sleek desktop presentation */}
                <div className="p-4 sm:p-5 lg:p-4.5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-serif text-base sm:text-lg lg:text-[17px] font-bold text-[#0c1b33] group-hover:text-[#c5a059] transition-colors leading-snug line-clamp-1 sm:line-clamp-2">
                      {card.name}
                    </h3>
                    {card.subtitle && (
                      <p className="text-[10.5px] font-semibold uppercase tracking-wider text-[#9e7a35] truncate">
                        {card.subtitle}
                      </p>
                    )}
                    <p className="text-xs text-[#475569] leading-relaxed line-clamp-2 pt-0.5">
                      {card.shortDetails}
                    </p>
                  </div>

                  {/* Price on the left side + Only View Details & Booking View buttons with perfect desktop text fitting */}
                  <div className="space-y-2.5 pt-2.5 border-t border-[#e2e8f0]/80">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-[#0c1b33]">
                        <Tag className="w-3.5 h-3.5 text-[#c5a059]" />
                        <span>{card.priceTag || '€14,800'}</span>
                      </div>
                      <span className="text-[10px] uppercase font-semibold text-[#94a3b8]">
                        Intemporel Curation
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onViewDetails(card)}
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-1.5 sm:px-2.5 rounded-lg border border-[#e2e8f0] bg-white hover:bg-[#f4efe6] text-[#0c1b33] text-[11px] sm:text-xs font-semibold uppercase tracking-wide transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        <span className="truncate">View Details</span>
                      </button>

                      <button
                        onClick={() => onBookingView(card)}
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-1.5 sm:px-2.5 rounded-lg bg-[#0c1b33] hover:bg-[#162a4d] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wide transition-colors shadow-xs cursor-pointer whitespace-nowrap"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        <span className="truncate">Booking View</span>
                      </button>
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
