"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { personalInfo } from "@/data/personal"

export function Footer() {
  if (process.env.NODE_ENV === 'development') {
    console.log('🔗 Footer Links Debug:', {
      githubUrl: personalInfo.githubUrl,
      linkedin: personalInfo.linkedin,
      email: personalInfo.email
    })
  }

  const handleLinkClick = (url: string, type: string) => {
    console.log(`🔗 Clicking ${type}:`, url)
    if (type !== 'email') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <footer className="py-8 px-4 border-t border-gray-700/50 relative z-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2025 {personalInfo.name}.
          </p>
          <div className="flex gap-4">
            {}
            <a 
              href={personalInfo.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => {
                handleLinkClick(personalInfo.githubUrl, 'GitHub')
              }}
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer relative z-10"
              aria-label="Ver perfil de GitHub"
              title="Ver perfil de GitHub"
            >
              <Github className="h-5 w-5" />
            </a>

            {}
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => {
                handleLinkClick(personalInfo.linkedin, 'LinkedIn')
              }}
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer relative z-10"
              aria-label="Ver perfil de LinkedIn"
              title="Ver perfil de LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            {}
            <a 
              href={`mailto:${personalInfo.email}`}
              onClick={(e) => {
                console.log('📧 Opening email to:', personalInfo.email)
              }}
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer relative z-10"
              aria-label="Enviar email"
              title="Enviar email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 