import React from 'react';
import { Award, CheckCircle2, X, ArrowUpRight, ExternalLink } from 'lucide-react';
import { RUBRIC_ITEMS, PRESENTATION_INFO } from '../data/slidesData';

interface RubricModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToSlide: (slideNumber: number) => void;
}

export const RubricModal: React.FC<RubricModalProps> = ({
  isOpen,
  onClose,
  onJumpToSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="rubric-modal-backdrop"
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="rubric-modal-dialog"
        className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl p-5 md:p-6 select-text my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  BME3101C Rubric Compliance Audit
                </h3>
                <p className="text-xs text-slate-400">
                  {PRESENTATION_INFO.course} · Dr. Marzhan Sypabekova · 50 / 50 Total Points
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700 font-bold">
              100% (50/50 Points)
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Rubric Criteria List */}
        <div className="mt-4 space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          {RUBRIC_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wide font-mono">
                      {item.category}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                      {item.points} Points
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="text-[11px] text-emerald-400 mt-1 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Evidence: {item.evidence}</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 flex sm:flex-col items-end gap-1.5 w-full sm:w-auto justify-between border-t sm:border-t-0 border-slate-800 pt-2 sm:pt-0">
                <span className="text-[10px] font-mono text-slate-400">
                  {item.slideRef}
                </span>
                <button
                  onClick={() => {
                    const match = item.slideRef.match(/Slide\s+(\d+)/);
                    if (match) {
                      onJumpToSlide(parseInt(match[1], 10) - 1);
                      onClose();
                    }
                  }}
                  className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 px-2 py-1 rounded bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Jump to Slide <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            FGCU LabCup credentials: <span className="font-mono text-slate-200">bioeng / biolab1</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors cursor-pointer"
          >
            Close Audit
          </button>
        </div>
      </div>
    </div>
  );
};
