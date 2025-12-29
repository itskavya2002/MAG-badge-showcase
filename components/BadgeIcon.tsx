
import React from 'react';

interface BadgeIconProps {
  src: string;               
  level: number;
  size?: 'sm' | 'md' | 'lg';
  locked?: boolean;
}


const BadgeIcon: React.FC<BadgeIconProps> = ({
  src,
  level,
  size = 'md',
  locked = false
}) => {

  const dimensions = {
  sm: 'w-20 h-20',
  md: 'w-64 h-64',   // ⭐ main grid size
  lg: 'w-112 h-112'    // ⭐ spotlight size
  };


  return (
    <div
      className={`relative ${dimensions[size]} transition-transform duration-300
        ${!locked ? 'group-hover:scale-110' : ''}
      `}
    >
      <img
        src={src}
        alt={`MAG ${level} badge`}
        className={`w-full h-full object-contain
          ${locked ? 'grayscale opacity-60' : ''}
        `}
        draggable={false}
      />

      {/* Shine sweep */}
      {!locked && (
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute -left-1/2 top-0 h-full w-1/3 rotate-12 bg-white/20 animate-shine" />
        </span>
      )}

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-150%) rotate(12deg); }
          50% { transform: translateX(200%) rotate(12deg); }
          100% { transform: translateX(200%) rotate(12deg); }
        }
        .animate-shine {
          animation: shine 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};



// const BadgeIcon: React.FC<BadgeIconProps> = ({ level, color, size = 'md', locked = false }) => {
//   const dimensions = {
//     sm: 'w-16 h-20',
//     md: 'w-32 h-40',
//     lg: 'w-64 h-80'
//   };

//   const currentFill = locked ? '#888' : color;
//   const logoFill = locked ? '#666' : 'rgba(0,0,0,0.5)';

//   return (
//     <div className={`relative ${dimensions[size]} transition-all duration-700`}>
//       <svg
//         viewBox="0 0 160 200"
//         className="w-full h-full filter drop-shadow-xl"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <defs>
//           <linearGradient id={`grad-${level}`} x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor={currentFill} stopOpacity="1" />
//             <stop offset="100%" stopColor={currentFill} stopOpacity="0.8" />
//           </linearGradient>
//           <mask id={`mask-${level}`}>
//             <path
//               d="M80 0L145 35V165L80 200L15 165V35L80 0Z"
//               fill="white"
//             />
//           </mask>
//         </defs>
        
//         {/* Main Body */}
//         <path
//           d="M80 0L145 35V165L80 200L15 165V35L80 0Z"
//           fill={`url(#grad-${level})`}
//           className="transition-colors duration-500"
//         />
        
//         {/* Border / Inner Glow */}
//         <path
//           d="M80 5L140 37V163L80 195L20 163V37L80 5Z"
//           stroke="rgba(255,255,255,0.2)"
//           strokeWidth="2"
//         />

//         {/* Level Tag Area */}
//         <path
//           d="M80 0L110 15L110 40L80 55L50 40L50 15L80 0Z"
//           fill="rgba(0,0,0,0.1)"
//         />

//         {/* Symbol "X" logo */}
//         <g transform="translate(40, 80) scale(0.8)" fill={logoFill}>
//           <path d="M10 10C30 10 70 50 90 50" stroke={logoFill} strokeWidth="12" strokeLinecap="round" />
//           <path d="M10 50C30 50 70 10 90 10" stroke={logoFill} strokeWidth="12" strokeLinecap="round" />
//           <path d="M30 30C40 30 60 30 70 30" stroke={logoFill} strokeWidth="8" strokeLinecap="round" opacity="0.5" />
//         </g>

//         {/* Level Text */}
//         <text
//           x="80"
//           y="32"
//           textAnchor="middle"
//           fill="rgba(0,0,0,0.7)"
//           style={{ fontSize: '24px', fontWeight: '800', fontFamily: 'monospace' }}
//         >
//           {level}
//         </text>

//         {/* Shine Sweep Overlay (Animated via CSS/Framer if needed) */}
//         {!locked && (
//             <rect
//                 x="-100"
//                 y="0"
//                 width="80"
//                 height="200"
//                 fill="rgba(255,255,255,0.15)"
//                 transform="rotate(25)"
//                 className="animate-shine"
//             />
//         )}
//       </svg>
      
//       <style>{`
//         @keyframes shine {
//           0% { transform: translateX(-150%) rotate(25deg); }
//           50% { transform: translateX(200%) rotate(25deg); }
//           100% { transform: translateX(200%) rotate(25deg); }
//         }
//         .animate-shine {
//           animation: shine 4s infinite ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// };

export default BadgeIcon;
