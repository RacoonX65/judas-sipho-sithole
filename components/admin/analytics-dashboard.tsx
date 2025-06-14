"use client"

import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Users, Eye, MessageSquare, Download } from "lucide-react"

export function AnalyticsDashboard() {
  const stats = [
    {
      title: "Total Visitors",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      description: "Last 30 days",
    },
    {
      title: "Page Views",
      value: "8,234",
      change: "+8.2%",
      trend: "up",
      icon: Eye,
      description: "Last 30 days",
    },
    {
      title: "Project Views",
      value: "1,456",
      change: "+15.3%",
      trend: "up",
      icon: Eye,
      description: "Last 30 days",
    },
    {
      title: "Contact Inquiries",
      value: "23",
      change: "-2.1%",
      trend: "down",
      icon: MessageSquare,
      description: "Last 30 days",
    },
    {
      title: "Resume Downloads",
      value: "89",
      change: "+25.4%",
      trend: "up",
      icon: Download,
      description: "Last 30 days",
    },
    {
      title: "Blog Engagement",
      value: "67%",
      change: "+5.2%",
      trend: "up",
      icon: TrendingUp,
      description: "Average time on page",
    },
  ]

  const topPages = [
    { page: "Home", views: 2847, percentage: 34.6 },
    { page: "Projects", views: 1923, percentage: 23.4 },
    { page: "About", views: 1456, percentage: 17.7 },
    { page: "Blog", views: 1234, percentage: 15.0 },
    { page: "Services", views: 774, percentage: 9.4 },
  ]

  const topProjects = [
    { project: "Smart Greenhouse Monitoring", views: 456, clicks: 23 },
    { project: "IoT Weather Station", views: 234, clicks: 12 },
    { project: "Home Automation System", views: 189, clicks: 8 },
    { project: "Solar Panel Monitor", views: 167, clicks: 15 },
  ]

  const recentActivity = [
    { action: "New project view", item: "Smart Greenhouse Monitoring", time: "2 minutes ago" },
    { action: "Contact form submission", item: "IoT Consultation", time: "15 minutes ago" },
    { action: "Blog post view", item: "Building IoT Solutions", time: "1 hour ago" },
    { action: "Resume download", item: "PDF Resume", time: "2 hours ago" },
    { action: "Service inquiry", item: "Web Development", time: "3 hours ago" },
  ]

  return (
    <div className="space-y-6">
      <GlassmorphicCard>
        <CardHeader>
          <CardTitle className="text-white">Analytics Overview</CardTitle>
          <CardDescription className="text-blue-200">
            Track your portfolio performance and visitor engagement
          </CardDescription>
        </CardHeader>
      </GlassmorphicCard>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <GlassmorphicCard key={stat.title}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className="h-4 w-4 text-blue-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="flex items-center gap-2">
                  <Badge
                    className={
                      stat.trend === "up"
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : "bg-red-500/20 text-red-400 border-red-500/30"
                    }
                  >
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {stat.change}
                  </Badge>
                </div>
                <p className="text-xs text-blue-300 mt-1">{stat.description}</p>
              </CardContent>
            </GlassmorphicCard>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <GlassmorphicCard>
          <CardHeader>
            <CardTitle className="text-white">Top Pages</CardTitle>
            <CardDescription className="text-blue-200">Most visited pages</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topPages.map((page) => (
              <div key={page.page} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-white font-medium">{page.page}</div>
                  <div className="text-blue-300 text-sm">{page.views} views</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-medium">{page.percentage}%</div>
                  <div className="w-20 bg-white/10 rounded-full h-2 mt-1">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-pink-600 h-2 rounded-full"
                      style={{ width: `${page.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </GlassmorphicCard>

        {/* Top Projects */}
        <GlassmorphicCard>
          <CardHeader>
            <CardTitle className="text-white">Top Projects</CardTitle>
            <CardDescription className="text-blue-200">Most viewed projects</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topProjects.map((project) => (
              <div key={project.project} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-white font-medium text-sm">{project.project}</div>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">{project.clicks} clicks</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-300">{project.views} views</span>
                  <span className="text-green-400">{((project.clicks / project.views) * 100).toFixed(1)}% CTR</span>
                </div>
              </div>
            ))}
          </CardContent>
        </GlassmorphicCard>
      </div>

      {/* Recent Activity */}
      <GlassmorphicCard>
        <CardHeader>
          <CardTitle className="text-white">Recent Activity</CardTitle>
          <CardDescription className="text-blue-200">Latest visitor interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                <div className="flex-1">
                  <div className="text-white text-sm">{activity.action}</div>
                  <div className="text-blue-300 text-xs">{activity.item}</div>
                </div>
                <div className="text-blue-400 text-xs">{activity.time}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </GlassmorphicCard>
    </div>
  )
}
