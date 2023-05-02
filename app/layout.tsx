import './globals.css'
// Components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// Google Fonts
import { Poppins } from 'next/font/google'

// Install npm @next/font 
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
})

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
      <body>
        <div className={poppins.className}>
          <Header />
          <div>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
