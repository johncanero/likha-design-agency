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
            <Image src="/images/desktop/image-strategic.jpg"
              alt="bg-pattern-wave-amber"
              width={1600}
              height={1600}
            >
            </Image>
          </div>


          {/* Design is Strategic */}
          <div className='md:w-full bg-stone-800'>
            <div className='text-white lg:p-32'>
              <p className='font-bold leading-10 lg:text-6xl lg:w-96'><span className='text-amber-300'>Design</span> is strategic.</p>
              <p className='leading-8 lg:w-9/12 lg:mt-16 lg:text-lg'>"A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients."</p>
              <Link href="/" rel="noopener noreferrer" passHref>
                <p className='font-semibold tracking-wider underline underline-offset-8 lg:text-lg lg:mt-16 text-amber-300'>Schedule A Call</p>
              </Link>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
