import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0A2533] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/logo-white.svg"
              alt="Bella PetCare"
              width={150}
              height={50}
              className="mb-4"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">¿Qué buscas hoy?</h3>
            <ul className="space-y-2">
              <li><Link href="/ofertas">Ofertas del mes</Link></li>
              <li><Link href="/proximos">Próximos eventos</Link></li>
              <li><Link href="/ubicacion">Ubicanos</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legales</h3>
            <ul className="space-y-2">
              <li><Link href="/terminos">Términos y condiciones</Link></li>
              <li><Link href="/politicas">Políticas comerciales</Link></li>
              <li><Link href="/devoluciones">Devoluciones</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctenos</h3>
            <p>comercial@bellapetcare.cl</p>
            <p>Vicuña Mackenna #4565,</p>
            <p>Santiago de Chile</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

