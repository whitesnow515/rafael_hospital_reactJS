import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  //add remove
  const [inputFields, setInputFields] = useState([{}]);

  const addInputField = () => {
    setInputFields([...inputFields, {}]);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChanges = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };
  return (
    <>
      {/* <!-- Registrations --> */}

      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Registrations</h4>
          {inputFields.map((data, index) => {
            return (
              <div
                className="registrations-info"
                key={index}
                onChange={(evnt) => handleChanges(index, evnt)}
              >
                <div className="row form-row reg-cont">
                  <div className="col-12 col-md-5">
                    <div className="form-group">
                      <label>Registrations</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-md-5">
                    <div className="form-group">
                      <label>Year</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-md-2">
                    <div className="delete-icon">
                      <label className="d-md-block d-sm-none d-none">
                        &nbsp;
                      </label>
                      <Link
                        to="#0"
                        className="btn btn-danger trash"
                        onClick={removeInputFields}
                      >
                        <i className="far fa-trash-alt"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="add-more" onClick={addInputField}>
            <Link to="#" className="add-reg">
              <i className="fa fa-plus-circle"></i> Add More
            </Link>
          </div>
        </div>
      </div>

      {/* <!-- /Registrations --> */}
    </>
  );
};

export default Registration;
