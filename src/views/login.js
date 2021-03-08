import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./login.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { connect } from "react-redux";
import { login } from "../store/actions/actionLogin/auth";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Login(props) {
  const [handleLogin, sethandleLogin] = React.useState({
    successful: false,
  });

  const formdefault = {
    username: null,
    password: null,
  };
  const [formData, updateFormData] = React.useState(formdefault);
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData);
  const [disable, setdisabled] = React.useState(false);
  const coll = React.useCallback;
  const [type, setType] = React.useState("password");
  const showHide = (e) => {
    e.preventDefault();
    type === "input" ? setType("password") : setType("input");
  };

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      username: formData.username,
      password: formData.password,
    };
    formData.username != null && formData.password != null
      ? props
          .userLogin(data)
          .then(() => {
            sethandleLogin({
              ...handleLogin,
              successful: true,
            });
            props.toogleSideLogin(false);
            updateFormData(formdefault);
            props.history.push("/");
          })
          .catch(() => {
            sethandleLogin({ ...handleLogin, successful: false });
          })
      : updateFormData(formdefault);
  }
  const { message } = props;
  return (
    <>
      <div>
        <div className="signin_wrapper">
          {handleLogin && (
            <div className="form_wrapper">
              <h5>Sign In</h5>
              <input
                name="username"
                onChange={handleChange}
                placeholder="Username"
                className="form_field"
              />
              <span>
                <input
                  onChange={handleChange}
                  type={type}
                  minlength="8"
                  name="password"
                  placeholder="Password"
                  className="form_field"
                  required
                />
              </span>
              <div className="showpass1">
                <VisibilityIcon
                  style={{ color: "#57aef5" }}
                  onClick={showHide}
                />
              </div>
              <Button onClick={handleSubmit} disabled={!disable}>
                Sign In
              </Button>
              <Link to="/register">
                <Button>Sign Up</Button>
              </Link>

              <ReCAPTCHA
                sitekey="6Lcz7UoaAAAAANMZ9666YHkY4_Hc95wdTJZDWtMm"
                theme="dark"
                name="recaptcha"
                onChange={coll(() => setdisabled(true))}
              ></ReCAPTCHA>
            </div>
          )}
          {message && (
            <div className="form_group">
              <div
                className={
                  handleLogin.successful
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
    userLogin: (data) => dispatch(login(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
