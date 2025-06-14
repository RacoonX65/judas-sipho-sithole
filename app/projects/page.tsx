"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ParticlesBackground } from "@/components/particles-background"
import { Navbar } from "@/components/navbar"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { FloatingBadge } from "@/components/floating-badge"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight, Eye, Github, ExternalLink, Award, GraduationCap, Zap, Clock } from "lucide-react"
import Link from "next/link"

// Judas Sipho Sithole's actual projects - Final Year Student at UJ
const projects = [
  {
    id: 0,
    title: "Solar Panel Tracking System",
    subtitle: "First IoT Project - University of Johannesburg",
    description:
      "My very first IoT project that sparked my passion for smart systems! Built an automated solar panel tracking system that follows the sun's movement throughout the day to maximize energy efficiency.",
    longDescription:
      "This was my introduction to the world of IoT and what made me fall in love with combining hardware and software. I designed and built a solar tracking system using servo motors, light sensors, and microcontrollers. The system automatically adjusts the solar panel's position to follow the sun's path, increasing energy collection efficiency by up to 30%. It was challenging as my first real IoT project, but seeing the panel move and track the sun automatically was absolutely magical!",
    category: "University Project",
    type: "IoT System",
    year: "2023",
    duration: "3 months",
    technologies: ["Arduino", "Servo Motors", "LDR Sensors", "Solar Panels", "C++", "3D Printing"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    achievements: [
      "My first successful IoT project",
      "Increased solar efficiency by 30%",
      "Learned servo motor control and sensor integration",
      "Successfully implemented sun-tracking algorithm",
    ],
    challenges: [
      "First time working with servo motors",
      "Learning sensor calibration from scratch",
      "Dealing with weather-resistant housing",
      "Debugging mechanical and electrical issues simultaneously",
    ],
    personalNote:
      "This project changed everything for me! Seeing the solar panel automatically follow the sun was the moment I knew I wanted to work with IoT systems. It was my first taste of making hardware 'smart'.",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    status: "Completed",
    impact: "Sparked my passion for IoT development, led to more advanced projects",
  },
  {
    id: 1,
    title: "Smart Campus Greenhouse Monitoring System",
    subtitle: "Final Year Project (In Progress) - University of Johannesburg",
    description:
      "My second major IoT project and current final year project that's defining my engineering journey. Building a comprehensive IoT environmental monitoring system for the UJ campus greenhouse using ESP32, multiple sensors, and cloud integration.",
    longDescription:
      "This is my ongoing final year project at the University of Johannesburg and my second major IoT system after my solar tracking project. I'm designing and implementing a smart monitoring system that tracks temperature, humidity, soil moisture, and light levels in real-time. The system will automatically water plants when needed and send alerts to the groundskeeping staff. I'm currently in the implementation phase and it's been an incredible learning experience combining hardware, software, and cloud technologies.",
    category: "University Project",
    type: "IoT System",
    year: "2024",
    duration: "8 months (ongoing)",
    technologies: ["ESP32", "DHT22", "Soil Sensors", "AWS IoT Core", "React", "Node.js", "MQTT", "Python"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    achievements: [
      "Successfully integrated 5 different sensor types",
      "Achieved 95% data accuracy in testing",
      "Built responsive web dashboard",
      "Implemented real-time MQTT communication",
    ],
    challenges: [
      "Learning cloud integration while studying",
      "Balancing project work with other courses",
      "Debugging sensor calibration issues",
      "Managing power consumption for outdoor deployment",
    ],
    personalNote:
      "This project is teaching me that engineering isn't just about circuits - it's about solving real problems. Every bug I fix feels like a small victory!",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    status: "In Progress",
    impact: "Expected to be deployed at UJ campus upon completion",
  },
  {
    id: 2,
    title: "University Lab Equipment Tracker",
    subtitle: "Completed Project - UJ Electrical Engineering Lab",
    description:
      "My first major project that actually helped fellow students! Created an RFID-based system to track lab equipment usage and availability, solving the constant problem of missing components.",
    longDescription:
      "During my third year, I noticed how much time students and staff wasted looking for lab equipment. I proposed and built an RFID tracking system that monitors when equipment is taken and returned. The system includes a web dashboard showing real-time availability and usage statistics. It was my first project that had real impact on campus life, and seeing my fellow students benefit from it was incredibly rewarding.",
    category: "University Project",
    type: "RFID System",
    year: "2023",
    duration: "4 months",
    technologies: ["RFID", "Arduino", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    achievements: [
      "Reduced equipment search time by 80%",
      "Successfully tracking 200+ lab components",
      "Adopted by 2 different engineering labs",
      "Featured in UJ student newsletter",
    ],
    challenges: [
      "Convincing lab staff to try new system",
      "Dealing with RFID interference from equipment",
      "Creating interfaces that non-tech users could understand",
      "Managing database performance with multiple users",
    ],
    personalNote:
      "This was my first project that actually helped my fellow students - seeing their relief when they could quickly find equipment was amazing!",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    status: "Completed",
    impact: "Still in active use at UJ labs, improved lab efficiency for 100+ students",
  },
  {
    id: 3,
    title: "EduConnect - Student Management Platform",
    subtitle: "Freelance Full-Stack Project",
    description:
      "A comprehensive student management system I built for a local tutoring center while studying. My first real client project that taught me about building software for actual users with real needs.",
    longDescription:
      "When a local tutoring center approached me about digitizing their operations, I saw it as a perfect opportunity to apply my full-stack development skills while earning some money as a student. I built EduConnect from the ground up using modern web technologies. The platform handles student enrollment, attendance tracking, grade management, parent communication, and payment processing. Working with real users while balancing my studies taught me so much about software development and client management.",
    category: "Freelance Project",
    type: "Full-Stack Web App",
    year: "2024",
    duration: "4 months",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Stripe API", "JWT", "Material-UI"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    achievements: [
      "First paid software project as a student",
      "Reduced administrative work by 60%",
      "Serving 80+ students and 60+ parents",
      "Integrated secure payment processing",
    ],
    challenges: [
      "Managing client expectations while studying",
      "Learning payment integration from scratch",
      "Designing for non-technical users",
      "Balancing project deadlines with exam periods",
    ],
    personalNote:
      "My first real client project! Getting paid for code I wrote felt incredible, and seeing teachers focus on teaching instead of paperwork made it all worthwhile.",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    status: "Deployed",
    impact: "Active daily use by tutoring center, improved efficiency and parent satisfaction",
  },
  {
    id: 4,
    title: "TaskFlow - Personal Productivity Suite",
    subtitle: "Personal Full-Stack Project",
    description:
      "A productivity application I built to manage my own engineering studies and projects. Born out of frustration with existing tools that didn't fit my workflow as an engineering student.",
    longDescription:
      "As an engineering student juggling multiple projects, assignments, and part-time work, I was frustrated with existing productivity tools. So I built TaskFlow - a productivity suite tailored for technical students. It features project management with Gantt charts, time tracking with detailed analytics, integration with GitHub for coding projects, and study session planning. I've been using it daily for over a year, and it's helped me stay organized through my toughest semesters.",
    category: "Personal Project",
    type: "Full-Stack Web App",
    year: "2023",
    duration: "3 months",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel", "GitHub API"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    achievements: [
      "Improved my personal productivity by 40%",
      "Tracked over 500 hours of study time",
      "Integrated with GitHub for project tracking",
      "Shared with 20+ fellow engineering students",
    ],
    challenges: [
      "Designing an interface that actually helps productivity",
      "Learning TypeScript while building",
      "Implementing complex data relationships",
      "Creating meaningful analytics from time tracking data",
    ],
    personalNote:
      "Building a tool I use every day taught me the importance of user-centered design, even when you are the user! My grades improved after I started using this.",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    status: "Active",
    impact: "Daily personal use, shared with fellow UJ students, improved academic performance",
  },
  {
    id: 5,
    title: "LocalBiz Directory - Community Platform",
    subtitle: "Personal Full-Stack Project",
    description:
      "A web platform connecting local businesses in Johannesburg with customers. Built during lockdown to help local businesses in my community establish an online presence.",
    longDescription:
      "During the pandemic, I noticed many local businesses in my Johannesburg community struggling to reach customers online. As a student with time and skills, I decided to help by building LocalBiz Directory. The platform includes business listings with photos and contact information, customer reviews and ratings, community event listings, and discussion forums. It's been a great way to give back to my community while practicing my full-stack development skills.",
    category: "Personal Project",
    type: "Full-Stack Web App",
    year: "2023",
    duration: "5 months",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Cloudinary", "Google Maps API", "Socket.io"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    achievements: [
      "150+ registered local businesses",
      "2,000+ monthly active users",
      "Helped local businesses during pandemic",
      "Featured in local community WhatsApp groups",
    ],
    challenges: [
      "Building trust in a new platform",
      "Learning location-based search implementation",
      "Managing user-generated content as a student",
      "Balancing development time with studies",
    ],
    personalNote:
      "Seeing my neighborhood businesses get online customers during tough times reminded me why I love building technology that helps people.",
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
    status: "Active",
    impact: "Supporting local Johannesburg economy, connecting businesses with customers",
  },
  {
    id: 6,
    title: "CodeMentor - Peer Learning Platform",
    subtitle: "University Full-Stack Project",
    description:
      "A peer-to-peer learning platform I built for UJ engineering students to share knowledge, collaborate on projects, and help each other with assignments.",
    longDescription:
      "Recognizing the challenges engineering students face in finding study partners and getting help with difficult concepts, I developed CodeMentor during my third year at UJ. The platform allows students to create study groups, share resources, get help with assignments, and connect with senior students for mentorship. It features real-time collaboration tools, code sharing capabilities, and a reputation system to encourage quality contributions. Building this while being a student myself gave me unique insights into what students actually need.",
    category: "University Project",
    type: "Full-Stack Web App",
    year: "2023",
    duration: "4 months",
    technologies: ["Vue.js", "Firebase", "Node.js", "WebRTC", "Monaco Editor", "PWA"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    achievements: [
      "200+ active UJ engineering students",
      "Facilitated 500+ study sessions",
      "85% user satisfaction in student survey",
      "Recognized by UJ Computer Science Department",
    ],
    challenges: [
      "Implementing real-time collaboration features",
      "Creating effective student matching algorithms",
      "Ensuring platform safety and appropriate content",
      "Building engagement while everyone is busy studying",
    ],
    personalNote:
      "Helping my fellow students succeed academically was incredibly rewarding - we're all in this together! Some of my best friendships started through study sessions on this platform.",
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
    status: "Active",
    impact: "Ongoing use by UJ students, improved academic collaboration and success rates",
  },
  {
    id: 7,
    title: "Personal Portfolio Website",
    subtitle: "Full-Stack Personal Project",
    description:
      "My personal portfolio website built with modern web technologies to showcase my projects and skills as I prepare for graduation and job applications.",
    longDescription:
      "As I approach graduation, I realized I needed a professional way to showcase my work to potential employers. I built this portfolio website using Next.js and modern web technologies, featuring project galleries, a personal blog, and interactive demonstrations of my IoT work. The site includes glassmorphic design elements, smooth animations, and responsive layouts. Building my own portfolio taught me a lot about personal branding and presenting technical work to different audiences.",
    category: "Personal Project",
    type: "Full-Stack Web App",
    year: "2024",
    duration: "2 months",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Vercel"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    achievements: [
      "Modern, responsive design with animations",
      "Interactive 3D elements and IoT demos",
      "Personal blog with technical articles",
      "Optimized for job application purposes",
    ],
    challenges: [
      "Learning advanced CSS animations and 3D graphics",
      "Balancing technical depth with accessibility",
      "Creating engaging content while studying",
      "Optimizing performance for smooth interactions",
    ],
    personalNote:
      "Building my own portfolio made me realize how much I've learned and grown as an engineer. It's exciting to see all my projects in one place!",
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
    status: "Active",
    impact: "Professional showcase for job applications and networking",
  },
  {
    id: 8,
    title: "Study Buddy - Course Management App",
    subtitle: "Personal Full-Stack Project",
    description:
      "A course management application I built to help me and my classmates organize assignments, track deadlines, and share study materials for our engineering courses.",
    longDescription:
      "Managing multiple engineering courses with different assignment deadlines, project milestones, and exam dates was becoming overwhelming. I built Study Buddy to help me and my classmates stay organized. The app features course scheduling, assignment tracking with deadline reminders, file sharing for study materials, and group study session planning. It integrates with our university's academic calendar and sends smart notifications. Several of my classmates now use it to stay on top of their coursework.",
    category: "Personal Project",
    type: "Full-Stack Web App",
    year: "2024",
    duration: "2 months",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "PWA", "Push Notifications"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    achievements: [
      "Used by 30+ engineering students at UJ",
      "Reduced missed assignment deadlines by 90%",
      "Facilitated 50+ group study sessions",
      "Integrated with UJ academic calendar",
    ],
    challenges: [
      "Designing intuitive course organization",
      "Implementing smart notification systems",
      "Handling file uploads and sharing securely",
      "Making it work offline for library study sessions",
    ],
    personalNote:
      "This app literally saved my academic life! No more missed deadlines or forgotten assignments. My stress levels dropped significantly after building this.",
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
    status: "Active",
    impact: "Daily use by UJ engineering students, improved academic organization and performance",
  },
]

