import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Owlcarousel from "react-owl-carousel";
import { BsArrowRightCircle } from "react-icons/bs";
// import {
//   appointment_ryt_1,
//   doctor_03,
//   doctor_07,
//   doctor_09,
//   doctor_11,
//   experience_1,
//   experience_2,
//   experience_3,
//   experience_4,
//   experience_5,
//   experience_6,
//   feedback_fifteen,
//   fifteen_bg_icon1,
//   fifteen_bg_icon2,
//   fifteen_bg_icon3,
//   logo_03,
//   patients_img_fifteen,
//   pharmacy_1,
//   pharmacy_2,
//   pharmacy_3,
//   we_are_icon1,
//   we_are_icon2,
//   we_are_icon3,
// } from "../../imagepath";
const Frequentsection = () => {
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
    dots: true,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
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
      {/* Frequent section */}
      <section className="frequently-section-fifteen">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-fifteen text-center">
                <h2>
                  Frequently <span>Asked Questions</span>
                </h2>
                <p>What our clients say about us</p>
              </div>
            </div>
          </div>
          <div className="frequent-slider-fifteen owl-theme">
            <Owlcarousel
              className="frequent-slider-fifteen owl-theme"
              {...options}
            >
              <div className="items-fift">
                <Link to="#">What is an otolaryngologist?</Link>
                <p>
                  An otolaryngologist is a doctor who specializes in the
                  diagnosis and treatment of ear, nose and throat diseases as
                  well as related structures of the head and neck.
                  Otolaryngologists are also referred to as ENT doctors or
                  physicians. For more information.
                </p>
                <Link to="/pages/faq" className="line-arrow">
                  Read More
                  <BsArrowRightCircle className="feather-arrow-right-circle ms-2" />
                </Link>
              </div>
              <div className="items-fift">
                <Link to="/pages/faq">
                  What is the treatment ear infection?
                </Link>
                <p>
                  The majority of ear infections will run their course in about
                  a week. Pain can be managed with over-the-counter medications,
                  eardrops, and warm compresses. If a bacterial infection is the
                  cause, antibiotics are prescribed. Children who experience.
                </p>
                <Link to="/pages/faq" className="line-arrow">
                  Read More
                  <BsArrowRightCircle className="feather-arrow-right-circle ms-2" />
                </Link>
              </div>
              <div className="items-fift">
                <Link to="/pages/faq">What is obstructive sleep apnea?</Link>
                <p>
                  Obstructive sleep apnea (OSA) is a condition in which an
                  individual’s breathing stops periodically during sleep. These
                  episodes can last ten seconds or longer and may occur hundreds
                  of times each night, preventing restorative sleep.
                </p>
                <Link to="/pages/faq" className="line-arrow">
                  Read More
                  <BsArrowRightCircle className="feather-arrow-right-circle ms-2" />
                </Link>
              </div>
              <div className="items-fift">
                <Link to="#">What is an otolaryngologist?</Link>
                <p>
                  An otolaryngologist is a doctor who specializes in the
                  diagnosis and treatment of ear, nose and throat diseases as
                  well as related structures of the head and neck.
                  Otolaryngologists are also referred to as ENT doctors or
                  physicians. For more information
                </p>
                <Link to="/pages/faq" className="line-arrow">
                  Read More
                  <BsArrowRightCircle className="feather-arrow-right-circle ms-2" />
                </Link>
              </div>
              <div className="items-fift">
                <Link to="#">What is an otolaryngologist?</Link>
                <p>
                  An otolaryngologist is a doctor who specializes in the
                  diagnosis and treatment of ear, nose and throat diseases as
                  well as related structures of the head and neck.
                  Otolaryngologists are also referred to as ENT doctors or
                  physicians. For more information
                </p>
                <Link to="/pages/faq" className="line-arrow">
                  Read More
                  <BsArrowRightCircle className="feather-arrow-right-circle ms-2" />
                </Link>
              </div>
              <div className="items-fift">
                <Link to="#">What is the treatment ear infection?</Link>
                <p>
                  An otolaryngologist is a doctor who specializes in the
                  diagnosis and treatment of ear, nose and throat diseases as
                  well as related structures of the head and neck.
                  Otolaryngologists are also referred to as ENT doctors or
                  physicians. For more information
                </p>
                <Link to="/pages/faq" className="line-arrow">
                  Read More
                  <BsArrowRightCircle className="feather-arrow-right-circle ms-2" />
                </Link>
              </div>
              <div className="items-fift">
                <Link to="#">What is the treatment ear infection?</Link>
                <p>
                  An otolaryngologist is a doctor who specializes in the
                  diagnosis and treatment of ear, nose and throat diseases as
                  well as related structures of the head and neck.
                  Otolaryngologists are also referred to as ENT doctors or
                  physicians. For more information
                </p>
                <Link to="/pages/faq" className="line-arrow">
                  Read More
                  <BsArrowRightCircle className="feather-arrow-right-circle ms-2" />
                </Link>
              </div>
              <div className="items-fift">
                <Link to="#">What is the treatment ear infection?</Link>
                <p>
                  An otolaryngologist is a doctor who specializes in the
                  diagnosis and treatment of ear, nose and throat diseases as
                  well as related structures of the head and neck.
                  Otolaryngologists are also referred to as ENT doctors or
                  physicians. For more information
                </p>
                <Link to="/pages/faq" className="line-arrow">
                  Read More
                  <BsArrowRightCircle className="feather-arrow-right-circle ms-2" />
                </Link>
              </div>
            </Owlcarousel>
          </div>
        </div>
      </section>
      {/* /Frequent section */}
    </>
  );
};
export default Frequentsection;
