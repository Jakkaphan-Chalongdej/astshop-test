import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { FaBox } from "react-icons/fa";
import "./style.css";
const LeftColumn = () => {
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
        <Link to="/user/payment">
          <CreditCardIcon />{" "}
          <span style={{ marginLeft: "10px" }}> Payment Methods</span>
        </Link>
        <hr />
        <Link to="/user/delivery-addresses">
          <FaBox style={{ marginTop: "-5px" }} />
          <span style={{ marginLeft: "20px" }}>Delivery Addresses</span>
        </Link>
        <hr />
        <div></div>
      </div>
    </React.Fragment>
  );
};

export default LeftColumn;
