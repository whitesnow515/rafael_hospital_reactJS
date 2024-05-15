import React from "react";
import { featureservice1, featureservice2, featureservice3 } from "../image";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import { Link } from "react-router-dom";

const ServiceSection = () => {
  const settings = {
    items: 3,
    loop: true,
    margin: 15,
    dots: true,
    nav: true,
    navContainer: ".slide-nav-1",
    navText: [
      '<i class="fas fa-chevron-left custom-arrow"></i>',
      '<i class="fas fa-chevron-right custom-arrow"></i>',
    ],

    autoplay: false,
    infinite: "true",

    slidestoscroll: 1,
    rtl: "true",
    rows: 1,
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
        items: 5,
      },
    },
  };
  return (
    <>
      <div className="features-section-sixteen">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-sixteen text-center">
                <p>OUr services</p>
                <h2>Featured Services</h2>
              </div>
            </div>
          </div>
          <div className="features-slider-sixteen owl-theme">
            <OwlCarousel {...settings}>
              <div className="feature-sixteen-main">
                <div className="feature-six-img">
                  <img src={featureservice1} alt="" className="img-fluid" />
                  <div className="feature-content-six">
                    <div className="feature-content-one">
                      <h5>Mommy Makeover</h5>
                      <span>
                        <i className="fa-solid fa-angle-up" />
                      </span>
                    </div>
                    <div className="feature-content-two">
                      <p>
                        Facial procedures are popular because of their ability
                        to give patients a youthful appearance, reduce the signs
                        of aging and by improving existing features for more
                        aesthetically pleasing results. These methods are in two
                        separate categories and are commonly known as facial
                        rejuvenation and facial contouring. Facial rejuvenation
                        consists of facelift, eyelid lift, neck lift and brow
                        lift.
                      </p>
                      <span>
                        <i className="fa-solid fa-angle-down" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-sixteen-main">
                <div className="feature-six-img">
                  <img src={featureservice3} alt="" className="img-fluid" />
                  <div className="feature-content-six">
                    <div className="feature-content-one">
                      <h5>Face Makeover</h5>
                      <span>
                        <i className="fa-solid fa-angle-up" />
                      </span>
                    </div>
                    <div className="feature-content-two">
                      <p>
                        Facial procedures are popular because of their ability
                        to give patients a youthful appearance, reduce the signs
                        of aging and by improving existing features for more
                        aesthetically pleasing results. These methods are in two
                        separate categories and are commonly known as facial
                        rejuvenation and facial contouring. Facial rejuvenation
                        consists of facelift, eyelid lift, neck lift and brow
                        lift.
                      </p>
                      <span>
                        <i className="fa-solid fa-angle-down" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-sixteen-main">
                <div className="feature-six-img">
                  <img src={featureservice2} alt="" className="img-fluid" />
                  <div className="feature-content-six">
                    <div className="feature-content-one">
                      <h5>BodyTite</h5>
                      <span>
                        <i className="fa-solid fa-angle-up" />
                      </span>
                    </div>
                    <div className="feature-content-two">
                      <p>
                        Facial procedures are popular because of their ability
                        to give patients a youthful appearance, reduce the signs
                        of aging and by improving existing features for more
                        aesthetically pleasing results. These methods are in two
                        separate categories and are commonly known as facial
                        rejuvenation and facial contouring. Facial rejuvenation
                        consists of facelift, eyelid lift, neck lift and brow
                        lift.
                      </p>
                      <span>
                        <i className="fa-solid fa-angle-down" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-sixteen-main">
                <div className="feature-six-img">
                  <img src={featureservice3} alt="" className="img-fluid" />
                  <div className="feature-content-six">
                    <div className="feature-content-one">
                      <h5>BodyTite</h5>
                      <span>
                        <i className="fa-solid fa-angle-up" />
                      </span>
                    </div>
                    <div className="feature-content-two">
                      <p>
                        Facial procedures are popular because of their ability
                        to give patients a youthful appearance, reduce the signs
                        of aging and by improving existing features for more
                        aesthetically pleasing results. These methods are in two
                        separate categories and are commonly known as facial
                        rejuvenation and facial contouring. Facial rejuvenation
                        consists of facelift, eyelid lift, neck lift and brow
                        lift.
                      </p>
                      <span>
                        <i className="fa-solid fa-angle-down" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-sixteen-main">
                <div className="feature-six-img">
                  <img src={featureservice1} alt="" className="img-fluid" />
                  <div className="feature-content-six">
                    <div className="feature-content-one">
                      <h5>BodyTite</h5>
                      <span>
                        <i className="fa-solid fa-angle-up" />
                      </span>
                    </div>
                    <div className="feature-content-two">
                      <p>
                        Facial procedures are popular because of their ability
                        to give patients a youthful appearance, reduce the signs
                        of aging and by improving existing features for more
                        aesthetically pleasing results. These methods are in two
                        separate categories and are commonly known as facial
                        rejuvenation and facial contouring. Facial rejuvenation
                        consists of facelift, eyelid lift, neck lift and brow
                        lift.
                      </p>
                      <span>
                        <i className="fa-solid fa-angle-down" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
