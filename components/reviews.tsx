"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Working with this team was an absolute pleasure. They delivered our project on time and exceeded our expectations in terms of quality and functionality.",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Innovate Solutions",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The mobile app they developed for us has received outstanding feedback from our users. Their attention to detail and user experience expertise is unmatched.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Global Retail Group",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "They transformed our outdated systems into a modern, efficient platform. Their team was responsive, professional, and truly understood our business needs.",
  },
  {
    id: 4,
    name: "David Kim",
    company: "HealthTech Solutions",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The custom healthcare solution they built has streamlined our operations and improved patient care. Their expertise in both technology and healthcare was invaluable.",
  },
  {
    id: 5,
    name: "Lisa Patel",
    company: "Finance Direct",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Their cybersecurity services have given us peace of mind. They identified vulnerabilities we weren't aware of and implemented robust protection measures.",
  },
]

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="reviews" className="bg-gradient-to-r from-purple-900 to-indigo-900 py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Client Reviews</h2>
          <p className="mx-auto max-w-2xl text-lg text-purple-200">
            Don't just take our word for it. Here's what our clients have to say about working with us
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <Avatar className="h-16 w-16 border-2 border-purple-300">
                    <AvatarImage
                      src={reviews[activeIndex].avatar || "/placeholder.svg"}
                      alt={reviews[activeIndex].name}
                    />
                    <AvatarFallback>{reviews[activeIndex].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">{reviews[activeIndex].name}</h3>
                    <p className="text-purple-300">{reviews[activeIndex].company}</p>
                    <div className="mt-1 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < reviews[activeIndex].rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-lg italic text-purple-100">"{reviews[activeIndex].text}"</blockquote>
              </CardContent>
            </Card>
          </motion.div>

          <div className="mt-8 flex justify-center gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full ${
                  index === activeIndex ? "bg-white" : "bg-white/30"
                } transition-all duration-300`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
