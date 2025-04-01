
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-6 w-full overflow-hidden rounded-full bg-secondary/30",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-gradient-to-r from-blue-400 to-app-blue-medium transition-all relative overflow-hidden rounded-full"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    >
      <motion.div 
        className="absolute inset-0 opacity-40"
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
      <motion.div
        className="absolute top-0 left-0 h-full w-full"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
          backgroundSize: "200% 100%"
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute top-0 right-0 bottom-0 w-4 bg-white/20"
        animate={{
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </ProgressPrimitive.Indicator>
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
