


// import Link from 'next/link'

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//         <Link href="/" className="text-xl font-bold text-blue-600">
//           TDL Guide
//         </Link>
//         <div className="space-x-4 text-sm sm:text-base">
//           <Link href="/" className="text-gray-700 hover:text-blue-600 transition font-medium">
//             Home
//           </Link>
//           <Link href="/about" className="text-gray-700 hover:text-blue-600 transition font-medium">
//             About
//           </Link>
//           <Link href="/applications" className="text-gray-700 hover:text-blue-600 transition font-medium">
//             Applications
//           </Link>
//           <Link href="/getting-started" className="text-gray-700 hover:text-blue-600  font-medium">
//             Getting Started
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }





'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/applications', label: 'Applications' },
    { href: '/getting-started', label: 'Getting Started' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 tracking-wide">
          TDL Guide
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm lg:text-base">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-medium transition-all text-gray-700 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                pathname === link.href ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white border-t shadow-sm">
          <div className="flex flex-col space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block font-medium text-gray-700 hover:text-blue-600 transition ${
                  pathname === link.href ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

