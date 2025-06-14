"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.push("/admin/login")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900">
      <div className="text-white text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Admin...</h1>
        <p>
          If you're not redirected,{" "}
          <a href="/admin/login" className="text-orange-400 underline">
            click here
          </a>
        </p>
      </div>
    </div>
  )
}
