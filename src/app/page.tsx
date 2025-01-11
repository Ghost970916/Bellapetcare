import { Header } from "@/src/components/layout/header"
import { Hero } from "@/src/components/sections/hero"
import { Categories } from "@/src/components/sections/categories"
import { ProductGrid } from "@/src/components/sections/product-grid"
import { Promotions } from "@/src/components/sections/promotions"
import { Brands } from "@/src/components/sections/brands"
import { Footer } from "@/src/components/sections/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <ProductGrid title="LOS MÁS VENDIDOS" products={bestSellers} />
        <ProductGrid title="RECOMENDADOS" products={recommended} />
        <Promotions />
        <Brands />
      </main>
      <Footer />
    </>
  )
}

// Mover estos datos a un archivo separado en el futuro
const bestSellers = [
  {
    id: "1",
    name: "Kong Classic",
    price: 14.50,
    oldPrice: 16.99,
    image: "/products/kong-classic.jpg",
    discount: 15,
  },
  // Añadir más productos...
]

const recommended = [
  {
    id: "1",
    name: "Royal Canin Mini Adult",
    price: 24.50,
    oldPrice: 29.99,
    image: "/products/royal-canin.jpg",
    discount: 20,
  },
  // Añadir más productos...
]

