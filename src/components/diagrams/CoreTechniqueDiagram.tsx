import React, { useState } from 'react';
import {
  Sparkles,
  Copy,
  Check,
  ZoomIn,
  Layers,
  FlaskConical,
  Activity,
  ArrowRight,
  Info,
  ExternalLink,
  Download,
  Eye,
  CheckCircle2,
} from 'lucide-react';

interface StageInfo {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  audienceTakeaway: string;
  color: string;
  badgeColor: string;
}

const STAGES: StageInfo[] = [
  {
    id: 'titration',
    stepNumber: '01',
    title: 'Nanomaterial Dosing Ladder',
    subtitle: 'Ultrasonic dispersion in complete cell medium',
    audienceTakeaway:
      'Graphene Oxide sheets are suspended at 0, 5, 10, 20, 50, and 100 µg/mL to test a broad biological spectrum from safe to lethal.',
    color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/40 text-cyan-300',
    badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-800/60',
  },
  {
    id: 'culture',
    stepNumber: '02',
    title: 'Human Fibroblast Seeding',
    subtitle: '24-hour attachment on culture substrate',
    audienceTakeaway:
      'Normal Human Dermal Fibroblasts (HDF) attach and stretch into healthy elongated spindle shapes before any material is added.',
    color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-300',
    badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-800/60',
  },
  {
    id: 'bifurcation',
    stepNumber: '03',
    title: 'Dose-Dependent Cellular Fate',
    subtitle: 'Bifurcated response: Safe vs. Toxic threshold',
    audienceTakeaway:
      'Low doses (≤20 µg/mL) leave cells thriving; high doses (≥50 µg/mL) enter lysosomes, dissolve adhesion proteins, and detach cells.',
    color: 'from-amber-500/20 to-rose-500/10 border-amber-500/40 text-amber-300',
    badgeColor: 'bg-amber-950 text-amber-300 border-amber-800/60',
  },
  {
    id: 'assays',
    stepNumber: '04',
    title: 'Dual Analytical Readouts',
    subtitle: 'CCK-8 viability & centrifugal adhesion force',
    audienceTakeaway:
      'Spectrophotometry confirms that loss of cell adhesion (detachment) precedes metabolic death, revealing the mechanism of toxicity.',
    color: 'from-purple-500/20 to-indigo-500/10 border-purple-500/40 text-purple-300',
    badgeColor: 'bg-purple-950 text-purple-300 border-purple-800/60',
  },
];

export const CORE_TECHNIQUE_CAPTION =
  'Figure 1: Schematic illustration of the in vitro Graphene Oxide (GO) dose-dependent cellular assay on human dermal fibroblasts (HDF). Exfoliated monolayer GO nanosheets (5–100 µg/mL) are applied to confluent fibroblasts over a 1–5 day exposure window. The assay identifies a critical biocompatibility threshold: concentrations ≤20 µg/mL preserve spindle morphology, focal adhesion complexes, and >80% metabolic viability (CCK-8 assay), whereas concentrations ≥50 µg/mL induce endosomal internalization, cytoskeletal disruption, loss of adhesive anchoring, and apoptotic detachment.';

