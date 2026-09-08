import React from 'react';
import { SpeakerNote } from '../types';
import { Clock, User, MessageSquare, AlertCircle, HelpCircle, X } from 'lucide-react';

interface SpeakerNotesDrawerProps {
  notes: SpeakerNote;
  slideNumber: number;
  slideTitle: string;
  onClose: () => void;
}

export const SpeakerNotesDrawer: React.FC<SpeakerNotesDrawerProps> = ({
  notes,
  slideNumber,
  slideTitle,
  onClose,
}) => {
  return (
    <aside
      id="speaker-notes-drawer"
      className="w-full lg:w-96 bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800 p-4 flex flex-col justify-between overflow-y-auto max-h-[40vh] lg:max-h-full shrink-0 select-text"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Speaker Teleprompter
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/50">
              <Clock className="w-3 h-3" />
              {notes.timeEstimate}
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Assigned Presenter & Slide Info */}
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800 mb-3 text-xs">
          <div className="flex items-center gap-1.5 text-slate-300 font-medium">
            <User className="w-3.5 h-3.5 text-emerald-400" />
            <span>Presenter: <strong className="text-white">{notes.presenter}</strong></span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Slide {slideNumber}</span>
        </div>

        {/* Spoken Script Lines */}
        <div className="space-y-2.5 mb-4">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
            Verbal Talking Points
          </span>
          {notes.mainScript.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-xs text-slate-200 leading-relaxed bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80"
            >
              &ldquo;{paragraph}&rdquo;
            </p>
          ))}
        </div>

        {/* Key Delivery Emphasis */}
        <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-xs text-slate-200 mb-4">
          <div className="flex items-center gap-1.5 text-cyan-400 font-semibold mb-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Key Delivery Focus:</span>
          </div>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            {notes.keyEmphasis}
          </p>
        </div>

        {/* Anticipated Faculty & Classmate Questions */}
        {notes.anticipatedQuestions.length > 0 && (
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold block flex items-center gap-1">
              <HelpCircle className="w-3 h-3" /> Anticipated Q&amp;A Defense
            </span>
            {notes.anticipatedQuestions.map((qa, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px]"
              >
                <div className="font-semibold text-amber-300 mb-1">Q: {qa.question}</div>
                <div className="text-slate-300 leading-relaxed pl-2 border-l-2 border-amber-500/40">
                  <strong>Answer:</strong> {qa.answer}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Tip */}
      <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-500 font-mono mt-4">
        Press <kbd className="px-1 py-0.5 rounded bg-slate-800 text-slate-300">N</kbd> on your keyboard to toggle this drawer.
      </div>
    </aside>
  );
};
