
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
      className="text-center bg-gradient-to-r from-app-blue-light/40 to-app-blue-dark/40 rounded-full py-2 px-5 font-semibold text-app-blue-dark text-lg mb-4 shadow-md border border-app-blue-light/30"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 6px 15px -3px rgba(0, 0, 255, 0.2)", 
        background: "linear-gradient(to right, rgba(120, 170, 255, 0.5), rgba(25, 75, 180, 0.5))" 
      }}
    >
      <motion.span
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        {currentValue} questions
      </motion.span>
    </motion.div>
    
    <div className="relative">
      <motion.div 
        className="absolute -top-3 -left-3 w-full h-full rounded-full bg-gradient-to-r from-app-blue-light/20 to-app-blue-dark/20 blur-md"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-4 w-full grow overflow-hidden rounded-full bg-secondary shadow-inner border border-app-blue-light/30">
          <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-app-blue-light to-app-blue-dark shadow-lg" />
        </SliderPrimitive.Track>
        
        {props.value?.map((_, i) => (
          <SliderPrimitive.Thumb
            key={i}
            className="block h-10 w-10 rounded-full bg-transparent shadow-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 hover:scale-110"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 flex items-center justify-center">
                <Mascot size="lg" animation="dance" withGlow withShadow />
              </div>
            </div>
          </SliderPrimitive.Thumb>
        ))}
        
        {/* Points de valeur sur le slider */}
        {steps && steps.length > 0 && (
          <div className="absolute top-full left-0 w-full flex justify-between mt-2 px-2">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className={`text-xs font-semibold ${index === props.value?.[0] ? 'text-app-blue-dark' : 'text-gray-500'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                whileHover={{ scale: 1.2, color: "#1A365D" }}
              >
                {index % 2 === 0 && step}
              </motion.div>
            ))}
          </div>
        )}
      </SliderPrimitive.Root>
      
      {/* Effet de motif */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/40"
            style={{
              left: `${i * 10}%`,
              top: '50%',
              transform: 'translateY(-50%)'
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse",
              delay: i * 0.2
            }}
          />
        ))}
      </div>
    </div>
  </div>
));

MascotSlider.displayName = SliderPrimitive.Root.displayName;

export { MascotSlider };
