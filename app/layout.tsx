import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jorge Gala Caballero - Full Stack Developer",
  description:
    "Portfolio profesional de Jorge Gala Caballero, Full Stack Web Developer especializado en Angular y Spring Boot",
  keywords: ["Jorge Gala", "Full Stack Developer", "Angular", "Spring Boot", "React", "TypeScript"],
  authors: [{ name: "Jorge Gala Caballero" }],
  openGraph: {
    title: "Jorge Gala Caballero - Full Stack Developer",
    description: "Portfolio profesional de Jorge Gala Caballero",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
