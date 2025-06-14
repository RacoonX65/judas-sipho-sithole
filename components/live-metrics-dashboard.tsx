"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { Badge } from "@/components/ui/badge"
import { Activity, Globe, Zap, TrendingUp, Database } from "lucide-react"

interface Metric {
  label: string
  value: string
  change: string
  trend: "up" | "down" | "stable"
  icon: React.ReactNode
  color: string
}

export function LiveMetricsDashboard() {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      label: "Portfolio Views",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: <Globe className="h-4 w-4" />,
      color: "text-blue-400",
    },
    {
      label: "Project Uptime",
      value: "99.9%",
      change: "+0.1%",
      trend: "up",
      icon: <Activity className="h-4 w-4" />,
      color: "text-green-400",
    },
    {
      label: "GitHub Commits",
      value: "342",
      change: "+8",
      trend: "up",
      icon: <Database className="h-4 w-4" />,
      color: "text-purple-400",
    },
    {
      label: "Active Projects",
      value: "6",
      change: "+2",
      trend: "up",
      icon: <Zap className="h-4 w-4" />,
      color: "text-orange-400",
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          value:
            metric.label === "Portfolio Views"
              ? (Number.parseInt(metric.value.replace(",", "")) + Math.floor(Math.random() * 5)).toLocaleString()
              : metric.value,
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <GlassmorphicCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-400" />
          <h3 className="text-xl font-bold text-white">Live Metrics</h3>
        </div>
        <Badge className="bg-green-500/20 text-green-100 border-green-500/30">
          <Activity className="h-3 w-3 mr-1 animate-pulse" />
          Real-time
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`${metric.color}`}>{metric.icon}</div>
              <div
                className={`flex items-center gap-1 text-xs ${
                  metric.trend === "up" ? "text-green-400" : metric.trend === "down" ? "text-red-400" : "text-gray-400"
                }`}
              >
                <TrendingUp className={`h-3 w-3 ${metric.trend === "down" ? "rotate-180" : ""}`} />
                {metric.change}
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
            <div className="text-blue-100 text-sm">{metric.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Activity className="h-4 w-4 text-green-400 animate-pulse" />
          <span className="text-green-400 font-medium">System Status</span>
        </div>
        <p className="text-blue-100 text-sm">
          All systems operational. Portfolio and projects running smoothly with excellent performance metrics.
        </p>
      </div>
    </GlassmorphicCard>
  )
}
