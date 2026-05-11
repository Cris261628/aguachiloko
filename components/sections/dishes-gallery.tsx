"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const dishes = [
  {
    id: 1,
    name: "Aguachile Verde",
    description: "Camarones frescos marinados en limón con chile serrano",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&h=400&fit=crop",
    category: "Mariscos",
  },
  {
    id: 2,
    name: "Roll Dragón",
    description: "Roll de camarón tempura con aguacate y anguila",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop",
    category: "Sushi",
  },
  {
    id: 3,
    name: "Ceviche Mixto",
    description: "Mezcla de mariscos frescos con cítricos y especias",
    image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=600&h=400&fit=crop",
    category: "Mariscos",
  },
  {
    id: 4,
    name: "Sashimi Premium",
    description: "Selección de pescados frescos del día",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop",
    category: "Sushi",
  },
  {
    id: 5,
    name: "Torre de Mariscos",
    description: "Espectacular torre con camarón, pulpo y pescado",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop",
    category: "Especialidades",
  },
  {
    id: 6,
    name: "Tacos de Pescado",
    description: "Pescado empanizado con salsa de mango",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=400&fit=crop",
    category: "Tacos",
  },
]

export function DishesGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % dishes.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + dishes.length) % dishes.length)
  }

  return (
    <section id="platillos" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-ocean-deep/60 backdrop-blur-md px-8 py-6 border border-white/10">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider block">
              Nuestros Platillos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Sabores del <span className="text-primary">Océano</span>
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Cada platillo es una obra de arte preparada con los ingredientes más frescos del mar
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className="group relative overflow-hidden rounded-2xl glass-card hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/80 text-primary-foreground rounded-full mb-2">
                  {dish.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-1">{dish.name}</h3>
                <p className="text-sm text-muted-foreground">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Controls */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full border-primary/50"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full border-primary/50"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
