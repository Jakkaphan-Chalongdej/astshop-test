import React from "react";
import axios from "axios";
import "./signin.scss";
export default function Signin() {
  const [formData, updateFormData] = React.useState();

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    axios
    .post("/api/product", formData)
    .then((response) => {
      console.log(response);
      console.log("Successfully");
    })
    .catch((error) => {
      console.log(error);
    });
  };
  return (
    <>
      <div>
        <div className="signin-wrapper slideDown">
          <div className="form-wrapper">
            <h5>Sign In</h5>
            <input name="email"  onChange={handleChange} placeholder="Email" className="form-field" />
            <input
             onChange={handleChange}
              name="password"
              placeholder="Password"
              className="form-field"
            />
            <button onClick={handleSubmit} className="button primary">Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
}
