"use client"

import type React from "react"
import { Badge } from "@/components/ui/badge"
import { GlassmorphicCard } from "@/components/ui/glassmorphic-card"
import { CheckCircle, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const IoTDashboard: React.FC = () => {
  return (
    <div>
      {/* Live Project Showcase */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 mb-4">
            🚀 LIVE PROJECT
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Smart Water Monitoring System
            <span className="ml-3 inline-flex items-center">
              <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="ml-2 text-green-400 text-lg">Live & Running</span>
            </span>
          </h3>
          <p className="text-blue-100 max-w-3xl mx-auto">
            My latest IoT project deployed on Vercel - a real-time water quality monitoring system with live sensor
            data, automated alerts, and comprehensive analytics dashboard.
          </p>
        </div>

        <GlassmorphicCard className="p-6 border-2 border-green-400/30">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Live Project Embed */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -top-3 left-4 z-10">
                  <Badge className="bg-green-500/20 text-green-100 border-green-500/30">Live Demo</Badge>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="aspect-video rounded-lg overflow-hidden bg-gray-900">
                    <iframe
                      src="https://your-water-monitoring-project.vercel.app"
                      className="w-full h-full border-0"
                      title="Smart Water Monitoring System - Live Demo"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Project Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Deployment</span>
                    <Badge className="bg-green-500/20 text-green-100">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Last Updated</span>
                    <span className="text-white text-sm">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Uptime</span>
                    <span className="text-green-400 text-sm">99.9%</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500/20 text-blue-100">Next.js</Badge>
                  <Badge className="bg-purple-500/20 text-purple-100">IoT Sensors</Badge>
                  <Badge className="bg-orange-500/20 text-orange-100">Real-time DB</Badge>
                  <Badge className="bg-green-500/20 text-green-100">Vercel</Badge>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-3">Key Features</h4>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Real-time water quality monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Automated alert system
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Historical data analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Mobile-responsive dashboard
                  </li>
                </ul>
              </div>

              <div className="flex gap-3">
                <Button
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white border-0 flex-1"
                  onClick={() => window.open("https://your-water-monitoring-project.vercel.app", "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                  onClick={() => window.open("https://github.com/yourusername/water-monitoring", "_blank")}
                >
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </GlassmorphicCard>
      </div>
    </div>
  )
}

export default IoTDashboard
