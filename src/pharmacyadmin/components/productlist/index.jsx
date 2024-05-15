/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../../pharmacyadmin/components/paginationfunction";

const ProductList = () => {
  const data = [
    {
      ID: "#SP001",
      image: Productss,
      ProductName: "Benzaxapine Croplexlify",
      Price: "$100.00",
      Date: "12-05-2020",
    },
    {
      ID: "#SP002",
      image: Productss,
      ProductName: "Ombinazol Bonibamol",
      Price: "$200.00",
      Date: "12-05-2020",
    },
    {
      ID: "#SP003",
      image: Productss,
      ProductName: "Dantotate Dantodazole",
      Price: "$250.00",
      Date: "12-05-2020",
    },
    {
      ID: "#SP004",
      image: Productss,
      ProductName: "AbiliAlispirox Aerorenonefy",
      Price: "$150.00",
      Date: "12-05-2020",
    },
    {
      ID: "#SP005",
      image: Productss,
      ProductName: "Nitrolozin Zithrotropin",
      Price: "$350.00",
      Date: "12-05-2020",
    },
  ];
  const columns = [
    {
      title: "#",
      dataIndex: "ID",
      render: (text, record) => (
        <>
          <Link
            to="/pharmacyadmin/product-list"
            className="text-decoration-none text-primary"
          >
            {text}
          </Link>
        </>
      ),
      sorter: (a, b) => a.ID.length - b.ID.length,
    },
    {
      title: "ProductNamee",
      dataIndex: "ProductName",
      render: (text, record) => (
        <>
          <Link
            to="/pharmacyadmin/product-list"
            className="text-decoration-none text-primary"
          >
            {text}
          </Link>
        </>
      ),
      sorter: (a, b) => a.ProductName.length - b.ProductName.length,
    },
    {
      title: "Price",
      dataIndex: "Price",
      render: (text, record) => (
        <>
          <Link
            to="/pharmacyadmin/product-list"
            className="text-decoration-none text-primary"
          >
            {text}
          </Link>
        </>
      ),
      sorter: (a, b) => a.Price.length - b.Price.length,
    },

    {
      title: "Date",
      dataIndex: "Date",
      render: (text, record) => (
        <>
          <Link
            to="/pharmacyadmin/product-list"
            className="text-decoration-none text-primary"
          >
            {text}
          </Link>
        </>
      ),
      sorter: (a, b) => a.Date.length - b.Date.length,
    },

    {
      title: "Action",
      className: "text-end",
      dataIndex: "",
      render: (text, record) => (
        <div className="text-end">
          <div className="actions">
            <Link
              className="btn btn-sm bg-success-light"
              data-bs-toggle="modal"
              to="#edit_specialities_details"
            >
              <i className="fe fe-pencil"></i> Edit
            </Link>
            <Link
              data-bs-toggle="modal"
              to="#delete_modal"
              className="btn btn-sm bg-danger-light"
            >
              <i className="fe fe-trash"></i> Delete
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.star.length - b.star.length,
    },
  ];
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-7 col-auto">
            <h3 className="page-title">Product List</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/index">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Product List</li>
            </ul>
          </div>
          <div className="col-sm-5 col">
            <Link
              to="#Add_Specialities_details"
              data-bs-toggle="modal"
              className="btn btn-primary float-end mt-2"
            >
              Add
            </Link>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <Table
                  pagination={{
                    total: data.length,
                    showTotal: (total, range) =>
                      `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                    showSizeChanger: true,
                    onShowSizeChange: onShowSizeChange,
                    itemRender: itemRender,
                  }}
                  style={{ overflowX: "auto" }}
                  columns={columns}
                  dataSource={data}
                  rowKey={(record) => record.ID}
                  //  onChange={this.handleTableChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Modal */}
      <div
        className="modal fade"
        id="Add_Specialities_details"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Product</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="row form-row">
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Product Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Price</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label>Image</label>
                      <input type="file" className="form-control" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /ADD Modal */}
      {/* Edit Details Modal */}
      <div
        className="modal fade"
        id="edit_specialities_details"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Product</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="row form-row">
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Product Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Price</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label>Image</label>
                      <input type="file" className="form-control" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Details Modal */}
      {/* Delete Modal */}
      <div
        className="modal fade"
        id="delete_modal"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-content p-2">
                <h4 className="modal-title">Delete</h4>
                <p className="mb-4">Are you sure want to delete?</p>
                <button type="button" className="btn btn-primary">
                  Save{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Modal */}
    </>
  );
};
export default ProductList;
