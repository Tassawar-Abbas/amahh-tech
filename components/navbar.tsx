"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Code, Menu } from "lucide-react"

const navItems = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Reviews", href: "#reviews" },
  { name: "Technologies", href: "#technologies" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 py-2 shadow backdrop-blur-md dark:bg-zinc-950/80" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="#" className="flex items-center gap-2 text-2xl font-bold">
          <Code className="h-8 w-8 text-purple-600" />
          <span className={isScrolled ? "text-zinc-900 dark:text-white" : "text-white"}>Amahh</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-purple-500 ${
                isScrolled ? "text-zinc-900 dark:text-white" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className={`h-6 w-6 ${isScrolled ? "text-zinc-900 dark:text-white" : "text-white"}`} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between">
                <Link href="#" className="flex items-center gap-2 text-2xl font-bold">
                  <Code className="h-8 w-8 text-purple-600" />
                  <span>Amahh</span>
                </Link>
              </div>
              <nav className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-purple-500"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="mt-4 bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
