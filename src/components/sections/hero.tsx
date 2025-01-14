import Image from "next/image";
import { Button } from "@/src/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#E8F4F8] to-[#F8E8EC] overflow-hidden h-[500px]"> {/* Añade una altura fija */}
      <div className="container mx-auto px-4 py-16 flex items-center h-full"> {/* Asegura que el contenedor también ocupe toda la altura */}
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-primary">PETSHOP</span>
            <br />
            <span className="text-secondary">ESPECIALIZADA</span>
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            Petfriendly
            <br />
            Familiar
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
            OFERTAS NAVIDAD
          </Button>
        </div>
        <div className="absolute inset-0 hidden md:block"> {/* Usa inset-0 para que ocupe todo el contenedor padre */}
          <Image
            src="/hero-pets.png"
            alt="Mascotas felices"
            fill
            style={{ objectFit: 'cover' }} // Usa style para aplicar objectFit
            priority={true} // Prioriza la carga de la imagen principal
          />
        </div>
      </div>
    </section>
  );
}