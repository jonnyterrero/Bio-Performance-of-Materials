import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Printer,
  FileText,
  Palette,
  Maximize2,
  Award,
  Sparkles,
  Presentation,
  Layers,
} from 'lucide-react';
import { SLIDES, PRESENTATION_INFO } from '../data/slidesData';
import { PresentationTheme } from '../types';

interface PresentationHeaderProps {
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  onNextSlide: () => void;
  onPrevSlide: () => void;
  showSpeakerNotes: boolean;
  onToggleSpeakerNotes: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  theme: PresentationTheme;
  onSelectTheme: (theme: PresentationTheme) => void;
  onOpenRubricModal: () => void;
  onOpenCoreTechniqueModal: () => void;
  onExportPPTX: () => void;
  isExportingPPTX: boolean;
}

export const PresentationHeader: React.FC<PresentationHeaderProps> = ({
  currentSlideIndex,
  onSelectSlide,
  onNextSlide,
  onPrevSlide,
  showSpeakerNotes,
  onToggleSpeakerNotes,
  isFullscreen,
  onToggleFullscreen,
  theme,
  onSelectTheme,
  onOpenRubricModal,
  onOpenCoreTechniqueModal,
  onExportPPTX,
  isExportingPPTX,
}) => {
  const currentSlide = SLIDES[currentSlideIndex];

  return (
    <header
      id="presentation-header"
      className="w-full bg-slate-900/90 border-b border-slate-800 backdrop-blur-md px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-40"
    >
      {/* Left: Branding & Current Slide Indicator */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-slate-950 font-black text-sm shadow-md">
            GO
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-100 font-mono tracking-tight">
                BME3101C Presentation
              </span>
              <span className="hidden sm:inline-block text-[10px] px-2 py-0.2 rounded bg-slate-800 text-slate-300 font-mono">
                Terrero &amp; Grismer
              </span>
            </div>
            <div className="text-[11px] text-cyan-400 font-medium truncate max-w-[200px] md:max-w-xs">
              Slide {currentSlide.slideNumber}: {currentSlide.title}
            </div>
          </div>
        </div>

        {/* Slide Selector Dropdown */}
        <select
          value={currentSlideIndex}
          onChange={(e) => onSelectSlide(Number(e.target.value))}
          className="bg-slate-950 border border-slate-700/80 rounded-lg text-xs text-slate-200 px-2 py-1.5 font-mono focus:outline-none focus:ring-1 focus:ring-cyan-400 cursor-pointer hidden md:block"
        >
          {SLIDES.map((s, idx) => (
            <option key={s.id} value={idx}>
              {s.slideNumber}. {s.title}
            </option>
          ))}
        </select>
      </div>

      {/* Center: Slide Navigation Arrows */}
      <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
        <button
          onClick={onPrevSlide}
          disabled={currentSlideIndex === 0}
          title="Previous Slide (Arrow Left)"
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <span className="text-xs font-mono text-slate-300 px-2 select-none">
          <strong className="text-cyan-400">{currentSlideIndex + 1}</strong> / {SLIDES.length}
        </span>

        <button
          onClick={onNextSlide}
          disabled={currentSlideIndex === SLIDES.length - 1}
          title="Next Slide (Arrow Right / Space)"
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right: Actions (Theme, Notes, PPTX Export, Fullscreen, Rubric, Core Technique Visual) */}
      <div className="flex items-center gap-2">
        {/* Core Technique Diagram Visualizer */}
        <button
          onClick={onOpenCoreTechniqueModal}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-cyan-950/70 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-700/60 text-xs font-mono font-semibold transition-colors cursor-pointer shadow-sm"
          title="Inspect Core Technique Scientific Visual & Caption"
        >
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">Technique Diagram</span>
        </button>

        {/* Rubric Inspector Button */}
        <button
          onClick={onOpenRubricModal}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-700/60 text-xs font-mono font-semibold transition-colors cursor-pointer shadow-sm"
          title="Audit Rubric Compliance"
        >
          <Award className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden sm:inline">Rubric Audit (50/50)</span>
        </button>

        {/* Theme Picker */}
        <div className="relative hidden lg:flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
          <Palette className="w-3.5 h-3.5 text-slate-400 ml-1" />
          <button
            onClick={() => onSelectTheme('dark-editorial')}
            className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
              theme === 'dark-editorial' ? 'bg-slate-800 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Editorial
          </button>
          <button
            onClick={() => onSelectTheme('fgcu-emerald')}
            className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
              theme === 'fgcu-emerald' ? 'bg-emerald-950 text-emerald-300 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            FGCU
          </button>
          <button
            onClick={() => onSelectTheme('technical-blueprint')}
            className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
              theme === 'technical-blueprint' ? 'bg-cyan-950 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Blueprint
          </button>
        </div>

        {/* Speaker Notes Toggle */}
        <button
          onClick={onToggleSpeakerNotes}
          className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
            showSpeakerNotes
              ? 'bg-cyan-950 text-cyan-300 border-cyan-700/80 shadow-sm'
              : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
          }`}
          title="Toggle Speaker Notes & Teleprompter (N)"
        >
          <FileText className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden md:inline">Notes</span>
        </button>

        {/* Fullscreen / Presentation Mode */}
        <button
          onClick={onToggleFullscreen}
          className={`p-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
            isFullscreen
              ? 'bg-cyan-950 text-cyan-300 border-cyan-700'
              : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
          }`}
          title="Toggle Presentation Mode (F)"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>

        {/* Print / Save to PDF */}
        <button
          onClick={() => window.print()}
          className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800 text-xs transition-colors cursor-pointer hidden sm:flex items-center"
          title="Print or Save All Slides as PDF"
        >
          <Printer className="w-3.5 h-3.5" />
        </button>

        {/* Download PowerPoint (.pptx) */}
        <button
          onClick={onExportPPTX}
          disabled={isExportingPPTX}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer disabled:opacity-50"
          title="Download complete PowerPoint (.pptx) presentation file"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{isExportingPPTX ? 'Generating...' : 'Export PPTX'}</span>
        </button>
      </div>
    </header>
  );
};
