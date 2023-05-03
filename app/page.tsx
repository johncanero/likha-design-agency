import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section*/}
      <div className='flex justify-between'>
        <div className='lg:ml-80 lg:mt-24 lg:max-w-xl lg:mr-10'>
          <h2 className='font-bold lg:text-7xl'>Branding & website <br></br> design agency</h2>
          <p className='lg:mt-8'>We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.</p>
          <Link href="/">
            <button className="font-bold md:px-4 md:py-3 lg:px-7 lg:mt-6 lg:py-4 rounded-xl text-amber-50 bg-stone-900 hover:bg-stone-800">
              Learn More
            </button>
          </Link>
        </div>

        <div>
          <Image src="/images/desktop/image-hero-desktop3-min.jpg"
            alt="bg-pattern-wave-amber"
            width={1000}
            height={1000}
          >
          </Image>
        </div>
      </div>

      {/* Design is Strategic Section */}
    </div>
  )
}
