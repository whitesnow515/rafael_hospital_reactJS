import React from "react";
import { Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import {
  patient1,
  patient10,
  patient2,
  patient3,
  patient4,
  patient5,
  patient6,
  patient7,
  patient8,
  patient9,
} from "../imagepath";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import SidebarNav from "../sidebar";
import { Link } from "react-router-dom";

const Transaction = () => {
  const data = [
    {
      id: 1,
      InvoiceNumber: "#IN0001",
      PatientID: "#PT001",
      PatientName: "Charlene Reed",
      TotalAmount: "$100.00",
      CreatedDate: "09 Sep 2019",
      CreateDate: "320,800",
      image: patient1,
    },
    {
      id: 2,
      InvoiceNumber: "#IN0002",
      PatientID: "#PT002",
      PatientName: "Travis Trimble",
      TotalAmount: "$200.00",
      CreatedDate: "12 Jan 2019",
      CreateDate: "206,850",
      image: patient2,
    },
    {
      id: 3,
      InvoiceNumber: "#IN0003",
      PatientID: "#PT003",
      PatientName: "Carl Kelly",
      TotalAmount: "$250.00",
      CreatedDate: "29 Mar 2019",
      CreateDate: "850,000",
      image: patient3,
    },
    {
      id: 4,
      InvoiceNumber: "#IN0004",
      PatientID: "#PT004",
      PatientName: "Michelle Fairfax",
      TotalAmount: "$150.00",
      CreatedDate: "25 Aor 2011",
      CreateDate: "163,000",
      image: patient4,
    },
    {
      id: 5,
      InvoiceNumber: "#IN0005",
      PatientID: "#PT005",
      PatientName: "Gina Moore",
      TotalAmount: "$350.00",
      CreatedDate: "28 Nov 2008",
      CreateDate: "170,750",
      image: patient5,
    },
    {
      id: 6,
      InvoiceNumber: "#IN0006",
      PatientID: "#PT006",
      PatientName: "Elsie Gilley",
      TotalAmount: "$300.00",
      CreatedDate: "02 Dec 2012",
      CreateDate: "86,000",
      image: patient6,
    },
    {
      id: 7,
      InvoiceNumber: "#IN0007",
      PatientID: "#PT007",
      PatientName: "Joan Gardner",
      TotalAmount: "$250.00",
      CreatedDate: "06 Oct 2012",
      CreateDate: "86",
      image: patient7,
    },
    {
      id: 8,
      InvoiceNumber: "#IN0008",
      PatientID: "#PT008",
      PatientName: "Daniel Griffing",
      TotalAmount: "$150.00",
      CreatedDate: "14 Sep 2010",
      CreateDate: "90,560",
      image: patient8,
    },
    {
      id: 9,
      InvoiceNumber: "#IN0009",
      PatientID: "#PT009",
      PatientName: "Walter Roberson",
      TotalAmount: "$100.00",
      CreatedDate: "15 Sep 2009",
      CreateDate: "103,600",
      image: patient9,
    },
    {
      id: 10,
      InvoiceNumber: "#IN00010",
      PatientID: "#PT0010",
      PatientName: "Robert Rhodes",
      TotalAmount: "$120.00",
      CreatedDate: "08 Apr 2015",
      CreateDate: "205,500",
      image: patient10,
    },
  ];
  const columns = [
    {
      title: "Invoice Number",
      dataIndex: "InvoiceNumber",
      render: (text) => (
        <>
          <Link
            to="/admin/invoice"
            className="text-decoration-none text-primary"
          >
            {text}
          </Link>
        </>
      ),
      sorter: (a, b) => a.InvoiceNumber.length - b.InvoiceNumber.length,
    },
    {
      title: "Patient ID",
      dataIndex: "PatientID",
      sorter: (a, b) => a.PatientID.length - b.PatientID.length,
    },

    {
      title: "Patient Name",
      dataIndex: "PatientName",
      render: (text, record) => (
        <>
          <Link className="avatar mx-2" to="/admin/profile">
            <img className="rounded-circle" src={record.image} />
          </Link>
          <Link to="/admin/profile">{text}</Link>
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
      title: "Status",
      dataIndex: "",
      render: () => (
        <span>
          {" "}
          <span className="badge rounded-pill bg-success inv-badge">Paid</span>
        </span>
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
                <h3 className="page-title">Transactions</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Transactions</li>
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

export default Transaction;
