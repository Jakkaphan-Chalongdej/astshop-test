import React from "react";
import axios from "axios";
import "../sign-in/signin.scss";
export default function Signup() {
  const [formData, updateFormData] = React.useState();

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
      <div >
        <div className="signin-wrapper slideDown ">
          <div className="form-wrapper ">
            <h5>Sign Up</h5>
            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="form-field"
              
            />
            <input
              name="first-name"
              placeholder="First Name"
              onChange={handleChange}
              className="form-field"
            />
            <input
              name="last-name"
              placeholder="Last Name"
              onChange={handleChange}
              className="form-field"
            />

            <input
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="form-field"
            />
            <input
              name="repeat-password"
              placeholder="Repeat Password"
              onChange={handleChange}
              className="form-field"
            />
            <button onClick={handleSubmit} className="button primary">
              Sign Up
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
}
