import React from "react";
import { Link } from "react-router-dom";

const PricingPlan = () => {
  return (
    <section className="pricing-plane-sec">
      <div className="container">
        <div className="section-head-fourteen">
          <h2>
            Pricing <span> Plan </span>
          </h2>
          <p>No Extra charges, No Surprise Fees</p>
        </div>
        <div className="price-sec-main">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <div className="price-plane-card">
                <div className="price-head">
                  <h5>For individuals</h5>
                  <h4>Free</h4>
                  <p>
                    Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                    adipiscing elit.
                  </p>
                  <h3>
                    $99 <span> /monthly</span>
                  </h3>
                </div>
                <div className="plane-includes">
                  <h5>What’s included</h5>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Emergency support
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      In-person care manager visits
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Healthcare support
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Home Care (as needed)
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-xmark" />
                      Safety &amp; Security
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-xmark" />
                      Engagement assistance
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-xmark" />
                      Physiotherapy/ counselor{" "}
                    </li>
                  </ul>
                </div>
                <div className="plane-btn">
                  <Link to="/pages/login-email" className="btn btn-primary w-100">
                    Choose Plans
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={700}
            >
              <div className="price-plane-card active">
                <div className="price-head">
                  <h5>For 2 Persons</h5>
                  <h4>Basic</h4>
                  <p>
                    Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                    adipiscing elit.
                  </p>
                  <h3>
                    $120 <span> /monthly</span>
                  </h3>
                </div>
                <div className="plane-includes">
                  <h5>What’s included</h5>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Emergency support
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      In-person care manager visits
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Healthcare support
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Home Care (as needed)
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-xmark" />
                      Safety &amp; Security
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-xmark" />
                      Engagement assistance
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-xmark" />
                      Physiotherapy/ counselor{" "}
                    </li>
                  </ul>
                </div>
                <div className="plane-btn">
                  <Link to="/pages/login-email" className="btn btn-primary w-100">
                    Choose Plans
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={900}
            >
              <div className="price-plane-card">
                <div className="price-head">
                  <h5>For individuals</h5>
                  <h4>Premium</h4>
                  <p>
                    Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                    adipiscing elit.
                  </p>
                  <h3>
                    $199 <span> /monthly</span>
                  </h3>
                </div>
                <div className="plane-includes">
                  <h5>What’s included</h5>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Emergency support
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      In-person care manager visits
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Healthcare support
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Home Care (as needed)
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-xmark" />
                      Safety &amp; Security
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-xmark" />
                      Engagement assistance
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-xmark" />
                      Physiotherapy/ counselor{" "}
                    </li>
                  </ul>
                </div>
                <div className="plane-btn">
                  <Link to="/pages/login-email" className="btn btn-primary w-100">
                    Choose Plans
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
