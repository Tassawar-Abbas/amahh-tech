"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ExternalLink, Github, ArrowRight, Search } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { projects } from "@/data/projects"

const categories = ["All", "Web", "Mobile", "Enterprise", "AI"]

// Custom hook for tilt effect
function useTilt(active) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    if (!ref.current || !active) return

    const card = ref.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 25
    const rotateY = (centerX - x) / 25

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    if (!ref.current || !active) return
    ref.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`
  }

  return { ref, handleMouseMove, handleMouseLeave }
}

function ProjectCard({ project, index }) {
  const isMobile = useMobile()
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(!isMobile)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Card
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-full overflow-hidden border-none bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
      >
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative h-48 w-full overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 z-20 flex w-full justify-between p-4 opacity-0 transition-all duration-300 group-hover:bottom-4 group-hover:opacity-100">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 text-white" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 text-white" />
                <span className="sr-only">Visit Project</span>
              </a>
            </Button>
          </div>
          {project.featured && (
            <div className="absolute left-0 top-0 z-20 m-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-medium text-white">
              Featured
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-purple-400">{project.title}</h3>
          <p className="mb-4 text-zinc-300">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-purple-900/30 px-3 py-1 text-sm text-purple-300">{project.category}</span>
            <Link href={`/projects/${project.id}`}>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex cursor-pointer items-center text-sm font-medium text-purple-400"
              >
                View Details
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </motion.div>
              </motion.div>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default function AllProjects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-purple-500/10" />
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-pink-500/10" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-blue-500/10" />
        <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-emerald-500/10" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Our Projects</h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-300">
            Explore our complete portfolio of successful projects that showcase our expertise and innovation
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Tabs defaultValue="All" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-5 bg-white/10">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="relative overflow-hidden data-[state=active]:bg-white/20 data-[state=active]:text-white"
                >
                  {category}
                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-purple-500"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-zinc-700 bg-white/5 text-white placeholder:text-zinc-500"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={`${activeCategory}-${project.id}-${index}`} project={project} index={index} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <p className="text-xl text-zinc-400">No projects found matching your criteria.</p>
                <Button
                  variant="link"
                  className="mt-4 text-purple-400"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategory("All")
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
