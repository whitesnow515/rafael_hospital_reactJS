import React from "react";
import { facts1, facts2, facts3, facts4, facts5 } from "../image";
import { Link } from "react-router-dom";

const FactService = () => {
  return (
    <div className="facts-section-sixteen">
      <div className="container">
        <div className="facts-section-all">
          <div className="facts-main-sixteen">
            <span>OUr services</span>
            <h2>Facts you need to know ahead</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <Link to="/patient/booking1">
              Read More
              <i className="fa-solid fa-chevron-right ms-2" />
            </Link>
          </div>
          <div className="facts-content-all">
            <ul>
              <li>
                <div className="facts-sixteen-img">
                  <img src={facts5} alt="" />
                  <div className="facts-content-sixteen">
                    <div className="facts-content-one">
                      <h5>
                        Consequences
                        <i className="fa-solid fa-angle-right ms-2" />
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="facts-content-two facts-content-two-solid">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever.
                  </p>
                </div>
              </li>
              <li>
                <div className="facts-sixteen-img">
                  <img src={facts4} alt="" />
                  <div className="facts-content-sixteen">
                    <div className="facts-content-one">
                      <h5>
                        Privacy policy
                        <i className="fa-solid fa-angle-right ms-2" />
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="facts-content-two facts-content-two-solid">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever.
                  </p>
                </div>
              </li>
              <li>
                <div className="facts-sixteen-img">
                  <img src={facts3} alt="" />
                  <div className="facts-content-sixteen">
                    <div className="facts-content-one">
                      <h5>
                        Surgery preparation
                        <i className="fa-solid fa-angle-right ms-2" />
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="facts-content-two facts-content-two-solid">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever.
                  </p>
                </div>
              </li>
              <li>
                <div className="facts-sixteen-img">
                  <img src={facts2} alt="" />
                  <div className="facts-content-sixteen">
                    <div className="facts-content-one">
                      <h5>
                        Age limit
                        <i className="fa-solid fa-angle-right ms-2" />
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="facts-content-two facts-content-two-solid">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever.
                  </p>
                </div>
              </li>
              <li>
                <div className="facts-sixteen-img">
                  <img src={facts1} alt="" />
                  <div className="facts-content-sixteen">
                    <div className="facts-content-one">
                      <h5>
                        After Surgery
                        <i className="fa-solid fa-angle-right ms-2" />
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="facts-content-two facts-content-two-solid">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever.
                  </p>
                </div>
              </li>
              <li>
                <div className="facts-sixteen-img">
                  <img src={facts5} alt="" />
                  <div className="facts-content-sixteen">
                    <div className="facts-content-one">
                      <h5>
                        Consequences
                        <i className="fa-solid fa-angle-right ms-2" />
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="facts-content-two facts-content-two-solid">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactService;
