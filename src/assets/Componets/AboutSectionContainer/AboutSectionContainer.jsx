import React from 'react';
import './AboutSectionContainer.css';
import SwiperSection from '../SwiperSection/SwiperSection';

const AboutSectionContainer = () => {
    // Actual images from the project
    const galleryImages = [
        'https://images.unsplash.com/photo-1746422029285-e81d6650f17f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ybWFsJTIwZGVzaWduJTIwaW4lMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1723478427920-f3586231144d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm9ybWFsJTIwZGVzaWduJTIwaW4lMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1723507357969-3eef0c103a6d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bm9ybWFsJTIwZGVzaWduJTIwaW4lMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1587522705669-61de54c723bf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bm9ybWFsJTIwZGVzaWduJTIwaW4lMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D',

    ];

    return (
        <>
            <div className='Sectionpadding'>
                <div>
                    <div className='AboutSectionContainer'>
                        <div className='AboutSectionContainerheading'>
                            <h1>About Us</h1>
                        </div>

                        <div className='AboutSectionContainerparagraph'>
                            <ul>
                                <li>
                                    <p>
                                        Welcome to our Room Booking platform, where comfort meets convenience.
                                        We are dedicated to providing a <span style={{ color: "#882A21", fontWeight: "bold" }}>smooth and reliable booking experience</span>
                                        for every user. Our website helps you search, compare, and book rooms
                                        easily for business trips, vacations, or short stays.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        We offer a wide range of room options to match different needs and budgets.
                                        From <span style={{ color: "#882A21", fontWeight: "bold" }}>luxury hotels to budget-friendly rooms</span>, we ensure that every user
                                        finds the perfect stay. All rooms listed on our platform are carefully
                                        verified to provide comfort and quality service.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        Our platform is designed to be simple and user-friendly.
                                        You can view room details, images, and prices clearly before making a decision.
                                        We aim to remove confusion and make booking fast and easy.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        Customer satisfaction is our top priority.
                                        Our support team is always ready to help you with any kind of
                                        assistance related to bookings or services.
                                        We believe in building trust and long-term relationships with our customers.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        We also take data security seriously and ensure that your personal
                                        information remains safe on our platform. With secure systems and
                                        continuous improvements, we <span style={{ color: "#882A21", fontWeight: "bold" }}>strive to deliver the best online room booking experience.</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='AboutSectionContainervideo'>
                        <video src="/video/Restorentvideo.mp4" autoPlay loop muted />
                    </div>
                </div>
            </div>
            <SwiperSection />
        </>
    );
};

export default AboutSectionContainer;