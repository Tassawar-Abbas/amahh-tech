"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"

const categories = ["All", "Web", "Mobile", "Enterprise", "AI"]

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with inventory management and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web",
    link: "#",
    github: "#",
  },
  {
    title: "Healthcare Management System",
    description: "An integrated system for healthcare providers to manage patient records and appointments.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Enterprise",
    link: "#",
    github: "#",
  },
  {
    title: "Fitness Tracking App",
    description: "A mobile application for tracking workouts, nutrition, and health metrics.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Mobile",
    link: "#",
    github: "#",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "A dashboard that uses machine learning to provide predictive insights from business data.",
    image: "/placeholder.svg?height=600&width=800",
    category: "AI",
    link: "#",
    github: "#",
  },
  {
    title: "Real Estate Marketplace",
    description: "A platform connecting property buyers, sellers, and agents with advanced search capabilities.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web",
    link: "#",
    github: "#",
  },
  {
    title: "Supply Chain Management System",
    description: "An enterprise solution for tracking inventory, managing suppliers, and optimizing logistics.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Enterprise",
    link: "#",
    github: "#",
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="bg-white py-20 dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Our Projects</h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Explore our portfolio of successful projects that showcase our expertise and innovation
          </p>
        </motion.div>

        <Tabs defaultValue="All" className="mb-12">
          <TabsList className="mx-auto flex justify-center">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} onClick={() => setActiveCategory(category)}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="mb-4 text-zinc-600 dark:text-zinc-400">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                          <span className="sr-only">Visit Project</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button size="lg">View All Projects</Button>
        </div>
      </div>
    </section>
  )
}
