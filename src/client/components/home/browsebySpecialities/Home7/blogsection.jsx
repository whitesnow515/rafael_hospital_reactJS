import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Veterinary_blog_01,
  Veterinary_blog_02,
  Veterinary_blog_03,
  doctor_04,
  doctor_06,
  doctor_07,
} from "../../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
const Blogsection = () => {
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
    navContainer: ".slide-nav-15",
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
        items: 3,
      },
      1300: {
        items: 3,
      },
    },
  };
  return (
    <>
      {/* blog section */}
      <div className="blog-section-fourteen">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header-fourteen service-inner-fourteen">
                <div className="service-inner-fourteen">
                  <div className="service-inner-fourteen-two">
                    <h3>BLOG</h3>
                  </div>
                </div>
                <h2>Our Blogs</h2>
                <p>Our Recent Articles</p>
              </div>
            </div>
          </div>
          <div
            className="blog-slider-fourteen owl-theme aos"
            data-aos="fade-up"
          >
            <OwlCarousel
              className="blog-slider-fourteen owl-theme aos"
              data-aos="fade-up"
              {...options}
            >
              <div className="card blog-inner-fourt-all">
                <div className="card-body blog-inner-fourt-main">
                  <div className="blog-inner-right-fourt">
                    <Link to="/blog/blog-details">
                      <div className="blog-inner-right-img">
                        <img
                          src={Veterinary_blog_01}
                          alt="image"
                          className="img-fluid "
                        />
                        <div className="blog-inner-top-content">
                          <img src={doctor_04} alt="" className="me-2" />
                          <span>Dr. Pamila Certis</span>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/blog/blog-details"
                      className="blog-inner-right-fourt-care"
                    >
                      What You Might Not Know About The Best Dog Food in India
                    </Link>
                    <ul className="articles-list nav blog-articles-list">
                      <li>
                        <i>
                          <FeatherIcon icon={"calendar"} />
                        </i>{" "}
                        13 Aug, 2023
                      </li>
                      <li>
                        <i>
                          <FeatherIcon icon={"message-square"} />
                        </i>{" "}
                        68
                      </li>
                      <li>
                        <i>
                          <FeatherIcon icon={"eye"} />
                        </i>{" "}
                        1.5k
                      </li>
                    </ul>
                    <ul className="articles-list nav blog-articles-list-two">
                      <li>Dog</li>
                      <li>Health</li>
                      <li>Diet Foods</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore ad
                      minim veniam, quis magna aliqua.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card blog-inner-fourt-all">
                <div className="card-body blog-inner-fourt-main">
                  <div className="blog-inner-right-fourt">
                    <Link to="/blog/blog-details">
                      <div className="blog-inner-right-img">
                        <img
                          src={Veterinary_blog_02}
                          alt="image"
                          className="img-fluid "
                        />
                        <div className="blog-inner-top-content">
                          <img src={doctor_07} alt="" className="me-2" />
                          <span>Dr. James Matthew</span>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/blog/blog-details"
                      className="blog-inner-right-fourt-care"
                    >
                      How to Care for Rabbits in the Winter
                    </Link>
                    <ul className="articles-list nav blog-articles-list">
                      <li>
                        <i>
                          <FeatherIcon icon={"calendar"} />
                        </i>{" "}
                        13 Apr, 2023
                      </li>
                      <li>
                        <i>
                          <FeatherIcon icon={"message-square"} />
                        </i>{" "}
                        87
                      </li>
                      <li>
                        <i>
                          <FeatherIcon icon={"eye"} />
                        </i>{" "}
                        2.5k
                      </li>
                    </ul>
                    <ul className="articles-list nav blog-articles-list-two">
                      <li>Pet Care</li>
                      <li>Rabbit</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore ad
                      minim veniam, quis magna aliqua.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card blog-inner-fourt-all">
                <div className="card-body blog-inner-fourt-main">
                  <div className="blog-inner-right-fourt">
                    <Link to="/blog/blog-details">
                      <div className="blog-inner-right-img">
                        <img
                          src={Veterinary_blog_03}
                          alt="image"
                          className="img-fluid "
                        />
                        <div className="blog-inner-top-content">
                          <img src={doctor_06} alt="" className="me-2" />
                          <span>Dr. James Certis</span>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/blog/blog-details"
                      className="blog-inner-right-fourt-care"
                    >
                      Why Cat Scratches?
                    </Link>
                    <ul className="articles-list nav blog-articles-list">
                      <li>
                        <i>
                          <FeatherIcon icon={"calendar"} />
                        </i>{" "}
                        26 May, 2023
                      </li>
                      <li>
                        <i>
                          <FeatherIcon icon={"message-square"} />
                        </i>{" "}
                        78
                      </li>
                      <li>
                        <i>
                          <FeatherIcon icon={"eye"} />
                        </i>{" "}
                        1.6k
                      </li>
                    </ul>
                    <ul className="articles-list nav blog-articles-list-two">
                      <li>Cat</li>
                      <li>Cat Scratcher</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore ad
                      minim veniam, quis magna aliqua.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card blog-inner-fourt-all">
                <div className="card-body blog-inner-fourt-main">
                  <div className="blog-inner-right-fourt">
                    <Link to="/blog/blog-details">
                      <div className="blog-inner-right-img">
                        <img
                          src={Veterinary_blog_01}
                          alt="image"
                          className="img-fluid "
                        />
                        <div className="blog-inner-top-content">
                          <img src={doctor_04} alt="" className="me-2" />
                          <span>Dr. Pamila Certis</span>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/blog/blog-details"
                      className="blog-inner-right-fourt-care"
                    >
                      What You Might Not Know About The Best Dog Food in India
                    </Link>
                    <ul className="articles-list nav blog-articles-list">
                      <li>
                        <i>
                          <FeatherIcon icon={"calendar"} />
                        </i>{" "}
                        13 Aug, 2023
                      </li>
                      <li>
                        <i>
                          <FeatherIcon icon={"message-square"} />
                        </i>{" "}
                        68
                      </li>
                      <li>
                        <i>
                          <FeatherIcon icon={"eye"} />
                        </i>{" "}
                        1.5k
                      </li>
                    </ul>
                    <ul className="articles-list nav blog-articles-list-two">
                      <li>Dog</li>
                      <li>Health</li>
                      <li>Diet Foods</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore ad
                      minim veniam, quis magna aliqua.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
          <div className="owl-nav slide-nav-15 text-end nav-control" />
          <div
            className="blog-btn-sec text-center aos aos-init aos-animate"
            data-aos="fade-up"
          >
            <Link
              to="/patient/search-doctor"
              className="btn btn-primary btn-view"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </div>
      {/* /blog section */}
    </>
  );
};
export default Blogsection;
