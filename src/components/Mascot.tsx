
import { motion } from 'framer-motion';

interface MascotProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animation?: 'bounce' | 'pulse' | 'wave' | 'spin' | 'shake' | 'jump' | 'dance' | 'wiggle' | 'none';
  className?: string;
  withShadow?: boolean;
  withGlow?: boolean;
}

const Mascot = ({ 
  size = 'md', 
  animation = 'none', 
  className = '',
  withShadow = false,
  withGlow = false
}: MascotProps) => {
  const sizeClass = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24'
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
      case 'shake':
        return {
          animate: { x: [0, -5, 5, -5, 5, 0] },
          transition: { 
            duration: 0.5, 
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut" 
          }
        };
      case 'jump':
        return {
          animate: { 
            y: [0, -15, 0],
            scaleY: [1, 0.9, 1.1, 1]
          },
          transition: { 
            duration: 0.6, 
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeOut"
          }
        };
      case 'dance':
        return {
          animate: { 
            rotate: [0, 10, -10, 10, 0],
            y: [0, -5, 0, -5, 0]
          },
          transition: { 
            duration: 1.2, 
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut" 
          }
        };
      case 'wiggle':
        return {
          animate: { 
            rotate: [0, 5, -5, 5, -5, 3, -3, 0]
          },
          transition: { 
            duration: 1, 
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: "easeInOut" 
          }
        };
      default:
        return {};
    }
  };

  const shadowClass = withShadow ? 'drop-shadow-lg' : '';
  const glowClass = withGlow ? 'animate-pulse filter drop-shadow-[0_0_8px_rgba(120,170,255,0.8)]' : '';

  return (
    <motion.div 
      className={`${sizeClass[size]} ${className} ${shadowClass} ${glowClass}`}
      {...getAnimationProps()}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
    >
      <img 
        src="/lovable-uploads/c641b0c7-64fb-466c-be4c-766e165a4b10.png" 
        alt="Mascotte FlashBac" 
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};

export default Mascot;
