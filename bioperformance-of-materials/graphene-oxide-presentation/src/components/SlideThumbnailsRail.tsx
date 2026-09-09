import React from 'react';
import { SLIDES } from '../data/slidesData';

interface SlideThumbnailsRailProps {
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
}

export const SlideThumbnailsRail: React.FC<SlideThumbnailsRailProps> = ({
  currentSlideIndex,
  onSelectSlide,
}) => {
  return (
    <nav
      id="slide-thumbnails-rail"
      aria-label="Slide thumbnail navigation"
      className="w-full bg-slate-950/80 border-t border-slate-800/80 px-4 py-2.5 overflow-x-auto flex items-center gap-2.5 shrink-0 select-none scrollbar-thin"
    >
      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 shrink-0 mr-1 hidden sm:inline-block">
        Slide Index:
      </span>

      {SLIDES.map((slide, idx) => {
        const isActive = currentSlideIndex === idx;
        return (
          <button
            key={slide.id}
            onClick={() => onSelectSlide(idx)}
            className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg border text-left transition-all shrink-0 cursor-pointer ${
              isActive
                ? 'bg-slate-800/90 border-cyan-400 text-white shadow-md shadow-cyan-500/10 scale-102 ring-1 ring-cyan-400/40'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 hover:border-slate-700'
            }`}
          >
            <span
              className={`w-5 h-5 rounded text-[11px] font-mono font-bold flex items-center justify-center ${
                isActive
                  ? 'bg-cyan-500 text-slate-950'
                  : 'bg-slate-950 text-slate-400 group-hover:text-slate-200'
              }`}
            >
              {slide.slideNumber}
            </span>

            <div className="max-w-[140px] truncate">
              <span className="text-[11px] font-semibold block truncate">
                {slide.title}
              </span>
              <span className="text-[9px] font-mono text-slate-500 block truncate">
                {slide.categoryTag.split('·')[0].trim()}
              </span>
            </div>
          </button>
        );
      })}
    </nav>
  );
};
