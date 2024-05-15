import React from "react";

const Buttons = () => {
  return (
    <section className="comp-section comp-buttons">
      <div className="comp-header">
        <h3 className="comp-title">Buttons</h3>
        <div className="line" />
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Default Button</h4>
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
          <h4 className="card-title">Button Sizes</h4>
          <p>
            <button type="button" className="btn btn-primary btn-lg me-1">
              Primary
            </button>
            <button type="button" className="btn btn-secondary btn-lg me-1">
              Secondary
            </button>
            <button type="button" className="btn btn-success btn-lg me-1">
              Success
            </button>
            <button type="button" className="btn btn-danger btn-lg me-1">
              Danger
            </button>
            <button type="button" className="btn btn-warning btn-lg me-1">
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
            <button type="button" className="btn btn-primary btn-sm">
              Primary
            </button>
            <button type="button" className="btn btn-secondary btn-sm">
              Secondary
            </button>
            <button type="button" className="btn btn-success btn-sm">
              Success
            </button>
            <button type="button" className="btn btn-danger btn-sm">
              Danger
            </button>
            <button type="button" className="btn btn-warning btn-sm">
              Warning
            </button>
            <button type="button" className="btn btn-info btn-sm">
              Info
            </button>
            <button type="button" className="btn btn-light btn-sm">
              Light
            </button>
            <button type="button" className="btn btn-dark btn-sm">
              Dark
            </button>
          </p>
          <hr />
          <h4 className="card-title">Button Groups</h4>
          <div className="btn-toolbar">
            <div className="btn-group btn-group-lg">
              <button type="button" className="btn btn-primary">
                Left
              </button>
              <button type="button" className="btn btn-primary">
                Middle
              </button>
              <button type="button" className="btn btn-primary">
                Right
              </button>
            </div>
          </div>
          <br />
          <div className="btn-toolbar">
            <div className="btn-group">
              <button type="button" className="btn btn-primary">
                Left
              </button>
              <button type="button" className="btn btn-primary">
                Middle
              </button>
              <button type="button" className="btn btn-primary">
                Right
              </button>
            </div>
          </div>
          <br />
          <div className="btn-toolbar">
            <div className="btn-group btn-group-sm">
              <button type="button" className="btn btn-primary">
                Left
              </button>
              <button type="button" className="btn btn-primary">
                Middle
              </button>
              <button type="button" className="btn btn-primary">
                Right
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Rounded Button */}
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Rounded Button</h4>
          <p className="card-text">
            use <code>.btn-rounded</code> in class <code>.btn</code> class to
            get Rounded button
          </p>
        </div>
        <div className="card-body">
          <button type="button" className="btn btn-rounded btn-primary me-1">
            Primary
          </button>
          <button type="button" className="btn btn-rounded btn-secondary me-1">
            Secondary
          </button>
          <button type="button" className="btn btn-rounded btn-success me-1">
            Success
          </button>
          <button type="button" className="btn btn-rounded btn-danger me-1">
            Danger
          </button>
          <button type="button" className="btn btn-rounded btn-warning me-1">
            Warning
          </button>
          <button type="button" className="btn btn-rounded btn-info me-1">
            Info
          </button>
          <button type="button" className="btn btn-rounded btn-light me-1">
            Light
          </button>
          <button type="button" className="btn btn-rounded btn-dark me-1">
            Dark
          </button>
          <hr />
          <p>
            use <code>.btn-rounded</code> in class <code>.btn-outline-*</code>{" "}
            class to get Rounded Outline button
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
      {/* /Rounded Button */}
      {/* Outline Buttons */}
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Outline Buttons</h4>
          <p className="card-text">
            Use <code>.btn-outline-*</code> class for outline buttons.
          </p>
        </div>
        <div className="card-body">
          <div className="row row-sm align-items-center">
            <div className="col-12 col-xl mb-3 mb-xl-0">Normal</div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn btn-block w-100 btn-outline-primary"
              >
                Primary
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn btn-block w-100 btn-outline-secondary"
              >
                Secondary
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn btn-block w-100 btn-outline-success"
              >
                Success
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn btn-block w-100 btn-outline-warning"
              >
                Warning
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn btn-block w-100 btn-outline-danger"
              >
                Danger
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn btn-block w-100 btn-outline-info"
              >
                Info
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn btn-block w-100 btn-outline-light"
              >
                Light
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn btn-block w-100 btn-outline-dark"
              >
                Dark
              </button>
            </div>
          </div>
          <div className="row row-sm align-items-center mt-3">
            <div className="col-12 col-xl mb-3 mb-xl-0">Active</div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn btn-block w-100 btn-outline-primary active"
              >
                Primary
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn btn-block w-100 btn-outline-secondary active"
              >
                Secondary
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn btn-block w-100 btn-outline-success active"
              >
                Success
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn btn-block w-100 btn-outline-warning active"
              >
                Warning
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn btn-block w-100 btn-outline-danger active"
              >
                Danger
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn btn-block w-100 btn-outline-info active"
              >
                Info
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn btn-block w-100 btn-outline-light active"
              >
                Light
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn btn-block w-100 btn-outline-dark active"
              >
                Dark
              </button>
            </div>
          </div>
          <div className="row row-sm align-items-center mt-3">
            <div className="col-12 col-xl mb-3 mb-xl-0">Disabled</div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                disabled
                type="button"
                className="btn btn-block w-100 btn-outline-primary"
              >
                Primary
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                disabled
                type="button"
                className="btn btn-block w-100 btn-outline-secondary"
              >
                Secondary
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                disabled
                type="button"
                className="btn btn-block w-100 btn-outline-success"
              >
                Success
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                disabled
                type="button"
                className="btn btn-block w-100 btn-outline-warning"
              >
                Warning
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                disabled
                type="button"
                className="btn btn-block w-100 btn-outline-danger"
              >
                Danger
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                disabled
                type="button"
                className="btn btn-block w-100 btn-outline-info"
              >
                Info
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                disabled
                type="button"
                className="btn btn-block w-100 btn-outline-light"
              >
                Light
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                disabled
                type="button"
                className="btn btn-block w-100 btn-outline-dark"
              >
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Outline Buttons */}
    </section>
  );
};

export default Buttons;
