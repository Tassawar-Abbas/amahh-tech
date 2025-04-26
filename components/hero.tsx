"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Simplified tech icons
const techIcons = [
  { name: "AI", delay: 0 },
  { name: "ML", delay: 0.2 },
  { name: "Data", delay: 0.4 },
  { name: "Cloud", delay: 0.6 },
  { name: "IoT", delay: 0.8 },
  { name: "AR", delay: 1 },
  { name: "VR", delay: 1.2 },
  { name: "Blockchain", delay: 1.4 },
]

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black to-zinc-900 text-white">
      {/* Simplified animated tech background */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {techIcons.map((tech, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{
                x: `${Math.random() * 80 + 10}%`,
                y: `${Math.random() * 80 + 10}%`,
                opacity: 0,
              }}
              animate={{
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: tech.delay * 2,
              }}
            >
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-purple-500/20 p-4 backdrop-blur-sm">
                  <div className="h-12 w-12 rounded-full bg-purple-500/50" />
                </div>
                <span className="mt-2 rounded-full bg-purple-900/50 px-3 py-1 text-sm font-bold backdrop-blur-sm">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simplified particles */}
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute h-2 w-2 rounded-full bg-purple-500"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
            Transforming Ideas Into <span className="text-purple-500">Digital Reality</span>
          </h1>
          <p className="mb-8 text-xl text-zinc-300 md:text-2xl">
            We build innovative software solutions that drive business growth and enhance user experiences
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Our Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Projects
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div
          className="flex cursor-pointer flex-col items-center"
          onClick={() => {
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <p className="mb-2 text-sm text-zinc-400">Scroll to explore</p>
          <div className="h-8 w-5 rounded-full border-2 border-zinc-400 p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="h-1 w-1 rounded-full bg-zinc-400"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
