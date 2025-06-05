"use client"

import type React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Componentes refactorizados
import { Navigation } from "@/components/common/Navigation"
import { BackgroundAnimation } from "@/components/common/BackgroundAnimation"
import { HeroSection } from "@/components/sections/HeroSection"

// Datos
import { personalInfo } from "@/data/personal"
import { skills } from "@/data/skills"
import { projects } from "@/data/projects"
import { experience } from "@/data/experience"
import type { Skill } from "@/types/portfolio.types"

// Hooks
import { useContactForm } from "@/hooks/useContactForm"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  
  const { state, handleSubmit } = useContactForm()

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-emerald-900/10 dark:to-purple-900/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <BackgroundAnimation />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Sobre Mí
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-xl">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Desarrollador Full Stack especializado en <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Angular</span> y <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Spring Boot</span>
                  </p>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Apasionado por la innovación y el aprendizaje continuo. Aspiro a especializarme en 
                    <span className="text-blue-600 dark:text-blue-400 font-semibold"> inteligencia artificial</span> para potenciar mi carrera profesional.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-center">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/20 rounded-full w-fit mx-auto mb-3">
                      <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Ubicación</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{personalInfo.location}</p>
                  </div>

                  <div className="text-center">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full w-fit mx-auto mb-3">
                      <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Idiomas</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Español, Inglés, Valenciano</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-slate-50/50 dark:bg-slate-800/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Experiencia
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-slate-800 dark:text-slate-200">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-1">
                        <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Habilidades
            </h2>
          </motion.div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Herramientas</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>

            {Object.entries(skills).map(([category, skillList]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {skillList.map((skill: Skill, index: number) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group cursor-pointer"
                    >
                      <Card className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group-hover:border-emerald-300 dark:group-hover:border-emerald-600">
                        <CardContent className="p-6 text-center">
                          <motion.div
                            className={`w-16 h-16 mx-auto mb-4 rounded-xl ${skill.bgColor} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <skill.icon className={`h-8 w-8 ${skill.color} group-hover:scale-110 transition-transform`} />
                          </motion.div>
                          <h3 className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors text-sm leading-tight">
                            {skill.name}
                          </h3>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-slate-50/50 dark:bg-slate-800/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Proyectos Destacados
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg text-slate-800 dark:text-slate-200">{project.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        {project.stars && (
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500">⭐</span>
                            <span className="text-xs text-slate-500">{project.stars}</span>
                          </div>
                        )}
                        <Badge variant="outline" className="text-xs">
                          {project.year}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-emerald-600 dark:text-emerald-400 font-medium">
                      {project.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.github && (
                      <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="w-full hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Ver en GitHub
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Formación
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-slate-800 dark:text-slate-200">
                        Grado Superior - Desarrollo de Aplicaciones Web
                      </CardTitle>
                      <CardDescription>CIPFP Mislata • 2022</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-slate-800 dark:text-slate-200">
                        Grado Medio - Sistemas Microinformáticos y Redes
                      </CardTitle>
                      <CardDescription>CIPFP Mislata • 2020</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-slate-50/50 dark:bg-slate-800/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Contacto
            </h2>
            <p className="text-slate-600 dark:text-slate-300">¿Tienes un proyecto en mente? ¡Hablemos!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 dark:text-slate-200">Envíame un mensaje</CardTitle>
                  <CardDescription>
                    Completa el formulario y se abrirá tu cliente de email con el mensaje preparado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Nombre
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="bg-white/50 dark:bg-slate-700/50"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-white/50 dark:bg-slate-700/50"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Mensaje
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="bg-white/50 dark:bg-slate-700/50"
                        placeholder="Cuéntame sobre tu proyecto..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700"
                    >
                      {state.submitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Enviando...
                        </>
                      ) : state.succeeded ? (
                        <>
                          ✓ Mensaje Enviado
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar Mensaje
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 dark:text-slate-200">Información de contacto</CardTitle>
                  <CardDescription>También puedes contactarme directamente</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">Email</p>
                      <a href="mailto:jorgegalac03@gmail.com" className="text-blue-600 hover:underline text-sm">
                        jorgegalac03@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">Teléfono</p>
                      <a href="tel:+34612345678" className="text-green-600 hover:underline text-sm">
                        +34 612 345 678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                    <Github className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">GitHub</p>
                      <a
                        href="https://github.com/JorgeGC03"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:underline text-sm flex items-center gap-1"
                      >
                        github.com/JorgeGC03
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/jorge-gala-caballero"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                      >
                        Ver perfil
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-700">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 dark:text-slate-400">
              © 2024 Jorge Gala Caballero. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/JorgeGC03" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/jorge-gala-caballero"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:jorgegalac03@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
