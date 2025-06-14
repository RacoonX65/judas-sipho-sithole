"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { FloatingBadge } from "@/components/floating-badge"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Search, ArrowRight, Eye, MessageCircle, Heart } from "lucide-react"
import Link from "next/link"
import { ParticlesBackground } from "@/components/particles-background"

// Personal blog posts from Judas Sipho Sithole
const blogPosts = [
  {
    id: 1,
    title: "My Journey Building Smart IoT Systems: Lessons from the University of Johannesburg",
    excerpt:
      "Hello! I'm Judas Sipho Sithole, and I want to share my personal experience building IoT systems during my BEng Tech studies and how I've applied these skills in real-world projects.",
    content: "Full article content here...",
    author: "Judas Sipho Sithole",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "IoT",
    tags: ["Personal Journey", "IoT", "University Projects", "Arduino", "ESP32"],
    image: "/placeholder.svg?height=400&width=600",
    views: 1250,
    comments: 23,
    likes: 89,
    featured: true,
    personalNote: "This project changed how I think about electrical engineering and software integration.",
  },
  {
    id: 2,
    title: "Why I Chose Machine Learning: From Electrical Engineering to AI",
    excerpt:
      "As an electrical engineer, my transition into machine learning wasn't obvious. Here's my personal story of discovering the power of AI and how it complements my engineering background.",
    content: "Full article content here...",
    author: "Judas Sipho Sithole",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Machine Learning",
    tags: ["Career Journey", "Machine Learning", "Personal Growth", "Python", "AI"],
    image: "/placeholder.svg?height=400&width=600",
    views: 980,
    comments: 15,
    likes: 67,
    featured: true,
    personalNote: "This decision opened doors I never knew existed in engineering.",
  },
  {
    id: 3,
    title: "Building My First Smart Home System: A Personal Project Diary",
    excerpt:
      "I'm Judas, and I want to take you through my personal journey of automating my home using electrical engineering principles and IoT technology. Here's what I learned.",
    content: "Full article content here...",
    author: "Judas Sipho Sithole",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Personal Projects",
    tags: ["Smart Home", "DIY", "Personal Experience", "Automation", "IoT"],
    image: "/placeholder.svg?height=400&width=600",
    views: 756,
    comments: 12,
    likes: 45,
    featured: false,
    personalNote: "My family thought I was crazy until they saw the electricity bill savings!",
  },
  {
    id: 4,
    title: "From Circuits to Code: My Software Engineering Evolution",
    excerpt:
      "Hello, I'm Judas Sipho Sithole. Starting as an electrical engineer, I never imagined I'd fall in love with software development. Here's my personal transformation story.",
    content: "Full article content here...",
    author: "Judas Sipho Sithole",
    date: "2023-12-28",
    readTime: "15 min read",
    category: "Software Engineering",
    tags: ["Personal Story", "Career Change", "Full-Stack", "Learning Journey", "Growth"],
    image: "/placeholder.svg?height=400&width=600",
    views: 1100,
    comments: 28,
    likes: 92,
    featured: false,
    personalNote: "The moment I wrote my first API, I knew there was no going back.",
  },
  {
    id: 5,
    title: "My Biggest Engineering Failure (And What It Taught Me)",
    excerpt:
      "I'm Judas, and I want to share one of my most embarrassing engineering failures from university. Sometimes our biggest mistakes become our greatest teachers.",
    content: "Full article content here...",
    author: "Judas Sipho Sithole",
    date: "2023-12-20",
    readTime: "11 min read",
    category: "Personal Reflections",
    tags: ["Failure", "Learning", "Personal Growth", "Engineering", "Lessons"],
    image: "/placeholder.svg?height=400&width=600",
    views: 834,
    comments: 19,
    likes: 71,
    featured: false,
    personalNote: "This failure taught me more than any textbook ever could.",
  },
  {
    id: 6,
    title: "Why I Love Solving Real-World Problems with Technology",
    excerpt:
      "Hello! I'm Judas Sipho Sithole, and I want to share what drives my passion for engineering. It's not just about the technology—it's about making a real difference in people's lives.",
    content: "Full article content here...",
    author: "Judas Sipho Sithole",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "Personal Philosophy",
    tags: ["Passion", "Purpose", "Engineering", "Impact", "Personal Values"],
    image: "/placeholder.svg?height=400&width=600",
    views: 692,
    comments: 14,
    likes: 58,
    featured: false,
    personalNote: "This is why I wake up excited to work on new projects every day.",
  },
]

