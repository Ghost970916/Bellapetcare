import Image from 'next/image'
import Link from 'next/link'
import { User, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/productos', label: 'Productos' },
  { href: '/nosotros', label: 'Nosotros' },
]

export function Header() {
  // En un componente real, esto vendría de un estado o un router
  const currentPath = '/'

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

        {/* Navegación y iconos */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[#73A2AD] hover:text-[#3D3D3D] relative py-2",
                  currentPath === item.href && "text-[#3D3D3D]"
                )}
              >
                {item.label}
                {currentPath === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#41B6E6]"></span>
                )}
              </Link>
            ))}
          </nav>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5 text-[#73A2AD]" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5 text-[#73A2AD]" />
          </Button>
        </div>
      </div>
    </header>
  )
}

