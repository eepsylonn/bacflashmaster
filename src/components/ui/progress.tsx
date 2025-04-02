
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  // Ensure value is between 0 and 100
  const safeValue = Math.min(Math.max(value || 0, 0), 100);
  
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-6 w-full overflow-hidden rounded-full bg-gray-200/80",
        className
      )}
      style={{ 
        boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
      }}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-gradient-to-r from-blue-400 to-app-blue-dark transition-all relative overflow-hidden rounded-full"
        style={{ 
          transform: `translateX(-${100 - safeValue}%)`,
          boxShadow: "0 1px 2px rgba(0,120,255,0.3)",
        }}
      >
        {/* iOS-style shine effect */}
        <motion.div 
          className="absolute inset-0 opacity-50"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)",
            width: "50%" 
          }}
          animate={{ 
            x: ["-100%", "200%"], 
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* iOS-style subtle texture */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: "linear-gradient(0deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)",
            backgroundSize: "4px 4px",
            opacity: 0.3
          }}
        />
        
        {/* iOS-style glow effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
            backgroundSize: "50% 100%",
            backgroundPosition: "0% 0%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
