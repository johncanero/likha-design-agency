import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section*/}
      <div className='md:flex md:justify-between'>
        <div className='md:ml-10 lg:ml-80 lg:mt-24 md:mt-10 lg:max-w-xl lg:mr-10'>
          <h2 className='font-bold md:text-4xl lg:text-7xl'>Branding & website design agency</h2>
          <p className='mr-2 md:mt-5 lg:mt-7 md:text-sm lg:text-base md:mr-8 lg:mr-0'>We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.</p>
          <Link href="/">
            <button className="font-bold border-2 md:px-4 md:py-3 lg:px-7 md:mt-4 lg:mt-6 lg:py-4 rounded-xl text-amber-50 border-stone-700 bg-stone-900 hover:bg-stone-800">
              Learn More
            </button>
          </Link>
        </div>

        <div>
          <Image src="/images/desktop/image-hero-desktop3-min.jpg"
            alt="bg-pattern-wave-amber"
            width={1400}
            height={1400}
          >
          </Image>
        </div>
      </div>

      {/* Design is Strategic Section */}
    </div>
  )
}
7