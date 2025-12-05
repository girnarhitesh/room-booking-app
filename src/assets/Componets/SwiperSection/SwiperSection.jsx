import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import "./SwiperSection.css";

function SwiperSection() {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <div className="Sectionpadding">
                <div className="Swiperimgsection">

                    {/* Custom Buttons */}
                    <div className="swiper-buttons">
                        <button ref={prevRef} className="swiper-btn-left">
                            <HiOutlineArrowNarrowLeft />
                        </button>

                        <button ref={nextRef} className="swiper-btn-right">
                            <HiOutlineArrowNarrowRight />
                        </button>
                    </div>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        speed={2000}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay, Navigation]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        className="mySwiper"
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        <SwiperSlide><img src="https://media.gettyimages.com/id/2104361307/photo/luxury-tropical-pool-villa.jpg?s=612x612&w=0&k=20&c=UH6MvqtBWS2vU7CaD3-VSqaOKY8nPztuwI-gWJChqcg=" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://media.gettyimages.com/id/129179660/photo/luxurious-apartment-in-the-night.jpg?s=612x612&w=0&k=20&c=I6l9MMi2tp0gv89HCfYiEHeqCHjHQGfpUwj3_BBsflE=" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://media.gettyimages.com/id/1158522448/photo/modern-luxury-house-with-infinity-pool-at-dawn.jpg?s=612x612&w=0&k=20&c=__GNPV2C8qDcwETlpKT0GpOsDVNZJsA-Z6xYbtFDXa4=" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://media.gettyimages.com/id/530578690/photo/island-villa.jpg?s=612x612&w=0&k=20&c=ZD7aw-Tp6HBYEjlE4UovAhY0n6XW72hcb2D69dC04uA=" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://media.gettyimages.com/id/1363875468/photo/wide-shot-of-women-in-extended-side-angle-pose-while-practicing-yoga-during-class-in-ocean.jpg?s=612x612&w=0&k=20&c=HWL4eigYWAqdJ0_NsDr2gyGUYzsqsfiBNDP_XHgWwf4=" alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default SwiperSection;