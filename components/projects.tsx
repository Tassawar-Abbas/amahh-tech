"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { projects as allProjects } from "@/data/projects"

const categories = ["All", "Web", "Mobile", "Enterprise", "AI"]

function useTilt(enabled: boolean) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!enabled || !ref.current) return

    const card = ref.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = (y - rect.height / 2) / 20
    const rotateY = (rect.width / 2 - x) / 20

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`
    }
  }

  useEffect(() => {
    const card = ref.current
    if (!enabled || !card) return

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [enabled])

  return { ref }
}

function ProjectCard({ project, index, inView }: { project: any, index: number, inView: boolean }) {
  const isMobile = useMobile()
  const { ref } = useTilt(!isMobile)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setVisible(true), index * 250)
      return () => clearTimeout(timer)
    }
  }, [inView, index])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group"
    >
      <Card
        ref={ref}
        className="relative h-full overflow-hidden border-none bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10"
      >
        <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {project.featured && (
            <div className="absolute top-4 left-4 z-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-semibold text-white">
              Featured
            </div>
          )}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.github && (
              <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/20 backdrop-blur-md" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 text-white" />
                </a>
              </Button>
            )}
            {project.link && (
              <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/20 backdrop-blur-md" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 text-white" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="mb-4 text-sm text-zinc-300">{project.description}</p>
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-purple-900/40 px-3 py-1 text-xs text-purple-300">{project.category}</span>
            <Link href={`/projects/${project.id}`}>
              <motion.div whileHover={{ x: 5 }} className="flex items-center text-sm font-medium text-purple-400">
                View Details
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
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

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  const displayedProjects = allProjects.slice(0, 6)

  const filteredProjects =
    activeCategory === "All"
      ? displayedProjects
      : displayedProjects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="relative overflow-hidden py-20">
      {/* Background Gradient Circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-purple-500/10" />
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-pink-500/10" />
        <div className="absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-blue-500/10" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-emerald-500/10" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Our Creations at Amāhh
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Dive into our portfolio — blending imagination, innovation, and impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex justify-center"
        >
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
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${activeCategory}-${index}`} project={project} index={index} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Link href="/projects">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              View Full Portfolio
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
