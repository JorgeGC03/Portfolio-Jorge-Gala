import type { PersonalInfo } from "@/types/portfolio.types"

export const personalInfo: PersonalInfo = {
  name: "Jorge Gala Caballero",
  title: "Full Stack Web Developer especializado en Angular y Spring Boot",
  description: "Apasionado por la innovación y el aprendizaje continuo. Aspiro a especializarme en inteligencia artificial para potenciar mi carrera profesional.",
  location: "Valencia, España",
  github: "@JorgeGC03",
  email: process.env.NEXT_PUBLIC_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_PHONE || "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  languages: ["ES", "EN", "VAL"]
} 