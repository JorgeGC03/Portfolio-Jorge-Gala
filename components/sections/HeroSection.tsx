"use client"

import { motion } from "framer-motion"
import { Mail, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data/personal"

export const HeroSection = () => {
  return (
    <section className="pt-20 pb-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 p-1 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800">
              <img
                src="/JorgeGala.png"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-600">
                JG
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {personalInfo.title}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700"
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
  )
} 