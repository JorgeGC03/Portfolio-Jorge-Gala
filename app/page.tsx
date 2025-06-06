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
import { useState } from "react"
import Image from "next/image"

// Datos
import { personalInfo } from "@/data/personal"
import { skills } from "@/data/skills"
import { projects } from "@/data/projects"
import { experience } from "@/data/experience"
import type { Skill } from "@/types/portfolio.types"

export default function Portfolio() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "")
  const [activeSkillTab, setActiveSkillTab] = useState("frontend")

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="fixed inset-0 opacity-10 cyber-grid"></div>
      
      {/* Floating Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Large floating shapes */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"
          animate={{
            x: [-200, 200, -200],
            y: [-100, 100, -100],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ left: '10%', top: '20%' }}
        />
        
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
          animate={{
            x: [150, -150, 150],
            y: [50, -50, 50],
            scale: [1, 0.7, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          style={{ right: '15%', top: '40%' }}
        />
        
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-green-500/5 blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [75, -75, 75],
            scale: [0.9, 1.3, 0.9],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
          style={{ left: '50%', bottom: '20%' }}
        />
        
        {/* Medium floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`floating-${i}`}
            className={`absolute ${
              i % 4 === 0 ? 'w-4 h-4 bg-cyan-400/20 rounded-full' :
              i % 4 === 1 ? 'w-2 h-8 bg-purple-400/20 rounded-full' :
              i % 4 === 2 ? 'w-6 h-6 bg-green-400/20 rotate-45' :
              'w-3 h-3 bg-pink-400/20 rounded-full'
            } shadow-lg`}
            animate={{
              x: [0, (i % 2 === 0 ? 300 : -300)],
              y: [0, (i % 3 === 0 ? -200 : 200)],
              rotate: [0, 360],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 15 + (i * 2),
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
            }}
          />
        ))}
        
        {/* Small particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_#00ffff]"
            animate={{
              x: [0, (i % 2 === 0 ? 150 : -150)],
              y: [0, (i % 3 === 0 ? -100 : 100)],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + (i * 1.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${15 + (i * 7)}%`,
            }}
          />
        ))}
        
        {/* Animated lines */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
            style={{
              width: '300px',
              left: `${i * 25}%`,
              top: `${30 + (i * 20)}%`,
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1,
            }}
          />
        ))}
      </div>

      {/* Header/Navigation */}
      <motion.header
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-cyan-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-center space-x-6">
            {[
              { text: "Inicio", id: "inicio" },
              { text: "Sobre Mí", id: "sobre-mi" },
              { text: "Experiencia", id: "experiencia" },
              { text: "Habilidades", id: "habilidades" },
              { text: "Proyectos", id: "proyectos" },
              { text: "Contacto", id: "contacto" }
            ].map((item) => (
              <motion.a
                key={item.text}
                href={`#${item.id}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm md:text-base cursor-pointer"
                whileHover={{ scale: 1.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.id);
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                {item.text}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              delay: 0.2,
              duration: 0.8 
            }}
            className="relative mx-auto w-48 h-48 mb-8"
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            {/* Glow Background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-2xl opacity-30 animate-pulse"></div>
            
            {/* Sombra de profundidad */}
            <div className="absolute top-6 left-2 w-44 h-44 rounded-full bg-black/40 blur-xl opacity-50"></div>
            
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full profile-image-border p-1 profile-image-glow">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden relative">
                
                {/* Inner Glow */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 blur-lg"></div>
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  <Image
                    src="/JorgeGala.png"
                    alt={personalInfo.name}
                    width={192}
                    height={192}
                    className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-700 ease-out filter brightness-110 contrast-105"
                    onError={() => {
                      // Fallback con iniciales si falla la imagen
                    }}
                  />
                  
                  {/* Overlay sutil para mejor contraste */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Reflexión profesional */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-full opacity-60"></div>
                  
                  {/* Borde interno sutil */}
                  <div className="absolute inset-0 rounded-full border border-white/10"></div>
                  
                  {/* Punto de luz sutil */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-white/30 rounded-full blur-sm"></div>
                </div>
              </div>
            </div>
            
            {/* Floating particles */}
            <motion.div
              className="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"
              animate={{
                y: [-5, 5, -5],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.8)]"
              animate={{
                y: [5, -5, 5],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            
                         <motion.div
              className="absolute top-1/4 -left-3 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              animate={{
                x: [-3, 3, -3],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            
            {/* Indicador de estado profesional */}
            <motion.div
              className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-black shadow-[0_0_15px_rgba(34,197,94,0.6)]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-1 bg-white/20 rounded-full"></div>
            </motion.div>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 glow-text mb-4 leading-tight px-4">
              {personalInfo.name}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6">{personalInfo.title}</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">{personalInfo.description}</p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) {
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contactar
            </Button>
            <Button asChild variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 text-lg">
              <a href="/cv-jorge-gala.pdf" target="_blank" rel="noopener noreferrer" download>
                <ExternalLink className="mr-2 h-5 w-5" />
                Ver CV
              </a>
            </Button>

          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 glow-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            SOBRE MÍ
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 p-[2px] opacity-60">
              <div className="h-full w-full rounded-2xl bg-black"></div>
            </div>
            
            <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 shadow-[0_0_50px_rgba(147,51,234,0.3)]">
                              <div className="text-center mb-8">
                  <p className="text-lg text-gray-300 leading-relaxed text-justify">
                    {personalInfo.longDescription.split('inteligencia artificial')[0]}
                    <span className="text-purple-400 font-semibold glow-text">inteligencia artificial</span>
                    {personalInfo.longDescription.split('inteligencia artificial')[1]}
                  </p>
                </div>

              <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-purple-500/20">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/40 mb-4">
                    <MapPin className="h-8 w-8 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-purple-300 mb-2 text-lg">Ubicación</h4>
                  <p className="text-gray-400">{personalInfo.location}</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-pink-500/20 rounded-full flex items-center justify-center border border-pink-500/40 mb-4">
                    <Mail className="h-8 w-8 text-pink-400" />
                  </div>
                  <h4 className="font-semibold text-pink-300 mb-2 text-lg">Idiomas</h4>
                  <p className="text-gray-400">
                    {personalInfo.languages.map((lang, index) => (
                      <span key={lang}>
                        {lang === 'ES' ? 'Español' : lang === 'EN' ? 'Inglés' : 'Valenciano'}
                        {index < personalInfo.languages.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              {/* Carta de Recomendación */}
              <div className="text-center pt-6 border-t border-purple-500/20">
                <Button asChild variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10 px-6 py-2">
                  <a href="/carta-recomendacion.pdf" target="_blank" rel="noopener noreferrer" download>
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Ver Carta de Recomendación
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-emerald-500/5"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 glow-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            HABILIDADES
          </motion.h2>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2 bg-black/60 rounded-2xl border border-green-500/30">
              {[
                { id: "frontend", label: "Frontend" },
                { id: "backend", label: "Backend" },
                { id: "tools", label: "Herramientas" },
                { id: "soft", label: "Soft Skills" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSkillTab(tab.id)}
                  className={`px-6 py-3 text-sm font-medium rounded-xl border transition-all duration-300 ${
                    activeSkillTab === tab.id
                      ? "border-green-400 bg-green-500/20 text-green-300 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                      : "border-green-500/40 bg-green-500/10 text-green-300 hover:bg-green-500/20"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            key={activeSkillTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {skills[activeSkillTab as keyof typeof skills]?.map((skill: Skill, index: number) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 text-center border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.2)] group-hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-green-500/20 flex items-center justify-center border border-green-500/40 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] float">
                    <skill.icon className="h-8 w-8 text-green-400 group-hover:text-green-300 transition-colors" />
                  </div>
                  <h3 className="font-semibold text-green-300 group-hover:text-green-200 transition-colors text-sm leading-tight glow-text">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
                <form onSubmit={handleSubmit} className="space-y-4">
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
                      "✓ Mensaje Enviado"
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
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
                        href={`https://github.com/${personalInfo.github.replace('@', '')}`}
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

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2024 {personalInfo.name}.
            </p>
            <div className="flex gap-4">
              <a href={`https://github.com/${personalInfo.github.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-gray-400 hover:text-cyan-400 transition-colors" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-cyan-400 transition-colors" />
              </a>
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="h-5 w-5 text-gray-400 hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
