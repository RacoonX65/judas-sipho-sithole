"use client"
import { useState, useEffect } from "react"
import type React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { ParticlesBackground } from "@/components/particles-background"
import { Lock, User, AlertCircle, Settings, ExternalLink } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { signIn, user, isAdmin, isConfigured } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user && isAdmin) {
      router.push("/admin/dashboard")
    }
  }, [user, isAdmin, router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const { error } = await signIn(email, password)

    if (error) {
      setError(error.message)
    } else {
      // Check if user is admin after successful login
      if (isAdmin) {
        router.push("/admin/dashboard")
      } else {
        setError("Access denied. Admin privileges required.")
      }
    }

    setLoading(false)
  }

  if (!isConfigured) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900 flex items-center justify-center">
        <ParticlesBackground />

        <div className="relative z-10 w-full max-w-2xl p-6">
          <GlassmorphicCard className="p-8">
            <div className="text-center mb-8">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Setup Required</h1>
              <p className="text-blue-200">Configure Supabase to enable admin functionality</p>
            </div>

            <div className="space-y-6">
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-yellow-400" />
                  <h3 className="text-yellow-400 font-semibold">Supabase Not Configured</h3>
                </div>
                <p className="text-yellow-200 text-sm">
                  To enable real admin functionality, you need to set up Supabase integration.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-semibold">Setup Steps:</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <p className="text-white font-medium">Create Supabase Project</p>
                      <p className="text-blue-200 text-sm">Go to supabase.com and create a new project</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <p className="text-white font-medium">Add Environment Variables</p>
                      <div className="bg-slate-800/50 rounded-md p-3 mt-2 font-mono text-sm">
                        <p className="text-green-400">NEXT_PUBLIC_SUPABASE_URL=your_project_url</p>
                        <p className="text-green-400">NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <p className="text-white font-medium">Run Database Scripts</p>
                      <p className="text-blue-200 text-sm">Execute the SQL scripts to create tables</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <p className="text-white font-medium">Create Admin User</p>
                      <p className="text-blue-200 text-sm">Set up your admin account in Supabase Auth</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => window.open("https://supabase.com", "_blank")}
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:opacity-90 text-white border-0"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Go to Supabase
                </Button>
                <Button
                  onClick={() => router.push("/")}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Back to Portfolio
                </Button>
              </div>

              <div className="text-center">
                <p className="text-blue-300 text-sm">Once configured, refresh this page to access the admin panel</p>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900 flex items-center justify-center">
      <ParticlesBackground />

      <div className="relative z-10 w-full max-w-md p-6">
        <GlassmorphicCard className="p-8">
          <div className="text-center mb-8">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
            <p className="text-blue-200">Sign in with your Supabase account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-300" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-300" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-300"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-md p-3">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white border-0"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-blue-300 text-sm">Need access? Contact the administrator.</p>
          </div>
        </GlassmorphicCard>
      </div>
    </div>
  )
}
