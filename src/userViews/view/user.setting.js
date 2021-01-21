import React from "react";
import Setting from "../components/setting/setting.layout";

function UserSetting() {
  return (
    <>
      <Setting
        breadCrumbs={[
          {
            label: "profile",
            to: "/user/edit/profile",
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
                  <form className="signup-form" action="/users" method="post">
                    <div className="form-group">
                      <label htmlFor="name">First Name</label>
                      <input
                        type="text"
                        name="firstname"
                        id="name"
                        className="name"
                      />
                      <span className="error" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Last Name</label>
                      <input
                        type="text"
                        name="lastname"
                        id="name"
                        className="name"
                      />
                      <span className="error" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Adderss</label>
                      <input
                        type="email"
                        name="emailAdress"
                        id="email"
                        className="email"
                      />
                      <span className="error" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">
                        Phone Number - <small>Optional</small>
                      </label>
                      <input type="text" name="phone" id="phone" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="pass"
                      />
                      <span className="error" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="passwordCon">Confirm Password</label>
                      <input
                        type="password"
                        name="passwordCon"
                        id="passwordCon"
                        className="passConfirm"
                      />
                      <span className="error" />
                    </div>
                    <div className="CTA">
                      <input
                        type="submit"
                        defaultValue="Signup Now"
                        id="submit"
                      />
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

export default UserSetting;
