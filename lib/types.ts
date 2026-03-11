export type SlideKey =
  | "cover"
  | "understanding"
  | "cost"
  | "vision"
  | "architecture"
  | "phase"
  | "investment"
  | "next-step";

export type SlideTheme = "neutral" | "risk" | "value";

export interface SlideNavItem {
  key: SlideKey;
  index: number;
  label: string;
  kicker: string;
  theme: SlideTheme;
}

export interface CoverSlideData {
  eyebrow: string;
  title: string;
  subtitle: string;
  supportingLine: string;
  callouts: string[];
}

export interface InsightBlock {
  title: string;
  items: string[];
  accent: SlideTheme;
}

export interface UnderstandingSlideData {
  eyebrow: string;
  title: string;
  summary: string;
  blocks: InsightBlock[];
  highlightedStatement: string;
}

export interface CostBlock {
  title: string;
  detail: string;
  kicker: string;
  summary: string;
}

export interface CostSlideData {
  eyebrow: string;
  title: string;
  blocks: CostBlock[];
  highlightedStatement: string;
}

export interface TransformationBlock {
  fromLabel: string;
  fromTitle: string;
  fromDescription: string;
  toLabel: string;
  toTitle: string;
  toDescription: string;
}

export interface VisionSlideData {
  eyebrow: string;
  title: string;
  subtitle: string;
  transformations: TransformationBlock[];
  closingStatement: string;
}

export interface ArchitectureModule {
  title: string;
  description: string;
  items: string[];
}

export interface ArchitectureSlideData {
  eyebrow: string;
  title: string;
  subtitle: string;
  centralModule: ArchitectureModule;
  modules: ArchitectureModule[];
  supportStatement: string;
}

export interface PhaseModule {
  title: string;
  description: string;
}

export interface PhaseStage {
  label: string;
  title: string;
  description: string;
  modules: PhaseModule[];
}

export interface PhaseSlideData {
  eyebrow: string;
  title: string;
  subtitle: string;
  phases: PhaseStage[];
}

export interface InvestmentSlideData {
  eyebrow: string;
  title: string;
  deliverables: string[];
  duration: string;
  investmentLabel: string;
  investmentAmount: string;
  note: string;
}

export interface NextStepSlideData {
  eyebrow: string;
  title: string;
  intro: string;
  steps: string[];
  kickoffTitle: string;
  kickoffItems: string[];
  closingStatement: string;
}

export interface DeckData {
  client: string;
  meetingContext: string;
  navigation: SlideNavItem[];
  cover: CoverSlideData;
  understanding: UnderstandingSlideData;
  cost: CostSlideData;
  vision: VisionSlideData;
  architecture: ArchitectureSlideData;
  phase: PhaseSlideData;
  investment: InvestmentSlideData;
  nextStep: NextStepSlideData;
}
