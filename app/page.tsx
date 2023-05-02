import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* Landing Page */}
      <h1 className="p-6 text-3xl font-bold text-center underline">
        Likha Design Agency
      </h1>
    </div>
  )
}
