"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Edit, Trash2, ExternalLink, Github } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  status: "active" | "completed" | "in-progress"
  githubUrl?: string
  liveUrl?: string
  imageUrl: string
  featured: boolean
}

export function ProjectManager() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "Smart Greenhouse Monitoring",
      description: "IoT-based greenhouse monitoring system with real-time data visualization",
      longDescription:
        "A comprehensive IoT solution for monitoring greenhouse conditions including temperature, humidity, soil moisture, and light levels. Features real-time data visualization, automated alerts, and remote control capabilities.",
      technologies: ["React", "Node.js", "Arduino", "MongoDB", "Socket.io"],
      status: "active",
      githubUrl: "https://github.com/judas/greenhouse",
      liveUrl: "https://greenhouse-demo.com",
      imageUrl: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
  ])

  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSaveProject = (projectData: Partial<Project>) => {
    if (editingProject) {
      // Update existing project
      setProjects((prev) => prev.map((p) => (p.id === editingProject.id ? { ...p, ...projectData } : p)))
    } else {
      // Add new project
      const newProject: Project = {
        id: Date.now().toString(),
        title: projectData.title || "",
        description: projectData.description || "",
        longDescription: projectData.longDescription || "",
        technologies: projectData.technologies || [],
        status: projectData.status || "in-progress",
        githubUrl: projectData.githubUrl,
        liveUrl: projectData.liveUrl,
        imageUrl: projectData.imageUrl || "/placeholder.svg?height=200&width=300",
        featured: projectData.featured || false,
      }
      setProjects((prev) => [...prev, newProject])
    }
    setEditingProject(null)
    setIsDialogOpen(false)
  }

  const handleDeleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div className="space-y-6">
      <GlassmorphicCard>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white">Project Management</CardTitle>
              <CardDescription className="text-blue-200">Manage your portfolio projects</CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white border-0"
                  onClick={() => setEditingProject(null)}
                >
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Project
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-slate-900/95 border-white/20">
                <DialogHeader>
                  <DialogTitle className="text-white">
                    {editingProject ? "Edit Project" : "Add New Project"}
                  </DialogTitle>
                  <DialogDescription className="text-blue-200">
                    {editingProject ? "Update project details" : "Create a new project for your portfolio"}
                  </DialogDescription>
                </DialogHeader>
                <ProjectForm
                  project={editingProject}
                  onSave={handleSaveProject}
                  onCancel={() => setIsDialogOpen(false)}
                />
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
      </GlassmorphicCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <GlassmorphicCard key={project.id}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge
                      variant={project.status === "active" ? "default" : "secondary"}
                      className={
                        project.status === "active"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : project.status === "completed"
                            ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }
                    >
                      {project.status}
                    </Badge>
                    {project.featured && (
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">Featured</Badge>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      setEditingProject(project)
                      setIsDialogOpen(true)
                    }}
                    className="text-blue-400 hover:text-white hover:bg-white/10"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDeleteProject(project.id)}
                    className="text-red-400 hover:text-white hover:bg-red-500/20"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <img
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <p className="text-blue-100 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs border-white/20 text-blue-200">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                {project.githubUrl && (
                  <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                )}
                {project.liveUrl && (
                  <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Live
                  </Button>
                )}
              </div>
            </CardContent>
          </GlassmorphicCard>
        ))}
      </div>
    </div>
  )
}

function ProjectForm({
  project,
  onSave,
  onCancel,
}: {
  project: Project | null
  onSave: (data: Partial<Project>) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    description: project?.description || "",
    longDescription: project?.longDescription || "",
    technologies: project?.technologies.join(", ") || "",
    status: project?.status || "in-progress",
    githubUrl: project?.githubUrl || "",
    liveUrl: project?.liveUrl || "",
    imageUrl: project?.imageUrl || "",
    featured: project?.featured || false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      ...formData,
      technologies: formData.technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-white">
            Project Title
          </Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
            className="bg-white/10 border-white/20 text-white"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="status" className="text-white">
            Status
          </Label>
          <select
            id="status"
            value={formData.status}
            onChange={(e) => setFormData((prev) => ({ ...prev, status: e.target.value as any }))}
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
          >
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="active">Active</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-white">
          Short Description
        </Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
          className="bg-white/10 border-white/20 text-white"
          rows={2}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="longDescription" className="text-white">
          Detailed Description
        </Label>
        <Textarea
          id="longDescription"
          value={formData.longDescription}
          onChange={(e) => setFormData((prev) => ({ ...prev, longDescription: e.target.value }))}
          className="bg-white/10 border-white/20 text-white"
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="technologies" className="text-white">
          Technologies (comma-separated)
        </Label>
        <Input
          id="technologies"
          value={formData.technologies}
          onChange={(e) => setFormData((prev) => ({ ...prev, technologies: e.target.value }))}
          className="bg-white/10 border-white/20 text-white"
          placeholder="React, Node.js, MongoDB"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="githubUrl" className="text-white">
            GitHub URL
          </Label>
          <Input
            id="githubUrl"
            value={formData.githubUrl}
            onChange={(e) => setFormData((prev) => ({ ...prev, githubUrl: e.target.value }))}
            className="bg-white/10 border-white/20 text-white"
            placeholder="https://github.com/..."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="liveUrl" className="text-white">
            Live URL
          </Label>
          <Input
            id="liveUrl"
            value={formData.liveUrl}
            onChange={(e) => setFormData((prev) => ({ ...prev, liveUrl: e.target.value }))}
            className="bg-white/10 border-white/20 text-white"
            placeholder="https://..."
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="imageUrl" className="text-white">
          Image URL
        </Label>
        <Input
          id="imageUrl"
          value={formData.imageUrl}
          onChange={(e) => setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))}
          className="bg-white/10 border-white/20 text-white"
          placeholder="https://... or /placeholder.svg?height=200&width=300"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="featured"
          checked={formData.featured}
          onChange={(e) => setFormData((prev) => ({ ...prev, featured: e.target.checked }))}
          className="rounded border-white/20"
        />
        <Label htmlFor="featured" className="text-white">
          Featured Project
        </Label>
      </div>

      <div className="flex gap-4 pt-4">
        <Button
          type="submit"
          className="bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white border-0"
        >
          {project ? "Update Project" : "Create Project"}
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
