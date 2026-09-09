import React, { useState } from 'react';
import {
  X,
  Layers,
  Copy,
  Check,
  Maximize2,
  Sparkles,
  Award,
  BookOpen,
  ArrowRight,
  Download,
  FileCode,
} from 'lucide-react';
import { CoreTechniqueDiagram, CORE_TECHNIQUE_CAPTION } from './diagrams/CoreTechniqueDiagram';
import { PRESENTATION_INFO } from '../data/slidesData';

interface CoreTechniqueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToSlide: (slideNumber: number) => void;
}

export const CoreTechniqueModal: React.FC<CoreTechniqueModalProps> = ({
  isOpen,
  onClose,
  onJumpToSlide,
}) => {
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [copiedPptxSnippet, setCopiedPptxSnippet] = useState(false);

  if (!isOpen) return null;

  const handleCopyCaption = () => {
    navigator.clipboard.writeText(CORE_TECHNIQUE_CAPTION);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2000);
  };

  const handleCopySnippet = () => {
    const slideSnippet = `**Slide Title: In Vitro Fibroblast Exposure & Cellular Toxicity Assay**\n\n${CORE_TECHNIQUE_CAPTION}\n\n*Reference:* Wang et al., Nanoscale Res. Lett. 2011, 6:8. DOI: 10.1007/s11671-010-9751-6`;
    navigator.clipboard.writeText(slideSnippet);
    setCopiedPptxSnippet(true);
    setTimeout(() => setCopiedPptxSnippet(false), 2000);
  };

  return (
    <div
      id="core-technique-modal-backdrop"
      className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-3 md:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="core-technique-modal-dialog"
        className="bg-slate-950 border border-slate-700/80 rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-y-auto shadow-2xl p-4 md:p-6 flex flex-col justify-between select-text my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 shrink-0 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold text-white flex items-center gap-2">
                Core Experimental Technique Visualizer
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  Slide Integration Ready
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Wang et al. (2011) · In Vitro GO Cellular Dosing &amp; Dual-Readout Assay on Human Dermal Fibroblasts
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySnippet}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-mono transition-colors cursor-pointer"
              title="Copy text snippet formatted for slide decks"
            >
              {copiedPptxSnippet ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Snippet Copied</span>
                </>
              ) : (
                <>
                  <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Copy Slide Text</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* The Core Diagram Element */}
        <div className="flex-1 w-full my-1">
          <CoreTechniqueDiagram />
        </div>

        {/* Integration Instructions & Footnote */}
        <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-mono text-cyan-400">How to use in your presentation:</span>
            <span>Integrated into Slide 4 (Protocol &amp; Matrix), or use the snippet above to insert into external slide decks.</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onJumpToSlide(3); // Slide 4 index is 3
                onClose();
              }}
              className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Jump to Slide 4 in Deck <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
