import { createClient } from "@supabase/supabase-js"

// Check if Supabase is configured
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create a mock client if Supabase isn't configured
let supabase: any

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
  // Mock Supabase client for development
  console.warn("Supabase not configured. Using mock client for development.")
  supabase = {
    auth: {
      getSession: () => Promise.resolve({ data: { session: null } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signInWithPassword: () => Promise.resolve({ error: { message: "Supabase not configured" } }),
      signOut: () => Promise.resolve(),
    },
    from: () => ({
      select: () => ({ order: () => Promise.resolve({ data: [], error: null }) }),
      insert: () => Promise.resolve({ error: { message: "Supabase not configured" } }),
      update: () => ({ eq: () => Promise.resolve({ error: { message: "Supabase not configured" } }) }),
      delete: () => ({ eq: () => Promise.resolve({ error: { message: "Supabase not configured" } }) }),
    }),
  }
}

export { supabase }

// Database types
export interface Project {
  id: string
  title: string
  description: string
  long_description?: string
  technologies: string[]
  status: "active" | "completed" | "in-progress"
  github_url?: string
  live_url?: string
  image_url: string
  featured: boolean
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  tags: string[]
  status: "published" | "draft" | "scheduled"
  publish_date: string
  read_time: number
  image_url: string
  created_at: string
  updated_at: string
}

export interface Profile {
  id: string
  name: string
  title: string
  bio: string
  email: string
  phone?: string
  location?: string
  website?: string
  linkedin?: string
  github?: string
  twitter?: string
  profile_image?: string
  resume_url?: string
  years_of_experience: number
  current_role: string
  company: string
  education: string
  certifications?: string
  updated_at: string
}

export interface Skill {
  id: string
  name: string
  category: "technical" | "electrical" | "software" | "tools"
  level: number
  years_of_experience: number
  created_at: string
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  price: string
  duration: string
  category: "electrical" | "software" | "iot" | "consulting"
  active: boolean
  created_at: string
  updated_at: string
}

// Helper function to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return !!(supabaseUrl && supabaseAnonKey)
}
