import Link from 'next/link'
import Image from 'next/image'

function Header() {
    return (
        <div>
            {/* Desktop and Tablet */}
            <nav className='lg:px-80 lg:py-14'>
                <div className="container flex items-center justify-between mx-auto">
                    {/* Likha Desig nAgency - Brand Logo & Name */}
                    <div>
                        <Link href="/" rel="noopener noreferrer" className='flex gap-2'>
                            <Image src="/images/desktop/likhaLogo.png"
                                alt="bg-pattern-wave-amber"
                                width={40}
                                height={10}
                            >
                            </Image>
                            <p className='text-4xl font-bold'>Likha</p>
                        </Link>
                    </div>

                    <div className='flex gap-12'>
                        <Link href="/about" rel="noopener noreferrer" className='mt-4 font-medium hover:text-stone-700' passHref>About</Link>
                        <Link href="/service" rel="noopener noreferrer" className='mt-4 font-medium hover:text-stone-700' passHref>Service</Link>
                        <Link href="/projects" rel="noopener noreferrer" className='mt-4 font-medium hover:text-stone-700' passHref>Projects</Link>
                        <Link href="/schedule-call">
                            <button className="px-8 py-5 font-bold rounded-xl text-amber-50 bg-stone-900 hover:bg-stone-700">
                                Schedule A Call
                            </button>
                        </Link>
                        {/* Dark Mode Button */}
                    </div>
                </div>
                {/* Integrate NextAuth Sign In / Login / */}
            </nav>

            {/* Mobile */}
        </div>
    )
}

export default Header
