import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#0B1C3D] to-[#1E3A8A] py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="text-[#4169E1] italic font-medium">Virtual Artist</span>
            <h1 className="text-white text-5xl font-bold leading-tight">
              Experience the magic of Hoshimachi Suisei
            </h1>
            <Button className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0B1C3D] px-8 py-6 rounded-xl font-semibold">
              Explore Now
              <span className="ml-2">→</span>
            </Button>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <video
              src="/placeholder.mp4"
              loop
              autoPlay
              muted
              className="w-full h-full object-cover"
            >
              <source src="/placeholder.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
