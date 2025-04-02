
import { motion } from 'framer-motion';

interface MascotProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animation?: 'bounce' | 'pulse' | 'wave' | 'spin' | 'dance' | 'shake' | 'float' | 'none';
  className?: string;
  color?: 'normal' | 'success' | 'error' | 'warning';
}

const Mascot = ({ 
  size = 'md', 
  animation = 'none', 
  className = '',
  color = 'normal'
}: MascotProps) => {
  const sizeClass = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24'
  };

  const colorFilter = {
    normal: '',
    success: 'drop-shadow(0 0 0.5rem rgba(34, 197, 94, 0.5)) brightness(1.05) saturate(1.2)',
    error: 'drop-shadow(0 0 0.5rem rgba(239, 68, 68, 0.5)) brightness(1.05) saturate(1.2)',
    warning: 'drop-shadow(0 0 0.5rem rgba(234, 179, 8, 0.5)) brightness(1.05) saturate(1.2)'
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
      case 'dance':
        return {
          animate: { 
            y: [0, -5, 0, -8, -2, -10, 0],
            x: [0, 5, -5, 8, -8, 0],
            rotate: [0, 5, -5, 10, -10, 0]
          },
          transition: { 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }
        };
      case 'shake':
        return {
          animate: { 
            x: [0, 3, -3, 6, -6, 3, -3, 0],
            rotate: [0, 1, -1, 2, -2, 1, -1, 0]
          },
          transition: { 
            duration: 0.8, 
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeInOut" 
          }
        };
      case 'float':
        return {
          animate: { 
            y: [0, -8, 0],
            scale: [1, 1.05, 1],
            filter: [
              'drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1))',
              'drop-shadow(0 15px 25px rgba(0, 0, 0, 0.2))',
              'drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1))'
            ]
          },
          transition: { 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut" 
          }
        };
      default:
        return {};
    }
  };

  return (
    <motion.div 
      className={`${sizeClass[size]} ${className} relative`}
      style={{filter: colorFilter[color]}}
      {...getAnimationProps()}
    >
      <motion.div className="absolute inset-0 rounded-full bg-app-blue-light/20 animate-ping" 
        style={{animationDuration: '3s', animationDelay: '0.5s', opacity: 0, animationIterationCount: color !== 'normal' ? 'infinite' : 0}}
      />

      <img 
        src="/lovable-uploads/c641b0c7-64fb-466c-be4c-766e165a4b10.png" 
        alt="Mascotte FlashBac" 
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};

export default Mascot;
