import { Button } from "@/components/ui/button"
import { Music, Star } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[500px] rounded-2xl overflow-hidden">
          <Image
            src="/images/big_pic.webp"
            alt="Suisei Portrait"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-8">
          <div>
            <span className="text-blue-500 italic">About Suisei</span>
            <h2 className="text-4xl font-bold text-slate-800 mt-2">
              Virtual Singer &<br />
              Content Creator
            </h2>
          </div>

          <p className="text-slate-600">
            A talented VTuber under hololive Production, known for her powerful voice and exceptional
            music performances. With a passion for singing and creating content, she continues to
            captivate audiences worldwide.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Music className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Professional Singer</h3>
                <p className="text-slate-600">Released multiple successful original songs and albums</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Star className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Live Performer</h3>
                <p className="text-slate-600">Regular concerts and special performances</p>
              </div>
            </div>
          </div>

          <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-6 rounded-xl">
            Learn More →
          </Button>
        </div>
      </div>
    </section>
  )
}