"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { skills } from "@/data/skills"
import type { Skill } from "@/types/portfolio.types"

export function SkillsSection() {
  const [activeSkillTab, setActiveSkillTab] = useState("frontend")

  return (
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
  )
} 