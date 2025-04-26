"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const categories = ["All", "Web", "Mobile", "Enterprise", "AI"]

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with inventory management and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Healthcare Management System",
    description: "An integrated system for healthcare providers to manage patient records and appointments.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Enterprise",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Fitness Tracking App",
    description: "A mobile application for tracking workouts, nutrition, and health metrics.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Mobile",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "A dashboard that uses machine learning to provide predictive insights from business data.",
    image: "/placeholder.svg?height=600&width=800",
    category: "AI",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Real Estate Marketplace",
    description: "A platform connecting property buyers, sellers, and agents with advanced search capabilities.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Supply Chain Management System",
    description: "An enterprise solution for tracking inventory, managing suppliers, and optimizing logistics.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Enterprise",
    link: "#",
    github: "#",
    featured: false,
  },
]

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Card
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-full overflow-hidden border-none bg-white transition-all duration-300 dark:bg-zinc-800"
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
          <h3 className="mb-2 text-xl font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400">
            {project.title}
          </h3>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">{project.description}</p>
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              {project.category}
            </span>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex cursor-pointer items-center text-sm font-medium text-purple-600 dark:text-purple-400"
            >
              View Details
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                <ArrowRight className="ml-1 h-4 w-4" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="relative overflow-hidden bg-white py-20 dark:bg-zinc-950">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-purple-500/5" />
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-pink-500/5" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-blue-500/5" />
        <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-emerald-500/5" />
      </div>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex justify-center"
        >
          <Tabs defaultValue="All" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="relative overflow-hidden"
                >
                  {category}
                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-purple-600"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={`${activeCategory}-${index}`} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
