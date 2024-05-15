import React from "react";
import {
  Chart_arrow_01,
  Chart_arrow_02,
  Flow_chart_icon_01,
  Flow_chart_icon_02,
  Flow_chart_icon_03,
  Flow_chart_icon_04,
} from "../../imagepath";

export const Howitwork = () => {
  return (
    <div>
      <div className="how-it-work-fourteen">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-4">
              <div
                className="section-work-head"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <span>Book best caregiver</span>
                <h2>How it works &amp; Booking</h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8">
              <ul className="work-flow-chart">
                <li data-aos="fade-up" data-aos-delay={500}>
                  <img src={Chart_arrow_01} alt="Img" />
                  <div className="flow-chart-list">
                    <span className="chart-icon">
                      <img src={Flow_chart_icon_01} alt="Img" />
                    </span>
                    <h6>Location</h6>
                    <span className="chart-count">01</span>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={600}>
                  <img src={Chart_arrow_01} alt="Img" />
                  <div className="flow-chart-list bg-yelllow">
                    <span className="chart-icon">
                      <img src={Flow_chart_icon_02} alt="Img" />
                    </span>
                    <h6>Booking</h6>
                    <span className="chart-count">02</span>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={700}>
                  <img src={Chart_arrow_01} alt="Img" />
                  <div className="flow-chart-list">
                    <span className="chart-icon">
                      <img src={Flow_chart_icon_03} alt="Img" />
                    </span>
                    <h6>Caregiver</h6>
                    <span className="chart-count">03</span>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={800}>
                  <img src={Chart_arrow_02} alt="Img" />
                  <div className="flow-chart-list bg-yelllow">
                    <span className="chart-icon">
                      <img src={Flow_chart_icon_04} alt="Img" />
                    </span>
                    <h6>Takecare</h6>
                    <span className="chart-count">04</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
