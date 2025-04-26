import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProjectNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="mb-4 text-4xl font-bold text-white">Project Not Found</h1>
      <p className="mb-8 text-lg text-zinc-300">The project you're looking for doesn't exist or has been removed.</p>
      <Link href="/projects">
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          View All Projects
        </Button>
      </Link>
    </div>
  )
}
