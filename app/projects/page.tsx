import type { Metadata } from "next"
import AllProjects from "@/components/all-projects"

export const metadata: Metadata = {
  title: "All Projects | Amahh - Innovative Software Solutions",
  description: "Explore our complete portfolio of successful projects that showcase our expertise and innovation",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24">
      <AllProjects />
    </main>
  )
}
