import React from 'react'
import { abotusfift1, app_store, client01, google_play, mobile_img, scan_img } from '../../imagepath'
import { client02, client03 } from '../../pages/aboutus/img'
import Slider from 'react-slick'
import {Link} from 'react-router-dom'
const PopularChoices = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true, // Enable vertical sliding
        verticalSwiping: true, // Enable vertical swiping
        // nextArrow: <div className="arrow-down">Next</div>, // Custom next arrow (down arrow)
        // prevArrow: <div className="arrow-up">Prev</div>, // Custom prev arrow (up arrow)
    };
    const data = [
        {
            image: client01,
            name: 'Madeleine Jennifer',
            location: 'Chennai, Tamilnadu',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            image: client02,
            name: 'Madeleine Jennifer',
            location: 'Chennai, Tamilnadu',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            image: client03,
            name: 'Madeleine Jennifer',
            location: 'Chennai, Tamilnadu',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            image: client03,
            name: 'Madeleine Jennifer',
            location: 'Chennai, Tamilnadu',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
    ];

    return (
        <>
            {/* Patient About us */}
            <section className="about-us-section-fifteen client-review-twelve">
                <div className="container">
                    <div className="section-head-twelve">
                        <h2>Popular Choices </h2>
                        <p>
                            {" "}
                            Explore Our Top-Tier Packages for Your Personalized Wellness
                            Experience
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="aboutus-img-main">
                                <img
                                    src={abotusfift1}
                                    alt="image"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 position-relative">

                            <div className="slider vertical-slider">
                                <Slider {...settings}>
                                    {data.map((item, index) => (
                                        <div key={index} className="aboutus-fifteen-main">
                                            <div className="aboutus-profile-left">
                                                <div className="aboutus-image">
                                                    <img src={item.image} alt="Client" className="img-fluid" />
                                                </div>
                                                <div className="aboutus-contents">
                                                    <h6>{item.name}</h6>
                                                    <span>{item.location}</span>
                                                </div>
                                            </div>
                                            <p>{item.description}</p>
                                        </div>
                                    ))}
                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Patient About us */}

            {/* App Section */}
            <section className="app-section app-sec-twelve">
                <div className="container">
                    <div className="app-twelve">
                        <div className="app-bg">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
                                    <div className="mobile-img">
                                        <img
                                            src={mobile_img}
                                            className="img-fluid"
                                            alt="img"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="app-content">
                                        <div className="app-header aos" data-aos="fade-up">
                                            <h5>Working for Your Better Health.</h5>
                                            <h2>Download the Doccure App today!</h2>
                                        </div>
                                        <div className="app-scan aos" data-aos="fade-up">
                                            <p>Scan the QR code to get the app now</p>
                                            <img src={scan_img} alt="scan-image" />
                                        </div>
                                        <div className="google-imgs aos" data-aos="fade-up">
                                            <Link to="#">
                                                <img src={google_play} alt="img" />
                                            </Link>
                                            <Link to="#">
                                                <img src={app_store} alt="img" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /App Section */}
        </>
    )
}

export default PopularChoices
