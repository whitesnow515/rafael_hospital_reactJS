/* eslint-disable react/no-unknown-property */
import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-5 d-flex">
          <div className="card flex-fill">
            <div className="card-header">
              <div className="row">
                <div className="col-sm-6">
                  <h3 className="card-title">Account</h3>
                </div>
                <div className="col-sm-6">
                  <div className="text-end">
                    <Link
                      title="Edit Profile"
                      className="btn btn-primary btn-sm"
                      to="#account_modal"
                      data-bs-toggle="modal">
                      <i className="fas fa-pencil" /> Edit Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="profile-view-bottom">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="info-list">
                      <div className="title">Bank Name</div>
                      <div className="text" id="bank_name">
                        Wells Fargo &amp; Co
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="info-list">
                      <div className="title">Branch Name</div>
                      <div className="text" id="branch_name">
                        Lenexa
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="info-list">
                      <div className="title">Account Number</div>
                      <div className="text" id="account_no">
                        5396 5250 1908 3838
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="info-list">
                      <div className="title">Account Name</div>
                      <div className="text" id="account_name">
                        Dr. Darren Elder
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="account-card bg-success-light">
                    <span>$90.48</span> Earned
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="account-card bg-warning-light">
                    <span>$0.00</span> Requested
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="account-card bg-purple-light">
                    <span>$90.48</span> Balance
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <Link
                    to="#payment_request_modal"
                    className="btn btn-primary request_btn"
                    data-bs-toggle="modal">
                    Payment Request
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Request Moodal */}
      <div
        className="modal fade custom-modal"
        id="payment_request_modal"
        role="dialog"
        style={{ display: "none" }}
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Payment Request</h3>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="payment_request_form" method="post">
                <input
                  type="hidden"
                  name="payment_type"
                  id="payment_type"
                  defaultValue={1}
                />
                <div className="form-group">
                  <label>Request Amount</label>
                  <input
                    type="text"
                    name="request_amount"
                    id="request_amount"
                    className="form-control"
                    maxLength={6}
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
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
              <button
                type="submit"
                id="request_btn"
                className="btn btn-primary">
                Request
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Payment Request Moodal */}

      {/* Account Details Modal*/}
      <div
        className="modal fade custom-modal"
        id="account_modal"
        role="dialog"
        aria-hidden="true"
        style={{ marginTop: "75px" }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Account Details</h3>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
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
                        defaultValue="Wells Fargo & Co"
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
                        defaultValue="Lenexa"
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
                        defaultValue="5396 5250 1908 3838"
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
                        defaultValue="Dr. Darren Elder"
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
          </div>
        </div>
      </div>
      {/* /Account Details Modal*/}
    </div>
  );
};

export default Content;
