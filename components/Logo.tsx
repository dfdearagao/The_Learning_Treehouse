
import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const [useImage, setUseImage] = useState(true);

  if (useImage) {
    return (
      <img 
        src="/logo.png" 
        alt="The Learning Treehouse" 
        className={`${className} object-contain drop-shadow-md hover:scale-105 transition-transform duration-300`}
        onError={() => setUseImage(false)}
      />
    );
  }

  return (
    <svg viewBox="0 0 600 300" className={`${className} drop-shadow-xl hover:scale-105 transition-transform duration-500`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bushGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#84cc16" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
        <filter id="txtShadow">
          <feDropShadow dx="2" dy="2" stdDeviation="0" floodColor="rgba(0,0,0,0.2)" />
        </filter>
      </defs>

      {/* 1. BUSH BACKGROUND */}
      <g fill="url(#bushGrad)" stroke="#14532d" strokeWidth="3">
        <circle cx="100" cy="150" r="60" />
        <circle cx="60" cy="180" r="40" />
        <circle cx="140" cy="120" r="50" />
        <circle cx="80" cy="210" r="45" />
        
        <circle cx="500" cy="150" r="60" />
        <circle cx="540" cy="180" r="40" />
        <circle cx="460" cy="120" r="50" />
        <circle cx="520" cy="210" r="45" />

        <ellipse cx="300" cy="130" rx="180" ry="90" />
        <ellipse cx="300" cy="180" rx="160" ry="70" />
        
        <circle cx="220" cy="100" r="60" />
        <circle cx="380" cy="100" r="60" />
        <circle cx="300" cy="80" r="60" />
      </g>

      {/* 2. TOP RIBBON (Orange) */}
      <path 
        d="M 130 90 Q 300 40 470 90 L 460 130 Q 300 80 140 130 Z" 
        fill="#f97316" 
        stroke="#c2410c" 
        strokeWidth="4" 
      />
      <path id="topTextPath" d="M 140 105 Q 300 60 460 105" fill="none" />
      <text width="600" textAnchor="middle" filter="url(#txtShadow)">
        <textPath href="#topTextPath" startOffset="50%" textAnchor="middle" fill="white" fontFamily="'Nunito', sans-serif" fontWeight="900" fontSize="34" letterSpacing="0.1em">
          THE LEARNING
        </textPath>
      </text>

      {/* 3. MAIN TEXT (TREEHOUSE) */}
      <g transform="translate(300, 200)" textAnchor="middle">
        <text x="0" y="0" textAnchor="middle" 
              fontFamily="'Comic Neue', sans-serif" fontWeight="900" fontSize="110" 
              stroke="#14532d" strokeWidth="18" strokeLinejoin="round" fill="none">
          TREEHOUSE
        </text>
        <text x="0" y="0" textAnchor="middle" 
              fontFamily="'Comic Neue', sans-serif" fontWeight="900" fontSize="110" 
              fill="white">
          TREEHOUSE
        </text>
        
        {/* 4. STAR (Inside O) */}
        <g transform="translate(65, -35)">
          <path d="M 0 -22 L 7 -8 L 22 -8 L 10 3 L 14 18 L 0 9 L -14 18 L -10 3 L -22 -8 L -7 -8 Z" 
                fill="#3b82f6" stroke="white" strokeWidth="3" />
        </g>
      </g>

      {/* 5. BOTTOM RIBBON (Beige) */}
      <g transform="translate(0, 20)">
          <path 
          d="M 150 220 Q 300 240 450 220 L 460 260 Q 300 280 140 260 Z" 
          fill="#fef3c7" 
          stroke="#b45309" 
          strokeWidth="3" 
          />
          <path id="bottomTextPath" d="M 150 248 Q 300 268 450 248" fill="none" />
          <text width="600" textAnchor="middle">
          <textPath href="#bottomTextPath" startOffset="50%" textAnchor="middle" fill="#78350f" fontFamily="'Nunito', sans-serif" fontWeight="800" fontSize="22">
              Where Bright Minds Grow
          </textPath>
          </text>
           {/* Heart Icon */}
           <path transform="translate(435, 240) scale(0.8)" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#84cc16" />
      </g>
    </svg>
  );
};

export default Logo;
