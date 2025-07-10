import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const gradientButtonVariants = cva(
  "relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus-visible shadow-medium hover:shadow-large",
  {
    variants: {
      variant: {
        primary: "bg-gradient-primary hover:shadow-glow text-white",
        secondary: "bg-gradient-secondary hover:shadow-green-400/20 text-white",
        accent: "bg-gradient-accent hover:shadow-purple-400/20 text-white",
        warm: "bg-gradient-warm hover:shadow-orange-400/20 text-white",
      },
      size: {
        default: "px-6 py-3 text-base",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-lg",
        xl: "px-12 py-5 text-xl",
      },
      pulse: {
        true: "animate-pulse-slow",
        false: "",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      pulse: false,
    },
  }
);

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  children: React.ReactNode;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, pulse, children, ...props }, ref) => {
    return (
      <Button
        className={cn(gradientButtonVariants({ variant, size, pulse, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
GradientButton.displayName = "GradientButton";

export { GradientButton, gradientButtonVariants };