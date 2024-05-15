import React from "react";
import { experts2, experts3 } from "../image";
// import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ExpertsTeam = () => {
  // const settings = {
  //   margin: 0,
  // center: true,
  // loop: true,
  // nav: false,
  // dots: false,
  // responsive: {
  // 	0: {
  // 		items: 1
  // 	},
  // 	768: {
  // 		items: 1,
  // 		margin: 15,
  // 	},
  // 	1000: {
  // 		items: 3,
  // 	}
  // }
  //   };
  const settings = {
    margin: 0,
    center: true,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
        margin: 15,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section className="experts-section-sixteen">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header-sixteen section-header-sixteentwo text-center">
              <p>Our Team</p>
              <h2>Our experts team</h2>
            </div>
          </div>
        </div>
        <div className="slider slider-sixteen aos" data-aos="zoom-in-up">
          <div
            className=" owl-carousel custome_slides owl-loaded owl-drag"
            id="slide-experts">
            <OwlCarousel id="customer-testimonoals" {...settings}>
              <div className="test_imgs">
                <div className="main-reviewimages">
                  <img src={experts2} alt="" className="img-fluid" />
                </div>
                <div className="testimonal-contents">
                  <h5>Leslie Alexander</h5>
                  <span>Aesthetic Surgery</span>
                </div>
              </div>
              <div className="test_imgs">
                <div className="main-reviewimages">
                  <img src={experts3} alt="" className="img-fluid" />
                </div>
                <div className="testimonal-contents">
                  <h5>Leslie Alexander</h5>
                  <span>Aesthetic Surgery</span>
                </div>
              </div>
              <div className="test_imgs">
                <div className="main-reviewimages">
                  <img src={experts2} alt="" className="img-fluid" />
                </div>
                <div className="testimonal-contents">
                  <h5>Leslie Alexander</h5>
                  <span>Aesthetic Surgery</span>
                </div>
              </div>
              <div className="test_imgs">
                <div className="main-reviewimages">
                  <img src={experts2} alt="" className="img-fluid" />
                </div>
                <div className="testimonal-contents">
                  <h5>Leslie Alexander</h5>
                  <span>Aesthetic Surgery</span>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsTeam;
