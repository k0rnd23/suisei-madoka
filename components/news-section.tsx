import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    date: "Feb 17",
    category: "Music",
    title: "New Single Release: 'ビーナスバグ'",
    excerpt: "Announcing the release of Suisei's latest single featuring special collaborations.",
    image: "/images/new.jpg"
  },
  {
    id: 2,
    date: "Feb 15",
    category: "Concert",
    title: "Nippon Budokan Live SuperNova",
    excerpt: "Upcoming concert dates and ticket information for the new world tour.",
    image: "/images/budokan.png"
  }
]

export default function NewsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="text-blue-500 italic">Latest Updates</span>
            <h2 className="text-4xl font-bold text-slate-800 mt-2">News & Events</h2>
          </div>
          <Link href="/news">
            <Button variant="outline">View All News</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-1">
                  {item.date}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-blue-500">{item.category}</span>
                  <span className="text-sm text-slate-400">By Suisei Staff</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.excerpt}</p>
                <Link href={`/news/${item.id}`}>
                  <Button variant="outline">Read More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}