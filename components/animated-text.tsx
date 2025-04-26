"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
  showCursor?: boolean
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  speed = 0.05,
  showCursor = true,
}: AnimatedTextProps) {
  const [isInView, setIsInView] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Start animation after the specified delay
    const timer = setTimeout(() => {
      setIsInView(true)
    }, delay)

    // Set complete after all letters have been displayed
    const completeTimer = setTimeout(
      () => {
        setIsComplete(true)
      },
      delay + text.length * speed * 1000 + 500,
    )

    return () => {
      clearTimeout(timer)
      clearTimeout(completeTimer)
    }
  }, [delay, text.length, speed])

  // Create an array of letter objects with their own animation delays
  const letters = text.split("").map((char, index) => ({
    char,
    delay: index * speed,
  }))

  return (
    <span className={`relative ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2, delay: letter.delay }}
          className="inline-block"
        >
          {letter.char === " " ? "\u00A0" : letter.char}
        </motion.span>
      ))}

      {showCursor && (
        <motion.span
          className="inline-block w-0.5 h-4 bg-purple-400 ml-0.5 align-middle"
          initial={{ opacity: 1 }}
          animate={{
            opacity: isComplete ? [1, 0, 1] : 1,
          }}
          transition={{
            duration: 0.8,
            repeat: isComplete ? Number.POSITIVE_INFINITY : 0,
            repeatType: "loop",
          }}
        />
      )}
    </span>
  )
}
