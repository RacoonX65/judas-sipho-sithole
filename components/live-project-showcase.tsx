"use client"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useFeaturedProjects } from "@/hooks/use-projects"
import {
  ExternalLink,
  Github,
  Activity,
  Users,
  Database,
  Zap,
  Calendar,
  Award,
  CheckCircle,
  Cpu,
  Clock,
  Loader2,
} from "lucide-react"

interface LiveProject {
  id: string
  title: string
  description: string
  url: string
  githubUrl: string
  status: "live" | "maintenance" | "development"
  technologies: string[]
  metrics: {
    uptime: string
    users: string
    lastUpdate: string
  }
  features: string[]
  semester: string
  projectType: string
  category: "iot" | "web-app" | "mobile-app" | "dashboard" | "api" | "ml-model"
  icon: string
}

const categoryColors = {
  iot: "from-blue-500 to-blue-600",
  "web-app": "from-purple-500 to-purple-600",
  "mobile-app": "from-green-500 to-green-600",
  dashboard: "from-orange-500 to-orange-600",
  api: "from-red-500 to-red-600",
  "ml-model": "from-pink-500 to-pink-600",
}

export function LiveProjectShowcase() {
  const { projects, loading, error } = useFeaturedProjects()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        <p>Error loading projects: {error}</p>
      </div>
    )
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center text-gray-500 p-4">
        <p>No featured projects available</p>
      </div>
    )
  }

  const selectedProject = projects[0] // Show the first featured project

  return (
    <div className="space-y-8">
      {/* Project Header - Centered and Prominent */}
      <div className="text-center space-y-4">
        <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 text-lg px-6 py-3">
          <Cpu className="h-5 w-5 mr-2" />
          <span className="font-semibold">Featured Project</span>
        </Badge>

        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-4">
            {selectedProject.title}
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed text-lg">{selectedProject.description}</p>
        </div>
      </div>

      {/* Project Status and Info */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
          <Calendar className="h-4 w-4 mr-2" />
          {selectedProject.status}
        </Badge>
        <Badge className="bg-gradient-to-r from-gray-600 to-gray-700 text-white border-0">
          <Award className="h-4 w-4 mr-2" />
          {selectedProject.technologies.join(", ")}
        </Badge>
        <Badge className="bg-green-500/20 text-green-100 border-green-500/30">
          <Activity className="h-4 w-4 mr-2 animate-pulse" />
          Live & Running
        </Badge>
      </div>

      {/* Main Project Showcase */}
      <GlassmorphicCard className="p-8 border-2 border-blue-500/30">
        <div className="space-y-8">
          {/* Live Project Embed */}
          <div className="relative">
            <div className="absolute -top-4 left-6 z-10 flex items-center gap-3">
              <Badge className="bg-green-500/20 text-green-100 border-green-500/30">
                <Activity className="h-4 w-4 mr-2" />
                Live Demo
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-100 border-blue-500/30">Interactive Dashboard</Badge>
              <Badge className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-white border-0">
                <Cpu className="h-4 w-4 mr-2" />
                {selectedProject.technologies[0]}
              </Badge>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="relative rounded-xl overflow-hidden bg-gray-900" style={{ aspectRatio: "16/10" }}>
                {selectedProject.live_url && (
                  <iframe
                    src={selectedProject.live_url}
                    className="w-full h-full border-0"
                    title={`${selectedProject.title} - Live Demo`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    style={{
                      minHeight: "600px",
                      transform: "scale(1)",
                      transformOrigin: "top left",
                    }}
                  />
                )}

                {/* Overlay for interaction hint */}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    className="bg-white/90 text-black hover:bg-white shadow-lg"
                    onClick={() => window.open(selectedProject.live_url, "_blank")}
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Open Full Screen
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Live Metrics */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center gap-3">
                <Activity className="h-6 w-6 text-green-400" />
                Project Details
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Status</span>
                  </div>
                  <span className="text-green-400 font-semibold">{selectedProject.status}</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">GitHub</span>
                  </div>
                  <a
                    href={selectedProject.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 font-semibold hover:underline"
                  >
                    View Code
                  </a>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">Technologies</span>
                  </div>
                  <span className="text-blue-400 font-semibold">{selectedProject.technologies.length}</span>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                Key Features
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                    <Zap className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </GlassmorphicCard>
    </div>
  )
}
