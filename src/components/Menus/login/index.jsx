import React, { useState } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import { Navbar } from "react-bootstrap";
import Signup from "./sign-up/Signup";
import Signin from "./sign-in/Signin";
import "./sign-in/signin.scss";
import PropTypes from "prop-types";
import { logout } from "../../../store/actions/actionLogin/auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Login(props) {
  const [showFormSignUp, setShowForm] = useState(false);
  const [showFormSignIn, setShowForm2] = useState(false);

  const showform = () => {
    setShowForm(!showFormSignUp);
    setShowForm2(false);
  };

  const showform2 = () => {
    props.showSideBar
      ? "true"(setShowForm2(!showFormSignIn), setShowForm(false))
      : setShowForm2(false);
    console.log("showMenuLogin", props.showMenuLogin);
    setShowForm2(!showFormSignIn);
    setShowForm(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    props.Logout();
  };
  return (
    <>
      <Navbar style={{ marginTop: "-10px" }}>
        <Navbar>
          <div onClick={showform}>sign up</div>
        </Navbar>
        <span style={{ marginLeft: "10px" }}>|</span>
        <Navbar>
          <span style={{ marginLeft: "5px" }}>
            {props.Auth.user !== null ? (
              <div>
                <span style={{ marginLeft: "5px" }}>
                  Hi {props.Auth.user.username}
                </span>
                <span>
                  <Button
                    // aria-controls="simple-menu"
                    // aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <AccountCircleIcon style={{ color: "#fff" }} />
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link to="/user"><AccountBoxIcon/>My account</Link>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <Link to="/"><ExitToAppIcon/>Logout</Link>
                    </MenuItem>
                  </Menu>
                </span>
              </div>
            ) : (
              <div onClick={showform2}> sign in</div>
            )}
          </span>
        </Navbar>
      </Navbar>
      {showFormSignUp && (
        <>
          <div className="box">
            <div className="fullscreen">
              <Signup />
              <div onClick={showform}>
                <div className="icon-wrapper ">
                  <CancelIcon style={{ color: "#57aef5" }} />
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
                <CancelIcon style={{ color: "#57aef5" }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
Login.propTypes = {
  Auth: PropTypes.object.isRequired,
  showMenuLogin: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    Auth: state.auth,
    showMenuLogin: state.product.showMenuLogin,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    Logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
