import React, { useState } from 'react';
import {
  Pipette,
  FlaskConical,
  Clock,
  Gauge,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Layers,
  Table,
  Workflow,
} from 'lucide-react';
import { CoreTechniqueDiagram } from './CoreTechniqueDiagram';
import { ToxicityMatrixDiagram } from './ToxicityMatrixDiagram';

interface ProtocolStep {
  number: number;
  label: string;
  title: string;
  action: string;
  parameter: string;
  significance: string;
  icon: typeof Pipette;
  color: string;
}

const STEPS: ProtocolStep[] = [
  {
    number: 1,
    label: 'Cell Culturing',
    title: 'Seed HDF Monolayer',
    action: 'Human Dermal Fibroblasts (HDF) seeded in 96-well culture plates.',
    parameter: '5,000 cells / well; 24 h pre-incubation at 37°C, 5% CO₂ for complete adherence.',
    significance: 'Ensures a uniform, reproducible baseline monolayer prior to any nanoparticle contact.',
    icon: FlaskConical,
    color: 'border-cyan-500/50 text-cyan-400 bg-cyan-500/10',
  },
  {
    number: 2,
    label: 'Dosing Array',
    title: 'GO Media Exchange',
    action: 'Aspirate standard growth medium and replace with GO-dispersed medium.',
    parameter: 'Ladder array: 5, 10, 20, 50, and 100 µg/mL in complete culture media.',
    significance: 'Spans from sub-toxic therapeutic levels (<20 µg/mL) to acute apoptotic levels (>50 µg/mL).',
    icon: Pipette,
    color: 'border-blue-500/50 text-blue-400 bg-blue-500/10',
  },
  {
    number: 3,
    label: 'Incubation',
    title: '5-Day Kinetic Window',
    action: 'Continuous uninterrupted exposure monitored daily across 5 sequential days.',
    parameter: 'Time points: Day 1, Day 2, Day 3, Day 4, Day 5 at 37°C, 5% CO₂.',
    significance: 'Differentiates immediate acute membrane damage from cumulative intracellular stress.',
    icon: Clock,
    color: 'border-amber-500/50 text-amber-400 bg-amber-500/10',
  },
  {
    number: 4,
    label: 'Assays',
    title: 'Viability & Adhesion Readout',
    action: 'Dual spectrophotometric quantification of metabolic activity and mechanical attachment.',
    parameter: 'Viability: CCK-8 (OD 570 nm); Adhesion: Centrifugal detachment assay (OD 405 nm).',
    significance: 'Reveals the vital biological discovery: detachment precedes cell death.',
    icon: Gauge,
    color: 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10',
  },
];

export const ProtocolDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'diagram' | 'pipeline' | 'matrix'>('diagram');
  const [selectedStep, setSelectedStep] = useState<number>(1);
  const active = STEPS.find((s) => s.number === selectedStep) || STEPS[0];

  return (
    <div id="protocol-diagram-container" className="flex flex-col gap-2.5 w-full h-full justify-between">
      {/* View Switcher Bar */}
      <div className="flex items-center justify-between bg-slate-900/90 border border-slate-800 rounded-xl p-1.5 shrink-0">
        <div className="flex items-center gap-1.5 text-xs font-mono">
          <span className="text-slate-400 px-2 hidden sm:inline">View Mode:</span>
          <button
            onClick={() => setActiveTab('diagram')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'diagram'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Scientific Diagram &amp; Caption</span>
          </button>

          <button
            onClick={() => setActiveTab('pipeline')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'pipeline'
                ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/80 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Workflow className="w-3.5 h-3.5" />
            <span>4-Step Pipeline</span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'matrix'
                ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/80 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>Toxicity Heatmap Matrix</span>
          </button>
        </div>

        <span className="text-[10px] font-mono text-slate-500 px-2 hidden md:inline">
          Wang et al. 2011 · Protocol Breakdown
        </span>
      </div>

      {/* Tab 1: Core Technique Diagram & Caption */}
      {activeTab === 'diagram' && (
        <div className="flex-1 w-full overflow-hidden">
          <CoreTechniqueDiagram />
        </div>
      )}

      {/* Tab 2: 4-Step Interactive Pipeline */}
      {activeTab === 'pipeline' && (
        <div className="flex flex-col gap-3 flex-1 justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = selectedStep === step.number;
              return (
                <div key={step.number} className="relative flex flex-col">
                  <button
                    onClick={() => setSelectedStep(step.number)}
                    className={`w-full text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between h-full ${
                      isSelected
                        ? 'bg-slate-800 border-cyan-400 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400/40'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="w-5 h-5 rounded-full bg-slate-950 border border-slate-700 text-xs font-mono font-bold flex items-center justify-center text-slate-200">
                          {step.number}
                        </span>
                        <span className={`px-2 py-0.2 rounded text-[10px] font-mono uppercase font-semibold ${step.color}`}>
                          {step.label}
                        </span>
                      </div>
                      <h4 className="text-xs font-semibold text-slate-100">{step.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{step.action}</p>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-cyan-400">
                      <span className="font-mono">{isSelected ? 'Active Step' : 'Click to inspect'}</span>
                      <Icon className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </button>

                  {idx < STEPS.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-slate-600">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full md:w-44 h-24 shrink-0 bg-slate-950 rounded-lg border border-slate-800 flex flex-col items-center justify-center p-2.5 text-center">
              <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-1">
                {React.createElement(active.icon, { className: 'w-4 h-4' })}
              </div>
              <span className="text-[11px] font-mono text-cyan-300 font-semibold">Step {active.number} Focus</span>
              <span className="text-[10px] text-slate-400">{active.label}</span>
            </div>

            <div className="flex-1 space-y-1.5 w-full">
              <div>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Experimental Action &amp; Parameters</span>
                <p className="text-xs font-mono text-slate-200 mt-0.5 bg-slate-950/70 p-2 rounded border border-slate-800">
                  {active.parameter}
                </p>
              </div>
              <div>
                <span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider">Methodological Significance</span>
                <p className="text-xs text-slate-300 leading-relaxed mt-0.5">{active.significance}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-2.5 flex items-start gap-2.5 text-xs text-slate-300">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-amber-300">Diagnostic Nuance: </span>
              The 20 µg/mL and 50 µg/mL thresholds observed by Wang et al. are <span className="text-slate-100 font-medium">not universal physical constants</span>. They are tied to their modified Hummers C/O ratio and flake dimensions.
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Toxicity Heatmap Matrix */}
      {activeTab === 'matrix' && (
        <div className="flex-1 w-full overflow-hidden">
          <ToxicityMatrixDiagram />
        </div>
      )}
    </div>
  );
};

