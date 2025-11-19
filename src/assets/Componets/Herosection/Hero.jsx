import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import 'swiper/css';
import 'swiper/css/pagination';
import './Hero.css';
import About from '../Aboutsection/About';

function Hero() {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <div className='hero-container'>
        <Swiper
          pagination={pagination}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="slide-content">
              <img src="https://plus.unsplash.com/premium_photo-1661963123153-5471a95b7042?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="overlay"></div>

              <div className="text-box">
                <h1>Luxury Rooms & <span style={{ fontStyle: "italic" }}>Suites</span></h1>
                <p className="subtitle">Enjoy a peaceful and elegant stay with beautifully designed rooms crafted for your comfort.</p>
                <button className="btn-book">
                  Book Now
                  <span className="btn-icon"><HiOutlineArrowNarrowRight /></span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="slide-content">
              <img src="https://plus.unsplash.com/premium_photo-1661963717467-5892afb6f410?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8" alt="" />
              <div className="overlay"></div>

              <div className="text-box">
                <h1>Feel the <span style={{ fontStyle: "italic" }}>Relaxation</span></h1>
                <p className="subtitle">Escape the busy world and unwind in a calm, refreshing environment designed for pure relaxation.</p>
                <button className="btn-book">
                  Book Now
                  <span className="btn-icon"><HiOutlineArrowNarrowRight /></span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="slide-content">
              <img src="https://plus.unsplash.com/premium_photo-1661962516320-a857b0a5f40e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8" alt="" />
              <div className="overlay"></div>

              <div className="text-box">
                <h1>Peaceful <span style={{ fontStyle: "italic" }}>Environment</span></h1>
                <p className="subtitle"> Surrounded by nature, enjoy a serene atmosphere that refreshes your mind and soothes your soul.</p>
                <button className="btn-book">
                  Book Now
                  <span className="btn-icon"><HiOutlineArrowNarrowRight /></span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <About/>
    </>
  );
} 

export default Hero;