import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { sort } from "../imagepath";
import SidebarNav from "../sidebar";
// import { Modal, Button } from "react-bootstrap";
// import { icon } from "@fortawesome/fontawesome-svg-core";
import ProductcategoriesTable from "./ProductcategoriesTable";

const ProductCategories = () => {
  const [show1, setShow1] = useState(false);
  const toggleFilterMenu1 = () => {
    setShow1(!show1);
  };
  const config = "/react/template";
  return (
    <>
      <SidebarNav />
      {/* <!-- Page Wrapper --> */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* <!-- Page Header --> */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col-md-12 d-flex justify-content-end">
                <div className="doc-badge me-3">
                  Total Categories <span className="ms-1">48</span>
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
          {/* <!-- /Page Header --> */}

          {/* <!-- Product Category --> */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header border-bottom-0">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title">Categories</h5>
                    </div>
                    <div className="col-auto custom-list d-flex">
                      <div className="form-custom me-2">
                        <div
                          id="tableSearch"
                          className="dataTables_wrapper"
                        ></div>
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
                            <i>
                              {" "}
                              <FeatherIcon icon="chevron-down" />
                            </i>
                          </span>
                        </div>
                        <div
                          id="checkBox"
                          style={{ display: show1 ? "block" : "none" }}
                        >
                          <form action={`${config}admin/product-category`}>
                            <p className="lab-title">Order By </p>
                            <label className="custom_radio w-100">
                              <input type="radio" name="sort" />
                              <span className="checkmark"></span> ID
                            </label>
                            <label className="custom_radio w-100">
                              <input type="radio" name="sort" />
                              <span className="checkmark"></span> Amount
                            </label>
                            <label className="custom_radio w-100">
                              <input type="radio" name="sort" />
                              <span className="checkmark"></span> Date Created
                            </label>
                            <p className="lab-title">Sort By</p>
                            <label className="custom_radio w-100">
                              <input type="radio" name="sort" />
                              <span className="checkmark"></span> Ascending
                            </label>
                            <label className="custom_radio w-100">
                              <input type="radio" name="sort" />
                              <span className="checkmark"></span> Descending
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
                <ProductcategoriesTable />
              </div>

              <div id="tablepagination" className="dataTables_wrapper"></div>
            </div>
          </div>
          {/* <!-- /Product Category --> */}
        </div>
      </div>
      {/* <!-- /Page Wrapper --> */}

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
              <h3 className="mb-0">Add Category</h3>
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
              <form action={`${config.publicPath}admin/product-category`}>
                <div className="add-wrap">
                  <div className="form-group form-focus">
                    <input type="text" className="form-control floating" />
                    <label className="focus-label">
                      Category Name<span className="text-danger">*</span>
                    </label>
                  </div>
                  <label className="mb-1">Category Image</label>
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
                  <p className="text-success">
                    Successfully Product image.jpg uploaded
                  </p>
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
              <h3 className="mb-0">Edit Category</h3>
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
              <form action={`${config.publicPath}admin/product-category`}>
                <div className="add-wrap">
                  <div className="form-group form-focus">
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="Neuromodulation"
                    />
                    <label className="focus-label">
                      Category Name<span className="text-danger">*</span>
                    </label>
                  </div>
                  <label className="mb-1">Category Image</label>
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
                  <p className="text-success">
                    Successfully Product image.jpg uploaded
                  </p>
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
                <i>
                  <FeatherIcon icon="x-circle" />
                </i>
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
                <p>“Category”</p>
                <div className="submit-section">
                  <Link
                    to="/admin/product-category"
                    className="btn btn-success me-2"
                  >
                    Yes
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    No
                  </Link>
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

export default ProductCategories;
