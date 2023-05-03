import './globals.css'
// Components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// Dark Mode: Providers
import Providers from '@/components/Providers'
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
  keywords: 'likha, design, agency, creative, branding',
  icons: {
    icon: '/images/likhaLogo.png',
    shortcut: '/images/likhaLogo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <Providers>
        <body className='transition-all duration-700 bg-yellow-50 dark:bg-stone-900'>
          <div className={poppins.className}>
            <Header />
            <div>
              {children}
            </div>
            <Footer />
          </div>
        </body>
      </Providers>
    </html>
  )
}
