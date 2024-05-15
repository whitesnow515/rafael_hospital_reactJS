import React, { useState } from 'react'
import { medalicon, packageicon01, packageicon02, sectionbg03, sectionbg04, stickericon, workicon05, workicon06, workicon07 } from '../../imagepath'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'
 
const BestPackage = () => {
    const [activeTab, setActiveTab] = useState('All Packages');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    
    const renderContent = () => {
     
      switch (activeTab) {
        case 'All Packages':
          return (
            // Render content for All Packages tab
            // You can use the Slider component here with the specified settings
            <div>
              {/* Your content for All Packages */}
            </div>
          );
        case 'Family Care':
          return (
            // Render content for Family Care tab
            // You can use the Slider component here with specific settings for Family Care
            <div>
              {/* Your content for Family Care */}
            </div>
          );
        case 'Adult Care':
          return (
            // Render content for Adult Care tab
            // You can use the Slider component here with specific settings for Adult Care
            <div>
              {/* Your content for Adult Care */}
            </div>
          );
        // Add more cases for other tabs as needed
        default:
          return null;
      }
    }
    const settings = {
      dots: true,
      arrow: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      margin: 24,
      nav: false
    };
  
    return (
        <>
            {/* Best Packages Section */}
            <section className="best-packages-section">
                <div className="section-bg">
                    <img
                        src={sectionbg03}
                        className="best-pack-bg-one"
                        alt="Img"
                    />
                    <img
                        src={sectionbg04}
                        className="best-pack-bg-two"
                        alt="Img"
                    />
                </div>
                <div className="container">
                    <div className="section-head-twelve">
                        <h2>Best Packages</h2>
                        <p>
                            {" "}
                            Explore Our Top-Tier Packages for Your Personalized Wellness
                            Experience
                        </p>
                    </div>
                    <ul className="nav nav-pills inner-tab">
                    {/* Map through your tab data and render buttons */}
                    {['All Packages', 'Family Care', 'Adult Care', 'Accident Care', 'Fitness Care', 'Explore More'].map((tab, index) => (
                      <li className="nav-item" key={index}>
                        <button
                          className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                          onClick={() => handleTabClick(tab)}
                        >
                          {tab}
                        </button>
                      </li>
                    ))}
                  </ul>
                    <div className="tab-content pt-0 dashboard-tab">
                        <div
                            className="tab-pane fade show active"
                            id="pills-all"
                            role="tabpanel"
                            aria-labelledby="pills-all-tab"
                        >
                            <div className="row">
                                <div className="col-md-12">   
                                 {renderContent()}

                                    <Slider {...settings} className="best-package-slider owl-carousel">
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={500}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={600}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={700}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={800}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-family"
                            role="tabpanel"
                            aria-labelledby="pills-family-tab"
                        >
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="best-package-slider owl-carousel">
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={500}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={600}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={700}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={800}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-adult"
                            role="tabpanel"
                            aria-labelledby="pills-adult-tab"
                        >
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="best-package-slider owl-carousel">
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={500}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={600}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={700}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={800}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-accident"
                            role="tabpanel"
                            aria-labelledby="pills-accident-tab"
                        >
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="best-package-slider owl-carousel">
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={500}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={600}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={700}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={800}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-fitness"
                            role="tabpanel"
                            aria-labelledby="pills-fitness-tab"
                        >
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="best-package-slider owl-carousel">
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={500}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={600}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={700}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={800}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-explore"
                            role="tabpanel"
                            aria-labelledby="pills-explore-tab"
                        >
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="best-package-slider owl-carousel">
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={500}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={600}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={700}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={800}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/booking2">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="how-it-work">
                        <div className="section-head-twelve">
                            <h2>How It Works</h2>
                            <p>
                                {" "}
                                Uncover the Seamless Process for Easy Navigation and Health
                                Solutions.
                            </p>
                        </div>
                        <div className="row justify-content-center">
                            <div
                                className="col-lg-4 col-md-6 d-flex"
                                data-aos="fade-up"
                                data-aos-delay={600}
                            >
                                <div className="work-box">
                                    <div className="work-icon">
                                        <img src={workicon07} alt="Img" />
                                    </div>
                                    <h4>1. Request your test kit</h4>
                                    <p>
                                        Take the first step to better health – request your test kit.
                                        Simple, convenient, and tailored to empower your wellness
                                        journey.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 d-flex"
                                data-aos="fade-up"
                                data-aos-delay={700}
                            >
                                <div className="work-box bg-green">
                                    <div className="work-icon">
                                        <img src={workicon06} alt="Img" />
                                    </div>
                                    <h4>2. Collect Your Sample</h4>
                                    <p>
                                        {" "}
                                        Collect your sample at your convenience with our easy-to-follow
                                        instructions. Streamlined and hassle-free, empowering your
                                        health from the comfort of home
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 d-flex"
                                data-aos="fade-up"
                                data-aos-delay={800}
                            >
                                <div className="work-box bg-pink">
                                    <div className="work-icon">
                                        <img src={workicon05} alt="Img" />
                                    </div>
                                    <h4>3. Receive results in days</h4>
                                    <p>
                                        Expect your test results within days, ensuring a prompt and
                                        efficient turnaround. Stay informed and take control of your
                                        health journey
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Best Packages Section */}
        </>

    )
}

export default BestPackage
