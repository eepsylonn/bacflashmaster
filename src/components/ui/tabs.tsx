
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground relative overflow-hidden",
      className
    )}
    {...props}
  >
    <span className="relative z-10 flex items-center justify-center">
      {props.children}
    </span>
    {props["data-state"] === "active" && (
      <motion.div
        className="absolute inset-0 rounded-sm"
        layoutId={`tab-indicator-${props.value}`}
        transition={{ 
          type: "spring", 
          bounce: 0.5, 
          duration: 0.6 
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" 
        }}
        style={{ 
          position: "absolute",
          zIndex: 0
        }}
      >
        {/* Background gradient animation */}
        <motion.div 
          className="absolute inset-0 rounded-sm overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(96, 165, 250, 0.8), rgba(99, 102, 241, 0.8))",
                "linear-gradient(45deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8))",
                "linear-gradient(45deg, rgba(16, 185, 129, 0.8), rgba(59, 130, 246, 0.8))",
                "linear-gradient(45deg, rgba(96, 165, 250, 0.8), rgba(99, 102, 241, 0.8))"
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Glowing particles */}
          <motion.div
            className="absolute w-1 h-1 rounded-full bg-white opacity-80"
            animate={{
              x: ["0%", "100%", "0%"],
              y: ["0%", "100%", "0%"],
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: "20%", left: "30%" }}
          />
          
          <motion.div
            className="absolute w-1 h-1 rounded-full bg-white opacity-80"
            animate={{
              x: ["100%", "0%", "100%"],
              y: ["100%", "0%", "100%"],
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 3,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: "50%", left: "60%" }}
          />
          
          <motion.div
            className="absolute w-1 h-1 rounded-full bg-white opacity-80"
            animate={{
              x: ["50%", "0%", "50%"],
              y: ["0%", "50%", "0%"],
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 3,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: "70%", left: "20%" }}
          />
          
          {/* Shimmer effect overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            animate={{
              x: ["-100%", "100%"]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1
            }}
          />
          
          {/* Bottom border glow */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              boxShadow: [
                "0 0 2px rgba(255, 255, 255, 0.5)", 
                "0 0 8px rgba(255, 255, 255, 0.8)", 
                "0 0 2px rgba(255, 255, 255, 0.5)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    )}
  </TabsPrimitive.Trigger>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
