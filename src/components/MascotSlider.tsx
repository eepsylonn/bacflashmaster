
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import Mascot from "@/components/Mascot";
import { motion } from "framer-motion";

interface MascotSliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  onValueChange: (value: number[]) => void;
  steps?: number[];
  currentValue: number;
}

const MascotSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  MascotSliderProps
>(({ className, steps = [], currentValue, ...props }, ref) => (
  <div className="space-y-5 relative">
    <motion.div 
      className="text-center bg-gradient-to-r from-app-blue-light to-app-blue-dark rounded-full py-2 px-6 font-bold text-white text-lg mb-4 shadow-md"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span className="mr-1">🎯</span> {currentValue} questions
    </motion.div>
    
    <div className="relative">
      {/* Animated gradient background for the track */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full opacity-50 h-6 shadow-inner"></div>
      
      {/* Progress markers */}
      <div className="absolute inset-0 flex items-center justify-between px-2 py-1">
        {[0, 25, 50, 75, 100].map((mark) => (
          <motion.div 
            key={mark}
            className={`h-3 w-1 rounded-full ${
              (props.value && props.value[0] >= mark) ? 'bg-app-blue-dark' : 'bg-gray-300'
            }`}
            initial={{ height: 8 }}
            animate={{ 
              height: (props.value && props.value[0] === mark) ? 14 : 8,
              opacity: (props.value && props.value[0] === mark) ? 1 : 0.7
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
      
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-6 w-full grow overflow-hidden rounded-full bg-transparent">
          <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-app-blue-light via-app-blue-medium to-app-blue-dark animate-pulse">
            {/* Animated light effect */}
            <motion.div 
              className="absolute inset-0 bg-white opacity-30"
              animate={{ 
                x: ["-100%", "100%"],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "linear" 
              }}
              style={{ width: "50%" }}
            />
          </SliderPrimitive.Range>
        </SliderPrimitive.Track>
        
        {props.value?.map((_, i) => (
          <SliderPrimitive.Thumb
            key={i}
            className="block h-10 w-10 rounded-full bg-white shadow-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 hover:scale-110 z-10"
          >
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ 
                y: [0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <div className="w-20 h-20 flex items-center justify-center"> 
                <Mascot size="lg" animation="bounce" />
              </div>
            </motion.div>
            
            {/* Subtle glow effect */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-app-blue-light/20"
              animate={{ 
                boxShadow: [
                  "0 0 5px 2px rgba(120, 170, 255, 0.3)",
                  "0 0 15px 5px rgba(120, 170, 255, 0.6)",
                  "0 0 5px 2px rgba(120, 170, 255, 0.3)"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </SliderPrimitive.Thumb>
        ))}
      </SliderPrimitive.Root>
      
      {/* Decorative sparkles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-400 text-xs"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -10],
          }}
          transition={{
            duration: 1 + Math.random(),
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 2 + Math.random() * 3
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  </div>
));

MascotSlider.displayName = SliderPrimitive.Root.displayName;

export { MascotSlider };
