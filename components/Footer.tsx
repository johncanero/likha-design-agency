/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import Image from "next/image"

function Footer() {
    return (
        <footer className='bottom-0 left-0 w-full py-4'>
            <div>
                {/* "Let's build something great together" */}
                <div className="flex justify-center lg:justify-normal md:py-6 md:gap-12 lg:py-10 lg:mr-36 lg:gap-52">
                    {/* Image */}
                    <div className="relative md:w-20 md:top-4 md:right-14 lg:w-32 lg:right-16 lg:top-8">
                        <Image src="/images/desktop/bg-pattern-wave-yellow.png"
                            alt="bg-pattern-wave-amber"
                            width={200}
                            height={0}
                        >
                        </Image>
                    </div>
                    <h2 className="font-semibold md:text-3xl md:w-6/12 lg:text-5xl lg:w-5/12">Let's build something great together.</h2>
                    <Link href="/schedule-call">
                        <button className="font-bold md:px-4 md:py-3 lg:px-8 lg:py-5 rounded-xl text-amber-50 bg-stone-900 hover:bg-stone-700">
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
                        <span className="mr-2 font-bold text-zinc-900 dark:text-cyan-300">
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
