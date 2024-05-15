import React, { useState } from "react";
import { Link } from "react-router-dom";
const Experience = () => {
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
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Experience</h4>
          {inputFields.map((data, index) => {
            return (
              <div
                className="experience-info"
                key={index}
                onChange={(evnt) => handleChanges(index, evnt)}
              >
                <div className="row form-row experience-cont">
                  <div className="col-12 col-md-10 col-lg-11">
                    <div className="row form-row">
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group">
                          <label>Hospital Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="form-group">
                          <label>From</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group">
                          <label>To</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-lg-1">
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

                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group">
                          <label>Designation</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="add-more" onClick={addInputField}>
            <Link to="#0" className="add-experience">
              <i className="fa fa-plus-circle"></i> Add More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
