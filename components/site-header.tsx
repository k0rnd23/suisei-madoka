import Link from "next/link"
import { ChevronDown, Search, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function SiteHeader() {
  return (
    <header className="w-full bg-[#0B1C3D] text-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/favicon.ico"
              alt="Suisei Logo"
              width={32}
              height={32}
              className="rounded-full bg-[#4169E1]"
            />
            <span className="text-xl font-semibold text-white">Suisei</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[#4169E1]">
              Home
            </Link>
            <Link href="/mmd" className="text-white hover:text-[#4169E1]">
              Music
            </Link>
            <Link href="/mmd" className="text-white hover:text-[#4169E1]">
              Concerts
            </Link>
            <Link href="/mmd" className="text-white hover:text-[#4169E1]">
              Shop
            </Link>
            <Link href="/mmd" className="text-white hover:text-[#4169E1]">
              News
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="h-10 w-10 rounded-full bg-[#4169E1] flex items-center justify-center">
              <Search className="h-5 w-5 text-white" />
            </button>
            <Link href="/cart" className="flex items-center space-x-2 rounded-full bg-[#4169E1] px-4 py-2 text-white">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart (0)</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}