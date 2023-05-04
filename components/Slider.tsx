'use client'
import React, { useState } from 'react'
import Image from 'next/image';
// Icons
import { BsChevronCompactLeft } from '@react-icons/all-files/bs/BsChevronCompactLeft';
import { BsChevronCompactRight } from '@react-icons/all-files/bs/BsChevronCompactRight'

// Desktop Images
const carouselItems = [
    {
        title: "Brand naming & guidelines",
        image: {
            src: "/images/desktop/image-slide-1-desktop-min.jpg",
            title: "Brand Identity Roadmap",
            subtitle: "2023 project",
        },
    },
    {
        title: "Brand identity & merchandise",
        image: {
            src: "/images/desktop/image-slide-2-desktop-min.jpg",
            title: "Brand Naming Roadmap",
            subtitle: "2023 project",
        },
    },
    {
        title: "Brand identity & web design",
        image: {
            src: "/images/desktop/image-slide-3-desktop-min.jpg",
            title: "Website Development",
            subtitle: "2023 project",
        },
    },
];

// Tablet
const carouselItemsTablet = [
    {
        title: "Brand naming & guidelines",
        image: {
            src: "/images/tablet/image-slide-1-tablet-min.jpg",
            title: "Brand Naming Roadmap",
            subtitle: "2023 project",
        },
    },
    {
        title: "Brand identity & merchandise",
        image: {
            src: "/images/tablet/image-slide-2-tablet-min.jpg",
            title: "Brand Identity Clothing",
            subtitle: "2023 project",
        },
    },
    {
        title: "Brand identity & web design",
        image: {
            src: "/images/tablet/image-slide-3-tablet-min.jpg",
            title: "Website Development",
            subtitle: "2023 project",
        },
    },
];

// Tablet
function Slider() {

    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    // Desktop
    const selectImage = (offset: number) => {
        let newIndex = selectedIndex + offset;
        if (newIndex < 0) {
            newIndex = carouselItems.length - 1;
        } else if (newIndex >= carouselItems.length) {
            newIndex = 0;
        }

        setSelectedIndex(newIndex);
    };

    const selectImageTablet = (offset: number) => {
        let newIndex = selectedIndex + offset;
        if (newIndex < 0) {
            newIndex = carouselItemsTablet.length - 1;
        } else if (newIndex >= carouselItemsTablet.length) {
            newIndex = 0;
        }

        setSelectedIndex(newIndex);
    };


    return (
        <section>
            <div className='flex md:justify-center '>
                {/* First Column */}
                <div className='relative w-full bg-stone-800'>
                    <div>
                        {/* carouseItems title */}
                        {/* Desktop */}
                        <div className='relative hidden font-bold leading-10 text-white lg:block lg:text-6xl lg:max-w-xl lg:-right-60 lg:mt-60'>
                            {carouselItems[selectedIndex].title}
                        </div>

                        {/* Tablet */}
                        <div className='relative hidden text-3xl font-bold leading-10 text-white lg:hidden md:block md:text-4xl md:mt-36 md:-right-20'>
                            {carouselItemsTablet[selectedIndex].title}
                        </div>


                        {/* Desktop Icon Arrows */}
                        <div className='hidden mt-2 lg:block'>
                            {/* Icon Arrow Previous */}
                            <button
                                type="button"
                                className=""
                                onClick={() => selectImage(-1)}
                            >
                                {/* Left Arrpw */}
                                <div className='absolute p-2 text-2xl text-white rounded-full cursor-pointer lg:ml-60 group-hover:block bg-black/20'>
                                    <BsChevronCompactLeft size={32} className='text-amber-300' />
                                </div>
                            </button>

                            {/* Icon Arrow Next */}
                            <button
                                type="button"
                                className=""
                                onClick={() => selectImage(1)}
                            >
                                {/* Right Arrow */}
                                <div className='absolute p-2 text-2xl text-white rounded-full cursor-pointer group-hover:block lg:ml-80 bg-black/20'>
                                    <BsChevronCompactRight size={32} className='text-amber-300' />
                                </div>
                            </button>
                        </div>



                        {/* Tablet Icon Arrows */}
                        <div className='hidden mt-2 md:block lg:hidden'>
                            {/* Icon Arrow Previous */}
                            <button
                                type="button"
                                className=""
                                onClick={() => selectImageTablet(-1)}
                            >
                                {/* Left Arrpw */}
                                <div className='absolute p-2 text-2xl text-white rounded-full cursor-pointer group-hover:bloc md:ml-16 bg-black/20'>
                                    <BsChevronCompactLeft size={32} className='text-amber-300' />
                                </div>
                            </button>

                            {/* Icon Arrow Next */}
                            <button
                                type="button"
                                className=""
                                onClick={() => selectImageTablet(1)}
                            >
                                {/* Right Arrow */}
                                <div className='absolute p-2 text-2xl text-white rounded-full cursor-pointer md:ml-32 group-hover:block bg-black/20'>
                                    <BsChevronCompactRight size={32} className='text-amber-300' />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    {/* Carousel Image */}
                    {/* Desktop */}
                    <div className='hidden lg:block'>
                        <Image
                            src={carouselItems[selectedIndex].image.src}
                            alt="carouselItems"
                            width={1600}
                            height={1600}
                            className=""
                            id="carousel-content-img"
                        />
                    </div>

                    {/* Tablet */}
                    <div className='hidden md:block lg:hidden'>
                        <Image
                            src={carouselItemsTablet[selectedIndex].image.src}
                            alt="carouselItemsTablet"
                            width={1050}
                            height={1050}
                            className=""
                            id="carousel-content-img"
                        />
                    </div>


                    {/* Carouse Title and Sub-Title */}
                    {/* Desktop */}
                    <article className='relative text-white lg:justify-end lg:flex'>
                        <div className='absolute hidden lg:-top-20 lg:text-lg lg:mr-6 lg:block drop-shadow-xl'>
                            <h1 className="font-semibold text-stone-500" id="carousel-content-title">
                                {carouselItems[selectedIndex].image.title}
                            </h1>
                            <p
                                id="carousel-content-subtitle"
                                className=' text-stone-500'
                            >
                                {carouselItems[selectedIndex].image.subtitle}
                            </p>
                        </div>
                    </article>

                    {/* Tablet */}
                    <article className='relative text-white md:justify-end md:flex'>
                        <div className='absolute hidden md:block lg:hidden md:-top-16 md:text-md md:mr-6 drop-shadow-xl'>
                            <h1 className="font-semibold text-stone-500" id="carousel-content-title">
                                {carouselItemsTablet[selectedIndex].image.title}
                            </h1>
                            <p
                                id="carousel-content-subtitle"
                                className=' text-stone-500'
                            >
                                {carouselItemsTablet[selectedIndex].image.subtitle}
                            </p>
                        </div>
                    </article>



                </div>
            </div>
        </section>
    )
}

export default Slider
