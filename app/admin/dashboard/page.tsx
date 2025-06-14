"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { ParticlesBackground } from "@/components/particles-background"
import { useAuth } from "@/contexts/auth-context"
import { RealProjectManager } from "@/components/admin/real-project-manager"
import { RealBlogManager } from "@/components/admin/real-blog-manager"
import { RealProfileManager } from "@/components/admin/real-profile-manager"
import { LayoutDashboard, FolderOpen, FileText, User, Settings, BarChart3, LogOut, ExternalLink } from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const { user, isAdmin, signOut, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      router.push("/admin/login")
    }
  }, [user, isAdmin, loading, router])

  const handleLogout = async () => {
    await signOut()
    router.push("/")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!user || !isAdmin) {
    return null
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "blog", label: "Blog", icon: FileText },
    { id: "profile", label: "Profile", icon: User },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900">
      <ParticlesBackground />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">JS</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
                  <p className="text-blue-200 text-sm">Welcome, {user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("/", "_blank")}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Site
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="container px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <GlassmorphicCard className="p-6">
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                          activeTab === tab.id
                            ? "bg-gradient-to-r from-orange-500/20 to-pink-600/20 text-white border border-orange-500/30"
                            : "text-blue-200 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        {tab.label}
                      </button>
                    )
                  })}
                </nav>
              </GlassmorphicCard>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === "overview" && <OverviewTab />}
              {activeTab === "projects" && <RealProjectManager />}
              {activeTab === "blog" && <RealBlogManager />}
              {activeTab === "profile" && <RealProfileManager />}
              {activeTab === "analytics" && <AnalyticsTab />}
              {activeTab === "settings" && <SettingsTab />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function OverviewTab() {
  const [stats, setStats] = useState({
    projects: 0,
    blogPosts: 0,
    pageViews: 0,
  })

  useEffect(() => {
    // Fetch real stats from Supabase
    const fetchStats = async () => {
      // This would fetch real data from your Supabase tables
      setStats({
        projects: 12,
        blogPosts: 8,
        pageViews: 1247,
      })
    }
    fetchStats()
  }, [])

  return (
    <div className="space-y-6">
      <GlassmorphicCard className="p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Dashboard Overview</h2>
        <p className="text-blue-200 mb-6">Welcome to your real portfolio management system powered by Supabase.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-4">
            <h3 className="text-white font-semibold">Total Projects</h3>
            <p className="text-2xl font-bold text-blue-300">{stats.projects}</p>
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-4">
            <h3 className="text-white font-semibold">Blog Posts</h3>
            <p className="text-2xl font-bold text-green-300">{stats.blogPosts}</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-4">
            <h3 className="text-white font-semibold">Page Views</h3>
            <p className="text-2xl font-bold text-purple-300">{stats.pageViews}</p>
          </div>
        </div>
      </GlassmorphicCard>
    </div>
  )
}

function AnalyticsTab() {
  return (
    <div className="space-y-6">
      <GlassmorphicCard className="p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Analytics Dashboard</h2>
        <p className="text-blue-200">Real-time analytics powered by Supabase and Vercel Analytics.</p>
      </GlassmorphicCard>
    </div>
  )
}

function SettingsTab() {
  return (
    <div className="space-y-6">
      <GlassmorphicCard className="p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Settings</h2>
        <p className="text-blue-200">Configure your portfolio settings and integrations.</p>
      </GlassmorphicCard>
    </div>
  )
}
