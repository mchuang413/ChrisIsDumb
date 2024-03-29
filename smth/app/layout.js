import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oasis',
  description: '- Mindulness at its finest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/assets/logo.png"
        type="image/<generated>"
      />
      <body className={inter.className}><Navbar/> {children}</body>
    </html>
  )
}
