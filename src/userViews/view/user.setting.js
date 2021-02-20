import React from "react";
import Setting from "../components/setting/setting.layout";
import { connect } from "react-redux";
import { updateUser } from "../../store/actions/actionLogin/auth";
import { Row, Col } from "react-bootstrap";
function UserSetting(props) {
  const dataform = [
    {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
    },
  ];
  let [formData, setform] = React.useState(dataform);
  const handleChange = (e) => {
    setform({ ...formData, [e.target.name]: e.target.value });
    console.log("handle Change:", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };
    props.Edit(props.Auth.user.id, data);
    setform(dataform);
    props.history.push("/user");
  };
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
            <Row>
              <Col sm={6} md={6} xl={6}  className="brand">
                {Object.keys(props.Auth.user).length > 0 && (
                  <div className="logo">
                    <span>MR.{props.Auth.user.firstname}</span>
                  </div>
                )}
              </Col>
              {/* Form Box */}
              <Col sm={6} md={6} xl={6} className="form">
                {/* Signup Form */}
                <div className="signup form-peice">
                  <form className="signup-form">
                    <div className="form-group">
                      <label htmlFor="name">First Name</label>
                      <input
                        type="text"
                        name="firstname"
                        id="name"
                        value={formData.firstname}
                        onChange={handleChange}
                        className="name"
                      />
                      <span className="error" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Last Name</label>
                      <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        id="name"
                        className="name"
                      />
                      <span className="error" />
                    </div>
                    <div className="form-group">
                      <label>Email Adderss</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        id="email"
                        className="email"
                      />
                      <span className="error" />
                    </div>
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        id="email"
                        className="email"
                      />
                      <span className="error" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="pass"
                      />
                      <span className="error" />
                    </div>
                    <div className="CTA mb-4">
                      <button onClick={handleSubmit}>Update Now</button>
                    </div>
                  </form>
                </div>
                {/* End Signup Form */}
              </Col>
            </Row>
          </section>
        </div>
      </Setting>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    Auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Edit: (id, update) => dispatch(updateUser(id, update)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSetting);
