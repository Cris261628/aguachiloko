import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { DishesGallery } from "@/components/sections/dishes-gallery"
import { MenuSection } from "@/components/sections/menu-section"
import { LocationsSection } from "@/components/sections/locations-section"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { Footer } from "@/components/sections/footer"
import { Bubbles } from "@/components/underwater/bubbles"
import { UnderwaterVideo } from "@/components/underwater/underwater-video"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Video submarino de fondo (con fallback a gradiente si no existe) */}
      <UnderwaterVideo />

      {/* Burbujas sutiles encima del video — dan sensación de profundidad sin saturar */}
      <Bubbles />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-20">
        <Hero />
        <DishesGallery />
        <MenuSection />
        <LocationsSection />
        <ReviewsSection />
        <Footer />
      </div>
    </main>
  )
}
