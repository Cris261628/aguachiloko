import { Button } from "@/components/ui/button"
import { Fish, Shell, Waves, Sandwich, Beer, UtensilsCrossed } from "lucide-react"

const menuCategories = [
  {
    name: "Mariscos",
    icon: Shell,
    items: [
      { name: "Aguachile Verde", price: "$189" },
      { name: "Aguachile Negro", price: "$199" },
      { name: "Ceviche de Camarón", price: "$169" },
      { name: "Cóctel de Camarón", price: "$159" },
      { name: "Torre de Mariscos", price: "$349" },
      { name: "Camarones a la Diabla", price: "$219" },
    ],
  },
  {
    name: "Sushi Rolls",
    icon: UtensilsCrossed,
    items: [
      { name: "Roll Dragón", price: "$229" },
      { name: "Roll Philadelphia", price: "$189" },
      { name: "Roll Aguachiloco", price: "$249" },
      { name: "Roll Tempura", price: "$199" },
      { name: "Roll Especial", price: "$269" },
      { name: "Roll Spicy Tuna", price: "$209" },
    ],
  },
  {
    name: "Sashimi",
    icon: Fish,
    items: [
      { name: "Sashimi de Salmón", price: "$249" },
      { name: "Sashimi de Atún", price: "$269" },
      { name: "Sashimi Mixto", price: "$299" },
      { name: "Tiradito de Pescado", price: "$219" },
    ],
  },
  {
    name: "Tacos & Tostadas",
    icon: Sandwich,
    items: [
      { name: "Tacos de Pescado (3)", price: "$149" },
      { name: "Tacos de Camarón (3)", price: "$169" },
      { name: "Tostada de Ceviche", price: "$89" },
      { name: "Tostada de Pulpo", price: "$109" },
    ],
  },
  {
    name: "Bebidas",
    icon: Beer,
    items: [
      { name: "Michelada Clásica", price: "$79" },
      { name: "Michelada de Camarón", price: "$129" },
      { name: "Limonada Natural", price: "$45" },
      { name: "Agua de Jamaica", price: "$45" },
      { name: "Cerveza Nacional", price: "$55" },
    ],
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-ocean-deep/60 backdrop-blur-md px-8 py-6 border border-white/10">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider block">
              Menú
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Nuestro <span className="text-primary">Menú</span>
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Descubre nuestra amplia variedad de platillos preparados con los ingredientes más frescos
            </p>
          </div>
        </div>

        {/* Menu Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={category.name}
                className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={28} className="text-primary" />
                  <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex justify-between items-center py-2 border-b border-white/10 last:border-0"
                    >
                      <span className="text-foreground/90">{item.name}</span>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p
            className="bg-ocean-deep/60 backdrop-blur-md px-8 py-6 border border-white/10"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.9)" }}
          >
            ¿Listo para ordenar? ¡Visita nuestra sucursal más cercana!
          </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 rounded-full"
          >
            Ver Menú Completo
          </Button>
        </div>
      </div>
    </section>
  )
}