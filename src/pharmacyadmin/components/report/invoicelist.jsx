import React from "react";
import "react-data-table-component-extensions/dist/index.css";
import SidebarNav from "../sidebar";
import { Productss } from "./image";
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../../pharmacyadmin/components/paginationfunction";
import { Link } from "react-router-dom";

const InvoiceList = () => {
  const data = [
    {
      id: 1,
      InvoiceNumber: "#IN0001",
      PatientID: "#PT001",
      PatientName: "Abilify,Actamin",
      TotalAmount: "$100.00",
      CreatedDate: "09 Sep 2019",
      CreateDate: "320,800",
      image: Productss,
    },
    {
      id: 2,
      InvoiceNumber: "#IN0002",
      PatientID: "#PT002",
      PatientName: " Abilify,Actamin",
      TotalAmount: "$240.00",
      CreatedDate: "12 Jan 2019",
      CreateDate: "206,850",
      image: Productss,
    },
    {
      id: 3,
      InvoiceNumber: "#IN0003",
      PatientID: "#PT003",
      PatientName: " Abilify,Actamin",
      TotalAmount: "$330.00",
      CreatedDate: "29 Mar 2019",
      CreateDate: "850,000",
      image: Productss,
    },
    {
      id: 4,
      InvoiceNumber: "#IN0004",
      PatientID: "#PT004",
      PatientName: " Abilify,Actamin",
      TotalAmount: "$200.00",
      CreatedDate: "25 Aor 2011",
      CreateDate: "163,000",
      image: Productss,
    },
    {
      id: 5,
      InvoiceNumber: "#IN0005",
      PatientID: "#PT005",
      PatientName: " Abilify,Actamin",
      TotalAmount: "$170.00",
      CreatedDate: "28 Nov 2008",
      CreateDate: "170,750",
      image: Productss,
    },
    {
      id: 6,
      InvoiceNumber: "#IN0006",
      PatientID: "#PT006",
      PatientName: " Abilify,Actamin",
      TotalAmount: "$760.00",
      CreatedDate: "02 Dec 2012",
      CreateDate: "86,000",
      image: Productss,
    },
    {
      id: 7,
      InvoiceNumber: "#IN0007",
      PatientID: "#PT007",
      PatientName: " Abilify,Actamin",
      TotalAmount: "$290.00",
      CreatedDate: "06 Oct 2012",
      CreateDate: "86",
      image: Productss,
    },
    {
      id: 8,
      InvoiceNumber: "#IN0008",
      PatientID: "#PT008",
      PatientName: " Abilify,Actamin,Actamin",
      TotalAmount: "$370.00",
      CreatedDate: "14 Sep 2010",
      CreateDate: "90,560",
      image: Productss,
    },
    {
      id: 9,
      InvoiceNumber: "#IN0009",
      PatientID: "#PT009",
      PatientName: " Abilify",
      TotalAmount: "$230.00",
      CreatedDate: "15 Sep 2009",
      CreateDate: "103,600",
      image: Productss,
    },
    {
      id: 10,
      InvoiceNumber: "#IN00010",
      PatientID: "#PT0010",
      PatientName: " Abilify,Actamin,Actamin",
      TotalAmount: "$390.00",
      CreatedDate: "08 Apr 2015",
      CreateDate: "205,500",
      image: Productss,
    },
  ];
  const columns = [
    {
      title: "Invoice Number",
      dataIndex: "InvoiceNumber",
      render: (text) => (
        <>
          <Link
            to="/pharmacyadmin/ReportInvoice"
            className="text-decoration-none"
          >
            {text}
          </Link>
        </>
      ),
      sorter: (a, b) => a.InvoiceNumber.length - b.InvoiceNumber.length,
    },

    {
      title: "Medicine Name",
      dataIndex: "PatientName",
      render: (text, record) => (
        <>
          <span className="avatar mx-2">
            <img src={record.image} />
          </span>
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.PatientName.length - b.PatientName.length,
    },

    {
      title: "Total Amount",
      dataIndex: "TotalAmount",
      sorter: (a, b) => a.TotalAmount.length - b.TotalAmount.length,
    },

    {
      title: "Created Date",
      dataIndex: "CreatedDate",
      render: (text) => <span>{text}</span>,
      sorter: (a, b) => a.CreatedDate.length - b.CreatedDate.length,
    },
    {
      title: "Status",
      dataIndex: "",
      render: () => (
        <span className="badge rounded-pill bg-success inv-badge">Paid</span>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Action",
      className: "text-end",
      dataIndex: "",
      render: () => (
        <div className="text-end">
          <a
            href="#"
            className="me-1 btn btn-sm bg-success-light "
            data-bs-toggle="modal"
            data-bs-target="#edit_invoice_report"
          >
            <i className="fe fe-pencil"></i> Edit
          </a>
          <a
            href="#"
            className="me-1 btn btn-sm bg-danger-light"
            data-bs-toggle="modal"
            data-bs-target="#delete_modal"
          >
            <i className="fe fe-trash"></i> Delete
          </a>
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
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Invoice Report</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/pharmacyadmin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Invoice Report</li>
                </ul>
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
                      rowKey={(record) => record.id}
                      //  onChange={this.handleTableChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="edit_invoice_report"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Invoice Report</h5>
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
                      <label>Invoice Number</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Medicine Image</label>
                      <input type="file" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Medicine Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Total Amount</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>
                        Status <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select form-control"
                        name="category"
                        required=""
                      >
                        <option defaultValue={1}>Paid</option>
                        <option defaultValue={2}>Unpaid</option>
                        <option defaultValue={3}>Pending</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Created Date</label>
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
                <button type="button" className="btn btn-primary mx-1">
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
    </>
  );
};

export default InvoiceList;
