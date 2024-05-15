import React from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { Card, Image } from "react-bootstrap";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
} from "../imagepath";

const ProductcategoriesTable = () => {
  const data = [
    {
      ID: "4545",

      img_url2: product1,
      Qtys: "15 pils",
      Product: "Ventricular devices",
      Date: "12/20/2022",
      Amount: "$300.00",
    },
    {
      ID: "4545",

      img_url2: product2,
      Qtys: "Syrup 200 ml",
      Product: "Neuromodulation",
      Date: "12/20/2022",
      Amount: "$300.00",
    },
    {
      ID: "4545",

      img_url2: product3,
      Qtys: "200 ml",
      Product: "Ventricular assist devices",
      Date: "12/20/2022",
      Amount: "$300.00",
    },
    {
      ID: "4545",

      img_url2: product4,
      Qtys: "Syrup 200 ml",
      Product: "surgical systems",
      Date: "12/20/2022",
      Amount: "$300.00",
    },
    {
      ID: "4545",

      img_url2: product5,
      Qtys: "20 tablets",
      Product: "Assist devices",
      Date: "12/20/2022",
      Amount: "$300.00",
    },
    {
      ID: "4545",

      img_url2: product6,
      Qtys: "100 ml",
      Product: "Interventional devices",
      Date: "12/20/2022",
      Amount: "$300.00",
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
      name: "Product",
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
      width: "600px",
    },

    {
      name: "Date",
      selector: (row) => row.Date,
      sortable: true,
      width: "350px",
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
      width: "450px",
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

export default ProductcategoriesTable;
