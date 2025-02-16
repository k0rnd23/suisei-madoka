import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    category: "Album",
    name: "SuperNova",
    originalPrice: 35.0,
    salePrice: 29.99,
    rating: 5,
    image: "/images/album_normal.jpg"
  },
  {
    id: 2,
    category: "Single",
    name: "Stellar Stellar",
    originalPrice: 15.0,
    salePrice: 12.99,
    rating: 5,
    image: "/images/stellar-stellar.png"
  },
  {
    id: 3,
    category: "Merchandise",
    name: "Nendroid Suisei",
    originalPrice: 40.0,
    salePrice: 34.99,
    rating: 5,
    image: "/images/cutie.jpeg"
  },
  {
    id: 4,
    category: "Merchandise",
    name: "Omocat x Suisei Zipper",
    originalPrice: 250.0,
    salePrice: 199.99,
    rating: 5,
    image: "/images/omocat.jpg"
  }
]

export default function ShopSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <span className="text-blue-500 italic">Official Store</span>
        <h2 className="text-4xl font-bold text-slate-800 mt-2">Latest Releases</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg p-4 shadow-sm">
            <div className="relative">
              <span className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {product.category}
              </span>
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <h3 className="font-semibold text-slate-800 mb-2">{product.name}</h3>

            <div className="flex justify-between items-center">
              <div className="space-x-2">
                <span className="text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                <span className="font-bold text-slate-800">${product.salePrice.toFixed(2)}</span>
              </div>
              <div className="flex">
                {[...Array(product.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button className="bg-slate-800 hover:bg-slate-700 px-8 py-6">View All Products</Button>
      </div>
    </section>
  )
}