import React from 'react'
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <section className="comp-section">
              <div className="comp-header">
                <h3 className="comp-title">Pagination</h3>
                <div className="line" />
              </div>
              <div className="card">
                <div className="card-body">
                  <div>
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <Link className="page-link" to="#" tabIndex={-1}>
                          Previous
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          2 <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pagination">
                      <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                          <span className="sr-only">Previous</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                          <span className="sr-only">Next</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pagination pagination-lg">
                      <li className="page-item disabled">
                        <Link className="page-link" to="#" tabIndex={-1}>
                          Previous
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          2 <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pagination pagination-sm mb-0">
                      <li className="page-item disabled">
                        <Link className="page-link" to="#" tabIndex={-1}>
                          Previous
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          2 <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default Pagination
