import React, { useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

import {
  IMG01,
  IMG02,
  IMG03,
  IMG05,
  tooth,
  thums,
  star,
  location,
  chat,
  money,
  InfoCircle,
  doctor_thumb1,
  doctor_thumb2,
  doctor_thumb3,
  doctor_thumb4,
  doctor_thumb6,
} from "./img";
import Map from "../doctorgrid/map";

import Header from "../../header";
import MyComponent from "./mycomponent";

const data = [
  {
    id: 1,
    doc_name: "Ruby Perrin",
    speciality: "Digital Marketer",
    address: "Florida, USA",
    next_available: "Available on Fri, 22 Mar",
    amount: "$300 - $1000",
    lat: -33.847927,
    lng: 150.6517938,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "17",
    image: IMG01,
  },
  {
    id: 2,
    doc_name: "Darren Elder",
    speciality: "Digital Marketer",
    address: "Newyork, USA",
    next_available: "Available on Fri, 23 Mar",
    amount: "$50 - $300",
    lat: -37.9722342,
    lng: 144.7729561,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "35",
    image: IMG02,
  },
  {
    id: 3,
    doc_name: "Deborah Angel",
    speciality: "UNIX, Calculus, Trigonometry",
    address: "Georgia, USA",
    next_available: "Available on Fri, 24 Mar",
    amount: "$100 - $400",
    lat: -31.9546904,
    lng: 112.8350292,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "27",
    image: IMG03,
  },
  {
    id: 4,
    doc_name: "Sofia Brient",
    speciality: "Computer Programming",
    address: "Louisiana, USA",
    next_available: "Available on Fri, 25 Mar",
    amount: "$150 - $250",
    lat: -32.9546904,
    lng: 115.8350292,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "4",
    image: IMG05,
  },
  {
    id: 5,
    doc_name: "Marvin Campbell",
    speciality: "ASP.NET,Computer Gaming",
    address: "Michigan, USA",
    next_available: "Available on Fri, 25 Mar",
    amount: "$50 - $700",
    lat: -34.9546904,
    lng: 125.8650292,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "66",
    image: IMG03,
  },
  {
    id: 6,
    doc_name: "Katharine Berthold",
    speciality: "Digital Marketer",
    address: "Texas, USA",
    next_available: "Available on Fri, 25 Mar",
    amount: "$100 - $500",
    lat: -35.9546904,
    lng: 153.8350292,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "52",
    image: IMG02,
  },
  {
    id: 7,
    doc_name: "Linda Tobin",
    speciality: "UNIX, Calculus, Trigonometry",
    address: "Kansas, USA",
    next_available: "Available on Fri, 25 Mar",
    amount: "$100 - $1000",
    lat: -36.9548904,
    lng: 105.8350292,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "43",
    image: IMG01,
  },
];

const MapList = (props) => {
  useEffect(() => {
    document.body.classList.add("map-page");

    return () => document.body.classList.remove("map-page");
  }, []);

  const options = [
    { value: "Select", label: "Select" },
    { value: "Rating", label: "Rating" },
    { value: "Popular", label: "Popular" },
    { value: "Lastest", label: "Lastest" },
    { value: "Free", label: "Free" },
  ];

  return (
    <>
      <Header {...props} />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 col-lg-12 order-md-last order-sm-last order-last map-left">
              <div className="row align-items-center mb-4">
                <div className="col-md-6 col">
                  <h4 className="appoint">All Appoinments</h4>
                </div>
                <div className="col-md-6 col-auto">
                  <div className="view-icons">
                    <Link to="/patient/doctor-grid" className="grid-view">
                      <i className="fas fa-th-large" />
                    </Link>
                    <Link
                      to="/patient/doctor-list"
                      className="list-view active"
                    >
                      <i className="fas fa-bars" />
                    </Link>
                  </div>
                  <div className="sort-by d-sm-block d-none">
                    <span className="sortby-fliter">
                      <Select options={options} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6 col">
                  <h4 className="total-dr">2245 Doctors found</h4>
                </div>
                <div className="col-md-6 col-auto">
                  <div className="arrows">
                    <Link to="#" className="perv-date">
                      <i className="fas fa-angle-left" />
                    </Link>
                    <Link to="#" className="next-date">
                      <i className="fas fa-angle-right" />
                    </Link>
                  </div>
                  <div className="sort-by d-sm-block d-none">
                    <h5 className="calender">Apr 20 - May 3</h5>
                  </div>
                </div>
              </div>
              {/* Doctor Widget */}
              <div className="card">
                <div className="card-body widget-body">
                  <div className="doctor-widget doctor-col">
                    <div className="doc-info-left doc-details">
                      <div className="doctor-img">
                        <Link to="/patient/doctor-profile">
                          <img
                            src={doctor_thumb1}
                            className="img-fluid"
                            alt="User Image"
                          />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <Link to="/patient/doctor-profile">
                            Dr. Ruby Perrin
                          </Link>
                        </h4>
                        <p className="doc-speciality">
                          MDS - Periodontology and Oral Implantology, BDS
                        </p>
                        <div className="doc-department d-flex">
                          <img
                            src={tooth}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>Dentist</h6>
                          <img
                            src={thums}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>99%</h6>
                          <img
                            src={star}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>
                            <span>4.86 </span>(125)
                          </h6>
                        </div>
                        <div className="doc-department d-flex">
                          <img
                            src={location}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>Florida, USA</h6>
                          <img
                            src={chat}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>17 Feedback</h6>
                        </div>
                        <div className="doc-department d-flex">
                          <img
                            src={money}
                            className="img-fluid money-icon"
                            alt="Speciality"
                          />
                          <h6>$300 - $1000</h6>
                          <img
                            src={InfoCircle}
                            className="img-fluid"
                            alt="Speciality"
                          />
                        </div>
                        <div className="clinic-details">
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
                    <div className="doc-info-right appt-date">
                      <div className="calender-scroll">
                        <div className="calender-box text-center">
                          <div className="inner-box">
                            <div className="date">
                              <h4>20</h4>
                              <h6>Monday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>21</h4>
                              <h6>Tuesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>22</h4>
                              <h6>Wednesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>23</h4>
                              <h6>Thursday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>24</h4>
                              <h6>Friday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>25</h4>
                              <h6>Saturday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>25{/*6*/}</h4>
                              <h6>Sunday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                        </div>
                        <div className="calender-box text-center">
                          <div className="inner-box">
                            <div className="date">
                              <h4>26</h4>
                              <h6>Monday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>27</h4>
                              <h6>Tuesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>28</h4>
                              <h6>Wednesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>29</h4>
                              <h6>Thursday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>30</h4>
                              <h6>Friday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>31</h4>
                              <h6>Saturday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>1{/*6*/}</h4>
                              <h6>Sunday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clinic-booking book-btns">
                        <Link
                          className="view-pro-btn"
                          to="/patient/doctor-profile"
                        >
                          View all availability
                        </Link>
                        <Link className="apt-btn" to="/patient/booking1">
                          Book an Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Widget */}
              {/* Doctor Widget */}
              <div className="card">
                <div className="card-body widget-body">
                  <div className="doctor-widget doctor-col">
                    <div className="doc-info-left doc-details">
                      <div className="doctor-img">
                        <Link to="/patient/doctor-profile">
                          <img
                            src={doctor_thumb2}
                            className="img-fluid"
                            alt="User Image"
                          />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <Link to="/patient/doctor-profile">
                            Dr. Darren Elder
                          </Link>
                        </h4>
                        <p className="doc-speciality">
                          BDS, MDS - Oral &amp; Maxillofacial Surgery
                        </p>
                        <div className="doc-department d-flex">
                          <img
                            src={tooth}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>Dentist</h6>
                          <img
                            src={thums}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>99%</h6>
                          <img
                            src={star}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>
                            <span>4.86 </span>(125)
                          </h6>
                        </div>
                        <div className="doc-department d-flex">
                          <img
                            src={location}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>Florida, USA</h6>
                          <img
                            src={chat}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>17 Feedback</h6>
                        </div>
                        <div className="doc-department d-flex">
                          <img
                            src={money}
                            className="img-fluid money-icon"
                            alt="Speciality"
                          />
                          <h6>$300 - $1000</h6>
                          <img
                            src={InfoCircle}
                            className="img-fluid"
                            alt="Speciality"
                          />
                        </div>
                        <div className="clinic-details">
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
                    <div className="doc-info-right appt-date">
                      <div className="calender-scroll">
                        <div className="calender-box text-center">
                          <div className="inner-box">
                            <div className="date">
                              <h4>20</h4>
                              <h6>Monday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>21</h4>
                              <h6>Tuesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>22</h4>
                              <h6>Wednesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>23</h4>
                              <h6>Thursday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>24</h4>
                              <h6>Friday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>25</h4>
                              <h6>Saturday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>25{/*6*/}</h4>
                              <h6>Sunday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                        </div>
                        <div className="calender-box text-center">
                          <div className="inner-box">
                            <div className="date">
                              <h4>26</h4>
                              <h6>Monday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>27</h4>
                              <h6>Tuesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>28</h4>
                              <h6>Wednesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>29</h4>
                              <h6>Thursday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>30</h4>
                              <h6>Friday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>31</h4>
                              <h6>Saturday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>1{/*6*/}</h4>
                              <h6>Sunday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clinic-booking book-btns">
                        <Link
                          className="view-pro-btn"
                          to="/patient/doctor-profile"
                        >
                          View all availability
                        </Link>
                        <Link className="apt-btn" to="/patient/booking1">
                          Book an Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Widget */}
              {/* Doctor Widget */}
              <div className="card">
                <div className="card-body widget-body">
                  <div className="doctor-widget doctor-col">
                    <div className="doc-info-left doc-details">
                      <div className="doctor-img">
                        <Link to="/patient/doctor-profile">
                          <img
                            src={doctor_thumb3}
                            className="img-fluid"
                            alt="User Image"
                          />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <Link to="/patient/doctor-profile">
                            Dr. Deborah Angel
                          </Link>
                        </h4>
                        <p className="doc-speciality">
                          MBBS, MD - General Medicine, DNB - Cardiology
                        </p>
                        <div className="doc-department d-flex">
                          <img
                            src={tooth}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>Dentist</h6>
                          <img
                            src={thums}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>99%</h6>
                          <img
                            src={star}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>
                            <span>4.86 </span>(125)
                          </h6>
                        </div>
                        <div className="doc-department d-flex">
                          <img
                            src={location}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>Florida, USA</h6>
                          <img
                            src={chat}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>17 Feedback</h6>
                        </div>
                        <div className="doc-department d-flex">
                          <img
                            src={money}
                            className="img-fluid money-icon"
                            alt="Speciality"
                          />
                          <h6>$300 - $1000</h6>
                          <img
                            src={InfoCircle}
                            className="img-fluid"
                            alt="Speciality"
                          />
                        </div>
                        <div className="clinic-details">
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
                    <div className="doc-info-right appt-date">
                      <div className="calender-scroll">
                        <div className="calender-box text-center">
                          <div className="inner-box">
                            <div className="date">
                              <h4>20</h4>
                              <h6>Monday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>21</h4>
                              <h6>Tuesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>22</h4>
                              <h6>Wednesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>23</h4>
                              <h6>Thursday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>24</h4>
                              <h6>Friday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>25</h4>
                              <h6>Saturday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>25{/*6*/}</h4>
                              <h6>Sunday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                        </div>
                        <div className="calender-box text-center">
                          <div className="inner-box">
                            <div className="date">
                              <h4>26</h4>
                              <h6>Monday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>27</h4>
                              <h6>Tuesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>28</h4>
                              <h6>Wednesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>29</h4>
                              <h6>Thursday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>30</h4>
                              <h6>Friday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>31</h4>
                              <h6>Saturday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>1{/*6*/}</h4>
                              <h6>Sunday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clinic-booking book-btns">
                        <Link
                          className="view-pro-btn"
                          to="/patient/doctor-profile"
                        >
                          View all availability
                        </Link>
                        <Link className="apt-btn" to="/patient/booking1">
                          Book an Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Widget */}
              {/* Doctor Widget */}
              <div className="card">
                <div className="card-body widget-body">
                  <div className="doctor-widget doctor-col">
                    <div className="doc-info-left doc-details">
                      <div className="doctor-img">
                        <Link to="/patient/doctor-profile">
                          <img
                            src={doctor_thumb4}
                            className="img-fluid"
                            alt="User Image"
                          />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <Link to="/patient/doctor-profile">
                            Dr. Sofia Brient
                          </Link>
                        </h4>
                        <p className="doc-speciality">
                          MBBS, MS - General Surgery, MCh - Urology
                        </p>
                        <div className="doc-department d-flex">
                          <img
                            src={tooth}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>Dentist</h6>
                          <img
                            src={thums}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>99%</h6>
                          <img
                            src={star}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>
                            <span>4.86 </span>(125)
                          </h6>
                        </div>
                        <div className="doc-department d-flex">
                          <img
                            src={location}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>Florida, USA</h6>
                          <img
                            src={chat}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>17 Feedback</h6>
                        </div>
                        <div className="doc-department d-flex">
                          <img
                            src={money}
                            className="img-fluid money-icon"
                            alt="Speciality"
                          />
                          <h6>$300 - $1000</h6>
                          <img
                            src={InfoCircle}
                            className="img-fluid"
                            alt="Speciality"
                          />
                        </div>
                        <div className="clinic-details">
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
                    <div className="doc-info-right appt-date">
                      <div className="calender-scroll">
                        <div className="calender-box text-center">
                          <div className="inner-box">
                            <div className="date">
                              <h4>20</h4>
                              <h6>Monday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>21</h4>
                              <h6>Tuesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>22</h4>
                              <h6>Wednesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>23</h4>
                              <h6>Thursday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>24</h4>
                              <h6>Friday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>25</h4>
                              <h6>Saturday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>25{/*6*/}</h4>
                              <h6>Sunday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                        </div>
                        <div className="calender-box text-center">
                          <div className="inner-box">
                            <div className="date">
                              <h4>26</h4>
                              <h6>Monday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>27</h4>
                              <h6>Tuesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>28</h4>
                              <h6>Wednesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>29</h4>
                              <h6>Thursday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>30</h4>
                              <h6>Friday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>31</h4>
                              <h6>Saturday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>1{/*6*/}</h4>
                              <h6>Sunday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clinic-booking book-btns">
                        <Link
                          className="view-pro-btn"
                          to="/patient/doctor-profile"
                        >
                          View all availability
                        </Link>
                        <Link className="apt-btn" to="/patient/booking1">
                          Book an Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Widget */}
              {/* Doctor Widget */}
              <div className="card">
                <div className="card-body widget-body">
                  <div className="doctor-widget doctor-col">
                    <div className="doc-info-left doc-details">
                      <div className="doctor-img">
                        <Link to="/patient/doctor-profile">
                          <img
                            src={doctor_thumb6}
                            className="img-fluid"
                            alt="User Image"
                          />
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
                        <div className="doc-department d-flex">
                          <img
                            src={tooth}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>Dentist</h6>
                          <img
                            src={thums}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>99%</h6>
                          <img
                            src={star}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>
                            <span>4.86 </span>(125)
                          </h6>
                        </div>
                        <div className="doc-department d-flex">
                          <img
                            src={location}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>Florida, USA</h6>
                          <img
                            src={chat}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          <h6>17 Feedback</h6>
                        </div>
                        <div className="doc-department d-flex">
                          <img
                            src={money}
                            className="img-fluid money-icon"
                            alt="Speciality"
                          />
                          <h6>$300 - $1000</h6>
                          <img
                            src={InfoCircle}
                            className="img-fluid"
                            alt="Speciality"
                          />
                        </div>
                        <div className="clinic-details">
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
                    <div className="doc-info-right appt-date">
                      <div className="calender-scroll">
                        <div className="calender-box text-center">
                          <div className="inner-box">
                            <div className="date">
                              <h4>20</h4>
                              <h6>Monday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>21</h4>
                              <h6>Tuesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>22</h4>
                              <h6>Wednesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>23</h4>
                              <h6>Thursday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>24</h4>
                              <h6>Friday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>25</h4>
                              <h6>Saturday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>25{/*6*/}</h4>
                              <h6>Sunday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                        </div>
                        <div className="calender-box text-center">
                          <div className="inner-box">
                            <div className="date">
                              <h4>26</h4>
                              <h6>Monday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>27</h4>
                              <h6>Tuesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>28</h4>
                              <h6>Wednesday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>29</h4>
                              <h6>Thursday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box">
                            <div className="date">
                              <h4>30</h4>
                              <h6>Friday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>2 Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>31</h4>
                              <h6>Saturday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                          <div className="inner-box no-appointment-box">
                            <div className="date">
                              <h4>1{/*6*/}</h4>
                              <h6>Sunday</h6>
                            </div>
                            <div className="appointment-box">
                              <h6>No Appts</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clinic-booking book-btns">
                        <Link
                          className="view-pro-btn"
                          to="/patient/doctor-profile"
                        >
                          View all availability
                        </Link>
                        <Link className="apt-btn" to="/patient/booking1">
                          Book an Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Widget */}
              {/* Map Pagination */}
              <div className="row">
                <div className="col-md-12">
                  <div className="blog-pagination">
                    <nav>
                      <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                          <Link className="page-link" to="#" tabIndex={-1}>
                            <i className="fas fa-angle-double-left" />
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            1
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link className="page-link" to="#">
                            2 <span className="visually-hidden">(current)</span>
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            <i className="fas fa-angle-double-right" />
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              {/* /Map Pagination */}
            </div>

            <div className="col-xl-4 col-lg-12 map-right">
              <div id="map" className="map-listing">
                <div style={{ height: "100vh", width: "100%" }}>
                  <Map
                    places={data}
                    center={{ lat: -24.9923319, lng: 135.2252427 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapList;
