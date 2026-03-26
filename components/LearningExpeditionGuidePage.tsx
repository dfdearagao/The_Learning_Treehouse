import React, { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, BookOpen, Download, FileText, Search, Printer, Table, Calendar, Flame, Users, WifiOff, Quote, Calculator, FlaskConical, Globe, Wrench, Map as MapIcon, Compass, Link, X, ExternalLink } from 'lucide-react';
import { MATH_CURRICULUM, READING_CURRICULUM, SCIENCE_CURRICULUM, SOCIAL_STUDIES_CURRICULUM, GRADES } from '../constants';
import LearningExpeditionGuide from './LearningExpeditionGuide';
import { User, Unit, Lesson } from '../types/types';
import jsPDF from 'jspdf';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

interface LearningExpeditionGuidePageProps {
  user: User;
  onBack: () => void;
}

const ALL_GRADES_OPTION = { id: 'all-grades', title: 'All Grades', color: 'bg-slate-400', icon: BookOpen };
const LOCAL_GRADES = [ALL_GRADES_OPTION, ...GRADES];
const SUBJECTS = ['All Subjects', 'Math', 'Reading', 'Science', 'Social Studies'];
const STATUSES = ['All', 'Completed', 'Incomplete', 'Needs Review'];
const STUDENTS = ['Alice', 'Bob', 'Charlie'];
const AVATARS = ['🦊', '🦉', '🦁', '🐼', '🐸', '🦄', '🚀', '⭐'];

const GRADE_MASCOTS: Record<string, string> = {
    'pre-k': '🦊',
    'kindergarten': '🐻',
    '1st Grade': '🦁',
    '2nd Grade': '🐯',
    '3rd Grade': '🐼',
    '4th Grade': '🐨',
    '5th Grade': '🦉',
    'all-grades': '🎓'
};

const GRADE_SCALING: Record<string, string> = {
    'pre-k': 'text-lg',
    'kindergarten': 'text-lg',
    '1st Grade': 'text-lg',
    '2nd Grade': 'text-base',
    '3rd Grade': 'text-base',
    '4th Grade': 'text-sm',
    '5th Grade': 'text-sm',
    'all-grades': 'text-base'
};

const SUBJECT_THEMES: Record<string, { bg: string, text: string, border: string, icon: any, tools: string[], widgets: string[], resources: {title: string, url: string}[] }> = {
    'Math': { 
        bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', icon: Calculator,
        tools: ['Calculator', 'Ruler', 'Protractor'],
        widgets: ['Interactive Number Line', 'Geometry Sandbox'],
        resources: [{title: 'Khan Academy Math', url: '#'}, {title: 'Math is Fun', url: '#'}]
    },
    'Reading': { 
        bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', icon: BookOpen,
        tools: ['Dictionary', 'Thesaurus', 'Highlighter'],
        widgets: ['Story Builder', 'Phonics Board'],
        resources: [{title: 'Storyline Online', url: '#'}, {title: 'Epic! Books', url: '#'}]
    },
    'Science': { 
        bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', icon: FlaskConical,
        tools: ['Magnifying Glass', 'Stopwatch', 'Microscope'],
        widgets: ['Periodic Table', 'Solar System Explorer'],
        resources: [{title: 'NASA Kids Club', url: '#'}, {title: 'Nat Geo Kids', url: '#'}]
    },
    'Social Studies': { 
        bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', icon: Globe,
        tools: ['Compass', 'Timeline', 'Map'],
        widgets: ['Interactive World Map', 'Time Machine'],
        resources: [{title: 'Smithsonian Learning Lab', url: '#'}, {title: 'Time for Kids', url: '#'}]
    },
    'All Subjects': { 
        bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', icon: BookOpen,
        tools: ['General Tools'],
        widgets: ['Dashboard'],
        resources: [{title: 'PBS Kids', url: '#'}]
    }
};

