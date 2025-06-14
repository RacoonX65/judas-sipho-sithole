"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, Github, Linkedin, Twitter } from "lucide-react"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { FloatingBadge } from "@/components/floating-badge"
import { ParticlesBackground } from "@/components/particles-background"
import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { LiveProjectShowcase } from "@/components/live-project-showcase"
import { LiveProjectShowcaseCompact } from "@/components/live-project-showcase-compact"
import { SkillRadarChart } from "@/components/skill-radar-chart"
import { ProjectTimeline } from "@/components/project-timeline"
import { LiveMetricsDashboard } from "@/components/live-metrics-dashboard"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl + Shift + A for admin access
      if (e.ctrlKey && e.shiftKey && e.key === "A") {
        e.preventDefault()
        console.log("Admin shortcut activated!")
        window.location.href = "/admin/login"
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900">
      <ParticlesBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <FloatingBadge>Final-Year Student • IoT Specialist • Future Engineer</FloatingBadge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Judas Sipho Sithole
                </span>
              </h1>

              <p className="text-xl text-blue-100 md:text-2xl/relaxed max-w-xl">
                Final-year Electrical Engineering student at UJ, graduating 2025. Transforming ideas into intelligent
                systems through innovative IoT solutions, software development, and machine learning.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white border-0"
                >
                  Explore My Work
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10"
                >
                  Download CV
                </Button>
              </div>

              <div className="flex gap-4 pt-4">
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 h-[500px] w-full">
                <div className="absolute -right-4 top-1/4 z-20 animate-float-slow">
                  <GlassmorphicCard className="p-3">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-0">
                      Circuit Design
                    </Badge>
                  </GlassmorphicCard>
                </div>

                <div className="absolute right-1/4 top-0 z-20 animate-float">
                  <GlassmorphicCard className="p-3">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-400 text-white border-0">
                      React/Next.js
                    </Badge>
                  </GlassmorphicCard>
                </div>

                <div className="absolute -left-4 bottom-1/4 z-20 animate-float-slow">
                  <GlassmorphicCard className="p-3">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-400 text-white border-0">
                      ESP32/Arduino
                    </Badge>
                  </GlassmorphicCard>
                </div>

                <div className="absolute left-1/4 bottom-0 z-20 animate-float">
                  <GlassmorphicCard className="p-3">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-400 text-white border-0">
                      MATLAB/Simulink
                    </Badge>
                  </GlassmorphicCard>
                </div>

                <div className="absolute top-1/2 -right-8 z-20 animate-float-slow">
                  <GlassmorphicCard className="p-3">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-400 text-white border-0">
                      Machine Learning
                    </Badge>
                  </GlassmorphicCard>
                </div>

                <div className="absolute top-1/2 -left-8 z-20 animate-float">
                  <GlassmorphicCard className="p-3">
                    <Badge className="bg-gradient-to-r from-indigo-500 to-blue-400 text-white border-0">Flutter</Badge>
                  </GlassmorphicCard>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[400px] w-[400px] relative">
                    <GlassmorphicCard className="h-full w-full rounded-full p-4 border-4 border-white/20">
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-6xl">🤖</span>
                      </div>
                    </GlassmorphicCard>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </section>

      {/* Skills & Metrics Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <FloatingBadge>Skills & Analytics</FloatingBadge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              Technical{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Proficiency
              </span>
            </h2>
            <p className="mx-auto max-w-[800px] text-xl text-blue-100">
              Interactive visualizations of my skills and real-time portfolio metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SkillRadarChart />
            <LiveMetricsDashboard />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <FloatingBadge>My Journey</FloatingBadge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              Academic &{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Project Timeline
              </span>
            </h2>
            <p className="mx-auto max-w-[800px] text-xl text-blue-100">
              Follow my journey from student to engineer, tracking key milestones and achievements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ProjectTimeline />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-3000"></div>
      </section>

      {/* Featured Project - BIG CARD */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <FloatingBadge>Featured Project</FloatingBadge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              My Latest{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Project
              </span>
            </h2>
            <p className="mx-auto max-w-[800px] text-xl text-blue-100">
              Experience my first semester project in action - a fully deployed Smart Water Monitoring System.
            </p>
          </div>

          <LiveProjectShowcase />
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </section>

      {/* Other Projects - SMALL CARDS */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <FloatingBadge>Other Projects</FloatingBadge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              More{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Live Projects
              </span>
            </h2>
            <p className="mx-auto max-w-[800px] text-xl text-blue-100">
              Quick previews of my other deployed applications and systems.
            </p>
          </div>

          <LiveProjectShowcaseCompact />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-3000"></div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <FloatingBadge>Academic Excellence</FloatingBadge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                Exceptional{" "}
                <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                  Results
                </span>{" "}
                For Every Project
              </h2>
              <p className="text-xl text-blue-100">
                Delivering high-quality engineering solutions with a focus on innovation, reliability, and academic
                excellence.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg text-white">Top Quality Engineering Solutions</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg text-white">Commitment to Project Deadlines</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg text-white">Continuous Learning & Innovation</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <GlassmorphicCard className="p-8 hover:border-orange-400/50 transition-all duration-300 group">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-lg text-white mt-2">Completed Projects</div>
              </GlassmorphicCard>

              <GlassmorphicCard className="p-8 hover:border-orange-400/50 transition-all duration-300 group">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                  2025
                </div>
                <div className="text-lg text-white mt-2">Graduation Year</div>
              </GlassmorphicCard>

              <GlassmorphicCard className="p-8 hover:border-orange-400/50 transition-all duration-300 group">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                  4+
                </div>
                <div className="text-lg text-white mt-2">Years of Study</div>
              </GlassmorphicCard>

              <GlassmorphicCard className="p-8 hover:border-orange-400/50 transition-all duration-300 group">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-lg text-white mt-2">Project Success</div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-1000"></div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 overflow-hidden border-t border-white/10">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  // Simple click counter using a data attribute
                  const button = document.querySelector("[data-admin-clicks]") as HTMLButtonElement
                  if (button) {
                    const currentClicks = Number.parseInt(button.dataset.adminClicks || "0") + 1
                    button.dataset.adminClicks = currentClicks.toString()

                    // Visual feedback
                    button.style.transform = `scale(${1 + currentClicks * 0.1})`
                    button.style.boxShadow = `0 0 ${currentClicks * 10}px rgba(255, 255, 255, 0.5)`

                    console.log(`Admin clicks: ${currentClicks}/3`)

                    if (currentClicks >= 3) {
                      console.log("Redirecting to admin...")
                      window.location.href = "/admin/login"
                    }

                    // Reset after 2 seconds
                    setTimeout(() => {
                      button.dataset.adminClicks = "0"
                      button.style.transform = "scale(1)"
                      button.style.boxShadow = "none"
                    }, 2000)
                  }
                }}
                data-admin-clicks="0"
                className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center hover:opacity-80 transition-all duration-200"
                title="Click 3 times quickly for admin access"
              >
                <span className="text-lg font-bold text-white">JS</span>
              </button>
              <span className="text-xl font-bold text-white">Judas Sipho Sithole</span>
            </div>
            <nav className="flex flex-wrap gap-6">
              <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/projects" className="text-blue-100 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex gap-4">
              <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-blue-100">© {new Date().getFullYear()} Judas Sipho Sithole. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
