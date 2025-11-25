import React from 'react';
import './RoomSection.css';
import RoomSectionData from './RoomsectionData';
import { Link } from 'react-router-dom';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function RoomSection() {
    return (
        <>
            <div className="Sectionpadding">

                <div className="rooms-header">
                    <h1 style={{ fontSize: "1.7rem", color: "#8A5A2E", fontFamily: "Lora", marginTop: "4rem" }}>
                        • Our Rooms
                    </h1>
                    <p style={{
                        fontFamily: "arial",
                        fontSize: "20px",
                        letterSpacing: "1px",
                        width: "40vw",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        lineHeight: "25px"
                    }}>
                        Experience comfort and elegance with rooms crafted to provide warmth, peace, and luxury.
                    </p>
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    loop={true}                      
                    speed={900}                       
                    autoplay={{
                        delay: 2500,                    
                        disableOnInteraction: false,    
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {RoomSectionData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Link to={`/room/${item.id}`}>
                                <div className="room-card">
                                    <img src={item.img} alt={item.title} className="room-img" />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </>
    );
}

export default RoomSection;