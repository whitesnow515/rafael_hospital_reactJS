import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { sort } from "../imagepath";
import SidebarNav from "../sidebar";
// import { Modal, Button } from "react-bootstrap";
import PharmacyTableList from "./PharmacyTableList";
import SelectField from "../commoncomponent/selectfield";

const PharmacyList = () => {
  const [show1, setShow1] = useState(false);
  const toggleFilterMenu1 = () => {
    setShow1(!show1);
  };

  const [options] = useState([
    { label: "Select", value: "" },
    { label: "Select Category", value: "Select Category" },
    { label: "Pharmacy", value: "Pharmacy" },
    { label: "Hospital", value: "Hospital" },
  ]);
  const [setStateValue] = useState();
  const config = "/react/template";

  return (
    <>
      <SidebarNav />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col-md-12 d-flex justify-content-end">
                <div className="doc-badge me-3">
                  Total Pharmacies <span className="ms-1">48</span>
                </div>
                <Link
                  to="#"
                  className="btn btn-primary btn-add"
                  data-bs-toggle="modal"
                  data-bs-target="#addModal"
                >
                  <i className="me-1">
                    <FeatherIcon icon="plus-square" />
                  </i>{" "}
                  Add New
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Pharmacy List */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header border-bottom-0">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title">Pharmacy List</h5>
                    </div>
                    <div className="col-auto custom-list d-flex">
                      <div className="form-custom me-2">
                        <div id="tableSearch" className="dataTables_wrapper" />
                      </div>
                      <div className="SortBy">
                        <div className="selectBoxes order-by">
                          <p
                            className="mb-0"
                            onClick={() => toggleFilterMenu1()}
                          >
                            <img src={sort} className="me-2" alt="icon" /> Order
                            by{" "}
                          </p>
                          <span className="down-icon">
                            <i className="">
                              <FeatherIcon icon="chevron-down" />
                            </i>
                          </span>
                        </div>
                        <div
                          id="checkBox"
                          style={{ display: show1 ? "block" : "none" }}
                        >
                          <form action={`${config}admin/pharmacy-list`}>
                            <p className="lab-title">Order By </p>
                            <label className="custom_radio w-100">
                              <input type="radio" name="sort" />
                              <span className="checkmark" /> ID
                            </label>
                            <label className="custom_radio w-100">
                              <input type="radio" name="sort" />
                              <span className="checkmark" /> Date Created
                            </label>
                            <p className="lab-title">Sort By</p>
                            <label className="custom_radio w-100">
                              <input type="radio" name="sort" />
                              <span className="checkmark" /> Ascending
                            </label>
                            <label className="custom_radio w-100 mb-4">
                              <input type="radio" name="sort" />
                              <span className="checkmark" /> Descending
                            </label>
                            <button
                              type="submit"
                              className="btn w-100 btn-primary"
                            >
                              Apply
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <PharmacyTableList />
              </div>
              <div id="tablepagination" className="dataTables_wrapper" />
            </div>
          </div>
          {/* /Pharmacy List */}
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* <!-- Modal --> */}
      <div
        className="modal fade contentmodal"
        id="addModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content doctor-profile">
            <div className="modal-header">
              <h3 className="mb-0">Add Pharmacy</h3>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i>
                  <FeatherIcon icon="x-circle" />
                </i>
              </button>
            </div>
            <div className="modal-body">
              <form action={`${config.publicPath}admin/pharmacy-list`}>
                <div className="add-wrap">
                  <div className="form-group form-focus">
                    <input type="text" className="form-control floating" />
                    <label className="focus-label">
                      Pharmacy Name<span className="text-danger">*</span>
                    </label>
                  </div>
                  <SelectField
                    options={options}
                    errorMessage={""}
                    error={false}
                    label={false}
                    placeholder={"Pharmacy"}
                    isRequired={true}
                    onChangeValue={(value) => setStateValue(value?.value)}
                  />

                  <div className="form-group form-focus">
                    <input type="text" className="form-control floating" />
                    <label className="focus-label">
                      Pharmacy Address <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="change-photo-btn">
                    <div>
                      <i>
                        <FeatherIcon icon="upload" />
                      </i>
                      <p>Upload File</p>
                    </div>
                    <input type="file" className="upload" />
                    <span className="file-upload-text"></span>
                  </div>
                  <div className="form-group form-focus">
                    <input type="text" className="form-control floating" />
                    <label className="focus-label">
                      Administrator Name <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="form-group form-focus">
                    <input type="text" className="form-control floating" />
                    <label className="focus-label">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="submit-section">
                    <button type="submit" className="btn btn-primary btn-save">
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Modal --> */}

      {/* <!-- Modal --> */}
      <div
        className="modal fade contentmodal"
        id="editModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content doctor-profile">
            <div className="modal-header">
              <h3 className="mb-0">Edit Pharmacy</h3>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="">
                  <FeatherIcon icon="x-circle" />
                </i>
              </button>
            </div>
            <div className="modal-body">
              <form action={`${config.publicPath}admin/pharmacy-list`}>
                <div className="add-wrap">
                  <div className="form-group form-focus">
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="Community pharmacy"
                    />
                    <label className="focus-label">
                      Pharmacy Name<span className="text-danger">*</span>
                    </label>
                  </div>
                  <SelectField
                    options={options}
                    errorMessage={""}
                    error={false}
                    label={false}
                    placeholder={"Pharmacy"}
                    // isRequired={true}
                    onChangeValue={(value) => setStateValue(value?.value)}
                  />
                  <div className="form-group form-focus">
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="96 Red Hawk Road Cyrus, MN 56323 Nancy"
                    />
                    <label className="focus-label">
                      Pharmacy Address <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="change-photo-btn">
                    <div>
                      <i>
                        <FeatherIcon icon="upload" />
                      </i>
                      <p>Upload File</p>
                    </div>
                    <input type="file" className="upload" />
                    <span className="file-upload-text"></span>
                  </div>
                  <p className="file-name text-success">
                    Product image.jpg{" "}
                    <a href="#" className="text-danger">
                      <i>
                        <FeatherIcon icon="x" />
                      </i>
                    </a>
                  </p>
                  <div className="form-group form-focus">
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="Patinson"
                    />
                    <label className="focus-label">
                      Administrator Name <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="form-group form-focus">
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="8789904950"
                    />
                    <label className="focus-label">
                      Phone Name <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="submit-section">
                    <button type="submit" className="btn btn-primary btn-save">
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Modal --> */}

      {/* <!-- Modal --> */}
      <div
        className="modal fade contentmodal"
        id="deleteModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content doctor-profile">
            <div className="modal-header border-bottom-0 justify-content-end">
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <div className="del-icon">
                  <i>
                    <FeatherIcon icon="x-circle" />
                  </i>
                </div>
              </button>
            </div>
            <div className="modal-body">
              <div className="delete-wrap text-center">
                <div className="del-icon">
                  <i className="delete-icon">
                    <FeatherIcon icon="x-circle" />
                  </i>
                </div>
                <h2>Sure you Want to delete</h2>
                <p>“Pharmacy Name”</p>
                <div className="submit-section">
                  <Link
                    to="/admin/product-category"
                    className="btn btn-success me-2"
                  >
                    Yes
                  </Link>
                  <a
                    href="#"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    No
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Modal --> */}
    </>
  );
};

export default PharmacyList;
