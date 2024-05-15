import React from "react";
import { client03, client04, client06, client07, testimonial2 } from "../image";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import { Link } from "react-router-dom";

const TestimonialSection = () => {
  const testimonialsettings = {
    items: 1,
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    // navContainer: ".slide-nav-1",
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
    <div className="testimonal-section-sixteen">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header-sixteen text-center">
              <p>OUr services</p>
              <h2>Featured Services</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="testi-img">
              <img src={testimonial2} alt="" className="img-fluid" />
              <span className="testi-icon">
                <i className="fa-solid fa-quote-left" />
              </span>
            </div>
            <div className="testi-users">
              <div className="nav nav-container slide-11" />
              <ul>
                <li>
                  <img src={client04} alt="" className="img-fluid" />
                </li>
                <li>
                  <img src={client03} alt="" className="img-fluid" />
                </li>
                <li>
                  <img src={client06} alt="" className="img-fluid" />
                </li>
                <li>
                  <img src={client07} alt="" className="img-fluid" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-7">
            {/* <div className="owl-carousel eye-testislider"> */}
            <OwlCarousel {...testimonialsettings}>
              <div className="testimonial-wrap">
                <h4>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using Content here, content here, making it look like readable
                  English. Many desktop publishing packages and web page editors
                  now use Lorem Ipsum as their default model text, and a search
                  for lorem ipsum will uncover many web sites still in their
                  infancy
                </p>
                <div className="testimonial-user">
                  <h6>Elizabeth Forsyth</h6>
                  <p>Las Vegas, USA</p>
                </div>
              </div>
              <div className="testimonial-wrap">
                <h4>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical
                </h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here, making it look like readable English. Many
                  desktop publishing packages and web page editors now use Lorem
                  Ipsum as their default model text, and a search for lorem
                  ipsum will uncover many web sites still in their infancy
                </p>
                <div className="testimonial-user">
                  <h6>Leigh Baley</h6>
                  <p>San Jose, USA</p>
                </div>
              </div>
              <div className="testimonial-wrap">
                <h4>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here making it look like readable English.
                </p>
                <div className="testimonial-user">
                  <h6>Jon Sparks</h6>
                  <p>Irvine, USA</p>
                </div>
              </div>
            </OwlCarousel>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