const LearningExpeditionGuidePage: React.FC<LearningExpeditionGuidePageProps> = ({ user, onBack }) => {
  // Multi-Student Mode
  const [currentStudent, setCurrentStudent] = useState(() => localStorage.getItem('leg_student') || STUDENTS[0]);
  const [avatar, setAvatar] = useState(() => localStorage.getItem('leg_avatar') || AVATARS[0]);
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);

  // Accessibility Modes
  const [isHighContrast, setIsHighContrast] = useState(() => JSON.parse(localStorage.getItem('leg_high_contrast') || 'false'));
  const [isDyslexiaFont, setIsDyslexiaFont] = useState(() => JSON.parse(localStorage.getItem('leg_dyslexia_font') || 'false'));

  // Weekly Goal Setter
  const [weeklyGoal, setWeeklyGoal] = useState(() => parseInt(localStorage.getItem('leg_weekly_goal') || '5', 10));
  const [lessonsCompletedThisWeek, setLessonsCompletedThisWeek] = useState(() => parseInt(localStorage.getItem('leg_weekly_completed') || '0', 10));
  const [dailyStreak, setDailyStreak] = useState(() => parseInt(localStorage.getItem('leg_daily_streak') || '3', 10));

  const MOTIVATIONAL_QUOTES = [
      "Every expert was once a beginner.",
      "Mistakes are proof that you are trying.",
      "Learning is a treasure that will follow its owner everywhere.",
      "The beautiful thing about learning is that no one can take it away from you."
  ];
  const [quote] = useState(MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]);

  // Custom Lessons
  const [customLessons, setCustomLessons] = useState<Record<number, Lesson[]>>(() => JSON.parse(localStorage.getItem('leg_custom_lessons') || '{}'));

  // State Persistence via URL & LocalStorage
  const [selectedGrade, setSelectedGrade] = useState(() => {
      const params = new URLSearchParams(window.location.search);
      return params.get('grade') || localStorage.getItem('leg_grade') || user.grade || '2nd Grade';
  });
  const [selectedSubject, setSelectedSubject] = useState(() => {
      const params = new URLSearchParams(window.location.search);
      return params.get('subject') || localStorage.getItem('leg_subject') || 'All Subjects';
  });
  const [searchQuery, setSearchQuery] = useState(() => {
      const params = new URLSearchParams(window.location.search);
      return params.get('search') || localStorage.getItem('leg_search') || '';
  });
  const [statusFilter, setStatusFilter] = useState(() => {
      const params = new URLSearchParams(window.location.search);
      return params.get('status') || localStorage.getItem('leg_status') || 'All';
  });

  // Local User State Overrides
  const [notes, setNotes] = useState<Record<number, string>>(() => JSON.parse(localStorage.getItem('leg_notes') || '{}'));
  const [flags, setFlags] = useState<Record<number, boolean>>(() => JSON.parse(localStorage.getItem('leg_flags') || '{}'));
  const [localCompleted, setLocalCompleted] = useState<Set<number>>(() => new Set(JSON.parse(localStorage.getItem('leg_local_completed') || '[]')));

  // Modals
  const [showToolbox, setShowToolbox] = useState(false);
  const [showWidgets, setShowWidgets] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [modalSubject, setModalSubject] = useState<string>('All Subjects');

  // Sync State
  useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      if (selectedGrade !== 'all-grades') params.set('grade', selectedGrade); else params.delete('grade');
      if (selectedSubject !== 'All Subjects') params.set('subject', selectedSubject); else params.delete('subject');
      if (searchQuery) params.set('search', searchQuery); else params.delete('search');
      if (statusFilter !== 'All') params.set('status', statusFilter); else params.delete('status');
      
      window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
      
      localStorage.setItem('leg_grade', selectedGrade);
      localStorage.setItem('leg_subject', selectedSubject);
      localStorage.setItem('leg_search', searchQuery);
      localStorage.setItem('leg_status', statusFilter);
  }, [selectedGrade, selectedSubject, searchQuery, statusFilter]);

  useEffect(() => localStorage.setItem('leg_notes', JSON.stringify(notes)), [notes]);
  useEffect(() => localStorage.setItem('leg_flags', JSON.stringify(flags)), [flags]);
  useEffect(() => localStorage.setItem('leg_local_completed', JSON.stringify(Array.from(localCompleted))), [localCompleted]);
  useEffect(() => localStorage.setItem('leg_student', currentStudent), [currentStudent]);
  useEffect(() => localStorage.setItem('leg_high_contrast', JSON.stringify(isHighContrast)), [isHighContrast]);
  useEffect(() => localStorage.setItem('leg_dyslexia_font', JSON.stringify(isDyslexiaFont)), [isDyslexiaFont]);
  useEffect(() => localStorage.setItem('leg_weekly_goal', weeklyGoal.toString()), [weeklyGoal]);
  useEffect(() => localStorage.setItem('leg_weekly_completed', lessonsCompletedThisWeek.toString()), [lessonsCompletedThisWeek]);
  useEffect(() => localStorage.setItem('leg_custom_lessons', JSON.stringify(customLessons)), [customLessons]);

  const allCompletedIds = useMemo(() => {
      const ids = new Set<number>();
      if (user.progress) {
          Object.values(user.progress).forEach(arr => arr.forEach(id => ids.add(id)));
      }
      localCompleted.forEach(id => ids.add(id));
      return ids;
  }, [user.progress, localCompleted]);

  const handleMarkUnitComplete = (unit: Unit) => {
      const newCompleted = new Set(localCompleted);
      let newlyCompletedCount = 0;
      unit.lessons.forEach(l => {
          if (!newCompleted.has(l.id)) {
              newCompleted.add(l.id);
              newlyCompletedCount++;
          }
      });
      setLocalCompleted(newCompleted);
      if (newlyCompletedCount > 0) {
          setLessonsCompletedThisWeek(prev => prev + newlyCompletedCount);
      }
  };

  const handleToggleLessonCompletion = (lessonId: number) => {
      setLocalCompleted(prev => {
          const next = new Set(prev);
          if (next.has(lessonId)) {
              next.delete(lessonId);
              setLessonsCompletedThisWeek(prevCount => Math.max(0, prevCount - 1));
          } else {
              next.add(lessonId);
              setLessonsCompletedThisWeek(prevCount => prevCount + 1);
          }
          return next;
      });
  };

  const handleAddCustomLesson = (unitId: number, lesson: Lesson) => {
      setCustomLessons(prev => ({
          ...prev,
          [unitId]: [...(prev[unitId] || []), lesson]
      }));
  };

  const getCurriculumForGrade = (gradeId: string) => {
    const math = MATH_CURRICULUM[gradeId] || [];
    const reading = READING_CURRICULUM[gradeId] || [];
    const science = SCIENCE_CURRICULUM[gradeId] || [];
    const socialStudies = SOCIAL_STUDIES_CURRICULUM[gradeId] || [];
    
    // Simulate prerequisites: Unit N is locked if Unit N-1 is not complete
    const applyPrerequisites = (units: Unit[]) => {
        return units.map((unit, index) => {
            if (index === 0) return { ...unit, isLocked: false };
            const prevUnit = units[index - 1];
            const prevUnitCompleted = prevUnit.lessons.length > 0 && prevUnit.lessons.every(l => allCompletedIds.has(l.id));
            return { ...unit, isLocked: !prevUnitCompleted };
        });
    };

    return [
      { subject: 'Math', units: applyPrerequisites(math) },
      { subject: 'Reading', units: applyPrerequisites(reading) },
      { subject: 'Science', units: applyPrerequisites(science) },
      { subject: 'Social Studies', units: applyPrerequisites(socialStudies) }
    ];
  };

  const getCurriculum = () => {
    if (selectedGrade === 'all-grades') {
      const allGrades = GRADES;
      const aggregateUnits = (curriculum: Record<string, Unit[]>) => {
        const unitsMap = new Map<number, Unit>();
        allGrades.forEach(grade => {
          (curriculum[grade.id] || []).forEach(unit => {
            if (!unitsMap.has(unit.id)) {
              unitsMap.set(unit.id, { ...unit, lessons: [...unit.lessons] });
            }
          });
        });
        return Array.from(unitsMap.values());
      };

      // Simulate prerequisites for all grades
      const applyPrerequisites = (units: Unit[]) => {
          return units.map((unit, index) => {
              if (index === 0) return { ...unit, isLocked: false };
              const prevUnit = units[index - 1];
              const prevUnitCompleted = prevUnit.lessons.length > 0 && prevUnit.lessons.every(l => allCompletedIds.has(l.id));
              return { ...unit, isLocked: !prevUnitCompleted };
          });
      };

      return [
        { subject: 'Math', units: applyPrerequisites(aggregateUnits(MATH_CURRICULUM)) },
        { subject: 'Reading', units: applyPrerequisites(aggregateUnits(READING_CURRICULUM)) },
        { subject: 'Science', units: applyPrerequisites(aggregateUnits(SCIENCE_CURRICULUM)) },
        { subject: 'Social Studies', units: applyPrerequisites(aggregateUnits(SOCIAL_STUDIES_CURRICULUM)) }
      ];
    }
    return getCurriculumForGrade(selectedGrade);
  };

  const baseCurriculum = getCurriculum();

  const filteredCurriculum = useMemo(() => {
      let curr = baseCurriculum;
      
      if (selectedSubject !== 'All Subjects') {
          curr = curr.filter(c => c.subject === selectedSubject);
      }

      curr = curr.map(sub => {
          const filteredUnits = sub.units.map(unit => {
              let filteredLessons = unit.lessons;

              // Status Filter
              if (statusFilter === 'Completed') {
                  filteredLessons = filteredLessons.filter(l => allCompletedIds.has(l.id));
              } else if (statusFilter === 'Incomplete') {
                  filteredLessons = filteredLessons.filter(l => !allCompletedIds.has(l.id));
              } else if (statusFilter === 'Needs Review') {
                  filteredLessons = filteredLessons.filter(l => flags[l.id]);
              }

              // Search Filter
              if (searchQuery) {
                  const q = searchQuery.toLowerCase();
                  const matchesUnit = unit.title.toLowerCase().includes(q);
                  filteredLessons = filteredLessons.filter(l => l.title.toLowerCase().includes(q) || matchesUnit);
              }

              // Add Custom Lessons
              const unitCustomLessons = customLessons[unit.id] || [];
              filteredLessons = [...filteredLessons, ...unitCustomLessons];

              return { ...unit, lessons: filteredLessons };
          }).filter(unit => unit.lessons.length > 0);
          return { ...sub, units: filteredUnits };
      }).filter(sub => sub.units.length > 0);

      return curr;
  }, [baseCurriculum, selectedSubject, searchQuery, statusFilter, allCompletedIds, flags]);

  // Progress Calculations
  const { totalLessons, completedCount, totalTime } = useMemo(() => {
      let tLessons = 0;
      let cCount = 0;
      let tTime = 0;
      filteredCurriculum.forEach(sub => {
          sub.units.forEach(unit => {
              unit.lessons.forEach(lesson => {
                  tLessons++;
                  if (allCompletedIds.has(lesson.id)) cCount++;
                  tTime += parseInt(lesson.duration || '15');
              });
          });
      });
      return { totalLessons: tLessons, completedCount: cCount, totalTime: tTime };
  }, [filteredCurriculum, allCompletedIds]);

  const progressPercent = totalLessons === 0 ? 0 : Math.round((completedCount / totalLessons) * 100);

  const downloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    let yPos = margin;
    let pageNum = 1;

    const checkPageBreak = (neededSpace: number) => {
      if (yPos + neededSpace > pageHeight - margin) {
        doc.addPage();
        pageNum++;
        yPos = margin;
        
        doc.setFontSize(10);
        doc.setTextColor(150);
        doc.text(`Page ${pageNum}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
        doc.setTextColor(0);
      }
    };

    // Cover Page
    doc.setFontSize(28);
    doc.setTextColor(30, 58, 138); // blue-900
    doc.text('Learning Treehouse', pageWidth / 2, pageHeight / 3, { align: 'center' });
    
    doc.setFontSize(22);
    doc.setTextColor(51, 65, 85); // slate-700
    doc.text('Learning Expedition Guide', pageWidth / 2, pageHeight / 3 + 15, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setTextColor(100, 116, 139); // slate-500
    doc.text(`Grade: ${selectedGrade === 'all-grades' ? 'All Grades' : selectedGrade}`, pageWidth / 2, pageHeight / 3 + 35, { align: 'center' });
    doc.text(`Subject: ${selectedSubject}`, pageWidth / 2, pageHeight / 3 + 45, { align: 'center' });
    
    doc.setFontSize(10);
    doc.text(`Page ${pageNum}`, pageWidth / 2, pageHeight - 10, { align: 'center' });

    doc.addPage();
    pageNum++;
    yPos = margin;

    filteredCurriculum.forEach((subjectGroup) => {
      checkPageBreak(20);
      doc.setFontSize(18);
      doc.setTextColor(30, 58, 138);
      doc.text(subjectGroup.subject, margin, yPos);
      yPos += 12;

      subjectGroup.units.forEach((unit) => {
        checkPageBreak(15);
        doc.setFontSize(14);
        doc.setTextColor(51, 65, 85);
        doc.text(unit.title, margin + 5, yPos);
        yPos += 10;

        unit.lessons.forEach((lesson) => {
          checkPageBreak(10);
          doc.setFontSize(12);
          doc.setTextColor(71, 81, 105);
          const isCompleted = allCompletedIds.has(lesson.id);
          const statusBox = isCompleted ? '[X]' : '[ ]';
          const flagMark = flags[lesson.id] ? ' (Needs Review)' : '';
          
          const text = `${statusBox} ${lesson.title}${flagMark}`;
          const lines = doc.splitTextToSize(text, pageWidth - margin * 2 - 10);
          doc.text(lines, margin + 10, yPos);
          yPos += (lines.length * 6);

          if (notes[lesson.id]) {
            checkPageBreak(10);
            doc.setFontSize(10);
            doc.setTextColor(100, 116, 139);
            const noteLines = doc.splitTextToSize(`Note: ${notes[lesson.id]}`, pageWidth - margin * 2 - 15);
            doc.text(noteLines, margin + 15, yPos);
            yPos += (noteLines.length * 5) + 2;
          }
        });
        yPos += 5;
      });
      yPos += 10;
    });

    doc.save(`Learning_Expedition_Guide_${selectedGrade}.pdf`);
  };

  const downloadWordDoc = async () => {
    const children: any[] = [
      new Paragraph({
        text: "Learning Treehouse",
        heading: HeadingLevel.TITLE,
        alignment: AlignmentType.CENTER,
      }),
      new Paragraph({
        text: "Learning Expedition Guide",
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
      }),
      new Paragraph({
        text: `Grade: ${selectedGrade === 'all-grades' ? 'All Grades' : selectedGrade}`,
        alignment: AlignmentType.CENTER,
      }),
      new Paragraph({
        text: `Subject: ${selectedSubject}`,
        alignment: AlignmentType.CENTER,
      }),
      new Paragraph({ text: "" }), // Spacing
    ];

    filteredCurriculum.forEach((subjectGroup) => {
      children.push(
        new Paragraph({
          text: subjectGroup.subject,
          heading: HeadingLevel.HEADING_2,
        })
      );

      subjectGroup.units.forEach((unit) => {
        children.push(
          new Paragraph({
            text: unit.title,
            heading: HeadingLevel.HEADING_3,
          })
        );

        unit.lessons.forEach((lesson) => {
          const isCompleted = allCompletedIds.has(lesson.id);
          const statusBox = isCompleted ? '☑' : '☐';
          const flagMark = flags[lesson.id] ? ' (Needs Review)' : '';
          
          children.push(
            new Paragraph({
              text: `${statusBox} ${lesson.title}${flagMark}`,
              bullet: { level: 0 }
            })
          );

          if (notes[lesson.id]) {
            children.push(
              new Paragraph({
                text: `Note: ${notes[lesson.id]}`,
                indent: { left: 720 } // Indent note slightly
              })
            );
          }
        });
      });
    });

    const doc = new Document({
      sections: [{ properties: {}, children }],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `Learning_Expedition_Guide_${selectedGrade}.docx`);
  };

  const downloadCSV = () => {
    let csvContent = "Grade,Subject,Unit,Lesson,Status,Needs Review,Notes\n";
    
    filteredCurriculum.forEach(sub => {
      sub.units.forEach(unit => {
        unit.lessons.forEach(lesson => {
          const isCompleted = allCompletedIds.has(lesson.id) ? 'Completed' : 'Incomplete';
          const needsReview = flags[lesson.id] ? 'Yes' : 'No';
          const noteStr = notes[lesson.id] ? `"${notes[lesson.id].replace(/"/g, '""')}"` : '';
          const gradeStr = selectedGrade === 'all-grades' ? 'All Grades' : selectedGrade;
          csvContent += `"${gradeStr}","${sub.subject}","${unit.title}","${lesson.title}","${isCompleted}","${needsReview}",${noteStr}\n`;
        });
      });
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, `Learning_Expedition_Guide_${selectedGrade}.csv`);
  };

  const downloadICS = () => {
    let icsContent = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Learning Treehouse//Curriculum//EN\n";
    let startDate = new Date();
    
    filteredCurriculum.forEach(sub => {
        sub.units.forEach(unit => {
            unit.lessons.forEach(lesson => {
                const end = new Date(startDate.getTime() + parseInt(lesson.duration || '15') * 60000);
                const formatDate = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
                
                icsContent += "BEGIN:VEVENT\n";
                icsContent += `DTSTART:${formatDate(startDate)}\n`;
                icsContent += `DTEND:${formatDate(end)}\n`;
                icsContent += `SUMMARY:${sub.subject}: ${lesson.title}\n`;
                icsContent += `DESCRIPTION:Unit: ${unit.title}\\nDuration: ${lesson.duration}\n`;
                icsContent += "END:VEVENT\n";
                
                // Advance start date by 1 day for the next lesson as a simple schedule
                startDate.setDate(startDate.getDate() + 1);
            });
        });
    });
    
    icsContent += "END:VCALENDAR";
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    saveAs(blob, `Learning_Schedule_${selectedGrade}.ics`);
  };

  const downloadCertificate = (unitTitle: string) => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'in',
      format: 'letter'
    });

    // Border
    doc.setLineWidth(0.1);
    doc.setDrawColor(79, 70, 229); // Indigo 600
    doc.rect(0.5, 0.5, 10, 7.5);

    // Inner Border
    doc.setLineWidth(0.02);
    doc.setDrawColor(165, 180, 252); // Indigo 300
    doc.rect(0.6, 0.6, 9.8, 7.3);

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(40);
    doc.setTextColor(30, 58, 138); // Blue 900
    doc.text("Certificate of Completion", 5.5, 2.5, { align: "center" });

    // Subtitle
    doc.setFont("helvetica", "normal");
    doc.setFontSize(20);
    doc.setTextColor(71, 85, 105); // Slate 600
    doc.text("This certifies that", 5.5, 3.5, { align: "center" });

    // Student Name
    doc.setFont("helvetica", "bolditalic");
    doc.setFontSize(30);
    doc.setTextColor(15, 23, 42); // Slate 900
    doc.text(currentStudent, 5.5, 4.5, { align: "center" });

    // Achievement
    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);
    doc.setTextColor(71, 85, 105); // Slate 600
    doc.text(`has successfully completed the unit:`, 5.5, 5.5, { align: "center" });

    // Unit Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(30, 58, 138); // Blue 900
    doc.text(unitTitle, 5.5, 6.2, { align: "center" });

    // Date
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(100, 116, 139); // Slate 500
    const dateStr = new Date().toLocaleDateString();
    doc.text(`Date: ${dateStr}`, 5.5, 7.2, { align: "center" });

    doc.save(`Certificate_${currentStudent}_${unitTitle.replace(/\s+/g, '_')}.pdf`);
  };

  const currentTheme = SUBJECT_THEMES[selectedSubject] || SUBJECT_THEMES['All Subjects'];
  const currentMascot = GRADE_MASCOTS[selectedGrade] || '🎓';
  const currentScale = GRADE_SCALING[selectedGrade] || 'text-base';

  return (
    <div className={`min-h-screen p-4 md:p-8 font-sans print:bg-white print:p-0 ${isHighContrast ? 'bg-black text-white' : 'bg-stone-50 text-slate-800'} ${isDyslexiaFont ? 'font-opendyslexic tracking-wider' : ''} ${currentScale}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4 print:hidden">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className={`p-2 rounded-full shadow-sm transition-colors ${isHighContrast ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-slate-50 text-slate-600'}`}
            >
              <ArrowLeft />
            </button>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{currentMascot}</span>
              <div>
                <h1 className={`text-3xl font-black ${isHighContrast ? 'text-white' : 'text-slate-800'}`}>Learning Expedition Guide</h1>
                <p className={`font-medium ${isHighContrast ? 'text-gray-300' : 'text-slate-500'}`}>Your complete roadmap for the school year.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button onClick={() => setShowToolbox(true)} className={`flex items-center gap-2 px-4 py-2 font-bold rounded-xl shadow-sm transition-colors border-2 ${isHighContrast ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-slate-700 border-slate-100 hover:bg-slate-50'}`}>
              <Wrench size={18} /> Toolbox
            </button>
            <button onClick={() => setShowWidgets(true)} className={`flex items-center gap-2 px-4 py-2 font-bold rounded-xl shadow-sm transition-colors border-2 ${isHighContrast ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-slate-700 border-slate-100 hover:bg-slate-50'}`}>
              <MapIcon size={18} /> Widgets
            </button>
            <button onClick={() => setShowResources(true)} className={`flex items-center gap-2 px-4 py-2 font-bold rounded-xl shadow-sm transition-colors border-2 ${isHighContrast ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-slate-700 border-slate-100 hover:bg-slate-50'}`}>
              <Link size={18} /> Resources
            </button>
            <button onClick={() => alert('Navigating to Parent Dashboard...')} className={`px-4 py-2 font-bold rounded-xl shadow-sm transition-colors border-2 ${isHighContrast ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-slate-700 border-slate-100 hover:bg-slate-50'}`}>
              Parent Dashboard
            </button>
            <button onClick={() => alert('Downloading content for offline use...')} className={`flex items-center gap-2 px-4 py-2 font-bold rounded-xl shadow-sm transition-colors border-2 ${isHighContrast ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-slate-700 border-slate-100 hover:bg-slate-50'}`}>
              <WifiOff size={18} /> Offline Mode
            </button>
            <button onClick={() => alert('Finding a study buddy...')} className={`flex items-center gap-2 px-4 py-2 font-bold rounded-xl shadow-sm transition-colors border-2 ${isHighContrast ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-slate-700 border-slate-100 hover:bg-slate-50'}`}>
              <Users size={18} /> Study Buddy
            </button>
          </div>
        </div>

        {/* Motivational Quote */}
        <div className={`mb-8 p-4 rounded-2xl flex items-center gap-3 print:hidden ${isHighContrast ? 'bg-gray-800 text-gray-300' : `${currentTheme.bg} ${currentTheme.text}`}`}>
            <Quote size={24} className="opacity-50" />
            <p className="font-medium italic">{quote}</p>
        </div>

        {/* Controls Row */}
        <div className="flex flex-wrap items-center gap-2 mb-8 print:hidden">
            <div className="relative">
                <button 
                    onClick={() => setShowAvatarSelector(!showAvatarSelector)}
                    className={`w-11 h-11 flex items-center justify-center text-2xl border-2 rounded-xl shadow-sm transition-colors ${isHighContrast ? 'bg-gray-800 border-gray-700' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                >
                    {avatar}
                </button>
                {showAvatarSelector && (
                    <div className={`absolute top-full mt-2 left-0 z-50 p-2 rounded-xl shadow-xl grid grid-cols-4 gap-2 ${isHighContrast ? 'bg-gray-800 border-2 border-gray-700' : 'bg-white border-2 border-slate-100'}`}>
                        {AVATARS.map(a => (
                            <button 
                                key={a} 
                                onClick={() => { setAvatar(a); localStorage.setItem('leg_avatar', a); setShowAvatarSelector(false); }}
                                className={`w-10 h-10 flex items-center justify-center text-2xl rounded-lg transition-colors ${avatar === a ? (isHighContrast ? 'bg-blue-900' : 'bg-indigo-100') : (isHighContrast ? 'hover:bg-gray-700' : 'hover:bg-slate-100')}`}
                            >
                                {a}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <select 
                value={currentStudent}
                onChange={(e) => setCurrentStudent(e.target.value)}
                className={`px-4 py-2 border-2 rounded-xl font-bold focus:outline-none cursor-pointer ${isHighContrast ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-slate-200 text-slate-700'}`}
            >
                {STUDENTS.map(s => (
                    <option key={s} value={s}>{s}</option>
                ))}
            </select>
            <button onClick={() => setIsHighContrast(!isHighContrast)} className={`px-4 py-2 font-bold rounded-xl shadow-sm transition-colors border-2 ${isHighContrast ? 'bg-yellow-500 text-black border-yellow-400' : 'bg-slate-800 text-white border-slate-700'}`}>
              High Contrast
            </button>
            <button onClick={() => setIsDyslexiaFont(!isDyslexiaFont)} className={`px-4 py-2 font-bold rounded-xl shadow-sm transition-colors border-2 ${isDyslexiaFont ? 'bg-indigo-500 text-white border-indigo-400' : 'bg-white text-indigo-600 border-indigo-200'}`}>
              Dyslexia Font
            </button>
            <button onClick={() => window.print()} className={`flex items-center gap-2 px-4 py-2 font-bold rounded-xl shadow-sm transition-colors border-2 ${isHighContrast ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-slate-700 border-slate-100 hover:bg-slate-50'}`}>
              <Printer size={18} /> Print
            </button>
            <button onClick={downloadPDF} className={`flex items-center gap-2 px-4 py-2 font-bold rounded-xl shadow-sm transition-colors border-2 ${isHighContrast ? 'bg-red-900 text-red-100 border-red-800' : 'bg-red-50 text-red-600 border-red-100 hover:bg-red-100'}`}>
              <FileText size={18} /> PDF
            </button>
            <button onClick={downloadWordDoc} className={`flex items-center gap-2 px-4 py-2 font-bold rounded-xl shadow-sm transition-colors border-2 ${isHighContrast ? 'bg-blue-900 text-blue-100 border-blue-800' : 'bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100'}`}>
              <Download size={18} /> Word
            </button>
            <button onClick={downloadCSV} className={`flex items-center gap-2 px-4 py-2 font-bold rounded-xl shadow-sm transition-colors border-2 ${isHighContrast ? 'bg-emerald-900 text-emerald-100 border-emerald-800' : 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100'}`}>
              <Table size={18} /> CSV
            </button>
            <button onClick={downloadICS} className={`flex items-center gap-2 px-4 py-2 font-bold rounded-xl shadow-sm transition-colors border-2 ${isHighContrast ? 'bg-purple-900 text-purple-100 border-purple-800' : 'bg-purple-50 text-purple-600 border-purple-100 hover:bg-purple-100'}`}>
              <Calendar size={18} /> Calendar
            </button>
          </div>

        {/* Weekly Goal Setter */}
        <div className={`p-6 rounded-[2rem] shadow-sm border-b-4 mb-8 print:hidden flex flex-col md:flex-row items-center justify-between gap-4 ${isHighContrast ? 'bg-gray-900 border-gray-800' : 'bg-white border-stone-100'}`}>
            <div className="flex-1">
                <h3 className={`text-lg font-bold ${isHighContrast ? 'text-white' : 'text-slate-800'}`}>Weekly Goal</h3>
                <p className={`text-sm ${isHighContrast ? 'text-gray-400' : 'text-slate-500'}`}>Set a goal for how many lessons to complete this week.</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <button onClick={() => setWeeklyGoal(Math.max(1, weeklyGoal - 1))} className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${isHighContrast ? 'bg-gray-800 text-white' : 'bg-slate-100 text-slate-600'}`}>-</button>
                    <span className={`text-xl font-black w-8 text-center ${isHighContrast ? 'text-white' : 'text-slate-800'}`}>{weeklyGoal}</span>
                    <button onClick={() => setWeeklyGoal(weeklyGoal + 1)} className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${isHighContrast ? 'bg-gray-800 text-white' : 'bg-slate-100 text-slate-600'}`}>+</button>
                </div>
                <div className="flex flex-col items-end">
                    <span className={`text-sm font-bold ${lessonsCompletedThisWeek >= weeklyGoal ? 'text-emerald-500' : (isHighContrast ? 'text-blue-400' : 'text-blue-600')}`}>
                        {lessonsCompletedThisWeek} / {weeklyGoal} Completed
                    </span>
                    <div className="w-32 bg-slate-200 rounded-full h-2 mt-1 overflow-hidden">
                        <div className={`h-full transition-all duration-500 ${lessonsCompletedThisWeek >= weeklyGoal ? 'bg-emerald-500' : 'bg-blue-500'}`} style={{ width: `${Math.min(100, (lessonsCompletedThisWeek / weeklyGoal) * 100)}%` }} />
                    </div>
                </div>
            </div>
        </div>

        {/* Progress Summary Dashboard */}
        <div className={`p-6 rounded-[2rem] shadow-sm border-b-4 mb-8 print:hidden ${isHighContrast ? 'bg-gray-900 border-gray-800' : 'bg-white border-stone-100'}`}>
            <div className="flex justify-between items-end mb-2">
                <div>
                    <h3 className={`text-lg font-bold flex items-center gap-2 ${isHighContrast ? 'text-white' : 'text-slate-800'}`}>
                        Curriculum Progress
                        <span className="flex items-center gap-1 text-orange-500 bg-orange-100 px-2 py-0.5 rounded-full text-sm">
                            <Flame size={16} className="fill-orange-500" /> {dailyStreak} Day Streak!
                        </span>
                    </h3>
                    <p className={`text-sm ${isHighContrast ? 'text-gray-400' : 'text-slate-500'}`}>{completedCount} of {totalLessons} lessons completed (Est. {Math.round(totalTime / 60)} hours total)</p>
                </div>
                <span className={`text-2xl font-black ${isHighContrast ? 'text-blue-400' : 'text-blue-600'}`}>{progressPercent}%</span>
            </div>
            <div className={`w-full rounded-full h-4 overflow-hidden ${isHighContrast ? 'bg-gray-800' : 'bg-slate-100'}`}>
                <div className="bg-blue-500 h-full transition-all duration-500" style={{ width: `${progressPercent}%` }} />
            </div>
        </div>

        {/* Filters & Search */}
        <div className={`p-4 rounded-2xl shadow-sm border-2 mb-8 flex flex-col md:flex-row gap-4 print:hidden ${isHighContrast ? 'bg-gray-900 border-gray-800' : 'bg-white border-stone-100'}`}>
            <div className="flex-1 relative">
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${isHighContrast ? 'text-gray-400' : 'text-slate-400'}`} size={20} />
                <input 
                    type="text" 
                    placeholder="Search lessons or units..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full pl-10 pr-4 py-2 border-2 rounded-xl focus:outline-none transition-colors font-medium ${isHighContrast ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-100 text-slate-700 focus:border-indigo-300 focus:bg-white'}`}
                />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                <select 
                    value={selectedGrade}
                    onChange={(e) => setSelectedGrade(e.target.value)}
                    className={`px-4 py-2 border-2 rounded-xl font-bold focus:outline-none cursor-pointer ${isHighContrast ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-100 text-slate-700 focus:border-indigo-300'}`}
                >
                    {LOCAL_GRADES.map(g => (
                        <option key={g.id} value={g.id}>{g.title}</option>
                    ))}
                </select>
                <select 
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className={`px-4 py-2 border-2 rounded-xl font-bold focus:outline-none cursor-pointer ${isHighContrast ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-100 text-slate-700 focus:border-indigo-300'}`}
                >
                    {SUBJECTS.map(s => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
                <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className={`px-4 py-2 border-2 rounded-xl font-bold focus:outline-none cursor-pointer ${isHighContrast ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-100 text-slate-700 focus:border-indigo-300'}`}
                >
                    {STATUSES.map(s => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            </div>
        </div>

        {/* Guide Content */}
        <LearningExpeditionGuide 
            curriculum={filteredCurriculum} 
            searchQuery={searchQuery} 
            completedLessonIds={allCompletedIds}
            notes={notes}
            setNotes={setNotes}
            flags={flags}
            setFlags={setFlags}
            onMarkUnitComplete={handleMarkUnitComplete}
            isHighContrast={isHighContrast}
            onAddCustomLesson={handleAddCustomLesson}
            onToggleLessonCompletion={handleToggleLessonCompletion}
            onDownloadCertificate={downloadCertificate}
            theme={currentTheme}
            grade={selectedGrade === 'all-grades' ? undefined : LOCAL_GRADES.find(g => g.id === selectedGrade)?.title}
            onOpenToolbox={(subj) => { setModalSubject(subj); setShowToolbox(true); }}
            onOpenWidgets={(subj) => { setModalSubject(subj); setShowWidgets(true); }}
            onOpenResources={(subj) => { setModalSubject(subj); setShowResources(true); }}
        />
      </div>

      {/* Modals for Tools, Widgets, Resources */}
      {showToolbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm print:hidden">
              <div className={`w-full max-w-md rounded-2xl overflow-hidden shadow-2xl ${isHighContrast ? 'bg-gray-900' : 'bg-white'}`}>
                  <div className={`flex items-center justify-between p-4 border-b ${isHighContrast ? 'border-gray-800' : 'border-slate-100'}`}>
                      <h3 className={`font-bold flex items-center gap-2 ${isHighContrast ? 'text-white' : 'text-slate-800'}`}><Wrench size={20}/> {modalSubject} Toolbox</h3>
                      <button onClick={() => setShowToolbox(false)} className={`p-1 rounded-full transition-colors ${isHighContrast ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-slate-100 text-slate-500'}`}>
                          <X size={20} />
                      </button>
                  </div>
                  <div className="p-6 grid grid-cols-2 gap-4">
                      {SUBJECT_THEMES[modalSubject]?.tools.map(tool => (
                          <button key={tool} className={`p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 border-2 transition-colors ${isHighContrast ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' : `${SUBJECT_THEMES[modalSubject].bg} ${SUBJECT_THEMES[modalSubject].border} ${SUBJECT_THEMES[modalSubject].text} hover:opacity-80`}`}>
                              {tool}
                          </button>
                      ))}
                  </div>
              </div>
          </div>
      )}

      {showWidgets && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm print:hidden">
              <div className={`w-full max-w-md rounded-2xl overflow-hidden shadow-2xl ${isHighContrast ? 'bg-gray-900' : 'bg-white'}`}>
                  <div className={`flex items-center justify-between p-4 border-b ${isHighContrast ? 'border-gray-800' : 'border-slate-100'}`}>
                      <h3 className={`font-bold flex items-center gap-2 ${isHighContrast ? 'text-white' : 'text-slate-800'}`}><MapIcon size={20}/> {modalSubject} Widgets</h3>
                      <button onClick={() => setShowWidgets(false)} className={`p-1 rounded-full transition-colors ${isHighContrast ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-slate-100 text-slate-500'}`}>
                          <X size={20} />
                      </button>
                  </div>
                  <div className="p-6 grid grid-cols-1 gap-4">
                      {SUBJECT_THEMES[modalSubject]?.widgets.map(widget => (
                          <button key={widget} className={`p-4 rounded-xl font-bold flex items-center justify-center gap-2 border-2 transition-colors ${isHighContrast ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' : `${SUBJECT_THEMES[modalSubject].bg} ${SUBJECT_THEMES[modalSubject].border} ${SUBJECT_THEMES[modalSubject].text} hover:opacity-80`}`}>
                              {widget}
                          </button>
                      ))}
                  </div>
              </div>
          </div>
      )}

      {showResources && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm print:hidden">
              <div className={`w-full max-w-md rounded-2xl overflow-hidden shadow-2xl ${isHighContrast ? 'bg-gray-900' : 'bg-white'}`}>
                  <div className={`flex items-center justify-between p-4 border-b ${isHighContrast ? 'border-gray-800' : 'border-slate-100'}`}>
                      <h3 className={`font-bold flex items-center gap-2 ${isHighContrast ? 'text-white' : 'text-slate-800'}`}><Link size={20}/> {modalSubject} Resources</h3>
                      <button onClick={() => setShowResources(false)} className={`p-1 rounded-full transition-colors ${isHighContrast ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-slate-100 text-slate-500'}`}>
                          <X size={20} />
                      </button>
                  </div>
                  <div className="p-6 flex flex-col gap-4">
                      {SUBJECT_THEMES[modalSubject]?.resources.map(res => (
                          <a key={res.title} href={res.url} target="_blank" rel="noopener noreferrer" className={`p-4 rounded-xl font-bold flex items-center justify-between border-2 transition-colors ${isHighContrast ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' : `${SUBJECT_THEMES[modalSubject].bg} ${SUBJECT_THEMES[modalSubject].border} ${SUBJECT_THEMES[modalSubject].text} hover:opacity-80`}`}>
                              {res.title} <ExternalLink size={16} />
                          </a>
                      ))}
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default LearningExpeditionGuidePage;
