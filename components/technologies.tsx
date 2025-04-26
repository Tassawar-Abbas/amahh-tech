"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "GraphQL", category: "API" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "TensorFlow", category: "AI" },
  { name: "Kubernetes", category: "DevOps" },
]

function getColorByCategory(category) {
  const colors = {
    Frontend: "bg-purple-500",
    Backend: "bg-blue-500",
    Language: "bg-pink-500",
    Database: "bg-emerald-500",
    Cloud: "bg-amber-500",
    DevOps: "bg-red-500",
    API: "bg-indigo-500",
    AI: "bg-violet-500",
  }
  return colors[category] || "bg-gray-500"
}

export default function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="technologies" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">Technologies</h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-300">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions
          </p>
        </motion.div>

        <div ref={ref} className="mx-auto max-w-6xl">
          {isInView && (
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 rounded-lg bg-white/5 p-4 shadow-md backdrop-blur-sm"
                >
                  <div className={`h-3 w-3 rounded-full ${getColorByCategory(tech.category)}`}></div>
                  <span className="font-medium text-white">{tech.name}</span>
                  <span className="ml-auto text-xs text-zinc-400">{tech.category}</span>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="mx-auto max-w-3xl text-lg text-zinc-300">
            Our team stays at the forefront of technological advancements, continuously learning and adopting new tools
            and frameworks to deliver the best solutions for our clients.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
