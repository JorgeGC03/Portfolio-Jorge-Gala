"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { personalInfo } from "@/data/personal"

export function FooterFixed() {
  const openLink = (url: string, type: string) => {
    if (type === 'email') {
      window.location.href = `mailto:${personalInfo.email}`
    } else {
      const newWindow = window.open(url, '_blank')
      if (newWindow) {
        newWindow.focus()
      } else {
        window.location.href = url
      }
    }
  }

  return (
    <footer className="py-8 px-4 border-t border-gray-700/50 bg-black relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2025 {personalInfo.name}.
          </p>
          <div className="flex gap-6">
            {}
            <button
              onClick={() => openLink(personalInfo.githubUrl, 'GitHub')}
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 p-3 rounded-lg hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer border border-transparent hover:border-cyan-400/30"
              aria-label="Ver perfil de GitHub"
              title="Ver perfil de GitHub"
            >
              <Github className="h-6 w-6" />
            </button>

            {}
            <button
              onClick={() => openLink(personalInfo.linkedin, 'LinkedIn')}
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 p-3 rounded-lg hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer border border-transparent hover:border-cyan-400/30"
              aria-label="Ver perfil de LinkedIn"
              title="Ver perfil de LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </button>

            {}
            <button
              onClick={() => openLink(personalInfo.email, 'email')}
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 p-3 rounded-lg hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer border border-transparent hover:border-cyan-400/30"
              aria-label="Enviar email"
              title="Enviar email"
            >
              <Mail className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
} 