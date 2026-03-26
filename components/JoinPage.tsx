import React, { useState } from 'react';
import { TreeDeciduous, ArrowRight, User, Lock, Mail, Eye, EyeOff, GraduationCap, Users, Heart, Check, Loader2 } from 'lucide-react';
import { playSound } from '../utils/sound';

interface JoinPageProps {
  onLogin: (email: string, profileData?: any) => void;
}

const JoinPage: React.FC<JoinPageProps> = ({ onLogin }) => {
  const [mode, setMode] = useState<'signup' | 'login'>('signup');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email.trim()) {
        newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
        newErrors.password = "Password is required";
    } else if (mode === 'signup' && formData.password.length < 6) {
        newErrors.password = "Must be at least 6 characters";
    }
    
    if (mode === 'signup') {
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
            setShowConfirmation(true);
        } else {
            onLogin(formData.email);
        }
    }, 1500);
  };

  const handleSimulatedVerify = () => {
      playSound('click');
      setIsLoading(true);
      setTimeout(() => {
          setIsLoading(false);
          onLogin(formData.email);
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
            
            {/* Email Field */}
            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase ml-2">Email Address</label>
                <div className="relative group">
                    <input 
                        type="email" 
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
                        onClick={() => { playSound('click'); setShowPassword(!showPassword); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
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
                            type={showPassword ? "text" : "password"}
                            className={`w-full pl-12 pr-4 py-4 bg-stone-50 rounded-2xl border-2 outline-none font-bold text-slate-700 transition-all ${errors.confirmPassword ? 'border-red-300 bg-red-50' : 'border-stone-100 focus:border-blue-400 group-hover:border-stone-200'}`}
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={e => {
                                setFormData({...formData, confirmPassword: e.target.value});
                                if (errors.confirmPassword) setErrors({...errors, confirmPassword: ''});
                            }}
                        />
                        <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.confirmPassword ? 'text-red-400' : 'text-slate-400 group-hover:text-slate-500'}`} size={20} />
                    </div>
                    {errors.confirmPassword && <p className="text-red-500 text-xs font-bold ml-2 animate-in slide-in-from-top-1">{errors.confirmPassword}</p>}
                </div>
            )}

            {/* Terms (Signup Only) */}
            {mode === 'signup' && (
                <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all mt-0.5 ${formData.agreedToTerms ? 'bg-green-500 border-green-500' : errors.agreedToTerms ? 'border-red-400 bg-red-50' : 'border-stone-300 group-hover:border-green-400'}`}>
                            <input 
                                type="checkbox" 
                                className="hidden"
                                checked={formData.agreedToTerms}
                                onChange={e => {
                                    playSound('click');
                                    setFormData({...formData, agreedToTerms: e.target.checked});
                                    if (errors.agreedToTerms) setErrors({...errors, agreedToTerms: ''});
                                }}
                            />
                            {formData.agreedToTerms && <Check size={16} className="text-white" />}
                        </div>
                        <span className="text-sm text-slate-500 font-medium leading-relaxed">
                            I agree to the <a href="#" className="text-green-600 font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-green-600 font-bold hover:underline">Privacy Policy</a>
                        </span>
                    </label>
                </div>
            )}

            {/* Submit Button */}
            <button 
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-2xl font-black text-xl text-white shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2 mt-4 ${
                    mode === 'signup' 
                    ? 'bg-green-500 shadow-green-200 hover:bg-green-600' 
                    : 'bg-blue-500 shadow-blue-200 hover:bg-blue-600'
                }`}
            >
                {isLoading ? (
                    <Loader2 className="animate-spin" />
                ) : (
                    <>
                        {mode === 'signup' ? 'Create Account' : 'Log In'}
                        <ArrowRight size={24} />
                    </>
                )}
            </button>

            {/* Forgot Password (Login Only) */}
            {mode === 'login' && (
                <div className="text-center pt-4">
                    <button type="button" className="text-slate-400 font-bold hover:text-blue-500 transition-colors text-sm">
                        Forgot your password?
                    </button>
                </div>
            )}
        </form>
      </div>
    </div>
  );
};

export default JoinPage;
