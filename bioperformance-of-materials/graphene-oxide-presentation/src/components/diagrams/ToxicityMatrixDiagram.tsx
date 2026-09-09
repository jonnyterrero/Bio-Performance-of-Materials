import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

interface MatrixCell {
  conc: number; // in ug/mL
  day: number;
  viability: number; // percentage
  status: 'green' | 'amber' | 'red';
  note: string;
}

const MATRIX_DATA: MatrixCell[] = [
  // 5 ug/mL
  { conc: 5, day: 1, viability: 96, status: 'green', note: 'Normal spindle morphology; full monolayer adhesion (>95%).' },
  { conc: 5, day: 2, viability: 94, status: 'green', note: 'Robust proliferation, intact stress fibers.' },
  { conc: 5, day: 3, viability: 92, status: 'green', note: 'Stable confluence; negligible apoptotic markers.' },
  { conc: 5, day: 4, viability: 88, status: 'green', note: 'High survival; minimal cytoplasmic GO internalization.' },
  { conc: 5, day: 5, viability: 85, status: 'green', note: 'Safe zone: suitable for long-term biocompatible scaffolds.' },

  // 10 ug/mL
  { conc: 10, day: 1, viability: 92, status: 'green', note: 'Excellent cell spreading and active focal adhesion complexes.' },
  { conc: 10, day: 2, viability: 89, status: 'green', note: 'Normal morphology; minimal stress response.' },
  { conc: 10, day: 3, viability: 85, status: 'green', note: 'Cell retention remains comparable to control TCP.' },
  { conc: 10, day: 4, viability: 82, status: 'green', note: 'Minor membrane wrinkling; cell division continues.' },
  { conc: 10, day: 5, viability: 80, status: 'green', note: 'Sublethal threshold candidate for FGCU pilot array.' },

  // 20 ug/mL
  { conc: 20, day: 1, viability: 88, status: 'green', note: 'Initial tolerance high (>85%); cells well-spread.' },
  { conc: 20, day: 2, viability: 82, status: 'green', note: 'Early warning: slight reduction in adhesion protein synthesis.' },
  { conc: 20, day: 3, viability: 78, status: 'amber', note: 'Threshold crossover: partial detachment upon centrifugation.' },
  { conc: 20, day: 4, viability: 74, status: 'amber', note: 'Visible cytoplasmic GO accumulation in lysosomes.' },
  { conc: 20, day: 5, viability: 71, status: 'amber', note: 'Upper safety boundary: cells stressed but not fully apoptotic.' },

  // 50 ug/mL
  { conc: 50, day: 1, viability: 72, status: 'amber', note: 'Immediate adhesion impairment; down-regulation of FAK.' },
  { conc: 50, day: 2, viability: 65, status: 'red', note: 'Widespread cell rounding; loss of elongated spindle shape.' },
  { conc: 50, day: 3, viability: 58, status: 'red', note: 'Detachment from substrate accelerates; membrane blebbing.' },
  { conc: 50, day: 4, viability: 52, status: 'red', note: 'Severe mitochondrial membrane potential loss.' },
  { conc: 50, day: 5, viability: 48, status: 'red', note: 'Definitive cytotoxic collapse: >50% population apoptotic.' },

  // 100 ug/mL
  { conc: 100, day: 1, viability: 62, status: 'red', note: 'Acute toxicity: immediate mechanical shearing and rounding.' },
  { conc: 100, day: 2, viability: 54, status: 'red', note: 'Massive loss of fibronectin & laminin matrix anchors.' },
  { conc: 100, day: 3, viability: 45, status: 'red', note: 'Over 50% non-viable; heavy debris floating in culture.' },
  { conc: 100, day: 4, viability: 38, status: 'red', note: 'Severe fragmentation of nuclear chromatin.' },
  { conc: 100, day: 5, viability: 31, status: 'red', note: 'Total structural devastation; incompatible with bioengineering.' },
];

const CONCENTRATIONS = [100, 50, 20, 10, 5];
const DAYS = [1, 2, 3, 4, 5];

