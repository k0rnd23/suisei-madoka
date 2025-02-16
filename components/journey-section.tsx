import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function JourneySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/journey.jpg"
              alt="Suisei's Journey"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-blue-500 italic">Journey</span>
            <h2 className="text-4xl font-bold text-slate-800">From the Stars to the Stage</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">The Beginning</h3>
                <p className="text-slate-600">
                  Started as an independent VTuber in 2018, pursuing her dreams of becoming a singer with determination and passion.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Rising Star</h3>
                <p className="text-slate-600">Joined hololive's INNK Music label in 2019, expanding her reach to a global audience and refining her musical style.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Major Milestones</h3>
                <p className="text-slate-600">Released chart-topping albums like "Still Still Stellar" and performed in sold-out concerts worldwide.</p>
              </div>
            </div>
            <Button className="bg-[#0B1C3D] hover:bg-[#0B1C3D]/90">Learn More</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/music.jpg"
                alt="Music Performance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-6 py-2 rounded-full font-medium">Music</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/gaming.jpg"
                alt="Gaming Stream"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-6 py-2 rounded-full font-medium">Gaming</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/concert.jpg"
                alt="Live Concert"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-6 py-2 rounded-full font-medium">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}