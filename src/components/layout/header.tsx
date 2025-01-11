import Image from 'next/image'
import Link from 'next/link'
import { Search, User, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

export function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Bella PetCare"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        
        {/* Barra de búsqueda */}
        <div className="hidden md:flex items-center flex-grow mx-8">
          <div className="relative flex items-center w-full max-w-md">
            <Select>
              <option value="">Categorías</option>
              {/* Add more options here */}
            </Select>
            <Input 
              type="search" 
              placeholder="¿Qué estás buscando?" 
              className="pl-2 rounded-l-none"
            />
            <Button size="icon" className="absolute right-0 rounded-l-none">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navegación y iconos */}
        <div className="flex items-center space-x-6">
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
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

