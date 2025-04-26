"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
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
  {
    id: 6,
    name: "James Wilson",
    company: "Creative Studios",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The website redesign exceeded all our expectations. Our conversion rate has increased by 40% since launch, and customer feedback has been overwhelmingly positive.",
  },
  {
    id: 7,
    name: "Sophia Martinez",
    company: "EduTech Innovations",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "Their team developed an e-learning platform that has transformed how we deliver training. The intuitive interface and robust features have received praise from all our users.",
  },
]

function ReviewCard({ review }) {
  return (
    <Card className="h-full min-w-[300px] max-w-[350px] border-none bg-white/5 p-6 backdrop-blur-md">
      <div className="mb-6 flex items-center gap-4">
        <Avatar className="h-14 w-14 border-2 border-purple-400">
          <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
          <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold text-white">{review.name}</h3>
          <p className="text-purple-300">{review.company}</p>
          <div className="mt-1 flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < review.rating ? "fill-purple-400 text-purple-400" : "text-gray-600"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <blockquote className="text-zinc-300">"{review.text}"</blockquote>
    </Card>
  )
}

export default function Reviews() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const controls = useAnimation()

  // Calculate the total width of all cards plus gap
  const totalWidth = reviews.length * 380 // 350px card width + 30px gap
  const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1200
  const scrollDistance = totalWidth - viewportWidth + 100 // Extra padding

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: -scrollDistance,
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        },
      })
    } else {
      controls.stop()
    }
  }, [isInView, controls, scrollDistance])

  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">Client Reviews</h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-300">
            Don't just take our word for it. Here's what our clients have to say about working with us
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient fade effect on edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#1a103a] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#1a2045] to-transparent" />

          <div ref={containerRef} className="overflow-visible py-8">
            <motion.div className="flex gap-8" animate={controls} initial={{ x: 0 }}>
              {/* Duplicate reviews for infinite scroll effect */}
              {[...reviews, ...reviews].map((review, index) => (
                <motion.div
                  key={`${review.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <ReviewCard review={review} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
