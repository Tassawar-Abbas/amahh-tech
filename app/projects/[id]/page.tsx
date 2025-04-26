import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProjectDetail from "@/components/project-detail"
import { getProjectById } from "@/data/projects"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = getProjectById(params.id)

  if (!project) {
    return {
      title: "Project Not Found | Amahh",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} | Amahh Projects`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24">
      <ProjectDetail project={project} />
    </main>
  )
}
