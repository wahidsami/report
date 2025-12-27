export type StageId = 'IDEA' | 'STUDY' | 'BRD' | 'TECH' | 'PILOT' | 'PROD';

export interface StageDefinition {
  id: StageId;
  label: string;
}

export interface Project {
  id: number;
  name: string;
  totalProgress: number; // 0-100
  currentStageIndex: number; // 0-5
  note?: string;
  currentStageLabel?: string; // specific text override for the active stage pill
}

export const STAGES: StageDefinition[] = [
  { id: 'IDEA', label: 'الفكرة' },
  { id: 'STUDY', label: 'الدراسة' },
  { id: 'BRD', label: 'BRD' },
  { id: 'TECH', label: 'التنفيذ التقني' },
  { id: 'PILOT', label: 'المرحلة التجريبية' },
  { id: 'PROD', label: 'مرحلة الإنتاج' },
];