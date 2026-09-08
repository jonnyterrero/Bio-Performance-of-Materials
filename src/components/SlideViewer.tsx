import React from 'react';
import { SlideData, PresentationTheme } from '../types';
import { PRESENTATION_INFO } from '../data/slidesData';
import { SynthesisDiagram } from './diagrams/SynthesisDiagram';
import { ProtocolDiagram } from './diagrams/ProtocolDiagram';
import { ToxicityMatrixDiagram } from './diagrams/ToxicityMatrixDiagram';
import { CellularMechanismDiagram } from './diagrams/CellularMechanismDiagram';
import { ProjectTranslationDiagram } from './diagrams/ProjectTranslationDiagram';
import { FeasibilityTable } from './diagrams/FeasibilityTable';
import { AudiencePollDiagram } from './diagrams/AudiencePollDiagram';
import { CitationCard } from './diagrams/CitationCard';
import { ShieldCheck, Award, GraduationCap, Calendar, UserCheck, ArrowRight } from 'lucide-react';

interface SlideViewerProps {
  slide: SlideData;
  theme: PresentationTheme;
  totalSlides: number;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({ slide, theme, totalSlides }) => {
  const getThemeClasses = () => {
    switch (theme) {
      case 'fgcu-emerald':
        return 'bg-slate-900 border-emerald-500/30 text-slate-100 shadow-emerald-950/20';
      case 'technical-blueprint':
        return 'bg-slate-950 border-cyan-500/40 text-slate-100 shadow-cyan-950/20';
      case 'dark-editorial':
      default:
        return 'bg-slate-950 border-slate-800 text-slate-100 shadow-2xl';
    }
  };

  return (
    <div
      id={`slide-canvas-${slide.slideNumber}`}
      className={`w-full min-h-[560px] sm:min-h-[600px] md:min-h-[620px] aspect-auto md:aspect-[16/9] rounded-2xl border ${getThemeClasses()} p-4 sm:p-5 md:p-6 flex flex-col justify-between relative select-none transition-colors duration-300 shadow-2xl`}
      style={{
        backgroundImage:
          theme === 'technical-blueprint'
            ? 'linear-gradient(to right, rgba(6, 182, 212, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.04) 1px, transparent 1px)'
            : undefined,
        backgroundSize: theme === 'technical-blueprint' ? '24px 24px' : undefined,
      }}
    >
      {/* Slide Header (Hidden on Title slide for clean cover style) */}
      {slide.id !== 'title' && (
        <div className="flex items-start justify-between border-b border-slate-800/80 pb-2.5 mb-2 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
                {slide.categoryTag}
              </span>
              {slide.rubricBadge && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50 flex items-center gap-1">
                  <Award className="w-2.5 h-2.5" />
                  {slide.rubricBadge}
                </span>
              )}
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white mt-0.5">
              {slide.title}
            </h2>
            {slide.subtitle && (
              <p className="text-xs md:text-sm text-slate-400 mt-0.5 font-normal line-clamp-1">
                {slide.subtitle}
              </p>
            )}
          </div>

          <div className="flex flex-col items-end shrink-0 ml-3">
            <span className="text-xs font-mono font-bold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
              {slide.slideNumber} / {totalSlides}
            </span>
            <span className="text-[10px] font-mono text-slate-500 mt-1 hidden sm:inline">
              {PRESENTATION_INFO.course}
            </span>
          </div>
        </div>
      )}

      {/* Main Slide Content Router */}
      <div className="flex-1 w-full min-h-0 overflow-y-auto pr-0.5 flex flex-col justify-center my-0.5">
        {/* SLIDE 1: Title Slide */}
        {slide.id === 'title' && (
          <div className="flex flex-col justify-between h-full py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                  {slide.categoryTag}
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/60 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                FGCU Bioengineering
              </span>
            </div>

            <div className="my-auto max-w-4xl">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mb-4" />
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Biocompatibility of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                  Graphene Oxide
                </span>
              </h1>
              <p className="text-sm md:text-lg text-slate-300 mt-4 leading-relaxed max-w-2xl">
                Translating in vitro human fibroblast dose-response kinetics to semester biomaterial protocols at Florida Gulf Coast University.
              </p>
            </div>

            {/* Title Metadata Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-900/90 border border-slate-800 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold">Presenters</div>
                  <div className="text-xs md:text-sm font-bold text-slate-100">
                    {PRESENTATION_INFO.authors.join(' & ')}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-slate-800 pt-2 sm:pt-0 sm:pl-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold">Course &amp; Faculty</div>
                  <div className="text-xs md:text-sm font-semibold text-slate-100">
                    {PRESENTATION_INFO.course} · {PRESENTATION_INFO.instructor}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-slate-800 pt-2 sm:pt-0 sm:pl-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold">Presentation Date</div>
                  <div className="text-xs md:text-sm font-semibold text-slate-100">
                    {PRESENTATION_INFO.date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 2: Article Overview */}
        {slide.id === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full py-1">
            {/* Left Column: Specs & Goal */}
            <div className="flex flex-col gap-3 justify-between">
              {/* Specs Card */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-2">
                  The Article Specs
                </span>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between border-b border-slate-800/80 pb-1">
                    <span className="text-slate-400">Title:</span>
                    <span className="text-slate-100 font-semibold text-right">Biocompatibility of Graphene Oxide</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800/80 pb-1">
                    <span className="text-slate-400">Authors:</span>
                    <span className="text-slate-200 text-right">K. Wang, J. Ruan, H. Song, J. Zhang, Y. Wo, S. Guo, D. Cui</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800/80 pb-1">
                    <span className="text-slate-400">Journal:</span>
                    <span className="text-cyan-300 font-mono text-right">Nanoscale Research Letters (2011)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Article DOI:</span>
                    <span className="text-slate-300 font-mono text-right">{PRESENTATION_INFO.doi}</span>
                  </div>
                </div>
              </div>

              {/* Study Goal Card */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  Core Study Goal &amp; Scope
                </span>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside leading-relaxed">
                  <li>Evaluate the in vitro biocompatibility and toxicity of graphene oxide (GO).</li>
                  <li>Examine cellular responses specifically in human dermal fibroblasts (HDF).</li>
                  <li>Determine whether cellular damage is strictly dose- and time-dependent.</li>
                </ul>
              </div>

              {/* Translation Rationale */}
              <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-xl p-3 text-xs text-slate-300">
                <span className="font-semibold text-cyan-300 block mb-0.5">Why We Chose This Paper:</span>
                Directly tests human fibroblasts and provides the exact literature benchmark needed for designing our FGCU sublethal dosing pilot.
              </div>
            </div>

            {/* Right Column: Main Findings & Flowchart */}
            <div className="flex flex-col gap-3 justify-between">
              {/* Main Findings Card */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block mb-2">
                  Main Findings (Dose-Dependent Split)
                </span>
                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded bg-emerald-950/50 border border-emerald-800/40 flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-1" />
                    <div>
                      <strong className="text-emerald-300">Low Dose (&lt;20 µg/mL): </strong>
                      <span className="text-slate-300">High fibroblast viability (&gt;80%) with minimal morphological disruption or apoptosis.</span>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-rose-950/50 border border-rose-800/40 flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0 mt-1" />
                    <div>
                      <strong className="text-rose-300">High Dose (&gt;50 µg/mL): </strong>
                      <span className="text-slate-300">Severe cytotoxicity, massive cell rounding, detachment, and apoptotic membrane blebbing.</span>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 mt-1" />
                    <div>
                      <strong className="text-cyan-300">Molecular Mechanism: </strong>
                      <span className="text-slate-300">GO sheets internalize into cytoplasm/lysosomes and down-regulate essential adhesion proteins.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Big Idea Flowchart */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  The Big Idea (Biological Model)
                </span>
                <div className="flex items-center justify-between px-3 py-2 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono">
                  <span className="text-cyan-300 font-bold">GO Dose</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-amber-300 font-bold">Cell Response</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-emerald-300 font-bold">Bioperformance</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-2 text-center">
                  Dose is not a universal static number — it depends strictly on the experimental model and exposure window.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 3: Highlighted Method 1 - Synthesis & Physical Characterization */}
        {slide.id === 'method-synthesis' && <SynthesisDiagram />}

        {/* SLIDE 4: Highlighted Method 2 - Exposure Protocol & Toxicity Matrix */}
        {slide.id === 'method-protocol' && (
          <div className="flex flex-col gap-3 h-full">
            <ProtocolDiagram />
          </div>
        )}

        {/* SLIDE 5: Highlighted Method Deep-Dive - Cellular Impact & Mechanism */}
        {slide.id === 'method-mechanism' && (
          <div className="flex flex-col gap-3 h-full">
            <CellularMechanismDiagram />
          </div>
        )}

        {/* SLIDE 6: Application to Our Project */}
        {slide.id === 'project-translation' && <ProjectTranslationDiagram />}

        {/* SLIDE 7: Feasibility at FGCU */}
        {slide.id === 'fgcu-feasibility' && <FeasibilityTable />}

        {/* SLIDE 8: Audience Engagement */}
        {slide.id === 'audience-poll' && <AudiencePollDiagram />}

        {/* SLIDE 9: Reference & Rubric Takeaways */}
        {slide.id === 'reference' && <CitationCard />}
      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between border-t border-slate-800/80 pt-2.5 mt-2 shrink-0 text-[11px] font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <span>{PRESENTATION_INFO.authors.join(' & ')}</span>
          <span>·</span>
          <span>{PRESENTATION_INFO.course}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-400">{PRESENTATION_INFO.institution}</span>
          <span className="text-cyan-400 font-semibold">Slide {slide.slideNumber} of {totalSlides}</span>
        </div>
      </div>
    </div>
  );
};
