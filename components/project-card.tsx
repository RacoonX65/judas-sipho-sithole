import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
}

export function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
  return (
    <Link href="#" className="block group">
      <GlassmorphicCard className="overflow-hidden h-full hover:border-orange-400/50 transition-all duration-500">
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent z-10"></div>
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-blue-100">{description}</p>
          </div>
        </div>
        <div className="p-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} className="bg-white/10 text-white hover:bg-white/20">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="text-orange-400 group-hover:text-orange-300 transition-colors flex items-center gap-1">
            <span>View Project</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </GlassmorphicCard>
    </Link>
  )
}
