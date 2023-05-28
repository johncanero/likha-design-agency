'use client'
import Link from 'next/link'
import Image from 'next/image'
import MobileDropdown from './MobileDropdown'
// Dark Mode Button
import DarkModeButton from './DarkModeButton'
// Framer Motion
import { motion } from "framer-motion"


function Header() {
    return (
        <div>
            <nav className='px-6 py-6 md:px-10 md:py-7 lg:px-80 lg:py-14'>
                <div className="container flex items-center justify-between mx-auto">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{ opacity: 1 }}
                        className='flex-1'
                    >
                        <Link href="/" rel="noopener noreferrer" className='flex gap-2'>
                            <Image src="/images/likhaLogo.png"
                                alt="bg-pattern-wave-amber"
                                width={40}
                                height={40}
                                style={{ height: 'auto' }}
                            >
                            </Image>
                            <h1 className='text-4xl font-bold lg:text-5xl dark:text-white md:block md:dark:text-black'>Likha</h1>
                        </Link>
                    </motion.div>

                    {/* Right Column */}
                    <div className='flex-2'>
                        {/* Desktop and Tablet */}
                        <div className='hidden md:flex md:gap-6 lg:gap-12'>
                            <Link href="/about" rel="noopener noreferrer" className='font-medium text-black md:mt-3 lg:mt-4 lg:text-lg hover:text-stone-700' passHref>About</Link>
                            <Link href="/services" rel="noopener noreferrer" className='font-medium text-black md:mt-3 lg:mt-4 lg:text-lg hover:text-stone-700' passHref>Services</Link>
                            <Link href="/projects" rel="noopener noreferrer" className='font-medium text-black md:mt-3 lg:mt-4 lg:text-lg hover:text-stone-700' passHref>Projects</Link>
                            <Link href="https://calendly.com/johncanero/likha-design-consultation" target="_blank" rel="noopener noreferrer">
                                <button className="font-bold md:px-4 md:py-3 lg:px-8 lg:py-5 rounded-xl text-amber-50 bg-stone-900 border-stone-700 hover:bg-stone-800">
                                    Schedule A Call
                                </button>
                            </Link>
                            <div className='flex gap-4 md:mt-0 md:gap-0'>
                                <DarkModeButton />
                            </div>
                        </div>
                        <MobileDropdown />

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;

