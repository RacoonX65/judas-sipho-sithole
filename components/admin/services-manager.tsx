"use client"

import type React from "react"

import { useState } from "react"
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
import { PlusCircle, Edit, Trash2, Save, DollarSign } from "lucide-react"

interface Service {
  id: string
  title: string
  description: string
  features: string[]
  price: string
  duration: string
  category: "electrical" | "software" | "iot" | "consulting"
  active: boolean
}

export function ServicesManager() {
  const [services, setServices] = useState<Service[]>([
    {
      id: "1",
      title: "IoT System Development",
      description: "Complete IoT solution development from hardware design to web application",
      features: ["Hardware Design", "Sensor Integration", "Real-time Dashboard", "Mobile App", "Cloud Integration"],
      price: "R15,000 - R50,000",
      duration: "4-8 weeks",
      category: "iot",
      active: true,
    },
    {
      id: "2",
      title: "Electrical System Design",
      description: "Professional electrical system design and consultation services",
      features: ["Circuit Design", "Load Calculations", "Safety Analysis", "Documentation", "Compliance Check"],
      price: "R5,000 - R20,000",
      duration: "2-4 weeks",
      category: "electrical",
      active: true,
    },
    {
      id: "3",
      title: "Web Application Development",
      description: "Modern web applications using React, Node.js, and cloud technologies",
      features: ["Responsive Design", "Database Integration", "API Development", "Deployment", "Maintenance"],
      price: "R10,000 - R30,000",
      duration: "3-6 weeks",
      category: "software",
      active: true,
    },
  ])

  const [editingService, setEditingService] = useState<Service | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSaveService = (serviceData: Partial<Service>) => {
    if (editingService) {
      setServices((prev) => prev.map((s) => (s.id === editingService.id ? { ...s, ...serviceData } : s)))
    } else {
      const newService: Service = {
        id: Date.now().toString(),
        title: serviceData.title || "",
        description: serviceData.description || "",
        features: serviceData.features || [],
        price: serviceData.price || "",
        duration: serviceData.duration || "",
        category: serviceData.category || "software",
        active: serviceData.active ?? true,
      }
      setServices((prev) => [...prev, newService])
    }
    setEditingService(null)
    setIsDialogOpen(false)
  }

  const handleDeleteService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id))
  }

  const toggleServiceStatus = (id: string) => {
    setServices((prev) => prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s)))
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "software":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "electrical":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      case "iot":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "consulting":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <div className="space-y-6">
      <GlassmorphicCard>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white">Services Management</CardTitle>
              <CardDescription className="text-blue-200">
                Manage your professional services and offerings
              </CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 text-white border-0"
                  onClick={() => setEditingService(null)}
                >
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Service
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-slate-900/95 border-white/20">
                <DialogHeader>
                  <DialogTitle className="text-white">
                    {editingService ? "Edit Service" : "Add New Service"}
                  </DialogTitle>
                  <DialogDescription className="text-blue-200">
                    {editingService ? "Update service details" : "Create a new service offering"}
                  </DialogDescription>
                </DialogHeader>
                <ServiceForm
                  service={editingService}
                  onSave={handleSaveService}
                  onCancel={() => setIsDialogOpen(false)}
                />
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
      </GlassmorphicCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <GlassmorphicCard key={service.id}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-white text-lg mb-2">{service.title}</CardTitle>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getCategoryColor(service.category)}>{service.category}</Badge>
                    <Badge
                      variant={service.active ? "default" : "secondary"}
                      className={
                        service.active
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                      }
                    >
                      {service.active ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => toggleServiceStatus(service.id)}
                    className="text-blue-400 hover:text-white hover:bg-white/10"
                  >
                    {service.active ? "Deactivate" : "Activate"}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      setEditingService(service)
                      setIsDialogOpen(true)
                    }}
                    className="text-blue-400 hover:text-white hover:bg-white/10"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDeleteService(service.id)}
                    className="text-red-400 hover:text-white hover:bg-red-500/20"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 text-sm mb-4">{service.description}</p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-green-400">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm font-medium">{service.price}</span>
                </div>
                <div className="text-blue-300 text-sm">Duration: {service.duration}</div>
              </div>

              <div className="space-y-2">
                <h4 className="text-white text-sm font-medium">Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-blue-200 text-xs flex items-center gap-2">
                      <div className="w-1 h-1 bg-orange-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </GlassmorphicCard>
        ))}
      </div>
    </div>
  )
}

function ServiceForm({
  service,
  onSave,
  onCancel,
}: {
  service: Service | null
  onSave: (data: Partial<Service>) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState({
    title: service?.title || "",
    description: service?.description || "",
    features: service?.features.join(", ") || "",
    price: service?.price || "",
    duration: service?.duration || "",
    category: service?.category || "software",
    active: service?.active ?? true,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      ...formData,
      features: formData.features
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-white">
            Service Title
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
          <Label htmlFor="category" className="text-white">
            Category
          </Label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value as any }))}
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
          >
            <option value="software">Software</option>
            <option value="electrical">Electrical</option>
            <option value="iot">IoT</option>
            <option value="consulting">Consulting</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-white">
          Description
        </Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
          className="bg-white/10 border-white/20 text-white"
          rows={3}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="features" className="text-white">
          Features (comma-separated)
        </Label>
        <Textarea
          id="features"
          value={formData.features}
          onChange={(e) => setFormData((prev) => ({ ...prev, features: e.target.value }))}
          className="bg-white/10 border-white/20 text-white"
          rows={3}
          placeholder="Feature 1, Feature 2, Feature 3"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price" className="text-white">
            Price Range
          </Label>
          <Input
            id="price"
            value={formData.price}
            onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))}
            className="bg-white/10 border-white/20 text-white"
            placeholder="R5,000 - R20,000"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="duration" className="text-white">
            Duration
          </Label>
          <Input
            id="duration"
            value={formData.duration}
            onChange={(e) => setFormData((prev) => ({ ...prev, duration: e.target.value }))}
            className="bg-white/10 border-white/20 text-white"
            placeholder="2-4 weeks"
            required
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="active"
          checked={formData.active}
          onChange={(e) => setFormData((prev) => ({ ...prev, active: e.target.checked }))}
          className="rounded border-white/20"
        />
        <Label htmlFor="active" className="text-white">
          Active Service
        </Label>
      </div>

      <div className="flex gap-4 pt-4">
        <Button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 text-white border-0"
        >
          <Save className="h-4 w-4 mr-2" />
          {service ? "Update Service" : "Create Service"}
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
