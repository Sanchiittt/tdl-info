// 'use client';
// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md text-gray-800 p-4 flex justify-between">
//       <h1 className="text-xl font-bold">TDL Guide</h1>
//       <div className="space-x-4">
//         <Link href="/tdl">Home</Link>
//         <Link href="/tdl/what-is-tdl">What is TDL</Link>
//         <Link href="/tdl/applications">Applications</Link>
//         <Link href="/tdl/getting-started">Getting Started</Link>
//         <Link href="/tdl/resources">Resources</Link>
//       </div>
//     </nav>
//   );
// }


// 'use client';

// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav style={{ padding: '1rem', background: '#f0f4ff', display: 'flex', justifyContent: 'space-between' }}>
//       <h1 style={{ fontWeight: 'bold' }}>TDL Guide</h1>
//       <div style={{ display: 'flex', gap: '1rem' }}>
//         <Link href="/">Home</Link>
//         <Link href="/what-is-tdl">What is TDL?</Link>
//         <Link href="/applications">Applications</Link>
//         <Link href="/getting-started">Getting Started</Link>
//       </div>
//     </nav>
//   );
// }


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

