import React from 'react';
import './RoomSection.css';
import RoomSectionData from './RoomsectionData';
import { Link } from 'react-router-dom';
import Vacationsection from '../Vacationsection/Vacationsection';
import { CiHeart } from "react-icons/ci";

function RoomSection() {
    return (
        <>
            <div className="Sectionpadding">

                {/* HEADER */}
                <div className="rooms-header">
                    <div className="rooms-header-left">
                        <h1 className="rooms-heading">• Our Rooms</h1>

                        <p className="rooms-subtitle">
                            Experience comfort and elegance with rooms crafted to provide warmth, peace, and luxury.
                        </p>
                    </div>
                </div>

                {/* ROOM LIST */}
                <div className="RoomSection-grid">
                    {RoomSectionData.map((item, index) => (
                        <div key={index} className="RoomSection-card">
                            <div className="RoomSection-fav">
                                <CiHeart className='RoomSection-fav-icon'/>
                            </div>
                            <Link to={`/room/${item.id}`}><img src={item.img} alt={item.title} className="RoomSection-img" /></Link>
                        </div>
                    ))}
                </div>

            </div>

            {/* BELOW SECTION */}
            <Vacationsection />
        </>
    );
}

export default RoomSection;