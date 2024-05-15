import React from "react";
import { Link } from "react-router-dom";
import SidebarNav from "../sidebar";
// import { Row, Col, Card, Media } from "react-bootstrap";
// import DataTable from 'react-data-table-component';
// import DataTableExtensions from 'react-data-table-component-extensions';
import "react-data-table-component-extensions/dist/index.css";
// import { Productss, Product1, Product2, Product3, Product4, Product5, Product6 } from "../transaction/image"
// import FeatherIcon from 'feather-icons-react';
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../../pharmacyadmin/components/paginationfunction";

const Sales = () => {
  const data = [
    {
      InvoiceName: "20170001",
      MedicineName: "Abilify,Actamin,Actamin",
      TotalPrice: "$220",
      Date: "12-5-2020",
    },
    {
      InvoiceName: "20169999",
      MedicineName: "Abilify,Actamin",
      TotalPrice: "$100",
      Date: "13-5-2020",
    },
    {
      InvoiceName: "20169998",
      MedicineName: "Abilify",
      TotalPrice: "$150",
      Date: "14-5-2020",
    },
    {
      InvoiceName: "20170002",
      MedicineName: "Abilify,Actamin,Actamin",
      TotalPrice: "$220",
      Date: "15-5-2020",
    },
  ];
  const columns = [
    {
      title: "Invoice No",
      dataIndex: "InvoiceName",
      render: (text) => (
        <>
          <td>
            <span>{text}</span>
          </td>
        </>
      ),
      sorter: (a, b) => a.InvoiceName.length - b.InvoiceName.length,
    },

    {
      title: "Medicine Name",
      dataIndex: "MedicineName",
      render: (text) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.MedicineName.length - b.MedicineName.length,
    },
    {
      title: "Total Price",
      dataIndex: "TotalPrice",
      render: (text) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.TotalPrice.length - b.TotalPrice.length,
    },

    {
      title: "Date",
      dataIndex: "Date",
      render: (text) => (
        <>
          <span> {text}</span>
        </>
      ),
      sorter: (a, b) => a.Date.length - b.Date.length,
    },
    {
      title: "Action",
      className: "text-end",
      dataIndex: "",
      render: () => (
        <div className="text-end">
          <Link
            className="btn btn-sm bg-success-light mx-1"
            data-bs-toggle="modal"
            to="/pharmacyadmin/#edit_invoice_report"
          >
            <i className="fe fe-pencil"></i> Edit
          </Link>
          <Link
            className="btn btn-sm bg-default-light mx-1"
            to="/pharmacyadmin/ReportInvoice"
          >
            <i className="fas fa-file-alt me-1"></i> Invoice
          </Link>
          <Link
            to="#"
            className="btn btn-sm bg-danger-light mx-1"
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
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12 col-auto">
                  <h3 className="page-title">Sales</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/pharmacyadmin">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Sales</li>
                  </ul>
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
                      <div className="col">
                        <h5 className="card-title">Sales List</h5>
                      </div>
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
        {/* Edit Details Modal */}
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
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={20169998}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Medicine Name</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Abilify"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Total Amount</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="$150.00"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Created Date</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="14-5-2020"
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

export default Sales;
