import React, { useState } from 'react';
import { ArrowLeft, Calendar as CalendarIcon, BookOpen, FileText, Printer, AlertTriangle, Check, CheckCircle, Circle, Trash2, Star } from 'lucide-react';
import { getUSHolidays } from '../utils/holidays';

interface FullCalendarPageProps {
  assignments: any[];
  onBack: () => void;
  onUpdateAssignment: (id: string, updates: any) => void;
  onDeleteAssignment: (id: string) => void;
  showWorkloadWarnings: boolean;
}

const getSubjectColors = (subject: string) => {
    switch (subject) {
        case 'Math': return { bg: 'bg-red-50', border: 'border-red-100', iconBg: 'bg-red-500', text: 'text-red-600' };
        case 'Reading': return { bg: 'bg-blue-50', border: 'border-blue-100', iconBg: 'bg-blue-500', text: 'text-blue-600' };
        case 'Science': return { bg: 'bg-green-50', border: 'border-green-100', iconBg: 'bg-green-500', text: 'text-green-600' };
        case 'Social Studies': return { bg: 'bg-purple-50', border: 'border-purple-100', iconBg: 'bg-purple-500', text: 'text-purple-600' };
        default: return { bg: 'bg-orange-50', border: 'border-orange-100', iconBg: 'bg-orange-500', text: 'text-orange-600' };
    }
};

