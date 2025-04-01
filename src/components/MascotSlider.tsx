
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import Mascot from "@/components/Mascot";

interface MascotSliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  onValueChange: (value: number[]) => void;
  steps?: number[];
  showLabels?: boolean;
}

const MascotSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  MascotSliderProps
>(({ className, steps = [], showLabels = false, ...props }, ref) => (
  <div className="space-y-5">
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
          className="block h-10 w-10 rounded-full border-2 border-app-blue-medium bg-background shadow-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-110"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Mascot size="sm" animation="pulse" />
          </div>
        </SliderPrimitive.Thumb>
      ))}
    </SliderPrimitive.Root>
    
    {showLabels && steps.length > 0 && (
      <div className="relative w-full px-2">
        <div className="flex justify-between w-full absolute -top-4">
          {steps.map((step, index) => (
            <span 
              key={index} 
              className="text-xs text-gray-500 absolute transform -translate-x-1/2"
              style={{ left: `${(index / (steps.length - 1)) * 100}%` }}
            >
              {step}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
));

MascotSlider.displayName = SliderPrimitive.Root.displayName;

export { MascotSlider };
