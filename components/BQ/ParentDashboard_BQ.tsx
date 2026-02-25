import React from 'react';
import { UserProgress } from '../../types/types_BQ';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowLeft } from 'lucide-react';

interface ParentDashboardProps {
  progress: UserProgress;
  onBack: () => void;
}

const ParentDashboard: React.FC<ParentDashboardProps> = ({ progress, onBack }) => {
  const data = [
    { name: 'Math', completed: progress.worldsCompleted.includes('MATH') ? 100 : 20 },
    { name: 'Reading', completed: progress.worldsCompleted.includes('READING') ? 100 : 0 },
    { name: 'Science', completed: progress.worldsCompleted.includes('SCIENCE') ? 100 : 0 },
    { name: 'Logic', completed: progress.worldsCompleted.includes('LOGIC') ? 100 : 0 },
  ];

  return (
    <div className="absolute inset-0 bg-slate-50 p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-600 font-bold mb-6 hover:text-slate-900">
          <ArrowLeft /> Back to Game
        </button>

        <h1 className="text-3xl font-bold text-slate-800 mb-2">Parent Dashboard</h1>
        <p className="text-slate-600 mb-8">Track your child's learning journey.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="font-bold text-lg mb-4 text-slate-700">Subject Progress</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip cursor={{fill: '#f1f5f9'}} />
                  <Bar dataKey="completed" fill="#6366f1" radius={[4, 4, 0, 0]} name="Completion %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="font-bold text-lg mb-4 text-slate-700">Recent Achievements</h2>
            <div className="space-y-4">
              {progress.badges.length === 0 ? (
                <p className="text-gray-400 italic">No badges earned yet. Start playing!</p>
              ) : (
                progress.badges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <p className="font-bold text-yellow-900">{badge}</p>
                      <p className="text-sm text-yellow-700">Awarded for excellence</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="bg-indigo-600 text-white p-6 rounded-2xl shadow-lg flex justify-between items-center">
          <div>
            <h3 className="font-bold text-xl">Current Level: {progress.level}</h3>
            <p className="opacity-80">Total XP Earned: {progress.xp}</p>
          </div>
          <div className="text-4xl font-black opacity-20">
            LEVEL UP
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;