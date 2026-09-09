export type SlideId =
  | 'title'
  | 'overview'
  | 'method-synthesis'
  | 'method-protocol'
  | 'method-mechanism'
  | 'project-translation'
  | 'fgcu-feasibility'
  | 'audience-poll'
  | 'reference';

export type PresentationTheme = 'dark-editorial' | 'fgcu-emerald' | 'technical-blueprint';

export interface RubricItem {
  id: string;
  category: string;
  points: number;
  description: string;
  slideRef: string;
  status: 'covered' | 'exceeded';
  evidence: string;
}

export interface SpeakerNote {
  timeEstimate: string; // e.g. "1.5 min"
  presenter: string; // e.g. "Jonathan" or "Gage" or "Both"
  mainScript: string[];
  keyEmphasis: string;
  anticipatedQuestions: { question: string; answer: string }[];
}

export interface SlideData {
  id: SlideId;
  slideNumber: number;
  categoryTag: string;
  title: string;
  subtitle?: string;
  rubricBadge?: string;
  speakerNotes: SpeakerNote;
}
