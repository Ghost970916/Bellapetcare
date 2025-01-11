import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram } from 'lucide-react'

export function Promotions() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/christmas-promo.jpg"
            alt="Merry Christmas"
            width={600}
            height={300}
            className="w-full object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-4xl font-bold text-red-600">MERRY<br />CHRISTMAS</h3>
            <p className="text-gray-700 mt-2">Best Season of the Year</p>
            <div className="flex gap-2 mt-4">
              <Link href="#" className="p-2 bg-white rounded-full hover:bg-gray-100">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-white rounded-full hover:bg-gray-100">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-white rounded-full hover:bg-gray-100">
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden bg-secondary/10">
          <Image
            src="/cashback-promo.jpg"
            alt="Cashback Promotion"
            width={600}
            height={300}
            className="w-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <div className="bg-red-500 text-white px-4 py-2 rounded-lg rotate-12">
              <span className="text-sm">CASH BACK</span>
              <span className="text-2xl font-bold block">20%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

