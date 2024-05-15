import React from "react";
import { IMG01, IMG02, IMG03, IMG04, IMG05 } from "./img.jsx";
//slider
import Slider from "react-slick";
// import AOS from "aos";
import "aos/dist/aos.css";

const HomeClinic = () => {
  //Aos

  //    useEffect(() => {
  //     AOS.init({duration: 1200,
  //       once: true});

  //   }, []);

  const settings = {
    dots: true,
    autoplay: false,
    infinite: true,
    variableWidth: true,
    prevArrow: false,
    nextArrow: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          variableWidth: false, // Disable variable width for small screens
          centerPadding: '2px',
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  
  return (
    <>
      <section className="section section-specialities">
        <div className="container-fluid">
          <div className="section-header text-center">
            <h2>Clinic and Specialities</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="specialities-slider slider">
                <Slider {...settings}>
                  <div>
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src={IMG01}
                          className="img-fluid"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p>Urology</p>
                    </div>
                  </div>
                  <div>
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src={IMG02}
                          className="img-fluid"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p>Neurology</p>
                    </div>
                  </div>
                  <div>
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src={IMG03}
                          className="img-fluid"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p>Orthopedic</p>
                    </div>
                  </div>
                  <div>
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src={IMG04}
                          className="img-fluid"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p>Cardiologist</p>
                    </div>
                  </div>
                  <div>
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src={IMG05}
                          className="img-fluid"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p>Dentist</p>
                    </div>
                  </div>
                  <div>
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src={IMG01}
                          className="img-fluid"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p>Urology</p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeClinic;
