"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

// Technology icons that will animate
const techIcons = [
  { name: "AI", icon: "/placeholder.svg?height=80&width=80", delay: 0 },
  { name: "ML", icon: "/placeholder.svg?height=80&width=80", delay: 0.2 },
  { name: "Data", icon: "/placeholder.svg?height=80&width=80", delay: 0.4 },
  { name: "Cloud", icon: "/placeholder.svg?height=80&width=80", delay: 0.6 },
  { name: "IoT", icon: "/placeholder.svg?height=80&width=80", delay: 0.8 },
  { name: "AR", icon: "/placeholder.svg?height=80&width=80", delay: 1 },
  { name: "VR", icon: "/placeholder.svg?height=80&width=80", delay: 1.2 },
  { name: "Blockchain", icon: "/placeholder.svg?height=80&width=80", delay: 1.4 },
]

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black to-zinc-900 text-white">
      {/* Animated tech background */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {techIcons.map((tech, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{
                x: Math.random() * 100 - 50 + "%",
                y: Math.random() * 100 - 50 + "%",
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
                y: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
                opacity: [0, 1, 0.8, 1, 0],
                scale: [0.5, 1.2, 1, 1.5, 0.5],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: tech.delay * 3,
                ease: "easeInOut",
              }}
            >
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-purple-500/20 p-4 backdrop-blur-sm">
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    width={80}
                    height={80}
                    className="h-12 w-12 opacity-80"
                  />
                </div>
                <motion.span
                  className="mt-2 rounded-full bg-purple-900/50 px-3 py-1 text-sm font-bold backdrop-blur-sm"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(139, 92, 246, 0.5)",
                      "0 0 20px rgba(139, 92, 246, 0.8)",
                      "0 0 0px rgba(139, 92, 246, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {tech.name}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI network lines */}
        <svg className="absolute inset-0 h-full w-full opacity-20">
          <motion.path
            d="M0,100 Q250,50 500,100 T1000,100"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          />
          <motion.path
            d="M0,200 Q250,150 500,200 T1000,200"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 0.5 }}
          />
          <motion.path
            d="M0,300 Q250,250 500,300 T1000,300"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 1 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        {/* Animated particles */}
        {Array.from({ length: 50 }).map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute h-2 w-2 rounded-full bg-purple-500"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
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
