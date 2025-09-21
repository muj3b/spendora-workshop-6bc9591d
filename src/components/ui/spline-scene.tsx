'use client'

import { Suspense, lazy, useState, useEffect, useRef } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  followMouse?: boolean
}

export function SplineScene({ scene, className, followMouse = false }: SplineSceneProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    if (!followMouse || isMobile) {
      window.removeEventListener('resize', checkMobile)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && !isMobile) {
        const rect = containerRef.current.getBoundingClientRect()
        // More subtle mouse following for the robot's head
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 0.5 // Reduced intensity
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 0.3 // Reduced intensity
        setMousePosition({ x: x * 15, y: y * 10 }) // Adjusted multipliers for head movement
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkMobile)
    }
  }, [followMouse, isMobile])

  const onLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{
        transform: followMouse && !isMobile ? 
          `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)` : 
          undefined,
        transition: followMouse && !isMobile ? 'transform 0.15s ease-out' : undefined,
        transformStyle: 'preserve-3d'
      }}
    >
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50/10 to-purple-50/10 dark:from-gray-800/10 dark:to-gray-900/10 rounded-lg">
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-b-2 border-primary mx-auto"></div>
              <p className="text-xs md:text-sm text-muted-foreground">Loading 3D robot...</p>
            </div>
          </div>
        }
      >
        <Spline
          scene={scene}
          onLoad={onLoad}
          className="w-full h-full"
          style={{ 
            opacity: isLoaded ? 1 : 0, 
            transition: 'opacity 0.8s ease-in',
            // Performance optimizations for mobile
            ...(isMobile && {
              filter: 'brightness(0.9)'
            })
          }}
        />
      </Suspense>
    </div>
  )
}