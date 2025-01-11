import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export function Brands() {
  const brands = [
    { name: "Dogly", logo: "/brands/dogly.png" },
    { name: "Natuka", logo: "/brands/natuka.png" },
    { name: "Food For", logo: "/brands/food-for.png" },
    { name: "Puro Mimo", logo: "/brands/puro-mimo.png" },
    { name: "Dogly Diet", logo: "/brands/dogly-diet.png" },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-center text-gray-600 mb-8">
          MARCAS ASOCIADAS
        </h2>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-8 px-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex-shrink-0 w-32 h-20 relative bg-white rounded-lg shadow-sm"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  )
}

