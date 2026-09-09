import React, { useState, useEffect, useRef } from 'react';
import { SLIDES, PRESENTATION_INFO } from './data/slidesData';
import { PresentationTheme } from './types';
import { PresentationHeader } from './components/PresentationHeader';
import { SlideViewer } from './components/SlideViewer';
import { SpeakerNotesDrawer } from './components/SpeakerNotesDrawer';
import { SlideThumbnailsRail } from './components/SlideThumbnailsRail';
import { RubricModal } from './components/RubricModal';
import { CoreTechniqueModal } from './components/CoreTechniqueModal';
import { generatePowerPointPresentation } from './utils/pptxExport';
import {
  Crosshair,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  Layers,
  Award,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [theme, setTheme] = useState<PresentationTheme>('dark-editorial');
  const [isRubricModalOpen, setIsRubricModalOpen] = useState<boolean>(false);
  const [isCoreTechniqueModalOpen, setIsCoreTechniqueModalOpen] = useState<boolean>(false);
  const [isExportingPPTX, setIsExportingPPTX] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Interactive Laser Pointer state
  const [laserActive, setLaserActive] = useState<boolean>(false);
  const [laserPos, setLaserPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const slideAreaRef = useRef<HTMLDivElement>(null);

  const currentSlide = SLIDES[currentSlideIndex];

  // Navigation callbacks
  const nextSlide = () => {
    if (currentSlideIndex < SLIDES.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case ' ': // Space bar
          e.preventDefault();
          if (e.shiftKey) prevSlide();
          else nextSlide();
          break;
        case 'Home':
          e.preventDefault();
          setCurrentSlideIndex(0);
          break;
        case 'End':
          e.preventDefault();
          setCurrentSlideIndex(SLIDES.length - 1);
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          setShowSpeakerNotes((prev) => !prev);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          setLaserActive((prev) => !prev);
          break;
        case 'Escape':
          if (isRubricModalOpen) {
            setIsRubricModalOpen(false);
          } else if (isFullscreen && document.fullscreenElement) {
            document.exitFullscreen().catch(() => {});
          }
          break;
        default:
          // Numeric keys 1-9 to jump to slide
          const num = parseInt(e.key, 10);
          if (num >= 1 && num <= SLIDES.length) {
            setCurrentSlideIndex(num - 1);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, isRubricModalOpen, isFullscreen]);

  // Fullscreen toggle handler
  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await containerRef.current?.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch {
      setIsFullscreen((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Laser pointer mouse tracker
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!laserActive || !slideAreaRef.current) return;
    const rect = slideAreaRef.current.getBoundingClientRect();
    setLaserPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // PowerPoint Export Handler
  const handleExportPPTX = async () => {
    setIsExportingPPTX(true);
    setToastMessage('Building formatted 16:9 PowerPoint (.pptx) file...');
    try {
      await generatePowerPointPresentation();
      setToastMessage('Success! BME3101C presentation downloaded as .pptx file.');
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch (err) {
      console.error('PPTX Export error:', err);
      setToastMessage('Export error. Please try again or use Print to PDF.');
    } finally {
      setIsExportingPPTX(false);
      setTimeout(() => setToastMessage(null), 5000);
    }
  };

  return (
    <div
      ref={containerRef}
      id="presentation-app-container"
      className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between font-sans selection:bg-cyan-500/30 selection:text-cyan-200"
    >
      {/* Top Header Navigation */}
      <PresentationHeader
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={setCurrentSlideIndex}
        onNextSlide={nextSlide}
        onPrevSlide={prevSlide}
        showSpeakerNotes={showSpeakerNotes}
        onToggleSpeakerNotes={() => setShowSpeakerNotes((prev) => !prev)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        theme={theme}
        onSelectTheme={setTheme}
        onOpenRubricModal={() => setIsRubricModalOpen(true)}
        onOpenCoreTechniqueModal={() => setIsCoreTechniqueModalOpen(true)}
        onExportPPTX={handleExportPPTX}
        isExportingPPTX={isExportingPPTX}
      />

      {/* Main Workspace (Slide Viewer + Speaker Notes) */}
      <main className="flex-1 w-full max-w-[1700px] mx-auto p-3 md:p-6 flex flex-col lg:flex-row gap-5 items-stretch justify-center relative overflow-hidden">
        {/* Slide Stage Container */}
        <div
          ref={slideAreaRef}
          onMouseMove={handleMouseMove}
          className="flex-1 flex flex-col items-center justify-center relative min-w-0"
        >
          <div className="w-full max-w-5xl relative">
            <SlideViewer
              slide={currentSlide}
              theme={theme}
              totalSlides={SLIDES.length}
            />

            {/* Simulated Presenter Laser Pointer */}
            {laserActive && (
              <div
                className="pointer-events-none absolute z-50 w-3.5 h-3.5 rounded-full bg-red-500 shadow-[0_0_12px_4px_rgba(239,68,68,0.9)] transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                style={{
                  left: `${laserPos.x}px`,
                  top: `${laserPos.y}px`,
                }}
              />
            )}
          </div>

          {/* Slide Stage Quick Controls Underneath */}
          <div className="w-full max-w-5xl mt-3 flex items-center justify-between text-xs text-slate-400 font-mono px-2">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLaserActive((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border text-[11px] transition-colors cursor-pointer ${
                  laserActive
                    ? 'bg-red-950/80 text-red-300 border-red-700/80 shadow-sm'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
                title="Toggle Virtual Laser Pointer (Key: P)"
              >
                <Crosshair className="w-3 h-3 text-red-400" />
                <span>{laserActive ? 'Laser Pointer: ON' : 'Laser (P)'}</span>
              </button>

              <span className="hidden sm:inline-block text-slate-500">
                Shortcuts: <kbd className="px-1 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">←</kbd> <kbd className="px-1 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">→</kbd> / <kbd className="px-1 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">Space</kbd>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsRubricModalOpen(true)}
                className="hover:text-cyan-300 transition-colors flex items-center gap-1 text-[11px]"
              >
                <Award className="w-3 h-3 text-emerald-400" />
                <span>Rubric 50/50 Verified</span>
              </button>
            </div>
          </div>
        </div>

        {/* Speaker Notes / Teleprompter Drawer */}
        {showSpeakerNotes && (
          <SpeakerNotesDrawer
            notes={currentSlide.speakerNotes}
            slideNumber={currentSlide.slideNumber}
            slideTitle={currentSlide.title}
            onClose={() => setShowSpeakerNotes(false)}
          />
        )}
      </main>

      {/* Bottom Thumbnail Strip */}
      <SlideThumbnailsRail
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={setCurrentSlideIndex}
      />

      {/* Rubric Compliance Modal */}
      <RubricModal
        isOpen={isRubricModalOpen}
        onClose={() => setIsRubricModalOpen(false)}
        onJumpToSlide={setCurrentSlideIndex}
      />

      {/* Core Experimental Technique Modal */}
      <CoreTechniqueModal
        isOpen={isCoreTechniqueModalOpen}
        onClose={() => setIsCoreTechniqueModalOpen(false)}
        onJumpToSlide={setCurrentSlideIndex}
      />

      {/* Floating Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-16 right-6 z-50 bg-slate-900 border border-cyan-500/60 text-slate-100 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-xs font-mono animate-in fade-in slide-in-from-bottom-3 duration-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hidden Print Container: Sequentially renders all slides for Print -> PDF */}
      <div className="hidden print:block">
        {SLIDES.map((slide) => (
          <div key={slide.id} className="print-slide-container">
            <SlideViewer slide={slide} theme={theme} totalSlides={SLIDES.length} />
          </div>
        ))}
      </div>
    </div>
  );
}
