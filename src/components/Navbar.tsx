





'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Home, Info, FileText, Rocket } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: '/', label: 'Home', icon: <Home size={18} className="mr-2" /> },
    { href: '/about', label: 'About', icon: <Info size={18} className="mr-2" /> },
    { href: '/applications', label: 'Applications', icon: <Rocket size={18} className="mr-2" /> },
    { href: '/getting-started', label: 'Getting Started', icon: <FileText size={18} className="mr-2" /> },
  ]

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 tracking-wide">
          TDL Guide
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-sm lg:text-base relative">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-1 py-1 flex items-center font-medium transition-all 
                ${
                  pathname === link.href
                    ? 'text-blue-600 font-semibold after:w-full'
                    : 'text-gray-700 hover:text-blue-600 after:w-0'
                }
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger for Mobile */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white border-t shadow-sm transition-all duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-4 py-2 rounded-md font-medium transition-all
                  ${
                    pathname === link.href
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  }
                `}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
