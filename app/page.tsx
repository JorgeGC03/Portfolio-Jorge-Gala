"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  GitBranch,
  TestTube,
  Cloud,
  FileText,
  Users,
  Lightbulb,
  Target,
  Zap,
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
import { Progress } from "@/components/ui/progress"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { theme, setTheme } = useTheme()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Create mailto link with form data
      const subject = `Contacto desde portfolio - ${name}`
      const body = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
      const mailtoLink = `mailto:jorgegalacaballero@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      // Open email client
      window.open(mailtoLink, "_blank")

      toast({
        title: "¡Mensaje preparado!",
        description:
          "Se ha abierto tu cliente de email con el mensaje. Si no se abre automáticamente, puedes contactarme directamente en jorgegalacaballero@gmail.com",
      })

      e.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema. Por favor, contacta directamente en jorgegalacaballero@gmail.com",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const skills = {
    frontend: [
      { name: "HTML/CSS", level: 90, icon: Code },
      { name: "JavaScript", level: 85, icon: Code },
      { name: "TypeScript", level: 80, icon: Code },
      { name: "Angular", level: 85, icon: Globe },
      { name: "React", level: 75, icon: Globe },
      { name: "React Native", level: 70, icon: Smartphone },
    ],
    backend: [
      { name: "Spring Boot", level: 75, icon: Server },
      { name: "PL/SQL", level: 70, icon: Database },
      { name: "Azure", level: 65, icon: Cloud },
      { name: "Swagger", level: 70, icon: FileText },
    ],
    tools: [
      { name: "Bitbucket", level: 80, icon: GitBranch },
      { name: "Testing", level: 75, icon: TestTube },
      { name: "Ignite", level: 65, icon: Zap },
    ],
    soft: [
      { name: "Trabajo en equipo", level: 95, icon: Users },
      { name: "Resolución de problemas", level: 90, icon: Lightbulb },
      { name: "Adaptabilidad", level: 85, icon: Target },
      { name: "Aprendizaje continuo", level: 95, icon: GraduationCap },
    ],
  }

  const projects = [
    {
      title: "Migración Legacy a Spring Boot",
      description:
        "Migración completa de una aplicación legacy (Struts) a Spring Boot con Redux/NgRx. Implementación de arquitectura moderna con integración de PL/SQL y Azure.",
      tech: ["Spring Boot", "Angular", "TypeScript", "PL/SQL", "Azure"],
      company: "Adding Technology S.A.",
      year: "2024",
    },
    {
      title: "Desarrollo Frontend con Angular",
      description:
        "Desarrollo de interfaces dinámicas y robustas utilizando Angular. Implementación de componentes reutilizables y optimización del rendimiento de aplicaciones.",
      tech: ["Angular", "TypeScript", "HTML", "CSS", "JavaScript"],
      company: "Sngular People",
      year: "2024",
    },
    {
      title: "Aplicaciones React Native",
      description:
        "Desarrollo de aplicaciones móviles multiplataforma utilizando React Native e Ignite CLI para acelerar el desarrollo.",
      tech: ["React Native", "Ignite", "JavaScript", "TypeScript"],
      company: "Proyectos personales",
      year: "2023-2024",
    },
  ]

  const experience = [
    {
      title: "Full Stack Web Developer",
      company: "Adding Technology S.A.",
      period: "2024 - Actualidad",
      location: "Valencia, España",
      description: [
        "Full Stack Web Developer en un equipo de 4 personas",
        "Migración de aplicación legacy (Struts) a Spring Boot y Redux/NgRx",
        "Integración de PL/SQL, Azure y Swagger para bases de datos y documentación",
        "Control de versiones con Bitbucket y metodologías ágiles",
        "Implementación de testing para asegurar calidad y funcionalidad",
      ],
      tech: ["Spring Boot", "Angular", "TypeScript", "PL/SQL", "Azure", "Bitbucket"],
    },
    {
      title: "Frontend Developer",
      company: "Sngular People",
      period: "Mar - May 2024",
      location: "Valencia, España",
      description: [
        "Desarrollo front-end especializado en Angular",
        "Optimización del rendimiento de aplicaciones",
        "Trabajo efectivo en equipo y resolución de problemas técnicos",
        "Colaboración en la creación de interfaces dinámicas y robustas",
      ],
      tech: ["Angular", "TypeScript", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Soporte Técnico",
      company: "Futurmec SRL / LEMS Procesos Informáticos",
      period: "Mar - Jun 2022",
      location: "Italia (Erasmus)",
      description: [
        "Reparación y mantenimiento de ordenadores, móviles y otros dispositivos",
        "Atención al cliente y soporte técnico presencial",
        "Trabajo en equipo para resolver problemas y alcanzar objetivos",
      ],
      tech: ["Soporte Técnico", "Atención al Cliente", "Reparación Hardware"],
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Jorge Gala
          </motion.div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-4xl font-bold text-blue-600 dark:text-blue-400">
                JG
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Jorge Gala Caballero
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack Web Developer especializado en Angular y Spring Boot
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contactar
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/cv-jorge-gala.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Descargar CV
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/carta-recomendacion.pdf" download>
                  <FileText className="mr-2 h-5 w-5" />
                  Carta de Recomendación
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Sobre Mí
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700">
              <CardContent className="p-8">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Soy desarrollador web apasionado por la innovación y el aprendizaje continuo. He colaborado en
                  proyectos diversos que han fortalecido mis habilidades técnicas y de equipo. Actualmente me
                  especializo en desarrollo Full Stack con Angular y Spring Boot, y aspiro a especializarme en
                  inteligencia artificial para potenciar mi carrera.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                      Información Personal
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-blue-600" />
                        <span className="text-slate-600 dark:text-slate-300">jorgegalacaballero@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-blue-600" />
                        <span className="text-slate-600 dark:text-slate-300">699083088</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Github className="h-4 w-4 text-blue-600" />
                        <a href="https://github.com/JorgeGC03" className="text-blue-600 hover:underline">
                          github.com/JorgeGC03
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Idiomas</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-blue-600" />
                        <span className="text-slate-600 dark:text-slate-300">Castellano</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-blue-600" />
                        <span className="text-slate-600 dark:text-slate-300">Inglés</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-blue-600" />
                        <span className="text-slate-600 dark:text-slate-300">Valenciano</span>
                      </div>
                    </div>
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
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
                <div className="grid md:grid-cols-2 gap-6">
                  {skillList.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                              <skill.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                          <span className="text-sm text-slate-600 dark:text-slate-400 mt-1 block">{skill.level}%</span>
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
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
                      <Badge variant="outline" className="text-xs">
                        {project.year}
                      </Badge>
                    </div>
                    <CardDescription className="text-blue-600 dark:text-blue-400 font-medium">
                      {project.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
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

      {/* Education Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
                  <form onSubmit={handleContactSubmit} className="space-y-4">
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
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Preparando...
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
                      <a href="mailto:jorgegalacaballero@gmail.com" className="text-blue-600 hover:underline text-sm">
                        jorgegalacaballero@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">Teléfono</p>
                      <a href="tel:+34699083088" className="text-green-600 hover:underline text-sm">
                        +34 699 083 088
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
                        href="https://linkedin.com/in/jorge-gala-caballero-381097214"
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
                  href="https://linkedin.com/in/jorge-gala-caballero-381097214"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:jorgegalacaballero@gmail.com">
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
