"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FloatingBadgeProps {
  children: ReactNode
}

export function FloatingBadge({ children }: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-block rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20 backdrop-blur-md px-4 py-2 text-sm font-medium text-white border border-white/20"
    >
      {children}
    </motion.div>
  )
}
