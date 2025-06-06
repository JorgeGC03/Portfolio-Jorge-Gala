"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data/personal"

export function AboutSection() {
  return (
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

            {}
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
  )
} 