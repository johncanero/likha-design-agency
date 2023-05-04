'use client'
import React, { useState } from 'react'
import Image from 'next/image';
// Slider Files
import IconArrowNext from "public/images/desktop/icon-arrow-next.svg";
// Desktop 
import ImageSlide1 from "public/images/desktop/image-slide-1.jpg";
import ImageSlide2 from "public/images/desktop/image-slide-2.jpg";
import ImageSlide3 from "public/images/desktop/image-slide-3.jpg";
// Icons
import { BsChevronCompactLeft } from '@react-icons/all-files/bs/BsChevronCompactLeft';
import { BsChevronCompactRight } from '@react-icons/all-files/bs/BsChevronCompactRight'

// Desktop
const carouselItems = [
    {
        title: "Brand naming & guidelines",
        image: {
            src: ImageSlide1,
            title: "Lean Product Roadmap",
            subtitle: "2019 project",
        },
    },
    {
        title: "Brand identity & merchandise",
        image: {
            src: ImageSlide2,
            title: "New Majestic Hotel",
            subtitle: "2018 project",
        },
    },
    {
        title: "Brand identity & web design",
        image: {
            src: ImageSlide3,
            title: "Crypto Dashboard",
            subtitle: "2016 project",
        },
    },
];


function Slider() {

    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const selectImage = (offset: number) => {
        let newIndex = selectedIndex + offset;
        if (newIndex < 0) {
            newIndex = carouselItems.length - 1;
        } else if (newIndex >= carouselItems.length) {
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
                        <div className='relative text-3xl font-bold leading-10 text-white md:text-4xl lg:text-6xl lg:max-w-xl lg:-right-60 lg:mt-60'>
                            {carouselItems[selectedIndex].title}
                        </div>

                        {/* Icon Arrows */}
                        <div className='mt-2'>
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
                    </div>
                </div>




                <div>
                    {/* Carousel Image */}
                    <Image
                        src={carouselItems[selectedIndex].image.src}
                        alt="carouselItems"
                        width={1600}
                        height={1600}
                        className=""
                        id="carousel-content-img"
                    />

                    {/* Carouse Title and Sub-Title */}
                    <article className='relative text-white lg:flex lg:justify-end'>
                        <div className='absolute lg:-top-20 lg:text-lg lg:mr-8 drop-shadow-xl'>
                            <h1 className="font-semibold" id="carousel-content-title">
                                {carouselItems[selectedIndex].image.title}
                            </h1>
                            <p
                                id="carousel-content-subtitle"
                            >
                                {carouselItems[selectedIndex].image.subtitle}
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Slider
