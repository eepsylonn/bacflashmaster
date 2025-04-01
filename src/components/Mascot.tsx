
import { motion } from 'framer-motion';

interface MascotProps {
  size?: 'sm' | 'md' | 'lg';
  animation?: 'bounce' | 'pulse' | 'wave' | 'spin' | 'none';
  className?: string;
}

const Mascot = ({ size = 'md', animation = 'none', className = '' }: MascotProps) => {
  const sizeClass = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20'
  };

  const getAnimationProps = () => {
    switch (animation) {
      case 'bounce':
        return {
          animate: { y: [0, -10, 0] },
          transition: { 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }
        };
      case 'pulse':
        return {
          animate: { scale: [1, 1.1, 1] },
          transition: { 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }
        };
      case 'wave':
        return {
          animate: { rotate: [0, 15, 0, -15, 0] },
          transition: { 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }
        };
      case 'spin':
        return {
          animate: { rotate: 360 },
          transition: { 
            duration: 3, 
            repeat: Infinity,
            ease: "linear" 
          }
        };
      default:
        return {};
    }
  };

  return (
    <motion.div 
      className={`${sizeClass[size]} ${className}`}
      {...getAnimationProps()}
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Cercle principal (tête) */}
        <circle cx="50" cy="50" r="45" fill="#3B82F6" />
        
        {/* Yeux */}
        <circle cx="35" cy="40" r="7" fill="white" />
        <circle cx="65" cy="40" r="7" fill="white" />
        <circle cx="35" cy="40" r="3" fill="#1A365D" />
        <circle cx="65" cy="40" r="3" fill="#1A365D" />
        
        {/* Sourire */}
        <path d="M 30 65 Q 50 80 70 65" stroke="white" strokeWidth="3" fill="transparent" />
        
        {/* Lunettes */}
        <circle cx="35" cy="40" r="12" stroke="#F3AC3C" strokeWidth="2.5" fill="transparent" />
        <circle cx="65" cy="40" r="12" stroke="#F3AC3C" strokeWidth="2.5" fill="transparent" />
        <line x1="47" y1="40" x2="53" y2="40" stroke="#F3AC3C" strokeWidth="2.5" />
        
        {/* Détails (graduation cap) */}
        <rect x="25" y="20" width="50" height="5" fill="#1A365D" />
        <rect x="45" y="5" width="10" height="15" fill="#1A365D" />
        <rect x="42" y="0" width="16" height="5" fill="#1A365D" />
        
        {/* Petite étoile brillante */}
        <circle cx="80" cy="25" r="3" fill="yellow">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </motion.div>
  );
};

export default Mascot;
