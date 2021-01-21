import React from "react";
import "./signin.scss";
export default function Signin() {
  return (
    <>
      <div>
        <div className="signin-wrapper slideDown">
          <div className="form-wrapper">
            <h5>Sign In</h5>
            <input type="email" placeholder="Email" className="form-field" />
            <input
              type="password"
              placeholder="Password"
              className="form-field"
            />
            <button className="button primary">Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
}
