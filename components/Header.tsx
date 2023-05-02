import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
    return (
        <nav className='lg:px-72 lg:py-16'>
            <div className="container flex items-center justify-between mx-auto">
                {/* Likha Desig nAgency - Brand Logo & Name */}
                <div className='flex'>
                    <Link href="/" rel="noopener noreferrer" >
                        <p className='text-3xl font-bold'>Likha</p>
                    </Link>
                </div>

                <div className='flex gap-12'>
                    <Link href="/about" rel="noopener noreferrer" className='mt-4 font-medium hover:text-stone-700' passHref>About</Link>
                    <Link href="/service" rel="noopener noreferrer" className='mt-4 font-medium hover:text-stone-700' passHref>Service</Link>
                    <Link href="/projects" rel="noopener noreferrer" className='mt-4 font-medium hover:text-stone-700' passHref>Projects</Link>
                    <Link href="/schedule-call">
                        <button className="px-8 py-5 font-bold text-amber-50 bg-stone-900 hover:bg-stone-700">
                            Schedule A Call
                        </button>
                    </Link>
                    {/* Dark Mode Button */}
                </div>
            </div>
            {/* Integrate NextAuth Sign In / Login / */}
        </nav>
    )
}

export default Header
