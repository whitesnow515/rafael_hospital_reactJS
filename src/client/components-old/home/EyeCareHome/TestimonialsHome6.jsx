/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import {
  client_01,
  client_02,
  client_03,
  client_04,
  eye_icon,
  testimonial,
} from "../../imagepath";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Link } from "react-router-dom";
function TestimonialsHome6() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  const doctersettings = {
    items: 1,
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    //   navContainer: '.slide-nav-2',
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],

    autoplay: false,
    infinite: "true",

    slidestoscroll: 1,
    rtl: "true",
    rows: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidestoshow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidestoshow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidestoshow: 3,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidestoshow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="eye-testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-heading text-center sec-heading-eye">
                <img src={eye_icon} alt="" className="img-fluid" />
                <h2>
                  <span>Client</span> Testimonials
                </h2>
                <p>What our clients say about us</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="testi-img">
                <img src={testimonial} alt="" className="img-fluid" />
                <span className="testi-icon">
                  <i className="fa-solid fa-quote-left" />
                </span>
              </div>
              <div className="testi-users">
                <div className="nav nav-container slide-11" />
                <ul>
                  <li>
                    <img src={client_01} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={client_02} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={client_03} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={client_04} alt="" className="img-fluid" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-7">
              <div className="eye-testislider">
                <OwlCarousel {...doctersettings}>
                  <div className="testimonial-wrap">
                    <h4>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard. The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to
                      using 'Content here, content here', making it look like
                      readable English. Many desktop publishing packages and web
                      page editors now use Lorem Ipsum as their default model
                      text, and a search for 'lorem ipsum' will uncover many web
                      sites still in their infancy
                    </p>
                    <div className="testimonial-user">
                      <h6>Elizabeth Forsyth</h6>
                      <p>Las Vegas, USA</p>
                    </div>
                  </div>
                  <div className="testimonial-wrap">
                    <h4>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical
                    </h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy
                    </p>
                    <div className="testimonial-user">
                      <h6>Leigh Baley</h6>
                      <p>San Jose, USA</p>
                    </div>
                  </div>
                  <div className="testimonial-wrap">
                    <h4>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries. The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to
                      using 'Content here, content here making it look like
                      readable English.
                    </p>
                    <div className="testimonial-user">
                      <h6>Jon Sparks</h6>
                      <p>Irvine, USA</p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialsHome6;
