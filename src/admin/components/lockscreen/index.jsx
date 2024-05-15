import React from "react";
import { avatar2, logo } from "../imagepath";
import { Link } from "react-router-dom";
const Lockscreen = () => {
  const config = "/react/template";
  return (
    <>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={logo} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <div className="lock-user">
                    <img
                      className="rounded-circle"
                      src={avatar2}
                      alt="User Image"
                    />
                    <h4>John Doe</h4>
                  </div>
                  {/* Form */}
                  <form action={`${config}admin`}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group mb-0">
                      <button className="btn btn-primary w-100" type="submit">
                        Enter
                      </button>
                    </div>
                  </form>
                  {/* /Form */}
                  <div className="text-center dont-have">
                    Sign in as a different user?{" "}
                    <Link to="/admin/login">Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lockscreen;
