import React, { Component } from "react";

import { Dropdown } from "react-bootstrap";

const SideMenu =()=> {


    return (
      <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
        
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            onClick={() => document.body.classList.toggle("sidebar-icon-only")}
          >
            <i className="mdi mdi-menu"></i>
          </button>
          <ul className="navbar-nav navbar-nav-left header-links">
            <li className="nav-item d-none d-md-flex">
              <Link
                to="!#"
                onClick={(evt) => evt.preventDefault()}
                className="nav-link"
              >
                Schedule <span className="badge badge-primary ms-1">New</span>
              </Link>
            </li>
            <li className="nav-item active d-none d-xl-flex">
              <Link
                to="!#"
                onClick={(evt) => evt.preventDefault()}
                className="nav-link"
              >
                <i className="mdi mdi-elevation-rise"></i>Reports
              </Link>
            </li>
            <li className="nav-item d-none d-lg-flex">
              <Link
                to="!#"
                onClick={(evt) => evt.preventDefault()}
                className="nav-link"
              >
                <i className="mdi mdi-bookmark-plus-outline"></i>Score
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right ms-lg-auto">
            <li className="nav-item  nav-profile border-0">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                  <i className="mdi mdi-file-outline"></i>
                  <span className="count">7</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown preview-list">
                  <Dropdown.Item
                    className="dropdown-item  d-flex align-items-center"
                    to="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <p className="mb-0 font-weight-medium float-start">
                      You have 7 unread mails{" "}
                    </p>
                    <span className="badge rounded-pill badge-primary float-end">
                      View all
                    </span>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center"
                    to="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail"></div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">
                        Marian Garner{" "}
                      </p>
                      <p className="font-weight-light small-text">
                        {" "}
                        The meeting is cancelled{" "}
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center"
                    to="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail"></div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">
                        David Grey{" "}
                      </p>
                      <p className="font-weight-light small-text">
                        {" "}
                        The meeting is cancelled{" "}
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center"
                    to="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail"></div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">
                        Travis Jenkins{" "}
                      </p>
                      <p className="font-weight-light small-text">
                        {" "}
                        The meeting is cancelled{" "}
                      </p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item  nav-profile border-0 pl-4">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                  <i className="mdi mdi-bell-outline"></i>
                  <span className="count bg-success">4</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown preview-list">
                  <Dropdown.Item
                    className="dropdown-item py-3 d-flex align-items-center"
                    to="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <p className="mb-0 font-weight-medium float-start">
                      You have 4 new notifications{" "}
                    </p>
                    <span className="badge rounded-pill badge-primary float-end">
                      View all
                    </span>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center"
                    to="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-alert m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content py-2">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">
                        Application Error
                      </h6>
                      <p className="font-weight-light small-text mb-0">
                        {" "}
                        Just now{" "}
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center"
                    to="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-settings m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content py-2">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">
                        Settings
                      </h6>
                      <p className="font-weight-light small-text mb-0">
                        {" "}
                        Private message{" "}
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center"
                    to="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-airballoon m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content py-2">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">
                        New user registration
                      </h6>
                      <p className="font-weight-light small-text mb-0">
                        {" "}
                        2 days ago{" "}
                      </p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item  nav-profile border-0">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator bg-transparent">
                  <span className="profile-text">Richard V.Welsh !</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown pb-3">
                  <Dropdown.Item
                    className="dropdown-item p-0 preview-item d-flex align-items-center border-bottom"
                    to="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline me-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline me-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check me-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center border-0 mt-2"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    Manage Accounts
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center border-0"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    Change Password
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center border-0"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    Check Inbox
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center border-0"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            onClick={toggleOffcanvas}
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }


export default SideMenu;
