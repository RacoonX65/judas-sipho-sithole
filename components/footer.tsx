"use client"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function Footer() {
  const [clickCount, setClickCount] = useState(0)
  const router = useRouter()

  const handleJSClick = () => {
    setClickCount((prev) => {
      const newCount = prev + 1
      console.log(`Click count: ${newCount}`) // Debug log

      if (newCount >= 3) {
        console.log("Redirecting to admin...") // Debug log
        router.push("/admin/login")
        return 0 // Reset count
      }

      return newCount
    })

    // Reset click count after 3 seconds if not completed
    setTimeout(() => {
      setClickCount(0)
    }, 3000)
  }

  return (
    <footer className="relative py-12 overflow-hidden border-t border-gray-700/50 bg-gradient-to-t from-gray-950 via-gray-900 to-transparent">
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <button
              onClick={handleJSClick}
              className={`h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg ${
                clickCount > 0 ? "animate-subtle-glow ring-2 ring-blue-400/50" : ""
              }`}
              title={clickCount > 0 ? `${clickCount}/3 clicks` : "Click 3 times for admin access"}
            >
              <span className="text-lg font-bold text-white">JS</span>
            </button>
            <span className="text-xl font-bold text-gray-100">Judas Sipho Sithole</span>
          </div>
          <nav className="flex flex-wrap gap-6">
            <Link href="/" className="text-gray-400 hover:text-blue-400 transition-all duration-300 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-all duration-300 font-medium">
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 font-medium"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 font-medium"
            >
              Projects
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 font-medium">
              Contact
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700/50 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Judas Sipho Sithole. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
