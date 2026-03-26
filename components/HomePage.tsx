
import React, { useState, useEffect, useRef } from 'react';
import { Upload, X, BookOpen, PenTool, Trophy, Shield, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onGradeClick?: (id: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
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

  return (
    <div className="space-y-12 pb-20 animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-6 pt-4 relative">
        {/* Decorative Leaves */}
        <div className="absolute top-0 left-10 text-6xl opacity-20 -rotate-12 pointer-events-none hidden md:block">🍃</div>
        <div className="absolute top-20 right-10 text-5xl opacity-20 rotate-12 pointer-events-none hidden md:block">🌿</div>
        
        {/* Logo Section */}
        <div className="relative group w-full max-w-[600px] px-4 flex justify-center mx-auto min-h-[150px] items-center z-10">
             <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
                accept="image/*" 
                className="hidden" 
             />
             
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
                        className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500 max-h-[300px] object-contain"
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
                <img 
                    src="https://raw.githubusercontent.com/dfdearagao/The_Learning_Treehouse/refs/heads/main/learning-treehouse-logo.png" 
                    alt="The Learning Treehouse" 
                    className="w-full max-w-[600px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
            )}
        </div>

        <div className="space-y-4 max-w-3xl mx-auto px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-black text-slate-800 tracking-tight leading-tight">
            Climb Up, <br className="md:hidden" /><span className="text-green-500">Learn Together!</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-amber-600">
            Where Bright Minds Grow
          </p>
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            At <strong>The Learning Treehouse</strong>, we bring teachers and students together in a playful and engaging environment where curiosity, collaboration, and fun happen naturally.
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => onNavigate('join')}
              className="bg-green-500 text-white px-8 py-4 rounded-full font-black text-xl shadow-[0_8px_0_rgb(34,197,94,0.4)] hover:shadow-[0_4px_0_rgb(34,197,94,0.4)] hover:translate-y-1 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Start Learning <ArrowRight size={24} />
            </button>
            <button 
              onClick={() => onNavigate('login')}
              className="bg-white text-slate-700 px-8 py-4 rounded-full font-black text-xl shadow-[0_8px_0_rgb(226,232,240)] hover:shadow-[0_4px_0_rgb(226,232,240)] hover:translate-y-1 transition-all border-2 border-slate-100 w-full sm:w-auto justify-center"
            >
              Teacher Login
            </button>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="flex items-center justify-center gap-4 opacity-50">
        <div className="h-1 w-24 bg-green-200 rounded-full"></div>
        <span className="text-3xl">🐿️</span>
        <div className="h-1 w-24 bg-green-200 rounded-full"></div>
      </div>

      {/* What We Do Section */}
      <div className="px-4 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-2">What We Do</h2>
          <p className="text-xl text-slate-500 font-medium">Everything you need to make learning an adventure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border-b-8 border-blue-100 hover:-translate-y-2 transition-transform duration-300 text-center flex flex-col items-center group">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookOpen size={40} className="text-blue-500" />
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-3">Interactive Lessons</h3>
            <p className="text-slate-500 font-medium leading-relaxed">Engaging content that turns every subject into a fun discovery.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border-b-8 border-orange-100 hover:-translate-y-2 transition-transform duration-300 text-center flex flex-col items-center group">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <PenTool size={40} className="text-orange-500" />
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-3">Teacher Tools</h3>
            <p className="text-slate-500 font-medium leading-relaxed">Easy-to-use resources to help educators guide and inspire.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border-b-8 border-yellow-100 hover:-translate-y-2 transition-transform duration-300 text-center flex flex-col items-center group">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Trophy size={40} className="text-yellow-500" />
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-3">Student Challenges</h3>
            <p className="text-slate-500 font-medium leading-relaxed">Exciting missions and rewards that keep kids motivated.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border-b-8 border-green-100 hover:-translate-y-2 transition-transform duration-300 text-center flex flex-col items-center group">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield size={40} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-3">Fun & Safe Community</h3>
            <p className="text-slate-500 font-medium leading-relaxed">A secure, positive space where everyone belongs and grows.</p>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="flex items-center justify-center gap-4 opacity-50">
        <div className="h-1 w-24 bg-orange-200 rounded-full"></div>
        <span className="text-3xl">🦉</span>
        <div className="h-1 w-24 bg-orange-200 rounded-full"></div>
      </div>

      {/* Our Story / About */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border-b-8 border-stone-100">
          <div className="flex-1 space-y-8">
            <div className="inline-block bg-orange-100 text-orange-600 font-black px-4 py-2 rounded-full text-sm tracking-wider uppercase">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 leading-tight">
              A Special Place to <span className="text-orange-500">Connect & Grow</span>
            </h2>
            <div className="space-y-4 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                <strong>The Learning Treehouse</strong> was born from a love of education and a dream to create a special place where kids and teachers could connect and grow together.
              </p>
              <p>
                Like a real treehouse, it's a place where imaginations soar, friendships are built, and learning feels like an adventure rather than a chore.
              </p>
            </div>
            
            <div className="space-y-4 pt-4 bg-stone-50 p-6 rounded-3xl border-2 border-stone-100">
                <div className="flex items-center gap-4 text-slate-700 font-bold text-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl shrink-0">🎓</div> 
                    <span>Built for Teachers & Students</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700 font-bold text-lg">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-xl shrink-0">⭐</div> 
                    <span>Playful & Easy to Use</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700 font-bold text-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl shrink-0">📈</div> 
                    <span>Helping Every Learner Grow</span>
                </div>
            </div>
          </div>

          {/* Story Image Upload Section */}
          <div className="flex-1 flex justify-center w-full relative">
              {/* Decorative background blob */}
              <div className="absolute inset-0 bg-orange-50 rounded-full blur-3xl scale-110 -z-10"></div>
              
              <div className="relative group w-full max-w-[500px] flex justify-center items-center">
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
                              className="w-full h-auto rounded-[3rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-[12px] border-white object-cover"
                          />
                          <button 
                              onClick={clearStoryImage}
                              className="absolute -top-4 -right-4 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-30 hover:bg-red-600"
                              title="Reset to Default"
                          >
                              <X size={16} />
                          </button>
                      </div>
                  ) : (
                      <img 
                          src="https://raw.githubusercontent.com/dfdearagao/The_Learning_Treehouse/refs/heads/main/Tree%20Logo.png" 
                          alt="Our Story Tree" 
                          className="w-full h-auto rounded-[3rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-[12px] border-white object-contain bg-blue-50"
                      />
                  )}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

