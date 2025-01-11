import { ProductCard } from "@/src/components/ui/product-card"
import { Product } from "@/src/types"

interface ProductGridProps {
  title: string
  products: Product[]
}

export function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

