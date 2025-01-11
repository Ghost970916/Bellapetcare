import Image from 'next/image'
import Link from 'next/link'
import { Search, Menu, ShoppingCart } from 'lucide-react'

export function Header() {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Bella PetCare"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-primary">
            Inicio
          </Link>
          <Link href="/productos" className="text-gray-700 hover:text-primary">
            Productos
          </Link>
          <Link href="/nosotros" className="text-gray-700 hover:text-primary">
            Nosotros
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:text-primary">
            <Search className="w-6 h-6" />
          </button>
          <button className="p-2 hover:text-primary">
            <ShoppingCart className="w-6 h-6" />
          </button>
          <button className="p-2 md:hidden hover:text-primary">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

