import React from 'react';
import { PROJECTS_DATA } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { DashboardHeader } from './components/DashboardHeader';
import { STAGES } from './types';
import { ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-['Cairo'] text-right" dir="rtl">
      
      <DashboardHeader projects={PROJECTS_DATA} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Legend / Global Timeline Reference */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8">
          <h2 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
            <ArrowLeft size={16} className="text-slate-400" />
            مرجعية الجدول الزمني الموحد (Workflow Reference)
          </h2>
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-100">
             {STAGES.map((stage, idx) => (
                <div key={stage.id} className="flex items-center gap-2 opacity-80">
                  <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">
                    {idx + 1}
                  </div>
                  <span className="text-xs font-semibold text-slate-600">{stage.label}</span>
                  {idx < STAGES.length - 1 && (
                    <div className="w-8 h-0.5 bg-slate-300 mx-2 hidden sm:block"></div>
                  )}
                </div>
             ))}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} لوحة متابعة المشاريع الاستراتيجية - جميع الحقوق محفوظة</p>
        </div>
      </main>
    </div>
  );
};

export default App;