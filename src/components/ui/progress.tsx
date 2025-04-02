
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  // S'assurer que la valeur est comprise entre 0 et 100
  const safeValue = Math.min(Math.max(value || 0, 0), 100);
  
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-6 w-full overflow-hidden rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 shadow-inner",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-gradient-to-r from-app-blue-light via-app-blue-medium to-app-blue-dark transition-all relative overflow-hidden rounded-full"
        style={{ transform: `translateX(-${100 - safeValue}%)` }}
      >
        {/* Animation d'éclat principal */}
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
        
        {/* Animation d'éclat secondaire */}
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
        
        {/* Petites bulles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/30"
              style={{
                width: 4 + Math.random() * 6,
                height: 4 + Math.random() * 6,
                left: `${Math.random() * 100}%`,
                bottom: 0,
              }}
              animate={{
                y: [0, -24 * Math.random()],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Reflet en haut */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/30" />
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
