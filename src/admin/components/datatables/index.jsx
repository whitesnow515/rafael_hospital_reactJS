import React from "react";
import SidebarNav from "../sidebar";
import { Table } from "antd";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import { Link } from "react-router-dom";

const Datatables = () => {
  const data = [
    {
      id: 1,
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      StartDate: "2011/04/25",
      salary: "320,800",
    },
    {
      id: 2,
      name: "Brenden Wagner",
      position: "Software Engineer",
      office: "San Francisco",
      age: "28",
      StartDate: "2011/07/25",
      salary: "206,850",
    },
    {
      id: 3,
      name: "Fiona Green",
      position: "Chief Operating Officer (COO)",
      office: "San Francisco",
      age: "48",
      StartDate: "2009/01/12",
      salary: "850,000",
    },
    {
      id: 4,
      name: "Shou Itou",
      position: "Regional Marketing",
      office: "Tokyo",
      age: "20",
      StartDate: "2012/03/29",
      salary: "163,000",
    },
    {
      id: 5,
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      StartDate: "2011/04/25",
      salary: "170,750",
    },
    {
      id: 6,
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      StartDate: "2008/11/28",
      salary: "86,000",
    },
    {
      id: 7,
      name: "Ashton",
      position: "Support Lead",
      office: "San",
      age: "66",
      StartDate: "2012/12/02",
      salary: "86,768",
    },
    {
      id: 8,
      name: "Jena Gaines",
      position: "Support Lead",
      office: "London",
      age: "30",
      StartDate: "2012/08/06",
      salary: "90,560",
    },
    {
      id: 9,
      name: "Sonya Frost",
      position: "Office Manager",
      office: "Edinburgh",
      age: "23",
      StartDate: "2010/10/14",
      salary: "103,600",
    },
    {
      id: 10,
      name: "Colleen Hurst",
      position: "Software Engineer",
      office: "San Francisco",
      age: "39",
      StartDate: "2009/09/15",
      salary: "205,500",
    },
    {
      id: 11,
      name: "Rhona Davidson",
      position: "Javascript Developer",
      office: "Tokyo",
      age: "55",
      StartDate: "2008/12/13",
      salary: "327,900",
    },
    {
      id: 12,
      name: "Herrod Chandler",
      position: "Integration Specialist",
      office: "San Francisco",
      age: "59",
      StartDate: "2008/12/19",
      salary: "137,500",
    },
    {
      id: 13,
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      age: "61",
      StartDate: "2013/03/03",
      salary: "372,000",
    },
    {
      id: 14,
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: "33",
      StartDate: "2008/10/16",
      salary: "162,700",
    },
    {
      id: 15,
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "22",
      StartDate: "2012/12/18",
      salary: "433,060",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Position",
      dataIndex: "position",
      sorter: (a, b) => a.position.length - b.position.length,
    },

    {
      title: "Office",
      dataIndex: "office",
      sorter: (a, b) => a.office.length - b.office.length,
    },

    {
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age.length - b.age.length,
    },

    {
      title: "Start Date",
      dataIndex: "StartDate",
      render: (text) => <span>{text}</span>,
      sorter: (a, b) => a.salary.length - b.salary.length,
    },
    {
      title: "Salary",
      dataIndex: "salary",
      render: (text) => <span>$ {text}</span>,
      sorter: (a, b) => a.salary.length - b.salary.length,
    },
  ];
  return (
    <>
      <SidebarNav />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Data Tables</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Data Tables</li>
                </ul>
              </div>
            </div>
          </div>

          {/* /Page Header */}
          {/* Datatable */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Default Datatable</h4>
                  <p className="card-text">
                    This is the most basic example of the datatables with zero
                    configuration. Use the <code>.datatable</code> class to
                    initialize datatables.
                  </p>
                </div>
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
          {/* /Datatable */}
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default Datatables;
