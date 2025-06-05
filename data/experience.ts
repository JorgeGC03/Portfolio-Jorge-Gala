import type { Experience } from "@/types/portfolio.types"

export const experience: Experience[] = [
  {
    title: "Full Stack Web Developer",
    company: "Adding Technology S.A.",
    period: "2024 - Actualidad",
    location: "Valencia, España",
    description: [
      "Full Stack Web Developer en un equipo de 4 personas",
      "Migración de aplicación legacy (Struts) a Spring Boot y Redux/NgRx",
      "Integración de PL/SQL, Azure y Swagger para bases de datos y documentación",
      "Control de versiones con Bitbucket y metodologías ágiles",
      "Implementación de testing para asegurar calidad y funcionalidad",
    ],
    tech: ["Spring Boot", "Angular", "TypeScript", "PL/SQL", "Azure", "Bitbucket"],
  },
  {
    title: "Frontend Developer",
    company: "Sngular People",
    period: "Mar - May 2024",
    location: "Valencia, España",
    description: [
      "Desarrollo front-end especializado en Angular",
      "Optimización del rendimiento de aplicaciones",
      "Trabajo efectivo en equipo y resolución de problemas técnicos",
      "Colaboración en la creación de interfaces dinámicas y robustas",
    ],
    tech: ["Angular", "TypeScript", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Soporte Técnico",
    company: "Futurmec SRL / LEMS Procesos Informáticos",
    period: "Mar - Jun 2022",
    location: "Italia (Erasmus)",
    description: [
      "Reparación y mantenimiento de ordenadores, móviles y otros dispositivos",
      "Atención al cliente y soporte técnico presencial",
      "Trabajo en equipo para resolver problemas y alcanzar objetivos",
    ],
    tech: ["Soporte Técnico", "Atención al Cliente", "Reparación Hardware"],
  },
] 