/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import HomeClinic from "./clinic";
import BookourBestDoctor from "./bookourbestdoctor";
import BrowsebySpecialities from "./browsebySpecialities";
import HomeFeatures from "./features";
import HomeBlog from "./blog";
import Slider from "react-slick";
import Footer from "../footer";
import TopHeader from "../topheader";
import { Slider1, Slider2, Slider3 } from "./image.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSlider1 = (props) => {
  //Aos

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    rtl: true,
    slidesToShow: 1,
    cssEase: "linear",
  };
  return (
    <div className="main-wrapper">
      <TopHeader {...props} />
      {/* Home Banner */}
      <section id="home" className="divider">
        <div className="container-fluid p-0">
          {/*- slider --*/}
          <Slider {...settings}>
            <div className="carousel-item active">
              <img className="d-block w-100" src={Slider1} alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <span>We Provide Solution</span>
                <h2>To stressless Life</h2>
                <p>
                  People who are more perfectionist are most likely to be
                  depressed,
                  <br />
                  Because they stress themselves out so much.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Slider2} alt="Second slide" />
              <div className="carousel-caption d-none d-md-block">
                <span>We Provide Solution</span>
                <h2>Health Care Solution</h2>
                <p>
                  Every day we bring hope to millions of children in the world's
                  <br /> hardest places as a sign of God's unconditional love.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Slider3} alt="Third slide" />
              <div className="carousel-caption d-none d-md-block">
                <span>We Provide total</span>
                <h2>Personalised care</h2>
                <p>
                  People who are more perfectionist are most likely to be
                  depressed,
                  <br />
                  Because they stress themselves out so much.
                </p>
              </div>
            </div>
          </Slider>

          {/*- /slider --*/}
          {/* Search */}
          <div className="banner-wrapper">
            <div className="search-box search-box-3">
              <form>
                <div className="form-group search-location">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Location"
                  />
                </div>
                <div className="form-group search-info">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary search-btn btn-search mt-0"
                >
                  <i className="fas fa-search" /> <span>Search</span>
                </button>
              </form>
            </div>
          </div>
          {/* /Search */}
        </div>
      </section>
      {/* /Home Banner */}
      {/* Clinic and Specialities */}
      <HomeClinic />
      {/* Clinic and Specialities */}
      {/* Category Section */}
      <BrowsebySpecialities />
      {/* Category Section */}
      {/* Popular Section */}
      <BookourBestDoctor />
      {/* /Popular Section */}
      <HomeFeatures />
      <HomeBlog />
      <Footer {...props} />
    </div>
  );
};

export default HomeSlider1;
