/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import Image from "next/image"

function Footer() {
    return (
        <footer className='fixed bottom-0 left-0 w-full py-4'>
            <div>
                {/* "Let's build something great together" */}
                <div className="flex py-10 lg:mr-28 lg:gap-48">
                    {/* Image */}
                    <div className="relative lg:w-32 lg:right-16 lg:top-8">
                        <Image src="/images/desktop/bg-pattern-wave-yellow.png"
                            alt="bg-pattern-wave-amber"
                            width={200}
                            height={0}
                        >
                        </Image>
                    </div>
                    <h2 className="text-5xl font-semibold lg:w-5/12">Let's build something great together.</h2>
                    <Link href="/schedule-call">
                        <button className="px-8 py-5 font-bold text-amber-50 rounded-xl bg-stone-900 hover:bg-stone-700">
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
