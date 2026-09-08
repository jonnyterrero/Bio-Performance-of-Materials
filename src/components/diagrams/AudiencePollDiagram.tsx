import React, { useState } from 'react';
import { HelpCircle, ThumbsUp, Sparkles, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AudiencePollDiagram: React.FC = () => {
  const [higherVotes, setHigherVotes] = useState<number>(14);
  const [lowerVotes, setLowerVotes] = useState<number>(18);
  const [userVoted, setUserVoted] = useState<'higher' | 'lower' | null>(null);
  const [revealed, setRevealed] = useState<boolean>(false);

  const totalVotes = higherVotes + lowerVotes;
  const higherPercent = Math.round((higherVotes / totalVotes) * 100);
  const lowerPercent = 100 - higherPercent;

  const handleVote = (choice: 'higher' | 'lower') => {
    if (userVoted === choice) return;

    if (choice === 'higher') {
      setHigherVotes((prev) => prev + 1);
      if (userVoted === 'lower') setLowerVotes((prev) => Math.max(0, prev - 1));
    } else {
      setLowerVotes((prev) => prev + 1);
      if (userVoted === 'higher') setHigherVotes((prev) => Math.max(0, prev - 1));
    }
    setUserVoted(choice);

    try {
      confetti({
        particleCount: 25,
        spread: 40,
        origin: { y: 0.7 },
      });
    } catch {
      // Confetti fallback
    }
  };

  // Needle rotation calculation (-60 deg for all lower, +60 deg for all higher)
  const needleAngle = -60 + (higherPercent / 100) * 120;

  return (
    <div id="audience-poll-container" className="flex flex-col gap-3 w-full h-full justify-between">
      {/* Question Scenario Box */}
      <div className="bg-slate-900/90 border border-cyan-500/30 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              The Scenario &amp; Prediction Challenge
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
              Hands-Up Poll
            </span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            Suppose we purchase a commercial Graphene Oxide powder that is <strong className="text-cyan-300">far more heavily oxidized</strong> (higher density of hydroxyl and carboxylic acid groups) than Wang et al.&apos;s in-house material.
          </p>
        </div>
        <div className="text-[11px] font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0">
          Audience Engagement (10 pts)
        </div>
      </div>

      {/* Speedometer Gauge & Interactive Vote Buttons */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
        {/* Speedometer Visual (4 Cols) */}
        <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 sm:p-3 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
            Classroom Consensus Needle
          </span>

          {/* Semi-circle Gauge SVG */}
          <div className="w-40 sm:w-44 h-20 sm:h-22 relative flex items-end justify-center">
            {/* SVG Arc */}
            <svg viewBox="0 0 200 100" className="w-full h-full">
              {/* Lower Arc (Red/Amber) */}
              <path
                d="M 20 100 A 80 80 0 0 1 100 20"
                fill="none"
                stroke="#F97316"
                strokeWidth="16"
                strokeLinecap="round"
              />
              {/* Higher Arc (Green) */}
              <path
                d="M 100 20 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="#10B981"
                strokeWidth="16"
                strokeLinecap="round"
              />
            </svg>

            {/* Needle */}
            <div
              className="absolute bottom-0 w-1.5 h-16 sm:h-18 bg-cyan-300 origin-bottom rounded-full shadow-lg transition-transform duration-500 ease-out"
              style={{ transform: `rotate(${needleAngle}deg)` }}
            />
            {/* Center Pivot */}
            <div className="absolute -bottom-1.5 w-4 h-4 rounded-full bg-slate-200 border-2 border-slate-900 z-10" />
          </div>

          <div className="w-full flex justify-between px-1.5 text-[9px] sm:text-[10px] font-mono text-slate-400 mt-1.5">
            <span className="text-amber-400 font-bold">LOWER (&lt;50 µg/mL)</span>
            <span className="text-emerald-400 font-bold">HIGHER (&gt;50 µg/mL)</span>
          </div>

          <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 mt-0.5">
            {totalVotes} Total Votes Tracked
          </div>
        </div>

        {/* Voting Options (8 Cols) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Vote Option A: Higher */}
          <button
            onClick={() => handleVote('higher')}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
              userVoted === 'higher'
                ? 'bg-emerald-950/80 border-emerald-400 ring-2 ring-emerald-400/40 shadow-lg'
                : 'bg-slate-900/80 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/50'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold uppercase text-emerald-400">
                  Option A: HIGHER Threshold
                </span>
                <span className="text-xs font-mono font-extrabold text-emerald-300">
                  {higherPercent}% ({higherVotes})
                </span>
              </div>
              <h5 className="text-xs font-semibold text-slate-100">Cells tolerate &gt;50 µg/mL</h5>
              <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                <strong>Hypothesis:</strong> Denser oxygen groups increase hydrophilicity and colloidal stability, preventing aggregation and minimizing sharp mechanical sheet-cutting of plasma membranes.
              </p>
            </div>

            <div className="mt-2 pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-emerald-400 font-mono">
              <span>{userVoted === 'higher' ? '✓ You Voted Higher' : 'Click to Vote Higher'}</span>
              <ThumbsUp className="w-3.5 h-3.5" />
            </div>
          </button>

          {/* Vote Option B: Lower */}
          <button
            onClick={() => handleVote('lower')}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
              userVoted === 'lower'
                ? 'bg-amber-950/80 border-amber-400 ring-2 ring-amber-400/40 shadow-lg'
                : 'bg-slate-900/80 border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/50'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold uppercase text-amber-400">
                  Option B: LOWER Threshold
                </span>
                <span className="text-xs font-mono font-extrabold text-amber-300">
                  {lowerPercent}% ({lowerVotes})
                </span>
              </div>
              <h5 className="text-xs font-semibold text-slate-100">Cells die at &lt;50 µg/mL</h5>
              <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                <strong>Hypothesis:</strong> Heavy surface carboxyl density promotes lysosomal membrane permeabilization, oxidative stress, and rapid intracellular Reactive Oxygen Species (ROS) generation.
              </p>
            </div>

            <div className="mt-2 pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-amber-400 font-mono">
              <span>{userVoted === 'lower' ? '✓ You Voted Lower' : 'Click to Vote Lower'}</span>
              <ThumbsUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>

      {/* Reveal Mechanistic Explanation Drawer */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
        <button
          onClick={() => setRevealed(!revealed)}
          className="w-full px-3.5 py-2.5 flex items-center justify-between text-xs font-mono font-semibold text-cyan-300 hover:bg-slate-900/60 transition-colors cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            {revealed ? 'Hide Mechanistic Discussion & Rubric Follow-Up' : 'Reveal Scientific Mechanism & Class Discussion Prompt'}
          </span>
          {revealed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {revealed && (
          <div className="p-3.5 pt-0 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
              <span className="font-semibold text-cyan-300 block mb-1">
                The Biochemical Reality:
              </span>
              <p className="text-slate-300 leading-relaxed">
                Literature demonstrates a <strong className="text-white">biphasic response</strong>: Moderate oxidation improves dispersion and lowers physical mechanical shearing (supporting Option A), but hyper-oxidation elevates intracellular ROS and acidifies endosomes (supporting Option B). This proves why empirical pilot testing is essential before setting experimental concentrations!
              </p>
            </div>

            <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
              <span className="font-semibold text-amber-300 block mb-1">
                Follow-Up Challenge for Classmates:
              </span>
              <p className="text-slate-300 leading-relaxed">
                <em className="text-slate-200">&ldquo;If cell confluence returns to 100% after GO washout, has wound-healing function necessarily recovered?&rdquo;</em>
                <br />
                <strong>Answer:</strong> No! Metabolic viability ≠ structural monolayer confluence ≠ functional cell migration. That is why our FGCU project incorporates cell-exclusion wound closure assays.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
