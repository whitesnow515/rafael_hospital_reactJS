/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import Content from "./content";
import Pagecontent from "./pagecontent";

const DoctorProfile = (props) => {
  const [show, setShow] = useState(false);
  const [videocall, setvideocall] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [state, setState] = useState(false);
  const [photoIndex, setphotoIndex] = useState(false);
  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Doctor Profile</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Doctor Profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <Pagecontent />
          <Content />
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default DoctorProfile;
