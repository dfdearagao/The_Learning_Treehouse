import React, { useState } from 'react';
import { ArrowLeft, BookOpen, FileText, Calendar as CalendarIcon, Plus, Check, Search, Filter, Clock, Sparkles, X } from 'lucide-react';
import { LESSON_CATALOG } from '../lessonCatalog';
import { GRADES } from '../constants';
import { playSound } from '../utils/sound';

interface AssignHomeworkPageProps {
  onBack: () => void;
  onAssign: (assignment: { id: string; title: string; type: 'lesson' | 'worksheet'; date: string; subject: string; status: 'pending' | 'completed' }) => void;
}

const AssignHomeworkPage: React.FC<AssignHomeworkPageProps> = ({ onBack, onAssign }) => {
  const [selectedGrade, setSelectedGrade] = useState('2nd Grade');
  const [selectedSubject, setSelectedSubject] = useState('Math');
  const [searchQuery, setSearchQuery] = useState('');
  const [assignmentDate, setAssignmentDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showAutoAssignModal, setShowAutoAssignModal] = useState(false);

  const filteredLessons = LESSON_CATALOG.filter(lesson => 
    lesson.grade === selectedGrade && 
    lesson.subject === selectedSubject &&
    (lesson.lessonName.toLowerCase().includes(searchQuery.toLowerCase()) || 
     lesson.unitTitle.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleAssign = () => {
    if (!selectedItem) return;

    playSound('success');
    onAssign({
      id: Math.random().toString(36).substr(2, 9),
      title: selectedItem.lessonName || selectedItem.title,
      type: selectedItem.type || 'lesson',
      date: assignmentDate,
      subject: selectedSubject,
      status: 'pending'
    });
    onBack();
  };

  const executeAutoAssign = (mode: 'light' | 'balanced' | 'intensive') => {
    playSound('success');
    const newAssignments: any[] = [];
    const subjects = ['Math', 'Reading', 'Science', 'Social Studies'];
    const today = new Date();
    
    let lessonsPerWeek = 1;
    if (mode === 'balanced') lessonsPerWeek = 2;
    if (mode === 'intensive') lessonsPerWeek = 4;

    subjects.forEach(subject => {
      const subjectLessons = LESSON_CATALOG.filter(l => l.grade === selectedGrade && l.subject === subject);
      if (subjectLessons.length === 0) return;

      const totalLessons = lessonsPerWeek * 4; // 4 weeks

      for (let i = 0; i < totalLessons; i++) {
        const lesson = subjectLessons[i % subjectLessons.length];
        const date = new Date(today);
        const weekOffset = Math.floor(i / lessonsPerWeek) * 7;
        const dayOffset = Math.floor((i % lessonsPerWeek) * (7 / lessonsPerWeek));
        date.setDate(today.getDate() + weekOffset + dayOffset);
        
        newAssignments.push({
          id: Math.random().toString(36).substr(2, 9),
          title: lesson.lessonName,
          type: 'lesson',
          date: date.toISOString().split('T')[0],
          subject: subject,
          status: 'pending'
        });
      }
    });

    newAssignments.forEach(a => onAssign(a));
    alert(`Successfully auto-assigned ${newAssignments.length} lessons for the month!`);
    setShowAutoAssignModal(false);
    onBack();
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors w-fit"
        >
            <ArrowLeft size={20} />
            Back to Teacher Corner
        </button>

        <button 
          onClick={() => setShowAutoAssignModal(true)}
          className="flex items-center gap-2 bg-amber-100 text-amber-700 px-6 py-3 rounded-2xl font-black hover:bg-amber-200 transition-all shadow-sm border-b-4 border-amber-200 active:border-0 active:translate-y-1"
        >
          <Sparkles size={20} /> Auto-Assign Month
        </button>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-black text-slate-800 mb-2 flex items-center gap-3">
            <span className="bg-blue-600 text-white p-2 rounded-xl"><Plus size={32} /></span>
            Assign Homework
        </h1>
        <p className="text-slate-500 font-bold text-lg">Select a lesson or worksheet to assign to your student's calendar.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Selection Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border-b-4 border-stone-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Grade</label>
                <select 
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  className="w-full p-3 bg-slate-50 border-2 border-slate-100 rounded-xl font-bold text-slate-700 outline-none focus:border-blue-400"
                >
                  {GRADES.map(g => (
                    <option key={g.id} value={g.id}>{g.title}</option>
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
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text"
                    placeholder="Search lessons..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 pl-10 bg-slate-50 border-2 border-slate-100 rounded-xl font-bold text-slate-700 outline-none focus:border-blue-400"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredLessons.length > 0 ? (
                filteredLessons.map((lesson) => (
                  <button 
                    key={lesson.lessonId}
                    onClick={() => {
                      playSound('click');
                      setSelectedItem(lesson);
                    }}
                    className={`w-full p-4 rounded-2xl border-2 transition-all text-left flex items-center justify-between group ${
                      selectedItem?.lessonId === lesson.lessonId 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-slate-100 hover:border-blue-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${selectedItem?.lessonId === lesson.lessonId ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                        <BookOpen size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">{lesson.lessonName}</h4>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{lesson.unitTitle}</p>
                      </div>
                    </div>
                    {selectedItem?.lessonId === lesson.lessonId && (
                      <div className="bg-blue-500 text-white p-1 rounded-full">
                        <Check size={16} />
                      </div>
                    )}
                  </button>
                ))
              ) : (
                <div className="text-center py-12 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                  <BookOpen className="mx-auto text-slate-300 mb-2" size={48} />
                  <p className="text-slate-500 font-bold">No lessons found for this selection.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Assignment Details */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border-b-4 border-stone-100 sticky top-24">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Assignment Details</h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Due Date</label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="date"
                    value={assignmentDate}
                    onChange={(e) => setAssignmentDate(e.target.value)}
                    className="w-full p-3 pl-10 bg-slate-50 border-2 border-slate-100 rounded-xl font-bold text-slate-700 outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              {selectedItem ? (
                <div className="p-4 bg-blue-50 rounded-2xl border-2 border-blue-100 animate-in zoom-in-95">
                  <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">Selected Item</div>
                  <h4 className="font-black text-slate-800">{selectedItem.lessonName}</h4>
                  <div className="flex items-center gap-2 mt-2 text-sm font-bold text-slate-500">
                    <span className="bg-white px-2 py-0.5 rounded-md shadow-sm">{selectedGrade}</span>
                    <span className="bg-white px-2 py-0.5 rounded-md shadow-sm">{selectedSubject}</span>
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 text-center">
                  <p className="text-sm font-bold text-slate-400">Select a lesson from the list to continue</p>
                </div>
              )}

              <button 
                disabled={!selectedItem}
                onClick={handleAssign}
                className={`w-full py-4 rounded-2xl font-black text-xl shadow-lg transition-all flex items-center justify-center gap-2 ${
                  selectedItem 
                    ? 'bg-treehouse-green text-white hover:bg-green-500 hover:scale-[1.02] active:scale-95' 
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Plus size={24} /> Assign Homework
              </button>
            </div>
          </div>
        </div>
      </div>

      {showAutoAssignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative">
            <div className="p-6 bg-amber-500 text-white flex justify-between items-center">
              <h3 className="text-xl font-black flex items-center gap-2">
                <Sparkles size={24} /> Auto-Assign Options
              </h3>
              <button onClick={() => setShowAutoAssignModal(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-slate-600 font-bold mb-4">Choose a learning pace for the upcoming month. This will automatically schedule lessons for all core subjects.</p>
              
              <button onClick={() => executeAutoAssign('light')} className="w-full text-left p-4 rounded-2xl border-2 border-slate-100 hover:border-amber-300 hover:bg-amber-50 transition-all group">
                <div className="font-black text-slate-800 text-lg group-hover:text-amber-700">Light Pace</div>
                <div className="text-sm font-bold text-slate-500">1 lesson per week, per subject (16 total lessons)</div>
              </button>

              <button onClick={() => executeAutoAssign('balanced')} className="w-full text-left p-4 rounded-2xl border-2 border-slate-100 hover:border-amber-300 hover:bg-amber-50 transition-all group">
                <div className="font-black text-slate-800 text-lg group-hover:text-amber-700">Balanced Pace</div>
                <div className="text-sm font-bold text-slate-500">2 lessons per week, per subject (32 total lessons)</div>
              </button>

              <button onClick={() => executeAutoAssign('intensive')} className="w-full text-left p-4 rounded-2xl border-2 border-slate-100 hover:border-amber-300 hover:bg-amber-50 transition-all group">
                <div className="font-black text-slate-800 text-lg group-hover:text-amber-700">Intensive Pace</div>
                <div className="text-sm font-bold text-slate-500">4 lessons per week, per subject (64 total lessons)</div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignHomeworkPage;
