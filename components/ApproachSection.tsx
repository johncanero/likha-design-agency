function ApproachSection() {
    return (
        <div>
            <div className='md:flex md:justify-between'>
                {/* Desktop and Tablet */}
                <div className="hidden md:block">
                    <h2 className='relative z-10 font-bold md:text-4xl lg:text-6xl md:mt-60 md:-right-16 lg:-right-80 lg:mt-96 lg:pr-48 md:text-stone-800'>Our approach for creating a winning brand</h2>
                </div>

                <div className='relative bg-amber-300 md:py-20 lg:pt-40 lg:pb-40'>
                    <div className='px-6 py-20 md:py-0 lg:px-52 md:px-24'>
                        {/* Mobile */}
                        <div className="block md:hidden">
                            <h2 className='relative z-10 font-bold text-3xl md:text-stone-800'>Our approach for creating a winning brand</h2>
                        </div>
                        {/* Brand Strategy */}  
                        <div>
                            <p className='relative font-bold text-white text-6xl lg:text-7xl top-10 md:top-9 lg:top-10 lg:right-10 opacity-20'>01</p>
                            <h3 className='font-bold text-stone-800 lg:text-2xl'>Brand strategy</h3>
                            <p className='mt-6 lg:mt-8 lg:text-lg'>Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.</p>
                        </div>

                        {/* Brand Design */}
                        <div>
                            <p className='relative font-bold text-white text-6xl lg:text-7xl top-10 lg:top-16 lg:right-10 opacity-20'>02</p>
                            <h3 className='font-bold text-stone-800 lg:mt-4 lg:text-2xl'>Brand design</h3>
                            <p className='mt-6 lg:mt-8 lg:text-lg'>Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.</p>
                        </div>

                        {/* Web Design */}
                        <div>
                            <p className='relative font-bold text-white text-6xl lg:text-7xl top-10 lg:top-16 lg:right-10 opacity-20'>03</p>
                            <h3 className='font-bold text-stone-800 lg:mt-4 lg:text-2xl'>Web design</h3>
                            <p className='mt-6 lg:mt-8 lg:text-lg'>A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.</p>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default ApproachSection
