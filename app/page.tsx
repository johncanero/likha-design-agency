/* eslint-disable react/no-unescaped-entities */
import Hero from '@/components/Hero'
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Hero />


      {/* Design is Strategic Section */}
      <div>
        <div className='md:flex md:justify-between'>
          {/* Desktop Hero Image */}
          <div className='hidden lg:block'>
            <Image src="/images/desktop/image-strategic-min (1).jpg"
              alt="bg-pattern-wave-amber"
              width={1600}
              height={1600}
            >
            </Image>
          </div>

          {/* Tablet Hero Image */}
          <div className='hidden lg:hidden md:block'>
            <Image src="/images/tablet/image-strategic-tablet-min.jpg"
              alt="bg-pattern-wave-amber"
              width={950}
              height={950}
            >
            </Image>
          </div>

          {/* Design is Strategic */}
          <div className='md:w-full bg-stone-800'>
            {/* Pattern Yellow */}
            <div className="relative w-16 right-16 top-3 md:w-20 md:top-24 md:right-12 lg:w-32 lg:right-16 lg:top-40">
              <Image src="/images/desktop/bg-pattern-wave-yellow.png"
                alt="bg-pattern-wave-amber"
                width={200}
                height={0}
              >
              </Image>
            </div>

            <div className='text-white md:py-12 md:px-16 lg:py-24 lg:px-32'>
              <p className='font-bold leading-10 md:text-4xl lg:text-6xl lg:w-96'><span className='text-amber-300'>Design</span> is strategic.</p>
              <p className='leading-8 lg:w-9/12 md:text-sm md:mt-7 lg:mt-14 lg:text-lg'>"A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients."</p>
              <Link href="/" rel="noopener noreferrer" passHref>
                <p className='font-semibold tracking-wider underline underline-offset-8 md:mt-7 lg:text-lg lg:mt-14 text-amber-300'>Schedule A Call</p>
              </Link>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
