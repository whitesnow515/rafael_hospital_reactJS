import React from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { Card, Image } from "react-bootstrap";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { product1, product2, product3, product4, product5 } from "../imagepath";

const PharmacyTableList = () => {
  const data = [
    {
      ID: "4545",
      PharmacyName: "The Pill Club Medical",
      img_url2: product1,
      Categories: "Club Pharmacy",
      PharmacyAddress: "3503 Flint Street Saipan,MP 96950",
      AdministratorName: "Rehan",
      PhoneNumber: "816-270-2336",
    },
    {
      ID: "#4546",
      PharmacyName: "Community Pharmacy",
      img_url2: product2,
      Categories: "Community pharmacy",
      PharmacyAddress: "96 Red Hawk Road Cyrus,MN 56323",
      AdministratorName: "Patinson",
      PhoneNumber: "320-795-8815",
    },
    {
      ID: "#4546",
      PharmacyName: "The Pill Club Medical",
      img_url2: product3,
      Categories: "Clinical Pharmacy",
      PharmacyAddress: "3503 Flint Street Saipan,MP 96950",
      AdministratorName: "Sheebha",
      PhoneNumber: "816-270-2336",
    },
    {
      ID: "#6765",
      PharmacyName: "The Pill Club Medical",
      img_url2: product4,
      Categories: "Pills Pharmacy",
      PharmacyAddress: "3503 Flint Street Saipan,MP 96950",
      AdministratorName: "Richard",
      PhoneNumber: "816-270-2336",
    },
    {
      ID: "#8774",
      PharmacyName: "Hospital Pharmacy",
      img_url2: product5,
      Categories: "Hospital Pharmacy",
      PharmacyAddress: "3130 Murry Street princess Anne,VA 23456",
      AdministratorName: "Herald watson",
      PhoneNumber: "916-631-2558",
    },
  ];
  const columns = [
    {
      name: "Id",
      selector: (row) => row.ID,
      sortable: true,
      width: "150px",
    },

    {
      name: "PharmacyName",
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
      width: "250px",
    },

    {
      name: "Categories",
      selector: (row) => row.Categories,
      sortable: true,
      width: "250px",
    },
    {
      name: "PharmacyAddress",
      selector: (row) => row.PharmacyAddress,
      sortable: true,
      width: "250px",
    },

    {
      name: "AdministratorName",
      selector: (row) => row.AdministratorName,
      sortable: true,
      width: "250px",
    },

    {
      name: "PhoneNumber",
      selector: (row) => row.PhoneNumber,
      sortable: true,
      width: "250px",
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
      width: "250px",
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

export default PharmacyTableList;
