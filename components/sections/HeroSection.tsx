"use client"

import { motion } from "framer-motion"
import { Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { personalInfo } from "@/data/personal"

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative pt-4 md:pt-20">
      <div className="text-center space-y-8">
        {}
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
          {}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-2xl opacity-30 animate-pulse"></div>
          
          {}
          <div className="absolute top-6 left-2 w-44 h-44 rounded-full bg-black/40 blur-xl opacity-50"></div>
          
          {}
          <div className="absolute inset-0 rounded-full profile-image-border p-1 profile-image-glow">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden relative">
              
              {}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 blur-lg"></div>
              
              {}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                <Image
                  src="/JorgeGala.png"
                  alt={personalInfo.name}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-700 ease-out filter brightness-110 contrast-105"
                  onError={() => {
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
  )
} 