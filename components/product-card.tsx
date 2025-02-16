import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

interface ProductCardProps {
  title: string
  price: number
  image: string
  category: string
}

export default function ProductCard({ title, price, image, category }: ProductCardProps) {
  return (
    <Card>
      <CardHeader className="p-0">
        <div className="relative aspect-square">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-t-lg" />
          <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-md text-sm">{category}</span>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${price}</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

