"use client"

import { motion } from "framer-motion"

export function BackgroundEffects() {
  return (
    <>
      {}
      <div className="fixed inset-0 opacity-10 cyber-grid"></div>
      
      {}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"
          animate={{
            x: [-200, 200, -200],
            y: [-100, 100, -100],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ left: '10%', top: '20%' }}
        />
        
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
          animate={{
            x: [150, -150, 150],
            y: [50, -50, 50],
            scale: [1, 0.7, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          style={{ right: '15%', top: '40%' }}
        />
        
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-green-500/5 blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [75, -75, 75],
            scale: [0.9, 1.3, 0.9],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
          style={{ left: '50%', bottom: '20%' }}
        />
        
        {}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`floating-${i}`}
            className={`absolute ${
              i % 4 === 0 ? 'w-4 h-4 bg-cyan-400/20 rounded-full' :
              i % 4 === 1 ? 'w-2 h-8 bg-purple-400/20 rounded-full' :
              i % 4 === 2 ? 'w-6 h-6 bg-green-400/20 rotate-45' :
              'w-3 h-3 bg-pink-400/20 rounded-full'
            } shadow-lg`}
            animate={{
              x: [0, (i % 2 === 0 ? 300 : -300)],
              y: [0, (i % 3 === 0 ? -200 : 200)],
              rotate: [0, 360],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 15 + (i * 2),
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
            }}
          />
        ))}
        
        {}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_#00ffff]"
            animate={{
              x: [0, (i % 2 === 0 ? 150 : -150)],
              y: [0, (i % 3 === 0 ? -100 : 100)],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + (i * 1.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${15 + (i * 7)}%`,
            }}
          />
        ))}
        
        {}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
            style={{
              width: '300px',
              left: `${i * 25}%`,
              top: `${30 + (i * 20)}%`,
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1,
            }}
          />
        ))}
      </div>
    </>
  )
} 