
import { motion } from 'framer-motion';

interface MascotProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animation?: 'bounce' | 'pulse' | 'wave' | 'spin' | 'none';
  className?: string;
}

const Mascot = ({ size = 'md', animation = 'none', className = '' }: MascotProps) => {
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
      default:
        return {};
    }
  };

  return (
    <motion.div 
      className={`${sizeClass[size]} ${className}`}
      {...getAnimationProps()}
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
