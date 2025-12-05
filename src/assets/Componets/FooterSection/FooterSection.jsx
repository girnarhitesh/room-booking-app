import React from 'react';
import { Row, Col } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './FooterSection.css';

function FooterSection() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="footer-container">
                <Row   className='Footer-Row'>
                    {/* Company Info */}
                    <Col lg={6} md={12} sm={24} xs={24}>
                        <div className="footer-column">
                            <h3 className="footer-logo"><img src="public/logo.img/img1.png" alt="" /></h3>
                            <p className="footer-description">
                                Your trusted partner for unforgettable vacation experiences around the world. 
                                Creating memories that last a lifetime.
                            </p>
                            <div className="footer-social">
                                <a href="#" className="social-icon" aria-label="Facebook">
                                    <FacebookOutlined />
                                </a>
                                <a href="#" className="social-icon" aria-label="Twitter">
                                    <TwitterOutlined />
                                </a>
                                <a href="#" className="social-icon" aria-label="Instagram">
                                    <InstagramOutlined />
                                </a>
                                <a href="#" className="social-icon" aria-label="LinkedIn">
                                    <LinkedinOutlined />
                                </a>
                            </div>
                        </div>
                    </Col>

                    {/* Quick Links */}
                    <Col lg={6} md={12} sm={12} xs={24}>
                        <div className="footer-column">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-links">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/rooms">Rooms</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>   
                        </div>
                    </Col>

                   
                    {/* <Col lg={6} md={12} sm={12} xs={24}>
                        <div className="footer-column">
                            <h4 className="footer-title">Our Services</h4>
                            <ul className="footer-links">
                                <li><a href="#hotel">Hotel Booking</a></li>
                                <li><a href="#flight">Flight Reservations</a></li>
                                <li><a href="#tours">Guided Tours</a></li>
                                <li><a href="#car">Car Rentals</a></li>
                                <li><a href="#insurance">Travel Insurance</a></li>
                            </ul>
                        </div>
                    </Col> */}

                    {/* Contact Info */}
                    <Col lg={6} md={12} sm={24} xs={24}>
                        <div className="footer-column">
                            <h4 className="footer-title">Contact Us</h4>
                            <ul className="footer-contact">
                                <li>
                                    <EnvironmentOutlined className="contact-icon" />
                                    <span style={{letterSpacing:"1px",lineHeight:"20px"}}>123 Travel Street, Wanderlust City, WL 12345</span>
                                </li>
                                <li>
                                    <PhoneOutlined className="contact-icon" />
                                    <span style={{letterSpacing:"1px"}}>+1 (555) 123-4567</span>
                                </li>
                                <li>
                                    <MailOutlined className="contact-icon" />
                                    <span style={{letterSpacing:"1px"}}>info@travelvista.com</span>
                                </li>
                            </ul>
                             
                        </div>
                    </Col>
                </Row>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <Row>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <p className="copyright">
                                © {currentYear} TravelVista. All rights reserved.
                            </p>
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <div className="footer-bottom-links">
                                <a href="#privacy">Privacy Policy</a>
                                <span className="separator">|</span>
                                <a href="#terms">Terms of Service</a>
                                <span className="separator">|</span>
                                <a href="#cookies">Cookie Policy</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;