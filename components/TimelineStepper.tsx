import React from 'react';
import { STAGES } from '../types';
import { Check, Circle, Loader2 } from 'lucide-react';

interface TimelineStepperProps {
  currentStageIndex: number;
  totalProgress: number;
}

export const TimelineStepper: React.FC<TimelineStepperProps> = ({ currentStageIndex, totalProgress }) => {
  const isComplete = totalProgress === 100;

  return (
    <div className="w-full mt-6 mb-2">
      <div className="relative flex items-center justify-between w-full">
        {/* Background Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 rounded-full z-0" />

        {STAGES.map((stage, index) => {
          // Logic for state
          // If the project is 100% complete, ALL steps are "completed".
          // Otherwise, steps < currentIndex are completed.
          // step === currentIndex is active.
          // steps > currentIndex are pending.

          let status: 'completed' | 'active' | 'pending' = 'pending';

          if (isComplete) {
            status = 'completed';
          } else {
            if (index < currentStageIndex) status = 'completed';
            else if (index === currentStageIndex) status = 'active';
            else status = 'pending';
          }

          // Line coloring logic (fills the line leading TO this step)
          // We render a colored line segment behind the steps if needed,
          // but simple absolute div behind is easier. 
          // To make the line appear filled progresssively, we can use a separate overlay.
          // For simplicity in this layout, we rely on the gray bar above and just style the dots.

          return (
            <div key={stage.id} className="relative z-10 flex flex-col items-center group">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300
                  ${
                    status === 'completed'
                      ? 'bg-emerald-500 border-emerald-500 text-white'
                      : status === 'active'
                      ? 'bg-blue-600 border-blue-600 text-white shadow-[0_0_0_4px_rgba(37,99,235,0.2)] scale-110'
                      : 'bg-white border-gray-300 text-gray-300'
                  }
                `}
              >
                {status === 'completed' ? (
                  <Check size={16} strokeWidth={3} />
                ) : status === 'active' ? (
                  <Loader2 size={16} className="animate-spin-slow" />
                ) : (
                  <Circle size={10} fill="currentColor" className="text-gray-200" />
                )}
              </div>
              
              <span
                className={`absolute top-10 text-[10px] sm:text-xs font-semibold whitespace-nowrap transition-colors duration-300
                  ${
                    status === 'completed'
                      ? 'text-emerald-600'
                      : status === 'active'
                      ? 'text-blue-700'
                      : 'text-gray-400'
                  }
                `}
              >
                {stage.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};