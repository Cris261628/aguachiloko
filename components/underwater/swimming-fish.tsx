"use client"

import { useEffect, useState } from "react"

interface Fish {
  id: number
  top: number
  size: number
  color: string
  delay: number
  duration: number
  reverse: boolean
}

const fishColors = [
  "text-orange-400",
  "text-yellow-400",
  "text-cyan-400",
  "text-pink-400",
  "text-blue-300",
]

export function SwimmingFish() {
  const [fish, setFish] = useState<Fish[]>([])

  useEffect(() => {
    const initialFish: Fish[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      top: Math.random() * 70 + 15,
      size: Math.random() * 30 + 20,
      color: fishColors[Math.floor(Math.random() * fishColors.length)],
      delay: Math.random() * 20,
      duration: Math.random() * 15 + 15,
      reverse: Math.random() > 0.5,
    }))
    setFish(initialFish)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {fish.map((f) => (
        <div
          key={f.id}
          className={`absolute ${f.reverse ? "animate-fish-reverse" : "animate-fish"} ${f.color}`}
          style={{
            top: `${f.top}%`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
          }}
        >
          <svg
            width={f.size}
            height={f.size * 0.6}
            viewBox="0 0 50 30"
            fill="currentColor"
          >
            <ellipse cx="20" cy="15" rx="18" ry="12" />
            <polygon points="38,15 50,5 50,25" />
            <circle cx="10" cy="12" r="2" fill="white" />
            <circle cx="10" cy="12" r="1" fill="black" />
            <path
              d="M 15 8 Q 20 5 25 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.5"
            />
            <path
              d="M 15 22 Q 20 25 25 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
