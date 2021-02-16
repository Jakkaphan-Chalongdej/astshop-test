import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./signin.scss";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { connect } from "react-redux";
import { login } from "../../../../store/actions/actionLogin/auth";
import { toogleSideLogin } from "../../../../store/actions/Action.product";
const recaptchaRef = React.createRef();
function Signin(props) {
  const [handleLogin, sethandleLogin] = React.useState({
    successful: false,
  });
  const [iden, setiden] = React.useState(false);
  const formdefault = {
    username: "",
    password: "",
  };
  const [formData, updateFormData] = React.useState(formdefault);
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (Object.keys(formData).length < 1) {
      updateFormData(formdefault);
    } else setiden(true);
  };
  console.log("value:", formData);
  function onChange(value) {
    console.log("Captcha value:", value);
  }

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
    Object.keys(data).length > 0
      ? props
          .userLogin(data)
          .then(() => {
            sethandleLogin({
              ...handleLogin,
              successful: true,
            });
            props.toogleSideLogin(false);
            updateFormData(formdefault);
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
              <button onClick={handleSubmit} disabled={!iden}>
                Sign In
              </button>
              <ReCAPTCHA
                sitekey="6Lcz7UoaAAAAANMZ9666YHkY4_Hc95wdTJZDWtMm"
                theme="dark"
                name="recaptcha"
                onChange={onChange}
                ref={recaptchaRef}
              ></ReCAPTCHA>
            </div>
          )}
          {message && (
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
    toogleSideLogin: (data) => dispatch(toogleSideLogin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
