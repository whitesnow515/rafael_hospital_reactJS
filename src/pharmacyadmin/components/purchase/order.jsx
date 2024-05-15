import React from "react";
// import { Modal } from 'react-bootstrap';
import SidebarNav from "../sidebar";
// import { Row, Col, Card, Media } from "react-bootstrap";
// import DataTable from 'react-data-table-component';
// import DataTableExtensions from 'react-data-table-component-extensions';
import "react-data-table-component-extensions/dist/index.css";
// import FeatherIcon from 'feather-icons-react';
import { Link } from "react-router-dom";
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../../pharmacyadmin/components/paginationfunction";
const Orders = () => {
  const data = [
    {
      ID: "1",
      SupplierID: 256,
      SupplierName: "Douglas Meyer",
      Orderby: "Trinity General Hospital",
      Addorder: "10-5-2020",
      Orderlist: "Dolofin Antigripal(Dolo)  3",
    },
    {
      ID: "2",
      SupplierID: 20,
      SupplierName: "Tyler Robinson",
      Orderby: "Grand Valley Clinic",
      Addorder: "10-5-2020",
      Orderlist: "Dolofin Antigripal(Dolo)  50",
      bg: "Dolofin Antigripal(Dolo)  4",
    },
    {
      ID: "3",
      SupplierID: 15,
      SupplierName: "Mary Dixon",
      Orderby: "Grand Plains Clinic",
      Addorder: "10-5-2020",
      Orderlist: "Dolo 650(CIpla)  0",
    },
    {
      ID: "4",
      SupplierID: 156,
      SupplierName: "Kurt Wooten",
      Orderby: "Mercy Vale Clinic",
      Addorder: "10-5-2020",
      Orderlist: "Tektonik(None)  2",
    },
    {
      ID: "5",
      SupplierID: 23,
      SupplierName: "Vickie Pritchett",
      Orderby: "Kindred Soul Clinic",
      Addorder: "10-5-2020",
      Orderlist: "Dolofin Antigripal(Dolo)  4",
    },
    {
      ID: "6",
      SupplierID: 35,
      SupplierName: "Joanne Fry",
      Orderby: "Hope Haven Hospital",
      Addorder: "10-5-2020",
      Orderlist: "Dolo 650(CIpla)  0",
    },
    {
      ID: "7",
      SupplierID: 205,
      SupplierName: "Christopher Johnson",
      Orderby: "Hill Crest Clinic",
      Addorder: "10-5-2020",
      Orderlist: "Dolofin Antigripal(Dolo)  50",
      bg: "Dolofin Antigripal(Dolo)  4",
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
      title: "SupplierID",
      dataIndex: "SupplierID",
      render: (text) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.SupplierID.length - b.SupplierID.length,
    },
    {
      title: "SupplierName",
      dataIndex: "SupplierName",
      render: (text) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.SupplierName.length - b.SupplierName.length,
    },

    {
      title: "Orderby",
      dataIndex: "Orderby",
      render: (text) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.Orderby.length - b.Orderby.length,
    },
    {
      title: "Addorder",
      dataIndex: "Addorder",
      render: (text) => (
        <>
          {/* <span className={record.bg}>{text}</span> */}
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.Addorder.length - b.Addorder.length,
    },
    {
      title: "Orderlist",
      dataIndex: "Orderlist",
      render: (text, record) => (
        <>
          <td>
            <span className={record.bg}>{text}</span>
          </td>
        </>
      ),
      sorter: (a, b) => a.Orderlist.length - b.Orderlist.length,
    },
    {
      title: "Action",
      className: "text-end",
      dataIndex: "",
      render: () => (
        <div className="text-end">
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
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-12">
                  <h3 className="page-title">Order</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/pharmacyadmin">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Order </li>
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
        {/* <!-- Delete Modal --> */}
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
        {/* <!-- /Delete Modal --> */}
      </>
    </>
  );
};

export default Orders;
