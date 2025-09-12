import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-3xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-medium hover:shadow-large hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-medium hover:shadow-large hover:scale-105",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-soft hover:shadow-medium hover:scale-105",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-soft hover:shadow-medium hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline hover:scale-105",
        liquid: "liquid-glass-btn",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-3xl px-3",
        lg: "h-11 rounded-3xl px-8",
        icon: "h-10 w-10 rounded-3xl",
      },
    },
    defaultVariants: {
      variant: "liquid",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot : "button"

    // Interactive Liquid Glass pointer/tilt effects
    const internalRef = React.useRef<HTMLButtonElement | null>(null)

    const setRef = React.useCallback((node: HTMLButtonElement | null) => {
      internalRef.current = node
      if (typeof forwardedRef === "function") {
        forwardedRef(node)
      } else if (forwardedRef) {
        ;(forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = node
      }
    }, [forwardedRef])

    const updateGlow = React.useCallback((x: number, y: number, target?: HTMLElement) => {
      const el = (target as HTMLElement) ?? (internalRef.current as HTMLElement | null)
      if (!el) return
      const rect = el.getBoundingClientRect()
      const px = Math.max(0, Math.min(1, (x - rect.left) / rect.width))
      const py = Math.max(0, Math.min(1, (y - rect.top) / rect.height))
      el.style.setProperty("--gx", `${px * 100}%`)
      el.style.setProperty("--gy", `${py * 100}%`)
    }, [])

    const onMouseMove = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
      updateGlow(e.clientX, e.clientY, e.currentTarget as HTMLElement)
    }, [updateGlow])

    const onTouchMove = React.useCallback((e: React.TouchEvent<HTMLElement>) => {
      const t = e.touches[0]
      if (!t) return
      updateGlow(t.clientX, t.clientY, e.currentTarget as HTMLElement)
    }, [updateGlow])

    const onLeave = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
      const el = (e.currentTarget as HTMLElement) ?? internalRef.current
      if (!el) return
      el.style.setProperty("--gx", `50%`)
      el.style.setProperty("--gy", `50%`)
    }, [])

    React.useEffect(() => {
      if (variant !== "liquid") return
      const handler = (ev: DeviceOrientationEvent) => {
        const el = internalRef.current
        if (!el) return
        const tiltX = (ev.gamma ?? 0) / 45
        const tiltY = (ev.beta ?? 0) / 90
        el.style.setProperty("--gx", `${(0.5 + tiltX * 0.1) * 100}%`)
        el.style.setProperty("--gy", `${(0.5 + tiltY * 0.1) * 100}%`)
      }
      window.addEventListener("deviceorientation", handler)
      return () => window.removeEventListener("deviceorientation", handler)
    }, [variant])

    const interactionProps = variant === "liquid" ? { onMouseMove, onMouseLeave: onLeave, onTouchMove } : {}

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={setRef}
        {...interactionProps}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
