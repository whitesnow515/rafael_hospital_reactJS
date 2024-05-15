/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Patient8, Patient2, Patient3 } from "./img";

const Avatar = () => {
  return (
    <>
      <section className="comp-section">
        <div className="comp-header">
          <h3 className="comp-title">Avatar</h3>
          <div className="line" />
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Sizing</h4>
              </div>
              <div className="card-body">
                <div className="avatar avatar-xxl me-1">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Patient8}
                  />
                </div>
                <div className="avatar avatar-xl me-1">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Patient8}
                  />
                </div>
                <div className="avatar avatar-lg me-1">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Patient8}
                  />
                </div>
                <div className="avatar me-1">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Patient8}
                  />
                </div>
                <div className="avatar avatar-sm me-1">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Patient8}
                  />
                </div>
                <div className="avatar avatar-xs me-1">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Patient8}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Avatar With Status</h4>
              </div>
              <div className="card-body">
                <div className="avatar avatar-online me-1">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Patient8}
                  />
                </div>
                <div className="avatar avatar-offline me-1">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Patient8}
                  />
                </div>
                <div className="avatar avatar-away me-1">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Patient8}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Shape</h4>
              </div>
              <div className="card-body">
                <div className="avatar me-1">
                  <img
                    className="avatar-img rounded"
                    alt="User Image"
                    src={Patient8}
                  />
                </div>
                <div className="avatar me-1">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Patient8}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Group</h4>
              </div>
              <div className="card-body">
                <div className="avatar-group">
                  <div className="avatar">
                    <img
                      className="avatar-img rounded-circle border border-white"
                      alt="User Image"
                      src={Patient8}
                    />
                  </div>
                  <div className="avatar">
                    <img
                      className="avatar-img rounded-circle border border-white"
                      alt="User Image"
                      src={Patient2}
                    />
                  </div>
                  <div className="avatar">
                    <img
                      className="avatar-img rounded-circle border border-white"
                      alt="User Image"
                      src={Patient3}
                    />
                  </div>
                  <div className="avatar">
                    <span className="avatar-title rounded-circle border border-white">
                      CF
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Avatar;
