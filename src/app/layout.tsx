import './globals.css'
import Navbar from '../components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TDL Guide',
  description: 'Learn everything about Tally Definition Language (TDL)',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif', background: '#fdfdfd' }}>
        <Navbar />
        <main style={{ padding: '1rem 2rem' }}>{children}</main>
      </body>
    </html>
  )
}