const categories = [
  "All",
  "IoT",
  "Machine Learning",
  "Personal Projects",
  "Software Engineering",
  "Personal Reflections",
  "Personal Philosophy",
]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  // Remove the mounted check that was causing the delay

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <>
      <ParticlesBackground />
      {/* Personal Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <FloatingBadge>Personal Blog</FloatingBadge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mt-6">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Judas Sipho Sithole
              </span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 leading-relaxed">
              Welcome to my personal blog! Here, I share my journey as an electrical engineer, my adventures in IoT and
              software development, the lessons I've learned, and the projects that excite me. This is where I get
              personal about my passion for technology and how it's shaping my career.
            </p>
            <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 max-w-2xl mx-auto">
              <p className="text-blue-100 italic">
                "Every project teaches me something new. Every failure makes me stronger. Every success reminds me why I
                love engineering."
              </p>
              <p className="text-orange-400 font-medium mt-2">- Judas Sipho Sithole</p>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </section>

      {/* Search and Filter Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <GlassmorphicCard className="p-6 border-2 border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Explore My Journey</h3>
                <p className="text-blue-100">Find the stories and experiences that resonate with you</p>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-100 h-5 w-5" />
                  <Input
                    placeholder="Search my stories and experiences..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-100 focus:border-orange-400"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
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
            </GlassmorphicCard>
          </motion.div>
        </div>
      </section>

      {/* Featured Personal Stories */}
      <section className="relative py-12 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <FloatingBadge>Featured Stories</FloatingBadge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mt-6">
              My Latest{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Adventures
              </span>
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              The experiences and projects that have shaped my engineering journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.id}`} className="block group">
                  <GlassmorphicCard className="overflow-hidden h-full hover:border-orange-400/50 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent z-10"></div>
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <Badge className="bg-gradient-to-r from-orange-500 to-pink-600 text-white border-0">
                          Personal Story
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4 z-20">
                        <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-blue-100 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-blue-100 mb-4 line-clamp-3">{post.excerpt}</p>

                      {/* Personal Note */}
                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 mb-4">
                        <p className="text-orange-200 text-sm italic">💭 "{post.personalNote}"</p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} className="bg-white/10 text-white hover:bg-white/20 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-blue-100">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                        <div className="text-orange-400 group-hover:text-orange-300 transition-colors flex items-center gap-1">
                          <span>Read My Story</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </section>

      {/* All Personal Stories */}
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
                Stories
              </span>
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              {filteredPosts.length} personal experience{filteredPosts.length !== 1 ? "s" : ""} to explore
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.id}`} className="block group">
                  <GlassmorphicCard className="overflow-hidden h-full hover:border-orange-400/50 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent z-10"></div>
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20">
                          {post.category}
                        </Badge>
                      </div>
                      {post.featured && (
                        <div className="absolute top-4 right-4 z-20">
                          <Badge className="bg-gradient-to-r from-orange-500 to-pink-600 text-white border-0">
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-blue-100 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-blue-100 mb-4 line-clamp-3 text-sm">{post.excerpt}</p>

                      {/* Personal Note - Compact */}
                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-2 mb-4">
                        <p className="text-orange-200 text-xs italic line-clamp-2">💭 {post.personalNote}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} className="bg-white/10 text-white hover:bg-white/20 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-blue-100">
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3" />
                            <span>{post.comments}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                        <div className="text-orange-400 group-hover:text-orange-300 transition-colors flex items-center gap-1 text-sm">
                          <span>Read</span>
                          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center py-12"
            >
              <GlassmorphicCard className="p-12 max-w-md mx-auto">
                <h3 className="text-xl font-bold text-white mb-4">No Stories Found</h3>
                <p className="text-blue-100 mb-6">
                  I haven't written about that topic yet, but I'm always working on new content!
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                  }}
                  className="bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white border-0"
                >
                  Show All Stories
                </Button>
              </GlassmorphicCard>
            </motion.div>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </section>

      {/* Personal Newsletter Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <GlassmorphicCard className="p-8 md:p-12 border-2 border-white/20 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <FloatingBadge>Stay Connected</FloatingBadge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                Join My{" "}
                <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                I share my latest projects, engineering insights, and personal reflections directly with my community.
                No spam, just genuine stories from my engineering adventures.
              </p>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
                <p className="text-blue-100 mb-4">
                  "I love connecting with fellow engineers and sharing what I learn. Your feedback and questions often
                  inspire my next blog post!"
                </p>
                <p className="text-orange-400 font-medium">- Judas</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-6">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-100 focus:border-orange-400"
                />
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white border-0"
                >
                  Join My Journey
                </Button>
              </div>
              <p className="text-sm text-blue-100/70">
                I respect your privacy and will never share your email. Unsubscribe anytime.
              </p>
            </motion.div>
          </GlassmorphicCard>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </section>

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
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-blue-100">© {new Date().getFullYear()} Judas Sipho Sithole. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
