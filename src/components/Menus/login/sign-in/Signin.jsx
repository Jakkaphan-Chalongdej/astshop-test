import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./signin.scss";

const recaptchaRef = React.createRef();
export default function Signin() {
  const [formData, updateFormData] = React.useState([
    {
      username: "",
      password: "",
      recaptcha: "",
    },
  ]);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: formData.username,
      password: formData.password,
      recaptcha: formData.recaptcha,
    };
    console.log(data);
  };
  return (
    <>
      <div>
        <div className="signin-wrapper slideDown">
          <div className="form-wrapper">
            <h5>Sign In</h5>
            <input
              name="username"
              onChange={handleChange}
              placeholder="Username"
              className="form-field"
            />
            <input
              onChange={handleChange}
              name="password"
              placeholder="Password"
              className="form-field"
            />
            <button onClick={handleSubmit} className="button primary">
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
        </div>
      </div>
    </>
  );
}
