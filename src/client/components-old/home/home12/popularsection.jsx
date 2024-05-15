import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom'
import { icongem } from '../../imagepath';
const PopularSection = () => {
    const cards = [
        { title: 'Advanced Renal Package', booked: 268, tests: 8, cost: 1500.25, originalCost: 1789.00, discount: '60% OFF' },
        { title: 'Vitamin D & B12 Combo', booked: 785, tests: 15, cost: 789.25, originalCost: 1600.00, discount: '30% OFF' },
        // Add more cards as needed
    ];

    const owlOptions = {
        loop: true,
        margin: 10,
        nav: true,
        navText: [
            '<i class="fa-solid fa-caret-left "></i>',
            '<i class="fa-solid fa-caret-right"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
    };

    return (
        <>
            {/* Popular Choice */}
            <section className="populr-choice-sec">
                <div className="container">
                    <div
                        className="section-head-twelve"
                        data-aos="fade-up"
                        data-aos-delay={500}
                    >
                        <h2>Popular Choices</h2>
                        <p>
                            Explore Our Top-Tier Packages for Your Personalized Wellness
                            Experience
                        </p>
                    </div>
                    <div className="choice-slider-main">
                        <div className="row">
                            <OwlCarousel className="popular-choice-slider owl-carousel" {...owlOptions}>
                                {cards.map((card, index) => (
                                    <div key={index} className="popular-choice-card" data-aos="fade-up" data-aos-delay={500 + index * 100}>
                                        <div className="choice-head">
                                            <h4>{card.title}</h4>
                                            <h6>
                                                <span>
                                                    <img src={icongem} alt="Img" />
                                                </span>
                                                Booked {card.booked} times
                                            </h6>
                                        </div>
                                        <ul className="feature-badge">
                                            <li>Includes {card.tests} tests </li>
                                        </ul>
                                        <div className="package-footer d-flex justify-content-between align-items-center">
                                            <div className="package-cost">
                                                <h5>
                                                    {card.cost} <span> {card.originalCost}</span>
                                                </h5>
                                            </div>
                                            <div className="offer-price">
                                                <span>{card.discount}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                        <div className="book-lab-phno">
                            <span>
                                Want to Book a Lab Visit, <Link to="#"> Call – +1 234 567 90</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Popular Choice */}
        </>

    )
}

export default PopularSection
