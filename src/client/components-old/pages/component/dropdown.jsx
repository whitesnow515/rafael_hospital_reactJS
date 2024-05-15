import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <section className="comp-section comp-dropdowns">
      <div className="comp-header">
        <h3 className="comp-title">Dropdowns</h3>
        <div className="line" />
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Dropdowns within Text</h4>
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
          <h4 className="card-title">Dropdowns within Buttons</h4>
          <div className="btn-group me-1">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
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
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="#">
                Separated link
              </Link>
            </div>
          </div>
          <div className="btn-group me-1">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
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
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="#">
                Separated link
              </Link>
            </div>
          </div>
          <div className="btn-group me-1">
            <button
              type="button"
              className="btn btn-info dropdown-toggle"
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
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="#">
                Separated link
              </Link>
            </div>
          </div>
          <div className="btn-group me-1">
            <button
              type="button"
              className="btn btn-success dropdown-toggle"
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
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="#">
                Separated link
              </Link>
            </div>
          </div>
          <div className="btn-group me-1">
            <button
              type="button"
              className="btn btn-warning dropdown-toggle"
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
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="#">
                Separated link
              </Link>
            </div>
          </div>
          <div className="btn-group me-1">
            <button
              type="button"
              className="btn btn-danger dropdown-toggle"
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
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="#">
                Separated link
              </Link>
            </div>
          </div>
          <hr />
          <h4 className="card-title">Split button dropdowns</h4>
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
              <div className="dropdown-divider" />
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
              <div className="dropdown-divider" />
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
              <div className="dropdown-divider" />
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
              <div className="dropdown-divider" />
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
            <div className="dropdown-menu me-1">
              <Link className="dropdown-item" to="#">
                Action
              </Link>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
              <div className="dropdown-divider" />
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
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="#">
                Separated link
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dropdown;
