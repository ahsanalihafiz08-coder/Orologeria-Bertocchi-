import React from 'react';
import { X, Heart, Trash2, Calendar, Eye, ArrowRight } from 'lucide-react';
import { WatchCard } from '../types/watch';

interface FavouritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favouriteItems: WatchCard[];
  onRemoveFavourite: (id: string) => void;
  onClearFavourites: () => void;
  onViewDetails: (item: WatchCard) => void;
  onBookAppointment: (item: WatchCard) => void;
}

export const FavouritesDrawer: React.FC<FavouritesDrawerProps> = ({
  isOpen,
  onClose,
  favouriteItems,
  onRemoveFavourite,
  onClearFavourites,
  onViewDetails,
  onBookAppointment,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="fav-drawer-title"
      className="fixed inset-0 z-50 flex justify-end bg-[#0c1b33]/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md h-full bg-[#fcfbfa] shadow-2xl border-l border-[#e2e8f0] flex flex-col text-[#0c1b33]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#e2e8f0] bg-[#f8f5ee] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#c5a059] fill-[#c5a059]" />
            <h2 id="fav-drawer-title" className="font-serif text-lg font-bold text-[#0c1b33]">
              Saved Favourites ({favouriteItems.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close saved favourites"
            className="p-1.5 rounded-lg text-[#475569] hover:text-[#0c1b33] hover:bg-black/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4">
          {favouriteItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#f4efe6] flex items-center justify-center text-[#94a3b8]">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#0c1b33]">
                Your shortlist is empty
              </h3>
              <p className="text-xs text-[#475569] max-w-xs mx-auto">
                Click the heart icon on any of our 9 Portfolio timepieces or 36 Services cards to save them to your session.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between text-xs text-[#475569] pb-2 border-b border-[#e2e8f0]">
                <span>Saved to your browser storage</span>
                <button
                  onClick={onClearFavourites}
                  className="text-red-500 hover:text-red-700 flex items-center gap-1 font-medium"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear all
                </button>
              </div>

              <div className="space-y-3">
                {favouriteItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl bg-white border border-[#e2e8f0] shadow-xs flex gap-3 items-center group"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover border border-[#cbd5e1] shrink-0"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('fallback_watch')) {
                          target.src = '/assets/images/fallback_watch.jpg';
                        }
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-[#c5a059] block">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-sm font-bold text-[#0c1b33] truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#475569] truncate">
                        {item.priceTag || 'Price on enquiry'}
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => {
                            onClose();
                            onViewDetails(item);
                          }}
                          className="px-2 py-1 rounded bg-[#f4efe6] hover:bg-[#e8decb] text-[#0c1b33] text-[10px] font-semibold flex items-center gap-1"
                        >
                          <Eye className="w-3 h-3 text-[#c5a059]" />
                          Details
                        </button>
                        <button
                          onClick={() => {
                            onClose();
                            onBookAppointment(item);
                          }}
                          className="px-2 py-1 rounded bg-[#0c1b33] hover:bg-[#162a4d] text-white text-[10px] font-semibold flex items-center gap-1"
                        >
                          <Calendar className="w-3 h-3 text-[#c5a059]" />
                          Book
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveFavourite(item.id)}
                      aria-label={`Remove ${item.name} from favourites`}
                      className="p-1.5 text-[#94a3b8] hover:text-red-500 rounded-lg hover:bg-black/5 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#e2e8f0] bg-[#f8f5ee] flex items-center justify-between">
          <span className="text-xs text-[#475569]">Intemporel_geneve</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#0c1b33] hover:bg-[#162a4d] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
