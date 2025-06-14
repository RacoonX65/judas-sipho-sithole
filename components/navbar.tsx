"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { motion } from "framer-motion"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll events
  useEffect(() => {
    // Set initial scroll state immediately
    setScrolled(window.scrollY > 10)

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <GlassmorphicCard variant="accent" className={`mx-4 md:mx-8`}>
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative overflow-hidden rounded-2xl glass-professional h-10 w-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-blue-500/20 pointer-events-none"></div>
              <div className="relative z-10 h-full w-full">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Judas Sipho Sithole Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <span className="text-xl font-bold text-gray-100">Judas Sipho Sithole</span>
          </Link>
          <nav className="ml-auto hidden gap-8 md:flex">
            <Link href="/" className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium">
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium"
            >
              Services
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium">
              Blog
            </Link>
            <Link
              href="/projects"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium"
            >
              Projects
            </Link>
          </nav>
          <Button className="ml-8 hidden bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold border-0 md:flex hover:scale-105 transition-all duration-300 shadow-lg">
            Contact Me
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto md:hidden text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </GlassmorphicCard>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-x-0 top-full mt-2 mx-4 md:hidden"
        >
          <GlassmorphicCard variant="professional" className="p-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 p-2 rounded hover:bg-gray-800/30"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 p-2 rounded hover:bg-gray-800/30"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 p-2 rounded hover:bg-gray-800/30"
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 p-2 rounded hover:bg-gray-800/30"
              >
                Blog
              </Link>
              <Link
                href="/projects"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 p-2 rounded hover:bg-gray-800/30"
              >
                Projects
              </Link>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold border-0 w-full hover:scale-105 transition-all duration-300">
                Contact Me
              </Button>
            </nav>
          </GlassmorphicCard>
        </motion.div>
      )}
    </motion.header>
  )
}
