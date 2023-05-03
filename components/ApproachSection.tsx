function ApproachSection() {
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h2 className='relative z-10 font-bold lg:text-6xl lg:-right-72 lg:mt-96 lg:pr-48'>Our approach for creating a winning brand</h2>
                </div>

                <div className='relative md:w-10/12 bg-amber-300 lg:pt-40 lg:pb-40 lg:px-28'>
                    <div className='lg:px-32'>
                        {/* Brand Strategy */}
                        <div>
                            <p className='relative font-bold text-white lg:text-7xl lg:top-10 lg:right-10 opacity-20'>01</p>
                            <h3 className='font-bold text-white lg:text-xl'>Brand strategy</h3>
                            <p className='lg:mt-8 lg:text-lg'>Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.</p>
                        </div>

                        {/* Brand Design */}
                        <div>
                            <p className='relative font-bold text-white lg:text-7xl lg:top-16 lg:right-10 opacity-20'>02</p>
                            <h3 className='font-bold text-white lg:mt-4 lg:text-xl'>Brand design</h3>
                            <p className='lg:mt-8 lg:text-lg'>Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.</p>
                        </div>

                        {/* Web Design */}
                        <div>
                            <p className='relative font-bold text-white lg:text-7xl lg:top-16 lg:right-10 opacity-20'>03</p>
                            <h3 className='font-bold text-white lg:mt-4 lg:text-xl'>Web design</h3>
                            <p className='lg:mt-8 lg:text-lg'>A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApproachSection
