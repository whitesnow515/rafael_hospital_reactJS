/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import DashboardSidebar from "../dashboard/sidebar/sidebar.jsx";
import StickyBox from "react-sticky-box";
import Header from "../../header";
import Footer from "../../footer";
import Content from "./content.jsx";
import TableContent from "./table.jsx";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

const PatientAccounts = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <h2 className="breadcrumb-title">Dashboard</h2>

                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/patient/dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              <Content />

              <TableContent />
            </div>
          </div>
        </div>
      </div>
      <Modal style={{ display: show ? "block" : "none" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Account Details</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <form id="accounts_form" method="post">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Bank Name</label>
                    <input
                      type="text"
                      name="bank_name"
                      className="form-control bank_name"
                      defaultValue="Goldman Sachs"
                    />
                    <span className="help-block" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Branch Name</label>
                    <input
                      type="text"
                      name="branch_name"
                      className="form-control branch_name"
                      defaultValue="Alpharetta"
                    />
                    <span className="help-block" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Account Number</label>
                    <input
                      type="text"
                      name="account_no"
                      className="form-control account_no"
                      defaultValue="4916 0606 4635 5064"
                    />
                    <span className="help-block" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Account Name</label>
                    <input
                      type="text"
                      name="account_name"
                      className="form-control acc_name"
                      defaultValue="Richard Wilson"
                    />
                    <span className="help-block" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer text-center">
            <button type="submit" id="acc_btn" className="btn btn-primary">
              Save
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={show == "refund_request"} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Payment Request</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <form id="payment_request_form" method="post">
              <input type="hidden" name="payment_type" id="payment_type" />
              <div className="form-group">
                <label>Request Amount</label>
                <input
                  type="text"
                  name="request_amount"
                  id="request_amount"
                  className="form-control"
                  maxLength={6}
                />
                <span className="help-block" />
              </div>
              <div className="form-group">
                <label>Description (Optional)</label>
                <textarea
                  className="form-control"
                  name="description"
                  id="description"
                  defaultValue={""}
                />
                <span className="help-block" />
              </div>
            </form>
          </div>
          <div className="modal-footer text-center">
            <button type="submit" id="acc_btn" className="btn btn-primary">
              Save
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Footer {...props} />
    </div>
  );
};

export default PatientAccounts;
