import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <section className="comp-section">
      <div className="comp-header">
        <h3 className="comp-title">Breadcrumbs</h3>
        <div className="line" />
      </div>
      <div className="card">
        <div className="card-body">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                Home
              </li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="#">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Products
              </li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="#">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#">Products</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Accessories
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
