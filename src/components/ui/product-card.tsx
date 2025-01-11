import Image from "next/image"
import { Heart } from 'lucide-react'
import { Button } from "./button"
import { Product } from "@/src/types"

export function ProductCard({ name, price, oldPrice, image, discount, isNew }: Product) {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {discount && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          -{discount}%
        </span>
      )}
      {isNew && (
        <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
          NUEVO
        </span>
      )}
      <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white">
        <Heart className="w-4 h-4 text-gray-600" />
      </button>
      <div className="aspect-square relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm text-gray-700 font-medium truncate">{name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <div>
            {oldPrice && (
              <span className="text-xs text-gray-500 line-through">
                ${oldPrice.toFixed(2)}
              </span>
            )}
            <span className="text-sm font-bold text-primary ml-1">
              ${price.toFixed(2)}
            </span>
          </div>
          <Button size="sm" className="bg-primary text-white rounded-full hover:bg-primary/90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}

