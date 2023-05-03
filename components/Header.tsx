import Link from 'next/link'
import Image from 'next/image'
import MobileDropdown from './MobileDropdown'
// Dark Mode Button
import DarkModeButton from './DarkModeButton'

function Header() {
    return (
        <div>
            <nav className='px-6 py-6 md:px-10 md:py-7 lg:px-80 lg:py-14'>
                <div className="container flex items-center justify-between mx-auto">
                    {/* Likha Desig nAgency - Brand Logo & Name */}
                    <div>
                        <Link href="/" rel="noopener noreferrer" className='flex gap-2'>
                            <Image src="/images/likhaLogo.png"
                                alt="bg-pattern-wave-amber"
                                width={40}
                                height={10}
                            >
                            </Image>
                            <h1 className='text-4xl font-bold dark:text-white md:block md:dark:text-black'>Likha</h1>
                        </Link>
                    </div>

                    <div className='flex'>
                        {/* Desktop and Tablet */}
                        <div className='hidden md:flex md:gap-6 lg:gap-12'>
                            <Link href="/about" rel="noopener noreferrer" className='mt-4 font-medium text-black hover:text-stone-700' passHref>About</Link>
                            <Link href="/service" rel="noopener noreferrer" className='mt-4 font-medium text-black hover:text-stone-700' passHref>Service</Link>
                            <Link href="/projects" rel="noopener noreferrer" className='mt-4 font-medium text-black hover:text-stone-700' passHref>Projects</Link>
                            <Link href="/schedule-call">
                                <button className="font-bold md:px-4 md:py-3 lg:px-8 lg:py-5 rounded-xl text-amber-50 bg-stone-900 border-stone-700 hover:bg-stone-800">
                                    Schedule A Call
                                </button>
                            </Link>
                        </div>

                        <div className='flex gap-4 md:mt-0 md:gap-0'>
                            <DarkModeButton />
                            <MobileDropdown />
                            {/* NextAuth Sign In / Login / */}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile */}
        </div>
    )
}

export default Header
