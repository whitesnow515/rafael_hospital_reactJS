import React from "react";
import { Link } from "react-router-dom";
const Slot = () => {
  return (
    <>
      <div className="hours-info">
        <div className="row form-row hours-cont">
          <div className="col-12 col-md-10">
            <div className="row form-row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Start Time</label>
                  <select className="form-select form-control">
                    <option>-</option>
                    <option selected>12.00 am</option>
                    <option>12.30 am</option>
                    <option>1.00 am</option>
                    <option>1.30 am</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>End Time</label>
                  <select className="form-select form-control">
                    <option>-</option>
                    <option>12.00 am</option>
                    <option selected>12.30 am</option>
                    <option>1.00 am</option>
                    <option>1.30 am</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row form-row hours-cont">
          <div className="col-12 col-md-10">
            <div className="row form-row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Start Time</label>
                  <select className="form-select form-control">
                    <option>-</option>
                    <option>12.00 am</option>
                    <option selected>12.30 am</option>
                    <option>1.00 am</option>
                    <option>1.30 am</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>End Time</label>
                  <select className="form-select form-control">
                    <option>-</option>
                    <option>12.00 am</option>
                    <option>12.30 am</option>
                    <option selected>1.00 am</option>
                    <option>1.30 am</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2">
            <label className="d-md-block d-sm-none d-none">&nbsp;</label>
            <Link to="#" className="btn btn-danger trash">
              <i className="far fa-trash-alt"></i>
            </Link>
          </div>
        </div>

        <div className="row form-row hours-cont">
          <div className="col-12 col-md-10">
            <div className="row form-row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Start Time</label>
                  <select className="form-select form-control">
                    <option>-</option>
                    <option>12.00 am</option>
                    <option>12.30 am</option>
                    <option selected>1.00 am</option>
                    <option>1.30 am</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>End Time</label>
                  <select className="form-select form-control">
                    <option>-</option>
                    <option>12.00 am</option>
                    <option>12.30 am</option>
                    <option>1.00 am</option>
                    <option selected>1.30 am</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2">
            <label className="d-md-block d-sm-none d-none">&nbsp;</label>
            <Link to="#" className="btn btn-danger trash">
              <i className="far fa-trash-alt"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="add-more mb-3">
        <Link to="#" className="add-hours">
          <i className="fa fa-plus-circle"></i> Add More
        </Link>
      </div>
    </>
  );
};

export default Slot;
