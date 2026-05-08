"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    id: 1,
    name: "María González",
    avatar: "MG",
    rating: 5,
    comment: "¡El mejor aguachile que he probado en mi vida! Los mariscos súper frescos y el ambiente es increíble. Definitivamente regresaré.",
    date: "Hace 2 semanas",
    location: "Sucursal Centro",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    avatar: "CR",
    rating: 5,
    comment: "El sushi es espectacular, especialmente el Roll Dragón. El servicio excelente y los precios muy justos para la calidad.",
    date: "Hace 1 mes",
    location: "Sucursal Polanco",
  },
  {
    id: 3,
    name: "Ana Martínez",
    avatar: "AM",
    rating: 5,
    comment: "Celebré mi cumpleaños aquí y fue perfecto. La torre de mariscos es impresionante y las micheladas de camarón son adictivas.",
    date: "Hace 3 semanas",
    location: "Sucursal Playa",
  },
  {
    id: 4,
    name: "Roberto Sánchez",
    avatar: "RS",
    rating: 4,
    comment: "Muy buena experiencia. El ceviche mixto tiene un sabor único. El lugar siempre está lleno, así que mejor reservar.",
    date: "Hace 1 semana",
    location: "Sucursal Centro",
  },
  {
    id: 5,
    name: "Laura Hernández",
    avatar: "LH",
    rating: 5,
    comment: "Los tacos de pescado están increíbles y la salsa de mango es un sueño. Ambiente playero muy agradable, perfecto para ir con amigos.",
    date: "Hace 2 meses",
    location: "Sucursal Polanco",
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ]

  return (
    <section id="resenas" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-ocean-deep/60 backdrop-blur-md rounded-3xl px-8 py-6 border border-white/10">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider block">
             Reseñas
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Lo Que Dicen <span className="text-primary">Nuestros Clientes</span>
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Miles de clientes satisfechos nos respaldan. ¡Lee sus experiencias!
            </p>
          </div>
        </div>
        

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={prevReview}
              className="rounded-full border-primary/50 bg-background/80 backdrop-blur-sm hover:bg-primary/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={nextReview}
              className="rounded-full border-primary/50 bg-background/80 backdrop-blur-sm hover:bg-primary/20"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
            {visibleReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  {`"${review.comment}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">{review.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {review.location} • {review.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-8 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={prevReview}
              className="rounded-full border-primary/50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextReview}
              className="rounded-full border-primary/50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "4.9", label: "Calificación Promedio", icon: "⭐" },
            { value: "10K+", label: "Clientes Felices", icon: "😊" },
            { value: "3", label: "Sucursales", icon: "📍" },
            { value: "50+", label: "Platillos en Menú", icon: "🍽️" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center glass-card rounded-xl p-6"
            >
              <span className="text-3xl mb-2 block">{stat.icon}</span>
              <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
