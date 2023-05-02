import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
    return (
        <nav className="bg-gradient-to-r from-white from-40% to-yellow-500">
            <div className="container flex items-center justify-between p-12 mx-auto">
                {/* Likha Design Agency - Brand Logo & Name */}
                <div className='flex'>
                    <p>Likha Design Agency</p>
                </div>

                <div className='flex'>
                    <Link href="/" rel="noopener noreferrer" passHref>About</Link>
                    <Link href="/" rel="noopener noreferrer" passHref>Service</Link>
                    <Link href="/" rel="noopener noreferrer" passHref>Projects</Link>
                    <Link href="/schedule-call">
                        <button className="px-4 py-2 font-bold text-yellow-600 rounded bg-stone-900 hover:bg-stone-700">
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
