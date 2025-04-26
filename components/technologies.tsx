"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text3D, Float, Environment } from "@react-three/drei"

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

function TechCloud() {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      {technologies.map((tech, i) => (
        <Float key={i} speed={1} rotationIntensity={1} floatIntensity={2}>
          <Text3D
            font="/fonts/Inter_Bold.json"
            position={[(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15]}
            size={1.5}
            height={0.2}
            curveSegments={12}
          >
            {tech.name}
            <meshStandardMaterial color={getColorByCategory(tech.category)} />
          </Text3D>
        </Float>
      ))}
    </Canvas>
  )
}

function getColorByCategory(category) {
  const colors = {
    Frontend: "#8b5cf6", // Purple
    Backend: "#3b82f6", // Blue
    Language: "#ec4899", // Pink
    Database: "#10b981", // Green
    Cloud: "#f59e0b", // Amber
    DevOps: "#ef4444", // Red
    API: "#6366f1", // Indigo
    AI: "#8b5cf6", // Purple
  }
  return colors[category] || "#6b7280" // Default gray
}

export default function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="technologies" className="bg-zinc-100 py-20 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Technologies</h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions
          </p>
        </motion.div>

        <div ref={ref} className="h-[600px] w-full">
          {isInView && <TechCloud />}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="mx-auto max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            Our team stays at the forefront of technological advancements, continuously learning and adopting new tools
            and frameworks to deliver the best solutions for our clients.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
