/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  atom_bond2,
  clientsays,
  cloud_2,
  rainbow_2,
  rainbow_3,
  rainbow_4,
  re_image_7,
  re_image_8,
} from "../../imagepath";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Clientsays = () => {
  const settings = {
    items: 1,
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navContainer: ".slide-nav-2",
    navText: [
      '<i class="fas fa-chevron-left custom-arrow"></i>',
      '<i class="fas fa-chevron-right custom-arrow"></i>',
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
    <div>
      <section className="client-us-section-thirteen common-padding">
        <div
          className="client-us-section-thirteenone aos"
          data-aos="fade-right">
          <img src={cloud_2} alt="#" />
          <img src={rainbow_2} alt="#" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 aos" data-aos="fade-up">
              <div className="section-header-thirteen">
                <div className="section-inner-thirteen">
                  <img src={atom_bond2} alt="#" />
                </div>
                <h2>What Our Client Says?</h2>
              </div>
            </div>
          </div>
          <div className="client-says-thirteen owl-theme">
            <OwlCarousel {...settings}>
              <div className="client-says-all">
                <div className="clients-says-content">
                  <p>
                    "I would like to thank everyone at Doccure for the fantastic
                    way you looked after me. I could not fault anyone during the
                    time I spent with you - from the point I arrived in
                    reception, to the catering team and every member of staff
                    throughout the changes of shift during my stay."
                  </p>
                  <h4>Courtney Henry</h4>
                  <p className="location-thirteen">
                    <i className="fa-solid fa-location-dot" /> New York, USA
                  </p>
                  <div className="client-says-imagesone">
                    <img src={rainbow_3} alt="#" />
                    <img src={rainbow_4} alt="#" />
                  </div>
                </div>
                <div className="client-says-images">
                  <img src={clientsays} alt="img-fluid" />
                </div>
              </div>
              <div className="client-says-all">
                <div className="clients-says-content">
                  <p>
                    "I would like to thank everyone at Doccure for the fantastic
                    way you looked after me. I could not fault anyone during the
                    time I spent with you - from the point I arrived in
                    reception, to the catering team and every member of staff
                    throughout the changes of shift during my stay."
                  </p>
                  <h4>Courtney Henry</h4>
                  <p className="location-thirteen">
                    <i className="fa-solid fa-location-dot" /> New York, USA
                  </p>
                  <div className="client-says-imagesone">
                    <img src={rainbow_3} alt="#" />
                    <img src={rainbow_4} alt="#" />
                  </div>
                </div>
                <div className="client-says-images">
                  <img src={re_image_7} alt="img-fluid" />
                </div>
              </div>
              <div className="client-says-all">
                <div className="clients-says-content">
                  <p>
                    "I would like to thank everyone at Doccure for the fantastic
                    way you looked after me. I could not fault anyone during the
                    time I spent with you - from the point I arrived in
                    reception, to the catering team and every member of staff
                    throughout the changes of shift during my stay."
                  </p>
                  <h4>Courtney Henry</h4>
                  <p className="location-thirteen">
                    <i className="fa-solid fa-location-dot" /> New York, USA
                  </p>
                  <div className="client-says-imagesone">
                    <img src={rainbow_3} alt="#" />
                    <img src={rainbow_4} alt="#" />
                  </div>
                </div>
                <div className="client-says-images">
                  <img src={re_image_8} alt="img-fluid" />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clientsays;
