import type { LucideIcon } from "lucide-react"

export interface Skill {
  name: string
  icon: LucideIcon
  color: string
  bgColor: string
}

export interface SkillCategory {
  frontend: Skill[]
  backend: Skill[]
  tools: Skill[]
  soft: Skill[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  company: string
  year: string
  stars?: number
}

export interface Experience {
  title: string
  company: string
  period: string
  location: string
  description: string[]
  tech: string[]
}

export interface Education {
  title: string
  institution: string
  year: string
  description?: string
}

export interface PersonalInfo {
  name: string
  title: string
  description: string
  longDescription: string
  location: string
  github: string
  email: string
  phone: string
  linkedin: string
  languages: string[]
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface FormState {
  submitting: boolean
  succeeded: boolean
  errors: any
} 