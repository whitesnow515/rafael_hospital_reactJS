import React, { useEffect } from "react";
import {
  partners_1,
  partners_2,
  partners_3,
  partners_4,
  partners_5,
  partners_6,
} from "../../imagepath";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Parentssection() {
  //Aos

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  const specialitysettings = {
    items: 6,
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navContainer: ".slide-nav-3",

    autoplay: true,
    infinite: "true",

    slidestoscroll: 1,
    rtl: "true",
    rows: 6,
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
        items: 4,
      },
      1000: {
        items: 6,
      },
      1300: {
        items: 7,
      },
    },
  };
  return (
    <>
      <section className="partners-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="section-header-one text-center aos"
                data-aos="fade-up"
              >
                <h2 className="section-title">Our Partners</h2>
              </div>
            </div>
          </div>
          <div className="partners-info aos" data-aos="fade-up">
            <ul className="owl-carousel partners-slider d-flex">
              <OwlCarousel {...specialitysettings}>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_1}
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_2}
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_3}
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_4}
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_5}
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_6}
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_1}
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_2}
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_3}
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_4}
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_5}
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_6}
                      alt="partners"
                    />
                  </Link>
                </li>
              </OwlCarousel>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Parentssection;
