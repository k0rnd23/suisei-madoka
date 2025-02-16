import { Button } from "@/components/ui/button"

export default function NewsletterSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Subscribe to our Newsletter</h2>
          <div className="flex gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 rounded-lg px-4 py-2 border-0" />
            <Button className="bg-[#0B1C3D] hover:bg-[#0B1C3D]/90 text-white">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

