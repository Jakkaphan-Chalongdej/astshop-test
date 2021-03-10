import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import DashboardIcon from '@material-ui/icons/Dashboard';
import { FaBox } from "react-icons/fa";
import { connect } from "react-redux";
import "./style.css";
const LeftColumn = (props) => {
  var Roles =
    Object.keys(props.Auth.user).length > 0 &&
    props.Auth.user.roles.toString();
  
  return (
    <React.Fragment>
      <div className={"container shop-left-column py-4 "}>
        <p>
          <div>
            <h5>Setting !</h5>
          </div>
        </p>
        <Link to="/user">
          <PersonIcon style={{ marginTop: "-6px" }} />{" "}
          <span style={{ marginLeft: "10px" }}>Account Details</span>
        </Link>
        <hr />
        <Link to="/user/order">
          <CreditCardIcon />{" "}
          <span style={{ marginLeft: "10px" }}> Order</span>
        </Link>
        <hr />
        <Link to="/user/delivery-addresses">
          <FaBox style={{ marginTop: "-2px" }} />
          <span style={{ marginLeft: "25px" }}>Delivery Addresses</span>
        </Link>
        <hr />
        {Roles === "ROLE_ADMIN" ? (
          <Link to="/admin">
            <DashboardIcon style={{ marginTop: "-5px" }} />
            <span style={{ marginLeft: "15px" }}>Dashboard Admin</span>
            <hr />
          </Link>
        ) : null}

        <div></div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    Auth: state.auth,
  };
};
export default connect(mapStateToProps)(LeftColumn);
