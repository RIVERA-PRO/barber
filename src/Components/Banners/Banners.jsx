import React, { useEffect, useState, useRef } from 'react';
import './Banners.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import banner1 from '../../images/banner1.png'
import banner2 from '../../images/banner1.png'
import BtnContact from '../BtnContact/BtnContact';
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Banners() {

    const swiperRef = useRef(null);
    const images = [


        {
            img: banner1,
            titulo: 'Our hair style makes your look elegant.',
            subtitulo: 'CON PATRIC POTTER',
            parrafo: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',

        },
        {
            img: banner2,
            titulo: 'Our hair style makes your look elegant.',
            subtitulo: 'CON PATRIC POTTER',
            parrafo: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',

        },

    ]
    return (


        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
                console.log(swiper);
                swiperRef.current = swiper;
            }}
            id='swiper_container'
        >
            {images.map((item) => (
                <SwiperSlide id='SwiperSlide-scroll'>
                    <img src={item.img} alt={`imagen-`} />
                    <div className='bannerText'>
                        <h1>{item.titulo}</h1>
                        <h3>{item.subtitulo}</h3>
                        <p>{item.parrafo}</p>
                        <BtnContact />

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

    );
}
