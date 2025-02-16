import Link from "next/link"
import { Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Contact Us</h3>
            <div className="space-y-2 text-slate-600">
              <p>Email: contact@suisei.com</p>
              <p>Phone: +81 123 456 789</p>
              <p>Tokyo, Japan</p>
            </div>
          </div>

          {/* Center Logo and Social */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-8 w-8 bg-blue-500 rounded-full" />
              <span className="text-xl font-semibold text-slate-800">Suisei</span>
            </div>
            <p className="text-slate-600">Virtual Singer & Content Creator</p>
            <div className="flex justify-center space-x-4">
              <Link href="#" className="text-slate-400 hover:text-blue-500">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-500">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-500">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Utility Pages */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Utility Pages</h3>
            <ul className="space-y-2 text-slate-600">
              <li>
                <Link href="#" className="hover:text-blue-500">
                  Style Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500">
                  404 Not Found
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500">
                  Password Protected
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500">
                  Licenses
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-slate-600">
          <p>Copyright © {new Date().getFullYear()} Suisei. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

