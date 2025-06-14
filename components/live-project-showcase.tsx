"use client"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

const liveProjects: LiveProject[] = [
  {
    id: "water-monitoring",
    title: "Smart Water Monitoring System",
    description:
      "My flagship IoT project - a comprehensive water quality monitoring system with real-time sensor data, automated alerts, and analytics dashboard. This project demonstrates the perfect fusion of electrical engineering principles with modern software development, showcasing my ability to create solutions that make complex systems accessible and understandable.",
    url: "https://aquesensetechnologies.vercel.app/",
    githubUrl: "https://github.com/yourusername/water-monitoring",
    status: "live",
    technologies: [
      "Next.js",
      "IoT Sensors",
      "Real-time DB",
      "Vercel",
      "TypeScript",
      "Tailwind CSS",
      "Arduino",
      "ESP32",
    ],
    metrics: {
      uptime: "99.9%",
      users: "150+",
      lastUpdate: "2 hours ago",
    },
    features: [
      "Real-time water quality monitoring with pH, turbidity, and temperature sensors",
      "Automated alert system via SMS/Email for critical water quality changes",
      "Historical data analytics with trend visualization and predictive insights",
      "Mobile-responsive dashboard accessible from any device",
      "Data export functionality for compliance and reporting",
      "Multi-sensor integration with calibration and maintenance tracking",
      "IoT device management with remote configuration capabilities",
      "Advanced filtering and data processing algorithms",
    ],
    semester: "First Semester 2024",
    projectType: "Final Year Project - Electrical Engineering",
    category: "iot",
    icon: "🌊",
  },
]

const categoryColors = {
  iot: "from-blue-500 to-blue-600",
}

export function LiveProjectShowcase() {
  const selectedProject = liveProjects[0] // Always show the water monitoring project

  return (
    <div className="space-y-8">
      {/* Project Header - Centered and Prominent */}
      <div className="text-center space-y-4">
        <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 text-lg px-6 py-3">
          <Cpu className="h-5 w-5 mr-2" />
          <span className="font-semibold">Featured IoT Project</span>
        </Badge>

        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-4">
            <span className="text-4xl">{selectedProject.icon}</span>
            {selectedProject.title}
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed text-lg">{selectedProject.description}</p>
        </div>
      </div>

      {/* Project Status and Info */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
          <Calendar className="h-4 w-4 mr-2" />
          {selectedProject.semester}
        </Badge>
        <Badge className="bg-gradient-to-r from-gray-600 to-gray-700 text-white border-0">
          <Award className="h-4 w-4 mr-2" />
          {selectedProject.projectType}
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
                IoT System
              </Badge>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="relative rounded-xl overflow-hidden bg-gray-900" style={{ aspectRatio: "16/10" }}>
                <iframe
                  src={selectedProject.url}
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

                {/* Overlay for interaction hint */}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    className="bg-white/90 text-black hover:bg-white shadow-lg"
                    onClick={() => window.open(selectedProject.url, "_blank")}
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
                Live System Status
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">System Status</span>
                  </div>
                  <span className="text-green-400 font-semibold">Online</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">Active Users</span>
                  </div>
                  <span className="text-blue-400 font-semibold">{selectedProject.metrics.users}</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">System Uptime</span>
                  </div>
                  <span className="text-blue-400 font-semibold">{selectedProject.metrics.uptime}</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-orange-400" />
                    <span className="text-gray-300">Last Update</span>
                  </div>
                  <span className="text-orange-400 font-semibold">{selectedProject.metrics.lastUpdate}</span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center gap-3">
                <Zap className="h-6 w-6 text-blue-400" />
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {selectedProject.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    className="bg-white/10 text-white hover:bg-white/20 border border-white/20 px-3 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-lg border border-blue-500/20">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-blue-400">Engineering Excellence:</strong> This IoT system demonstrates my
                  ability to bridge electrical engineering principles with modern software development, creating
                  solutions that make complex water monitoring systems accessible and user-friendly.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                System Features
              </h4>
              <ul className="space-y-3">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="h-2 w-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/10">
            <Button
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 flex-1 py-3"
              onClick={() => window.open(selectedProject.url, "_blank")}
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Experience Live Demo
            </Button>
            <Button
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 flex-1 py-3"
              onClick={() => window.open(selectedProject.githubUrl, "_blank")}
            >
              <Github className="h-5 w-5 mr-2" />
              View Source Code
            </Button>
            <Button
              variant="outline"
              className="border-blue-400/30 bg-blue-500/10 text-blue-100 hover:bg-blue-500/20 py-3"
            >
              <Award className="h-5 w-5 mr-2" />
              Technical Details
            </Button>
          </div>
        </div>
      </GlassmorphicCard>

      {/* Project Impact Statement */}
      <GlassmorphicCard className="p-8 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-400/30">
        <div className="text-center space-y-6">
          <h4 className="text-2xl font-bold text-white">Project Impact & Engineering Excellence</h4>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed text-lg">
            This flagship IoT project represents the perfect fusion of electrical engineering expertise and modern
            software development. It demonstrates my ability to create real-world solutions that make complex electrical
            systems accessible through intuitive software interfaces, bridging the gap between hardware engineering and
            user experience design.
          </p>
          <div className="flex items-center justify-center gap-8 pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">100%</div>
              <div className="text-gray-400">Operational</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">24/7</div>
              <div className="text-gray-400">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">Real-time</div>
              <div className="text-gray-400">Data Processing</div>
            </div>
          </div>
        </div>
      </GlassmorphicCard>
    </div>
  )
}
