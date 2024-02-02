
import aws from '../assets/technologies/aws.svg'
import html from '../assets/technologies/html.svg'
import js from '../assets/technologies/js.svg'
import python from '../assets/technologies/python.svg'
import react from '../assets/technologies/react.svg'
import css from '../assets/technologies/css.svg'
import git from '../assets/technologies/git.svg'


import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../App.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Technologies() {

    const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesPerView(2);
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(3);
            } else {
                setSlidesPerView(4);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const technologies = [
        aws, html, js, python, react, css, git
    ]
    
    return (

        <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            loop={true}
            // modules={[Pagination]}
            className="mySwiper"
        >
            {technologies.map((tech, index) => {
                return (
                    <SwiperSlide key={index} className='mb-5 ml-5'>
                        <img src={tech} style={{ width: '100px', height: '100px' }} />
                    </SwiperSlide>
                )
            })}
        </Swiper>

    );
}
