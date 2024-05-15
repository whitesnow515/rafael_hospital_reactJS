import React from "react";
import { Link } from "react-router-dom";
import SidebarNav from "../sidebar";
// import { Modal } from 'react-bootstrap';
// import { Row, Col, Card, Media } from "react-bootstrap";
// import DataTable from 'react-data-table-component';
// import DataTableExtensions from 'react-data-table-component-extensions';
import "react-data-table-component-extensions/dist/index.css";
import { Productss, Product2, Product1 } from "./image";
import FeatherIcon from "feather-icons-react";
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../../pharmacyadmin/components/paginationfunction";
const Supplier = () => {
  const data = [
    {
      ID: "25",
      image: Productss,
      Product: "Abilify",
      Name: "Discarsa",
      Phone: "+51 1542565",
      Email: "Discarsa@gmail.com",
      Address: "Paseo Los Robles",
      Company: "Discarsa Nicaragua",
    },
    {
      ID: "33",
      image: Product1,
      Product: "Actamin",
      Name: "Proveedor",
      Phone: "+51 23687541",
      Email: "proveedor@gmail.com",
      Address: "Av circunvalación # 234",
      Company: "mi farmacia",
    },
    {
      ID: "42",
      image: Product2,
      Product: "Adderall",
      Name: "Discarsa",
      Phone: "+51 96588552",
      Email: "Discarsa@gmail.com",
      Address: "Paseo Los Robles",
      Company: "Discarsa Nicaragua",
    },
  ];
  const columns = [
    {
      title: "#",
      dataIndex: "ID",
      render: (text) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.ID.length - b.ID.length,
    },
    {
      title: "Product",
      dataIndex: "Product",
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
            <span className=" mx-2">{text}</span>
          </td>
        </>
      ),
      sorter: (a, b) => a.Product.length - b.Product.length,
    },
    {
      title: "Name",
      dataIndex: "Name",
      render: (text) => (
        <>
          <td>
            <span>{text}</span>
          </td>
        </>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },

    {
      title: "Phone",
      dataIndex: "Phone",
      render: (text) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.Phone.length - b.Phone.length,
    },
    {
      title: "Email",
      dataIndex: "Email",
      render: (text) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.Email.length - b.Email.length,
    },
    {
      title: "Address",
      dataIndex: "Address",
      render: (text) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.Address.length - b.Address.length,
    },

    {
      title: "Company",
      dataIndex: "Company",
      render: (text) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.Company.length - b.Company.length,
    },
    {
      title: "Action",
      className: "text-end",
      dataIndex: "",
      render: () => (
        <div className="text-end">
          <Link
            className="btn btn-sm bg-success-light mx-1"
            to="/pharmacyadmin/edit-supplier"
          >
            <i className="fe fe-pencil"></i> Edit
          </Link>
          <Link
            to="#"
            className="btn btn-sm bg-danger-light"
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

  // const customStyles = {
  //   rows: {
  //     style: {
  //       minHeight: "80px", // override the row height
  //       borderBottomColor: "#e6e9f4",
  //       fontWeight: 500,
  //     },
  //   },
  //   headCells: {
  //     style: {
  //       paddingLeft: "1.5rem", // override the cell padding for head cells
  //       paddingRight: "12px",
  //       fontWeight: 500,
  //       fontSize: "14px",
  //       color: "#333333",
  //       minHeight: "30px",
  //       backgroundColor: "#E5E7F8",
  //       borderRadious: "9px",
  //       "&&:hover": {
  //         color: "#333333",
  //       },
  //     },
  //   },
  //   cells: {
  //     style: {
  //       paddingLeft: "1.5rem", // override the cell padding for data cells
  //       paddingRight: "12px",
  //       paddingBottom: "10px",
  //     },
  //   },
  // };

  // const tableData = {
  //   columns,
  //   data,
  //   customStyles,
  // };

  return (
    <>
      <SidebarNav />
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-sm-7 col-auto">
                  <h3 className="page-title mb-0">Supplier</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/pharmacyadmin">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Supplier</li>
                  </ul>
                </div>
                <div className="col-sm-5 col">
                  <Link
                    to="/pharmacyadmin/add-supplier"
                    className="btn btn-primary float-end d-flex justify-content-between align-items-center"
                  >
                    <i className="me-1">
                      <FeatherIcon icon="plus-square" />
                    </i>
                    Add New
                  </Link>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-12">
                {/* Recent Orders */}
                <div className="card">
                  <div className="card-header border-bottom-0">
                    <div className="row align-items-center">
                      <div className="col-auto custom-list d-flex">
                        <div className="form-custom me-2">
                          <div
                            id="tableSearch"
                            className="dataTables_wrapper"
                          />
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
                          customStyles={customStyles}
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
                <div id="tablepagination" className="dataTables_wrapper" />
                {/* /Recent Orders */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Wrapper */}
        {/* /Main Wrapper */}
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

export default Supplier;
