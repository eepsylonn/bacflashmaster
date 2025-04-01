
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import Mascot from "@/components/Mascot";

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
    <div className="text-center bg-app-blue-light/20 rounded-full py-1 px-4 font-semibold text-app-blue-dark text-lg mb-4 shadow-sm">
      {currentValue} questions
    </div>
    
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 flex items-center justify-center"> {/* Increased size from w-14 h-14 */}
              <Mascot size="lg" animation="pulse" /> {/* Changed from md to lg */}
            </div>
          </div>
        </SliderPrimitive.Thumb>
      ))}
    </SliderPrimitive.Root>
  </div>
));

MascotSlider.displayName = SliderPrimitive.Root.displayName;

export { MascotSlider };
