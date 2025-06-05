import type { Project } from "@/types/portfolio.types"

export const projects: Project[] = [
  {
    title: "Kebab Los Gorjes - TFG",
    description: "Aplicación web completa para gestión de restaurante con sistema de pedidos, inventario y administración. Desarrollada con Spring Boot, Angular y base de datos relacional.",
    tech: ["Spring Boot", "Angular", "TypeScript", "MySQL", "HTML", "CSS"],
    github: "https://github.com/JorgeGC03/tfg-Jorge-Gala",
    company: "Proyecto Final de Ciclo",
    year: "2024",
    stars: 1,
  },
  {
    title: "Backend Tienda Comida - Spring Boot",
    description: "API REST para gestión de tienda de comida con funcionalidades CRUD, autenticación y gestión de productos. Implementa mejores prácticas de Spring Boot y arquitectura limpia.",
    tech: ["Spring Boot", "Java", "MySQL", "REST API", "Maven"],
    github: "https://github.com/JorgeGC03/Backend-tiendaComida-springboot",
    company: "Proyecto Académico",
    year: "2024",
  },
  {
    title: "Books API - Sistema de Gestión",
    description: "API para gestión de biblioteca con funcionalidades avanzadas de búsqueda, préstamos y administración de usuarios. Desarrollada con Spring Boot y base de datos MySQL.",
    tech: ["Spring Boot", "Java", "MySQL", "REST API", "Swagger"],
    github: "https://github.com/JorgeGC03/Books-API",
    company: "Proyecto Académico",
    year: "2024",
  },
  {
    title: "Migración Legacy a Spring Boot",
    description: "Migración completa de una aplicación legacy (Struts) a Spring Boot con Redux/NgRx. Implementación de arquitectura moderna con integración de PL/SQL y Azure.",
    tech: ["Spring Boot", "Angular", "TypeScript", "PL/SQL", "Azure"],
    company: "Adding Technology S.A.",
    year: "2024",
  },
] 