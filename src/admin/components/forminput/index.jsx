import React, { useState } from "react";
import SidebarNav from "../sidebar";
import { Link } from "react-router-dom";

const FormInput = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const [menu1, setMenu1] = useState(false);
  const toggleMenu1 = () => {
    setMenu1(!menu1);
  };
  return (
    <>
      <SidebarNav />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Input Groups</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Input Groups</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Form Input Groups */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Basic Examples</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Group Left
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1">
                            @
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Group Right
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                          <span className="input-group-text" id="basic-addon2">
                            @example.com
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        URL Example
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">https://</span>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Group with Price
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">$</span>
                          <input type="text" className="form-control" />
                          <span className="input-group-text">.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row mb-0">
                      <label className="col-form-label col-lg-2">
                        Group with Price (Left)
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">$</span>
                          <span className="input-group-text">0.00</span>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Sizing</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Input Group Default
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text" id="sizing-addon2">
                            @
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-describedby="sizing-addon2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Input Group Default
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text" id="sizing-addon2">
                            @
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-describedby="sizing-addon2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row mb-0">
                      <label className="col-form-label col-lg-2">
                        Input Group Small
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group input-group-sm">
                          <span className="input-group-text" id="sizing-addon3">
                            @
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-describedby="sizing-addon3"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Checkbox and Radio Addons</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Checkbox
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">
                            <input type="checkbox" />
                          </span>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row mb-0">
                      <label className="col-form-label col-lg-2">Radio</label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">
                            <input type="radio" />
                          </span>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Multiple Addons</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Radio and Text Addons
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">
                            <input type="checkbox" />
                          </span>
                          <span className="input-group-text">$</span>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row mb-0">
                      <label className="col-form-label col-lg-2">
                        Two Addons
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">$</span>
                          <span className="input-group-text">0.00</span>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Buttons with dropdowns</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">
                        Radio and Text Addons
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <button
                            type="button"
                            className={
                              menu
                                ? "btn btn-white dropdown-toggle show"
                                : "btn btn-white dropdown-toggle"
                            }
                            // className="btn btn-white dropdown-toggle"
                            data-bs-toggle="dropdown"
                            onClick={() => toggleMenu()}
                          >
                            Action
                          </button>
                          <div
                            className={
                              menu ? "dropdown-menu show" : "dropdown-menu"
                            }
                          >
                            {/* <div className="dropdown-menu " > */}
                            <Link
                              className="dropdown-item"
                              to="#"
                              onClick={() => toggleMenu()}
                            >
                              Action
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                              onClick={() => toggleMenu()}
                            >
                              Another action
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                              onClick={() => toggleMenu()}
                            >
                              Something else here
                            </Link>
                            <div
                              role="separator"
                              className="dropdown-divider"
                            />
                            <Link
                              className="dropdown-item"
                              to="#"
                              onClick={() => toggleMenu()}
                            >
                              Separated link
                            </Link>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Left dropdown"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row mb-0">
                      <label className="col-form-label col-lg-2">
                        Two Addons
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Right dropdown"
                          />
                          <button
                            type="button"
                            className={
                              menu1
                                ? "btn btn-white dropdown-toggle show"
                                : "btn btn-white dropdown-toggle"
                            }
                            data-bs-toggle="dropdown"
                            onClick={() => toggleMenu1()}
                          >
                            Action
                          </button>
                          <div
                            className={
                              menu1
                                ? "dropdown-menu dropdown-menu-end show"
                                : "dropdown-menu dropdown-menu-end"
                            }
                          >
                            {/* <div className="dropdown-menu dropdown-menu-end"> */}
                            <Link
                              className="dropdown-item"
                              to="#"
                              onClick={() => toggleMenu1()}
                            >
                              Action
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                              onClick={() => toggleMenu1()}
                            >
                              Another action
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                              onClick={() => toggleMenu1()}
                            >
                              Something else here
                            </Link>
                            <div
                              role="separator"
                              className="dropdown-divider"
                            />
                            <Link
                              className="dropdown-item"
                              to="#"
                              onClick={() => toggleMenu1()}
                            >
                              Separated link
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Form Input Groups */}
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};
export default FormInput;
