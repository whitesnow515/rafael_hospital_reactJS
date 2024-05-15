import React from "react";
import { Link } from "react-router-dom";
// import { Row, Col, Card, Media } from "react-bootstrap";
// import DataTable from 'react-data-table-component';
// import DataTableExtensions from 'react-data-table-component-extensions';
import "react-data-table-component-extensions/dist/index.css";
// import FeatherIcon from 'feather-icons-react';
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../../pharmacyadmin/components/paginationfunction";
import { product } from "../imagepath";
import SidebarNav from "../sidebar";
import {
  Product1,
  Product10,
  Product11,
  Product12,
  Product13,
  Product14,
  Product2,
} from "./image";

const ProductName = () => {
  const data = [
    {
      ID: "1",
      image: Product14,
      BrandName: "Cordacriptine Mardipine",
      Category: "Skin care",
      Price: "$22",
      Quantity: "THERE ONLY 2",
      bg: "btn btn-sm bg-danger-light",
      Discount: "0%",
      Expire: "THE PRODUCT IS EXPIRED",
      bg1: "btn btn-sm bg-danger-light",
    },
    {
      ID: "2",
      image: product,
      BrandName: "Abilify",
      Category: "Phytopathology‎",
      Price: "$22",
      Quantity: "THERE ONLY 2",
      bg: "btn btn-sm bg-danger-light",
      Discount: "0%",
      Expire: "THE PRODUCT IS EXPIRED",
      bg1: "btn btn-sm bg-danger-light",
    },
    {
      ID: "3",
      image: Product13,
      BrandName: "Rapalac Neuronium",
      Category: "Skin care",
      Price: "$16",
      Quantity: "213",
      Discount: "0%",
      Expire: "THE PRODUCT IS EXPIRED",
      bg1: "btn btn-sm bg-danger-light",
    },
    {
      ID: "4",
      image: Product1,
      BrandName: "Actamin",
      Category: "Phytopathology‎",
      Price: "$22",
      Quantity: "THERE ONLY 5",
      bg: "btn btn-sm bg-danger-light",
      Discount: "0%",
      Expire: "THE PRODUCT IS EXPIRED",
      bg1: "btn btn-sm bg-danger-light",
    },
    {
      ID: "5",
      image: Product12,
      BrandName: "Acetrace Amionel",
      Category: "Body care",
      Price: "$10",
      Quantity: "22",
      Discount: "0%",
      Expire: "THE PRODUCT IS EXPIRED",
      bg1: "btn btn-sm bg-danger-light",
    },
    {
      ID: "6",
      image: Product11,
      BrandName: "Ergorinex Caffeigestin",
      Category: "Hair care",
      Price: "$15",
      Quantity: "22",
      Discount: "0%",
      Expire: "THE PRODUCT IS EXPIRED",
      bg1: "btn btn-sm bg-danger-light",
    },
    {
      ID: "7",
      image: Product2,
      BrandName: "Adderall",
      Category: "Phytopathology‎",
      Price: "$10",
      Quantity: "22",
      Discount: "0%",
      Expire: "THE PRODUCT IS EXPIRED",
      bg1: "btn btn-sm bg-danger-light",
    },

    {
      ID: "8",
      image: Product10,
      BrandName: "LysofranilDorzostin",
      Category: "Hair care",
      Price: "$10",
      Quantity: "22",
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
      title: "Product Name",
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
            to="/pharmacyadmin/edit-product"
            className="me-1 btn btn-sm bg-success-light"
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

  // const tableData = {
  //   columns,
  //   data,

  // };

  return (
    <>
      <SidebarNav />
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* <!-- Page Header --> */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-7 col-auto">
                <h3 className="page-title">Products</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/pharmacyadmin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Products</li>
                </ul>
              </div>
              <div className="col-sm-5 col">
                <Link
                  to="/pharmacyadmin/add-product"
                  className="btn btn-primary float-end mt-2"
                >
                  Add New
                </Link>
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
        {/* Edit Details Modal */}

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
      </div>
    </>
  );
};

export default ProductName;
