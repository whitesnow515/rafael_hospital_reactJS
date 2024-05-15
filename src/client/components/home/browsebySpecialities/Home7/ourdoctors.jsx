import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  V_doctor_01,
  Veterinary_doctor_02,
  Veterinary_doctor_03,
  Veterinary_doctor_04,
  big_paw,
  small_paw,
} from "../../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import Owlcarousel from "react-owl-carousel";
const Ourdoctors = () => {
  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  const options = {
    loop: true,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navContainer: ".slide-nav-16",
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
        items: 2,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 4,
      },
      1300: {
        items: 4,
      },
    },
  };

  return (
    <>
      {/* Our Doctors */}
      <div className="blog-section-fourteen our-doctor-twelve">
        <div className="floating-bg">
          <img src={small_paw} alt="" />
          <img src={big_paw} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header-fourteen service-inner-fourteen">
                <div className="service-inner-fourteen">
                  <div className="service-inner-fourteen-two">
                    <h3>OUR TEAM</h3>
                  </div>
                </div>
                <h2>Meet Our Doctors</h2>
                <p>Our Qualified Professionals</p>
              </div>
            </div>
          </div>
          <div className="blog-slider-twelve owl-theme aos" data-aos="fade-up">
            <Owlcarousel
              className="blog-slider-twelve owl-theme aos"
              data-aos="fade-up"
              {...options}
            >
              <div className="card blog-inner-fourt-all">
                <div className="card-body blog-inner-fourt-main">
                  <div className="blog-inner-right-fourt">
                    <Link to="/patient/doctor-profile">
                      <div className="blog-inner-right-img">
                        <img
                          src={V_doctor_01}
                          alt="image"
                          className="img-fluid "
                        />
                        <div className="blog-inner-top-content content-pricing">
                          <span>$ 200</span>
                        </div>
                        <div className="blog-inner-top-content">
                          <span>Veterinarian</span>
                        </div>
                      </div>
                    </Link>
                    <h4 className="blog-inner-right-fourt-care">
                      <Link to="/patient/doctor-profile">Dr. Marie Wells</Link>
                    </h4>
                    <ul className="articles-list nav blog-articles-list">
                      <li>
                        <i className="fa fa-location-dot" />{" "}
                        <strong>0.9</strong> min - New York, USA
                      </li>
                    </ul>
                    <div className="blog-list-ratings">
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star" />
                      <span>(20)</span>
                    </div>
                    <Link to="/patient/booking1" className="btn btn-primary">
                      Consult
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card blog-inner-fourt-all">
                <div className="card-body blog-inner-fourt-main">
                  <div className="blog-inner-right-fourt">
                    <Link to="/patient/doctor-profile">
                      <div className="blog-inner-right-img">
                        <img
                          src={Veterinary_doctor_02}
                          alt="image"
                          className="img-fluid "
                        />
                        <div className="blog-inner-top-content content-pricing">
                          <span>$ 150</span>
                        </div>
                        <div className="blog-inner-top-content">
                          <span>Pet Care Specialist</span>
                        </div>
                      </div>
                    </Link>
                    <h4 className="blog-inner-right-fourt-care">
                      <Link to="/patient/doctor-profile">
                        Dr. Justin Parker
                      </Link>
                    </h4>
                    <ul className="articles-list nav blog-articles-list">
                      <li>
                        <i className="fa fa-location-dot" /> <strong>2</strong>{" "}
                        hrs - Chicago, USA
                      </li>
                    </ul>
                    <div className="blog-list-ratings">
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star" />
                      <span>(22)</span>
                    </div>
                    <Link to="/patient/booking1" className="btn btn-primary">
                      Consult
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card blog-inner-fourt-all">
                <div className="card-body blog-inner-fourt-main">
                  <div className="blog-inner-right-fourt">
                    <Link to="/patient/doctor-profile">
                      <div className="blog-inner-right-img">
                        <img
                          src={Veterinary_doctor_03}
                          alt="image"
                          className="img-fluid "
                        />
                        <div className="blog-inner-top-content content-pricing">
                          <span>$ 110</span>
                        </div>
                        <div className="blog-inner-top-content">
                          <span>Veterinarian</span>
                        </div>
                      </div>
                    </Link>
                    <h4 className="blog-inner-right-fourt-care">
                      <Link to="/patient/doctor-profile">
                        Dr. Pamela Curtis
                      </Link>
                    </h4>
                    <ul className="articles-list nav blog-articles-list">
                      <li>
                        <i className="fa fa-location-dot" />{" "}
                        <strong>0.8</strong> min - Sandiago, USA
                      </li>
                    </ul>
                    <div className="blog-list-ratings">
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star" />
                      <span>(30)</span>
                    </div>
                    <Link to="/patient/booking1" className="btn btn-primary">
                      Consult
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card blog-inner-fourt-all">
                <div className="card-body blog-inner-fourt-main">
                  <div className="blog-inner-right-fourt">
                    <Link to="/patient/doctor-profile">
                      <div className="blog-inner-right-img">
                        <img
                          src={Veterinary_doctor_04}
                          alt="image"
                          className="img-fluid "
                        />
                        <div className="blog-inner-top-content content-pricing">
                          <span>$ 50</span>
                        </div>
                        <div className="blog-inner-top-content">
                          <span>Veterinarian</span>
                        </div>
                      </div>
                    </Link>
                    <h4 className="blog-inner-right-fourt-care">
                      <Link to="/patient/doctor-profile">Dr.Ronald Jacobs</Link>
                    </h4>
                    <ul className="articles-list nav blog-articles-list">
                      <li>
                        <i className="fa fa-location-dot" /> <strong>10</strong>{" "}
                        min - Texas, USA
                      </li>
                    </ul>
                    <div className="blog-list-ratings">
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star" />
                      <span>(45)</span>
                    </div>
                    <Link to="/patient/booking1" className="btn btn-primary">
                      Consult
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card blog-inner-fourt-all">
                <div className="card-body blog-inner-fourt-main">
                  <div className="blog-inner-right-fourt">
                    <Link to="/patient/doctor-profile">
                      <div className="blog-inner-right-img">
                        <img
                          src={V_doctor_01}
                          alt="image"
                          className="img-fluid "
                        />
                        <div className="blog-inner-top-content content-pricing">
                          <span>$ 200</span>
                        </div>
                        <div className="blog-inner-top-content">
                          <span>Veterinarian</span>
                        </div>
                      </div>
                    </Link>
                    <h4 className="blog-inner-right-fourt-care">
                      <Link to="/patient/doctor-profile">Dr. Marie Wells</Link>
                    </h4>
                    <ul className="articles-list nav blog-articles-list">
                      <li>
                        <i className="fa fa-location-dot" />{" "}
                        <strong>0.9</strong> min - New York, USA
                      </li>
                    </ul>
                    <div className="blog-list-ratings">
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star rated" />
                      <i className="fa-solid fa-star" />
                      <span>(20)</span>
                    </div>
                    <Link to="/patient/booking1" className="btn btn-primary">
                      Consult
                    </Link>
                  </div>
                </div>
              </div>
            </Owlcarousel>
          </div>
          <div className="owl-nav slide-nav-16 text-end nav-control" />
          <div
            className="blog-btn-sec text-center aos aos-init aos-animate"
            data-aos="fade-up"
          >
            <Link
              to="/patient/search-doctor"
              className="btn btn-primary btn-view"
            >
              See All Doctors
            </Link>
          </div>
        </div>
      </div>
      {/* /Our Doctors */}
    </>
  );
};
export default Ourdoctors;
