import React from "react";
import { Link } from "react-router-dom";
import {
  banrightimg1,
  banrightimg2,
  bansixteenimg1,
  bansixteenimg2,
} from "../image";

const HomeBanner = () => {
  return (
    <section className="banner-section-sixteen">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="banner-content banner-content-sixteen aos"
              data-aos="fade-up"
            >
              <span>Safe and certified treatments</span>
              <h1>Perfect Face Surgery For Everyone</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
              <div className="banner-btns-sixteen">
                <Link to="/patient/booking1" className="btn btn-primary me-2">
                  Make an Appointment
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-image-sixteen">
              <div className="banner-inner-img-sixteen">
                <img src={banrightimg1} alt="" className="img-fluid" />
                <img src={banrightimg2} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ban-sixteen-imgone">
        <img src={bansixteenimg1} alt="" />
      </div>
      <div className="ban-sixteen-imgtwo">
        <img src={bansixteenimg2} alt="" />
      </div>
    </section>
  );
};

export default HomeBanner;
