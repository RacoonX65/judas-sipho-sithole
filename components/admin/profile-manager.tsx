"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Save, Upload } from "lucide-react"

export function ProfileManager() {
  const [profileData, setProfileData] = useState({
    name: "Judas Sipho Sithole",
    title: "Electrical Engineer & Software Developer",
    bio: "BEng Tech in Electrical Engineering from the University of Johannesburg, specializing in IoT, Software Engineering, and Machine Learning. Passionate about bridging the gap between electrical engineering and software development.",
    email: "judas@example.com",
    phone: "+27 123 456 789",
    location: "Johannesburg, South Africa",
    website: "https://judassithole.com",
    linkedin: "https://linkedin.com/in/judassithole",
    github: "https://github.com/judassithole",
    twitter: "https://twitter.com/judassithole",
    profileImage: "/placeholder.svg?height=200&width=200",
    resumeUrl: "/resume.pdf",
    yearsOfExperience: "3",
    currentRole: "Electrical Engineer & Software Developer",
    company: "Freelance",
    education: "BEng Tech Electrical Engineering - University of Johannesburg",
    certifications: "AWS Certified Developer, Google Cloud Professional",
  })

  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    // Show success message
    alert("Profile updated successfully!")
  }

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <GlassmorphicCard>
        <CardHeader>
          <CardTitle className="text-white">Profile Management</CardTitle>
          <CardDescription className="text-blue-200">
            Update your personal information and professional details
          </CardDescription>
        </CardHeader>
      </GlassmorphicCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Image Section */}
        <GlassmorphicCard>
          <CardHeader>
            <CardTitle className="text-white text-lg">Profile Image</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <img
                  src={profileData.profileImage || "/placeholder.svg"}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-white/20"
                />
                <Button
                  size="sm"
                  className="absolute bottom-0 right-0 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90"
                >
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
              <Input
                value={profileData.profileImage}
                onChange={(e) => handleInputChange("profileImage", e.target.value)}
                className="bg-white/10 border-white/20 text-white text-sm"
                placeholder="Image URL"
              />
            </div>
          </CardContent>
        </GlassmorphicCard>

        {/* Basic Information */}
        <div className="lg:col-span-2 space-y-6">
          <GlassmorphicCard>
            <CardHeader>
              <CardTitle className="text-white text-lg">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-white">
                    Professional Title
                  </Label>
                  <Input
                    id="title"
                    value={profileData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio" className="text-white">
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  value={profileData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  className="bg-white/10 border-white/20 text-white"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-white">
                    Location
                  </Label>
                  <Input
                    id="location"
                    value={profileData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-white">
                    Website
                  </Label>
                  <Input
                    id="website"
                    value={profileData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>
            </CardContent>
          </GlassmorphicCard>

          <GlassmorphicCard>
            <CardHeader>
              <CardTitle className="text-white text-lg">Social Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="text-white">
                    LinkedIn
                  </Label>
                  <Input
                    id="linkedin"
                    value={profileData.linkedin}
                    onChange={(e) => handleInputChange("linkedin", e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="github" className="text-white">
                    GitHub
                  </Label>
                  <Input
                    id="github"
                    value={profileData.github}
                    onChange={(e) => handleInputChange("github", e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter" className="text-white">
                  Twitter
                </Label>
                <Input
                  id="twitter"
                  value={profileData.twitter}
                  onChange={(e) => handleInputChange("twitter", e.target.value)}
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
            </CardContent>
          </GlassmorphicCard>

          <GlassmorphicCard>
            <CardHeader>
              <CardTitle className="text-white text-lg">Professional Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currentRole" className="text-white">
                    Current Role
                  </Label>
                  <Input
                    id="currentRole"
                    value={profileData.currentRole}
                    onChange={(e) => handleInputChange("currentRole", e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">
                    Company
                  </Label>
                  <Input
                    id="company"
                    value={profileData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="education" className="text-white">
                  Education
                </Label>
                <Input
                  id="education"
                  value={profileData.education}
                  onChange={(e) => handleInputChange("education", e.target.value)}
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="certifications" className="text-white">
                  Certifications
                </Label>
                <Textarea
                  id="certifications"
                  value={profileData.certifications}
                  onChange={(e) => handleInputChange("certifications", e.target.value)}
                  className="bg-white/10 border-white/20 text-white"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="yearsOfExperience" className="text-white">
                    Years of Experience
                  </Label>
                  <Input
                    id="yearsOfExperience"
                    value={profileData.yearsOfExperience}
                    onChange={(e) => handleInputChange("yearsOfExperience", e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resumeUrl" className="text-white">
                    Resume URL
                  </Label>
                  <Input
                    id="resumeUrl"
                    value={profileData.resumeUrl}
                    onChange={(e) => handleInputChange("resumeUrl", e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>
            </CardContent>
          </GlassmorphicCard>

          <div className="flex justify-end">
            <Button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-gradient-to-r from-green-500 to-teal-600 hover:opacity-90 text-white border-0"
            >
              <Save className="h-4 w-4 mr-2" />
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
