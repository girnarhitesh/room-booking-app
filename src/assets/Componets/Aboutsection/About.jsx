import React from 'react'
import './About.css'
import { Row, Col } from 'antd';
import RoomSection from '../RoomesSection/RoomSection';
;

function About() {
    return (
        <>
            <Row className="about-wrapper">
                <Col lg={12} md={16} sm={22} xs={24}>
                    <div className='About-section-content'>
                        <img src="/img.png/Aboutimg.png" alt="" />
                        <h1 className='m' style={{color:"#1F2937"}}>
                            crafted with care, <span style={{fontStyle:"italic", color:'#8a5a2e'  }}>made for you</span>
                        </h1>
                        <p className='about-para'>
                            Our space is built with one purpose: to create a peaceful escape where comfort meets elegance. 
                            Inspired by nature and crafted with warmth, we offer more than just a room — 
                            we offer a place where every moment feels special and memorable.
                        </p>
                    </div>
                </Col>
            </Row>
            <RoomSection/>
         
        </>
    )
}

export default About