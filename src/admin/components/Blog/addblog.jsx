/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SidebarNav from "../sidebar";
import FeatherIcon from "feather-icons-react";
import SelectField from "../commoncomponent/selectfield";

const AddBlog = () => {
  const [blog, setBlog] = useState([
    { label: "Category", value: "Category" },
    { label: "Dermotology", value: "Dermotology" },
    { label: "Neurology", value: "Neurology" },
  ]);
  const [blogtype, setBlogType] = useState([
    { label: "Blog Type", value: "Blog Type" },
    { label: "Standard Blog", value: "Standard Blog" },
    { label: "Video Blog", value: "Video Blog" },
  ]);

  const [stateValue, setStateValue] = useState();

  return (
    <>
      <SidebarNav />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Add Blog */}
          <div className="row">
            <div className="col-md-12">
              <h5 className="mb-3">Add Blog</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group form-focus">
                    <div className="input-placeholder passcode-wrap mail-box">
                      <label className="focus-label">
                        Blog Title <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control floating" />
                    </div>
                  </div>
                  <div className="blogs form-focus">
                    <SelectField
                      options={blog}
                      errorMessage={""}
                      error={false}
                      label={false}
                      placeholder={"Neurology"}
                      isRequired={false}
                      onChangeValue={(value) => setStateValue(value?.value)}
                    />
                  </div>
                  <div className="blogs form-focus">
                    <SelectField
                      options={blogtype}
                      errorMessage={""}
                      error={false}
                      label={false}
                      placeholder={"Blog Type"}
                      isRequired={false}
                      onChange={setStateValue}
                      // onChangeValue={(value) => setStateValue(value?.value) }
                    />
                  </div>
                  <div className="form-group form-focus">
                    <textarea
                      rows={4}
                      className="form-control bg-grey floating"
                      defaultValue={""}
                    />
                    <label className="focus-label">
                      Blog Title <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="form-group">
                    <div className="change-photo-btn  bg-grey">
                      <div>
                        <FeatherIcon icon="upload" />
                        <p>Upload File</p>
                      </div>
                      <input type="file" className="upload" />
                    </div>
                  </div>
                  <div id="videoId" style={{ display: "none" }}>
                    <div className="form-group form-focus">
                      <input type="text" className="form-control floating" />
                      <label className="focus-label">
                        Video ID <span className="text-danger">*</span>
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary save-btn">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /Add Blog */}
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default AddBlog;
