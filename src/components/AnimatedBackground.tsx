
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  type?: 'bubble' | 'wave' | 'confetti' | 'grid';
  color?: 'blue' | 'green' | 'purple' | 'orange';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  type = 'bubble',
  color = 'blue',
  intensity = 'medium',
  className = '',
}) => {
  // Configuration des couleurs
  const colorMap = {
    blue: {
      primary: 'rgba(59, 130, 246, 0.7)',
      secondary: 'rgba(37, 99, 235, 0.5)',
      accent: 'rgba(96, 165, 250, 0.3)',
    },
    green: {
      primary: 'rgba(16, 185, 129, 0.7)',
      secondary: 'rgba(5, 150, 105, 0.5)',
      accent: 'rgba(52, 211, 153, 0.3)',
    },
    purple: {
      primary: 'rgba(139, 92, 246, 0.7)',
      secondary: 'rgba(124, 58, 237, 0.5)',
      accent: 'rgba(167, 139, 250, 0.3)',
    },
    orange: {
      primary: 'rgba(249, 115, 22, 0.7)',
      secondary: 'rgba(234, 88, 12, 0.5)',
      accent: 'rgba(251, 146, 60, 0.3)',
    },
  };

  // Nombre d'éléments en fonction de l'intensité
  const intensityMap = {
    low: 5,
    medium: 10,
    high: 15,
  };

  // Rendu du background en fonction du type
  const renderBackground = () => {
    switch (type) {
      case 'bubble':
        return (
          <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {[...Array(intensityMap[intensity])].map((_, index) => (
              <motion.div
                key={index}
                className="absolute rounded-full"
                style={{
                  backgroundColor: index % 3 === 0 
                    ? colorMap[color].primary 
                    : index % 3 === 1 
                      ? colorMap[color].secondary 
                      : colorMap[color].accent,
                  width: `${Math.random() * 100 + 50}px`,
                  height: `${Math.random() * 100 + 50}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.15,
                  filter: 'blur(8px)',
                }}
                initial={{ 
                  scale: 0, 
                  x: 0, 
                  y: 0,
                  opacity: 0,
                }}
                animate={{ 
                  scale: [0, 1, 0.8, 1.2, 0],
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0, 0.15, 0.1, 0.2, 0],
                }}
                transition={{ 
                  duration: Math.random() * 20 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                }}
              />
            ))}
          </div>
        );

      case 'wave':
        return (
          <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute bottom-0 left-0 right-0 h-64 origin-bottom"
                style={{
                  background: `linear-gradient(to top, ${colorMap[color].primary} 0%, transparent 100%)`,
                  opacity: 0.05 + (index * 0.02),
                }}
                animate={{
                  scaleY: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 8 + index * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 1.5,
                }}
              />
            ))}
          </div>
        );

      case 'confetti':
        return (
          <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {[...Array(intensityMap[intensity] * 2)].map((_, index) => {
              const size = Math.random() * 10 + 5;
              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    width: size,
                    height: size * (Math.random() * 2 + 0.5),
                    backgroundColor: index % 3 === 0 
                      ? colorMap[color].primary 
                      : index % 3 === 1 
                        ? colorMap[color].secondary 
                        : colorMap[color].accent,
                    borderRadius: '2px',
                    left: `${Math.random() * 100}%`,
                    top: `-${size}px`,
                    opacity: 0.4,
                  }}
                  animate={{
                    y: [`-${size}px`, `${window.innerHeight + size}px`],
                    rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                    x: [0, Math.random() * 100 - 50],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 10,
                  }}
                />
              );
            })}
          </div>
        );

      case 'grid':
        return (
          <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <motion.div 
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(${colorMap[color].accent} 1px, transparent 1px), 
                                  linear-gradient(90deg, ${colorMap[color].accent} 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                opacity: 0.2,
              }}
              animate={{
                backgroundPosition: ['0px 0px', '40px 40px'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-background" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          </div>
        );

      default:
        return null;
    }
  };

  return <>{renderBackground()}</>;
};

export default AnimatedBackground;
