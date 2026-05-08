"use client"

import { useEffect, useState } from "react"

interface Bubble {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
}

/**
 * Burbujas decorativas sutiles.
 *
 * Cambios respecto a la versión anterior:
 * - Reducidas de 25 a 12 (no saturan visualmente sobre el video)
 * - Tamaños más pequeños y variados (3-14px en lugar de 8-28px)
 * - Opacidad aleatoria por burbuja para sensación más natural
 * - z-index ajustado para quedar encima del video pero detrás del contenido
 */
export function Bubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    const initialBubbles: Bubble[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 11 + 3,
      duration: Math.random() * 12 + 12,
      delay: Math.random() * 18,
      opacity: Math.random() * 0.3 + 0.15,
    }))
    setBubbles(initialBubbles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-white border border-white/40 animate-bubble"
          style={{
            left: `${bubble.left}%`,
            width: bubble.size,
            height: bubble.size,
            opacity: bubble.opacity,
            animationDuration: `${bubble.duration}s, ${bubble.duration / 3}s`,
            animationDelay: `${bubble.delay}s, ${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
