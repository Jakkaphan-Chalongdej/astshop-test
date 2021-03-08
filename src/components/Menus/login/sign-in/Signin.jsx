import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./signin.scss";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { connect } from "react-redux";
import { login } from "../../../../store/actions/actionLogin/auth";
import { toogleSideLogin } from "../../../../store/actions/Action.product";
import { Button } from "react-bootstrap";
function Signin(props) {
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
  const [type, setType] = React.useState("password");
  const showHide = (e) => {
    e.preventDefault();
    type === "input" ? setType("password") : setType("input");
  };

  const [disable, setdisabled] = React.useState(false);
  const coll = React.useCallback;

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
            updateFormData(formdefault);
            props.toogleSideLoginProp();
            props.history.push("/");
          })
          .catch(() => {
            sethandleLogin({ ...handleLogin, successful: false });
          })
      : updateFormData(formdefault);
  }
  // const { message } = props;
  return (
    <>
      <div>
        <div className="signin-wrapper slideDown">
          {handleLogin && (
            <div className="form-wrapper">
              <h5>Sign In</h5>
              <input
                name="username"
                onChange={handleChange}
                placeholder="Username"
                className="form-field"
              />
              <span>
                <input
                  onChange={handleChange}
                  type={type}
                  minlength="8"
                  name="password"
                  placeholder="Password"
                  className="form-field"
                  required
                />
              </span>
              <div className="showpass">
                <VisibilityIcon
                  style={{ color: "#57aef5" }}
                  onClick={showHide}
                />
              </div>
              <Button onClick={handleSubmit} disabled={!disable}>
                Sign In
              </Button>
              <ReCAPTCHA
                sitekey="6Lcz7UoaAAAAANMZ9666YHkY4_Hc95wdTJZDWtMm"
                theme="dark"
                name="recaptcha"
                onChange={coll(() => setdisabled(true))}
              ></ReCAPTCHA>
            </div>
          )}
          {/* {message && (
            <div className="form-group">
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
          )} */}
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
    toogleSideLoginProp: () => dispatch(toogleSideLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
