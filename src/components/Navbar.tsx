


import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          TDL Guide
        </Link>
        <div className="space-x-4 text-sm sm:text-base">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition font-medium">
            About
          </Link>
          <Link href="/applications" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Applications
          </Link>
          <Link href="/getting-started" className="text-gray-700 hover:text-blue-600  font-medium">
            Getting Started
          </Link>
        </div>
      </div>
    </nav>
  )
}

