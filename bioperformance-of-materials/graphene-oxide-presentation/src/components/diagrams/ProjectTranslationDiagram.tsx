import React, { useState } from 'react';
import { ArrowRight, Layers, RefreshCw, MoveRight, Sparkles, Check } from 'lucide-react';

export const ProjectTranslationDiagram: React.FC = () => {
  const [activeSurface, setActiveSurface] = useState<'tcp' | 'collagen' | 'gelatin'>('collagen');

  return (
    <div id="project-translation-container" className="flex flex-col gap-3 w-full h-full justify-between">
      {/* Comparison Grid: Literature vs Our Project */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch">
        {/* Left Column: Wang et al. 2011 Baseline */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 sm:p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 mb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Wang et al. (2011) Baseline
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                Static Literature
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase">Single Culture Surface</span>
                <p className="text-slate-200 mt-0.5 font-medium">Standard Tissue Culture Polystyrene (TCP) only.</p>
              </div>

              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase">Exposure Dynamic</span>
                <p className="text-slate-200 mt-0.5 font-medium">Continuous static 1–5 day exposure without media washout.</p>
              </div>

              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase">Measured Endpoints</span>
                <p className="text-slate-200 mt-0.5 font-medium">Viability (CCK-8) &amp; centrifugal detachment force.</p>
              </div>

              <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <span className="text-[10px] font-mono font-semibold text-amber-400 uppercase">The Unanswered Question</span>
                <p className="text-slate-300 mt-0.5 italic text-[11px] leading-relaxed">
                  Does cell fate change when cultured on native biological extracellular matrix proteins? Can cells recover once GO is cleared?
                </p>
              </div>
            </div>
          </div>

          <div className="mt-2.5 pt-2 border-t border-slate-800 text-[10px] text-slate-500 font-mono flex items-center justify-between">
            <span>Baseline Framework</span>
            <span>TCP Only · No Recovery</span>
          </div>
        </div>

        {/* Right Column: Our Semester Project Innovation */}
        <div className="bg-slate-900/90 border border-cyan-500/30 rounded-xl p-3 sm:p-3.5 flex flex-col justify-between ring-1 ring-cyan-500/20">
          <div>
            <div className="flex items-center justify-between pb-1.5 border-b border-cyan-500/20 mb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Our Semester Project (FGCU)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-800/40">
                Novel Biomaterials Hypothesis
              </span>
            </div>

            {/* 3 Interactive Substrates */}
            <div className="mb-2">
              <span className="text-[10px] font-mono font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                Factor 1: 3 Distinct Surface Microenvironments
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  onClick={() => setActiveSurface('tcp')}
                  className={`p-1.5 rounded-lg border text-center transition-all cursor-pointer ${
                    activeSurface === 'tcp'
                      ? 'bg-slate-800 border-cyan-400 text-cyan-300 shadow-sm'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="text-[11px] font-bold font-mono">TCP</div>
                  <div className="text-[9px] text-slate-400">Baseline Control</div>
                </button>

                <button
                  onClick={() => setActiveSurface('collagen')}
                  className={`p-1.5 rounded-lg border text-center transition-all cursor-pointer ${
                    activeSurface === 'collagen'
                      ? 'bg-cyan-950/60 border-cyan-400 text-cyan-200 shadow-sm'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="text-[11px] font-bold font-mono">Collagen I</div>
                  <div className="text-[9px] text-cyan-400">Fibrous ECM</div>
                </button>

                <button
                  onClick={() => setActiveSurface('gelatin')}
                  className={`p-1.5 rounded-lg border text-center transition-all cursor-pointer ${
                    activeSurface === 'gelatin'
                      ? 'bg-amber-950/60 border-amber-400 text-amber-200 shadow-sm'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="text-[11px] font-bold font-mono">Gelatin</div>
                  <div className="text-[9px] text-amber-400">Denatured RGD</div>
                </button>
              </div>
            </div>

            {/* Substrate detail callout */}
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300 mb-2">
              {activeSurface === 'tcp' && (
                <p>Standard synthetic polystyrene, dependent on passive serum protein coating. Serves as a negative control for ECM coatings.</p>
              )}
              {activeSurface === 'collagen' && (
                <p>Native fibrillar Collagen Type I provides triple-helix integrin binding motifs, potentially stabilizing focal adhesions against GO insult.</p>
              )}
              {activeSurface === 'gelatin' && (
                <p>Thermally denatured collagen rich in exposed RGD peptides, promoting rapid cell attachment and testing matrix resilience.</p>
              )}
            </div>

            {/* Factor 2: Recovery Kinetics Flow */}
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-[11px] mb-2">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[10px] font-mono font-semibold text-cyan-400 uppercase">
                  Factor 2: Post-Exposure Recovery Window
                </span>
                <span className="text-[9px] font-mono text-emerald-400">Washout Protocol</span>
              </div>
              <p className="text-slate-300">
                Calibrated sublethal GO (10–20 µg/mL) → Wash with DPBS → Fresh medium → Track recovery at <strong className="text-white">24 h, 48 h, and 72 h</strong>.
              </p>
            </div>

            {/* Dual Readouts */}
            <div className="grid grid-cols-2 gap-1.5 text-[10px]">
              <div className="p-1.5 rounded bg-slate-950 border border-slate-800">
                <span className="font-semibold text-emerald-400 block">Structural Recovery</span>
                <span className="text-slate-400">Confluence &amp; morphology via phase-contrast.</span>
              </div>
              <div className="p-1.5 rounded bg-slate-950 border border-slate-800">
                <span className="font-semibold text-cyan-400 block">Functional Recovery</span>
                <span className="text-slate-400">Cell-exclusion gap closure over 72 h.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Core Project Question */}
      <div className="bg-slate-950 border border-cyan-500/30 rounded-xl p-3 flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <RefreshCw className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            <strong className="text-cyan-300">Our Project Hypothesis:</strong> ECM coatings (Collagen I and Gelatin) attenuate graphene oxide cytotoxicity and accelerate functional cell-exclusion migration recovery compared to bare polystyrene.
          </span>
        </div>
      </div>
    </div>
  );
};
