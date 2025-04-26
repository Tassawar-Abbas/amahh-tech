"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

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
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Curve parameters
    const curves = Array.from({ length: 5 }, (_, i) => ({
      amplitude: 50 + Math.random() * 80,
      period: 0.002 + Math.random() * 0.005,
      phase: Math.random() * Math.PI * 2,
      speed: 0.0005 + Math.random() * 0.001,
      y: canvas.height * (0.3 + i * 0.1),
      color: i % 2 === 0 ? "rgba(139, 92, 246, 0.15)" : "rgba(236, 72, 153, 0.15)",
      lineWidth: 2 + Math.random() * 3,
    }))

    // Animation
    let animationId: number
    let time = 0

    const animate = () => {
      time += 1
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      curves.forEach((curve) => {
        ctx.beginPath()
        ctx.strokeStyle = curve.color
        ctx.lineWidth = curve.lineWidth

        for (let x = 0; x < canvas.width; x += 5) {
          const y =
            curve.y +
            curve.amplitude *
              Math.sin(x * curve.period + curve.phase + time * curve.speed) *
              Math.sin(x * curve.period * 0.5 + time * curve.speed * 0.5)

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Canvas for flowing curves animation */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ pointerEvents: "none" }} aria-hidden="true" />

      {/* Animated tech background */}
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
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter text-white md:text-6xl lg:text-7xl">
            Transforming Ideas Into{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h1>
          <p className="mb-8 text-xl text-zinc-300 md:text-2xl">
            We build innovative software solutions that drive business growth and enhance user experiences
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg" className="border-purple-500 text-white hover:bg-purple-500/20">
                View Projects
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
