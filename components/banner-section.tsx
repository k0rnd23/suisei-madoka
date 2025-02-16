import Link from "next/link"

export default function BannerSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Banner */}
        <Link href="/mmd" className="relative overflow-hidden rounded-2xl group">
          <div className="relative h-[280px] bg-gradient-to-r from-blue-400 to-blue-600 p-8 transition-transform group-hover:scale-105">
            <div className="relative z-10">
              <p className="text-white/90 italic mb-2">New Release!!</p>
              <h3 className="text-3xl font-bold text-white leading-tight">
                Latest Single
                <br />
                Release
              </h3>
            </div>
            {/* Decorative elements */}
            <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-blue-300/20 rounded-tl-full" />
          </div>
        </Link>

        {/* Right Banner */}
        <Link href="/mmd" className="relative overflow-hidden rounded-2xl group">
          <div className="relative h-[280px] bg-gradient-to-r from-indigo-400 to-indigo-600 p-8 transition-transform group-hover:scale-105">
            <div className="relative z-10">
              <p className="text-white/90 italic mb-2">Live!!</p>
              <h3 className="text-3xl font-bold text-white leading-tight">
                Get 20% off
                <br />
                Concert Tickets
              </h3>
            </div>
            {/* Decorative elements */}
            <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-indigo-300/20 rounded-tl-full" />
          </div>
        </Link>
      </div>
    </section>
  )
}

