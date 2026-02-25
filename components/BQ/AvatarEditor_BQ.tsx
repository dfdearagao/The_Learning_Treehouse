
import React from 'react';
import { User, Sparkles, Crown, Glasses, Zap, Rocket } from 'lucide-react';
import { AvatarConfig } from '../../types/types_BQ';
import { soundManager } from '../../utils/soundService_BQ';

interface AvatarEditorProps {
  currentConfig: AvatarConfig;
  onSave: (config: AvatarConfig) => void;
}

// Colors matching the pastel/vibrant palette in the mockup
const COLORS = [
  'bg-red-400',    // Salmon/Red
  'bg-blue-500',   // Blue
  'bg-green-400',  // Green
  'bg-yellow-400', // Yellow
  'bg-purple-400', // Purple
  'bg-pink-400'    // Pink
];

const ACCESSORIES = [
  { id: 'none', icon: <User className="w-8 h-8 md:w-10 md:h-10 text-slate-300" />, label: 'None' },
  { id: 'crown', icon: <Crown className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />, label: 'Crown' },
  { id: 'glasses', icon: <Glasses className="w-8 h-8 md:w-10 md:h-10 text-slate-800" />, label: 'Glasses' },
  { id: 'hero', icon: <Zap className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />, label: 'Hero' },
];

export const AvatarDisplay: React.FC<{ config: AvatarConfig, size?: 'sm' | 'lg' }> = ({ config, size = 'lg' }) => {
  const sizeClasses = size === 'lg' ? 'w-32 h-32 md:w-40 md:h-40' : 'w-12 h-12';
  const iconSize = size === 'lg' ? 'w-20 h-20 md:w-24 md:h-24' : 'w-7 h-7';

  const getAccessoryIcon = () => {
    switch(config.accessory) {
      case 'crown': return <Crown className={`${iconSize} absolute -top-6 -right-2 text-yellow-400 animate-bounce-slow drop-shadow-md`} />;
      case 'glasses': return <Glasses className={`${iconSize} absolute top-10 text-slate-800 drop-shadow-sm`} />;
      case 'hero': return <Zap className={`${iconSize} absolute -top-4 -right-4 text-yellow-300 drop-shadow-lg stroke-2`} />;
      default: return null;
    }
  };

  return (
    <div className={`relative rounded-full ${config.color} ${sizeClasses} flex items-center justify-center border-4 md:border-[6px] border-white shadow-xl transform transition-transform`}>
      <Rocket className={`${iconSize} text-white opacity-90 fill-white/20`} />
      {getAccessoryIcon()}
    </div>
  );
};

const AvatarEditor: React.FC<AvatarEditorProps> = ({ currentConfig, onSave }) => {
  const [tempConfig, setTempConfig] = React.useState(currentConfig);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-indigo-50 font-sans">
      <div className="bg-white p-6 md:p-10 rounded-[2rem] shadow-2xl w-full max-w-md text-center transform transition-all hover:scale-[1.01]">
        
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-8 tracking-tight">Create Your Hero</h2>

        <div className="flex justify-center mb-10">
          <AvatarDisplay config={tempConfig} size="lg" />
        </div>

        {/* Color Picker */}
        <div className="mb-8">
          <label className="block text-left text-slate-700 font-bold mb-3 ml-1">Pick a Color</label>
          <div className="flex flex-wrap gap-4 justify-center">
            {COLORS.map((color) => (
              <button
                key={color}
                onClick={() => {
                  soundManager.playClick();
                  setTempConfig({ ...tempConfig, color });
                }}
                className={`w-12 h-12 rounded-full ${color} shadow-sm transition-all duration-200 
                  ${tempConfig.color === color 
                    ? 'ring-4 ring-slate-800 scale-110' 
                    : 'hover:scale-110 hover:shadow-md'
                  }`}
                aria-label="Select color"
              />
            ))}
          </div>
        </div>

        {/* Item Picker */}
        <div className="mb-8">
          <label className="block text-left text-slate-700 font-bold mb-3 ml-1">Pick an Item</label>
          <div className="flex gap-4 justify-center">
            {ACCESSORIES.map((acc) => (
              <button
                key={acc.id}
                onClick={() => {
                  soundManager.playClick();
                  setTempConfig({ ...tempConfig, accessory: acc.id });
                }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-200
                  ${tempConfig.accessory === acc.id 
                    ? 'bg-indigo-50 border-indigo-500 shadow-md scale-105' 
                    : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-sm'
                  }`}
              >
                {acc.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Name Input */}
        <div className="mb-10">
           <label className="block text-left text-slate-700 font-bold mb-3 ml-1">Hero Name</label>
           <input
             type="text"
             value={tempConfig.name}
             onChange={(e) => setTempConfig({...tempConfig, name: e.target.value})}
             className="w-full py-3 px-4 rounded-xl border-2 border-slate-200 focus:border-indigo-500 outline-none text-xl text-center font-bold text-indigo-700 placeholder-indigo-300 transition-colors bg-slate-50 focus:bg-white"
             placeholder="Super Hero"
           />
        </div>

        <button
          onClick={() => onSave(tempConfig)}
          className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2"
        >
          <Sparkles className="w-6 h-6 animate-pulse" />
          Start Adventure!
        </button>
      </div>
    </div>
  );
};

export default AvatarEditor;
