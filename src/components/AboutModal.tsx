import React, { useEffect } from 'react';
import { X, MapPin, Phone, Compass, Award, Clock } from 'lucide-react';
import { WhatsAppIcon } from './icons/BrandIcons';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigatePortfolio: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onNavigatePortfolio,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0c1b33]/65 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#fcfbfa] rounded-2xl shadow-2xl border border-[#e2e8f0] overflow-hidden text-[#0c1b33] my-auto flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2e8f0] bg-[#f8f5ee]">
          <div>
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#c5a059] block">
              Boutique Heritage & Vision
            </span>
            <h2 id="about-modal-title" className="font-serif text-xl font-bold text-[#0c1b33]">
              Intemporel_geneve
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close about details"
            className="p-2 rounded-full text-[#475569] hover:text-[#0c1b33] hover:bg-black/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#475569] text-sm leading-relaxed">
          <div className="aspect-16/9 rounded-xl overflow-hidden bg-[#f4efe6] border border-[#e2e8f0]">
            <img
              src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80"
              alt="Boutique horology atmosphere"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-[#0c1b33] mb-2">
              The Essence of Fine Horology in Geneva
            </h3>
            <p>
              Located at Route des Jeunes 4bis in Geneva, Switzerland, Intemporel_geneve is dedicated to celebrating the culture and artistic distinction of fine timepieces. A watch is far more than an instrument to measure passing hours; it is a wearable sculpture, a statement of personal character, and a testament to European mechanical heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#f4efe6]/80 border border-[#e2e8f0]">
              <div className="w-8 h-8 rounded-lg bg-[#0c1b33] text-white flex items-center justify-center mb-2">
                <Compass className="w-4 h-4 text-[#c5a059]" />
              </div>
              <h4 className="font-serif font-semibold text-[#0c1b33] text-base mb-1">
                Personal Style & Proportions
              </h4>
              <p className="text-xs text-[#475569]">
                Every wrist possesses distinct anatomy and style. We appreciate guiding clients to find harmonious case diameters, lug curvatures, and dial aesthetics that flatter daily attire.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#f4efe6]/80 border border-[#e2e8f0]">
              <div className="w-8 h-8 rounded-lg bg-[#0c1b33] text-white flex items-center justify-center mb-2">
                <Award className="w-4 h-4 text-[#c5a059]" />
              </div>
              <h4 className="font-serif font-semibold text-[#0c1b33] text-base mb-1">
                Swiss Excellence & Atmosphere
              </h4>
              <p className="text-xs text-[#475569]">
                Steeped in Geneva horological refinement, our welcoming boutique environment invites lovers of watches to explore styles at an unhurried, thoughtful pace.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#e2e8f0] space-y-2 text-xs">
            <div className="flex items-center gap-2 text-[#0c1b33] font-semibold">
              <MapPin className="w-4 h-4 text-[#c5a059]" />
              <span>Route des Jeunes 4bis, Geneva, Switzerland, 1227</span>
            </div>
            <div className="flex items-center gap-2 text-[#0c1b33] font-semibold">
              <Phone className="w-4 h-4 text-[#c5a059]" />
              <span>+41 79 966 01 56</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-[#e2e8f0] bg-[#f8f5ee]">
          <a
            href="https://wa.me/41799660156"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-[#128C7E] hover:underline"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </a>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 rounded-lg border border-[#e2e8f0] bg-white text-xs font-semibold text-[#0c1b33] uppercase tracking-wider"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigatePortfolio();
              }}
              className="w-full sm:w-auto px-5 py-2 rounded-lg bg-[#0c1b33] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#162a4d] transition-colors"
            >
              Explore Timepieces
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
