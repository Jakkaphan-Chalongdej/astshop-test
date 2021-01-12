import React from "react";
import Menu from "../UI/Menu/Menu";
import MenuComponent from "../Menus/MenuComponent";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
const MainMenu = (props) => {
  return (
    <Navbar
      className="navbar-expand-md navbar-light bg-light fixed-top"
      style={{ boxShadow: "0 2px 2px -2px gray" }}
    >
      <div className="container " style={{ width: "1400px" }}>
        <div className="navbar-brand">
          <NavLink to={"/"} exact>
            <picture>
              <img
                src="/logo-title.png"
                alt="AST-logo"
                width={64}
                height={42}
                quality="70%"
              />
            </picture>
          </NavLink>
        </div>
        <button className="navbar-toggler" onClick={props.toggleSideBar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <Menu menuClasses="navbar-nav ml-auto mt-2 mt-lg-0">
            <MenuComponent cartCount={props.cartItemNumber} />
            <IconButton color="inherit">
              <AccountCircleIcon />
              <span style={{ marginLeft: "5px" }}>sign in</span>
            </IconButton>
          </Menu>
        </div>
      </div>
    </Navbar>
  );
};

MainMenu.propTypes = {
  toggleSideBar: PropTypes.func.isRequired,
  cartItemNumber: PropTypes.number.isRequired,
};

export default MainMenu;
