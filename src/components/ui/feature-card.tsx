import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";

const featureCardVariants = cva(
  "group transition-all duration-200 active:scale-[0.96] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-md shadow-sm hover:shadow-md hover:-translate-y-1",
  {
    variants: {
      variant: {
        default: "",
        glass: "bg-card/70 border-border/80 shadow-md",
        elevated: "shadow-md hover:shadow-lg bg-card/80",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const iconContainerVariants = cva(
  "grid place-items-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 shadow-md rounded-2xl border border-white/20",
  {
    variants: {
      size: {
        sm: "w-12 h-12",
        default: "w-14 h-14", 
        lg: "w-16 h-16",
      },
      gradient: {
        blue: "bg-gradient-to-br from-blue-500 to-indigo-600 text-white",
        green: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white",
        purple: "bg-gradient-to-br from-purple-500 to-violet-600 text-white",
        orange: "bg-gradient-to-br from-orange-500 to-amber-600 text-white",
        pink: "bg-gradient-to-br from-pink-500 to-rose-600 text-white",
        primary: "bg-gradient-primary text-white",
        secondary: "bg-gradient-secondary text-white",
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
  badge?: React.ReactNode;
  onCardClick?: () => void;
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ 
    className, 
    variant, 
    icon: Icon, 
    title, 
    description, 
    iconSize, 
    iconGradient,
    badge,
    onCardClick,
    ...props 
  }, ref) => {
    return (
      <Card
        className={cn(featureCardVariants({ variant, className }))}
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
        <div className="p-6 text-center flex flex-col items-center justify-between h-full space-y-4">
          <div>
            <div className={cn(iconContainerVariants({ size: iconSize, gradient: iconGradient }))}>
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
          {badge && (
            <div className="mt-4 pt-2">
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
