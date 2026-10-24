import React from 'react';
import { Compass, Sparkles, MapPin, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onDiscoverMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscoverMore }) => {
  return (
    <section
      id="about"
      aria-label="About Intemporel_geneve"
      className="py-16 lg:py-24 bg-[#fcfbfa] border-b border-[#e2e8f0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#c5a059]">
              Boutique Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c1b33] leading-tight">
              AN APPRECIATION FOR TIMELESS STYLE
            </h2>
            <div className="w-16 h-0.5 bg-[#c5a059] mx-auto mt-3" />
          </div>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl mx-auto">
            In the heart of Geneva, Switzerland, <strong className="text-[#0c1b33] font-semibold">Intemporel_geneve</strong> welcomes watch enthusiasts, collectors, and those seeking an exceptional timepiece that reflects their personal character.
          </p>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-3xl mx-auto">
            A fine watch is far more than a mechanism to track passing hours. It represents the meeting point of precision geometry, tactile materials, and enduring European aesthetics. From the subtle curve of a bezel to the delicate rhythm of an automatic escapement, every timepiece tells a personal story on the wrist.
          </p>

          <div className="p-5 rounded-2xl bg-[#f4efe6]/80 border border-[#e2e8f0] max-w-2xl mx-auto text-left space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0c1b33]">
              <Compass className="w-4 h-4 text-[#c5a059]" />
              <span>The Personal Consultation Experience</span>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Whether you gravitate toward the discreet presence of a classic dress watch, the technical mastery of a chronograph, or the effortless grace of fine jewellery timepieces, our boutique offers a curated setting to explore proportions, materials, and dial artistry.
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <button
              onClick={onDiscoverMore}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#0c1b33] hover:bg-[#162a4d] text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md group cursor-pointer"
            >
              <span>Discover More</span>
              <ArrowRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
