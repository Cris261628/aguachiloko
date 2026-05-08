import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-4"
    >
      {/* Wave decoration at top */}
      <div className="absolute top-16 left-0 right-0 h-32 overflow-hidden opacity-30">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full animate-wave">
          <path
            d="M0,60 C150,20 350,100 600,60 C850,20 1050,100 1200,60 L1200,0 L0,0 Z"
            fill="currentColor"
            className="text-ocean-light"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="animate-float mb-6">
          <Image
            src="/images/logo.png"
            alt="Aguachiloco - Marisquería & Sushi"
            width={280}
            height={280}
            className="w-48 h-48 md:w-72 md:h-72 object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Tagline */}
        <div className="bg-ocean-deep/60 backdrop-blur-md rounded-3xl px-8 py-6 mb-8 border border-white/10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
            <span className="text-primary">Del Mar</span> a Tu Mesa
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-2xl leading-relaxed">
            Sumérgete en una experiencia única de sabores marinos frescos y sushi artesanal.
            <br className="hidden md:block" />
            ¡Donde cada bocado es una ola de frescura!
          </p>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6 rounded-full shadow-lg shadow-accent/30"
          >
            Ver Menú
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-6 rounded-full"
          >
            Encontrar Sucursal
          </Button>
        </div>
      </div>

      {/* Decorative bubbles around logo */}
      <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-bubble/40 animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-1/4 right-1/3 w-6 h-6 rounded-full bg-bubble/30 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-bubble/50 animate-float" style={{ animationDelay: "1.5s" }} />
    </section>
  )
}
