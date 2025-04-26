"use client"

import { motion } from "framer-motion"
import { Code, LineChart, Smartphone, Globe, Database, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Code className="h-10 w-10 text-white" />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business needs and challenges.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-white" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: <Globe className="h-10 w-10 text-white" />,
    title: "Web Development",
    description: "Responsive, high-performance websites and web applications built with cutting-edge technologies.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <Database className="h-10 w-10 text-white" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to optimize your operations.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: <LineChart className="h-10 w-10 text-white" />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with our advanced analytics solutions.",
    color: "from-amber-500 to-yellow-600",
  },
  {
    icon: <Shield className="h-10 w-10 text-white" />,
    title: "Cybersecurity",
    description: "Protect your digital assets with our comprehensive security services and solutions.",
    color: "from-red-500 to-orange-600",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-300">
            We offer a comprehensive range of software development services to help your business thrive in the digital
            landscape
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full overflow-hidden rounded-lg"
              >
                <Card className="relative h-full border-none bg-white/5 shadow-lg transition-all duration-300 backdrop-blur-sm">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                  />

                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br opacity-10" />

                  <CardHeader className="relative">
                    <motion.div
                      className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${service.color} p-3`}
                      whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-zinc-300">{service.description}</CardDescription>

                    <motion.div
                      className="mt-4 flex items-center text-sm font-medium text-purple-400"
                      whileHover={{ x: 5 }}
                    >
                      Learn more
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </motion.svg>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
