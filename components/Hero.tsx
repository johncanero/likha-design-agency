'use client'
import Image from "next/image"
import Link from "next/link"
// Framer Motion
import { motion } from "framer-motion"

function Hero() {
    return (
        <div>
            <div className='md:flex'>
                {/* Mobile Hero Image*/}
                <div className='block md:hidden'>
                    <Image src="/images/mobile/image-hero-mobile.jpg"
                        alt="bg-pattern-wave-amber"
                        width={1400}
                        height={1400}
                    >
                    </Image>
                </div>

                {/* Left Column */}
                <div className='flex-1 max-w-sm px-6 mt-8 md:mt-10 md:mx-0 md:ml-10 lg:ml-72 lg:mt-24 md:max-w-full lg:max-w-2xl'>
                    <motion.div
                        initial={{
                            x: -200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                        }}
                    >
                        <h2 className='text-4xl font-bold md:pr-4 lg:pr-0 md:text-5xl lg:text-7xl'>Branding & website design agency</h2>
                    </motion.div>
                    <p className='mt-5 lg:mt-7 md:text-sm lg:text-lg md:mr-8 lg:mr-0'>We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.</p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        transition={{
                            delay: 1,
                            duration: 1,
                        }}
                        whileInView={{ opacity: 1 }}
                    >
                        <Link href="https://johncanero.com/" rel="noopener noreferrer" passHref>
                            <button className="px-4 py-3 mt-6 font-bold border-2 lg:px-7 lg:mt-6 lg:py-4 rounded-xl text-amber-50 border-stone-700 bg-stone-900 hover:bg-stone-800">
                                Learn More
                            </button>
                        </Link>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.4,
                        }}
                        whileInView={{ opacity: 1 }}
                        className="flex gap-5 mt-6 md:mt-6 md:mb-6 lg:mb-0 lg:mt-10">
                        <div>
                            <Link href="https://upskillhub-by-johncanero.vercel.app/" target="_blank" rel="noopener noreferrer" passHref>
                                <Image src="/images/desktop/upskillhubTitle2.png"
                                    alt="upskill-hub-title"
                                    width={200}
                                    height={200}
                                    className="opacity-90 dark:opacity-50"
                                >
                                </Image>
                            </Link>
                        </div>

                        <div>
                            <Link href="https://lead-digital-by-johncanero.vercel.app/" target="_blank" rel="noopener noreferrer" passHref>
                                <Image src="/images/desktop/leadDigitalTitle2.png"
                                    alt="lead-digital-title"
                                    width={120}
                                    height={200}
                                    className="opacity-90 dark:opacity-50"
                                >
                                </Image>
                            </Link>
                        </div>


                        <div>
                            <Link href="https://tech-jam-by-johncanero.vercel.app/" target="_blank" rel="noopener noreferrer" passHref>
                                <Image src="/images/desktop/techJamTitle3.png"
                                    alt="tech-jam-title"
                                    width={200}
                                    height={200}
                                    className="opacity-90 dark:opacity-50"
                                >
                                </Image>
                            </Link>
                        </div>
                    </motion.div>
                </div>


                {/* Right Column */}
                <div className="flex-1">
                    <div className='hidden lg:block'>
                        <Image src="/images/desktop/image-hero-desktop3-min.jpg"
                            alt="bg-pattern-wave-amber"
                            width={1500}
                            height={1500}
                        >
                        </Image>
                    </div>

                    {/* Tablet */}
                    <div className='hidden md:block lg:hidden'>
                        <Image src="/images/tablet/image-hero-md2.jpg"
                            alt="bg-pattern-wave-amber"
                            width={1100}
                            height={1100}
                        >
                        </Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;