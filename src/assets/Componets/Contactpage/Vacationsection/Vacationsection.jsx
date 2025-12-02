import React from "react";
import "./Vacationsection.css";
import { Row, Col } from "antd";

const Vacationsection = () => {
    const data = [
        {
            img: "https://cdn.prod.website-files.com/68f3630df2905f907596e1cd/68f380bd0e3afe8e1c1caa7c_ChatGPT%20Image%20Oct%2018%2C%202025%2C%2006_57_40%20PM.avif",
            title: "Luxury Accommodation",
            description: "Escape to comfort and style with our luxurious rooms and suites.",
        },
        {
            img: "https://cdn.prod.website-files.com/68f3630df2905f907596e1cd/68f3808935db97712a834165_ChatGPT%20Image%20Oct%2018%2C%202025%2C%2006_56_34%20PM.avif",
            title: "Expert Concierge",
            description: "Our dedicated concierge is here to help you plan every aspect of your trip.",
        },
        {
            img: "https://cdn.prod.website-files.com/68f3630df2905f907596e1cd/68f3808926d71ee27bbdaa53_ChatGPT%20Image%20Oct%2018%2C%202025%2C%2006_56_32%20PM.avif",
            title: "Top Locations",
            description: "Choose from our selection of top-rated destinations around the world.",
        },
    ];
    
    return (
        <div className="Sectionpadding">
            <div className="VacationsectionContainer">
                <Row justify="center" className="vacation-title-row">
                    <Col lg={24} md={24} sm={24} xs={24}>
                        <div className="vacationsection-content">
                            <h1 className="vacation-heading">
                                Why Choose Us for Your Vacation?
                            </h1>
                        </div>
                    </Col>
                </Row>
                
                
                <Row gutter={[30, 30]} justify="center" className="vacation-cards-row">
                    {data.map((item, index) => (
                        <Col 
                            key={index}
                            lg={8}     
                            md={12}   
                            sm={24}   
                            xs={24}
                            className="vacation-card-col"
                        >
                            <div className="vacationsection-card">
                                <div className="card-image-wrapper">
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="card-image"
                                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/3B82F6/ffffff?text=Vacation+Image" }}
                                    />
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Vacationsection;