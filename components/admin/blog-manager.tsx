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
import { PlusCircle, Edit, Trash2, Eye, Calendar } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  tags: string[]
  status: "published" | "draft" | "scheduled"
  publishDate: string
  readTime: number
  imageUrl: string
}

export function BlogManager() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: "1",
      title: "Building IoT Solutions with Arduino and React",
      excerpt:
        "Learn how to create full-stack IoT applications combining hardware sensors with modern web technologies.",
      content: "Full blog content here...",
      tags: ["IoT", "Arduino", "React", "JavaScript"],
      status: "published",
      publishDate: "2024-01-15",
      readTime: 8,
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "2",
      title: "Electrical Engineering Meets Software Development",
      excerpt: "Exploring the intersection of electrical engineering and software development in modern applications.",
      content: "Full blog content here...",
      tags: ["Electrical Engineering", "Software Development", "Career"],
      status: "draft",
      publishDate: "2024-01-20",
      readTime: 6,
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
  ])

  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSavePost = (postData: Partial<BlogPost>) => {
    if (editingPost) {
      setPosts((prev) => prev.map((p) => (p.id === editingPost.id ? { ...p, ...postData } : p)))
    } else {
      const newPost: BlogPost = {
        id: Date.now().toString(),
        title: postData.title || "",
        excerpt: postData.excerpt || "",
        content: postData.content || "",
        tags: postData.tags || [],
        status: postData.status || "draft",
        publishDate: postData.publishDate || new Date().toISOString().split("T")[0],
        readTime: postData.readTime || 5,
        imageUrl: postData.imageUrl || "/placeholder.svg?height=200&width=300",
      }
      setPosts((prev) => [...prev, newPost])
    }
    setEditingPost(null)
    setIsDialogOpen(false)
  }

  const handleDeletePost = (id: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div className="space-y-6">
      <GlassmorphicCard>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white">Blog Management</CardTitle>
              <CardDescription className="text-blue-200">Create and manage your blog posts</CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white border-0"
                  onClick={() => setEditingPost(null)}
                >
                  <PlusCircle className="h-4 w-4 mr-2" />
                  New Post
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900/95 border-white/20">
                <DialogHeader>
                  <DialogTitle className="text-white">
                    {editingPost ? "Edit Blog Post" : "Create New Blog Post"}
                  </DialogTitle>
                  <DialogDescription className="text-blue-200">
                    {editingPost ? "Update your blog post" : "Write a new blog post for your audience"}
                  </DialogDescription>
                </DialogHeader>
                <BlogPostForm post={editingPost} onSave={handleSavePost} onCancel={() => setIsDialogOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
      </GlassmorphicCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {posts.map((post) => (
          <GlassmorphicCard key={post.id}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-white text-lg mb-2">{post.title}</CardTitle>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant={post.status === "published" ? "default" : "secondary"}
                      className={
                        post.status === "published"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : post.status === "draft"
                            ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                      }
                    >
                      {post.status}
                    </Badge>
                    <div className="flex items-center text-blue-300 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.publishDate}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="text-blue-400 hover:text-white hover:bg-white/10">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      setEditingPost(post)
                      setIsDialogOpen(true)
                    }}
                    className="text-blue-400 hover:text-white hover:bg-white/10"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDeletePost(post.id)}
                    className="text-red-400 hover:text-white hover:bg-red-500/20"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <img
                src={post.imageUrl || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <p className="text-blue-100 text-sm mb-4">{post.excerpt}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs border-white/20 text-blue-200">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="text-blue-300 text-xs">{post.readTime} min read</div>
            </CardContent>
          </GlassmorphicCard>
        ))}
      </div>
    </div>
  )
}

function BlogPostForm({
  post,
  onSave,
  onCancel,
}: {
  post: BlogPost | null
  onSave: (data: Partial<BlogPost>) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState({
    title: post?.title || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    tags: post?.tags.join(", ") || "",
    status: post?.status || "draft",
    publishDate: post?.publishDate || new Date().toISOString().split("T")[0],
    readTime: post?.readTime || 5,
    imageUrl: post?.imageUrl || "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      ...formData,
      tags: formData.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      readTime: Number(formData.readTime),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-white">
            Post Title
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
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="scheduled">Scheduled</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt" className="text-white">
          Excerpt
        </Label>
        <Textarea
          id="excerpt"
          value={formData.excerpt}
          onChange={(e) => setFormData((prev) => ({ ...prev, excerpt: e.target.value }))}
          className="bg-white/10 border-white/20 text-white"
          rows={3}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content" className="text-white">
          Content
        </Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
          className="bg-white/10 border-white/20 text-white"
          rows={12}
          required
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="tags" className="text-white">
            Tags (comma-separated)
          </Label>
          <Input
            id="tags"
            value={formData.tags}
            onChange={(e) => setFormData((prev) => ({ ...prev, tags: e.target.value }))}
            className="bg-white/10 border-white/20 text-white"
            placeholder="React, IoT, Tutorial"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="publishDate" className="text-white">
            Publish Date
          </Label>
          <Input
            id="publishDate"
            type="date"
            value={formData.publishDate}
            onChange={(e) => setFormData((prev) => ({ ...prev, publishDate: e.target.value }))}
            className="bg-white/10 border-white/20 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="readTime" className="text-white">
            Read Time (minutes)
          </Label>
          <Input
            id="readTime"
            type="number"
            value={formData.readTime}
            onChange={(e) => setFormData((prev) => ({ ...prev, readTime: Number(e.target.value) }))}
            className="bg-white/10 border-white/20 text-white"
            min="1"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="imageUrl" className="text-white">
          Featured Image URL
        </Label>
        <Input
          id="imageUrl"
          value={formData.imageUrl}
          onChange={(e) => setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))}
          className="bg-white/10 border-white/20 text-white"
          placeholder="https://... or /placeholder.svg?height=200&width=300"
        />
      </div>

      <div className="flex gap-4 pt-4">
        <Button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white border-0"
        >
          {post ? "Update Post" : "Create Post"}
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
