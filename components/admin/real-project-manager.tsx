"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import { PlusCircle, Edit, Trash2, Github, Loader2, AlertCircle, ExternalLink } from "lucide-react"
import { supabase, type Project } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"

export function RealProjectManager() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [saving, setSaving] = useState(false)

  const { isConfigured } = useAuth()

  useEffect(() => {
    if (isConfigured) {
      fetchProjects()
    }
  }, [isConfigured])

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false })

      if (error) throw error
      setProjects(data || [])
    } catch (error) {
      console.error("Error fetching projects:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSaveProject = async (projectData: Partial<Project>) => {
    setSaving(true)
    try {
      if (editingProject) {
        // Update existing project
        const { error } = await supabase
          .from("projects")
          .update({
            ...projectData,
            updated_at: new Date().toISOString(),
          })
          .eq("id", editingProject.id)

        if (error) throw error
      } else {
        // Create new project
        const { error } = await supabase.from("projects").insert([
          {
            ...projectData,
            id: crypto.randomUUID(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ])

        if (error) throw error
      }

      await fetchProjects()
      setEditingProject(null)
      setIsDialogOpen(false)
    } catch (error) {
      console.error("Error saving project:", error)
      alert("Error saving project. Please try again.")
    } finally {
      setSaving(false)
    }
  }

  const handleDeleteProject = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return

    try {
      const { error } = await supabase.from("projects").delete().eq("id", id)

      if (error) throw error
      await fetchProjects()
    } catch (error) {
      console.error("Error deleting project:", error)
      alert("Error deleting project. Please try again.")
    }
  }

  if (!isConfigured) {
    return (
      <div className="text-center p-8">
        <GlassmorphicCard className="p-8">
          <AlertCircle className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-white text-xl font-semibold mb-2">Supabase Not Configured</h3>
          <p className="text-blue-200 mb-4">Please set up Supabase integration to manage projects.</p>
          <Button
            onClick={() => window.open("https://supabase.com", "_blank")}
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:opacity-90 text-white border-0"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Set up Supabase
          </Button>
        </GlassmorphicCard>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-white" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <GlassmorphicCard>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white">Project Management</CardTitle>
              <CardDescription className="text-blue-200">
                Manage your portfolio projects with real Supabase integration
              </CardDescription>
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
                  saving={saving}
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
                src={project.image_url || "/placeholder.svg?height=200&width=300"}
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
                {project.github_url && (
                  <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                )}
                {project.live_url && (
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
  saving,
}: {
  project: Project | null
  onSave: (data: Partial<Project>) => void
  onCancel: () => void
  saving: boolean
}) {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    description: project?.description || "",
    long_description: project?.long_description || "",
    technologies: project?.technologies.join(", ") || "",
    status: project?.status || ("in-progress" as const),
    github_url: project?.github_url || "",
    live_url: project?.live_url || "",
    image_url: project?.image_url || "",
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
        <Label htmlFor="long_description" className="text-white">
          Detailed Description
        </Label>
        <Textarea
          id="long_description"
          value={formData.long_description}
          onChange={(e) => setFormData((prev) => ({ ...prev, long_description: e.target.value }))}
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
          <Label htmlFor="github_url" className="text-white">
            GitHub URL
          </Label>
          <Input
            id="github_url"
            value={formData.github_url}
            onChange={(e) => setFormData((prev) => ({ ...prev, github_url: e.target.value }))}
            className="bg-white/10 border-white/20 text-white"
            placeholder="https://github.com/..."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="live_url" className="text-white">
            Live URL
          </Label>
          <Input
            id="live_url"
            value={formData.live_url}
            onChange={(e) => setFormData((prev) => ({ ...prev, live_url: e.target.value }))}
            className="bg-white/10 border-white/20 text-white"
            placeholder="https://..."
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="image_url" className="text-white">
          Image URL
        </Label>
        <Input
          id="image_url"
          value={formData.image_url}
          onChange={(e) => setFormData((prev) => ({ ...prev, image_url: e.target.value }))}
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
          disabled={saving}
          className="bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white border-0"
        >
          {saving ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Saving...
            </>
          ) : project ? (
            "Update Project"
          ) : (
            "Create Project"
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={saving}
          className="border-white/20 text-white hover:bg-white/10"
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}
