/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { IMG01 } from "./img";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <section className="comp-section comp-cards">
      <div className="comp-header">
        <h3 className="comp-title">Cards</h3>
        <div className="line" />
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <div className="card flex-fill">
            <img alt="Card Image" src={IMG01} className="card-img-top" />
            <div className="card-header">
              <h5 className="card-title mb-0">Card with image and links</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
            <img alt="Card Image" src={IMG01} className="card-img-top" />
            <div className="card-header">
              <h5 className="card-title mb-0">Card with image and button</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link className="btn btn-primary" to="#">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <div className="card flex-fill">
            <img alt="Card Image" src={IMG01} className="card-img-top" />
            <div className="card-header">
              <h5 className="card-title mb-0">Card with image and list</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
              <li className="list-group-item">Dapibus ac facilisis in</li>
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="card-footer text-muted">This is my footer</div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <div className="card flex-fill">
            <div className="card-header">
              <ul
                role="tablist"
                className="nav nav-tabs card-header-tabs float-end"
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
                  <Link to="#tab-2" data-bs-toggle="tab" className="nav-link">
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link className="btn btn-primary" to="#">
                    Go somewhere
                  </Link>
                </div>
                <div role="tabpanel" id="tab-3" className="tab-pane fade">
                  <h5 className="card-title">Card with tabs</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                className="nav nav-pills card-header-pills float-end"
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
                  <Link to="#tab-5" data-bs-toggle="tab" className="nav-link">
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link className="btn btn-primary" to="#">
                    Go somewhere
                  </Link>
                </div>
                <div role="tabpanel" id="tab-6" className="tab-pane fade">
                  <h5 className="card-title">Card with pills</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
  );
};

export default Cards;
