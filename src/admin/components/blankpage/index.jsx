import React from "react";
import SidebarNav from "../sidebar";
import { Link } from "react-router-dom";
const BlankPage = () => {
  return (
    <>
      <SidebarNav />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Blank Page</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Blank Page</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">Contents here</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BlankPage;
