import React from 'react';
import { Project, STAGES } from '../types';
import { TimelineStepper } from './TimelineStepper';
import { Activity, AlertCircle } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isComplete = project.totalProgress === 100;

  // Helper to get stage name
  const currentStageName = STAGES[project.currentStageIndex]?.label || '';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full transition-shadow hover:shadow-md">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-800 leading-tight mb-1">{project.name}</h3>
          {project.note && (
            <div className="flex items-center text-amber-600 bg-amber-50 px-2 py-1 rounded text-xs font-medium w-fit mt-1">
              <AlertCircle size={12} className="ml-1" />
              {project.note}
            </div>
          )}
        </div>
        <div className={`flex flex-col items-end`}>
          <span className={`text-2xl font-bold ${isComplete ? 'text-emerald-600' : 'text-blue-600'}`}>
            {project.totalProgress}%
          </span>
          <span className="text-xs text-slate-400 font-medium">نسبة الإنجاز</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-100 rounded-full h-2.5 mb-6 overflow-hidden">
        <div
          className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${
            isComplete ? 'bg-emerald-500' : 'bg-blue-600'
          }`}
          style={{ width: `${project.totalProgress}%` }}
        />
      </div>

      {/* Current Stage Indicator (if active and not complete) */}
      {!isComplete && project.currentStageIndex !== undefined && (
        <div className="flex items-center text-sm text-slate-600 mb-2">
          <Activity size={16} className="ml-2 text-blue-500" />
          <span className="font-semibold">المرحلة الحالية: </span>
          <span className="mr-1 font-medium text-slate-700">
             {currentStageName}
          </span>
          {project.currentStageLabel && (
             <span className="mr-1 bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-bold" dir="ltr">
               {project.currentStageLabel}
             </span>
          )}
        </div>
      )}

      {/* Stepper */}
      <div className="mt-auto pt-2 pb-4">
        <TimelineStepper
          currentStageIndex={project.currentStageIndex}
          totalProgress={project.totalProgress}
        />
      </div>
    </div>
  );
};