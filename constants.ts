import { Project } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    name: 'المنصة الوطنية الزراعية',
    totalProgress: 20,
    currentStageIndex: 3, // Tech Impl
    currentStageLabel: '0%',
  },
  {
    id: 2,
    name: 'منصة رفاه (Rifah) – الترفيه والرياضة',
    totalProgress: 80,
    currentStageIndex: 3, // Tech Impl
    currentStageLabel: '70%',
  },
  {
    id: 3,
    name: 'منصة نُزل – السياحة والعقار',
    totalProgress: 20,
    currentStageIndex: 3, // Tech Impl (0% Implementation)
    currentStageLabel: '0%',
    note: 'جارٍ تجهيز متطلبات الأعمال',
  },
  {
    id: 4,
    name: 'الامتثال – Ai Cyber Shield',
    totalProgress: 35,
    currentStageIndex: 3, // Tech Impl
    currentStageLabel: '20%',
  },
  {
    id: 5,
    name: 'منصة الألعاب – ARENA',
    totalProgress: 15,
    currentStageIndex: 3, // Tech Impl
    currentStageLabel: '0%',
  },
  {
    id: 6,
    name: 'راوي – Raawi Film',
    totalProgress: 90,
    currentStageIndex: 3, // Tech Impl
    currentStageLabel: '90%',
    note: 'متبقي ربط نموذج LLM',
  },
  {
    id: 7,
    name: 'مبادرة المصانع – أتمتة العمليات',
    totalProgress: 0,
    currentStageIndex: 0, // Idea
    note: 'لم يبدأ بعد',
  },
  {
    id: 8,
    name: 'ناظم – Nazim',
    totalProgress: 40,
    currentStageIndex: 3, // Tech Impl
    currentStageLabel: '25%',
  },
  {
    id: 9,
    name: 'موقع SITICH',
    totalProgress: 100,
    currentStageIndex: 5, // Production
    note: 'مكتمل',
  },
  {
    id: 10,
    name: 'موقع Unnifinity AI',
    totalProgress: 35,
    currentStageIndex: 3, // Tech Impl
    currentStageLabel: '25%',
  },
];