export const ToxicityMatrixDiagram: React.FC = () => {
  const [selectedCell, setSelectedCell] = useState<MatrixCell>(
    MATRIX_DATA.find((c) => c.conc === 50 && c.day === 3) || MATRIX_DATA[0]
  );

  const getCell = (conc: number, day: number) =>
    MATRIX_DATA.find((c) => c.conc === conc && c.day === day)!;

  const getBadgeStyle = (status: 'green' | 'amber' | 'red') => {
    switch (status) {
      case 'green':
        return 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/80';
      case 'amber':
        return 'bg-amber-950/70 border-amber-500/40 text-amber-300 hover:bg-amber-900/80';
      case 'red':
        return 'bg-rose-950/70 border-rose-500/40 text-rose-300 hover:bg-rose-900/80';
    }
  };

  return (
    <div id="toxicity-matrix-container" className="flex flex-col gap-3 w-full h-full justify-between">
      <div className="flex flex-col lg:flex-row gap-4 items-start">
        {/* Heatmap Matrix Grid */}
        <div className="flex-1 w-full bg-slate-900/90 border border-slate-800 rounded-xl p-3.5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-300 tracking-wide">
              FIBROBLAST SURVIVAL RATE MATRIX (CCK-8 %)
            </span>
            <div className="flex items-center gap-2 text-[10px] font-mono">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> &gt;80% Safe
              </span>
              <span className="flex items-center gap-1 text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> 70–79% Threshold
              </span>
              <span className="flex items-center gap-1 text-rose-400">
                <span className="w-2 h-2 rounded-full bg-rose-500" /> &lt;70% Apoptosis
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[11px] font-mono text-slate-400">
                  <th className="py-1 px-2 text-left font-semibold">GO Conc.</th>
                  {DAYS.map((d) => (
                    <th key={d} className="py-1 px-2 font-semibold">
                      Day {d}
                    </th>
                  ))}
                  <th className="py-1 px-2 text-right font-semibold">Toxicity Zone</th>
                </tr>
              </thead>
              <tbody>
                {CONCENTRATIONS.map((conc) => {
                  const isRedRow = conc >= 50;
                  const isGreenRow = conc <= 10;
                  return (
                    <tr key={conc} className="border-b border-slate-800/60 last:border-0 text-xs font-mono">
                      <td className="py-1 sm:py-1.5 px-2 text-left font-bold text-slate-200">
                        {conc} µg/mL
                      </td>
                      {DAYS.map((day) => {
                        const cell = getCell(conc, day);
                        const isSelected =
                          selectedCell.conc === conc && selectedCell.day === day;
                        return (
                          <td key={day} className="p-0.5 sm:p-1">
                            <button
                              onClick={() => setSelectedCell(cell)}
                              className={`w-full py-1 sm:py-1.5 px-1 sm:px-2 rounded border text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${getBadgeStyle(
                                cell.status
                              )} ${
                                isSelected ? 'ring-2 ring-cyan-400 scale-105 shadow-md shadow-cyan-500/20' : ''
                              }`}
                            >
                              {cell.viability}%
                            </button>
                          </td>
                        );
                      })}
                      <td className="py-1 sm:py-1.5 px-2 text-right">
                        <span
                          className={`inline-block text-[10px] px-2 py-0.5 rounded font-mono font-semibold ${
                            isGreenRow
                              ? 'bg-emerald-900/60 text-emerald-300'
                              : isRedRow
                              ? 'bg-rose-900/60 text-rose-300'
                              : 'bg-amber-900/60 text-amber-300'
                          }`}
                        >
                          {isGreenRow ? 'GREEN ZONE' : isRedRow ? 'RED ZONE' : 'TRANSITION'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Data Point Inspector Card */}
        <div className="w-full lg:w-72 bg-slate-900/95 border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between shrink-0">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
              <span className="text-[11px] font-mono text-cyan-400 font-semibold">Matrix Inspector</span>
              <span className="text-[11px] font-mono text-slate-400">
                {selectedCell.conc} µg/mL · Day {selectedCell.day}
              </span>
            </div>

            <div className="flex items-baseline gap-2 my-2">
              <span
                className={`text-3xl font-extrabold font-mono ${
                  selectedCell.status === 'green'
                    ? 'text-emerald-400'
                    : selectedCell.status === 'amber'
                    ? 'text-amber-400'
                    : 'text-rose-400'
                }`}
              >
                {selectedCell.viability}%
              </span>
              <span className="text-xs text-slate-400 font-medium">Viability Rate</span>
            </div>

            <div className="space-y-1.5 mt-3">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Cellular Condition
              </div>
              <p className="text-xs text-slate-200 leading-relaxed bg-slate-950 p-2 rounded border border-slate-800/80">
                {selectedCell.note}
              </p>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-start gap-2 text-[11px] text-slate-400">
            <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
            <span>Click any cell to inspect exact cellular behavior and morphology.</span>
          </div>
        </div>
      </div>

      {/* Core Synthesis Finding Bar */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-200">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong className="text-white">The Big Idea:</strong> Dose is not a static number—it is a continuous function of both concentration and exposure time.
          </span>
        </div>
        <div className="text-[11px] font-mono text-cyan-400 bg-cyan-950/50 px-2.5 py-1 rounded border border-cyan-800/50 shrink-0">
          Wang et al., 2011 · Fig. 2 &amp; 4
        </div>
      </div>
    </div>
  );
};
