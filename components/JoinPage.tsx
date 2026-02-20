
import React, { useState } from 'react';
import { TreeDeciduous, ArrowRight, User, Lock, Mail, Eye, EyeOff, GraduationCap, Users, Heart, Check, Loader2, ArrowLeft } from 'lucide-react';
import { playSound } from '../utils/sound';

interface JoinPageProps {
  onLogin: () => void;
}

const JoinPage: React.FC<JoinPageProps> = ({ onLogin }) => {
  const [mode, setMode] = useState<'signup' | 'login'>('signup');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false); // New state for confirmation screen
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student' as 'student' | 'teacher' | 'parent',
    grade: '2nd Grade',
    agreedToTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.username.trim()) newErrors.username = "Username is required";
    
    if (!formData.password) {
        newErrors.password = "Password is required";
    } else if (mode === 'signup' && formData.password.length < 6) {
        newErrors.password = "Must be at least 6 characters";
    }
    
    if (mode === 'signup') {
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        if (!formData.agreedToTerms) {
            newErrors.agreedToTerms = "Required";
        }
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) playSound('error');
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSound('click');
    
    if (!validate()) return;

    setIsLoading(true);
    
    // Simulate network request
    setTimeout(() => {
        setIsLoading(false);
        if (mode === 'signup') {
            playSound('success');
            // Show confirmation screen instead of logging in immediately
            setShowConfirmation(true);
        } else {
            // Login directly
            onLogin();
        }
    }, 1500);
  };

  const handleSimulatedVerify = () => {
      playSound('click');
      setIsLoading(true);
      setTimeout(() => {
          setIsLoading(false);
          onLogin();
      }, 1000);
  };

  const GRADES = ["Preschool", "Kindergarten", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade"];

  // --- CONFIRMATION VIEW ---
  if (showConfirmation) {
      return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 flex flex-col items-center justify-center min-h-[600px] py-12">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl w-full max-w-lg border-b-8 border-stone-200 relative overflow-hidden text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail size={48} className="text-green-600" />
                </div>
                <h2 className="text-3xl font-black text-slate-800 mb-4">Check your Email!</h2>
                <p className="text-slate-500 text-lg mb-8 font-medium">
                    We sent a confirmation link to <br/>
                    <span className="text-slate-800 font-bold">{formData.email}</span>.
                </p>
                
                <div className="space-y-4">
                    <button 
                        onClick={handleSimulatedVerify}
                        disabled={isLoading}
                        className="w-full py-4 rounded-2xl font-black text-xl bg-green-500 text-white shadow-lg shadow-green-200 hover:bg-green-600 transform active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                        {isLoading ? <Loader2 className="animate-spin" /> : "I Verified My Email"}
                    </button>
                    
                    <button 
                        onClick={() => { playSound('click'); setShowConfirmation(false); }}
                        className="text-slate-400 font-bold hover:text-slate-600 text-sm"
                    >
                        Wrong email? Go back
                    </button>
                </div>

                <div className="mt-8 pt-8 border-t border-stone-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Didn't get it?</p>
                    <button className="text-blue-500 font-bold hover:underline">Resend Confirmation</button>
                </div>
            </div>
        </div>
      );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 flex flex-col items-center justify-center min-h-[600px] py-12">
      
      {/* Brand Header */}
      <div className="text-center mb-8">
        <div className="bg-treehouse-green w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto mb-4 shadow-lg rotate-3">
            <TreeDeciduous size={48} className="text-white" />
        </div>
        <h1 className="text-4xl font-black text-slate-800 tracking-tight">
          {mode === 'signup' ? 'Start Your Adventure!' : 'Welcome Back!'}
        </h1>
        <p className="text-slate-500 font-bold text-lg mt-2">
          {mode === 'signup' ? 'Join the Treehouse today.' : 'Ready to learn something new?'}
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl w-full max-w-lg border-b-8 border-stone-200 relative overflow-hidden">
        
        {/* Toggle Switch */}
        <div className="flex bg-stone-100 p-1.5 rounded-2xl mb-8 relative">
            <button 
                type="button"
                onClick={() => { playSound('click'); setMode('signup'); setErrors({}); }}
                className={`flex-1 py-3 rounded-xl font-black text-sm uppercase tracking-wide transition-all z-10 ${mode === 'signup' ? 'text-green-700 shadow-sm bg-white' : 'text-slate-400 hover:text-slate-600'}`}
            >
                Sign Up
            </button>
            <button 
                type="button"
                onClick={() => { playSound('click'); setMode('login'); setErrors({}); }}
                className={`flex-1 py-3 rounded-xl font-black text-sm uppercase tracking-wide transition-all z-10 ${mode === 'login' ? 'text-blue-700 shadow-sm bg-white' : 'text-slate-400 hover:text-slate-600'}`}
            >
                Log In
            </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Role Selection (Signup Only) */}
            {mode === 'signup' && (
                <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                        { id: 'student', icon: GraduationCap, label: 'Student', color: 'blue' },
                        { id: 'teacher', icon: Users, label: 'Teacher', color: 'orange' },
                        { id: 'parent', icon: Heart, label: 'Parent', color: 'pink' }
                    ].map((role) => (
                        <button
                            key={role.id}
                            type="button"
                            onClick={() => { playSound('pop'); setFormData({...formData, role: role.id as any}); }}
                            className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all ${
                                formData.role === role.id 
                                ? `border-${role.color}-500 bg-${role.color}-50 text-${role.color}-600 shadow-sm scale-105` 
                                : 'border-stone-100 text-slate-400 hover:border-stone-200'
                            }`}
                        >
                            <role.icon size={24} className="mb-1" />
                            <span className="text-xs font-bold">{role.label}</span>
                        </button>
                    ))}
                </div>
            )}

            {/* Email Field (Signup Only) */}
            {mode === 'signup' && (
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-2">Email Address</label>
                    <div className="relative group">
                        <input 
                            type="text" 
                            className={`w-full pl-12 pr-4 py-4 bg-stone-50 rounded-2xl border-2 outline-none font-bold text-slate-700 transition-all ${errors.email ? 'border-red-300 bg-red-50' : 'border-stone-100 focus:border-green-400 group-hover:border-stone-200'}`}
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={e => {
                                setFormData({...formData, email: e.target.value});
                                if (errors.email) setErrors({...errors, email: ''});
                            }}
                        />
                        <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.email ? 'text-red-400' : 'text-slate-400 group-hover:text-slate-500'}`} size={20} />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs font-bold ml-2 animate-in slide-in-from-top-1">{errors.email}</p>}
                </div>
            )}

            {/* Username */}
            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase ml-2">Username</label>
                <div className="relative group">
                    <input 
                        type="text" 
                        className={`w-full pl-12 pr-4 py-4 bg-stone-50 rounded-2xl border-2 outline-none font-bold text-slate-700 transition-all ${errors.username ? 'border-red-300 bg-red-50' : 'border-stone-100 focus:border-blue-400 group-hover:border-stone-200'}`}
                        placeholder="Explorer Name"
                        value={formData.username}
                        onChange={e => {
                            setFormData({...formData, username: e.target.value});
                            if (errors.username) setErrors({...errors, username: ''});
                        }}
                    />
                    <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.username ? 'text-red-400' : 'text-slate-400 group-hover:text-slate-500'}`} size={20} />
                </div>
                {errors.username && <p className="text-red-500 text-xs font-bold ml-2 animate-in slide-in-from-top-1">{errors.username}</p>}
            </div>

            {/* Grade Selector (Student Signup Only) */}
            {mode === 'signup' && formData.role === 'student' && (
                <div className="space-y-1 animate-in fade-in slide-in-from-top-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-2">Grade Level</label>
                    <div className="relative">
                        <select 
                            value={formData.grade}
                            onChange={(e) => setFormData({...formData, grade: e.target.value})}
                            className="w-full pl-12 pr-4 py-4 bg-stone-50 rounded-2xl border-2 border-stone-100 outline-none font-bold text-slate-700 focus:border-blue-400 appearance-none cursor-pointer hover:border-stone-200 transition-all"
                        >
                            {GRADES.map(g => <option key={g} value={g}>{g}</option>)}
                        </select>
                        <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    </div>
                </div>
            )}

            {/* Password */}
            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase ml-2">Password</label>
                <div className="relative group">
                    <input 
                        type={showPassword ? "text" : "password"}
                        className={`w-full pl-12 pr-12 py-4 bg-stone-50 rounded-2xl border-2 outline-none font-bold text-slate-700 transition-all ${errors.password ? 'border-red-300 bg-red-50' : 'border-stone-100 focus:border-blue-400 group-hover:border-stone-200'}`}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={e => {
                            setFormData({...formData, password: e.target.value});
                            if (errors.password) setErrors({...errors, password: ''});
                        }}
                    />
                    <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.password ? 'text-red-400' : 'text-slate-400 group-hover:text-slate-500'}`} size={20} />
                    <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs font-bold ml-2 animate-in slide-in-from-top-1">{errors.password}</p>}
            </div>

            {/* Confirm Password (Signup Only) */}
            {mode === 'signup' && (
                <div className="space-y-1 animate-in fade-in slide-in-from-top-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-2">Confirm Password</label>
                    <div className="relative group">
                        <input 
                            type="password" 
                            className={`w-full pl-12 pr-4 py-4 bg-stone-50 rounded-2xl border-2 outline-none font-bold text-slate-700 transition-all ${errors.confirmPassword ? 'border-red-300 bg-red-50' : 'border-stone-100 focus:border-green-400 group-hover:border-stone-200'}`}
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={e => {
                                setFormData({...formData, confirmPassword: e.target.value});
                                if (errors.confirmPassword) setErrors({...errors, confirmPassword: ''});
                            }}
                        />
                        <Check className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.confirmPassword ? 'text-red-400' : 'text-slate-400 group-hover:text-slate-500'}`} size={20} />
                    </div>
                    {errors.confirmPassword && <p className="text-red-500 text-xs font-bold ml-2 animate-in slide-in-from-top-1">{errors.confirmPassword}</p>}
                </div>
            )}

            {/* Terms Checkbox (Signup Only) */}
            {mode === 'signup' && (
                <div className="flex items-center gap-3 px-2 pt-2">
                    <button 
                        type="button"
                        onClick={() => {
                            playSound('click');
                            setFormData({...formData, agreedToTerms: !formData.agreedToTerms});
                            if (errors.agreedToTerms) setErrors({...errors, agreedToTerms: ''});
                        }}
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${formData.agreedToTerms ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300 bg-white hover:border-slate-400'}`}
                    >
                        {formData.agreedToTerms && <Check size={16} strokeWidth={3} />}
                    </button>
                    <span className={`text-sm font-bold ${errors.agreedToTerms ? 'text-red-500' : 'text-slate-500'}`}>
                        I agree to the <a href="#" className="text-blue-500 hover:underline">Terms of Service</a>
                    </span>
                </div>
            )}

            <button 
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-2xl font-black text-xl text-white shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2 mt-6 ${
                    isLoading ? 'opacity-80 cursor-wait' : ''
                } ${
                    mode === 'signup' 
                    ? 'bg-orange-500 hover:bg-orange-600 shadow-orange-200' 
                    : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'
                }`}
            >
                {isLoading ? (
                    <Loader2 size={24} className="animate-spin" />
                ) : (
                    <>
                        {mode === 'signup' ? 'Create Account' : 'Let\'s Go!'}
                        <ArrowRight size={24} />
                    </>
                )}
            </button>

        </form>

        {/* Footer info */}
        <div className="text-center mt-6 space-y-2">
            <p className="text-slate-400 text-sm font-bold">
                {mode === 'signup' 
                    ? 'Ask a parent for help if you need it!' 
                    : <span className="cursor-pointer hover:text-blue-500 transition-colors">Forgot your password?</span>
                }
            </p>
        </div>
        
        {/* Decor */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-100 rounded-full blur-2xl opacity-50 pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-50 pointer-events-none"></div>
      </div>

    </div>
  );
};

export default JoinPage;
