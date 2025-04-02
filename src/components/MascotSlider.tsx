
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
      className="text-center bg-app-blue-light/20 rounded-full py-1 px-6 font-semibold text-app-blue-dark text-lg mb-4 shadow-md relative overflow-hidden"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.span 
        className="absolute inset-0 bg-gradient-to-r from-app-blue-light/0 via-app-blue-light/20 to-app-blue-light/0"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      <span>{currentValue} questions</span>
    </motion.div>
    
    <div className="relative">
      <motion.div 
        className="absolute -top-1 left-0 right-0 h-6 bg-gradient-to-b from-app-blue-light/10 to-transparent rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
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
          <motion.div 
            className="absolute h-full bg-gradient-to-r from-app-blue-light to-app-blue-dark"
            style={{ width: `${(props.value && props.value[0] || 0) / (props.max || 100) * 100}%` }}
            initial={{ width: '0%' }}
            animate={{ width: `${(props.value && props.value[0] || 0) / (props.max || 100) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </SliderPrimitive.Track>
        
        {props.value?.map((_, i) => (
          <SliderPrimitive.Thumb
            key={i}
            className="block h-10 w-10 rounded-full bg-transparent shadow-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 hover:scale-110"
          >
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-16 h-16 flex items-center justify-center"
                initial={{ rotate: -10 }}
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
              >
                <Mascot size="lg" animation="float" />
              </motion.div>
            </motion.div>
          </SliderPrimitive.Thumb>
        ))}
      </SliderPrimitive.Root>

      {steps && steps.length > 0 && (
        <div className="flex justify-between mt-2 px-2">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              className={`text-xs px-1 py-0.5 rounded ${step <= (props.value?.[0] || 0) ? 'text-app-blue-dark font-medium' : 'text-gray-500'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              {step}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  </div>
));

MascotSlider.displayName = SliderPrimitive.Root.displayName;

export { MascotSlider };
