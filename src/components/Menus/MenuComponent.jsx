import React from "react";

import MenuItem from "../UI/MenuItem/MenuItem";
import PropTypes from "prop-types";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./menu.scss";
import "./submenu.scss";
import SubmenuComponent from "../../components/Menus/submenu";
import { Navbar, Nav } from "react-bootstrap";
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    backgroundColor: "#f17e0a",
    color: "#fff",
    padding: "0 4px",
  },
}))(Badge);

// const menuName = [
//   { href: "/", label: "Home" },
//   { href: "/sale", label: "Sale" },
//   { href: "/contact", label: "Contact" },
// ];

const MenuComponent = (props) => {
  return (
    <React.Fragment>
      <Nav>
        <Navbar>
          <MenuItem linkTo="/">หน้าหลัก</MenuItem>
        </Navbar>
        <Navbar>
          <MenuItem linkTo="/all">สินค้าทั้งหมด</MenuItem>
        </Navbar>
        <div className="menu-item menu-top" >
          <SubmenuComponent />
        </div>
        <Navbar>
          <MenuItem  linkTo="/sale">ลดราคา</MenuItem>
        </Navbar>
        <Navbar>
          <MenuItem linkTo="/contact">ติดต่อ</MenuItem>
        </Navbar>
        <MenuItem linkTo={"/cart"}>
          <IconButton aria-label="cart">
            <StyledBadge
              badgeContent={props.cartCount}
              style={{ color: "#6e6e6e" }}
            >
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </MenuItem>
      </Nav>
    </React.Fragment>
  );
};

MenuComponent.propTypes = {
  cartCount: PropTypes.number,
};

export default MenuComponent;
