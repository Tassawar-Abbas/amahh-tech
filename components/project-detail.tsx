"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { type Project, getRelatedProjects } from "@/data/projects"

interface ProjectDetailProps {
  project: Project
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  // const [activeTab, setActiveTab] = useState("overview")
  const relatedProjects = getRelatedProjects(project.id, project.category, 3)

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/projects">
            <Button variant="ghost" className="mb-4 text-purple-400 hover:text-purple-300 hover:bg-purple-900/20">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-bold text-white"
          >
            {project.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-full bg-purple-900/30 px-3 py-1 text-sm text-purple-300">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-3 bg-white/10">
                <TabsTrigger value="overview" className="data-[state=active]:bg-white/20">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="challenges" className="data-[state=active]:bg-white/20">
                  Challenges & Solutions
                </TabsTrigger>
                <TabsTrigger value="gallery" className="data-[state=active]:bg-white/20">
                  Gallery
                </TabsTrigger>
              </TabsList> 
             
              
             
            </Tabs>*/}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="mb-8 border-none bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold text-white">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-zinc-400">Category</p>
                    <p className="text-white">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Description</p>
                    <p className="text-white">{project.description}</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Technologies</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                    {/* <Button
                      variant="outline"
                      className="flex-1 border-purple-500 text-white hover:bg-purple-500/20"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button> */}
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="mb-4 text-xl font-bold text-white">Related Projects</h3>
            <div className="space-y-4">
              {relatedProjects.map((relatedProject, index) => (
                <Link key={index} href={`/projects/${relatedProject.id}`}>
                  <Card className="border-none bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={relatedProject.image || "/placeholder.svg"}
                            alt={relatedProject.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{relatedProject.title}</h4>
                          <p className="text-sm text-zinc-400">{relatedProject.category}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
