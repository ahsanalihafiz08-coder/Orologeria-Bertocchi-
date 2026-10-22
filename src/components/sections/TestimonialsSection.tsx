import React, { useState, useEffect, useRef } from 'react';
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
    author: 'Massimo Tona',
    rating: 5,
    dateBadge: 'Verified Google Review',
    content: 'Top!',
  },
  {
    id: 'rev-2',
    author: 'Nicoletta Caldani',
    rating: 5,
    dateBadge: 'Verified Google Review',
    content:
      'I recently visited Gioelleria Fratelli Bertocchi to purchase a Rolex watch, and I must say I was truly impressed! Bertocchi was very welcoming and professional, friendly and helpful, and the selection of watches was impressive. The Rolex I purchased is absolutely fantastic; the quality and precision are exceptional, and the design is exactly what I expected. The price was very competitive, and the warranty offered by the jewelry store gave me even more confidence in my purchase. Gicielleria Fratelli Bertocchi is a true reference point for seeking high-quality watches and jewelry. I highly recommend this jewelry store to anyone looking for a unique and satisfying shopping experience. I will definitely be back in the future! My daughter thank you!',
  },
  {
    id: 'rev-3',
    author: 'Carlo Gagliardi',
    rating: 4,
    dateBadge: 'Verified Google Review',
    content:
      'A welcoming place, a private room for confidential negotiations, and above all, a huge selection of products, served with great professionalism and excellent prices. Considering the trade-in offer carefully, it is hard not to close the deal! Very satisfied. I will definitely be back and will recommend the shop to my friends.',
  },
  {
    id: 'rev-4',
    author: 'Paolo Emilio Ronchi',
    rating: 5,
    dateBadge: 'Verified Google Review',
    content:
      'Besides being friendly, they have all their watches at a fair market price! I bought one on 12/28/24... I am on my third!',
  },
  {
    id: 'rev-5',
    author: 'Roberto Ronca',
    rating: 5,
    dateBadge: 'Verified Google Review',
    content:
      'Professionalism, research, a wide selection, and advice. Excellent consulting and maintenance services. Not just watches, but also beautiful jewelry.',
  },
  {
    id: 'rev-6',
    author: 'Andrea Rovati',
    rating: 5,
    dateBadge: 'Verified Google Review',
    content: 'Three words: competence, seriousness, kindness.',
  },
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onContactClick,
}) => {
  // Index of the first visible review in the sliding carousel (0 to 5)
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalReviews = ORIGINAL_REVIEWS.length;

  // Smooth rotating/sliding horizontal animation: rotates every 5.5s
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

  // Concatenate array to allow seamless windowing of 3 visible cards
  const extendedReviews = [...ORIGINAL_REVIEWS, ...ORIGINAL_REVIEWS, ...ORIGINAL_REVIEWS];
  const visibleCards = extendedReviews.slice(startIndex, startIndex + 3);

  return (
    <section
      id="testimonials"
      aria-label="Customer Trust and Original Reviews"
      className="py-16 lg:py-24 bg-[#faf8f5] border-b border-[#e2e8f0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4efe6] border border-[#e2e8f0] text-xs font-semibold tracking-widest text-[#9e7a35] uppercase">
            <Award className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Customer Reputation & Trust</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c1b33]">
            Client Experiences & Reviews
          </h2>

          <div className="flex items-center justify-center gap-2 pt-1">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#c5a059] fill-[#c5a059]" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#0c1b33]">4.6 / 5.0</span>
            <span className="text-xs text-[#64748b]">• 30 Verified Google Reviews</span>
          </div>
          <div className="w-16 h-0.5 bg-[#c5a059] mx-auto mt-2" />
        </div>

        {/* Carousel Container with Prev/Next Controls */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs text-[#64748b]">
              Displaying 3 verified reviews at a time. Hover to pause auto-slide.
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

          {/* 3 Visible Reviews Side-by-Side on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500">
            {visibleCards.map((review, idx) => (
              <div
                key={`${review.id}-${startIndex}-${idx}`}
                className="bg-[#fcfbfa] rounded-2xl border border-[#e2e8f0] hover:border-[#c5a059]/60 p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[360px] animate-fade-in group select-none"
              >
                <div>
                  {/* Top Bar: Stars & Verified Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[#c5a059] fill-[#c5a059]"
                        />
                      ))}
                      {review.rating < 5 && (
                        <Star className="w-4 h-4 text-[#cbd5e1] fill-[#cbd5e1]" />
                      )}
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
                      Piacenza, Italy • Google Review
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
            <span>Visit Us at Via Calzolai 65f, Piacenza</span>
          </button>
        </div>
      </div>
    </section>
  );
};
