"use client"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Activity, Globe, Smartphone, Monitor, Cpu, Database, Zap } from "lucide-react"

interface CompactProject {
  id: string
  title: string
  description: string
  url: string
  githubUrl: string
  status: "live" | "maintenance" | "development"
  technologies: string[]
  category: "iot" | "web-app" | "mobile-app" | "dashboard" | "api" | "ml-model"
  icon: string
}

const compactProjects: CompactProject[] = [
  {
    id: "issufo-portfolio",
    title: "Issufo Muguambe Portfolio",
    description:
      "Professional portfolio website showcasing creative work and projects with modern design and smooth animations.",
    url: "https://issufo-muguambe.vercel.app/",
    githubUrl: "https://github.com/yourusername/issufo-portfolio", // Update with actual GitHub URL
    status: "live",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    category: "web-app",
    icon: "💼",
  },
]

const categoryIcons = {
  iot: <Cpu className="h-3 w-3" />,
  "web-app": <Globe className="h-3 w-3" />,
  "mobile-app": <Smartphone className="h-3 w-3" />,
  dashboard: <Monitor className="h-3 w-3" />,
  api: <Database className="h-3 w-3" />,
  "ml-model": <Zap className="h-3 w-3" />,
}

const categoryColors = {
  iot: "from-blue-500 to-cyan-400",
  "web-app": "from-green-500 to-emerald-400",
  "mobile-app": "from-purple-500 to-pink-400",
  dashboard: "from-orange-500 to-red-400",
  api: "from-indigo-500 to-blue-400",
  "ml-model": "from-yellow-500 to-orange-400",
}

export function LiveProjectShowcaseCompact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {compactProjects.map((project) => (
        <GlassmorphicCard
          key={project.id}
          className="p-6 hover:border-green-400/50 transition-all duration-300 group h-full"
        >
          <div className="flex flex-col h-full space-y-4">
            {/* Project Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{project.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge
                      className={`bg-gradient-to-r ${categoryColors[project.category]} text-white border-0 text-xs`}
                    >
                      {categoryIcons[project.category]}
                      <span className="ml-1 capitalize">{project.category.replace("-", " ")}</span>
                    </Badge>
                    <div
                      className={`h-2 w-2 rounded-full ${
                        project.status === "live"
                          ? "bg-green-400 animate-pulse"
                          : project.status === "maintenance"
                            ? "bg-yellow-400"
                            : "bg-blue-400"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-blue-100 text-sm leading-relaxed flex-grow">{project.description}</p>

            {/* Live Preview */}
            <div className="relative">
              <div className="absolute -top-2 left-2 z-10">
                <Badge className="bg-green-500/20 text-green-100 border-green-500/30 text-xs">
                  <Activity className="h-2 w-2 mr-1" />
                  Live
                </Badge>
              </div>

              <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                <div className="relative rounded overflow-hidden bg-gray-900" style={{ aspectRatio: "16/9" }}>
                  <iframe
                    src={project.url}
                    className="w-full h-full border-0 scale-75 origin-top-left"
                    title={`${project.title} - Preview`}
                    loading="lazy"
                    style={{
                      width: "133.33%",
                      height: "133.33%",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Overlay for interaction */}
                  <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <Button
                      size="sm"
                      className="bg-white/90 text-black hover:bg-white text-xs"
                      onClick={() => window.open(project.url, "_blank")}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} className="bg-white/10 text-white text-xs border border-white/20">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge className="bg-white/10 text-white text-xs border border-white/20">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <Button
                size="sm"
                className={`bg-gradient-to-r ${categoryColors[project.category]} hover:opacity-90 text-white border-0 flex-1 text-xs`}
                onClick={() => window.open(project.url, "_blank")}
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                Live Demo
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 text-xs"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </GlassmorphicCard>
      ))}
    </div>
  )
}
