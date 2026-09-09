import React, { useState } from 'react';
import { Layers, Eye, Activity, CheckCircle2, ChevronRight } from 'lucide-react';

interface CharacterizationPillar {
  id: 'afm' | 'tem' | 'ftir';
  name: string;
  technique: string;
  measurement: string;
  result: string;
  significance: string;
  icon: typeof Layers;
  accentColor: string;
}

const PILLARS: CharacterizationPillar[] = [
  {
    id: 'afm',
    name: 'AFM',
    technique: 'Atomic Force Microscopy',
    measurement: 'Vertical Height Profile (~1 nm)',
    result: 'Measures single-layer GO sheets at ~1.0 nm thickness.',
    significance: 'Confirms complete chemical exfoliation of graphite into true 2D monolayer sheets rather than thick graphite platelets.',
    icon: Layers,
    accentColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
  },
  {
    id: 'tem',
    name: 'TEM',
    technique: 'Transmission Electron Microscopy',
    measurement: '2D Sheet Morphology & Lateral Dimensions',
    result: 'Visualizes transparent, folded, crumpled 2D sheet architecture.',
    significance: 'Validates 2D planar structure. Surface ripples and folded edges increase specific surface area available for cellular interactions.',
    icon: Eye,
    accentColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
  },
  {
    id: 'ftir',
    name: 'FT-IR',
    technique: 'Fourier-Transform Infrared Spectroscopy',
    measurement: 'Surface Functional Groups Identification',
    result: 'Identifies O-H (~3400 cm⁻¹), C=O (~1720 cm⁻¹), C-O epoxy (~1220 cm⁻¹), C-O alkoxy (~1060 cm⁻¹).',
    significance: 'Proves high degree of oxygen lattice functionalization, imparting strong hydrophilicity and stable aqueous dispersibility without toxic surfactants.',
    icon: Activity,
    accentColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
  },
];

export const SynthesisDiagram: React.FC = () => {
  const [activePillar, setActivePillar] = useState<'afm' | 'tem' | 'ftir'>('afm');

  const selected = PILLARS.find((p) => p.id === activePillar) || PILLARS[0];

  return (
    <div id="synthesis-diagram-container" className="flex flex-col gap-4 w-full h-full justify-between">
      {/* Top Banner: Synthesis Workflow */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm shrink-0">
            GO
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Synthesis Route</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">Modified Hummers Method</span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Natural graphite flakes treated with KMnO₄ and concentrated H₂SO₄ → heavy oxidation &amp; ultrasonic exfoliation → aqueous 2D sheets.
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 shrink-0 text-[11px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          Validated Monolayer
        </div>
      </div>

      {/* 3 Interactive Characterization Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
        {PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          const isSelected = activePillar === pillar.id;
          return (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(pillar.id)}
              className={`text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-800/90 border-cyan-400/80 shadow-lg shadow-cyan-500/10 scale-[1.01]'
                  : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`px-2 py-0.5 rounded text-xs font-bold font-mono ${pillar.accentColor}`}>
                    {pillar.name}
                  </span>
                  <Icon className="w-4 h-4 text-slate-400" />
                </div>
                <h4 className="text-xs font-semibold text-slate-100">{pillar.technique}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 font-mono">{pillar.measurement}</p>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-cyan-400 font-medium">
                <span>{isSelected ? 'Viewing Specs' : 'Click to inspect'}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Spec Card for Active Pillar */}
      <div className="bg-slate-900/90 border border-cyan-500/20 rounded-xl p-3 sm:p-3.5 flex flex-col md:flex-row gap-4 items-start">
        {/* Visual Schematic Diagram */}
        <div className="w-full md:w-52 h-24 sm:h-28 shrink-0 bg-slate-950 rounded-lg border border-slate-800 flex flex-col items-center justify-center p-2.5 relative overflow-hidden">
          {activePillar === 'afm' && (
            <div className="flex flex-col items-center gap-1.5 w-full">
              <div className="w-full h-8 relative flex items-center justify-center">
                <div className="w-4/5 h-2 bg-gradient-to-r from-cyan-500/40 via-cyan-400 to-cyan-500/40 rounded shadow-md" />
                <div className="absolute top-0 right-8 text-[9px] font-mono text-cyan-300 font-bold bg-slate-900/90 px-1 border border-cyan-500/40 rounded">
                  ~1.0 nm
                </div>
              </div>
              <div className="w-full h-1 bg-slate-700/50 rounded" />
              <span className="text-[10px] text-slate-400 font-mono">AFM Tip Scanning Monolayer</span>
            </div>
          )}

          {activePillar === 'tem' && (
            <div className="flex flex-col items-center gap-1 w-full">
              <div className="w-24 h-12 border border-emerald-400/50 rounded-lg bg-emerald-500/10 relative transform -rotate-3 flex items-center justify-center">
                <div className="w-16 h-7 border border-dashed border-emerald-300/40 rounded" />
                <span className="absolute bottom-1 right-1 text-[8px] font-mono text-emerald-300">200 nm</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono mt-0.5">Wrinkled 2D Sheet Matrix</span>
            </div>
          )}

          {activePillar === 'ftir' && (
            <div className="flex flex-col items-center gap-1 w-full">
              <div className="w-full h-10 flex items-end justify-between px-2 gap-1 border-b border-slate-700 pb-1">
                <div className="w-2 bg-amber-400/70 h-7 rounded-t" title="O-H 3400" />
                <div className="w-2 bg-amber-400/40 h-2.5 rounded-t" />
                <div className="w-2 bg-amber-400/80 h-9 rounded-t" title="C=O 1720" />
                <div className="w-2 bg-amber-400/50 h-4.5 rounded-t" title="C-O epoxy 1220" />
                <div className="w-2 bg-amber-400/90 h-10 rounded-t" title="C-O alkoxy 1060" />
              </div>
              <span className="text-[10px] text-slate-400 font-mono">FT-IR Characteristic Peaks</span>
            </div>
          )}
        </div>

        {/* Text Breakdown */}
        <div className="flex-1 space-y-1.5">
          <div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Experimental Finding</span>
            <p className="text-xs font-medium text-slate-100 mt-0.5">{selected.result}</p>
          </div>
          <div>
            <span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider">Biological Translation &amp; Significance</span>
            <p className="text-xs text-slate-300 leading-relaxed mt-0.5">{selected.significance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
