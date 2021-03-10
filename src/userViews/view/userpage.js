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
        {props.Auth !== undefined && (
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
                    <form className="signup-form" >
                      <div className="form-group">
                        <h6 htmlFor="name">User Name</h6>
                        <p>{props.Auth.username}</p>
                        <hr />
                      </div>
                      <div className="form-group">
                        <h6 htmlFor="name">ชื่อ / First Name</h6>
                        <p>{props.Auth.firstname}</p>
                        <hr />
                      </div>
                      <div className="form-group">
                        <h6 htmlFor="name">สกุล / Last Name</h6>

                        <p>{props.Auth.lastname}</p>
                        <hr />
                      </div>
                      <div className="form-group">
                        <h6 htmlFor="email">Email Adderss</h6>
                        <p>{props.Auth.email}</p>
                        <hr />
                        <span className="error" />
                      </div>
                      <div className="form-group">
                        <h6 >เบอร์โทร / Phone Number</h6>
                        <p>{`0${props.Auth.phone}`}</p>
                        <hr />
                      </div>                
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
