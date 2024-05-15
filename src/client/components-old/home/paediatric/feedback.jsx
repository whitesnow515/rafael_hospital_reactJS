import React from "react";
import {
  app_store_1,
  feedback_inner,
  google_store_1,
  pulse_1,
  pulse_2,
  pulse_3,
} from "../../imagepath";
import { Link } from "react-router-dom";
const Feedback = () => {
  return (
    <div>
      <section className="feedback-section-thirteen common-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="feedback-main-thirteen">
                <div className="feedback-all-img">
                  <img src={feedback_inner} alt="image" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feedback-main-content">
                <h2>
                  Download <br />
                  The Doccure App Today!
                </h2>
                <p>
                  Rasakan kemudahan pembayaran melalui aplikasi SmartInPays.
                  Jalan-jalan, membayar tagihan, donasi di ujung jari Anda.{" "}
                </p>
                <div className="feedback-inner-img">
                  <div className="feedback-inner-imgone">
                    <Link to="#">
                      <img src={app_store_1} alt="" />
                    </Link>
                  </div>
                  <div className="feedback-inner-imgtwo">
                    <Link to="#">
                      <img src={google_store_1} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-bg-icons">
          <img src={pulse_1} alt="" />
          <img src={pulse_2} alt="" />
          <img src={pulse_3} alt="" />
          <img src={pulse_3} alt="" />
          <img src={pulse_1} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Feedback;
