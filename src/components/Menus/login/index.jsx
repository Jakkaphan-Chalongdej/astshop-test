import React, { useState } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import { Navbar } from "react-bootstrap";
import Signup from "./sign-up/Signup";
import Signin from "./sign-in/Signin";
import "./sign-in/signin.scss";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import MenuItem from "../../UI/MenuItem/MenuItem";
function Login() {
  const [showFormSignUp, setShowForm] = useState(false);
  const [showFormSignIn, setShowForm2] = useState(false);
 

  const showform = () => {
    setShowForm(!showFormSignUp);
    setShowForm2(false);
  };
  const showform2 = () => {
    setShowForm2(!showFormSignIn);
    setShowForm(false);
  };
  

  

 

  return (
    <>
      <Navbar style={{ marginTop: "-10px" }}>
        <Navbar>
          <div onClick={showform}>
            <MenuItem linkTo="">sign up</MenuItem>
          </div>
        </Navbar>
        <span style={{ marginLeft: "10px" }}>|</span>
        <Navbar>
          <div onClick={showform2}>
            <MenuItem linkTo="">
              <AccountCircleIcon />
             
              <span style={{ marginLeft: "5px" }}>{"Welcome jakkaphan"}</span>
            </MenuItem>
          </div>
         
        </Navbar>
      </Navbar>
      {showFormSignUp && (
        <>
          <div className="box">
            <div className="fullscreen">
              <Signup />
              <div onClick={showform}>
                <div className="icon-wrapper ">
                  <CancelIcon style={{ color: "black" }} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {showFormSignIn && (
        <div className="box">
          <div className="fullscreen">
            <Signin />
            <div onClick={showform2}>
              <div className="icon-wrapper ">
                <CancelIcon style={{ color: "black" }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;