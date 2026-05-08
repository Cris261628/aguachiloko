import { MapPin, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const locations = [
  {
    id: 1,
    name: "Aguachiloco Centro",
    address: "Av. Principal #123, Centro Histórico",
    city: "Ciudad de México",
    phone: "+52 55 1234 5678",
    hours: "12:00 PM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Aguachiloco Polanco",
    address: "Calle Masaryk #456, Polanco",
    city: "Ciudad de México",
    phone: "+52 55 9876 5432",
    hours: "1:00 PM - 12:00 AM",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Aguachiloco Playa",
    address: "Blvd. Costero #789, Zona Hotelera",
    city: "Cancún, Q. Roo",
    phone: "+52 998 123 4567",
    hours: "11:00 AM - 1:00 AM",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&h=400&fit=crop",
  },
]

export function LocationsSection() {
  return (
    <section id="sucursales" className="relative py-20 px-4 bg-ocean-deep/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span 
            className="text-primary text-sm font-semibold uppercase tracking-wider"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
          >
            Sucursales
          </span>
          <h2 
            className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.85)" }}
          >
            Encuéntranos <span className="text-accent">Cerca de Ti</span>
          </h2>
          <p 
            className="text-white/90 max-w-2xl mx-auto"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.9)" }}
          >
            Visita cualquiera de nuestras sucursales y disfruta de la mejor experiencia marina
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className="bg-background/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${location.image})` }}
              >
                <div className="h-full w-full bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">{location.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-foreground/90">{location.address}</p>
                      <p className="text-muted-foreground text-sm">{location.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-foreground/90">{location.hours}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-foreground/90">{location.phone}</p>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full">
                  Cómo Llegar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
