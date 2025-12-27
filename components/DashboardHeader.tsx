import React from 'react';
import { Project } from '../types';
import { Layers, CheckCircle2, Timer, AlertOctagon } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardHeaderProps {
  projects: Project[];
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ projects }) => {
  const total = projects.length;
  const completed = projects.filter(p => p.totalProgress === 100).length;
  const inProgress = projects.filter(p => p.totalProgress > 0 && p.totalProgress < 100).length;
  const notStarted = projects.filter(p => p.totalProgress === 0).length;

  const data = [
    { name: 'مكتمل', value: completed, color: '#10b981' },
    { name: 'قيد التنفيذ', value: inProgress, color: '#3b82f6' },
    { name: 'لم يبدأ', value: notStarted, color: '#94a3b8' },
  ];

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Title Section */}
          <div className="text-right flex-1 w-full md:w-auto">
            <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Layers className="text-blue-600" />
              لوحة متابعة المشاريع الاستراتيجية
            </h1>
            <p className="text-slate-500 mt-1 text-sm">
              نظرة تنفيذية شاملة على حالة التقدم ومراحل الإنجاز للمشاريع الحالية
            </p>
          </div>

          {/* Metrics & Mini Chart */}
          <div className="flex items-center gap-6 w-full md:w-auto justify-end">
            
            <div className="hidden lg:block w-32 h-24">
               <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={42}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontFamily: 'Cairo' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center px-4 py-2 bg-slate-50 rounded-lg border border-slate-100 min-w-[80px]">
                <span className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-emerald-500" /> مكتمل
                </span>
                <span className="text-xl font-bold text-emerald-600">{completed}</span>
              </div>
              <div className="flex flex-col items-center px-4 py-2 bg-slate-50 rounded-lg border border-slate-100 min-w-[80px]">
                <span className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                  <Timer size={12} className="text-blue-500" /> جارٍ
                </span>
                <span className="text-xl font-bold text-blue-600">{inProgress}</span>
              </div>
              <div className="flex flex-col items-center px-4 py-2 bg-slate-50 rounded-lg border border-slate-100 min-w-[80px]">
                <span className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                  <AlertOctagon size={12} className="text-slate-400" /> لم يبدأ
                </span>
                <span className="text-xl font-bold text-slate-500">{notStarted}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};