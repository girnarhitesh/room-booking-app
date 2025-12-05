import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RoomSectionData from "../RoomesSection/RoomsectionData";
import "./RoomDetails.css";
import { Row, Col, Modal, Input } from "antd";
import axios from "axios";

function RoomDetails() {

    const { id } = useParams();
    const room = RoomSectionData.find((item) => item.id === Number(id));

    const [openForm, setOpenForm] = useState(false);

    // Form states
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [people, setPeople] = useState("");
    const [days, setDays] = useState("");
    const [notes, setNotes] = useState("");

    if (!room) {
        return <h1 style={{ textAlign: "center", marginTop: "50px" }}>Room Not Found</h1>;
    }

    // Submit Booking Function
    const submitBooking = async () => {
        try {
            await axios.post("http://localhost:5000/api/bookings", {
                roomId: room.id,
                roomName: room.title,
                price: room.price,

                fullName,
                phone,
                email,
                date,
                people,
                days,
                notes
            });

            alert("✅ Booking Confirmed!");
            setOpenForm(false);

            // Reset
            setFullName("");
            setPhone("");
            setEmail("");
            setDate("");
            setPeople("");
            setDays("");
            setNotes("");

        } catch (error) {
            alert("❌ Booking Failed");
        }
    };

    return (
        <>
            <div className="Backgroundcolor-section">
                <div className="details-wrapper">
                    <Row gutter={[40, 20]} align="middle">

                        {/* LEFT IMAGE */}
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <img src={room.img} alt={room.title} className="details-img" />
                        </Col>

                        {/* RIGHT CONTENT */}
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <div className="details-content">

                                <h1>{room.title}</h1>
                                <p className="price">{room.price}</p>

                                <p><strong>Size:</strong> {room.size}</p>
                                <p><strong>Capacity:</strong> {room.capacity}</p>

                                <p>Amenities:</p>
                                <ul>
                                    {room.amenities.map((am, i) => (
                                        <li key={i}>{am}</li>
                                    ))}
                                </ul>

                                <p className="description">{room.description}</p>

                                {/* OPEN POPUP FORM */}
                                <button 
                                    className="details-btn" 
                                    onClick={() => setOpenForm(true)}
                                >
                                    Confirm Booking
                                </button>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* POPUP FORM */}
            <Modal
                title="Room Booking Details"
                open={openForm}
                onCancel={() => setOpenForm(false)}
                footer={null}
            >
                <div className="booking-form">

                    <label>Full Name</label>
                    <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />

                    <label>Phone Number</label>
                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} />

                    <label>Email</label>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label>Select Date</label>
                    <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

                    <label>How Many People?</label>
                    <Input type="number" value={people} onChange={(e) => setPeople(e.target.value)} />

                    <label>Days to Book</label>
                    <Input type="number" value={days} onChange={(e) => setDays(e.target.value)} />

                    <label>Additional Notes (Optional)</label>
                    <Input.TextArea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />

                    <button className="details-btn" style={{ marginTop: "20px" }} onClick={submitBooking}>
                        Submit Booking
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default RoomDetails;