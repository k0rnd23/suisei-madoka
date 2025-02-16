import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  author: string
}

export default function NewsCard({ title, excerpt, date, image, author }: NewsCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-1">{date}</div>
      </div>
      <CardContent className="p-6">
        <p className="text-sm text-slate-500 mb-2">By {author}</p>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600 mb-4">{excerpt}</p>
        <Button variant="outline">Read More</Button>
      </CardContent>
    </Card>
  )
}

