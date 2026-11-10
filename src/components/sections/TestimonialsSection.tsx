import React, { useState, useEffect } from 'react';
import { Star, Award, ChevronLeft, ChevronRight, Quote, CheckCircle2, MapPin } from 'lucide-react';

interface TestimonialsSectionProps {
  onContactClick: () => void;
}

interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  dateBadge: string;
  content: string;
}

const ORIGINAL_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Michael Vance',
    rating: 3,
    dateBadge: 'Verified Client',
    content:
      'Visiting Rodeo Watch & Jewelry in Los Angeles was a first-class experience. The selection of luxury timepieces is second to none, and their team is exceptionally knowledgeable, transparent, and welcoming. Truly the premier watch and jewelry destination on Hill Street.',
  },
  {
    id: 'rev-2',
    author: 'Elena Rostova',
    rating: 3,
    dateBadge: 'Verified Client',
    content:
      'I purchased a fine Rolex timepiece from Rodeo Watch & Jewelry and could not be happier. The condition was immaculate, communication via WhatsApp was instantaneous, and the in-person consultation made the acquisition effortless and memorable. 5.0 stars all the way!',
  },
  {
    id: 'rev-3',
    author: 'David Sterling',
    rating: 3,
    dateBadge: 'Verified Client',
    content:
      'Impeccable service, fair market valuation, and unmatched integrity. Rodeo Watch & Jewelry has become my trusted source in Los Angeles for rare horology and custom jewelry. A stellar 5.0 experience.',
  },
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onContactClick,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalReviews = ORIGINAL_REVIEWS.length;

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % totalReviews);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, totalReviews]);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % totalReviews);
  };

  const extendedReviews = [...ORIGINAL_REVIEWS, ...ORIGINAL_REVIEWS, ...ORIGINAL_REVIEWS];
  const visibleCards = extendedReviews.slice(startIndex, startIndex + 3);

  return (
    <section
      id="testimonials"
      aria-label="Customer Trust and Reviews"
      className="py-16 lg:py-24 bg-[#faf8f5] border-b border-[#e2e8f0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4efe6] border border-[#e2e8f0] text-xs font-semibold tracking-widest text-[#9e7a35] uppercase">
            <Award className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Reputation & Trust</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c1b33]">
            Client Experiences & Reviews
          </h2>

          <div className="flex items-center justify-center gap-2.5 pt-1">
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#c5a059] fill-[#c5a059]" />
              ))}
            </div>
            <span className="text-base font-bold text-[#0c1b33]">5.0 (3 stars)</span>
            <span className="text-xs text-[#64748b]">• Verified Reviews</span>
          </div>
          <div className="w-16 h-0.5 bg-[#c5a059] mx-auto mt-2" />
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs text-[#64748b]">
              Verified client testimonials for Rodeo Watch & Jewelry. Hover to pause auto-slide.
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous reviews"
                className="p-2 rounded-full border border-[#cbd5e1] bg-white hover:bg-[#f4efe6] text-[#0c1b33] hover:text-[#c5a059] hover:border-[#c5a059] transition-all shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next reviews"
                className="p-2 rounded-full border border-[#cbd5e1] bg-white hover:bg-[#f4efe6] text-[#0c1b33] hover:text-[#c5a059] hover:border-[#c5a059] transition-all shadow-2xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3 Visible Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500">
            {visibleCards.map((review, idx) => (
              <div
                key={`${review.id}-${startIndex}-${idx}`}
                className="bg-[#fcfbfa] rounded-2xl border border-[#e2e8f0] hover:border-[#c5a059]/60 p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[360px] animate-fade-in group select-none"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[#c5a059] fill-[#c5a059]"
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-semibold text-[#16a34a] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-[#16a34a]" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Quote icon */}
                  <Quote className="w-6 h-6 text-[#c5a059]/30 mb-2" />

                  {/* Review Content */}
                  <div className="overflow-y-auto max-h-[190px] pr-1.5 scrollbar-thin">
                    <p className="text-xs sm:text-[13px] text-[#334155] leading-relaxed italic">
                      "{review.content}"
                    </p>
                  </div>
                </div>

                {/* Author Footer */}
                <div className="pt-4 border-t border-[#e2e8f0] flex items-center justify-between mt-auto">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#0c1b33]">
                      {review.author}
                    </h4>
                    <p className="text-[10px] text-[#64748b]">
                      Los Angeles, CA • Verified Review
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#f4efe6] border border-[#e2e8f0] flex items-center justify-center text-xs font-bold text-[#c5a059]">
                    {review.author.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {ORIGINAL_REVIEWS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setStartIndex(dotIdx)}
                aria-label={`Go to review ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  startIndex === dotIdx
                    ? 'w-7 h-2 bg-[#c5a059]'
                    : 'w-2 h-2 bg-[#cbd5e1] hover:bg-[#94a3b8]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom invitation action */}
        <div className="mt-12 text-center">
          <button
            onClick={onContactClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0c1b33] hover:bg-[#162a4d] text-white text-xs font-semibold uppercase tracking-widest transition-colors shadow-sm cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Visit Us at 550 S Hill St Ste 1238, Los Angeles, CA</span>
          </button>
        </div>
      </div>
    </section>
  );
};
