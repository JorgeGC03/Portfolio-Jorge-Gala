import {
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  GitBranch,
  TestTube,
  Cloud,
  FileText,
  Users,
  Lightbulb,
  Target,
  Zap,
  GraduationCap,
} from "lucide-react"
import type { SkillCategory } from "@/types/portfolio.types"

export const skills: SkillCategory = {
  frontend: [
    { name: "HTML/CSS", icon: Code, color: "text-orange-500", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
    { name: "JavaScript", icon: Code, color: "text-yellow-500", bgColor: "bg-yellow-100 dark:bg-yellow-900/20" },
    { name: "TypeScript", icon: Code, color: "text-blue-500", bgColor: "bg-blue-100 dark:bg-blue-900/20" },
    { name: "Angular", icon: Globe, color: "text-red-500", bgColor: "bg-red-100 dark:bg-red-900/20" },
    { name: "React", icon: Globe, color: "text-cyan-500", bgColor: "bg-cyan-100 dark:bg-cyan-900/20" },
    { name: "React Native", icon: Smartphone, color: "text-purple-500", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
  ],
  backend: [
    { name: "Spring Boot", icon: Server, color: "text-green-500", bgColor: "bg-green-100 dark:bg-green-900/20" },
    { name: "PL/SQL", icon: Database, color: "text-indigo-500", bgColor: "bg-indigo-100 dark:bg-indigo-900/20" },
    { name: "Azure", icon: Cloud, color: "text-blue-400", bgColor: "bg-blue-100 dark:bg-blue-900/20" },
    { name: "Swagger", icon: FileText, color: "text-emerald-500", bgColor: "bg-emerald-100 dark:bg-emerald-900/20" },
  ],
  tools: [
    { name: "Bitbucket", icon: GitBranch, color: "text-slate-600", bgColor: "bg-slate-100 dark:bg-slate-700/50" },
    { name: "Testing", icon: TestTube, color: "text-pink-500", bgColor: "bg-pink-100 dark:bg-pink-900/20" },
    { name: "Ignite", icon: Zap, color: "text-orange-400", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
  ],
  soft: [
    { name: "Trabajo en equipo", icon: Users, color: "text-emerald-500", bgColor: "bg-emerald-100 dark:bg-emerald-900/20" },
    { name: "Resolución de problemas", icon: Lightbulb, color: "text-yellow-400", bgColor: "bg-yellow-100 dark:bg-yellow-900/20" },
    { name: "Adaptabilidad", icon: Target, color: "text-indigo-500", bgColor: "bg-indigo-100 dark:bg-indigo-900/20" },
    { name: "Aprendizaje continuo", icon: GraduationCap, color: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
  ],
} 