const categories = ["All", "University Project", "Personal Project", "Freelance Project"]
const types = ["All", "IoT System", "RFID System", "Full-Stack Web App", "Software Engineering"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedType, setSelectedType] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesType = selectedType === "All" || project.type === selectedType
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesType && matchesSearch
  })

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900">
      <ParticlesBackground />
      <Navbar />

      {/* Personal Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <FloatingBadge>Project Gallery</FloatingBadge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mt-6">
              My Engineering{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 leading-relaxed">
              Welcome to my project gallery! I'm currently in my final year at the University of Johannesburg, and these
              are the real projects I've built during my studies. From my first RFID system to my ongoing final year
              project, each one has taught me something new about engineering and software development.
            </p>
            <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 max-w-3xl mx-auto">
              <p className="text-blue-100 italic">
                "As a final year student, every project here represents late nights in the lab, debugging sessions with
                classmates, and the incredible feeling of seeing your code come to life. These aren't just assignments -
                they're stepping stones to my engineering career."
              </p>
              <p className="text-orange-400 font-medium mt-2">- Judas Sipho Sithole, Final Year BEng Tech Student</p>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </section>

      {/* Filter Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <GlassmorphicCard className="p-6 border-2 border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Explore My Student Projects</h3>
                <p className="text-blue-100">From university assignments to freelance work and personal experiments</p>
              </div>

              <div className="space-y-6">
                {/* Search */}
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-100 h-5 w-5" />
                  <Input
                    placeholder="Search my projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-100 focus:border-orange-400"
                  />
                </div>

                {/* Category Filters */}
                <div className="flex flex-col gap-4">
                  <div className="text-center">
                    <p className="text-white font-medium mb-2">Project Category</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(category)}
                          className={
                            selectedCategory === category
                              ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white border-0"
                              : "border-white/20 bg-white/5 text-white hover:bg-white/10"
                          }
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-white font-medium mb-2">Project Type</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {types.map((type) => (
                        <Button
                          key={type}
                          variant={selectedType === type ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedType(type)}
                          className={
                            selectedType === type
                              ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0"
                              : "border-white/20 bg-white/5 text-white hover:bg-white/10"
                          }
                        >
                          {type}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlassmorphicCard>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-12 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <FloatingBadge>Featured Work</FloatingBadge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mt-6">
              My Key{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              The projects that have shaped my learning and prepared me for my engineering career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassmorphicCard
                  className="overflow-hidden h-full hover:border-orange-400/50 transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent z-10"></div>
                    <img
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-gradient-to-r from-orange-500 to-pink-600 text-white border-0">
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 z-20">
                      <Badge className="bg-blue-500/20 backdrop-blur-md text-blue-100 border-blue-500/30">
                        {project.year}
                      </Badge>
                    </div>
                    {project.status === "In Progress" && (
                      <div className="absolute bottom-4 right-4 z-20">
                        <Badge className="bg-yellow-500/20 backdrop-blur-md text-yellow-100 border-yellow-500/30 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          In Progress
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {project.category === "University Project" && <GraduationCap className="h-4 w-4 text-blue-400" />}
                      {project.category === "Personal Project" && <Zap className="h-4 w-4 text-orange-400" />}
                      {project.category === "Freelance Project" && <Award className="h-4 w-4 text-green-400" />}
                      <span className="text-sm text-blue-100">{project.subtitle}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-blue-100 mb-4 line-clamp-3">{project.description}</p>

                    {/* Personal Note */}
                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 mb-4">
                      <p className="text-orange-200 text-sm italic">💭 "{project.personalNote}"</p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} className="bg-white/10 text-white hover:bg-white/20 text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge className="bg-white/10 text-white text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Status and Links */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            project.status === "Active"
                              ? "bg-green-400"
                              : project.status === "In Progress"
                                ? "bg-yellow-400"
                                : project.status === "Deployed"
                                  ? "bg-blue-400"
                                  : "bg-gray-400"
                          }`}
                        ></div>
                        <span className="text-sm text-blue-100">{project.status}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <Button variant="ghost" size="sm" className="text-white hover:text-orange-400 p-1">
                            <Github className="h-4 w-4" />
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button variant="ghost" size="sm" className="text-white hover:text-orange-400 p-1">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300 p-1">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </section>

      {/* All Projects Grid */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
              All My{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} from my university journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassmorphicCard
                  className="overflow-hidden h-full hover:border-orange-400/50 transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent z-10"></div>
                    <img
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20">{project.type}</Badge>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-20">
                        <Badge
                          className="bg-gradient-to-r from-orange-500 to-pink-600 text-white border-0
                        "
                        >
                          Featured
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 z-20">
                      <Badge className="bg-blue-500/20 backdrop-blur-md text-blue-100 border-blue-500/30">
                        {project.year}
                      </Badge>
                    </div>
                    {project.status === "In Progress" && (
                      <div className="absolute bottom-4 right-4 z-20">
                        <Badge className="bg-yellow-500/20 backdrop-blur-md text-yellow-100 border-yellow-500/30 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          In Progress
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {project.category === "University Project" && <GraduationCap className="h-4 w-4 text-blue-400" />}
                      {project.category === "Personal Project" && <Zap className="h-4 w-4 text-orange-400" />}
                      {project.category === "Freelance Project" && <Award className="h-4 w-4 text-green-400" />}
                      <span className="text-sm text-blue-100">{project.category}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-100 mb-4 line-clamp-3 text-sm">{project.description}</p>

                    {/* Compact Personal Note */}
                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-2 mb-4">
                      <p className="text-orange-200 text-xs italic line-clamp-2">💭 {project.personalNote}</p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <Badge key={tech} className="bg-white/10 text-white hover:bg-white/20 text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 2 && (
                        <Badge className="bg-white/10 text-white text-xs">+{project.technologies.length - 2}</Badge>
                      )}
                    </div>

                    {/* Status and Action */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            project.status === "Active"
                              ? "bg-green-400"
                              : project.status === "In Progress"
                                ? "bg-yellow-400"
                                : project.status === "Deployed"
                                  ? "bg-blue-400"
                                  : "bg-gray-400"
                          }`}
                        ></div>
                        <span className="text-xs text-blue-100">{project.status}</span>
                      </div>

                      <div className="text-orange-400 group-hover:text-orange-300 transition-colors flex items-center gap-1 text-sm">
                        <span>View Details</span>
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center py-12"
            >
              <GlassmorphicCard className="p-12 max-w-md mx-auto">
                <h3 className="text-xl font-bold text-white mb-4">No Projects Found</h3>
                <p className="text-blue-100 mb-6">
                  I haven't built anything in that category yet, but I'm always working on new projects as I learn!
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                    setSelectedType("All")
                  }}
                  className="bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white border-0"
                >
                  Show All Projects
                </Button>
              </GlassmorphicCard>
            </motion.div>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <GlassmorphicCard className="p-8 border-2 border-white/20">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {selectedProject.category === "University Project" && (
                      <GraduationCap className="h-5 w-5 text-blue-400" />
                    )}
                    {selectedProject.category === "Personal Project" && <Zap className="h-5 w-5 text-orange-400" />}
                    {selectedProject.category === "Freelance Project" && <Award className="h-5 w-5 text-green-400" />}
                    <Badge className="bg-white/10 text-white">{selectedProject.category}</Badge>
                    <Badge className="bg-blue-500/20 text-blue-100">{selectedProject.year}</Badge>
                    {selectedProject.status === "In Progress" && (
                      <Badge className="bg-yellow-500/20 text-yellow-100 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        In Progress
                      </Badge>
                    )}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <p className="text-orange-400 font-medium">{selectedProject.subtitle}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                  className="text-white hover:text-orange-400"
                >
                  ✕
                </Button>
              </div>

              {/* Project Images */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {selectedProject.images.slice(0, 4).map((image: string, index: number) => (
                  <div key={index} className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Project Overview</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">{selectedProject.longDescription}</p>

                  {/* Personal Note */}
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-6">
                    <h4 className="text-orange-400 font-medium mb-2">Student Reflection</h4>
                    <p className="text-orange-200 italic">"{selectedProject.personalNote}"</p>
                  </div>

                  {/* Impact */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-3">Impact & Current Status</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className={`h-3 w-3 rounded-full ${
                          selectedProject.status === "Active"
                            ? "bg-green-400"
                            : selectedProject.status === "In Progress"
                              ? "bg-yellow-400"
                              : selectedProject.status === "Deployed"
                                ? "bg-blue-400"
                                : "bg-gray-400"
                        }`}
                      ></div>
                      <span className="text-white font-medium">{selectedProject.status}</span>
                    </div>
                    <p className="text-blue-100">{selectedProject.impact}</p>
                  </div>
                </div>

                <div>
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <Badge key={tech} className="bg-white/10 text-white hover:bg-white/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {selectedProject.achievements.map((achievement: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <Award className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-blue-100">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-3">Challenges as a Student</h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <Zap className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span className="text-blue-100">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    {selectedProject.githubUrl && (
                      <Button className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                    )}
                    {selectedProject.liveUrl && (
                      <Button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white border-0">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </GlassmorphicCard>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative py-12 overflow-hidden border-t border-white/10">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center">
                <span className="text-lg font-bold text-white">JS</span>
              </div>
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
              <Link href="/blog" className="text-blue-100 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/projects" className="text-blue-100 hover:text-white transition-colors">
                Projects
              </Link>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-blue-100">© {new Date().getFullYear()} Judas Sipho Sithole. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
