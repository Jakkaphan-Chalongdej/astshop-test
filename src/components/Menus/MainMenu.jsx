import React from "react";
// import Menu from "../UI/Menu/Menu";
import MenuComponent from "../Menus/MenuComponent";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import "../../App.css";
import Login from "./login";
const MainMenu = (props) => {
  return (
    <>
      <Navbar expand="lg" className="navtop fixed-top">
        <div className="container ">
          <Nav.Link className="ml-auto">
            <ul style={{ marginTop: "15px" }}>
              <Login         
              />
            </ul>
          </Nav.Link>
        </div>
      </Navbar>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        className="fixed-top navtop2"
      >
        <div className="container ">
          <NavbarBrand>
            <NavLink to={"/"} exact>
              <picture>
                <img
                  src="/ast2.png"
                  alt="AST-logo"
                  width={70}
                  height="auto"
                  quality="70%"
                />
              </picture>
            </NavLink>
          </NavbarBrand>

          <button className="navbar-toggler " onClick={props.toggleSideBar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <MenuComponent cartCount={props.cartItemNumber} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};
MainMenu.propTypes = {
  toggleSideBar: PropTypes.func.isRequired,
  cartItemNumber: PropTypes.number.isRequired,
  cartCount: PropTypes.number,
};
export default MainMenu;
