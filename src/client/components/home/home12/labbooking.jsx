import React from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import { booklab01, booklab02, booklab03, booklabbg01, booklabbg02 } from '../../imagepath';
import { Link } from 'react-router-dom'

const LabBooking = () => {
    const options = {
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
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
                items: 3,
            },
        },
    };

    return (
        <>
            {/* Booking Lab Test */}
            <section className="booking-lab-test-sec">
                <div className="section-bg">
                    <img
                        src={booklabbg01}
                        className="best-pack-bg-one"
                        alt="Img"
                    />
                    <img
                        src={booklabbg02}
                        className="best-pack-bg-two"
                        alt="Img"
                    />
                </div>
                <div className="container">
                    <div className="section-head-twelve">
                        <h2>Recent Booked Lab test</h2>
                        <p>
                            {" "}
                            Uncover the Seamless Process for Easy Navigation and Health Solutions.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <OwlCarousel className="booking-lab-test-slider" {...options}>
                                <div
                                    className="booking-lab-grid"
                                    data-aos="fade-up"
                                    data-aos-delay={500}
                                >
                                    <div className="booking-lab-img">
                                        <Link to="/consultation">
                                            <img
                                                src={booklab01}
                                                className="img-fluid"
                                                alt="Img"
                                            />
                                        </Link>
                                    </div>
                                    <div className="booking-lab-content">
                                        <ul className="feature-badge">
                                            <li>Includes 90 Parameters</li>
                                            <li>Includes 20 tests </li>
                                        </ul>
                                        <h4>
                                            <Link to="/consultation">Pregnancy Test</Link>
                                        </h4>
                                        <p>
                                            Confidential Pregnancy Testing, Accurate and Timely Results
                                            for Your Peace of Mind
                                        </p>
                                        <div className="package-footer d-flex justify-content-between align-items-center">
                                            <div className="package-cost">
                                                <h5>
                                                    1499.25 <span> 1999.00</span>
                                                </h5>
                                            </div>
                                            <div className="package-btn">
                                                <Link to="/patient/booking2">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="booking-lab-grid"
                                    data-aos="fade-up"
                                    data-aos-delay={600}
                                >
                                    <div className="booking-lab-img">
                                        <Link to="/consultation">
                                            <img
                                                src={booklab02}
                                                className="img-fluid"
                                                alt="Img"
                                            />
                                        </Link>
                                    </div>
                                    <div className="booking-lab-content">
                                        <ul className="feature-badge">
                                            <li>Includes 90 Parameters</li>
                                            <li>Includes 20 tests </li>
                                        </ul>
                                        <h4>
                                            <Link to="/consultation">Thyroid</Link>
                                        </h4>
                                        <p>
                                            Confidential Pregnancy Testing, Accurate and Timely Results
                                            for Your Peace of Mind
                                        </p>
                                        <div className="package-footer d-flex justify-content-between align-items-center">
                                            <div className="package-cost">
                                                <h5>
                                                    1299.25 <span> 1499.00</span>
                                                </h5>
                                            </div>
                                            <div className="package-btn">
                                                <Link to="/patient/booking2">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="booking-lab-grid"
                                    data-aos="fade-up"
                                    data-aos-delay={700}
                                >
                                    <div className="booking-lab-img">
                                        <Link to="/consultation">
                                            <img
                                                src={booklab03}
                                                className="img-fluid"
                                                alt="Img"
                                            />
                                        </Link>
                                    </div>
                                    <div className="booking-lab-content">
                                        <ul className="feature-badge">
                                            <li>Includes 90 Parameters</li>
                                            <li>Includes 20 tests </li>
                                        </ul>
                                        <h4>
                                            <Link to="/consultation">Diabetes Test</Link>
                                        </h4>
                                        <p>
                                            Confidential Pregnancy Testing, Accurate and Timely Results
                                            for Your Peace of Mind
                                        </p>
                                        <div className="package-footer d-flex justify-content-between align-items-center">
                                            <div className="package-cost">
                                                <h5>
                                                    1199.25 <span> 1299.00</span>
                                                </h5>
                                            </div>
                                            <div className="package-btn">
                                                <Link to="/patient/booking2">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="booking-lab-grid"
                                    data-aos="fade-up"
                                    data-aos-delay={800}
                                >
                                    <div className="booking-lab-img">
                                        <Link to="/consultation">
                                            <img
                                                src={booklab02}
                                                className="img-fluid"
                                                alt="Img"
                                            />
                                        </Link>
                                    </div>
                                    <div className="booking-lab-content">
                                        <ul className="feature-badge">
                                            <li>Includes 90 Parameters</li>
                                            <li>Includes 20 tests </li>
                                        </ul>
                                        <h4>
                                            <Link to="/consultation">Thyroid</Link>
                                        </h4>
                                        <p>
                                            Confidential Pregnancy Testing, Accurate and Timely Results
                                            for Your Peace of Mind
                                        </p>
                                        <div className="package-footer d-flex justify-content-between align-items-center">
                                            <div className="package-cost">
                                                <h5>
                                                    1299.25 <span> 1499.00</span>
                                                </h5>
                                            </div>
                                            <div className="package-btn">
                                                <Link to="/patient/booking2">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default LabBooking
