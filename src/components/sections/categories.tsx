import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Dog, Cat, Bird, Fish, Rabbit, Bone, Shield, Gift } from 'lucide-react'
import Link from 'next/link'

const categories = [
  { icon: Dog, label: "Perros", href: "/categoria/perros" },
  { icon: Cat, label: "Gatos", href: "/categoria/gatos" },
  { icon: Bird, label: "Aves", href: "/categoria/aves" },
  { icon: Fish, label: "Peces", href: "/categoria/peces" },
  { icon: Rabbit, label: "Roedores", href: "/categoria/roedores" },
  { icon: Bone, label: "Alimentos", href: "/categoria/alimentos" },
  { icon: Shield, label: "Cuidados", href: "/categoria/cuidados" },
  { icon: Gift, label: "Accesorios", href: "/categoria/accesorios" },
]

export function Categories() {
  return (
    <section className="py-8 bg-gray-50">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 px-4">
          {categories.map(({ icon: Icon, label, href }) => (
            <Link 
              key={href}
              href={href}
              className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-4 rounded-full">
                <Icon className="w-6 h-6 text-gray-600" />
              </div>
              <span className="text-xs text-gray-600 mt-1">{label}</span>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  )
}

