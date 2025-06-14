import { useEffect, useState } from 'react'
import { supabase, type Skill } from '@/lib/supabase'

export function useSkills() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSkills() {
      try {
        const { data, error } = await supabase
          .from('skills')
          .select('*')
          .order('level', { ascending: false })

        if (error) throw error

        setSkills(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  return { skills, loading, error }
}

export function useSkillsByCategory() {
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, Skill[]>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSkillsByCategory() {
      try {
        const { data, error } = await supabase
          .from('skills')
          .select('*')
          .order('level', { ascending: false })

        if (error) throw error

        // Group skills by category
        const grouped = (data || []).reduce((acc, skill) => {
          const category = skill.category
          if (!acc[category]) {
            acc[category] = []
          }
          acc[category].push(skill)
          return acc
        }, {} as Record<string, Skill[]>)

        setSkillsByCategory(grouped)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchSkillsByCategory()
  }, [])

  return { skillsByCategory, loading, error }
} 