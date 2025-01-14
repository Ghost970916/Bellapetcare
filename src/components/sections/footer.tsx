import Image from "next/image"
import Link from "next/link"
import { SiFacebook, SiYoutube, SiInstagram, SiLinkedin } from 'react-icons/si'

export function Footer() {
  return (
    <footer className="bg-[#0A2533] text-[#73A2AD]">
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
              <li><Link href="/ofertas" className="hover:text-white transition-colors">Ofertas del mes</Link></li>
              <li><Link href="/proximos" className="hover:text-white transition-colors">Registros Clientes</Link></li>
              <li><Link href="/ubicacion" className="hover:text-white transition-colors">Ubícanos</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legales</h3>
            <ul className="space-y-2">
              <li><Link href="/terminos" className="hover:text-white transition-colors">Términos y condiciones</Link></li>
              <li><Link href="/politicas" className="hover:text-white transition-colors">Políticas comerciales</Link></li>
              <li><Link href="/devoluciones" className="hover:text-white transition-colors">Devoluciones</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctenos</h3>
            <p>comercial@bellapetcare.cl</p>
            <p>Vicuña Makena #1659,</p>
            <p>Santiago de Chile</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="hover:text-white transition-colors">
                <SiInstagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <SiFacebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <SiYoutube className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <SiLinkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

