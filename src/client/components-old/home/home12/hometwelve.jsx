import React from "react";
import {
  faqsecbgimg,
  faqsecimg,
  labserviceicon01,
  labserviceicon02,
  labserviceicon03,
  medicalicon01,
  medicalicon02,
  medicalicon03,
  medicalicon04,
  sectionbg01,
  sectionbg02,
  sectionsmallicon01,
  sliderbgimg,
  testicon01,
  testicon02,
  testicon03,
} from "../../imagepath";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OwlCarousel from "react-owl-carousel";
import FeaturePackageSection from "./featurepackagesection";
import BestPackage from "./bestpackage";
import LabBooking from "./labbooking";
import PopularSection from "./popularsection";
import PopularChoices from "./popularchoices";
import FooterTwelve from "./footertwelve";
import PricingSection from "./pricingsection";
import BannerSection from "./bannersection";
import { Link } from "react-router-dom";
import ProgressCircle from "../paediatric/scrolltotop";
import Header from "../../header";

const HomeTwelve = (props) => {
  if (props.location.pathname === "/index-12") {
    require("../../../assets/css/feather.css");
  }
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    margin: 24,
    nav: false,
    navText: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const owlOptions = {
    loop: true,
    margin: 24,
    dots: false,
    slidesToShow: 1,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fa-solid fa-caret-left "></i>',
      '<i class="fa-solid fa-caret-right"></i>',
    ],

    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      575: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 1,
      },
      1300: {
        items: 1,
      },
    },
  };

  const medicalEmergencyData = [
    {
      id: 1,
      heading: "Chest Pain?",
      subheading: "Check if you are at risk for a Heart Attack",
      content:
        "Get a test report in an hour and care for your heart at our Specialist Advice.",
      link: "/patient/booking2",
    },
    {
      id: 2,
      heading: "Chest Pain?",
      subheading: "Check if you are at risk for a Heart Attack",
      content:
        "Get a test report in an hour and care for your heart at our Specialist Advice.",
      link: "/patient/booking2",
    },
    // Add more data objects for each card
  ];

  return (
    <div>
      <div className="home-pg-twelve main-wrapper">
        <Header />
        {/* Home Banner */}
        <BannerSection />
        {/* /Home Banfner */}
        {/* Popular Test Section */}
        <section className="popular-test-section">
          <div className="section-small-imgs">
            <img src={sectionbg01} className="bg-img-one" alt="Img" />
            <img src={sectionbg02} className="bg-img-two" alt="Img" />
          </div>
          <div className="container">
            <div className="section-head-twelve">
              <h2>Popular Tests</h2>
              <p>
                Discover Our Popular Lab Tests, Unlock Key Health Insights with
                Trusted Diagnostic Services.
              </p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Slider {...settings}>
                  {/* Slide 1 */}
                  <div className="test-slider-card" data-aos="fade-up">
                    <span className="hexagon">
                      <img src={testicon01} alt="Img" />
                    </span>
                    <h4>
                      <Link to="/consultation">Diabetes</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                  {/* Slide 2 */}
                  <div className="test-slider-card" data-aos="fade-up">
                    <span className="hexagon liver">
                      <img src={testicon02} alt="Img" />
                    </span>
                    <h4>
                      <Link to="/consultation">Liver</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                  {/* Slide 3 */}
                  <div className="test-slider-card" data-aos="fade-up">
                    <span className="hexagon kidney">
                      <img src={testicon03} alt="Img" />
                    </span>
                    <h4>
                      <Link to="/consultation">Kidney</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                  {/* Slide 1 */}
                  <div className="test-slider-card" data-aos="fade-up">
                    <span className="hexagon">
                      <img src={testicon01} alt="Img" />
                    </span>
                    <h4>
                      <Link to="/consultation">Diabetes</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                  {/* Slide 2 */}
                  <div className="test-slider-card" data-aos="fade-up">
                    <span className="hexagon liver">
                      <img src={testicon02} alt="Img" />
                    </span>
                    <h4>
                      <Link to="/consultation">Liver</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                  {/* Slide 3 */}
                  <div className="test-slider-card" data-aos="fade-up">
                    <span className="hexagon kidney">
                      <img src={testicon03} alt="Img" />
                    </span>
                    <h4>
                      <Link to="/consultation">Kidney</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="medical-emergency-booking">
              <OwlCarousel
                className="doctor-consulting-slider owl-carousel"
                {...owlOptions}
              >
                {medicalEmergencyData.map((item, index) => (
                  <div key={index} className="medical-emergency-card">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="slider-img">
                          <img
                            src={sliderbgimg}
                            className="img-fluid"
                            alt="Img"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="slider-content aos"
                          data-aos="fade-up"
                          data-aos-delay={600}
                        >
                          <h3>{item.heading}</h3>
                          <span>{item.subheading}</span>
                          <p>{item.content}</p>
                          <Link to={item.link}>Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
            <div className="medical-descriptions">
              <div className="row">
                <div
                  className="col-xl-3 col-md-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="description-item">
                    <span>
                      <img src={medicalicon01} alt="Img" />
                    </span>
                    <h4>
                      <Link to="#">Health Packages</Link>
                    </h4>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={700}
                >
                  <div className="description-item">
                    <span>
                      <img src={medicalicon02} alt="Img" />
                    </span>
                    <h4>
                      <Link to="#">All Tests</Link>
                    </h4>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={800}
                >
                  <div className="description-item">
                    <span>
                      <img src={medicalicon03} alt="Img" />
                    </span>
                    <h4>
                      <Link to="#">Book a Call</Link>
                    </h4>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={900}
                >
                  <div className="description-item">
                    <span>
                      <img src={medicalicon04} alt="Img" />
                    </span>
                    <h4>
                      <Link to="#">Upload Prescription</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Popular Test Section */}

        {/* Lab Service Section */}
        <section className="lab-service-section">
          <div className="sec-bg">
            <img
              src={sectionsmallicon01}
              className="small-icon-two"
              alt="Img"
            />
          </div>
          <div className="lab-services">
            <div className="row">
              <div className="col-lg-6 d-flex"></div>
              <div className="col-lg-6 d-flex">
                <div className="servive-provider-content">
                  <div
                    className="lab-service-title"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    <h2>Versatile Laboratory Service Provider</h2>
                    <h5>
                      Your full service lab for clinical trials. Our mission is
                      to ensure the generation of accurate and precise findings
                    </h5>
                    <p>
                      One of the most popular services Doccure offers is
                      diagnostic testing. People need to book pathological tests
                      for many reasons. But before booking, they wonder if the
                      diagnostic centre can be trusted to produce accurate
                      results...
                    </p>
                  </div>
                  <div className="lab-service-features">
                    <ul>
                      <li data-aos="fade-down" data-aos-delay={400}>
                        <span>
                          <img src={labserviceicon01} alt="Img" />
                        </span>
                        <h6>The Doccure - Easy Way To Book Lab Tests Online</h6>
                      </li>
                      <li data-aos="fade-down" data-aos-delay={500}>
                        <span>
                          <img src={labserviceicon02} alt="Img" />
                        </span>
                        <h6>Lab Test Booking Made Simple</h6>
                      </li>
                      <li data-aos="fade-down" data-aos-delay={600}>
                        <span>
                          <img src={labserviceicon03} alt="Img" />
                        </span>
                        <h6>World class Laboratory support</h6>
                      </li>
                    </ul>
                  </div>
                  <div className="sec-btn">
                    <Link to="/pages/voice-call" className="btn btn-primary">
                      Talk With Expert
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Lab Service Section */}

        <FeaturePackageSection />
        {/* /Best Packages Section */}
        <BestPackage />
        {/* /Best Packages Section */}
        {/* Booking Lab Test */}
        <LabBooking />
        {/*Booking Lab Test */}
        {/* Popular Choice*/}
        <PopularSection />
        {/* Popular Choice*/}
        {/* Faq Sec */}
        <section className="faq-sec-twelve">
          <div className="section-bg">
            <img src={faqsecbgimg} className="faq-bg-one" alt="Img" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex">
                <div className="faq-sec-col w-100">
                  <div className="section-head-twelve">
                    <h2>Frequently Asked Qusetions </h2>
                    <p>Know the Questions from our Customers</p>
                  </div>
                  <div className="faq-main-cards" id="accordionExample">
                    <div className="faq-card aos" data-aos="fade-up">
                      <div className="faq-title">
                        <Link
                          data-bs-toggle="collapse"
                          to="#faqOne"
                          aria-expanded="false"
                        >
                          <span>What is an otolaryngologist?</span>
                          <div
                            id="faqOne"
                            className="card-collapse collapse show"
                            data-bs-parent="#accordionExample"
                          >
                            <p>
                              An otolaryngologist is a doctor who specializes in
                              the diagnosis and treatment of ear, nose and
                              throat diseases as well as related structures of
                              the head and neck. Otolaryngologists are also
                              referred to as ENT doctors or physicians. For more
                              information
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="faq-card aos" data-aos="fade-up">
                      <div className="faq-title">
                        <Link
                          className="collapsed"
                          data-bs-toggle="collapse"
                          to="#faqtwo"
                          aria-expanded="false"
                        >
                          <span>What is an otolaryngologist?</span>
                          <div
                            id="faqtwo"
                            className="card-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <p>
                              An otolaryngologist is a doctor who specializes in
                              the diagnosis and treatment of ear, nose and
                              throat diseases as well as related structures of
                              the head and neck. Otolaryngologists are also
                              referred to as ENT doctors or physicians. For more
                              information
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="faq-card aos" data-aos="fade-up">
                      <div className="faq-title">
                        <Link
                          className="collapsed"
                          data-bs-toggle="collapse"
                          to="#faqthree"
                          aria-expanded="false"
                        >
                          <span>What is an otolaryngologist?</span>
                          <div
                            id="faqthree"
                            className="card-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <p>
                              An otolaryngologist is a doctor who specializes in
                              the diagnosis and treatment of ear, nose and
                              throat diseases as well as related structures of
                              the head and neck. Otolaryngologists are also
                              referred to as ENT doctors or physicians. For more
                              information
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="faq-card aos" data-aos="fade-up">
                      <div className="faq-title">
                        <Link
                          className="collapsed"
                          data-bs-toggle="collapse"
                          to="#faqfour"
                          aria-expanded="false"
                        >
                          <span>What is an otolaryngologist?</span>
                          <div
                            id="faqfour"
                            className="card-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <p>
                              An otolaryngologist is a doctor who specializes in
                              the diagnosis and treatment of ear, nose and
                              throat diseases as well as related structures of
                              the head and neck. Otolaryngologists are also
                              referred to as ENT doctors or physicians. For more
                              information
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 faq-absolute-col d-felx">
                <div className="faq-sec-bg-img w-100">
                  <img src={faqsecimg} className="img-fluid" alt="Img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Faq Sec*/}
        {/* Pricing Sec */}
        <PricingSection />
        {/* Pricing Sec */}
        <PopularChoices />
        {/* Pricing Sec */}
        {/* Pricing Sec */}
        <FooterTwelve />
        {/* Pricing Sec */}
        <div className="mouse-cursor cursor-outer" />
        <div className="mouse-cursor cursor-inner" />
        {/* /Cursor */}
        <ProgressCircle />
      </div>
    </div>
  );
};

export default HomeTwelve;
