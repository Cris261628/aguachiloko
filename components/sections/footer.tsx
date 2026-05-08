import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-white/10 bg-ocean-deep/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Aguachiloco"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-primary">Aguachiloco</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              La mejor experiencia de mariscos y sushi fresco en un ambiente único submarino y playero.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {["Inicio", "Platillos", "Menú", "Sucursales", "Reseñas"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📧 info@aguachiloco.com</li>
              <li>📞 +52 55 1234 5678</li>
              <li>📍 Ciudad de México, México</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Horarios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Lunes - Jueves: 12:00 - 22:00</li>
              <li>Viernes - Sábado: 12:00 - 00:00</li>
              <li>Domingo: 12:00 - 21:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Aguachiloco. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Aviso de Privacidad
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
