import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "professional" | "accent"
}

export function GlassmorphicCard({ children, className, variant = "default" }: GlassmorphicCardProps) {
  const variants = {
    default: "glass-professional",
    professional: "glass-card",
    accent: "glass-professional border-blue-500/30 animate-subtle-glow",
  }

  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl transition-all duration-300", variants[variant], className)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
