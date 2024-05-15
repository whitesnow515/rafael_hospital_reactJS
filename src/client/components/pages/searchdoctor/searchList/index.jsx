import React from "react";
import { Link } from "react-router-dom";
// import Lightbox from 'react-image-lightbox';
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  IMG01,
  IMG02,
  IMG03,
  IMG04,
  IMG05,
  IMG_sp_02,
  IMG_sp_03,
  IMG_sp_04,
  IMG_sp_05,
} from "./img";

import MyComponent from "./mycomponent";

const SearchList = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="doctor-widget">
            <div className="doc-info-left">
              <div className="doctor-img">
                <Link to="/patient/doctor-profile">
                  <img src={IMG01} className="img-fluid" alt="User" />
                </Link>
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">
                  <Link to="/patient/doctor-profile">Dr. Ruby Perrin</Link>
                </h4>
                <p className="doc-speciality">
                  MDS - Periodontology and Oral Implantology, BDS
                </p>
                <h5 className="doc-department">
                  <img src={IMG_sp_02} className="img-fluid" alt="Speciality" />
                  Dentist
                </h5>
                <div className="rating">
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star"></i>
                  <span className="d-inline-block average-rating ms-1">
                    (17)
                  </span>
                </div>
                <div className="clinic-details">
                  <p className="doc-location">
                    <i className="fas fa-map-marker-alt"></i> Newyork, USA
                  </p>
                  <div>
                    <MyComponent />
                  </div>
                </div>
                <div className="clinic-services">
                  <span>Dental Fillings</span>
                  <span> Whitneing</span>
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                    <i className="far fa-thumbs-up"></i> 98%
                  </li>
                  <li>
                    <i className="far fa-comment"></i> 17 Feedback
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> Florida, USA
                  </li>
                  <li>
                    <i className="far fa-money-bill-alt"></i> $300 - $1000{" "}
                    <OverlayTrigger
                      overlay={
                        <Tooltip id="tooltip-disabled">Lorem Ipsum</Tooltip>
                      }
                    >
                      <span className="d-inline-block">
                        <i className="fas fa-info-circle"></i>
                      </span>
                    </OverlayTrigger>
                  </li>
                </ul>
              </div>
              <div className="clinic-booking">
                <Link to="/patient/doctor-profile" className="view-pro-btn">
                  View Profile
                </Link>
                <Link to="/patient/booking1" className="apt-btn">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="doctor-widget">
            <div className="doc-info-left">
              <div className="doctor-img">
                <Link to="/patient/doctor-profile">
                  <img src={IMG02} className="img-fluid" alt="User" />
                </Link>
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">
                  <Link to="/patient/doctor-profile">Dr. Darren Elder</Link>
                </h4>
                <p className="doc-speciality">
                  BDS, MDS - Oral & Maxillofacial Surgery
                </p>
                <h5 className="doc-department">
                  <img src={IMG_sp_03} className="img-fluid" alt="Speciality" />
                  Dentist
                </h5>
                <div className="rating">
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star"></i>
                  <span className="d-inline-block average-rating ms-1">
                    (35)
                  </span>
                </div>
                <div className="clinic-details">
                  <p className="doc-location">
                    <i className="fas fa-map-marker-alt"></i> Newyork, USA
                  </p>
                  <div>
                    <MyComponent />
                  </div>
                </div>
                <div className="clinic-services">
                  <span>Dental Fillings</span>
                  <span> Whitneing</span>
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                    <i className="far fa-thumbs-up"></i> 100%
                  </li>
                  <li>
                    <i className="far fa-comment"></i> 35 Feedback
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> Newyork, USA
                  </li>
                  <li>
                    <i className="far fa-money-bill-alt"></i> $50 - $300{" "}
                    <OverlayTrigger
                      overlay={
                        <Tooltip id="tooltip-disabled">Lorem Ipsum</Tooltip>
                      }
                    >
                      <span className="d-inline-block">
                        <i className="fas fa-info-circle"></i>
                      </span>
                    </OverlayTrigger>
                  </li>
                </ul>
              </div>
              <div className="clinic-booking">
                <Link to="/patient/doctor-profile" className="view-pro-btn">
                  View Profile
                </Link>
                <Link to="/patient/booking1" className="apt-btn">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="doctor-widget">
            <div className="doc-info-left">
              <div className="doctor-img">
                <Link to="/patient/doctor-profile">
                  <img src={IMG03} className="img-fluid" alt="User" />
                </Link>
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">
                  <Link to="/patient/doctor-profile">Dr. Deborah Angel</Link>
                </h4>
                <p className="doc-speciality">
                  MBBS, MD - General Medicine, DNB - Cardiology
                </p>
                <p className="doc-department">
                  <img src={IMG_sp_04} className="img-fluid" alt="Speciality" />
                  Cardiology
                </p>
                <div className="rating">
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star"></i>
                  <span className="d-inline-block average-rating ms-1">
                    (27)
                  </span>
                </div>
                <div className="clinic-details">
                  <p className="doc-location">
                    <i className="fas fa-map-marker-alt"></i> Newyork, USA
                  </p>
                  <div>
                    <MyComponent />
                  </div>
                </div>
                <div className="clinic-services">
                  <span>Dental Fillings</span>
                  <span> Whitneing</span>
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                    <i className="far fa-thumbs-up"></i> 99%
                  </li>
                  <li>
                    <i className="far fa-comment"></i> 35 Feedback
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> Newyork, USA
                  </li>
                  <li>
                    <i className="far fa-money-bill-alt"></i> $100 - $400{" "}
                    <OverlayTrigger
                      overlay={
                        <Tooltip id="tooltip-disabled">Lorem Ipsum</Tooltip>
                      }
                    >
                      <span className="d-inline-block">
                        <i className="fas fa-info-circle"></i>
                      </span>
                    </OverlayTrigger>
                  </li>
                </ul>
              </div>
              <div className="clinic-booking">
                <Link to="/patient/doctor-profile" className="view-pro-btn">
                  View Profile
                </Link>
                <Link to="/patient/booking1" className="apt-btn">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="doctor-widget">
            <div className="doc-info-left">
              <div className="doctor-img">
                <Link to="/patient/doctor-profile">
                  <img src={IMG04} className="img-fluid" alt="User" />
                </Link>
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">
                  <Link to="/patient/doctor-profile">Dr. Sofia Brient</Link>
                </h4>
                <p className="doc-speciality">
                  MBBS, MS - General Surgery, MCh - Urology
                </p>
                <p className="doc-department">
                  <img src={IMG_sp_05} className="img-fluid" alt="Speciality" />
                  Urology
                </p>
                <div className="rating">
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star"></i>
                  <span className="d-inline-block average-rating ms-1">
                    (4)
                  </span>
                </div>
                <div className="clinic-details">
                  <p className="doc-location">
                    <i className="fas fa-map-marker-alt"></i> Newyork, USA
                  </p>
                  <div>
                    <MyComponent />
                  </div>
                </div>
                <div className="clinic-services">
                  <span>Dental Fillings</span>
                  <span> Whitneing</span>
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                    <i className="far fa-thumbs-up"></i> 97%
                  </li>
                  <li>
                    <i className="far fa-comment"></i> 4 Feedback
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> Newyork, USA
                  </li>
                  <li>
                    <i className="far fa-money-bill-alt"></i> $150 - $250{" "}
                    <OverlayTrigger
                      overlay={
                        <Tooltip id="tooltip-disabled">Lorem Ipsum</Tooltip>
                      }
                    >
                      <span className="d-inline-block">
                        <i className="fas fa-info-circle"></i>
                      </span>
                    </OverlayTrigger>
                  </li>
                </ul>
              </div>
              <div className="clinic-booking">
                <Link to="/patient/doctor-profile" className="view-pro-btn">
                  View Profile
                </Link>
                <Link to="/patient/booking1" className="apt-btn">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="doctor-widget">
            <div className="doc-info-left">
              <div className="doctor-img">
                <Link to="/patient/doctor-profile">
                  <img src={IMG05} className="img-fluid" alt="User" />
                </Link>
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">
                  <Link to="/patient/doctor-profile">
                    Dr. Katharine Berthold
                  </Link>
                </h4>
                <p className="doc-speciality">
                  MS - Orthopaedics, MBBS, M.Ch - Orthopaedics
                </p>
                <p className="doc-department">
                  <img src={IMG_sp_03} className="img-fluid" alt="Speciality" />
                  Orthopaedics
                </p>
                <div className="rating">
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star"></i>
                  <span className="d-inline-block average-rating ms-1">
                    (52)
                  </span>
                </div>
                <div className="clinic-details">
                  <p className="doc-location">
                    <i className="fas fa-map-marker-alt"></i> Newyork, USA
                  </p>
                  <div>
                    <MyComponent />
                  </div>
                </div>
                <div className="clinic-services">
                  <span>Dental Fillings</span>
                  <span> Whitneing</span>
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                    <i className="far fa-thumbs-up"></i> 100%
                  </li>
                  <li>
                    <i className="far fa-comment"></i> 52 Feedback
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> Texas, USA
                  </li>
                  <li>
                    <i className="far fa-money-bill-alt"></i> $100 - $500{" "}
                    <OverlayTrigger
                      overlay={
                        <Tooltip id="tooltip-disabled">Lorem Ipsum</Tooltip>
                      }
                    >
                      <span className="d-inline-block">
                        <i className="fas fa-info-circle"></i>
                      </span>
                    </OverlayTrigger>
                  </li>
                </ul>
              </div>
              <div className="clinic-booking">
                <Link to="/patient/doctor-profile" className="view-pro-btn">
                  View Profile
                </Link>
                <Link to="/patient/booking1" className="apt-btn">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
