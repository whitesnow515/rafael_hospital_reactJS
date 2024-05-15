import React, { useEffect } from "react";
import {
  doctor_15,
  doctor_16,
  doctor_17,
  serv_img_icon_1,
  serv_img_icon_2,
} from "../../imagepath";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactOwlCarousel from "react-owl-carousel";
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
function TeamSectionHome9() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  const doctersettings = {
    items: 2,
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navContainer: ".slide-nav-14",
    navText: [
      '<i class="fa-solid fa-caret-left "></i>',
      '<i class="fa-solid fa-caret-right"></i>',
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

      768: {
        items: 2,
      },

      1300: {
        items: 3,
      },
    },
  };
  return (
    <>
      <div className="team-section-fourteen">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-header-fourteen">
                <div className="service-inner-fourteen">
                  <div className="service-inner-fourteen-one"></div>
                  <div className="service-inner-fourteen-two">
                    <h3>Our Team</h3>
                  </div>
                  <div className="service-inner-fourteen-three"></div>
                </div>
                <h2>Our Qualified Doctors</h2>
              </div>
            </div>
            <div className="col-lg-6 aos" data-aos="fade-up">
              <div className="owl-nav slide-nav-14 text-end nav-control" />
            </div>
          </div>
          <div className="owl-theme team-fourteen-slider">
            <ReactOwlCarousel {...doctersettings}>
              <div className="articles-grid articles-grid-fourteen w-100">
                <div className="articles-info">
                  <div className="articles-left">
                    <Link to="/patient/doctor-profile">
                      <div className="articles-img articles-img-fourteen">
                        <img
                          src={doctor_15}
                          alt="Doctor"
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="articles-right">
                    <div className="articles-content articles-content-fourteen">
                      <Link to="/patient/doctor-profile">Dr. Marie Wells</Link>
                      <ul className="articles-list nav">
                        <li className="Qualified-doctors-fourteen">
                          Pregnancy Specialist
                        </li>
                        <li className="Qualified-doctors-fourteentwo">
                          +2000 Patients
                        </li>
                      </ul>
                      <div className="rating rating-fourteen">
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star" />
                        &nbsp;
                        <span className="d-inline-block average-rating ms-1">
                          &nbsp;(35)
                        </span>
                      </div>
                      <p className="text-muted">
                        <i className="feather-map-pin" />
                        <span>0.9</span> min - Newyork, USA
                      </p>
                      <ul className="articles-list nav mb-0">
                        <li className="Qualified-doctors-fourteenthree">
                          $ 200
                        </li>
                        <li className="Qualified-doctors-fourteenfour">
                          <Link to="/patient/doctor-profile">Consult Now</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="articles-grid articles-grid-fourteen w-100">
                <div className="articles-info">
                  <div className="articles-left">
                    <Link to="/patient/doctor-profile">
                      <div className="articles-img articles-img-fourteen">
                        <img
                          src={doctor_16}
                          alt="Doctor"
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="articles-right">
                    <div className="articles-content articles-content-fourteen">
                      <Link to="/patient/doctor-profile">
                        Dr. Justin Parker
                      </Link>
                      <ul className="articles-list nav">
                        <li className="Qualified-doctors-fourteen">Surgeon</li>
                        <li className="Qualified-doctors-fourteentwo">
                          +4000 Patients
                        </li>
                      </ul>
                      <div className="rating rating-fourteen">
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star" />
                        &nbsp;
                        <span className="d-inline-block average-rating ms-1">
                          (125)
                        </span>
                      </div>
                      <p className="text-muted">
                        <i className="feather-map-pin" />
                        <span>1.0</span> min - Newyork, USA
                      </p>
                      <ul className="articles-list nav mb-0">
                        <li className="Qualified-doctors-fourteenthree">
                          $ 600
                        </li>
                        <li className="Qualified-doctors-fourteenfour">
                          <Link to="/patient/doctor-profile">Consult Now</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="articles-grid articles-grid-fourteen w-100">
                <div className="articles-info">
                  <div className="articles-left">
                    <Link to="/patient/doctor-profile">
                      <div className="articles-img articles-img-fourteen">
                        <img
                          src={doctor_17}
                          alt="Doctor"
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="articles-right">
                    <div className="articles-content articles-content-fourteen">
                      <Link to="/patient/doctor-profile">Dr. Marie Wells</Link>
                      <ul className="articles-list nav">
                        <li className="Qualified-doctors-fourteen">
                          Pregnancy Specialist
                        </li>
                        <li className="Qualified-doctors-fourteentwo">
                          +2000 Patients
                        </li>
                      </ul>
                      <div className="rating rating-fourteen">
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star" />
                        &nbsp;
                        <span className="d-inline-block average-rating ms-1">
                          (35)
                        </span>
                      </div>
                      <p className="text-muted">
                        <i className="feather-map-pin" />
                        <span>0.9</span> min - Newyork, USA
                      </p>
                      <ul className="articles-list nav mb-0">
                        <li className="Qualified-doctors-fourteenthree">
                          $ 200
                        </li>
                        <li className="Qualified-doctors-fourteenfour">
                          <Link to="/patient/doctor-profile">Consult Now</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ReactOwlCarousel>
          </div>
        </div>
        <div className="banner-imgfourteenseven">
          <img src={serv_img_icon_1} className="img-fluid" alt="" />
        </div>
        <div className="banner-imgfourteeneight">
          <img src={serv_img_icon_2} className="img-fluid" alt="" />
        </div>
        <div className="banner-imgfourteennine">
          <img src={serv_img_icon_2} className="img-fluid" alt="" />
        </div>
      </div>
    </>
  );
}

export default TeamSectionHome9;
