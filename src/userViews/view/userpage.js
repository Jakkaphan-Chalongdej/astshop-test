import React from "react";
import Setting from "../components/setting/setting.layout";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.scss";
function Userpage(props) {
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
        {Object.keys(props.Auth).length > 0 && (
          <div className="container-user ">
            <section id="formHolder">
              <Row>
                <Col sm={0} md={6} xl={6} className=" brand">
                  <div className="logo">
                    <span>{props.Auth.firstname}</span>
                  </div>
                </Col>
                {/* Form Box */}
                <Col sm={6} md={6} xl={6} className="form-user form ">
                  {/* Signup Form */}
                  <div className="signup form-peice">
                    <form className="signup-form" action="#" method="post">
                      <div className="form-group">
                        <h6 htmlFor="name">User Name</h6>
                        <p>{props.Auth.username}</p>
                        <hr />
                      </div>
                      <div className="form-group">
                        <h6 htmlFor="name">First Name</h6>
                        <p>{props.Auth.firstname}</p>
                        <hr />
                      </div>
                      <div className="form-group">
                        <h6 htmlFor="name">Last Name</h6>

                        <p>{props.Auth.lastname}</p>
                        <hr />
                      </div>
                      <div className="form-group">
                        <h6 htmlFor="email">Email Adderss</h6>
                        <p>{props.Auth.email}</p>
                        <hr />
                        <span className="error" />
                      </div>
                      {/* <div className="form-group">
                        <h6 htmlFor="phone">Phone Number</h6>
                        <span>
                          <p>{"062-xxxxxxx"}</p>
                        </span>
                        <hr />
                      </div> */}
                      {/* <div className="form-group">
                        <h6 htmlFor="password">Password</h6>
                        <p>{"********"}</p>

                        <hr />

                        <span className="error" />
                      </div> */}

                      <div className="CTA">
                        <Link to="/user/edit/profile">
                          <button>EDIT</button>
                        </Link>
                      </div>
                    </form>
                  </div>
                  {/* End Signup Form */}
                </Col>
              </Row>
            </section>
          </div>
        )}
      </Setting>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    Auth: state.auth.userDetail,
  };
};
export default connect(mapStateToProps)(Userpage);
