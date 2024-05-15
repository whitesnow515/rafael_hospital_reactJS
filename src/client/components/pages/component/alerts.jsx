import React from "react";
import { Link } from "react-router-dom";

const Alerts = () => {
  return (
    <section className="comp-section">
      <div className="comp-header">
        <h3 className="comp-title">Alerts</h3>
        <div className="line" />
      </div>
      <div className="card">
        <div className="card-body">
          <div
            className="alert alert-primary alert-dismissible fade show"
            role="alert"
          >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div
            className="alert alert-secondary alert-dismissible fade show"
            role="alert"
          >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Warning!</strong> There was a problem with your{" "}
            <Link to="#" className="alert-link">
              network connection
            </Link>
            .
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>Error!</strong> A{" "}
            <Link to="#" className="alert-link">
              problem
            </Link>{" "}
            has been occurred while submitting your data.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>Success!</strong> Your{" "}
            <Link to="#" className="alert-link">
              message
            </Link>{" "}
            has been sent successfully.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div
            className="alert alert-info alert-dismissible fade show"
            role="alert"
          >
            <strong>Note!</strong> Please read the{" "}
            <Link to="#" className="alert-link">
              comments
            </Link>{" "}
            carefully.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div
            className="alert alert-light alert-dismissible fade show"
            role="alert"
          >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div
            className="alert alert-dark alert-dismissible fade show mb-0"
            role="alert"
          >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alerts;
