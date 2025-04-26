"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Code, Mail, MapPin, Phone, ArrowRight, Github, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribed:", email)
    setEmail("")
    alert("Thanks for subscribing to our newsletter!")
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[600px] w-[600px] rounded-full bg-pink-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <Code className="h-8 w-8 text-purple-400" />
              <span className="text-white">Amahh</span>
            </Link>
            <p className="mb-6 text-zinc-300">
              We build innovative software solutions that drive business growth and enhance user experiences.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ y: -3, color: "#8B5CF6" }}
                className="text-zinc-400 transition-colors hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, color: "#8B5CF6" }}
                className="text-zinc-400 transition-colors hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, color: "#8B5CF6" }}
                className="text-zinc-400 transition-colors hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, color: "#8B5CF6" }}
                className="text-zinc-400 transition-colors hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, color: "#8B5CF6" }}
                className="text-zinc-400 transition-colors hover:text-white"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-6 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "#" },
                { name: "Services", href: "#services" },
                { name: "Projects", href: "/projects" },
                { name: "Blog", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-zinc-300 transition-colors hover:text-purple-400"
                  >
                    <ArrowRight className="mr-2 h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-6 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-purple-400" />
                <span className="text-zinc-300">
                  123 Tech Boulevard, Suite 456
                  <br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-purple-400" />
                <span className="text-zinc-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-purple-400" />
                <span className="text-zinc-300">contact@amahh.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-6 text-lg font-semibold text-white">Subscribe to Our Newsletter</h3>
            <p className="mb-4 text-zinc-300">Stay updated with our latest news and projects.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-zinc-700 bg-white/5 pr-12 text-white placeholder:text-zinc-500"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
              <p className="text-xs text-zinc-400">
                By subscribing, you agree to our{" "}
                <Link href="#" className="text-purple-400 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-zinc-400">
              © {currentYear} Amahh. All rights reserved. Crafted with passion.
            </p>
            <div className="flex space-x-6 text-sm text-zinc-400">
              <Link href="#" className="hover:text-purple-400">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-purple-400">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-purple-400">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
