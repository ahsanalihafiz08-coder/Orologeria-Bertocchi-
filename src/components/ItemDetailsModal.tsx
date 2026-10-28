import React, { useEffect } from 'react';
import { X, Phone, Calendar, Check, ShieldCheck, Heart, Tag } from 'lucide-react';
import { WatchCard } from '../types/watch';
import { WhatsAppIcon } from './icons/BrandIcons';
import { getLuxuryWatchPlaceholder } from '../utils/imageFallback';

interface ItemDetailsModalProps {
  item: WatchCard | null;
  onClose: () => void;
  onBookAppointment: (item: WatchCard) => void;
  onAddToCart?: (item: WatchCard) => void;
  isFavourited?: boolean;
  onToggleFavourite?: (id: string) => void;
}

export const ItemDetailsModal: React.FC<ItemDetailsModalProps> = ({
  item,
  onClose,
  onBookAppointment,
  onAddToCart,
  isFavourited = false,
  onToggleFavourite,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const prefilledWhatsAppText = encodeURIComponent(
    `Bonjour Intemporel_geneve, je souhaite recevoir des informations et détails sur: ${item.name} (${item.category}).`
  );
  const whatsAppUrl = `https://wa.me/41799660156?text=${prefilledWhatsAppText}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-item-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0c1b33]/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl lg:max-w-4xl my-auto bg-[#fcfbfa] rounded-2xl shadow-2xl border border-[#e2e8f0] overflow-hidden text-[#0c1b33] flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2e8f0] bg-[#f8f5ee]/90">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded bg-[#c5a059]/15 text-[#9e7a35] border border-[#c5a059]/30">
              {item.category}
            </span>
            <span className="text-xs text-[#475569] font-medium hidden sm:inline">
              Intemporel_geneve • Geneva
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Wishlist Heart Option inside Modal */}
            {onToggleFavourite && (
              <button
                onClick={() => onToggleFavourite(item.id)}
                aria-label={isFavourited ? 'Remove from wishlist' : 'Save to wishlist'}
                title={isFavourited ? 'In your wishlist' : 'Add to wishlist'}
                className={`p-2 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 px-3 text-xs font-semibold ${
                  isFavourited
                    ? 'bg-[#c5a059] text-white border-[#c5a059]'
                    : 'bg-white hover:bg-[#f4efe6] text-[#0c1b33] border-[#e2e8f0] hover:border-[#c5a059]'
                }`}
              >
                <Heart className={`w-4 h-4 ${isFavourited ? 'fill-current text-white' : 'text-[#c5a059]'}`} />
                <span className="hidden sm:inline">
                  {isFavourited ? 'Saved to Wishlist' : 'Add to Wishlist'}
                </span>
              </button>
            )}

            <button
              onClick={onClose}
              aria-label="Close details popup"
              className="p-2 rounded-full text-[#475569] hover:text-[#0c1b33] hover:bg-black/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image display */}
            <div className="relative rounded-xl overflow-hidden bg-[#f4efe6] border border-[#e2e8f0] shadow-inner group aspect-4/3 sm:aspect-square">
              <img
                src={item.image}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.startsWith('data:image/svg+xml')) {
                    target.src = getLuxuryWatchPlaceholder(item.name);
                  }
                }}
              />
              <div className="absolute top-3 left-3 bg-[#0c1b33]/90 text-[#fcfbfa] px-3 py-1 rounded-full text-xs font-medium tracking-wide backdrop-blur-sm border border-white/10">
                {item.priceTag || '€14,800'}
              </div>
            </div>

            {/* Content summary */}
            <div className="space-y-4">
              <div>
                <h3
                  id="modal-item-title"
                  className="font-serif text-2xl sm:text-3xl font-semibold text-[#0c1b33] leading-snug"
                >
                  {item.name}
                </h3>
                {item.subtitle && (
                  <p className="text-sm font-medium text-[#c5a059] mt-1 tracking-wide uppercase">
                    {item.subtitle}
                  </p>
                )}
              </div>

              <p className="text-[#475569] text-sm leading-relaxed">
                {item.fullDescription}
              </p>

              {item.highlights && item.highlights.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#0c1b33] mb-2">
                    Key Horological Highlights
                  </h4>
                  <ul className="grid grid-cols-1 gap-1.5 text-xs text-[#475569]">
                    {item.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Technical Specifications details */}
          {item.specs ? (
            <div className="p-4 rounded-xl bg-[#f4efe6]/80 border border-[#e2e8f0]">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#0c1b33] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                Technical Specifications & Heritage
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 text-xs">
                {item.specs.caseMaterial && (
                  <div>
                    <span className="text-[#475569] block font-medium">Case & Material:</span>
                    <span className="text-[#0c1b33] font-semibold">{item.specs.caseMaterial}</span>
                  </div>
                )}
                {item.specs.dialColor && (
                  <div>
                    <span className="text-[#475569] block font-medium">Dial & Texture:</span>
                    <span className="text-[#0c1b33] font-semibold">{item.specs.dialColor}</span>
                  </div>
                )}
                {item.specs.movementType && (
                  <div>
                    <span className="text-[#475569] block font-medium">Movement Calibre:</span>
                    <span className="text-[#0c1b33] font-semibold">{item.specs.movementType}</span>
                  </div>
                )}
                {item.specs.waterResistance && (
                  <div>
                    <span className="text-[#475569] block font-medium">Water Resistance:</span>
                    <span className="text-[#0c1b33] font-semibold">{item.specs.waterResistance}</span>
                  </div>
                )}
                {item.specs.origin && (
                  <div>
                    <span className="text-[#475569] block font-medium">Design Heritage:</span>
                    <span className="text-[#0c1b33] font-semibold">{item.specs.origin}</span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-[#f4efe6]/80 border border-[#e2e8f0]">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#0c1b33] mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                Technical Consultation & Inquiries
              </h4>
              <p className="text-xs text-[#475569]">
                Consult our Geneva boutique directly at <strong>+41 79 966 01 56</strong> for comprehensive technical documentation, wrist proportions, and availability.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Actions: Exactly 3 buttons aligned in a single row without extra Close button */}
        <div className="px-4 sm:px-6 py-3.5 border-t border-[#e2e8f0] bg-[#f8f5ee]">
          <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full">
            {/* 1. Single Clean Phone Contact Button */}
            <a
              href="tel:+41799660156"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2.5 rounded-lg border border-[#e2e8f0] bg-white hover:bg-[#f4efe6] text-[#0c1b33] text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all shadow-2xs hover:border-[#c5a059] text-center"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
              <span className="truncate">Call Boutique</span>
            </a>

            {/* 2. WhatsApp Direct Inquiry */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs text-center"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="truncate">WhatsApp Chat</span>
            </a>

            {/* 3. Book an Appointment / Booking View Button */}
            <button
              onClick={() => {
                onClose();
                onBookAppointment(item);
              }}
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-5 py-2.5 rounded-lg bg-[#0c1b33] hover:bg-[#162a4d] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
            >
              <Calendar className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
              <span className="truncate">Booking View</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
