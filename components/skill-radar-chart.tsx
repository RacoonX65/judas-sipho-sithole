"use client"
import { useState, useEffect } from "react"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { Badge } from "@/components/ui/badge"
import { Zap, TrendingUp } from "lucide-react"

interface Skill {
  name: string
  level: number
  color: string
  category: string
}

const skills: Skill[] = [
  { name: "IoT Development", level: 90, color: "#3B82F6", category: "Hardware" },
  { name: "ESP32/Arduino", level: 85, color: "#FF6B35", category: "Hardware" },
  { name: "Raspberry Pi", level: 80, color: "#C1272D", category: "Hardware" },
  { name: "LOGO PLC", level: 75, color: "#00A8CC", category: "Hardware" },
  { name: "Embedded C/C++", level: 82, color: "#FF9500", category: "Hardware" },
  { name: "MATLAB/Simulink", level: 78, color: "#0076A8", category: "Hardware" },
  { name: "AutoCAD", level: 73, color: "#E51937", category: "Hardware" },
  { name: "Circuit Design", level: 88, color: "#F59E0B", category: "Hardware" },
  { name: "React/Next.js", level: 85, color: "#10B981", category: "Frontend" },
  { name: "JavaScript/ES6+", level: 88, color: "#F7DF1E", category: "Frontend" },
  { name: "TypeScript", level: 83, color: "#3178C6", category: "Frontend" },
  { name: "Python", level: 80, color: "#3776AB", category: "Frontend" },
  { name: "Node.js/APIs", level: 80, color: "#8B5CF6", category: "Backend" },
  { name: "Database Design", level: 82, color: "#06B6D4", category: "Backend" },
  { name: "Java", level: 75, color: "#ED8B00", category: "Backend" },
  { name: "C#/.NET", level: 72, color: "#239120", category: "Backend" },
  { name: "Machine Learning", level: 75, color: "#EF4444", category: "AI/ML" },
  { name: "PyTorch", level: 70, color: "#EE4C2C", category: "AI/ML" },
  { name: "TensorFlow", level: 68, color: "#FF6F00", category: "AI/ML" },
  { name: "Google Colab", level: 85, color: "#F9AB00", category: "AI/ML" },
  { name: "Flutter", level: 78, color: "#02569B", category: "Mobile" },
  { name: "Java (Android)", level: 72, color: "#3DDC84", category: "Mobile" },
]

export function SkillRadarChart() {
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(new Array(skills.length).fill(0))
  const [selectedCategory, setSelectedCategory] = useState<string>("Hardware")

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevels(skills.map((skill) => skill.level))
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const categories = Array.from(new Set(skills.map((skill) => skill.category)))
  const filteredSkills = skills.filter((skill) => skill.category === selectedCategory)

  const maxLevel = 100
  const centerX = 150
  const centerY = 150
  const maxRadius = 120

  const getPointPosition = (index: number, level: number, total: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2
    const radius = (level / maxLevel) * maxRadius
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    }
  }

  const getLabelPosition = (index: number, total: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2
    const radius = maxRadius + 20
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    }
  }

  return (
    <GlassmorphicCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-orange-400" />
          <h3 className="text-xl font-bold text-white">Skill Proficiency</h3>
        </div>
        <Badge className="bg-orange-500/20 text-orange-100 border-orange-500/30">
          <Zap className="h-3 w-3 mr-1" />
          Interactive
        </Badge>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-full text-xs transition-all ${
              selectedCategory === category ? "bg-orange-500 text-white" : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex justify-center">
        <svg width="300" height="300" className="overflow-visible">
          {/* Grid circles */}
          {[20, 40, 60, 80, 100].map((level) => (
            <circle
              key={level}
              cx={centerX}
              cy={centerY}
              r={(level / maxLevel) * maxRadius}
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
          ))}

          {/* Grid lines */}
          {filteredSkills.map((_, index) => {
            const pos = getLabelPosition(index, filteredSkills.length)
            return (
              <line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={pos.x}
                y2={pos.y}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            )
          })}

          {/* Skill polygon */}
          <polygon
            points={filteredSkills
              .map((skill, index) => {
                const pos = getPointPosition(index, animatedLevels[skills.indexOf(skill)] || 0, filteredSkills.length)
                return `${pos.x},${pos.y}`
              })
              .join(" ")}
            fill="rgba(249, 115, 22, 0.2)"
            stroke="#F97316"
            strokeWidth="2"
          />

          {/* Skill points */}
          {filteredSkills.map((skill, index) => {
            const pos = getPointPosition(index, animatedLevels[skills.indexOf(skill)] || 0, filteredSkills.length)
            return (
              <circle
                key={skill.name}
                cx={pos.x}
                cy={pos.y}
                r="4"
                fill={skill.color}
                stroke="white"
                strokeWidth="2"
                className="hover:r-6 transition-all cursor-pointer"
              />
            )
          })}

          {/* Skill labels */}
          {filteredSkills.map((skill, index) => {
            const pos = getLabelPosition(index, filteredSkills.length)
            return (
              <text
                key={skill.name}
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-white text-xs font-medium"
              >
                {skill.name}
              </text>
            )
          })}
        </svg>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {filteredSkills.map((skill) => (
          <div key={skill.name} className="flex items-center justify-between p-2 bg-white/5 rounded">
            <span className="text-white text-sm">{skill.name}</span>
            <div className="flex items-center gap-2">
              <div className="w-16 h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${animatedLevels[skills.indexOf(skill)] || 0}%`,
                    backgroundColor: skill.color,
                  }}
                />
              </div>
              <span className="text-white text-xs font-mono">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </GlassmorphicCard>
  )
}