const FullCalendarPage: React.FC<FullCalendarPageProps> = ({ assignments, onBack, onUpdateAssignment, onDeleteAssignment, showWorkloadWarnings }) => {
  const currentYear = new Date().getFullYear();
  const usHolidays = getUSHolidays(currentYear);
  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(currentYear, i, 1);
    return {
      name: date.toLocaleString('default', { month: 'long' }),
      index: i,
      daysInMonth: new Date(currentYear, i + 1, 0).getDate(),
      startDay: date.getDay()
    };
  });

  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const selectedAssignments = selectedDate 
    ? assignments.filter(a => a.date === selectedDate)
    : [];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20 print:pb-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 print:hidden">
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors w-fit"
        >
            <ArrowLeft size={20} />
            Back to Dashboard
        </button>
        <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-slate-100 text-slate-700 px-6 py-3 rounded-2xl font-black hover:bg-slate-200 transition-all shadow-sm border-b-4 border-slate-200 active:border-0 active:translate-y-1"
        >
            <Printer size={20} /> Print Schedule
        </button>
      </div>

      <div className="mb-8 print:mb-4">
        <h1 className="text-4xl font-black text-slate-800 mb-2 flex items-center gap-3">
            <span className="bg-blue-600 text-white p-2 rounded-xl"><CalendarIcon size={32} /></span>
            {currentYear} Calendar
        </h1>
        <p className="text-slate-500 font-bold text-lg">Your learning journey for the entire year.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        <div className="xl:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:col-span-4 print:grid-cols-3">
          {months.map(month => (
            <div key={month.name} className="bg-white p-5 rounded-3xl shadow-sm border-b-4 border-stone-100 print:border-b-0 print:shadow-none print:border print:border-slate-200">
              <h3 className="text-lg font-black text-slate-700 mb-4 text-center">{month.name}</h3>
              <div className="grid grid-cols-7 text-center mb-2">
                  {['S','M','T','W','T','F','S'].map((d, i) => (
                      <div key={i} className="text-[10px] font-black text-slate-300 uppercase">{d}</div>
                  ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: month.startDay }).map((_, i) => <div key={`empty-${i}`} />)}
                  {Array.from({ length: month.daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const dateStr = `${currentYear}-${String(month.index + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                      const dayAssignments = assignments.filter(a => a.date === dateStr);
                      const hasAssignment = dayAssignments.length > 0;
                      const isOverloaded = dayAssignments.length > 3;
                      const allCompleted = hasAssignment && dayAssignments.every(a => a.status === 'completed');
                      const isSelected = selectedDate === dateStr;
                      const isToday = new Date().toISOString().split('T')[0] === dateStr;
                      const holiday = usHolidays.find(h => h.date === dateStr);

                      return (
                          <button 
                              key={day} 
                              onClick={() => setSelectedDate(dateStr)}
                              onDragOver={(e) => e.preventDefault()}
                              onDrop={(e) => {
                                  e.preventDefault();
                                  const id = e.dataTransfer.getData('assignmentId');
                                  if (id) onUpdateAssignment(id, { date: dateStr });
                              }}
                              title={holiday ? holiday.name : ''}
                              className={`aspect-square flex flex-col items-center justify-center rounded-lg text-xs font-bold transition-colors relative ${
                                  isSelected ? 'bg-blue-600 text-white shadow-md scale-110 z-10' :
                                  isToday ? 'bg-blue-100 text-blue-700' :
                                  holiday ? 'bg-amber-50 text-amber-600 hover:bg-amber-100' :
                                  'text-slate-600 hover:bg-stone-100'
                              }`}
                          >
                              {day}
                              {holiday && <Star size={8} className="absolute top-0.5 left-0.5 text-amber-400 fill-amber-400" />}
                              {showWorkloadWarnings && isOverloaded && <AlertTriangle size={10} className="absolute top-0.5 right-0.5 text-red-500" />}
                              {hasAssignment && (
                                  <div className="absolute bottom-1 flex gap-0.5">
                                      {allCompleted ? (
                                          <Check size={10} className={isSelected ? 'text-white' : 'text-green-500'} />
                                      ) : (
                                          Array.from(new Set(dayAssignments.map(a => a.subject))).slice(0, 3).map(subject => (
                                              <div key={subject as string} className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : getSubjectColors(subject as string).iconBg}`}></div>
                                          ))
                                      )}
                                  </div>
                              )}
                          </button>
                      );
                  })}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar for selected date details */}
        <div className="space-y-6 print:hidden">
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border-b-4 border-stone-100 sticky top-24">
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              {selectedDate ? new Date(selectedDate + 'T12:00:00').toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Select a Date'}
            </h3>
            
            {selectedDate && usHolidays.find(h => h.date === selectedDate) && (
                <div className="mb-4 p-3 bg-amber-50 border-2 border-amber-100 rounded-xl flex items-center gap-2 text-amber-700 font-bold">
                    <Star size={16} className="fill-amber-400 text-amber-400" />
                    {usHolidays.find(h => h.date === selectedDate)?.name}
                </div>
            )}

            {selectedDate ? (
              selectedAssignments.length > 0 ? (
                <div className="space-y-3">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Assignments</h4>
                  {selectedAssignments.map(assignment => {
                    const colors = getSubjectColors(assignment.subject);
                    const isCompleted = assignment.status === 'completed';
                    return (
                    <div 
                        key={assignment.id} 
                        draggable
                        onDragStart={(e) => e.dataTransfer.setData('assignmentId', assignment.id)}
                        className={`flex items-center gap-3 p-3 ${colors.bg} border-2 ${colors.border} rounded-xl cursor-move ${isCompleted ? 'opacity-60' : ''}`}
                    >
                        <button 
                            onClick={() => onUpdateAssignment(assignment.id, { status: isCompleted ? 'pending' : 'completed' })}
                            className={`${colors.text} hover:scale-110 transition-transform`}
                        >
                            {isCompleted ? <CheckCircle size={20} /> : <Circle size={20} />}
                        </button>
                        <div className={`flex-1 ${isCompleted ? 'line-through' : ''}`}>
                            <div className="text-sm font-bold text-slate-800">{assignment.title}</div>
                            <div className={`text-[10px] font-bold ${colors.text} uppercase tracking-wider`}>{assignment.subject}</div>
                        </div>
                        <button 
                            onClick={() => onDeleteAssignment(assignment.id)}
                            className="text-slate-400 hover:text-red-500 transition-colors p-1"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                  )})}
                </div>
              ) : (
                <div className="text-center py-8 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                  <p className="text-sm font-bold text-slate-400">No assignments for this date.</p>
                </div>
              )
            ) : (
              <div className="text-center py-8 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                <p className="text-sm font-bold text-slate-400">Click on any day with an orange dot to see assignments.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCalendarPage;
