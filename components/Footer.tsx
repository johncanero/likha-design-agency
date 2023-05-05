/* eslint-disable react/no-unescaped-entities */
'use client'
import Link from "next/link"
import Image from "next/image"
// Framer Motion
import { motion } from "framer-motion"

function Footer() {
    return (
        <footer className='bottom-0 left-0 w-full py-4'>
            <div>
                {/* "Let's build something great together" */}
                <div className="flex justify-center lg:justify-normal md:py-6 md:gap-4 md:mr-12 lg:py-10 lg:mr-44 lg:gap-48">
                    <div className="relative w-16 right-16 top-3 md:w-20 md:top-4 md:right-14 lg:w-32 lg:right-16 lg:top-8">
                        <Image src="/images/desktop/bg-pattern-wave-yellow.png"
                            alt="bg-pattern-wave-amber"
                            width={200}
                            height={0}
                        >
                        </Image>
                    </div>
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
                        className="w-8/12 md:w-6/12 lg:w-5/12"
                    >
                        <h2 className="text-xl font-bold md:text-3xl lg:text-5xl">Let's build something great together.</h2>
                    </motion.div>
                    <Link href="https://calendly.com/johncanero/likha-design-consultation" target="_blank" rel="noopener noreferrer" className="hidden md:block">
                        <button className="font-bold border-2 md:px-4 md:py-3 lg:px-8 lg:py-5 rounded-xl text-amber-50 bg-stone-900 border-stone-700 hover:bg-stone-800">
                            Schedule A Call
                        </button>
                    </Link>
                </div>

                {/* Copyright */}
                <div className="mt-4 text-center md:mt-1">
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://johncanero.com/"
                    >
                        <span className="mr-2 font-bold dark:text-amber-300">
                            John Cañero
                        </span>
                    </Link>
                    &copy; {new Date().getFullYear()} All Rights Reserved
                </div>

            </div>
        </footer >
    )
}

export default Footer
