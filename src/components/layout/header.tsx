import Image from 'next/image'
import Link from 'next/link'
import { Search, ShoppingCart, Menu } from 'lucide-react'
import { Button } from "@/src/components/ui/button"

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
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

