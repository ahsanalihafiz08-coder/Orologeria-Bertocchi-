import React from 'react';
import { Phone, MessageSquare, Bot } from 'lucide-react';
import { WhatsAppIcon } from './icons/BrandIcons';

interface FloatingActionsProps {
  onToggleChatbot: () => void;
  isChatbotOpen: boolean;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onToggleChatbot,
  isChatbotOpen,
}) => {
  return (
    <div
      role="region"
      aria-label="Floating quick contact shortcuts"
      className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* 1. Chatbot Button */}
      <button
        onClick={onToggleChatbot}
        aria-label={isChatbotOpen ? 'Close boutique assistant' : 'Open boutique assistant'}
        className={`group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 border ${
          isChatbotOpen
            ? 'bg-[#c5a059] text-[#0c1b33] border-white'
            : 'bg-[#0c1b33] text-white border-[#c5a059]/40'
        }`}
      >
        <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-[#c5a059] group-hover:rotate-12 transition-transform" />
        <span className="sr-only">Boutique Assistant</span>
        {/* Tooltip on desktop */}
        <span className="hidden sm:block absolute right-full mr-3 px-2.5 py-1 text-xs font-semibold text-white bg-[#0c1b33] rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[#c5a059]/20">
          Digital Assistant
        </span>
      </button>

      {/* 2. WhatsApp Button with Authentic Logo */}
      <a
        href="https://wa.me/390523322357?text=Buongiorno%20Orologeria%20Bertocchi%20F.Lli,%20desidero%20maggiori%20informazioni."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Orologeria Bertocchi F.Lli on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20ba5a] transition-transform hover:scale-105 active:scale-95 border border-white/20"
      >
        <WhatsAppIcon className="w-6 h-6 text-white" />
        <span className="sr-only">WhatsApp Inquiry</span>
        {/* Tooltip on desktop */}
        <span className="hidden sm:block absolute right-full mr-3 px-2.5 py-1 text-xs font-semibold text-white bg-[#0c1b33] rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[#c5a059]/20">
          WhatsApp Direct
        </span>
      </a>

      {/* 3. Phone Call Button */}
      <a
        href="tel:+390523322357"
        aria-label="Call Orologeria Bertocchi F.Lli at +39 0523 322357"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#0c1b33] text-white shadow-lg hover:bg-[#162a4d] transition-transform hover:scale-105 active:scale-95 border border-[#c5a059]/40"
      >
        <Phone className="w-5 h-5 text-[#c5a059]" />
        <span className="sr-only">Call Store</span>
        {/* Tooltip on desktop */}
        <span className="hidden sm:block absolute right-full mr-3 px-2.5 py-1 text-xs font-semibold text-white bg-[#0c1b33] rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[#c5a059]/20">
          Call +39 0523 322357
        </span>
      </a>
    </div>
  );
};
