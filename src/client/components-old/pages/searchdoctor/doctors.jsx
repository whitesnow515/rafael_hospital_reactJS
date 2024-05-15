import React from "react";
// import { Doctor01, Doctor2, Doctor3 } from "../../home/image";
// import { doctor04, doctor05 } from "../aboutus/img";
import {
  FiAward,
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiGrid,
  FiHeart,
  FiInfo,
  FiList,
  FiMapPin,
  FiThumbsUp,
} from "react-icons/fi";
import {
  doctor_13,
  doctor_14,
  doctor_15,
  doctor_16,
  doctor_17,
} from "../../imagepath";
import { Link } from "react-router-dom";
import Select from "react-select";

const Doctors = () => {
  const options = [
    { value: 1, label: "A to Z" },
    { value: 2, label: "B to Z" },
    { value: 3, label: "C to Z" },
    { value: 4, label: "D to Z" },
    { value: 5, label: "E to Z" },
  ];
  return (
    <div>
      <div className="doctor-filter-info">
        <div className="doctor-filter-inner">
          <div>
            <div className="doctors-found">
              <p>
                <span>100 Doctors found for:</span> Dentist in San francisco,
                California
              </p>
            </div>
            <div className="doctor-filter-availability">
              <p>Availability</p>
              <div className="status-toggle status-tog">
                <input type="checkbox" id="status_6" className="check" />
                <label htmlFor="status_6" className="checktoggle">
                  checkbox
                </label>
              </div>
            </div>
          </div>
          <div className="doctor-filter-option">
            <div className="doctor-filter-sort">
              <p>Sort</p>
              <div className="doctor-filter-select">
                <Select
                  className="select w-100"
                  defaultValue={options.find((option) => option.value === 1)}
                  options={options}
                  placeholder="A to Z"
                  isSearchable={false}
                />
              </div>
            </div>
            <div className="doctor-filter-sort">
              <p className="filter-today d-flex align-items-center">
                <FiCalendar /> Today 10 Aug to 20 Aug
              </p>
            </div>
            <div className="doctor-filter-sort">
              <ul className="nav">
                <li>
                  <Link to="/patient/doctor-list" id="map-list">
                    <FiMapPin />
                  </Link>
                </li>
                <li>
                  <Link to="/patient/doctor-grid">
                    <FiGrid />
                  </Link>
                </li>
                <li>
                  <Link to="/patient/doctor-list" className="active">
                    <FiList />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="card doctor-card">
        <div className="card-body">
          <div className="doctor-widget-one">
            <div className="doc-info-left">
              <div className="doctor-img">
                <Link to="/patient/doctor-list">
                  <img src={doctor_13} className="img-fluid" alt="" />
                </Link>
                <div className="favourite-btn">
                  <Link to="/patient/map-list" className="favourite-icon">
                    <FiHeart />
                  </Link>
                </div>
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">
                  <Link to="/patient/doctor-profile">Dr.John Doe</Link>
                  <i className="fas fa-circle-check" />
                </h4>
                <p className="doc-speciality">MBBS, Dentist</p>
                <div className="clinic-details">
                  <p className="doc-location">
                    <FiMapPin />
                    <span>0.9</span> mi - Newyork, USA{" "}
                    <Link to="#">Get Direction</Link>
                  </p>
                  <p className="doc-location">
                    <FiAward /> <span>20</span> Years of Experience
                  </p>
                </div>
                <div className="reviews-ratings">
                  <p>
                    <span>
                      <i className="fas fa-star" /> 4.5
                    </span>{" "}
                    (35 Reviews)
                  </p>
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                    <FiClock /> &nbsp;
                    <span className="available-date available-today">
                      Available Today
                    </span>
                  </li>
                  <li>
                    <FiThumbsUp /> 98%{" "}
                    <span className="votes">(252 Votes)</span>
                  </li>
                  <li>
                    <FiDollarSign />
                    1500 <FiInfo />
                  </li>
                </ul>
              </div>
              <div className="clinic-booking book-appoint">
                <Link className="btn btn-primary" to="/patient/booking1">
                  Book Appointment
                </Link>
                <Link className="btn btn-primary-light" to="/patient/booking2">
                  Book Online Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card doctor-card">
        <div className="card-body">
          <div className="doctor-widget-one">
            <div className="doc-info-left">
              <div className="doctor-img">
                <Link to="/patient/doctor-profile">
                  <img src={doctor_14} className="img-fluid" alt="" />
                </Link>
                <div className="favourite-btn">
                  <Link to="#" className="favourite-icon">
                    <i className="fas fa-heart" />
                  </Link>
                </div>
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">
                  <Link to="/patient/doctor-profile">Dr. Darren Elder</Link>
                  <i className="fas fa-circle-check" />
                </h4>
                <p className="doc-speciality">
                  BDS, MDS - Oral &amp; Maxillofacial Surgery
                </p>
                <div className="clinic-details">
                  <p className="doc-location">
                    <FiMapPin />
                    1.1 mi - Georgia, USA <Link to="#">Get Direction</Link>
                  </p>
                  <p className="doc-location">
                    <FiAward /> 15 Years of Experience
                  </p>
                </div>
                <div className="reviews-ratings">
                  <p>
                    <span>
                      <i className="fas fa-star" /> 4.3
                    </span>{" "}
                    (22 Reviews)
                  </p>
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                    <FiClock />
                    &nbsp;
                    <span className="available-date available-tomorrow">
                      Available Tomorrow
                    </span>
                  </li>
                  <li>
                    <FiThumbsUp /> 90%{" "}
                    <span className="votes">(380 Votes)</span>
                  </li>
                  <li>
                    <FiDollarSign /> $2800 <FiInfo />
                  </li>
                </ul>
              </div>
              <div className="clinic-booking book-appoint">
                <Link className="btn btn-primary" to="/patient/booking1">
                  Book Appointment
                </Link>
                <Link className="btn btn-primary-light" to="/patient/booking2">
                  Book Online Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card doctor-card">
        <div className="card-body">
          <div className="doctor-widget-one">
            <div className="doc-info-left">
              <div className="doctor-img">
                <Link to="/patient/doctor-profile">
                  <img src={doctor_15} className="img-fluid" alt="" />
                </Link>
                <div className="favourite-btn">
                  <Link to="javascript:void(0)" className="favourite-icon">
                    <i className="fas fa-heart" />
                  </Link>
                </div>
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">
                  <Link to="/patient/doctor-profile">Dr. Sofia Brient</Link>
                  <i className="fas fa-circle-check" />
                </h4>
                <p className="doc-speciality">MBBS, Dentist</p>
                <div className="clinic-details">
                  <p className="doc-location">
                    <FiMapPin />
                    <span>0.9</span> mi - Newyork, USA{" "}
                    <Link to="#">Get Direction</Link>
                  </p>
                  <p className="doc-location">
                    <FiAward /> <span>20</span> Years of Experience
                  </p>
                </div>
                <div className="reviews-ratings">
                  <p>
                    <span>
                      <i className="fas fa-star" /> 4.5
                    </span>{" "}
                    (35 Reviews)
                  </p>
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                    <FiClock />
                    &nbsp;
                    <span className="available-date available-today">
                      Available Today
                    </span>
                  </li>
                  <li>
                    <FiThumbsUp /> 98%{" "}
                    <span className="votes">(252 Votes)</span>
                  </li>
                  <li>
                    <FiDollarSign /> $1500 <FiInfo />
                  </li>
                </ul>
              </div>
              <div className="clinic-booking book-appoint">
                <Link className="btn btn-primary" to="/patient/booking1">
                  Book Appointment
                </Link>
                <Link className="btn btn-primary-light" to="/patient/booking2">
                  Book Online Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card doctor-card">
        <div className="card-body">
          <div className="doctor-widget-one">
            <div className="doc-info-left">
              <div className="doctor-img">
                <Link to="/patient/doctor-profile">
                  <img src={doctor_16} className="img-fluid" alt="" />
                </Link>
                <div className="favourite-btn">
                  <Link to="javascript:void(0)" className="favourite-icon">
                    <i className="fas fa-heart" />
                  </Link>
                </div>
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">
                  <Link to="/patient/doctor-profile">Dr. Johny Rita</Link>
                  <i className="fas fa-circle-check" />
                </h4>
                <p className="doc-speciality">MBBS, Dentist</p>
                <div className="clinic-details">
                  <p className="doc-location">
                    <FiMapPin />
                    <span>0.9</span> mi - Newyork, USA{" "}
                    <Link to="#">Get Direction</Link>
                  </p>
                  <p className="doc-location">
                    <FiAward /> <span>20</span> Years of Experience
                  </p>
                </div>
                <div className="reviews-ratings">
                  <p>
                    <span>
                      <i className="fas fa-star" /> 4.5
                    </span>{" "}
                    (35 Reviews)
                  </p>
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                    <FiClock />
                    &nbsp;
                    <span className="available-date available-today">
                      Available Today
                    </span>
                  </li>
                  <li>
                    <FiThumbsUp /> 98%{" "}
                    <span className="votes">(252 Votes)</span>
                  </li>
                  <li>
                    <FiDollarSign /> $1500 <FiInfo />
                  </li>
                </ul>
              </div>
              <div className="clinic-booking book-appoint">
                <Link className="btn btn-primary" to="/patient/booking1">
                  Book Appointment
                </Link>
                <Link className="btn btn-primary-light" to="/patient/booking2">
                  Book Online Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card doctor-card">
        <div className="card-body">
          <div className="doctor-widget-one">
            <div className="doc-info-left">
              <div className="doctor-img">
                <Link to="/patient/doctor-profile">
                  <img src={doctor_17} className="img-fluid" alt="" />
                </Link>
                <div className="favourite-btn">
                  <Link to="javascript:void(0)" className="favourite-icon">
                    <i className="fas fa-heart" />
                  </Link>
                </div>
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">
                  <Link to="/patient/doctor-profile">Dr. Deborah Angel</Link>
                  <i className="fas fa-circle-check" />
                </h4>
                <p className="doc-speciality">MBBS, Dentist</p>
                <div className="clinic-details">
                  <p className="doc-location">
                    <FiMapPin />
                    <span>0.9</span> mi - Newyork, USA{" "}
                    <Link to="#">Get Direction</Link>
                  </p>
                  <p className="doc-location">
                    <FiAward /> <span>20</span> Years of Experience
                  </p>
                </div>
                <div className="reviews-ratings">
                  <p>
                    <span>
                      <i className="fas fa-star" /> 4.5
                    </span>{" "}
                    (35 Reviews)
                  </p>
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                    <FiClock />
                    &nbsp;
                    <span className="available-date available-today">
                      Available Today
                    </span>
                  </li>
                  <li>
                    <FiThumbsUp /> 98%{" "}
                    <span className="votes">(252 Votes)</span>
                  </li>
                  <li>
                    <FiDollarSign /> $1500 <FiInfo />
                  </li>
                </ul>
              </div>
              <div className="clinic-booking book-appoint">
                <Link className="btn btn-primary" to="/patient/booking1">
                  Book Appointment
                </Link>
                <Link className="btn btn-primary-light" to="/patient/booking2">
                  Book Online Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="blog-pagination rev-page">
            <nav>
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <Link className="page-link page-prev" to="#" tabIndex={-1}>
                    <i className="feather-chevrons-left me-1" /> PREV
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" to="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    ...
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    10
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link page-next" to="#">
                    NEXT <i className="feather-chevrons-right ms-1" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
