/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SidebarNav from "../sidebar";
import { Link } from "react-router-dom";
import { avatar05 } from "../imagepath";
import FeatherIcon from "feather-icons-react";
import SelectField from "../commoncomponent/selectfield";

const EditBlog = () => {
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
              <h5 className="mb-3">Edit Blog</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group form-focus">
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="Doccure – Making your clinic painless visit?"
                    />
                    <label className="focus-label">
                      Blog Title <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="form-focus blogs">
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
                  <div className="form-focus blogs">
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
                      className="form-control floating"
                      defaultValue={
                        "Topical medication, also known as topical chemotherapy, is a type of skin cancer treatment where medication in the form of a cream or ointment is applied directly to the skin. The goal is to kill the cancerous cells over a period of time.If you have a basal or squamous cell carcinoma that has not spread to the lymph nodes, your doctor may recommend topical chemotherapy for treatment.If you are a candidate for topical chemotherapy, your Mercy Health doctor will evaluate your case and recommend a treatment plan."
                      }
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
                  <div className="upload-file">
                    <h6>Uploaded files</h6>
                    <div className="up-img">
                      <img
                        className="avatar avatar-img"
                        src={avatar05}
                        alt="User Image"
                      />
                      <Link to="#" className="close-icon text-danger">
                        <i className="feather-x-circle" />
                      </Link>
                    </div>
                    <p>IMG_3892.jpg</p>
                  </div>
                  <div id="videoId" style={{ display: "none" }}>
                    <div className="form-group form-focus">
                      <input
                        type="text"
                        className="form-control floating"
                        defaultValue="AK6LS8NFI2"
                      />
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

export default EditBlog;
