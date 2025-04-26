import Hero from "@/components/hero"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Reviews from "@/components/reviews"
import Technologies from "@/components/technologies"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Projects />
      <Reviews />
      <Technologies />
      <Contact />
    </main>
  )
}
