import React, { useState } from 'react';
import { X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative animate-bounce-in">
        {/* Header */}
        <div className="bg-blue-600 p-6 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-white">Welcome Back! 👋</h3>
          <button onClick={onClose} className="text-white hover:bg-blue-700 p-2 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <label className="block text-slate-700 font-bold mb-2 ml-1">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-semibold text-slate-600"
              placeholder="Enter your explorer name"
            />
          </div>
          <div>
            <label className="block text-slate-700 font-bold mb-2 ml-1">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-semibold text-slate-600"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-treehouse-green text-white font-bold text-xl py-3 rounded-xl shadow-lg hover:bg-green-500 hover:scale-[1.02] transition-all transform active:scale-95"
          >
            Log In
          </button>
          
          <p className="text-center text-slate-500 text-sm font-semibold">
            Don't have an account? <span className="text-blue-600 cursor-pointer hover:underline">Ask a parent to sign up!</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;