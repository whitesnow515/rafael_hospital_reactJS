import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import Avatar from "./avatar";
import Alerts from "./alerts";
import Breadcrumbs from "./breadcrumbs";
import Buttons from "./buttons";
import Cards from "./cards";
import Dropdown from "./dropdown";
import Pagination from "./pagination";
import Progress from "./progress";
import Tabs from "./tabs";
import Typography from "./typography";

const Components = (props) => {
  return (
    <>
      <Header {...props} />
      <>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Components</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/index">Home</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Components
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
      </>

      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="comp-sec-wrapper">
            {/* Avatar */}
            <Avatar />

            {/* Alerts */}
            <Alerts />

            {/* Breadcrumbs */}
            <Breadcrumbs />

            {/* Buttons */}
            <Buttons />

            {/* Cards */}
            <Cards />

            {/* Dropdowns */}
            <Dropdown />

            {/* Pagination */}
            <Pagination />

            {/* Progress */}
            <Progress />

            {/* Tabs */}
            <Tabs />

            {/* Typography */}
            <Typography />
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer {...props} />
    </>
  );
};

export default Components;
