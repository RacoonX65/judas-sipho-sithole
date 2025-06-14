"use client"
import { useState, useEffect, useRef } from "react"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { Badge } from "@/components/ui/badge"
import { Terminal, Code, Zap } from "lucide-react"

interface TerminalCommand {
  command: string
  output: string[]
  delay?: number
}

const commands: TerminalCommand[] = [
  {
    command: "whoami",
    output: ["judas-sipho-sithole", "Electrical Engineering Student @ UJ", "IoT Developer & Software Engineer"],
    delay: 1000,
  },
  {
    command: "ls -la skills/",
    output: [
      "drwxr-xr-x  electrical-engineering/",
      "drwxr-xr-x  iot-development/",
      "drwxr-xr-x  software-engineering/",
      "drwxr-xr-x  machine-learning/",
      "-rw-r--r--  problem-solving.exe",
      "-rw-r--r--  innovation.dll",
    ],
    delay: 2000,
  },
  {
    command: "cat projects/water-monitoring.json",
    output: [
      "{",
      '  "name": "Smart Water Monitoring System",',
      '  "status": "live",',
      '  "uptime": "99.9%",',
      '  "users": "150+",',
      '  "technologies": ["IoT", "Next.js", "Real-time DB"]',
      "}",
    ],
    delay: 1500,
  },
  {
    command: "git log --oneline",
    output: [
      "a1b2c3d feat: Add real-time sensor integration",
      "d4e5f6g fix: Optimize database queries",
      "g7h8i9j feat: Implement SMS alert system",
      "j1k2l3m docs: Update API documentation",
      "m4n5o6p feat: Add data visualization charts",
    ],
    delay: 2000,
  },
]

export function InteractiveTerminal() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [currentOutput, setCurrentOutput] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (currentCommandIndex < commands.length) {
      const command = commands[currentCommandIndex]
      setIsTyping(true)

      const timeout = setTimeout(() => {
        setCurrentOutput((prev) => [...prev, `$ ${command.command}`, ...command.output, ""])
        setCurrentCommandIndex((prev) => prev + 1)
        setIsTyping(false)
      }, command.delay || 1000)

      return () => clearTimeout(timeout)
    }
  }, [currentCommandIndex])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [currentOutput])

  const resetTerminal = () => {
    setCurrentCommandIndex(0)
    setCurrentOutput([])
    setIsTyping(false)
  }

  return (
    <GlassmorphicCard className="p-6 bg-black/20 border-green-400/30">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-green-400" />
          <span className="text-green-400 font-mono text-sm">judas@portfolio:~</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={resetTerminal}
            className="h-3 w-3 rounded-full bg-yellow-400 hover:bg-yellow-300 transition-colors"
          />
          <button className="h-3 w-3 rounded-full bg-green-400 hover:bg-green-300 transition-colors" />
          <button className="h-3 w-3 rounded-full bg-red-400 hover:bg-red-300 transition-colors" />
        </div>
      </div>

      <div
        ref={terminalRef}
        className="bg-black/40 rounded-lg p-4 h-64 overflow-y-auto font-mono text-sm text-green-300 scrollbar-thin scrollbar-thumb-green-400/20"
      >
        {currentOutput.map((line, index) => (
          <div key={index} className={line.startsWith("$") ? "text-green-400 font-bold" : "text-green-300"}>
            {line}
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center text-green-400">
            <span>$ </span>
            <span className="animate-pulse">typing...</span>
            {showCursor && <span className="ml-1 bg-green-400 w-2 h-4 inline-block animate-pulse" />}
          </div>
        )}
        {!isTyping && currentCommandIndex >= commands.length && showCursor && (
          <div className="flex items-center text-green-400">
            <span>$ </span>
            <span className="ml-1 bg-green-400 w-2 h-4 inline-block animate-pulse" />
          </div>
        )}
      </div>

      <div className="mt-4 flex gap-2">
        <Badge className="bg-green-500/20 text-green-100 border-green-500/30">
          <Code className="h-3 w-3 mr-1" />
          Interactive Terminal
        </Badge>
        <Badge className="bg-blue-500/20 text-blue-100 border-blue-500/30">
          <Zap className="h-3 w-3 mr-1" />
          Live Demo
        </Badge>
      </div>
    </GlassmorphicCard>
  )
}
