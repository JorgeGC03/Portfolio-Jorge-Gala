import type { PersonalInfo } from "@/types/portfolio.types"

export const personalInfo: PersonalInfo = {
  name: "Jorge Gala Caballero",
  title: "Full Stack Web Developer",
  description: "Apasionado por la innovación y el aprendizaje continuo. Aspiro a especializarme en inteligencia artificial para potenciar mi carrera profesional.",
  longDescription: "Soy desarrollador web. A lo largo de mi formación y experiencia en proyectos reales, he reforzado mis conocimientos técnicos y aprendido a trabajar de forma colaborativa en equipo. Me gusta lo que hago, disfruto resolviendo problemas y siempre estoy buscando formas de mejorar. Me interesa especialmente estar al día con las nuevas tecnologías, y actualmente tengo un fuerte interés por la inteligencia artificial. Estoy en búsqueda de una oportunidad que me permita seguir creciendo, aprender de otros profesionales y aportar valor en proyectos con impacto.",
  location: "Valencia, España",
  github: "@JorgeGC03",
  email: process.env.NEXT_PUBLIC_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_PHONE || "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  languages: ["ES", "EN", "VAL"]
} 