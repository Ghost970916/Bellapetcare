import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Dog, Cat, Bird, Fish, Rabbit, Bone, Shield, Gift } from 'lucide-react'
import Link from 'next/link'

const categories = [
  { icon: Dog,  href: "/categoria/perros" },
  { icon: Cat,  href: "/categoria/gatos" },
  { icon: Bird,  href: "/categoria/aves" },
  { icon: Fish,  href: "/categoria/peces" },
  { icon: Rabbit,  href: "/categoria/roedores" },
  { icon: Bone,  href: "/categoria/alimentos" },
  { icon: Shield,  href: "/categoria/cuidados" },
  { icon: Gift,  href: "/categoria/accesorios" },
]

export function Categories() {
  return (
    <section className="py-8 bg-gray-50">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 px-4">
          {categories.map(({ icon: Icon, href }) => (
            <Link 
              key={href}
              href={href}
              className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-4 rounded-full">
                <Icon className="w-6 h-6 text-gray-600" />
              </div>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  )
}

