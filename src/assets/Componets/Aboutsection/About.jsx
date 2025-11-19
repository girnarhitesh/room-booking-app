import React from 'react'
import './About.css'
import { Row, Col } from 'antd';

function About() {
    return (
        <>
            <Row>
                <Col lg={12} sm={16} md={24} xs={24}>
                    <div>
                        <div className='About-section-contant'>
                            <h1>crafted with care, made for you</h1>
                            <p>Our space is built with one purpose: to create a peaceful escape where comfort meets elegance. Inspired by nature and crafted with warmth, we offer more than just a room — we offer a place where every moment feels special and memorable.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default About
