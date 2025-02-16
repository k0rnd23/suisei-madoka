import { Star } from "lucide-react"
import Image from "next/image"

const stats = [
  {
    number: "2.6M+",
    label: "YouTube Subscribers"
  },
  {
    number: "50+",
    label: "Original Songs"
  },
  {
    number: "1000M+",
    label: "Total Views"
  },
  {
    number: "7+",
    label: "Years Active"
  }
]

const testimonials = [
  {
    id: 1,
    content: "Suisei's music touches my heart every time. Her growth as an artist is truly inspiring, and watching her live performances is always an incredible experience!",
    author: "Hoshiyomi",
    role: "Fan since 2018",
    avatar: "/images/hoshiyomi.jpg"
  }
]

export default function TestimonialSection() {
  const testimonial = testimonials[0]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-blue-500 italic">Fan Messages</span>
        <h2 className="text-4xl font-bold text-slate-800 mt-2 mb-12">Our Community</h2>

        <div className="space-y-6">
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto relative">
            <Image
              src={testimonial.avatar}
              alt={testimonial.author}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <p className="text-slate-600 text-lg italic">
            "{testimonial.content}"
          </p>

          <div>
            <h4 className="font-semibold text-slate-800">{testimonial.author}</h4>
            <p className="text-slate-500">{testimonial.role}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-8 rounded-full border-2 border-blue-200 aspect-square"
          >
            <span className="text-3xl md:text-4xl font-bold text-slate-800">{stat.number}</span>
            <span className="text-sm md:text-base text-slate-600 text-center">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}