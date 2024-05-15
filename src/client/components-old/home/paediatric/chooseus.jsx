/* eslint-disable no-unused-vars */
import React from "react";
import { atom_bond, atom_bond2, doctor_bg, rainbow_2 } from "../../imagepath";
import {
  FiUploadCloud,
  FiUnderline,
  FiType,
  FiMessageSquare,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Chooseus = () => {
  return (
    <div>
      <section className="choose-us-section-thirteen common-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 aos" data-aos="fade-up">
              <div className="section-header-thirteen">
                <div className="section-inner-thirteen">
                  <img src={atom_bond2} alt="#" />
                </div>
                <h2>Why Choose Us?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="choose-us-inner-all">
                <div className="choose-us-thirteen-img">
                  <img src={doctor_bg} alt="#" className="img-fluid" />
                  <div className="choose-us-thirteen-imgone">
                    <img src={atom_bond} alt="#" />
                    <img src={rainbow_2} alt="#" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  <div className="choose-us-content-thirteen">
                    <div className="chooseus-contents">
                      <FiUploadCloud />
                    </div>
                    <div className="chooseus-content-ryt">
                      <h5>latest diagnostics and technology</h5>
                      <p>
                        Porttitor tempor consequat tristique faucibus netus
                        massa. Auctor nibh faucibus felis mauris vitae. Morbi{" "}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="choose-us-content-thirteen">
                    <div className="chooseus-contents">
                      <FiUnderline />
                    </div>
                    <div className="chooseus-content-ryt">
                      <h5>immunisation clinic</h5>
                      <p>
                        Massa donec vivamus ultrices nascetur velit egestas.
                        Augue facilisis sed at mattis ac auctor a feugiat sed.{" "}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="choose-us-content-thirteen">
                    <div className="chooseus-contents">
                      <FiType />
                    </div>
                    <div className="chooseus-content-ryt">
                      <h5>full breadth of paediatric care</h5>
                      <p>
                        Erat sed ut porta ultrices. Tincidunt vulputate justo,
                        interdum imperdiet viverra in non, eu. In tortor odio in
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="choose-us-content-thirteen">
                    <div className="chooseus-contents">
                      <FiMessageSquare />
                    </div>
                    <div className="chooseus-content-ryt">
                      <h5>paediatric theatres on every ward</h5>
                      <p>
                        Tincidunt laoreet ultricies vulputate congue sagittis
                        dignissim orci, sapien ridiculus. Magna tincidunt arcu
                        a.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chooseus;
