import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Breadcrumbs() {
  
  return (
    <>
      <Breadcrumb className="breadcrumb-bar-two">

        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <Breadcrumb.Item to="#" className="breadcrumb-title"
              >
                Dashboard
              </Breadcrumb.Item>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <Breadcrumb.Item to="/index" className="breadcrumb-item">Home</Breadcrumb.Item>
                  <Breadcrumb.Item active className="breadcrumb-item" aria-current="page">Dashboard</Breadcrumb.Item>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </Breadcrumb>

    </>
  );
}

export default Breadcrumbs;