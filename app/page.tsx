import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section*/}
      <div className='mb-12 md:flex md:justify-between'>
        {/* Mobile Hero Image*/}
        <div className='block md:hidden'>
          <Image src="/images/mobile/image-hero-mobile.jpg"
            alt="bg-pattern-wave-amber"
            width={1400}
            height={1400}
          >
          </Image>
        </div>

        <div className='max-w-xs mx-6 mt-8 md:mt-10 md:mx-0 md:ml-10 lg:ml-80 lg:mt-24 md:max-w-lg lg:max-w-xl lg:mr-10'>
          <h2 className='text-4xl font-bold md:pr-4 lg:pr-0 md:text-5xl lg:text-7xl'>Branding & website design agency</h2>
          <p className='mt-5 lg:mt-7 md:text-sm lg:text-base md:mr-8 lg:mr-0'>We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.</p>
          <Link href="/">
            <button className="px-4 py-3 mt-6 font-bold border-2 lg:px-7 lg:mt-6 lg:py-4 rounded-xl text-amber-50 border-stone-700 bg-stone-900 hover:bg-stone-800">
              Learn More
            </button>
          </Link>
        </div>

        {/* Desktop Hero Image */}
        <div className='hidden lg:block'>
          <Image src="/images/desktop/image-hero-desktop3-min.jpg"
            alt="bg-pattern-wave-amber"
            width={1400}
            height={1400}
          >
          </Image>
        </div>

        {/* Tablet Hero Image */}
        <div className='hidden md:block lg:hidden'>
          <Image src="/images/tablet/image-hero-md2.jpg"
            alt="bg-pattern-wave-amber"
            width={1100}
            height={1100}
          >
          </Image>
        </div>
      </div>




      {/* Design is Strategic Section */}
    </div>
  )
}
