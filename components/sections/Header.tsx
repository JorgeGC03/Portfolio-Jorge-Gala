"use client"

import { motion } from "framer-motion"

const navigationItems = [
  { text: "Inicio", id: "inicio" },
  { text: "Sobre Mí", id: "sobre-mi" },
  { text: "Experiencia", id: "experiencia" },
  { text: "Habilidades", id: "habilidades" },
  { text: "Proyectos", id: "proyectos" },
  { text: "Contacto", id: "contacto" }
]

export function Header() {
  return (
    <motion.header
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-cyan-500/20 hidden md:block"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
        <nav className="flex justify-center">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6 max-w-full">
            {navigationItems.map((item) => (
              <motion.a
                key={item.text}
                href={`#${item.id}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-xs sm:text-sm md:text-base cursor-pointer px-1 py-1 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
          </div>
        </nav>
      </div>
    </motion.header>
  )
} 