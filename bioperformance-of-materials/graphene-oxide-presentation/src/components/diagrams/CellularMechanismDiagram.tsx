import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, Sparkles, ArrowRight, CornerDownRight } from 'lucide-react';

export const CellularMechanismDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'healthy' | 'exposed' | 'both'>('both');

  return (
    <div id="cellular-mechanism-container" className="flex flex-col gap-3 w-full h-full justify-between">
      {/* Tab Switcher for Quick Inspection */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs font-mono">
          <button
            onClick={() => setActiveTab('both')}
            className={`px-3 py-1 rounded transition-all cursor-pointer ${
              activeTab === 'both' ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            Side-by-Side Comparison
          </button>
          <button
            onClick={() => setActiveTab('healthy')}
            className={`px-3 py-1 rounded transition-all cursor-pointer ${
              activeTab === 'healthy' ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            Healthy Control Only
          </button>
          <button
            onClick={() => setActiveTab('exposed')}
            className={`px-3 py-1 rounded transition-all cursor-pointer ${
              activeTab === 'exposed' ? 'bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            GO-Exposed (&gt;50 µg/mL)
          </button>
        </div>

        <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400">
          Wang et al., 2011 · TEM &amp; Western Blot
        </span>
      </div>

      {/* Visual Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 items-stretch">
        {/* Card 1: Healthy Control HDF */}
        {(activeTab === 'both' || activeTab === 'healthy') && (
          <div className="bg-slate-900/80 border border-emerald-500/30 rounded-xl p-3 sm:p-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                    Healthy HDF Monolayer
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40">
                  Control
                </span>
              </div>

              {/* Schematic Graphic: Flat Spindle Cell */}
              <div className="w-full h-20 bg-slate-950 rounded-lg border border-slate-800 relative overflow-hidden flex items-center justify-center mb-2.5">
                {/* Cell body */}
                <div className="w-4/5 h-9 bg-gradient-to-r from-emerald-900/40 via-emerald-600/30 to-emerald-900/40 border border-emerald-500/60 rounded-[50px] relative flex items-center justify-center">
                  {/* Nucleus */}
                  <div className="w-8 h-4.5 rounded-full bg-emerald-400/40 border border-emerald-300/60 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-200" />
                  </div>
                  {/* Focal Adhesions bottom */}
                  <div className="absolute -bottom-1 inset-x-6 flex justify-between">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-2 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/80" title="Focal Adhesion Complex (FAK)" />
                    ))}
                  </div>
                </div>
                {/* Substrate base line */}
                <div className="absolute bottom-1 inset-x-4 h-0.5 bg-slate-700/80" />
                <span className="absolute bottom-1.5 right-4 text-[9px] font-mono text-slate-500">Substrate Matrix</span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100">Spindle Morphology: </strong>
                    <span className="text-slate-300">Elongated, flat, highly adherent architecture anchored across the substrate.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100">Intact Focal Adhesions: </strong>
                    <span className="text-slate-300">Robust expression of FAK (Focal Adhesion Kinase), vinculin, and actin stress fibers.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100">Extracellular Secretion: </strong>
                    <span className="text-slate-300">Abundant synthesis of fibronectin and laminin ECM attachment proteins.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100">Cell Cycle Progression: </strong>
                    <span className="text-slate-300">Sustained Cyclin D3 expression promoting steady cell cycle progression.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2.5 pt-1.5 border-t border-slate-800 text-[10px] font-mono text-emerald-400 flex items-center justify-between">
              <span>Viability &gt; 95%</span>
              <span>Full Attachment</span>
            </div>
          </div>
        )}

        {/* Card 2: GO-Exposed HDF (>50 µg/mL) */}
        {(activeTab === 'both' || activeTab === 'exposed') && (
          <div className="bg-slate-900/80 border border-rose-500/30 rounded-xl p-3 sm:p-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400 font-mono">
                    GO-Exposed HDF (&gt;50 µg/mL)
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950/60 text-rose-300 border border-rose-800/40">
                  Cytotoxic Cascade
                </span>
              </div>

              {/* Schematic Graphic: Rounded Collapsed Cell with Internalized GO */}
              <div className="w-full h-20 bg-slate-950 rounded-lg border border-slate-800 relative overflow-hidden flex items-center justify-center mb-2.5">
                {/* Shrunken, rounded cell body lifting off substrate */}
                <div className="w-14 h-12 bg-gradient-to-br from-rose-900/40 via-amber-800/30 to-rose-900/40 border border-rose-500/70 rounded-full relative flex items-center justify-center -translate-y-1">
                  {/* Shrunken nucleus */}
                  <div className="w-5 h-5 rounded-full bg-rose-400/30 border border-rose-400/50 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-300" />
                  </div>
                  {/* Internalized GO flakes (dark jagged specks) */}
                  <div className="absolute top-1.5 left-2 w-2 h-1 bg-slate-200/90 transform rotate-45 rounded-[1px]" title="Internalized GO Sheet in Lysosome" />
                  <div className="absolute bottom-1.5 right-2 w-2.5 h-1 bg-slate-200/90 transform -rotate-12 rounded-[1px]" title="Internalized GO in Mitochondria" />
                  <div className="absolute top-2.5 right-2 w-1.5 h-1 bg-slate-200/90 transform rotate-12 rounded-[1px]" />
                </div>
                {/* Detached gap above substrate */}
                <div className="absolute bottom-1 inset-x-4 h-0.5 bg-slate-700/80" />
                <span className="absolute bottom-1.5 right-4 text-[9px] font-mono text-rose-400">Detached from Substrate</span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100">1. GO Internalization: </strong>
                    <span className="text-slate-300">TEM confirmed GO sheets penetrate cytoplasm and accumulate inside lysosomes &amp; mitochondria.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100">2. Protein Down-Regulation: </strong>
                    <span className="text-slate-300">Dramatic suppression of laminin, fibronectin, FAK, and Cyclin D3 (blocking cell cycle).</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100">3. Morphological Collapse: </strong>
                    <span className="text-slate-300">Cell rounding, retraction of filopodia, loss of anchorage, and apoptotic membrane blebbing.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2.5 pt-1.5 border-t border-slate-800 text-[10px] font-mono text-rose-400 flex items-center justify-between">
              <span>Viability &lt; 50%</span>
              <span>Severe Detachment &amp; Apoptosis</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Take-Home Banner */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <CornerDownRight className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            <strong className="text-cyan-300">Key Takeaway for Classmates:</strong> A cell can be metabolically active on a simple viability test, yet already functionally compromised due to loss of adhesion complexes.
          </span>
        </div>
      </div>
    </div>
  );
};
