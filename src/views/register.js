import React from "react";
import { connect } from "react-redux";
import { register } from "../store/actions/actionLogin/auth";
import "./login.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Button } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
function Register(props) {
  const [handleRegister, sethandleRegister] = React.useState({
    successful: false,
  });
  const formdefault = {
    username: null,
    email: null,
    password: null,
  };
  let [formData, setform] = React.useState(formdefault);
  const [disable, setdisabled] = React.useState(false);
  const coll = React.useCallback;
  const [type, setType] = React.useState("password");
  const showHide = (e) => {
    e.preventDefault();
    type === "input" ? setType("password") : setType("input");
  };
  const handleChange = (e) => {
    setform({ ...formData, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    formData.email != null &&
    formData.username != null &&
    formData.password != null
      ? props
          .Register(data)
          .then(() => {
            sethandleRegister({
              ...handleRegister,
              successful: true,
            });
            props.history.push("/user");
          })
          .catch(() => {
            sethandleRegister({ ...handleRegister, successful: false });
          })
      : setform(formdefault);
  }
  const { message } = props;
  return (
    <>
      <div>
        <div className="signin_wrapper  ">
          {handleRegister && (
            <form className="form_wrapper ">
              <h5>Sign Up</h5>

              <input
                onChange={handleChange}
                value={formData.username}
                name="username"
                placeholder="Username"
                className="form_field"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="form_field"
              />
              <input
                type={type}
                onChange={handleChange}
                value={formData.password}
                name="password"
                placeholder="Password"
                className="form_field"
              />
              <div className="showpass_signup">
                <VisibilityIcon
                  style={{ color: "#57aef5" }}
                  onClick={showHide}
                />
              </div>
              <Button
                onClick={handleSubmit}
                className="button primary"
                disabled={!disable}
              >
                Sign Up
              </Button>
              <ReCAPTCHA
                sitekey="6Lcz7UoaAAAAANMZ9666YHkY4_Hc95wdTJZDWtMm"
                theme="dark"
                name="recaptcha"
                onChange={coll(() => setdisabled(true))}
              ></ReCAPTCHA>
            </form>
          )}
          {message && (
            <div className="form_group">
              <div
                className={
                  handleRegister.successful
                    ? "alert alert-success"
                    : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const { message } = state.message;
  return {
    message,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Register: (data) => dispatch(register(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
