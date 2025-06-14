"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Edit, Trash2, Save } from "lucide-react"

interface Skill {
  id: string
  name: string
  category: "technical" | "electrical" | "software" | "tools"
  level: number // 1-100
  yearsOfExperience: number
}

export function SkillsManager() {
  const [skills, setSkills] = useState<Skill[]>([
    { id: "1", name: "React", category: "software", level: 90, yearsOfExperience: 3 },
    { id: "2", name: "Node.js", category: "software", level: 85, yearsOfExperience: 3 },
    { id: "3", name: "Arduino", category: "technical", level: 95, yearsOfExperience: 4 },
    { id: "4", name: "Circuit Design", category: "electrical", level: 88, yearsOfExperience: 4 },
    { id: "5", name: "Python", category: "software", level: 80, yearsOfExperience: 2 },
    { id: "6", name: "AutoCAD", category: "tools", level: 75, yearsOfExperience: 3 },
  ])

  const [editingSkill, setEditingSkill] = useState<Skill | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSaveSkill = (skillData: Partial<Skill>) => {
    if (editingSkill) {
      setSkills((prev) => prev.map((s) => (s.id === editingSkill.id ? { ...s, ...skillData } : s)))
    } else {
      const newSkill: Skill = {
        id: Date.now().toString(),
        name: skillData.name || "",
        category: skillData.category || "technical",
        level: skillData.level || 50,
        yearsOfExperience: skillData.yearsOfExperience || 1,
      }
      setSkills((prev) => [...prev, newSkill])
    }
    setEditingSkill(null)
    setIsDialogOpen(false)
  }

  const handleDeleteSkill = (id: string) => {
    setSkills((prev) => prev.filter((s) => s.id !== id))
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "software":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "electrical":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      case "technical":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "tools":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = []
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>,
  )

  return (
    <div className="space-y-6">
      <GlassmorphicCard>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white">Skills Management</CardTitle>
              <CardDescription className="text-blue-200">Manage your technical and professional skills</CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-gradient-to-r from-green-500 to-teal-600 hover:opacity-90 text-white border-0"
                  onClick={() => setEditingSkill(null)}
                >
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Skill
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md bg-slate-900/95 border-white/20">
                <DialogHeader>
                  <DialogTitle className="text-white">{editingSkill ? "Edit Skill" : "Add New Skill"}</DialogTitle>
                  <DialogDescription className="text-blue-200">
                    {editingSkill ? "Update skill details" : "Add a new skill to your portfolio"}
                  </DialogDescription>
                </DialogHeader>
                <SkillForm skill={editingSkill} onSave={handleSaveSkill} onCancel={() => setIsDialogOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
      </GlassmorphicCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <GlassmorphicCard key={category}>
            <CardHeader>
              <CardTitle className="text-white capitalize flex items-center gap-2">
                {category} Skills
                <Badge className={getCategoryColor(category)}>{categorySkills.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {categorySkills.map((skill) => (
                <div key={skill.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{skill.name}</span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          setEditingSkill(skill)
                          setIsDialogOpen(true)
                        }}
                        className="text-blue-400 hover:text-white hover:bg-white/10 h-6 w-6 p-0"
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDeleteSkill(skill.id)}
                        className="text-red-400 hover:text-white hover:bg-red-500/20 h-6 w-6 p-0"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-200">Proficiency</span>
                      <span className="text-blue-200">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-pink-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-xs text-blue-300">
                      {skill.yearsOfExperience} year{skill.yearsOfExperience !== 1 ? "s" : ""} experience
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </GlassmorphicCard>
        ))}
      </div>
    </div>
  )
}

function SkillForm({
  skill,
  onSave,
  onCancel,
}: {
  skill: Skill | null
  onSave: (data: Partial<Skill>) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState({
    name: skill?.name || "",
    category: skill?.category || "technical",
    level: skill?.level || 50,
    yearsOfExperience: skill?.yearsOfExperience || 1,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white">
          Skill Name
        </Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          className="bg-white/10 border-white/20 text-white"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category" className="text-white">
          Category
        </Label>
        <select
          id="category"
          value={formData.category}
          onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value as any }))}
          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
        >
          <option value="technical">Technical</option>
          <option value="electrical">Electrical</option>
          <option value="software">Software</option>
          <option value="tools">Tools</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="level" className="text-white">
          Proficiency Level (%)
        </Label>
        <Input
          id="level"
          type="number"
          min="1"
          max="100"
          value={formData.level}
          onChange={(e) => setFormData((prev) => ({ ...prev, level: Number(e.target.value) }))}
          className="bg-white/10 border-white/20 text-white"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="yearsOfExperience" className="text-white">
          Years of Experience
        </Label>
        <Input
          id="yearsOfExperience"
          type="number"
          min="0"
          step="0.5"
          value={formData.yearsOfExperience}
          onChange={(e) => setFormData((prev) => ({ ...prev, yearsOfExperience: Number(e.target.value) }))}
          className="bg-white/10 border-white/20 text-white"
          required
        />
      </div>

      <div className="flex gap-4 pt-4">
        <Button
          type="submit"
          className="bg-gradient-to-r from-green-500 to-teal-600 hover:opacity-90 text-white border-0"
        >
          <Save className="h-4 w-4 mr-2" />
          {skill ? "Update Skill" : "Add Skill"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="border-white/20 text-white hover:bg-white/10"
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}
