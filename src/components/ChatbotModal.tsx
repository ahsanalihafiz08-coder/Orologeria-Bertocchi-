import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Phone, MapPin, Calendar, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './icons/BrandIcons';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const ChatbotModal: React.FC<ChatbotModalProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Bonjour! Welcome to Intemporel_geneve in Geneva, Switzerland. I am your digital boutique assistant. How may I assist you with our timepieces and services today?',
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Knowledge base matching based purely on real page info
    setTimeout(() => {
      const q = query.toLowerCase();
      let botResponse = '';
      let botAction: { label: string; onClick: () => void } | undefined = undefined;

      if (q.includes('address') || q.includes('where') || q.includes('location') || q.includes('geneva') || q.includes('geneve') || q.includes('find you')) {
        botResponse = 'Our boutique is located at Route des Jeunes 4bis, Geneva, Switzerland, 1227. We welcome you to visit us in Geneva.';
        botAction = {
          label: 'View Contact & Map Section',
          onClick: () => {
            onClose();
            onNavigateSection('contact');
          },
        };
      } else if (q.includes('phone') || q.includes('call') || q.includes('telephone') || q.includes('number')) {
        botResponse = 'You can reach Intemporel_geneve directly at +41 79 966 01 56 during store opening periods.';
        botAction = {
          label: 'Call +41 79 966 01 56',
          onClick: () => {
            window.location.href = 'tel:+41799660156';
          },
        };
      } else if (q.includes('whatsapp') || q.includes('chat') || q.includes('message')) {
        botResponse = 'You can chat directly with our boutique via official WhatsApp at +41 79 966 01 56.';
        botAction = {
          label: 'Open WhatsApp Chat',
          onClick: () => {
            window.open('https://wa.me/41799660156', '_blank');
          },
        };
      } else if (q.includes('email') || q.includes('mail')) {
        botResponse = 'You can email our boutique directly at contact@intemporel-collection.ch.';
        botAction = {
          label: 'Send Email',
          onClick: () => {
            window.location.href = 'mailto:contact@intemporel-collection.ch';
          },
        };
      } else if (q.includes('appointment') || q.includes('book') || q.includes('booking') || q.includes('visit') || q.includes('consult')) {
        botResponse = 'You can request an appointment enquiry by selecting "Booking View" on any of our Portfolio timepieces or Service cards. You can also contact us directly by telephone or WhatsApp.';
        botAction = {
          label: 'Explore Portfolio Collection',
          onClick: () => {
            onClose();
            onNavigateSection('portfolio');
          },
        };
      } else if (q.includes('portfolio') || q.includes('collection') || q.includes('models') || q.includes('watches') || q.includes('category') || q.includes('categories')) {
        botResponse = 'We present curated portfolio categories—including Classic Dress Watches, Contemporary Watches, Automatic Mechanicals, Elegant Women’s Watches, Sport Watches, and Chronographs—plus 36 detailed enquiry topics in our Services section.';
        botAction = {
          label: 'Go to Portfolio',
          onClick: () => {
            onClose();
            onNavigateSection('portfolio');
          },
        };
      } else if (q.includes('service') || q.includes('repair') || q.includes('enquiry') || q.includes('strap') || q.includes('bracelet')) {
        botResponse = 'Our Services section showcases 36 distinct watch categories and customer enquiry topics, from movement enquiries to strap options and gift ideas.';
        botAction = {
          label: 'Browse All 36 Service Topics',
          onClick: () => {
            onClose();
            onNavigateSection('services');
          },
        };
      } else if (q.includes('rating') || q.includes('review') || q.includes('reputation') || q.includes('trust')) {
        botResponse = 'Intemporel_geneve holds a customer rating of 4.6 out of 5 stars across 30 customer reviews. We pride ourselves on attentive, courteous service.';
        botAction = {
          label: 'View Customer Trust Section',
          onClick: () => {
            onClose();
            onNavigateSection('testimonials');
          },
        };
      } else if (q.includes('price') || q.includes('cost') || q.includes('how much') || q.includes('euro') || q.includes('chf')) {
        botResponse = 'In accordance with luxury horological guidelines, prices are provided on enquiry based on specific configurations and availability. You can click "Booking View" or contact us via WhatsApp for precise pricing.';
      } else if (q.includes('hours') || q.includes('open') || q.includes('time') || q.includes('when')) {
        botResponse = 'For specific daily opening hours or holiday schedules, please call us directly at +41 79 966 01 56 or send a quick WhatsApp message to ensure the boutique is open for your visit.';
      } else {
        botResponse = 'Thank you for your question. Intemporel_geneve is located at Route des Jeunes 4bis, Geneva, Switzerland, 1227 (+41 79 966 01 56). Would you like to explore our Portfolio or contact us on WhatsApp?';
        botAction = {
          label: 'View Collection',
          onClick: () => {
            onClose();
            onNavigateSection('portfolio');
          },
        };
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: botResponse,
          action: botAction,
        },
      ]);
    }, 450);
  };

  const quickChips = [
    '📍 Address & Location',
    '📞 Boutique Phone',
    '✉️ Boutique Email',
    '⌚ Watch Categories',
    '📅 Appointment Enquiry',
    '💬 WhatsApp Us',
  ];

  return (
    <div
      role="dialog"
      aria-label="Website Boutique Assistant"
      className="fixed bottom-24 right-4 sm:right-8 z-50 w-[92vw] sm:w-96 max-w-md bg-[#fcfbfa] rounded-2xl shadow-2xl border border-[#cbd5e1] overflow-hidden flex flex-col h-[520px] max-h-[80vh] text-[#0c1b33] animate-fade-in"
    >
      {/* Header */}
      <div className="px-4 py-3.5 bg-[#0c1b33] text-white flex items-center justify-between border-b border-[#c5a059]/30">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#c5a059] text-[#0c1b33] flex items-center justify-center font-bold">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide">Boutique Assistant</h3>
            <span className="text-[10px] text-[#dfc181] block">Intemporel_geneve</span>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close assistant"
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Message History */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#fbf9f4]/60 text-xs">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-xs ${
                m.sender === 'user'
                  ? 'bg-[#0c1b33] text-white rounded-br-none'
                  : 'bg-white text-[#0c1b33] border border-[#e2e8f0] rounded-bl-none'
              }`}
            >
              {m.text}
            </div>

            {m.action && (
              <button
                onClick={m.action.onClick}
                className="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#c5a059]/15 hover:bg-[#c5a059]/25 text-[#9e7a35] font-semibold text-[11px] border border-[#c5a059]/40 transition-colors"
              >
                <span>{m.action.label}</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Questions */}
      <div className="p-2 border-t border-[#e2e8f0] bg-[#f8f5ee]/70 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {quickChips.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(chip)}
            className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white hover:bg-[#c5a059]/10 text-[11px] font-medium text-[#475569] hover:text-[#0c1b33] border border-[#e2e8f0] transition-colors"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 border-t border-[#e2e8f0] bg-white flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about watches, address, phone..."
          className="flex-1 px-3 py-2 text-xs rounded-lg border border-[#e2e8f0] focus:outline-none focus:border-[#c5a059]"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          aria-label="Send message"
          className="p-2 rounded-lg bg-[#0c1b33] text-[#c5a059] hover:bg-[#162a4d] disabled:opacity-40 disabled:hover:bg-[#0c1b33] transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
