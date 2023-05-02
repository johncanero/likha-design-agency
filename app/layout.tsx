import './globals.css'
// Components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// Google Fonts
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Likha Design Agency',
  description: 'A Creative and Design Branding Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Dark Mode Providers */}
      <body className={inter.className}>
        <Header />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
