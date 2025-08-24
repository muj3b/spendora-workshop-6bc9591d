import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";

const featureCardVariants = cva(
  "group transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:shadow-large cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-card border-border hover:shadow-medium",
        glass: "glass hover:glass-strong",
        elevated: "shadow-soft hover:shadow-medium bg-card",
      },
      animation: {
        none: "",
        "fade-in": "animate-smooth-fade-in",
        "slide-up": "animate-slide-up",
        "dynamic-pop": "animate-dynamic-island-pop",
      }
    },
    defaultVariants: {
      variant: "default",
      animation: "dynamic-pop",
    },
  }
);

const iconContainerVariants = cva(
  "flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-soft",
  {
    variants: {
      size: {
        sm: "w-12 h-12",
        default: "w-16 h-16", 
        lg: "w-20 h-20",
      },
      gradient: {
        blue: "bg-gradient-to-br from-blue-500 to-blue-600",
        green: "bg-gradient-to-br from-green-500 to-green-600",
        purple: "bg-gradient-to-br from-purple-500 to-purple-600",
        orange: "bg-gradient-to-br from-orange-500 to-orange-600",
        pink: "bg-gradient-to-br from-pink-500 to-pink-600",
        primary: "bg-gradient-primary",
        secondary: "bg-gradient-secondary",
      }
    },
    defaultVariants: {
      size: "default",
      gradient: "primary",
    },
  }
);

export interface FeatureCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featureCardVariants> {
  icon: LucideIcon;
  title: string;
  description: string;
  iconSize?: VariantProps<typeof iconContainerVariants>['size'];
  iconGradient?: VariantProps<typeof iconContainerVariants>['gradient'];
  animationDelay?: string;
  badge?: React.ReactNode;
  onCardClick?: () => void;
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ 
    className, 
    variant, 
    animation, 
    icon: Icon, 
    title, 
    description, 
    iconSize, 
    iconGradient,
    animationDelay,
    badge,
    onCardClick,
    ...props 
  }, ref) => {
    return (
      <Card
        className={cn(featureCardVariants({ variant, animation, className }))}
        style={{ animationDelay: animationDelay || '0s' }}
        onClick={onCardClick}
        ref={ref}
        role={onCardClick ? "button" : undefined}
        tabIndex={onCardClick ? 0 : undefined}
        onKeyDown={onCardClick ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onCardClick();
          }
        } : undefined}
        aria-label={onCardClick ? `Click to learn more about ${title}` : undefined}
        {...props}
      >
        <div className="p-6 text-center">
          <div className={cn(iconContainerVariants({ size: iconSize, gradient: iconGradient }), "rounded-2xl")}>
            <Icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
          {badge && (
            <div className="flex items-center justify-center">
              {badge}
            </div>
          )}
        </div>
      </Card>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

export { FeatureCard, featureCardVariants };