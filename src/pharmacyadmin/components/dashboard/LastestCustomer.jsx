/* eslint-disable no-unused-vars */
import React from "react";
import { Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
// import { itemRender, onShowSizeChange } from '../paginationfunction';
// import SidebarNav from '../sidebar';

function LatestCustomer() {
  const data = [
    {
      id: 1,
      DoctorName: "Ruby Perrin",
      Speciality: "takrakka ",
      PatientName: "+54 1245463984	",
      Earned: "$5000.00 ",
      Date: "27 Sep 2019",
      time: "11.00 AM - 11.15 AM",
      Amount: "Rubyperring@yahoo.mail	",
      Status: "April 14, 2020",
    },
    {
      id: 2,
      DoctorName: "	Darren Elder",
      Speciality: "339, Terromont Street	 ",
      PatientName: "+54 874654536	",
      Earned: "$3300.00 ",
      Date: "1 Nov 2019",
      time: "11.00 PM - 11.35 PM",
      Amount: "darrenelder@gmail.com	",
      Status: "April 15, 2020",
    },
    {
      id: 3,
      DoctorName: "Deborah Angel",
      Speciality: "takrakka ",
      PatientName: "+54 3647787889	",
      Earned: "$4100.00",
      Date: "3 Nov 2019",
      time: "12.00 PM - 12.15 PM",
      Amount: "deborahangel@yahoo.com	    ",
      Status: "April 16, 2020",
    },
    {
      id: 4,
      DoctorName: "Ruby Perrin",
      Speciality: "2061 Angus Road	 ",
      PatientName: "+54 1245463984	",
      Earned: "$4000.00 ",
      Date: "16 Jun 2019",
      time: "1.00 PM - 1.20 PM",
      Amount: "Rubyperring@yahoo.mail	",
      Status: "April 17, 2020",
    },
    {
      id: 5,
      DoctorName: "Krystyna Rodriquez",
      Speciality: "takrakka ",
      PatientName: "+54 8965722222	",
      Earned: "$2000.00 ",
      Date: "22 Aug 2019",
      time: "1.00 PM - 1.15 PM",
      Amount: "krystynarodriquez@gmail.com	",
      Status: "April 18, 2020",
    },
  ];
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.DoctorName.length - b.DoctorName.length,
    },
    {
      title: "Name",
      dataIndex: "DoctorName",
      render: (text, record) => (
        <>
          {" "}
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.DoctorName.length - b.DoctorName.length,
    },
    {
      title: "Address",
      dataIndex: "Speciality",
      sorter: (a, b) => a.Speciality.length - b.Speciality.length,
    },

    {
      title: "TelePhone",
      dataIndex: "PatientName",
      render: (text, record) => (
        <>
          {" "}
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.PatientName.length - b.PatientName.length,
    },

    {
      title: "Email",
      dataIndex: "Amount",
      render: (text, record) => (
        <>
          {" "}
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Date Added",
      dataIndex: "Status",
      render: (text, record) => (
        <>
          {" "}
          <span>{text}</span>
        </>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
  ];
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          {/* Latest Customers */}
          <div className="card card-table">
            <div className="card-header">
              <h4 className="card-title">Latest Customers</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <Table
                  style={{ overflowX: "auto" }}
                  columns={columns}
                  dataSource={data.map((item) => ({ ...item, key: item.id }))} // Add key prop
                />
              </div>
            </div>
          </div>
          {/* /Latest Customers */}
        </div>
      </div>
    </>
  );
}

export default LatestCustomer;
