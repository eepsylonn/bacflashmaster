
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import Mascot from "@/components/Mascot";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence mode="wait">
      <motion.div 
        key={currentValue}
        initial={{ opacity: 0, y: -10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="text-center bg-gradient-to-r from-app-blue-light to-app-blue-medium rounded-full py-1.5 px-6 font-semibold text-white text-lg mb-4 shadow-md"
        style={{
          boxShadow: "0 4px 14px rgba(0, 120, 255, 0.2)",
        }}
      >
        {currentValue} questions
      </motion.div>
    </AnimatePresence>
    
    <div className="relative mx-2 mt-2">
      {/* iOS-style rail background */}
      <div className="absolute inset-0 h-3 bg-gray-200 rounded-full opacity-80" 
        style={{ 
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
        }} 
      />
      
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-3 w-full grow overflow-hidden rounded-full bg-secondary">
          <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-app-blue-light to-app-blue-dark" />
        </SliderPrimitive.Track>
        
        {props.value?.map((_, i) => (
          <SliderPrimitive.Thumb
            key={i}
            className="block h-10 w-10 rounded-full bg-transparent shadow-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 hover:scale-110"
          >
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              whileTap={{ scale: 0.9 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17 
              }}
            >
              <motion.div 
                className="w-16 h-16 flex items-center justify-center" 
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Mascot size="lg" animation="pulse" />
              </motion.div>
            </motion.div>
          </SliderPrimitive.Thumb>
        ))}
      </SliderPrimitive.Root>
      
      {/* iOS-style tick marks */}
      <div className="absolute top-full pt-2 w-full flex justify-between px-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div 
            key={i} 
            className="h-1 w-1 rounded-full bg-app-blue-medium opacity-70"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  </div>
));

MascotSlider.displayName = SliderPrimitive.Root.displayName;

export { MascotSlider };
