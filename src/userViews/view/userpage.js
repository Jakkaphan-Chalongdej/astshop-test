import React from "react";
import Setting from "../components/setting/setting.layout";
import { Link } from "react-router-dom";
import "./style.scss";
function Userpage() {
  return (
    <>
      <Setting
        breadCrumbs={[
          {
            label: "profile",
            to: "/user",
          },
        ]}
      >
        <div className="container-user ">
          <section id="formHolder">
            <div className="row">
              <div className="col-sm-6 brand">
                <div className="logo">
                  <span>{"MR.Jakkaphan"}</span>
                </div>
              </div>
              {/* Form Box */}
              <div className="col-sm-6 form">
                {/* Signup Form */}
                <div className="signup form-peice">
                  <form className="signup-form" action="#" method="post">
                    <div className="form-group">
                      <h6 htmlFor="name">First Name</h6>
                      <p>{"Jakkaphan"}</p>
                      <hr />
                    </div>
                    <div className="form-group">
                      <h6 htmlFor="name">Last Name</h6>

                      <p>{"Chalongdet"}</p>
                      <hr />
                    </div>
                    <div className="form-group">
                      <h6 htmlFor="email">Email Adderss</h6>
                      <p>{"cccc@Email.com"}</p>
                      <hr />
                      <span className="error" />
                    </div>
                    <div className="form-group">
                      <h6 htmlFor="phone">Phone Number</h6>
                      <span><p>{"062-xxxxxxx"}</p></span> 
                      <hr />
                    </div>
                    <div className="form-group">
                      <h6 htmlFor="password">Password</h6>
                      <p>{"********"}</p>

                      <hr />

                      <span className="error" />
                    </div>

                    <div className="CTA">
                      <Link to="/user/edit/profile">
                        <button>EDIT</button>
                      </Link>
                    </div>
                  </form>
                </div>
                {/* End Signup Form */}
              </div>
            </div>
          </section>
        </div>
      </Setting>
    </>
  );
}

export default Userpage;
