"use client"

import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Calendar,
  MapPin,
  GraduationCap,
  Send,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "@formspree/react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

import { Header } from "@/components/sections/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { BackgroundEffects } from "@/components/sections/BackgroundEffects"
import { FooterFixed as Footer } from "@/components/sections/FooterFixed"


import { personalInfo } from "@/data/personal"
import { skills } from "@/data/skills"
import { projects } from "@/data/projects"
import { experience } from "@/data/experience"
import type { Skill } from "@/types/portfolio.types"

export default function Portfolio() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "xldndvle")
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset()
    }
  }, [state.succeeded])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <BackgroundEffects />
      <Header />

      <HeroSection />
      <AboutSection />

      {/* Experience Section */}
      <section id="experiencia" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-cyan-500/5"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 glow-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            EXPERIENCIA
          </motion.h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 p-[2px] opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                  <div className="h-full w-full rounded-2xl bg-black"></div>
                </div>
                
                <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_60px_rgba(6,182,212,0.4)] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-300 mb-2">{exp.title}</h3>
                      <p className="text-xl font-medium text-blue-400 mb-2">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="h-5 w-5 text-cyan-400" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="h-5 w-5 text-cyan-400" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full hover:bg-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SkillsSection />

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-orange-500/5"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 glow-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            PROYECTOS
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 border border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.2)] group-hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] transition-all duration-300 h-full">
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <h3 className="text-xl font-bold text-yellow-300">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      {project.stars && (
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">⭐</span>
                          <span className="text-xs text-gray-400">{project.stars}</span>
                        </div>
                      )}
                      <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 rounded">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-orange-400 font-medium mb-3">{project.company}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Ver en GitHub
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-pink-500/5"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600 glow-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            CONTACTO
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                <h3 className="text-2xl font-bold text-red-300 mb-6">Envíame un mensaje</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      required
                      className="bg-black/50 border-red-500/30 text-white placeholder-gray-400"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      required
                      className="bg-black/50 border-red-500/30 text-white placeholder-gray-400"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      required
                      rows={4}
                      className="bg-black/50 border-red-500/30 text-white placeholder-gray-400"
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                  >
                    {state.submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Enviando...
                      </>
                    ) : state.succeeded ? (
                      "✓ ¡Mensaje Enviado Exitosamente!"
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                  
                  {state.succeeded && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 bg-green-500/20 border border-green-500/40 rounded-lg text-center"
                    >
                      <p className="text-green-400 text-sm">
                        🎉 ¡Gracias por contactarme! Te responderé pronto.
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 border border-pink-500/30 shadow-[0_0_30px_rgba(236,72,153,0.2)]">
                <h3 className="text-2xl font-bold text-pink-300 mb-6">Información de contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    <Mail className="h-5 w-5 text-red-400" />
                    <div>
                      <p className="font-medium text-gray-200">Email</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-red-400 hover:underline text-sm">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <Phone className="h-5 w-5 text-green-400" />
                    <div>
                      <p className="font-medium text-gray-200">Teléfono</p>
                      <a href={`tel:${personalInfo.phone}`} className="text-green-400 hover:underline text-sm">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <Github className="h-5 w-5 text-purple-400" />
                    <div>
                      <p className="font-medium text-gray-200">GitHub</p>
                      <a
                        href={personalInfo.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:underline text-sm flex items-center gap-1"
                      >
                        github.com/{personalInfo.github.replace('@', '')}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <Linkedin className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="font-medium text-gray-200">LinkedIn</p>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline text-sm flex items-center gap-1"
                      >
                        Ver perfil
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
