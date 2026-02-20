import React, { useState } from 'react';
import { User } from '../types';
import { 
  ArrowLeft, 
  BarChart3, 
  Clock, 
  Calendar, 
  FileText, 
  Settings, 
  Download, 
  CheckCircle2, 
  AlertCircle,
  Users,
  Printer,
  Lock,
  X,
  Sparkles,
  ClipboardList,
  ChevronRight,
  Plus,
  Target,
  BookOpenCheck
} from 'lucide-react';

interface ParentTeacherPageProps {
  user: User;
  onBack: () => void;
  onLessonSummariesClick?: () => void;
}

const LessonPlanModal = ({ onClose }: { onClose: () => void }) => {
    const [selectedGrade, setSelectedGrade] = useState('2nd Grade');
    const [selectedSubject, setSelectedSubject] = useState('Math');

    const mockPlan = {
        title: `${selectedGrade} ${selectedSubject}: Introduction to Fractions`,
        duration: "45 Minutes",
        objective: "Students will be able to identify and represent halves, thirds, and fourths of a whole.",
        materials: ["Pizza cutouts", "Markers", "Fraction circles", "Treehouse Interactive Pad"],
        activities: [
            { time: "0-10m", title: "Warm up", desc: "Count to 100 by tens as a group." },
            { time: "10-25m", title: "Mini-Lesson", desc: "Demonstrate splitting a 'pizza' into equal parts." },
            { time: "25-40m", title: "Interactive Quest", desc: "Students complete 'Pizza Math' Level 1 in the Arcade." },
            { time: "40-45m", title: "Reflection", desc: "Draw a circle and color in one-half." }
        ]
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden relative border-8 border-white max-h-[90vh] flex flex-col">
                <div className="p-6 bg-slate-900 text-white flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-xl">
                            <ClipboardList size={24} />
                        </div>
                        <h2 className="text-xl font-black">AI Lesson Plan Builder</h2>
                    </div>
                    <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-8 flex-1 overflow-y-auto space-y-8">
                    {/* Controls */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Grade</label>
                            <select 
                                value={selectedGrade}
                                onChange={(e) => setSelectedGrade(e.target.value)}
                                className="w-full p-3 bg-slate-50 border-2 border-slate-100 rounded-xl font-bold text-slate-700 outline-none focus:border-blue-400"
                            >
                                {['Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade'].map(g => (
                                    <option key={g} value={g}>{g}</option>
                                ))}
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                            <select 
                                value={selectedSubject}
                                onChange={(e) => setSelectedSubject(e.target.value)}
                                className="w-full p-3 bg-slate-50 border-2 border-slate-100 rounded-xl font-bold text-slate-700 outline-none focus:border-blue-400"
                            >
                                {['Math', 'Reading', 'Science', 'Social Studies'].map(s => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="bg-blue-50/50 p-6 rounded-3xl border-2 border-blue-100 relative">
                        <div className="absolute -top-3 right-6 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                            <Sparkles size={12} /> AI Suggested
                        </div>
                        
                        <h3 className="text-2xl font-black text-slate-800 mb-2">{mockPlan.title}</h3>
                        <div className="flex items-center gap-4 text-sm font-bold text-slate-500 mb-6">
                            <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm"><Clock size={14} /> {mockPlan.duration}</span>
                            <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm"><Target size={14} /> Unit 4</span>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="font-black text-slate-700 text-sm uppercase tracking-wider mb-1">Learning Objective</h4>
                                <p className="text-slate-600 leading-relaxed">{mockPlan.objective}</p>
                            </div>

                            <div>
                                <h4 className="font-black text-slate-700 text-sm uppercase tracking-wider mb-1">Teaching Path</h4>
                                <div className="space-y-3 mt-3">
                                    {mockPlan.activities.map((act, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-12 text-xs font-bold text-blue-500 pt-1 shrink-0">{act.time}</div>
                                            <div className="flex-1">
                                                <div className="font-bold text-slate-800">{act.title}</div>
                                                <div className="text-sm text-slate-500">{act.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-slate-50 border-t-2 border-slate-100 flex gap-4">
                    <button className="flex-1 py-3 bg-white border-2 border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                        <Download size={18} /> Export PDF
                    </button>
                    <button className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-[0_4px_0_#1e40af] hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2">
                        <Plus size={18} /> Assign to Class
                    </button>
                </div>
            </div>
        </div>
    );
};

const ParentTeacherPage: React.FC<ParentTeacherPageProps> = ({ user, onBack, onLessonSummariesClick }) => {
  const [showLessonPlan, setShowLessonPlan] = useState(false);

  // Mock Data
  const weeklyProgress = [
    { subject: 'Math', progress: 75, color: 'bg-red-500', track: 'bg-red-100' },
    { subject: 'Reading', progress: 90, color: 'bg-blue-500', track: 'bg-blue-100' },
    { subject: 'Science', progress: 45, color: 'bg-green-500', track: 'bg-green-100' },
    { subject: 'Logic', progress: 60, color: 'bg-purple-500', track: 'bg-purple-100' },
  ];

  const recentActivity = [
    { id: 1, title: 'Number Ninja', date: 'Today, 10:30 AM', score: '1250 pts', status: 'Great Job!' },
    { id: 2, title: 'Space Snake', date: 'Yesterday, 4:15 PM', score: '850 pts', status: 'Completed' },
    { id: 3, title: 'Volcano Lab', date: 'Oct 24, 2:00 PM', score: '-', status: 'In Progress' },
  ];

  const resources = [
    { title: 'Math Worksheet: Fractions', type: 'PDF', size: '1.2 MB' },
    { title: 'Reading Log Template', type: 'PDF', size: '0.8 MB' },
    { title: 'Science Experiment Guide', type: 'PDF', size: '2.4 MB' },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors w-fit"
        >
            <ArrowLeft size={20} />
            Back to Dashboard
        </button>

        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-stone-100">
            <Users size={20} className="text-slate-400" />
            <span className="text-slate-600 font-bold">Viewing: <span className="text-slate-900">{user.name}</span></span>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-black text-slate-800 mb-2 flex items-center gap-3">
            <span className="bg-slate-800 text-white p-2 rounded-xl"><BarChart3 size={32} /></span>
            Parent & Teacher Corner
        </h1>
        <p className="text-slate-500 font-bold text-lg">Track progress, manage assignments, and access resources.</p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Stats & Progress */}
        <div className="lg:col-span-2 space-y-8">
            
            {/* Quick Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border-b-4 border-stone-100">
                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Total Time</div>
                    <div className="text-2xl font-black text-slate-800 flex items-center gap-2">
                        4h 20m <Clock size={16} className="text-green-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border-b-4 border-stone-100">
                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Lessons</div>
                    <div className="text-2xl font-black text-slate-800 flex items-center gap-2">
                        12 <CheckCircle2 size={16} className="text-blue-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border-b-4 border-stone-100">
                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Current Streak</div>
                    <div className="text-2xl font-black text-slate-800 flex items-center gap-2">
                        5 Days <span className="text-lg">🔥</span>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border-b-4 border-stone-100">
                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Avg Score</div>
                    <div className="text-2xl font-black text-slate-800 flex items-center gap-2">
                        92% <span className="text-lg">⭐</span>
                    </div>
                </div>
            </div>

            {/* Detailed Progress Chart */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border-b-4 border-stone-100">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-slate-800">Subject Mastery</h3>
                    <button className="text-blue-500 text-sm font-bold hover:underline">View Full Report</button>
                </div>
                <div className="space-y-6">
                    {weeklyProgress.map((item) => (
                        <div key={item.subject}>
                            <div className="flex justify-between mb-2">
                                <span className="font-bold text-slate-600">{item.subject}</span>
                                <span className="font-bold text-slate-800">{item.progress}%</span>
                            </div>
                            <div className={`w-full h-4 ${item.track} rounded-full overflow-hidden`}>
                                <div 
                                    className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`} 
                                    style={{ width: `${item.progress}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Activity Log */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border-b-4 border-stone-100">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Recent Activity</h3>
                <div className="space-y-4">
                    {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl border border-stone-100">
                            <div className="flex items-center gap-4">
                                <div className="bg-white p-3 rounded-xl shadow-sm">
                                    <Clock size={20} className="text-slate-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">{activity.title}</h4>
                                    <p className="text-xs font-bold text-slate-400">{activity.date}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-black text-slate-700">{activity.score}</div>
                                <div className="text-xs font-bold text-green-600">{activity.status}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Right Column: Tools & Resources */}
        <div className="space-y-8">
            
            {/* Quick Actions (Classroom Tools) */}
            <div className="bg-blue-600 text-white p-8 rounded-[2rem] shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-xl font-bold mb-4 relative z-10">Classroom Tools</h3>
                <div className="space-y-3 relative z-10">
                    <button className="w-full py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl font-bold text-left px-4 flex items-center justify-between group transition-all">
                        <div className="flex items-center gap-3">
                            <FileText size={20} /> Assign Homework
                        </div>
                        <ChevronRight size={16} className="opacity-50 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                        onClick={() => setShowLessonPlan(true)}
                        className="w-full py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl font-bold text-left px-4 flex items-center justify-between group transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <ClipboardList size={20} /> Lesson Plans
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-[10px] bg-yellow-400 text-slate-900 px-1.5 py-0.5 rounded font-black uppercase">New</span>
                            <ChevronRight size={16} className="opacity-50 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </button>
                    <button 
                        onClick={onLessonSummariesClick}
                        className="w-full py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl font-bold text-left px-4 flex items-center justify-between group transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <BookOpenCheck size={20} /> Lesson Summaries
                        </div>
                        <ChevronRight size={16} className="opacity-50 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl font-bold text-left px-4 flex items-center justify-between group transition-all">
                        <div className="flex items-center gap-3">
                            <AlertCircle size={20} /> Send Reminder
                        </div>
                        <ChevronRight size={16} className="opacity-50 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl font-bold text-left px-4 flex items-center justify-between group transition-all">
                        <div className="flex items-center gap-3">
                            <Settings size={20} /> Difficulty Settings
                        </div>
                        <ChevronRight size={16} className="opacity-50 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Printable Resources */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border-b-4 border-stone-100">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <Printer size={20} className="text-slate-400" /> Printables
                </h3>
                <div className="space-y-4">
                    {resources.map((res, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 border-b border-stone-100 last:border-0">
                            <div className="flex items-center gap-3">
                                <FileText size={20} className="text-red-400" />
                                <div>
                                    <p className="font-bold text-slate-700 text-sm">{res.title}</p>
                                    <p className="text-xs text-slate-400">{res.type} • {res.size}</p>
                                </div>
                            </div>
                            <button className="text-blue-500 hover:bg-blue-50 p-2 rounded-lg">
                                <Download size={18} />
                            </button>
                        </div>
                    ))}
                </div>
                <button className="w-full mt-4 py-3 bg-stone-100 text-slate-600 font-bold rounded-xl hover:bg-stone-200 transition-colors">
                    Browse Resource Library
                </button>
            </div>

            {/* Parental Controls */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border-b-4 border-stone-100">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <Lock size={20} className="text-slate-400" /> Controls
                </h3>
                
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-600">Screen Time Limit</span>
                        <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-600">Chat Features</span>
                        <div className="w-12 h-6 bg-stone-300 rounded-full relative cursor-pointer">
                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>

      {showLessonPlan && (
          <LessonPlanModal onClose={() => setShowLessonPlan(false)} />
      )}
    </div>
  );
};

export default ParentTeacherPage;
