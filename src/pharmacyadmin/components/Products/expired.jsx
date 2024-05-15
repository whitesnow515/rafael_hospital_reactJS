import React from "react";
import { Link } from "react-router-dom";
// import { Row, Col, Card, Media } from "react-bootstrap";
// import DataTable from 'react-data-table-component';
// import DataTableExtensions from 'react-data-table-component-extensions';
import "react-data-table-component-extensions/dist/index.css";
import FeatherIcon from "feather-icons-react";
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../../pharmacyadmin/components/paginationfunction";
import { product, product1, product2 } from "../imagepath";
// import { Modal } from 'react-bootstrap';
import SidebarNav from "../sidebar";

const Expired = () => {
  const data = [
    {
      ID: "6",
      image: product,
      BrandName: "Abilify",
      GeneticName: "Aripiprazole",
      Category: "Phytopathology‎",
      Price: "$22",
      Quantity: "213",
      Discount: "0%",
      Expire: "THE PRODUCT IS EXPIRED",
      bg1: "btn btn-sm bg-danger-light",
    },
    {
      ID: "5",
      image: product2,
      BrandName: "Adderall",
      GeneticName: "Amphetamine",
      Category: "Phytopathology",
      Price: "$10",
      Quantity: "22",
      Discount: "0%",
      Expire: "THE PRODUCT IS EXPIRED",
      bg1: "btn btn-sm bg-danger-light",
    },
    {
      ID: "4",
      image: product1,
      BrandName: "Actamin",
      GeneticName: "Amphetamine",
      Category: "Phytopathology‎",
      Price: "$22",
      Quantity: "THERE ONLY 5",
      bg: "btn btn-sm bg-danger-light",
      Discount: "0%",
      Expire: "THE PRODUCT IS EXPIRED",
      bg1: "btn btn-sm bg-danger-light",
    },
    {
      ID: "3",
      image: product,
      BrandName: "Abilify",
      GeneticName: "Aripiprazole",
      Category: "Phytopathology‎",
      Price: "$22",
      Quantity: "120",
      Discount: "0%",
      Expire: "THE PRODUCT IS EXPIRED",
      bg1: "btn btn-sm bg-danger-light",
    },
    {
      ID: "2",
      image: product,
      BrandName: "Abilify",
      GeneticName: "Aripiprazole",
      Category: "Phytopathology‎",
      Price: "$22",
      Quantity: "50",
      Discount: "0%",
      Expire: "THE PRODUCT IS EXPIRED",
      bg1: "btn btn-sm bg-danger-light",
    },
    {
      ID: "1",
      image: product,
      BrandName: "Abilify",
      GeneticName: "Aripiprazole",
      Category: "Phytopathology‎",
      Price: "$22",
      Quantity: "THERE ONLY 2",
      bg: "btn btn-sm bg-danger-light",
      Discount: "0%",
      Expire: "THE PRODUCT IS EXPIRED",
      bg1: "btn btn-sm bg-danger-light",
    },
  ];
  const columns = [
    {
      title: "#",
      dataIndex: "ID",
      render: (text) => (
        <>
          <td>
            <span>{text}</span>
          </td>
        </>
      ),
      sorter: (a, b) => a.ID.length - b.ID.length,
    },

    {
      title: "Brand Name",
      dataIndex: "BrandName",
      render: (text, record) => (
        <>
          <td>
            <img
              src={record.image}
              className="avatar-img"
              alt="product image"
              width={35}
              height={35}
            />
            <span className=" mx-1">{text}</span>
          </td>
        </>
      ),
      sorter: (a, b) => a.ID.length - b.ID.length,
    },
    {
      title: "Genetic Name",
      dataIndex: "GeneticName",
      render: (text) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.GeneticName.length - b.GeneticName.length,
    },
    {
      title: "Category",
      dataIndex: "Category",
      render: (text) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.Category.length - b.Category.length,
    },

    {
      title: "Price",
      dataIndex: "Price",
      render: (text) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.Price.length - b.Price.length,
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      render: (text, record) => (
        <>
          <td>
            <span className={record.bg}>{text}</span>
          </td>
        </>
      ),
      sorter: (a, b) => a.Quantity.length - b.Quantity.length,
    },
    {
      title: "Discount",
      dataIndex: "Discount",
      render: (text) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.Discount.length - b.Discount.length,
    },
    {
      title: "Expire",
      dataIndex: "Expire",
      render: (text, record) => (
        <>
          <td>
            <span className={record.bg1}>{text}</span>
          </td>
        </>
      ),
      sorter: (a, b) => a.Expire.length - b.Expire.length,
    },
    {
      title: "Action",
      className: "text-end",
      dataIndex: "",
      render: () => (
        <div className="text-end">
          <Link
            to="#"
            className="me-1 btn btn-sm bg-success-light "
            data-bs-toggle="modal"
            data-bs-target="#edit_specialities_details"
          >
            <i className="fe fe-pencil"></i> Edit
          </Link>
          <Link
            to="#"
            className="me-1 btn btn-sm bg-danger-light"
            data-bs-toggle="modal"
            data-bs-target="#deleteConfirmModal"
          >
            <i className="fe fe-trash"></i> Delete
          </Link>
        </div>
      ),
      sorter: (a, b) => a.length - b.length,
    },
  ];

  return (
    <>
      <SidebarNav />
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* <!-- Page Header --> */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Expired</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/pharmacyadmin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Expired</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- /Page Header --> */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header border-bottom-0">
                  <div className="row align-items-center">
                    <div className="col-auto custom-list d-flex">
                      <div className="form-custom me-2">
                        <div
                          id="tableSearch"
                          className="dataTables_wrapper"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
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
                    {/* <DataTableExtensions
                      {...tableData}
                    >
                      <DataTable
                        // customStyles={customStyles}
                        noHeader

                        defaultSortField="id"
                        defaultSortAsc={false}
                        pagination
                        highlightOnHover
                      />
                    </DataTableExtensions> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        {/* Add Modal */}
        <div
          className="modal fade"
          id="Add_Specialities_details"
          aria-hidden="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content doctor-profile">
              <div className="modal-header">
                <h3 className="mb-0">Add Category</h3>
                <button
                  type="button"
                  className="close-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <FeatherIcon icon="x-circle" />
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row form-row">
                    <div className="col-12">
                      <div className="form-group">
                        <label>Category</label>
                        <input type="text" className="form-control" />
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
                <h5 className="modal-title">Edit Category</h5>
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
                    <div className="col-12">
                      <div className="form-group">
                        <label>Category</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Cardiology"
                        />
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
          id="deleteConfirmModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="acc_title">
                  Delete
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <p id="acc_msg">are you sure you want to delete?</p>
              </div>
              <div className="modal-footer">
                <a href="#" className="btn btn-success si_accept_confirm">
                  Yes
                </a>
                <button
                  type="button"
                  className="btn btn-danger si_accept_cancel"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Modal */}
      </>
    </>
  );
};

export default Expired;
