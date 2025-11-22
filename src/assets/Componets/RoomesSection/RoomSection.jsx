import React from 'react';
import './RoomSection.css';
import { Row, Col } from 'antd';
import RoomSectionData from './RoomsectionData';
import { Link } from 'react-router-dom';

function RoomSection() {
    return (
        <>
            <div className="Sectionpadding">
                <Row justify="center">
                    <Col span={24}>
                        <div className="rooms-header">
                            <h1 style={{ fontSize: "1.7rem", color: "#8A5A2E", fontFamily: "Lora", marginTop: "4rem" }}>• Our Rooms</h1>
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
                    </Col>
                </Row>

                <Row gutter={[30, 30]} justify="center">
                    {RoomSectionData.map((item, index) => (
                        <Col key={index} lg={6} md={8} sm={12} xs={24}>
                            
                            {/* IMAGE CLICK = GO TO ROOM DETAILS */}
                            <Link to={`/room/${item.id}`}>
                                <div className="room-card">
                                    <img src={item.img} alt={item.title} className="room-img" />
                                </div>
                            </Link>

                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}

export default RoomSection;