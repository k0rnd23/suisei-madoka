import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const offers = [
  {
    category: "Album",
    title: "SuperNova",
    price: 29.99,
    image: "/images/album_normal.jpg",
    rating: 5
  },
  {
    category: "Single",
    title: "Moonlight",
    price: 12.99,
    image: "/images/moonlight.jpg",
    rating: 5
  },
  {
    category: "Merch",
    title: "Shout In Crisis Concert T-Shirt",
    price: 34.99,
    image: "/images/shout.jpg",
    rating: 5
  },
  {
    category: "Digital",
    title: "Complete Digital Collection",
    price: 19.99,
    image: "/images/starpeggio.webp",
    rating: 5
  }
]

export default function OfferSection() {
  return (
    <section className="bg-[#0B1C3D] py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-[#4169E1] italic">Featured</span>
            <h2 className="text-4xl font-bold text-white mt-2">Latest Releases</h2>
          </div>
          <Button className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0B1C3D]">View All Products</Button>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <div className="relative">
                <div className="relative aspect-square">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="absolute top-2 left-2 bg-[#4169E1] text-white px-3 py-1 rounded-full text-sm">
                  {offer.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{offer.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${offer.price}</span>
                  <div className="flex gap-1">
                    {[...Array(offer.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}