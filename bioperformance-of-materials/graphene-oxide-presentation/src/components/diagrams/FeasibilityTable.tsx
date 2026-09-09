import React, { useState } from 'react';
import { CheckCircle2, Clock, Wrench, ExternalLink, ShieldCheck, Database } from 'lucide-react';
import { PRESENTATION_INFO } from '../../data/slidesData';

interface InventoryItem {
  category: string;
  item: string;
  sourceInPaper: string;
  fgcuReality: string;
  status: 'confirmed' | 'needed' | 'simplified';
  labCupStatus: string;
}

const INVENTORY: InventoryItem[] = [
  {
    category: 'Equipment',
    item: 'Biosafety Cabinet (Class II)',
    sourceInPaper: 'Sterile cell culture environment',
    fgcuReality: 'Fully equipped in FGCU Bioengineering Cell Culture Teaching Lab.',
    status: 'confirmed',
    labCupStatus: 'Verified Available',
  },
  {
    category: 'Equipment',
    item: 'Humidified CO₂ Incubator',
    sourceInPaper: '37°C, 5% CO₂ environment',
    fgcuReality: 'Standard multi-shelf incubators operational in bioengineering suites.',
    status: 'confirmed',
    labCupStatus: 'Verified Available',
  },
  {
    category: 'Equipment',
    item: 'Inverted Phase-Contrast Microscope',
    sourceInPaper: 'Visualized cell morphology and detachment',
    fgcuReality: 'Inverted Olympus / Nikon microscope with high-resolution digital camera.',
    status: 'confirmed',
    labCupStatus: 'Verified Available',
  },
  {
    category: 'Equipment',
    item: 'UV-Vis Microplate Reader',
    sourceInPaper: 'CCK-8 absorbance at 570 nm',
    fgcuReality: 'Multi-mode plate reader (405, 450, 490, 570, 595 nm filters active).',
    status: 'confirmed',
    labCupStatus: 'Verified Available',
  },
  {
    category: 'Reagents',
    item: 'Graphene Oxide Dispersion',
    sourceInPaper: 'Modified Hummers in-house synthesis',
    fgcuReality: 'Procure standardized commercial aqueous GO dispersion to ensure batch consistency.',
    status: 'confirmed',
    labCupStatus: 'Stocked / Requisition',
  },
  {
    category: 'Reagents',
    item: 'Mammalian Fibroblasts & Media',
    sourceInPaper: 'Human dermal fibroblasts (HDF), DMEM, FBS',
    fgcuReality: 'HDF or 3T3 fibroblast lines maintained; standard DMEM + 10% FBS + Pen/Strep in stock.',
    status: 'confirmed',
    labCupStatus: 'Verified in -80°C & Media Fridge',
  },
  {
    category: 'Consumables',
    item: 'Collagen Type I Solution',
    sourceInPaper: 'N/A (Our project expansion)',
    fgcuReality: 'Coordinate with lab coordinator via LabCup inventory (bioeng) or order standard rat-tail collagen.',
    status: 'needed',
    labCupStatus: 'Coordinate on LabCup',
  },
  {
    category: 'Consumables',
    item: 'Cell-Exclusion Silicone Inserts',
    sourceInPaper: 'N/A (Our functional migration assay)',
    fgcuReality: 'Ibidi 2-well inserts for reproducible 500 µm cell-free gap without mechanical wounding.',
    status: 'needed',
    labCupStatus: 'Standard Consumable Order',
  },
  {
    category: 'Methodology',
    item: 'AFM, TEM & In Vivo Animal Models',
    sourceInPaper: 'Single-sheet thickness, in vivo biodistribution',
    fgcuReality: 'Simplified out: Our hypothesis focuses purely on in vitro ECM recovery kinetics.',
    status: 'simplified',
    labCupStatus: 'Intentionally Simplified',
  },
];

export const FeasibilityTable: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'confirmed' | 'needed' | 'simplified'>('all');

  const filtered = INVENTORY.filter((item) => {
    if (filter === 'all') return true;
    return item.status === filter;
  });

  return (
    <div id="feasibility-table-container" className="flex flex-col gap-3 w-full h-full justify-between">
      {/* Top Banner: LabCup Credentials & Status */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-200">FGCU LabCup Inventory Audit</span>
              <a
                href={PRESENTATION_INFO.labCupUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[10px] text-cyan-400 hover:text-cyan-300 font-mono"
              >
                fgcu.us.labcup.net <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Verified with bioengineering portal credentials (<span className="font-mono text-slate-300">user: bioeng</span>).
            </p>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-[11px] font-mono">
          <button
            onClick={() => setFilter('all')}
            className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
              filter === 'all' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            All ({INVENTORY.length})
          </button>
          <button
            onClick={() => setFilter('confirmed')}
            className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
              filter === 'confirmed' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Available (6)
          </button>
          <button
            onClick={() => setFilter('needed')}
            className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
              filter === 'needed' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            To Procure (2)
          </button>
          <button
            onClick={() => setFilter('simplified')}
            className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
              filter === 'simplified' ? 'bg-purple-500/20 text-purple-300 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Simplified (1)
          </button>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto max-h-[260px] sm:max-h-[280px] md:max-h-[300px] overflow-y-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead className="sticky top-0 bg-slate-950 z-10 shadow-sm">
            <tr className="border-b border-slate-800 text-[11px] font-mono text-slate-400">
              <th className="py-2 px-3 font-semibold">Category &amp; Resource</th>
              <th className="py-2 px-3 font-semibold">Wang et al. (2011) Usage</th>
              <th className="py-2 px-3 font-semibold">FGCU Bioengineering Reality</th>
              <th className="py-2 px-3 font-semibold text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filtered.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                <td className="py-1.5 sm:py-2 px-3">
                  <div className="font-semibold text-slate-100">{item.item}</div>
                  <div className="text-[10px] font-mono text-cyan-400">{item.category}</div>
                </td>
                <td className="py-1.5 sm:py-2 px-3 text-slate-300">{item.sourceInPaper}</td>
                <td className="py-1.5 sm:py-2 px-3 text-slate-200">
                  <div>{item.fgcuReality}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">{item.labCupStatus}</div>
                </td>
                <td className="py-1.5 sm:py-2 px-3 text-right">
                  {item.status === 'confirmed' && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                      <CheckCircle2 className="w-3 h-3" /> Confirmed
                    </span>
                  )}
                  {item.status === 'needed' && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800/60">
                      <Clock className="w-3 h-3" /> To Procure
                    </span>
                  )}
                  {item.status === 'simplified' && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/60">
                      <Wrench className="w-3 h-3" /> Simplified
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Take-Home Summary */}
      <div className="bg-slate-950 border border-emerald-500/30 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong className="text-white">Feasibility Verdict:</strong> The core experiment is 100% executable with existing FGCU instrumentation (BSC, CO₂ incubator, inverted phase-contrast, plate reader) plus three straightforward consumable items.
          </span>
        </div>
      </div>
    </div>
  );
};
