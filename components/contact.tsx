"use client"
import { useState, ChangeEvent, FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Send, MessageCircle, CheckCircle, } from "lucide-react"
import emailjs from "@emailjs/browser"
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [successModalOpen, setSuccessModalOpen] = useState(false)
  const [errorModalOpen, setErrorModalOpen] = useState(false)
  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS environment variables are missing.")
        return
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setFormData({ name: "", email: "", subject: "", message: "" })
      setSuccessModalOpen(true)
    } catch (error) {
      console.error("Failed to send email:", error)
      setErrorModalOpen(true)
    } finally {
      setLoading(false)
    }
  }
  const openWhatsApp = (number: string) => {
    window.open(`https://wa.me/${number}`, "_blank")
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">Contact Us</h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-300">
            Have a project in mind? Get in touch with us to see how we can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none bg-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Get in Touch</CardTitle>
                <CardDescription className="text-zinc-300">
                  Fill out the form and our team will get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-zinc-700 bg-white/5 text-white placeholder:text-zinc-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-zinc-700 bg-white/5 text-white placeholder:text-zinc-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-zinc-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-zinc-700 bg-white/5 text-white placeholder:text-zinc-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-zinc-700 bg-white/5 text-white placeholder:text-zinc-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div className="mb-8 space-y-6">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-zinc-300">
                We're here to help with any questions about our services or to discuss your project requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-purple-400" />
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-zinc-300">amahh.tech@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageCircle className="mr-4 h-6 w-6 text-green-400" />
                  <div>
                    <h4 className="font-medium text-white">WhatsApp </h4>

                    <p
                      onClick={() => openWhatsApp("923249274607")}
                      className="text-zinc-300 cursor-pointer hover:underline"
                    >
                      +92 324 9274607 
                    </p>
                    <p
                      onClick={() => openWhatsApp("923116676939")}
                      className="text-zinc-300 cursor-pointer hover:underline"
                    >
                      +92 311 6676939
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
          {/* Success Modal */}
          <AnimatePresence>
        {successModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="max-w-md w-full rounded-2xl bg-white p-8 text-center shadow-xl"
            >
              <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
              <h2 className="mb-2 text-2xl font-bold text-gray-800">Message Sent Successfully!</h2>
              <p className="mb-6 text-gray-600">Thank you for reaching out to us. We'll get back to you soon!</p>
              <Button
                onClick={() => setSuccessModalOpen(false)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Modal */}
      <AnimatePresence>
        {errorModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="max-w-md w-full rounded-2xl bg-white p-8 text-center shadow-xl"
            >
              <h2 className="mb-2 text-2xl font-bold text-red-600">Oops!</h2>
              <p className="mb-6 text-gray-600">Something went wrong. Please try again later.</p>
              <Button
                onClick={() => setErrorModalOpen(false)}
                className="w-full bg-red-600 hover:bg-red-700"
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