export const CoreTechniqueDiagram: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [activeStage, setActiveStage] = useState<string>('bifurcation');
  const [copiedCaption, setCopiedCaption] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'visual' | 'comparison'>('visual');

  const handleCopyCaption = () => {
    navigator.clipboard.writeText(CORE_TECHNIQUE_CAPTION);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2200);
  };

  return (
    <div
      id="core-technique-diagram-root"
      className="flex flex-col gap-2 w-full h-full justify-between select-text"
    >
      {/* Header bar with Mode Toggles & Caption Action */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900/90 border border-slate-800 rounded-xl p-2 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Layers className="w-3 h-3" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Core Experimental Technique
            </span>
            <span className="hidden sm:inline-block text-[11px] text-slate-400 ml-2">
              In Vitro GO Cellular Dosing &amp; Dual-Readout Viability Assay
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
            <button
              onClick={() => setViewMode('visual')}
              className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                viewMode === 'visual'
                  ? 'bg-cyan-950 text-cyan-300 font-semibold border border-cyan-800/60'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Interactive Schematic
            </button>
            <button
              onClick={() => setViewMode('comparison')}
              className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                viewMode === 'comparison'
                  ? 'bg-cyan-950 text-cyan-300 font-semibold border border-cyan-800/60'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Cell Fate Comparison
            </button>
          </div>

          <button
            onClick={handleCopyCaption}
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono transition-colors cursor-pointer"
            title="Copy formatted scientific caption for slide or paper"
          >
            {copiedCaption ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-cyan-400" />
                <span>Copy Caption</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Diagram Area */}
      <div className="flex-1 w-full bg-slate-950 border border-slate-800/90 rounded-xl p-2.5 sm:p-3 flex flex-col justify-between overflow-hidden relative shadow-inner">
        {viewMode === 'visual' ? (
          /* INTERACTIVE SCHEMATIC VIEW */
          <div className="flex flex-col justify-between h-full gap-2">
            {/* 4 Interactive Chronological Stage Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2">
              {STAGES.map((s) => {
                const isSelected = activeStage === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveStage(s.id)}
                    className={`p-1.5 sm:p-2 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-400 ring-1 ring-cyan-400/50 shadow-sm'
                        : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[9px] font-mono font-bold text-slate-400">
                        STAGE {s.stepNumber}
                      </span>
                      <span className={`text-[8px] font-mono px-1 py-0.1 rounded border ${s.badgeColor}`}>
                        {s.id === 'bifurcation' ? 'CRITICAL' : 'PIPELINE'}
                      </span>
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-100 truncate">
                      {s.title}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 truncate mt-0.5">
                      {s.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* High-Fidelity Scientific Vector Illustration Container */}
            <div className="flex-1 w-full h-[150px] sm:h-[165px] md:h-[185px] max-h-[190px] bg-slate-900/70 border border-slate-800 rounded-xl p-2 flex flex-col justify-center relative overflow-hidden">
              {/* Background technical grid */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* The SVG Scientific Workflow Graphic */}
              <svg
                viewBox="0 0 920 250"
                className="w-full h-full max-h-[240px] drop-shadow-md select-none"
              >
                <defs>
                  {/* Gradients */}
                  <linearGradient id="goSheetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#d97706" stopOpacity="0.7" />
                  </linearGradient>

                  <linearGradient id="healthyCellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.7" />
                  </linearGradient>

                  <linearGradient id="stressedCellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#e11d48" stopOpacity="0.7" />
                  </linearGradient>

                  <linearGradient id="mediumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="0.25" />
                  </linearGradient>

                  {/* Filter for glow */}
                  <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* ================= STAGE 1: Dosing Microplate ================= */}
                <g transform="translate(15, 20)">
                  {/* Plate Box */}
                  <rect
                    x="0"
                    y="10"
                    width="180"
                    height="170"
                    rx="10"
                    fill="#090d16"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                  />
                  <text
                    x="15"
                    y="32"
                    fill="#38bdf8"
                    fontFamily="monospace"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    1. DOSING ARRAY (µg/mL)
                  </text>

                  {/* Microplate Wells Ladder */}
                  {[
                    { label: '0 µg/mL', col: '#94a3b8', y: 50, desc: 'Control' },
                    { label: '5 µg/mL', col: '#10b981', y: 75, desc: 'Safe' },
                    { label: '10 µg/mL', col: '#10b981', y: 100, desc: 'Safe' },
                    { label: '20 µg/mL', col: '#34d399', y: 125, desc: 'Sub-toxic' },
                    { label: '50 µg/mL', col: '#f59e0b', y: 150, desc: 'Detachment' },
                    { label: '100 µg/mL', col: '#f43f5e', y: 175, desc: 'Apoptosis' },
                  ].map((well, idx) => (
                    <g key={idx} transform={`translate(15, ${well.y})`}>
                      <circle cx="10" cy="0" r="7" fill="#0f172a" stroke={well.col} strokeWidth="1.5" />
                      {/* Floating GO Flakes in well */}
                      {idx > 0 && (
                        <polygon
                          points="8,-2 13,-1 11,3 7,1"
                          fill="#f59e0b"
                          opacity={0.8 + idx * 0.04}
                        />
                      )}
                      <text x="26" y="3" fill="#e2e8f0" fontFamily="monospace" fontSize="9.5">
                        {well.label}
                      </text>
                      <text x="110" y="3" fill={well.col} fontFamily="monospace" fontSize="8.5" fontWeight="bold">
                        {well.desc}
                      </text>
                    </g>
                  ))}
                </g>

                {/* Arrow 1 -> 2 */}
                <path
                  d="M 205 105 L 225 105"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeDasharray="3 3"
                  markerEnd="url(#arrow)"
                />
                <polygon points="225,101 233,105 225,109" fill="#38bdf8" />

                {/* ================= STAGE 2: Monolayer Seeding ================= */}
                <g transform="translate(245, 20)">
                  <rect
                    x="0"
                    y="10"
                    width="190"
                    height="170"
                    rx="10"
                    fill="#090d16"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                  />
                  <text
                    x="15"
                    y="32"
                    fill="#34d399"
                    fontFamily="monospace"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    2. FIBROBLAST MONOLAYER
                  </text>

                  {/* Culture medium fill */}
                  <rect x="10" y="45" width="170" height="95" rx="6" fill="url(#mediumGrad)" />
                  <text x="15" y="60" fill="#7dd3fc" fontSize="8.5" fontFamily="sans-serif">
                    Complete Growth Medium (37°C, 5% CO₂)
                  </text>

                  {/* Culture substrate bar */}
                  <rect x="10" y="130" width="170" height="8" rx="2" fill="#334155" />
                  <text x="15" y="152" fill="#94a3b8" fontSize="8" fontFamily="monospace">
                    Standard Polystyrene (TCP)
                  </text>

                  {/* Healthy Spindle Fibroblasts Adhered */}
                  {/* Cell 1 */}
                  <path
                    d="M 25 130 Q 55 110 95 130 Q 60 120 25 130 Z"
                    fill="url(#healthyCellGrad)"
                    stroke="#10b981"
                    strokeWidth="1"
                  />
                  <ellipse cx="60" cy="124" rx="5" ry="3" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="0.8" />

                  {/* Cell 2 */}
                  <path
                    d="M 85 130 Q 125 105 165 130 Q 130 118 85 130 Z"
                    fill="url(#healthyCellGrad)"
                    stroke="#10b981"
                    strokeWidth="1"
                  />
                  <ellipse cx="125" cy="122" rx="6" ry="3.5" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="0.8" />

                  {/* Actin stress fiber cues */}
                  <line x1="35" y1="128" x2="80" y2="124" stroke="#6ee7b7" strokeWidth="0.8" strokeDasharray="2 1" />
                  <line x1="95" y1="127" x2="155" y2="125" stroke="#6ee7b7" strokeWidth="0.8" strokeDasharray="2 1" />

                  <text x="15" y="170" fill="#6ee7b7" fontSize="8.5" fontFamily="monospace">
                    ✓ Intact Focal Adhesions (FAK+)
                  </text>
                </g>

                {/* Arrow 2 -> 3 */}
                <path
                  d="M 445 105 L 465 105"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeDasharray="3 3"
                />
                <polygon points="465,101 473,105 465,109" fill="#38bdf8" />

                {/* ================= STAGE 3: Bifurcation Mechanism ================= */}
                <g transform="translate(485, 20)">
                  <rect
                    x="0"
                    y="10"
                    width="220"
                    height="170"
                    rx="10"
                    fill="#090d16"
                    stroke="#f59e0b"
                    strokeWidth="1.5"
                  />
                  <text
                    x="12"
                    y="32"
                    fill="#fbbf24"
                    fontFamily="monospace"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    3. DOSE BIFURCATION (1-5d)
                  </text>

                  {/* Top Split: Low Dose Path */}
                  <g transform="translate(10, 42)">
                    <rect x="0" y="0" width="200" height="58" rx="6" fill="#064e3b" fillOpacity="0.4" stroke="#059669" strokeWidth="1" />
                    <text x="8" y="14" fill="#34d399" fontSize="9" fontFamily="monospace" fontWeight="bold">
                      LOW DOSE (≤ 20 µg/mL) → Safe
                    </text>
                    {/* Fibroblast with benign GO surface contact */}
                    <path
                      d="M 15 46 Q 50 30 85 46 Q 50 38 15 46 Z"
                      fill="url(#healthyCellGrad)"
                      stroke="#10b981"
                      strokeWidth="1"
                    />
                    <ellipse cx="50" cy="40" rx="4" ry="2.5" fill="#1e3a8a" />
                    {/* Floating GO nanosheet above cell */}
                    <polygon points="55,22 68,24 64,30 52,28" fill="url(#goSheetGrad)" opacity="0.8" />
                    <text x="95" y="30" fill="#a7f3d0" fontSize="8" fontFamily="sans-serif">
                      • Viability &gt; 80% (CCK-8)
                    </text>
                    <text x="95" y="42" fill="#a7f3d0" fontSize="8" fontFamily="sans-serif">
                      • Spindle morphology intact
                    </text>
                    <text x="95" y="52" fill="#a7f3d0" fontSize="8" fontFamily="sans-serif">
                      • Minimal ROS generation
                    </text>
                  </g>

                  {/* Bottom Split: High Dose Path */}
                  <g transform="translate(10, 107)">
                    <rect x="0" y="0" width="200" height="65" rx="6" fill="#881337" fillOpacity="0.4" stroke="#e11d48" strokeWidth="1" />
                    <text x="8" y="13" fill="#fb7185" fontSize="9" fontFamily="monospace" fontWeight="bold">
                      HIGH DOSE (≥ 50 µg/mL) → Toxic
                    </text>
                    {/* Rounded shrunken detached cell with blebbing */}
                    <circle cx="35" cy="38" r="14" fill="url(#stressedCellGrad)" stroke="#f43f5e" strokeWidth="1.2" />
                    {/* Blebs */}
                    <circle cx="23" cy="30" r="4" fill="#fb7185" opacity="0.8" />
                    <circle cx="46" cy="45" r="3.5" fill="#fb7185" opacity="0.8" />
                    {/* Internalized GO in endosome */}
                    <polygon points="32,36 38,37 36,41 30,39" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="0.8" />
                    <text x="65" y="28" fill="#fecdd3" fontSize="8" fontFamily="sans-serif">
                      • Endosomal internalization
                    </text>
                    <text x="65" y="40" fill="#fecdd3" fontSize="8" fontFamily="sans-serif">
                      • Cell rounding &amp; detachment
                    </text>
                    <text x="65" y="52" fill="#fecdd3" fontSize="8" fontFamily="sans-serif">
                      • Severe apoptosis blebbing
                    </text>
                  </g>
                </g>

                {/* Arrow 3 -> 4 */}
                <path
                  d="M 715 105 L 735 105"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeDasharray="3 3"
                />
                <polygon points="735,101 743,105 735,109" fill="#38bdf8" />

                {/* ================= STAGE 4: Analytical Quantification ================= */}
                <g transform="translate(755, 20)">
                  <rect
                    x="0"
                    y="10"
                    width="150"
                    height="170"
                    rx="10"
                    fill="#090d16"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                  />
                  <text
                    x="10"
                    y="32"
                    fill="#c084fc"
                    fontFamily="monospace"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    4. DUAL QUANTIFICATION
                  </text>

                  {/* Readout 1: CCK-8 Assay */}
                  <g transform="translate(10, 45)">
                    <rect x="0" y="0" width="130" height="52" rx="6" fill="#1e1b4b" stroke="#7e22ce" strokeWidth="1" />
                    <text x="8" y="14" fill="#e9d5ff" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
                      A. Metabolic Viability
                    </text>
                    <text x="8" y="27" fill="#d8b4fe" fontSize="8" fontFamily="sans-serif">
                      CCK-8 WST-8 reduction
                    </text>
                    <text x="8" y="38" fill="#facc15" fontSize="8" fontFamily="monospace">
                      OD 570 nm colorimetry
                    </text>
                  </g>

                  {/* Readout 2: Centrifugation Adhesion */}
                  <g transform="translate(10, 105)">
                    <rect x="0" y="0" width="130" height="66" rx="6" fill="#1e1b4b" stroke="#7e22ce" strokeWidth="1" />
                    <text x="8" y="14" fill="#e9d5ff" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
                      B. Adhesive Retention
                    </text>
                    <text x="8" y="27" fill="#d8b4fe" fontSize="8" fontFamily="sans-serif">
                      Centrifugal detachment test
                    </text>
                    <text x="8" y="38" fill="#facc15" fontSize="8" fontFamily="monospace">
                      OD 405 nm quantification
                    </text>
                    <text x="8" y="55" fill="#38bdf8" fontSize="7.5" fontFamily="sans-serif">
                      Detachment precedes death!
                    </text>
                  </g>
                </g>

                {/* Bottom Timeline Bar */}
                <g transform="translate(15, 205)">
                  <rect x="0" y="0" width="890" height="28" rx="6" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
                  <text x="15" y="18" fill="#94a3b8" fontFamily="monospace" fontSize="9.5">
                    EXPOSURE TIMELINE:
                  </text>
                  <text x="145" y="18" fill="#38bdf8" fontFamily="monospace" fontSize="9.5" fontWeight="bold">
                    Hour 0: Seed HDF
                  </text>
                  <text x="310" y="18" fill="#34d399" fontFamily="monospace" fontSize="9.5" fontWeight="bold">
                    Hour 24: Add GO Ladder
                  </text>
                  <text x="515" y="18" fill="#fbbf24" fontFamily="monospace" fontSize="9.5" fontWeight="bold">
                    Day 1-3: Adhesion &amp; Uptake
                  </text>
                  <text x="735" y="18" fill="#f43f5e" fontFamily="monospace" fontSize="9.5" fontWeight="bold">
                    Day 5: Chronic Readout
                  </text>
                </g>
              </svg>

              {/* Dynamic Stage Takeaway Pill */}
              <div className="mt-1.5 p-1.5 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between text-[11px] text-slate-300">
                <div className="flex items-center gap-1.5 min-w-0">
                  <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="font-mono text-cyan-300 font-semibold shrink-0">
                    {STAGES.find((s) => s.id === activeStage)?.title}:
                  </span>
                  <span className="text-slate-300 truncate">
                    {STAGES.find((s) => s.id === activeStage)?.audienceTakeaway}
                  </span>
                </div>
                <span className="text-[9px] font-mono text-slate-500 shrink-0 ml-2 hidden sm:inline">
                  Interactive Node Active
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* CELL FATE COMPARISON VIEW (DEEP-DIVE PEDAGOGICAL VIEW) */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full overflow-y-auto">
            {/* Safe Zone Fibroblast State */}
            <div className="bg-emerald-950/30 border border-emerald-500/40 rounded-xl p-2.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-1.5 border-b border-emerald-900/60 mb-1.5">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    Condition A: Sub-Toxic Dosing (≤ 20 µg/mL)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    &gt; 80% Viability
                  </span>
                </div>

                <div className="space-y-1.5 text-[11px] text-slate-200">
                  <div className="p-1.5 rounded bg-slate-950/70 border border-emerald-900/40">
                    <strong className="text-emerald-300 block mb-0.5">Cell Morphology:</strong>
                    Normal spindle-shaped bipolar geometry with prominent, aligned actin stress fibers anchored to the substrate.
                  </div>
                  <div className="p-1.5 rounded bg-slate-950/70 border border-emerald-900/40">
                    <strong className="text-emerald-300 block mb-0.5">Nanomaterial Interaction:</strong>
                    GO nanosheets lightly adsorb to the glycocalyx and apical plasma membrane without inducing mechanical puncture or lysosomal leak.
                  </div>
                  <div className="p-1.5 rounded bg-slate-950/70 border border-emerald-900/40">
                    <strong className="text-emerald-300 block mb-0.5">Adhesion Complex Retention:</strong>
                    Intact focal adhesion kinase (FAK), laminin, and fibronectin expression; cells resist centrifugal detachment forces.
                  </div>
                </div>
              </div>

              <div className="mt-2 pt-1.5 border-t border-emerald-900/60 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                <span>Direct Translation: Baseline for FGCU Sublethal Pilot</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>

            {/* Toxic Zone Fibroblast State */}
            <div className="bg-rose-950/30 border border-rose-500/40 rounded-xl p-2.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-1.5 border-b border-rose-900/60 mb-1.5">
                  <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                    Condition B: Cytotoxic Dosing (≥ 50 µg/mL)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800">
                    &lt; 50% Viability (Apoptosis)
                  </span>
                </div>

                <div className="space-y-1.5 text-[11px] text-slate-200">
                  <div className="p-1.5 rounded bg-slate-950/70 border border-rose-900/40">
                    <strong className="text-rose-300 block mb-0.5">Cell Morphology:</strong>
                    Complete loss of spindle extensions, cellular rounding, actin cytoskeleton condensation, and extensive apoptotic membrane blebbing.
                  </div>
                  <div className="p-1.5 rounded bg-slate-950/70 border border-rose-900/40">
                    <strong className="text-rose-300 block mb-0.5">Nanomaterial Interaction:</strong>
                    Macropinocytosis and endocytosis transport high densities of GO sheets into cytoplasmic vesicles and secondary lysosomes, generating ROS.
                  </div>
                  <div className="p-1.5 rounded bg-slate-950/70 border border-rose-900/40">
                    <strong className="text-rose-300 block mb-0.5">Adhesion Disruption:</strong>
                    Severe down-regulation of adhesion proteins; detachment occurs rapidly prior to metabolic collapse.
                  </div>
                </div>
              </div>

              <div className="mt-2 pt-1.5 border-t border-rose-900/60 flex items-center justify-between text-[10px] font-mono text-rose-400">
                <span>Avoidance Target: Beyond Upper Safety Ceiling</span>
                <Info className="w-3.5 h-3.5 text-rose-400" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Suggested Scientific Caption Box (Publication / Slide Ready) */}
      <div className="bg-slate-900/90 border border-cyan-500/30 rounded-xl p-2 sm:p-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shrink-0">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[10px] font-mono uppercase font-bold text-cyan-400 tracking-wider">
              Suggested Slide Caption:
            </span>
            <span className="text-[8px] font-mono px-1.5 py-0.1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
              General Science Audience
            </span>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug font-sans italic line-clamp-2">
            &ldquo;{CORE_TECHNIQUE_CAPTION}&rdquo;
          </p>
        </div>

        <button
          onClick={handleCopyCaption}
          className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-lg bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/60 transition-colors cursor-pointer shrink-0"
        >
          {copiedCaption ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy Caption</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
