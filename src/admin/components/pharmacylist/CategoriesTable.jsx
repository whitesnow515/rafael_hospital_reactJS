import React from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { Card, Image } from "react-bootstrap";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import {
  icon01,
  icon02,
  icon03,
  product1,
  product2,
  product3,
  product4,
} from "../imagepath";

const CategoriesTable = () => {
  const data = [
    {
      ID: "4545",
      Category: "Community pharmacy",
      img_url2: product1,
      Icon: icon01,
      Date: "12/20/2022",
    },
    {
      ID: "#4546",
      Category: "Clinical Pharmacy",
      img_url2: product3,
      Icon: icon03,
      Date: "12/20/2022",
    },
    {
      ID: "#4546",
      Category: "Hospital Pharmacy",
      img_url2: product2,
      Icon: icon02,
      Date: "12/20/2022",
    },
    {
      ID: "#6765",
      Category: "The Pill Club Medical",
      img_url2: product4,
      Icon: icon01,
      Date: "12/20/2022",
    },
    {
      ID: "#8774",
      Category: "Hospital Pharmacy",
      img_url2: product2,
      Icon: icon02,
      Date: "12/20/2022",
    },
  ];
  const columns = [
    {
      name: "Id",
      selector: (row) => row.ID,
      sortable: true,
      width: "300px",
    },
    {
      name: "Icon",
      selector: (row) => (
        <img className="img-fluid" src={row.Icon} alt="User Image" />
      ),
      sortable: true,
      width: "300px",
    },

    {
      name: "Category",
      sortable: true,
      cell: (row) => (
        <Card className="table-avatar">
        <Link
          to="#"
          data-bs-target="#editModal"
          data-bs-toggle="modal"
          className="avatar avatar-sm me-2 user-dt"
        >
          <Image
            className="avatar avatar-img"
            src={row.img_url2}
            alt="User Image"
          />
        </Link>
        <Link
          to="#"
          data-bs-target="#editModal"
          data-bs-toggle="modal"
          className="user-name"
        >
          {row.Category}
        </Link>
      </Card>
      ),
      width: "500px",
    },

    {
      name: "Date",
      selector: (row) => row.Date,
      sortable: true,
      width: "300px",
    },

    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
      cell: () => (
        <div className="actions">
          <Link
            className="text-black"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#editModal"
          >
            <i className="me-1">
              <FeatherIcon icon="edit-3" />
            </i>{" "}
            Edit
          </Link>
          <Link
            className="text-danger"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#deleteModal"
          >
            <i className="me-1">
              <FeatherIcon icon="trash-2" />
            </i>{" "}
            Delete
          </Link>
        </div>
      ),
      width: "300px",
    },
  ];

  const tableData = {
    columns,
    data,
  };
  return (
    <div className="card-body p-0">
      <div className="table-responsive">
        <DataTableExtensions {...tableData}>
          <DataTable
            className="datatable table table-borderless hover-table"
            id="data-table"
            noHeader
            defaultSortField="id"
            defaultSortAsc={false}
            pagination
            highlightOnHover
          />
        </DataTableExtensions>
      </div>
    </div>
  );
};

export default CategoriesTable;
