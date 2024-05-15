import React from "react";
import { Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { patient1, patient2, patient3, patient4, patient5 } from "../imagepath";
// import SidebarNav from '../sidebar';
import { itemRender, onShowSizeChange } from "../paginationfunction";
import { Link } from "react-router-dom";
const PatientsListDesboard = () => {
  const data = [
    {
      id: 1,
      PatientID: "#PT001",
      PatientName: "Charlene Reed",
      Age: "29",
      Address: "4417 Goosetown Drive, Taylorsville, North Carolina, 28681",
      Phone: "8286329170",
      VisitLast: "20 Oct 2019",
      Paid: "$100.00",
      image: patient1,
    },
    {
      id: 2,
      PatientID: "#PT001",
      PatientName: "Travis Trimble",
      Age: "23",
      Address: "4026 Fantages Way, Brunswick, Maine, 04011 ",
      Phone: "2077299974",
      VisitLast: "22 Oct 2019",
      Paid: "$200.00",
      image: patient2,
    },
    {
      id: 3,
      PatientID: "#PT001",
      PatientName: "Carl Kelly",
      Age: "29",
      Address: "2037 Pearcy Avenue, Decatur, Indiana, 46733 ",
      Phone: "2607247769",
      VisitLast: "21 Oct 2019",
      Paid: "$250.00",
      image: patient3,
    },
    {
      id: 4,
      PatientID: "#PT001",
      PatientName: "Michelle Fairfax",
      Age: "25",
      Address: "2037 Pearcy Avenue, Decatur, Indiana, 46733 ",
      Phone: "5043686874",
      VisitLast: "21 Sep 2019",
      Paid: "$150.00",
      image: patient4,
    },
    {
      id: 5,
      PatientID: "#PT001",
      PatientName: "Gina Moore",
      Age: "23",
      Address: "888 Everette Alley, Hialeah, Florida, 33012 ",
      Phone: "9548207887",
      VisitLast: "18 Sep 2019",
      Paid: "$350.00",
      image: patient5,
    },
  ];
  const columns = [
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
      title: "Phone",
      dataIndex: "Phone",
      sorter: (a, b) => a.Phone.length - b.Phone.length,
    },
    {
      title: "Last Visit",
      dataIndex: "VisitLast",
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Paid",
      dataIndex: "Paid",
      sorter: (a, b) => a.Paid.length - b.Paid.length,
    },
  ];
  return (
    <>
      <div className="col-md-6 d-flex">
        {/* Feed Activity */}
        <div className="card  card-table flex-fill">
          <div className="card-header">
            <h4 className="card-title">Patients List</h4>
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
        {/* /Feed Activity */}
      </div>
    </>
  );
};
export default PatientsListDesboard;
