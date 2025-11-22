import React from "react";
import { useParams } from "react-router-dom";
import RoomSectionData from "../RoomesSection/RoomsectionData";
import "./RoomDetails.css";
import { Row, Col } from "antd";

function RoomDetails() {

    const { id } = useParams();

    const room = RoomSectionData.find((item) => item.id === Number(id));

    if (!room) {
        return <h1 style={{ textAlign: "center", marginTop: "50px" }}>Room Not Found</h1>;
    }

    return (
        <>
            <div className="Sectionpadding">

                <div className="details-wrapper">

                    <Row gutter={[40, 20]} align="middle">

                        {/* LEFT — IMAGE */}
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <img src={room.img} alt={room.title} className="details-img" />
                        </Col>

                        {/* RIGHT — CONTENT */}
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <div className="details-content">

                                <h1>{room.title}</h1>
                                <p className="price">{room.price}</p>

                                <p><strong>Size:</strong> {room.size}</p>
                                <p><strong>Capacity:</strong> {room.capacity}</p>

                                <p>Amenities:</p>
                                <ul>
                                    {room.amenities.map((am, i) => (
                                        <li style={{letterSpacing:"1px",fontWeight:"300"}} key={i}>{am}</li>
                                    ))}
                                </ul>

                                <p className="description">{room.description}</p>

                                <button className="details-btn">Confirm Booking</button>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default RoomDetails;