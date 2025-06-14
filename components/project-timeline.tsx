"use client"
import { useState, useEffect, useRef } from "react"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { Badge } from "@/components/ui/badge"
import { Calendar, GitBranch, CheckCircle, Clock, Zap } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"

interface TimelineEvent {
  id: string
  title: string
  description: string
  date: string
  status: "completed" | "in-progress" | "planned" | "upcoming"
  category: "academic" | "project" | "achievement" | "learning"
  icon: string
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    title: "Started Electrical Engineering at UJ",
    description: "Began my journey in Electrical Engineering, focusing on power systems and control theory.",
    date: "2022-02",
    status: "completed",
    category: "academic",
    icon: "🎓",
  },
  {
    id: "2",
    title: "First IoT Project - Smart Lighting",
    description: "Built an automated lighting system using Arduino and sensors for energy efficiency.",
    date: "2022-06",
    status: "completed",
    category: "project",
    icon: "💡",
  },
  {
    id: "3",
    title: "Web Development Certification",
    description: "Completed full-stack web development course, mastering React, Node.js, and databases.",
    date: "2023-01",
    status: "completed",
    category: "learning",
    icon: "🏆",
  },
  {
    id: "4",
    title: "Smart Water Monitoring System",
    description: "Developed and deployed a comprehensive IoT water quality monitoring system.",
    date: "2024-08",
    status: "completed",
    category: "project",
    icon: "🌊",
  },
  {
    id: "5",
    title: "Portfolio Website for Friend",
    description: "Created a professional portfolio website showcasing modern design and animations.",
    date: "2024-11",
    status: "completed",
    category: "project",
    icon: "💼",
  },
  {
    id: "6",
    title: "Final Year Project Defense",
    description: "Present and defend my final year project to the academic panel.",
    date: "2025-05",
    status: "upcoming",
    category: "academic",
    icon: "🎯",
  },
  {
    id: "7",
    title: "Graduation - BEng Tech",
    description: "Graduate with Bachelor of Engineering Technology in Electrical Engineering.",
    date: "2025-11",
    status: "upcoming",
    category: "achievement",
    icon: "🎓",
  },
  {
    id: "8",
    title: "Planning to Pursue Honours Degree",
    description: "Planning to pursue BEng Tech Honours program, specializing in IoT and smart systems.",
    date: "2026-02",
    status: "upcoming",
    category: "academic",
    icon: "📚",
  },
]

const categoryColors = {
  academic: "from-blue-500 to-blue-400",
  project: "from-blue-600 to-blue-500",
  achievement: "from-blue-700 to-blue-600",
  learning: "from-blue-500 to-blue-400",
}

const statusIcons = {
  completed: <CheckCircle className="h-4 w-4 text-green-400" />,
  "in-progress": <Clock className="h-4 w-4 text-yellow-400" />,
  planned: <Calendar className="h-4 w-4 text-blue-400" />,
  upcoming: <Zap className="h-4 w-4 text-blue-400" />,
}

// Individual timeline item component
function TimelineItem({ event, index, isLeft }: { event: TimelineEvent; index: number; isLeft: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -100 : 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const dotVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2 + 0.3,
        type: "spring",
        stiffness: 200,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center min-h-[120px]"
      variants={itemVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Left side content */}
      {isLeft && (
        <div className="w-1/2 pr-8">
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 ml-auto max-w-sm"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Badge className={`bg-gradient-to-r ${categoryColors[event.category]} text-white border-0 text-xs`}>
                {event.category}
              </Badge>
              {statusIcons[event.status]}
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{event.title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-2">{event.description}</p>
            <span className="text-blue-400 text-xs font-medium">{event.date}</span>
          </motion.div>
        </div>
      )}

      {/* Center timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          variants={dotVariants}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-4 border-gray-900 shadow-lg shadow-blue-500/25"
          whileHover={{
            scale: 1.2,
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
          }}
        >
          <span className="text-lg">{event.icon}</span>
        </motion.div>
      </div>

      {/* Right side content */}
      {!isLeft && (
        <div className="w-1/2 pl-8 ml-auto">
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 max-w-sm"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Badge className={`bg-gradient-to-r ${categoryColors[event.category]} text-white border-0 text-xs`}>
                {event.category}
              </Badge>
              {statusIcons[event.status]}
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{event.title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-2">{event.description}</p>
            <span className="text-blue-400 text-xs font-medium">{event.date}</span>
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}

export function ProjectTimeline() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const timelineRef = useRef(null)
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-50px" })

  const categories = Array.from(new Set(timelineEvents.map((event) => event.category)))
  const filteredEvents = selectedCategory
    ? timelineEvents.filter((event) => event.category === selectedCategory)
    : timelineEvents

  // Timeline line animation
  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  }

  return (
    <GlassmorphicCard className="p-6">
      <motion.div
        className="flex items-center justify-between mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <GitBranch className="h-5 w-5 text-blue-400" />
          </motion.div>
          <h3 className="text-xl font-bold text-white">Journey Timeline</h3>
        </div>
        <Badge className="bg-blue-500/20 text-blue-100 border-blue-500/30">
          <Zap className="h-3 w-3 mr-1" />
          Interactive
        </Badge>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-2 mb-8 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.button
          onClick={() => setSelectedCategory(null)}
          className={`px-3 py-1 rounded-full text-xs transition-all ${
            selectedCategory === null ? "bg-blue-500 text-white" : "bg-white/10 text-white hover:bg-white/20"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All Events
        </motion.button>
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-full text-xs transition-all capitalize ${
              selectedCategory === category ? "bg-blue-500 text-white" : "bg-white/10 text-white hover:bg-white/20"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <div ref={timelineRef} className="relative max-w-4xl mx-auto">
        {/* Centered timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform -translate-x-1/2">
          <motion.div
            className="w-full bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600 shadow-lg shadow-blue-500/25"
            variants={lineVariants}
            initial="hidden"
            animate={isTimelineInView ? "visible" : "hidden"}
          />
        </div>

        <div className="space-y-8">
          {filteredEvents.map((event, index) => (
            <TimelineItem key={event.id} event={event} index={index} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </GlassmorphicCard>
  )
}
