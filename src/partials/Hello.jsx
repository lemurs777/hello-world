import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import HelloBanner1 from '../images/hello-banner-x2.min.png';

function Hello() {
	return (
	<section className="hello">
        <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="hello__swiper"
        >
            <SwiperSlide>
                <div className="hello__img-wrapper">
                    <img className="hello__img" src={HelloBanner1} alt="Banner 1" />
                </div>
                <div className="hello__info-wrapper">
                    <ul className="hello__info-list"></ul>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hello__img-wrapper">
                    <img className="hello__img" src={HelloBanner1} alt="Banner 1" />
                </div>
                <div className="hello__info-wrapper">
                    <ul className="hello__info-list"></ul>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hello__img-wrapper">
                    <img className="hello__img" src={HelloBanner1} alt="Banner 1" />
                </div>
                <div className="hello__info-wrapper">
                    <ul className="hello__info-list"></ul>
                </div>
            </SwiperSlide>
        </Swiper>
	</section>
	);
}

export default Hello;
