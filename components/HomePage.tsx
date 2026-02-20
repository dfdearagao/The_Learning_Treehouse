
import React, { useState, useEffect, useRef } from 'react';
import { CORE_SUBJECTS, EARLY_CHILDHOOD, EARLY_CHILDHOOD_CATEGORIES } from '../constants';
import SubjectCard from './SubjectCard';
import EarlyChildhoodCard from './EarlyChildhoodCard';
import SectionDivider from './SectionDivider';
import { Upload, X } from 'lucide-react';
import Logo from './Logo';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onSubjectClick: (id: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSubjectClick }) => {
  const [customLogo, setCustomLogo] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [storyImage, setStoryImage] = useState<string | null>(null);
  const storyFileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load logo from local storage
    const savedLogo = localStorage.getItem('treehouse_custom_logo');
    if (savedLogo) setCustomLogo(savedLogo);

    // Load story image from local storage
    const savedStoryImage = localStorage.getItem('treehouse_story_image');
    if (savedStoryImage) setStoryImage(savedStoryImage);
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit check
        alert("Image is too large! Please use an image under 2MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setCustomLogo(base64);
        localStorage.setItem('treehouse_custom_logo', base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearCustomLogo = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCustomLogo(null);
      localStorage.removeItem('treehouse_custom_logo');
  };

  const handleStoryImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit check
        alert("Image is too large! Please use an image under 2MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setStoryImage(base64);
        localStorage.setItem('treehouse_story_image', base64);
      };
      reader.readAsDataURL(file);
    }
  };

   const clearStoryImage = (e: React.MouseEvent) => {
      e.stopPropagation();
      setStoryImage(null);
      localStorage.removeItem('treehouse_story_image');
  };

  const parentTeacherItem = EARLY_CHILDHOOD_CATEGORIES.find(item => item.id === 'parent-teacher');

  return (
    <div className="space-y-16 pb-20 animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-8 pt-8">
        
        {/* Logo Section */}
        <div className="relative group w-full max-w-[600px] px-4 -mb-8 mt-4 flex justify-center mx-auto min-h-[150px] items-center">
             {/* Hidden File Input */}
             <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
                accept="image/*" 
                className="hidden" 
             />
             
             {/* Upload Overlay Button (Visible on Hover) */}
             <button 
                onClick={() => fileInputRef.current?.click()}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900/80 text-white px-5 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-all z-20 flex items-center gap-2 font-bold backdrop-blur-md hover:bg-black hover:scale-105 shadow-xl border border-white/20"
             >
                <Upload size={18} /> {customLogo ? 'Change Logo' : 'Upload Logo'}
             </button>

            {customLogo ? (
                <div className="relative w-full flex justify-center">
                    <img 
                        src={customLogo} 
                        alt="Custom Logo" 
                        className="w-full h-auto drop-shadow-xl hover:scale-105 transition-transform duration-500 max-h-[300px] object-contain"
                    />
                    <button 
                        onClick={clearCustomLogo}
                        className="absolute -top-2 -right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-30 hover:bg-red-600"
                        title="Reset to Default"
                    >
                        <X size={14} />
                    </button>
                </div>
            ) : (
                <Logo className="w-full max-w-[600px]" />
            )}
        </div>

        <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight leading-tight mt-8">
          Climb Up, <span className="text-green-600">Learn Together!</span>
        </h2>

        <p className="max-w-2xl text-lg md:text-xl text-slate-600 font-medium leading-relaxed px-4">
          At <strong>The Learning Treehouse</strong>, we bring teachers and students together in a playful and engaging environment where learning and growth happen naturally.
        </p>
      </div>

      {/* Core Subjects Section */}
      <div id="subjects">
        <SectionDivider emoji="📚" title="Core Subjects K-5th" extraSpacing />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {CORE_SUBJECTS.map((subject) => (
            <SubjectCard 
              key={subject.id} 
              {...subject} 
              onClick={onSubjectClick}
            />
          ))}
        </div>
      </div>

      {/* Early Childhood Section */}
      <div id="early-childhood">
        <SectionDivider emoji="🧸" title="Early Childhood & Parents" extraSpacing />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-4">
             {/* Early Childhood Section (Takes 1 col, stretched to match) */}
             <div className="flex flex-col h-full">
                 <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2 pl-2">
                    <span className="text-3xl">🧸</span> Early Childhood
                 </h3>
                 <div className="flex-1">
                    <EarlyChildhoodCard 
                        {...EARLY_CHILDHOOD} 
                        onClick={() => onNavigate('join')} 
                    />
                 </div>
             </div>

             {/* Parent/Teacher Corner Section (Takes 1 col) */}
             {parentTeacherItem && (
                <div className="flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2 pl-2">
                        <span className="text-3xl">🍎</span> {parentTeacherItem.title}
                    </h3>
                    <button 
                        onClick={() => onNavigate('join')}
                        className="flex-1 w-full bg-white p-8 rounded-[2rem] shadow-xl border-b-8 border-stone-100 hover:border-slate-200 hover:-translate-y-1 transition-all cursor-pointer flex flex-col items-center justify-center gap-6 group text-center min-h-[260px]"
                    >
                         <div className={`p-8 rounded-[2rem] ${parentTeacherItem.colorClass} group-hover:scale-110 transition-transform shrink-0 shadow-inner`}>
                            <parentTeacherItem.icon size={64} />
                        </div>
                        <div>
                            <h4 className="text-3xl font-black text-slate-700 mb-3">{parentTeacherItem.title}</h4>
                            <p className="text-slate-500 font-bold leading-relaxed text-lg max-w-xs mx-auto">{parentTeacherItem.description}</p>
                        </div>
                    </button>
                </div>
             )}
        </div>
      </div>

      {/* Our Story / About */}
      <div className="mt-20 flex flex-col md:flex-row items-center gap-10 bg-white p-8 md:p-12 rounded-[3rem] shadow-lg border-b-8 border-stone-100">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">🌳</span>
              <h2 className="text-3xl font-bold text-slate-800">Our Story</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            <strong>The Learning Treehouse</strong> was born from a love of education and a dream to create a special place where kids and teachers could connect and grow together.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Like a <em>treehouse</em>, it's a place where imaginations soar, friendships are built, and learning feels like an adventure.
          </p>
          
          <div className="space-y-3 pt-4">
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                  <span className="text-2xl">🎓</span> 
                  <span>Built for <span className="text-blue-600">Teachers</span> & <span className="text-blue-600">Students</span></span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                  <span className="text-2xl text-yellow-500">⭐</span> Playful & Easy to Use
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                  <span className="text-2xl text-green-500">📈</span> Helping Every Learner Grow
              </div>
          </div>
        </div>

        {/* Story Image Upload Section */}
        <div className="flex-1 flex justify-center w-full">
            <div className="relative group w-full max-w-[600px] flex justify-center items-center">
                 <input 
                    type="file" 
                    ref={storyFileInputRef} 
                    onChange={handleStoryImageUpload} 
                    accept="image/*" 
                    className="hidden" 
                 />
                 
                 <button 
                    onClick={() => storyFileInputRef.current?.click()}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900/80 text-white px-5 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-all z-20 flex items-center gap-2 font-bold backdrop-blur-md hover:bg-black hover:scale-105 shadow-xl border border-white/20"
                 >
                    <Upload size={18} /> {storyImage ? 'Change Image' : 'Upload Image'}
                 </button>

                 {storyImage ? (
                    <div className="relative w-full">
                        <img 
                            src={storyImage} 
                            alt="Our Story" 
                            className="w-full h-auto rounded-3xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white object-cover"
                        />
                         <button 
                            onClick={clearStoryImage}
                            className="absolute -top-2 -right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-30 hover:bg-red-600"
                            title="Reset to Default"
                        >
                            <X size={14} />
                        </button>
                    </div>
                 ) : (
                     <div 
                        className="w-full aspect-square md:aspect-video bg-blue-50/50 rounded-3xl border-4 border-dashed border-blue-200 flex flex-col items-center justify-center text-blue-400 gap-4 cursor-pointer hover:bg-blue-50 transition-colors group"
                        onClick={() => storyFileInputRef.current?.click()}
                     >
                        <div className="p-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                            <Upload size={32} className="text-blue-500" />
                        </div>
                        <p className="font-bold text-lg text-blue-500">Upload Story Image</p>
                     </div>
                 )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
