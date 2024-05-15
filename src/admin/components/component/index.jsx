import React from "react";
import { Link } from "react-router-dom";
import { avatar02, avatar03, avatar04, img01 } from "../imagepath";
import SidebarNav from "../sidebar";

const Components = () => {
  return (
    <>
      <SidebarNav />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="comp-sec-wrapper">
            {/* Avatar */}
            <section className="comp-section">
              <div className="section-header">
                <h3 className="section-title">Avatar</h3>
                <div className="line" />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Sizing</h5>
                    </div>
                    <div className="card-body">
                      <div className="avatar avatar-xxl">
                        <img
                          className="avatar-img rounded-circle me-1"
                          alt="User Image"
                          src={avatar02}
                        />
                      </div>
                      <div className="avatar avatar-xl">
                        <img
                          className="avatar-img rounded-circle me-1"
                          alt="User Image"
                          src={avatar02}
                        />
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle me-1"
                          alt="User Image"
                          src={avatar02}
                        />
                      </div>
                      <div className="avatar">
                        <img
                          className="avatar-img rounded-circle me-1"
                          alt="User Image"
                          src={avatar02}
                        />
                      </div>
                      <div className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle me-1"
                          alt="User Image"
                          src={avatar02}
                        />
                      </div>
                      <div className="avatar avatar-xs">
                        <img
                          className="avatar-img rounded-circle me-1"
                          alt="User Image"
                          src={avatar02}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Avatar With Status</h5>
                    </div>
                    <div className="card-body">
                      <div className="avatar avatar-online ava-status">
                        <img
                          className="avatar-img rounded-circle me-1"
                          alt="User Image"
                          src={avatar02}
                        />
                      </div>
                      <div className="avatar avatar-offline ava-status">
                        <img
                          className="avatar-img rounded-circle me-1"
                          alt="User Image"
                          src={avatar02}
                        />
                      </div>
                      <div className="avatar avatar-away ava-status">
                        <img
                          className="avatar-img rounded-circle me-1"
                          alt="User Image"
                          src={avatar02}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Shape</h5>
                    </div>
                    <div className="card-body">
                      <div className="avatar">
                        <img
                          className="avatar-img rounded me-1"
                          alt="User Image"
                          src={avatar02}
                        />
                      </div>
                      <div className="avatar">
                        <img
                          className="avatar-img rounded-circle me-1"
                          alt="User Image"
                          src={avatar02}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Group</h5>
                    </div>
                    <div className="card-body">
                      <div className="avatar-group">
                        <div className="avatar">
                          <img
                            className="avatar-img rounded-circle border border-white me-1"
                            alt="User Image"
                            src={avatar02}
                          />
                        </div>
                        <div className="avatar">
                          <img
                            className="avatar-img rounded-circle border border-white me-1"
                            alt="User Image"
                            src={avatar03}
                          />
                        </div>
                        <div className="avatar">
                          <img
                            className="avatar-img rounded-circle border border-white me-1"
                            alt="User Image"
                            src={avatar04}
                          />
                        </div>
                        <div className="avatar">
                          <span className="avatar-title rounded-circle border border-white me-1">
                            CF
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Avatar */}
            {/* <!-- Alerts --> */}
            <section className="comp-section">
              <div className="section-header">
                <h3 className="section-title">Alerts</h3>
                <div className="line"></div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div
                    className="alert alert-primary alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Holy guacamole!</strong> You should check in on some
                    of those fields below.
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    className="alert alert-secondary alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Holy guacamole!</strong> You should check in on some
                    of those fields below.
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Holy guacamole!</strong> You should check in on some
                    of those fields below.
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Holy guacamole!</strong> You should check in on some
                    of those fields below.
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    className="alert alert-warning alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Holy guacamole!</strong> You should check in on some
                    of those fields below.
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    className="alert alert-info alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Holy guacamole!</strong> You should check in on some
                    of those fields below.
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    className="alert alert-light alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Holy guacamole!</strong> You should check in on some
                    of those fields below.
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    className="alert alert-dark alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Holy guacamole!</strong> You should check in on some
                    of those fields below.
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- /Alerts --> */}
            {/* <!-- Breadcrumbs --> */}
            <section className="comp-section">
              <div className="section-header">
                <h3 className="section-title">Breadcrumbs</h3>
                <div className="line"></div>
              </div>
              <div className="card">
                <div className="card-body">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Home
                      </li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="#">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Products
                      </li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <Link to="#">Home</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="#">Products</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Accessories
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </section>
            {/* <!-- /Breadcrumbs --> */}
            {/* <!-- Buttons --> */}
            <section className="comp-section comp-buttons">
              <div className="section-header">
                <h3 className="section-title">Buttons</h3>
                <div className="line"></div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Default Button</h5>
                  <button type="button" className="btn btn-primary me-1">
                    Primary
                  </button>
                  <button type="button" className="btn btn-secondary me-1">
                    Secondary
                  </button>
                  <button type="button" className="btn btn-success me-1">
                    Success
                  </button>
                  <button type="button" className="btn btn-danger me-1">
                    Danger
                  </button>
                  <button type="button" className="btn btn-warning me-1">
                    Warning
                  </button>
                  <button type="button" className="btn btn-info me-1">
                    Info
                  </button>
                  <button type="button" className="btn btn-light me-1">
                    Light
                  </button>
                  <button type="button" className="btn btn-dark me-1">
                    Dark
                  </button>
                  <button type="button" className="btn btn-link me-1">
                    Link
                  </button>
                  <hr />
                  <h5 className="card-title">Button Sizes</h5>
                  <p>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg me-1"
                    >
                      Primary
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-lg me-1"
                    >
                      Secondary
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-lg me-1"
                    >
                      Success
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-lg me-1"
                    >
                      Danger
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-lg me-1"
                    >
                      Warning
                    </button>
                    <button type="button" className="btn btn-info btn-lg me-1">
                      Info
                    </button>
                    <button type="button" className="btn btn-light btn-lg me-1">
                      Light
                    </button>
                    <button type="button" className="btn btn-dark btn-lg me-1">
                      Dark
                    </button>
                  </p>
                  <p>
                    <button type="button" className="btn btn-primary me-1">
                      Primary
                    </button>
                    <button type="button" className="btn btn-secondary me-1">
                      Secondary
                    </button>
                    <button type="button" className="btn btn-success me-1">
                      Success
                    </button>
                    <button type="button" className="btn btn-danger me-1">
                      Danger
                    </button>
                    <button type="button" className="btn btn-warning me-1">
                      Warning
                    </button>
                    <button type="button" className="btn btn-info me-1">
                      Info
                    </button>
                    <button type="button" className="btn btn-light me-1">
                      Light
                    </button>
                    <button type="button" className="btn btn-dark me-1">
                      Dark
                    </button>
                  </p>
                  <p>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm me-1"
                    >
                      Primary
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm me-1"
                    >
                      Secondary
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-sm me-1"
                    >
                      Success
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm me-1"
                    >
                      Danger
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-sm me-1"
                    >
                      Warning
                    </button>
                    <button type="button" className="btn btn-info btn-sm me-1">
                      Info
                    </button>
                    <button type="button" className="btn btn-light btn-sm me-1">
                      Light
                    </button>
                    <button type="button" className="btn btn-dark btn-sm me-1">
                      Dark
                    </button>
                  </p>
                  <hr />
                  <h5 className="card-title">Button Groups</h5>
                  <div className="btn-toolbar">
                    <div className="btn-group btn-group-lg">
                      <button type="button" className="btn btn-primary me-1">
                        Left
                      </button>
                      <button type="button" className="btn btn-primary me-1">
                        Middle
                      </button>
                      <button type="button" className="btn btn-primary me-1">
                        Right
                      </button>
                    </div>
                  </div>
                  <br />
                  <div className="btn-toolbar">
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary me-1">
                        Left
                      </button>
                      <button type="button" className="btn btn-primary me-1">
                        Middle
                      </button>
                      <button type="button" className="btn btn-primary me-1">
                        Right
                      </button>
                    </div>
                  </div>
                  <br />
                  <div className="btn-toolbar">
                    <div className="btn-group btn-group-sm">
                      <button type="button" className="btn btn-primary me-1">
                        Left
                      </button>
                      <button type="button" className="btn btn-primary me-1">
                        Middle
                      </button>
                      <button type="button" className="btn btn-primary me-1">
                        Right
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Rounded Button --> */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Rounded Button</h5>
                  <p className="card-text">
                    use <code>.btn-rounded</code> in className <code>.btn</code>{" "}
                    className to get Rounded button
                  </p>
                </div>
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-rounded btn-primary me-1"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-secondary me-1"
                  >
                    Secondary
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-success me-1"
                  >
                    Success
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-danger me-1"
                  >
                    Danger
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-warning me-1"
                  >
                    Warning
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-info me-1"
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-light me-1"
                  >
                    Light
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-dark me-1"
                  >
                    Dark
                  </button>
                  <hr />
                  <p>
                    use <code>.btn-rounded</code> in className{" "}
                    <code>.btn-outline-*</code> className to get Rounded Outline
                    button
                  </p>
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-primary me-1"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-secondary me-1"
                  >
                    Secondary
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-success me-1"
                  >
                    Success
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-danger me-1"
                  >
                    Danger
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-warning me-1"
                  >
                    Warning
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-info me-1"
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-light me-1"
                  >
                    Light
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-dark me-1"
                  >
                    Dark
                  </button>
                </div>
              </div>
              {/* <!-- /Rounded Button --> */}

              {/* <!-- Outline Buttons --> */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Outline Buttons</h5>
                  <p className="card-text">
                    Use <code>.btn-outline-*</code> className for outline
                    buttons.
                  </p>
                </div>
                <div className="card-body">
                  <div className="row row-sm align-items-center">
                    <div className="col-12 col-xl mb-3">Normal</div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn w-100 btn-outline-primary me-1"
                      >
                        Primary
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn w-100 btn-outline-secondary me-1"
                      >
                        Secondary
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn w-100 btn-outline-success me-1"
                      >
                        Success
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn w-100 btn-outline-warning me-1"
                      >
                        Warning
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn w-100 btn-outline-danger me-1"
                      >
                        Danger
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn w-100 btn-outline-info me-1"
                      >
                        Info
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn w-100 btn-outline-light me-1"
                      >
                        Light
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn w-100 btn-outline-dark me-1"
                      >
                        Dark
                      </button>
                    </div>
                  </div>
                  <div className="row row-sm align-items-center mt-3">
                    <div className="col-12 col-xl mb-3">Active</div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn w-100 btn-outline-primary active me-1"
                      >
                        Primary
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn w-100 btn-outline-secondary active me-1"
                      >
                        Secondary
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn w-100 btn-outline-success active me-1"
                      >
                        Success
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn w-100 btn-outline-warning active me-1"
                      >
                        Warning
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn w-100 btn-outline-danger active me-1"
                      >
                        Danger
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn w-100 btn-outline-info active me-1"
                      >
                        Info
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn w-100 btn-outline-light active me-1"
                      >
                        Light
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn w-100 btn-outline-dark active me-1"
                      >
                        Dark
                      </button>
                    </div>
                  </div>
                  <div className="row row-sm align-items-center mt-3">
                    <div className="col-12 col-xl mb-3">Disabled</div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        disabled=""
                        type="button"
                        className="btn w-100 btn-outline-primary me-1"
                      >
                        Primary
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        disabled=""
                        type="button"
                        className="btn w-100 btn-outline-secondary me-1"
                      >
                        Secondary
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        disabled=""
                        type="button"
                        className="btn w-100 btn-outline-success me-1"
                      >
                        Success
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        disabled=""
                        type="button"
                        className="btn w-100 btn-outline-warning me-1"
                      >
                        Warning
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        disabled=""
                        type="button"
                        className="btn w-100 btn-outline-danger me-1"
                      >
                        Danger
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        disabled=""
                        type="button"
                        className="btn w-100 btn-outline-info me-1"
                      >
                        Info
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        disabled=""
                        type="button"
                        className="btn w-100 btn-outline-light me-1"
                      >
                        Light
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        disabled=""
                        type="button"
                        className="btn w-100 btn-outline-dark me-1"
                      >
                        Dark
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Outline Buttons --> */}

              {/* <!-- Progress Button --> */}
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="card-title">Progress Button</h5>
                </div>
                <div className="card-body">
                  <button type="button" className="btn btn-primary me-1">
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>
                    Primary
                  </button>
                  <button type="button" className="btn btn-secondary me-1">
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>
                    Secondary
                  </button>
                  <button type="button" className="btn btn-success me-1">
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>
                    Success
                  </button>
                  <button type="button" className="btn btn-danger me-1">
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>
                    Danger
                  </button>
                  <button type="button" className="btn btn-warning me-1">
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>
                    Warning
                  </button>
                  <button type="button" className="btn btn-info me-1">
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>
                    Info
                  </button>
                  <button type="button" className="btn btn-dark me-1">
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>
                    Dark
                  </button>
                </div>
              </div>
              {/* <!-- /Progress Button --> */}
            </section>
            {/* <!-- Buttons --> */}
            {/* <!-- Cards --> */}
            <section className="comp-section comp-cards">
              <div className="section-header">
                <h3 className="section-title">Cards</h3>
                <div className="line"></div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <img
                      alt="Card Image"
                      src={img01}
                      className="card-img-top"
                    />
                    <div className="card-header">
                      <h5 className="card-title mb-0">
                        Card with image and links
                      </h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                      </p>
                      <Link className="card-link" to="#">
                        Card link
                      </Link>
                      <Link className="card-link" to="#">
                        Another link
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <img
                      alt="Card Image"
                      src={img01}
                      className="card-img-top"
                    />
                    <div className="card-header">
                      <h5 className="card-title mb-0">
                        Card with image and button
                      </h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                      </p>
                      <Link className="btn btn-primary" to="#">
                        Go somewhere
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <img
                      alt="Card Image"
                      src={img01}
                      className="card-img-top"
                    />
                    <div className="card-header">
                      <h5 className="card-title mb-0">
                        Card with image and list
                      </h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Cras justo odio</li>
                      <li className="list-group-item">
                        Dapibus ac facilisis in
                      </li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Card with links</h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                      </p>
                      <Link className="card-link" to="#">
                        Card link
                      </Link>
                      <Link className="card-link" to="#">
                        Another link
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Card with button</h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                      </p>
                      <Link className="btn btn-primary" to="#">
                        Go somewhere
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Card with list</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Cras justo odio</li>
                      <li className="list-group-item">
                        Dapibus ac facilisis in
                      </li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">This is my header</div>
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                      </p>
                    </div>
                    <div className="card-footer text-muted">
                      This is my footer
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <ul
                        role="tablist"
                        className="nav nav-tabs card-header-tabs float-right"
                      >
                        <li className="nav-item">
                          <Link
                            to="#tab-1"
                            data-bs-toggle="tab"
                            className="nav-link active"
                          >
                            Active
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#tab-2"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Link
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#tab-3"
                            data-bs-toggle="tab"
                            className="nav-link disabled"
                          >
                            Disabled
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <div className="tab-content pt-0">
                        <div
                          role="tabpanel"
                          id="tab-1"
                          className="tab-pane fade show active"
                        >
                          <h5 className="card-title">Card with tabs</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the cards content.
                          </p>
                          <Link className="btn btn-primary" to="#">
                            Go somewhere
                          </Link>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-2"
                          className="tab-pane fade text-center"
                        >
                          <h5 className="card-title">Card with tabs</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the cards content.
                          </p>
                          <Link className="btn btn-primary" to="#">
                            Go somewhere
                          </Link>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-3"
                          className="tab-pane fade"
                        >
                          <h5 className="card-title">Card with tabs</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the cards content.
                          </p>
                          <Link className="btn btn-primary" to="#">
                            Go somewhere
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <ul
                        role="tablist"
                        className="nav nav-pills card-header-pills float-right"
                      >
                        <li className="nav-item">
                          <Link
                            to="#tab-4"
                            data-bs-toggle="tab"
                            className="nav-link active"
                          >
                            Active
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#tab-5"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Link
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#tab-6"
                            data-bs-toggle="tab"
                            className="nav-link disabled"
                          >
                            Disabled
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <div className="tab-content pt-0">
                        <div
                          role="tabpanel"
                          id="tab-4"
                          className="tab-pane fade show active"
                        >
                          <h5 className="card-title">Card with pills</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the cards content.
                          </p>
                          <Link className="btn btn-primary" to="#">
                            Go somewhere
                          </Link>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-5"
                          className="tab-pane fade text-center"
                        >
                          <h5 className="card-title">Card with pills</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the cards content.
                          </p>
                          <Link className="btn btn-primary" to="#">
                            Go somewhere
                          </Link>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-6"
                          className="tab-pane fade"
                        >
                          <h5 className="card-title">Card with pills</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the cards content.
                          </p>
                          <Link className="btn btn-primary" to="#">
                            Go somewhere
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- /Cards --> */}
            {/* <!-- Dropdowns --> */}
            <section className="comp-section comp-dropdowns">
              <div className="section-header">
                <h3 className="section-title">Dropdowns</h3>
                <div className="line"></div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Dropdowns within Text</h5>
                  <div className="dropdown">
                    <Link
                      className="dropdown-toggle"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      Dropdown{" "}
                    </Link>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                    </div>
                  </div>
                  <hr />
                  <h5 className="card-title">Dropdowns within Buttons</h5>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle me-1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="#">
                        Separated link
                      </Link>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-secondary dropdown-toggle me-1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="#">
                        Separated link
                      </Link>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-info dropdown-toggle me-1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="#">
                        Separated link
                      </Link>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-success dropdown-toggle me-1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="#">
                        Separated link
                      </Link>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-warning dropdown-toggle me-1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="#">
                        Separated link
                      </Link>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-danger dropdown-toggle me-1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="#">
                        Separated link
                      </Link>
                    </div>
                  </div>
                  <hr />
                  <h5 className="card-title">Split button dropdowns</h5>
                  <div className="btn-group me-1">
                    <button type="button" className="btn btn-primary">
                      Action
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="#">
                        Separated link
                      </Link>
                    </div>
                  </div>
                  <div className="btn-group me-1">
                    <button type="button" className="btn btn-secondary">
                      Action
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="#">
                        Separated link
                      </Link>
                    </div>
                  </div>
                  <div className="btn-group me-1">
                    <button type="button" className="btn btn-info">
                      Action
                    </button>
                    <button
                      type="button"
                      className="btn btn-info dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="#">
                        Separated link
                      </Link>
                    </div>
                  </div>
                  <div className="btn-group me-1">
                    <button type="button" className="btn btn-success">
                      Action
                    </button>
                    <button
                      type="button"
                      className="btn btn-success dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="#">
                        Separated link
                      </Link>
                    </div>
                  </div>
                  <div className="btn-group me-1">
                    <button type="button" className="btn btn-warning">
                      Action
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="#">
                        Separated link
                      </Link>
                    </div>
                  </div>
                  <div className="btn-group me-1">
                    <button type="button" className="btn btn-danger">
                      Action
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="#">
                        Separated link
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- /Dropdowns --> */}
            {/* <!-- Pagination --> */}
            <section className="comp-section">
              <div className="section-header">
                <h3 className="section-title">Pagination</h3>
                <div className="line"></div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div>
                    <ul className="pagination mb-4">
                      <li className="page-item disabled">
                        <Link className="page-link" to="#" tabIndex="-1">
                          Previous
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          2 <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pagination mb-4">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">&laquo;</span>
                          <span className="sr-only">Previous</span>
                        </Link>
                      </li>
                      <li className="page-item">
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
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                          <span className="sr-only">Next</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pagination pagination-lg mb-4">
                      <li className="page-item disabled">
                        <Link className="page-link" to="#" tabIndex="-1">
                          Previous
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          2 <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul className="pagination pagination-sm mb-0">
                      <li className="page-item disabled">
                        <Link className="page-link" to="#" tabIndex="-1">
                          Previous
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          2 <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- /Pagination --> */}
            {/* Progress */}
            <section className="comp-section">
              <div className="section-header">
                <h3 className="section-title">Progress</h3>
                <div className="line" />
              </div>
              <div className="progress-example card">
                <div className="card-header">
                  <h5 className="card-title">Large Progress Bars</h5>
                </div>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div className="progress progress-lg">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "10%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-lg">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-lg">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-lg">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-lg">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress progress-lg">
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-lg">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-lg">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-lg">
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-lg">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress-example card">
                <div className="card-header">
                  <h5 className="card-title">Default Progress Bars</h5>
                </div>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress-example card">
                <div className="card-header">
                  <h5 className="card-title">Medium Progress Bars</h5>
                </div>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "10%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress progress-md">
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-md">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-md">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-md">
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-md">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress-example card">
                <div className="card-header">
                  <h5 className="card-title">Small Progress Bars</h5>
                </div>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "10%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress-example card">
                <div className="card-header">
                  <h5 className="card-title">Extra Small Progress Bars</h5>
                </div>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar w-75"
                            role="progressbar"
                            style={{ width: "10%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Progress */}
            {/* Tabs */}
            <section className="comp-section">
              <div className="section-header">
                <h3 className="section-title">Tabs</h3>
                <div className="line" />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Basic tabs</h5>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            to="#basictab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#basictab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#basictab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </Link>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane show active" id="basictab1">
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="basictab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="basictab3">
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Basic justified tabs</h5>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-justified">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            to="#basic-justified-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#basic-justified-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </Link>
                        </li>
                        <li className="nav-item dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle nav-link"
                            data-bs-toggle="dropdown"
                          >
                            Dropdown
                          </Link>
                          <div className="dropdown-menu dropdown-menu-right">
                            <Link
                              className="dropdown-item"
                              to="#basic-justified-tab3"
                              data-bs-toggle="tab"
                            >
                              Dropdown 1
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#basic-justified-tab4"
                              data-bs-toggle="tab"
                            >
                              Dropdown 2
                            </Link>
                          </div>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane show active"
                          id="basic-justified-tab1"
                        >
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="basic-justified-tab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="basic-justified-tab3">
                          Tab content 3
                        </div>
                        <div className="tab-pane" id="basic-justified-tab4">
                          Tab content 4
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Top line tabs</h5>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-tabs-top">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            to="#top-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#top-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#top-tab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </Link>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane show active" id="top-tab1">
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="top-tab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="top-tab3">
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Top line justified</h5>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-tabs-top nav-justified">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            to="#top-justified-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#top-justified-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#top-justified-tab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </Link>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane show active"
                          id="top-justified-tab1"
                        >
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="top-justified-tab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="top-justified-tab3">
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Bottom line tabs</h5>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-tabs-bottom">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            to="#bottom-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#bottom-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#bottom-tab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </Link>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane show active" id="bottom-tab1">
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="bottom-tab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="bottom-tab3">
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Bottom line justified</h5>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            to="#bottom-justified-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#bottom-justified-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#bottom-justified-tab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </Link>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane show active"
                          id="bottom-justified-tab1"
                        >
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="bottom-justified-tab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="bottom-justified-tab3">
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Solid tabs</h5>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-tabs-solid">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            to="#solid-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#solid-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#solid-tab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </Link>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane show active" id="solid-tab1">
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="solid-tab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="solid-tab3">
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Solid justified</h5>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            to="#solid-justified-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#solid-justified-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#solid-justified-tab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </Link>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane show active"
                          id="solid-justified-tab1"
                        >
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="solid-justified-tab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="solid-justified-tab3">
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Solid Rounded</h5>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            to="#solid-rounded-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#solid-rounded-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#solid-rounded-tab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </Link>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane show active"
                          id="solid-rounded-tab1"
                        >
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="solid-rounded-tab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="solid-rounded-tab3">
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Rounded justified</h5>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            to="#solid-rounded-justified-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#solid-rounded-justified-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#solid-rounded-justified-tab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </Link>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane show active"
                          id="solid-rounded-justified-tab1"
                        >
                          Tab content 1
                        </div>
                        <div
                          className="tab-pane"
                          id="solid-rounded-justified-tab2"
                        >
                          Tab content 2
                        </div>
                        <div
                          className="tab-pane"
                          id="solid-rounded-justified-tab3"
                        >
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Tabs */}
            {/* Typography */}
            <section className="comp-section">
              <div className="section-header">
                <h3 className="section-title">Typography</h3>
                <div className="line" />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Headings</h5>
                    </div>
                    <div className="card-body">
                      <h1>h1. Bootstrap heading</h1>
                      <h2>h2. Bootstrap heading</h2>
                      <h3>h3. Bootstrap heading</h3>
                      <h4>h4. Bootstrap heading</h4>
                      <h5>h5. Bootstrap heading</h5>
                      <h6>h6. Bootstrap heading</h6>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Blockquotes</h5>
                    </div>
                    <div className="card-body">
                      <blockquote>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat a ante.
                        </p>
                      </blockquote>
                      <blockquote className="blockquote mb-0">
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat a ante.
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title">Text element</h5>
                    </div>
                    <div className="card-body">
                      <p>
                        You can use the mark tag to <mark>highlight</mark> text.
                      </p>
                      <p>
                        <del>
                          This line of text is meant to be treated as deleted
                          text.
                        </del>
                      </p>
                      <p>
                        <s>
                          This line of text is meant to be treated as no longer
                          accurate.
                        </s>
                      </p>
                      <p>
                        <ins>
                          This line of text is meant to be treated as an
                          addition to the document.
                        </ins>
                      </p>
                      <p>
                        <u>This line of text will render as underlined</u>
                      </p>
                      <p>
                        <small>
                          This line of text is meant to be treated as fine
                          print.
                        </small>
                      </p>
                      <p>
                        <strong>This line rendered as bold text.</strong>
                      </p>
                      <p>
                        <em>This line rendered as italicized text.</em>
                      </p>
                      <p className="text-monospace mb-0">
                        This is in monospace
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title">Coloured Link</h5>
                    </div>
                    <div className="card-body">
                      <p className="text-primary">.text-primary</p>
                      <p className="text-secondary">.text-secondary</p>
                      <p className="text-success">.text-success</p>
                      <p className="text-danger">.text-danger</p>
                      <p className="text-warning">.text-warning</p>
                      <p className="text-info">.text-info</p>
                      <p className="text-light bg-dark">.text-light</p>
                      <p className="text-dark">.text-dark</p>
                      <p className="text-muted">.text-muted</p>
                      <p className="text-white bg-dark mb-0">.text-white</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title">Coloured text</h5>
                    </div>
                    <div className="card-body">
                      <p>
                        <Link to="#" className="text-primary">
                          Primary link
                        </Link>
                      </p>
                      <p>
                        <Link to="#" className="text-secondary">
                          Secondary link
                        </Link>
                      </p>
                      <p>
                        <Link to="#" className="text-success">
                          Success link
                        </Link>
                      </p>
                      <p>
                        <Link to="#" className="text-danger">
                          Danger link
                        </Link>
                      </p>
                      <p>
                        <Link to="#" className="text-warning">
                          Warning link
                        </Link>
                      </p>
                      <p>
                        <Link to="#" className="text-info">
                          Info link
                        </Link>
                      </p>
                      <p>
                        <Link to="#" className="text-light bg-dark">
                          Light link
                        </Link>
                      </p>
                      <p>
                        <Link to="#" className="text-dark">
                          Dark link
                        </Link>
                      </p>
                      <p>
                        <Link to="#" className="text-muted">
                          Muted link
                        </Link>
                      </p>
                      <p>
                        <Link to="#" className="text-white bg-dark mb-0">
                          White link
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title">Bullet Lists</h5>
                    </div>
                    <div className="card-body">
                      <ul className="mb-0 bullets">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>
                          Nulla volutpat aliquam velit
                          <ul>
                            <li>Phasellus iaculis neque</li>
                            <li>Purus sodales ultricies</li>
                            <li>Vestibulum laoreet porttitor sem</li>
                            <li>Ac tristique libero volutpat at</li>
                          </ul>
                        </li>
                        <li>Faucibus porta lacus fringilla vel</li>
                        <li>Aenean sit amet erat nunc</li>
                        <li>Eget porttitor lorem</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title">Bullet Lists</h5>
                    </div>
                    <div className="card-body">
                      <ol className="mb-0">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>
                          Nulla volutpat aliquam velit
                          <ul>
                            <li>Phasellus iaculis neque</li>
                            <li>Purus sodales ultricies</li>
                            <li>Vestibulum laoreet porttitor sem</li>
                            <li>Ac tristique libero volutpat at</li>
                          </ul>
                        </li>
                        <li>Faucibus porta lacus fringilla vel</li>
                        <li>Aenean sit amet erat nunc</li>
                        <li>Eget porttitor lorem</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title">Unstyled Lists</h5>
                    </div>
                    <div className="card-body">
                      <ul className="list-unstyled mb-0">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>
                          Nulla volutpat aliquam velit
                          <ul>
                            <li>Phasellus iaculis neque</li>
                            <li>Purus sodales ultricies</li>
                            <li>Vestibulum laoreet porttitor sem</li>
                            <li>Ac tristique libero volutpat at</li>
                          </ul>
                        </li>
                        <li>Faucibus porta lacus fringilla vel</li>
                        <li>Aenean sit amet erat nunc</li>
                        <li>Eget porttitor lorem</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Typography */}
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default Components;
