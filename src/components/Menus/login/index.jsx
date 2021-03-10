import React from "react";
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
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  toogleSideLogin,
  toogleSideSignup,
} from "../../../store/actions/Action.product";

function Login(props) {
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
  const handleClickSignup = (e) => {
    e.preventDefault();
    if (props.showMenuLoginProp === true) {
      props.toogleSideLoginProp();
    }
    props.toogleSideSignupProp();
  };
  const handleClickSignin = (e) => {
    e.preventDefault();
    props.toogleSideLoginProp();
    if (props.showMenuSignupProp === true) {
      props.toogleSideSignupProp();
    }
  };
  return (
    <>
      <Navbar style={{ marginTop: "-10px" }}>
        <Navbar>
          <div onClick={(e) => handleClickSignup(e)}>สร้างบัญชีใหม่</div>
        </Navbar>
        <span style={{ marginLeft: "10px" }}>|</span>
        <Navbar>
          <span style={{ marginLeft: "5px" }}>
            {props.Auth.user !== null ? (
              <div>
                <span>
                  <Button
                    // aria-controls="simple-menu"
                    // aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <span
                      style={{
                        marginLeft: "-4px",
                        marginRight: "5px",
                        color: "#fff",
                      }}
                    >
                      {`สวัสดี ${props.Auth.user.username}`}
                    </span>
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
                      <Link to="/user">
                        <AccountBoxIcon />
                        บัญชี
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <Link to="/">
                        <ExitToAppIcon />
                        ออกจากระบบ
                      </Link>
                    </MenuItem>
                  </Menu>
                </span>
              </div>
            ) : (
              <div onClick={(e) => handleClickSignin(e)}>เข้าสู่ระบบ</div>
            )}
          </span>
        </Navbar>
      </Navbar>
      <div className={`box ${props.showMenuSignupProp ? "show" : "hide"}`}>
        <div className="fullscreen">
          <Signup />
          <div onClick={props.toogleSideSignupProp}>
            <div className="icon-wrapper ">
              <CancelIcon style={{ color: "#57aef5" }} />
            </div>
          </div>
        </div>
      </div>

      <div className={`box ${props.showMenuLoginProp ? "show" : "hide"}`}>
        <div className="fullscreen">
          <Signin />
          <div onClick={props.toogleSideLoginProp}>
            <div className="icon-wrapper ">
              <CancelIcon style={{ color: "#57aef5" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Login.propTypes = {
  Auth: PropTypes.object.isRequired,
  showMenuLogin: PropTypes.bool,
  toggleMenuLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    Auth: state.auth,
    showMenuLoginProp: state.product.showMenuLogin,
    showMenuSignupProp: state.product.showMenuSignup,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Logout: () => {
      dispatch(logout());
    },
    toogleSideSignupProp: () => dispatch(toogleSideSignup()),
    toogleSideLoginProp: () => dispatch(toogleSideLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
