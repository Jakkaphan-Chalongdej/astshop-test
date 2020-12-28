import React from "react";
import MenuItem from "../UI/MenuItem/MenuItem";
import PropTypes from "prop-types";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);
const MenuComponent = (props) => {
  return (
    <React.Fragment>
      <MenuItem linkTo={"/"}>Home</MenuItem>
      <MenuItem linkTo={"/all"}>All</MenuItem>
      <MenuItem linkTo={"/category/camera"}>Camera</MenuItem>
      {/* <MenuItem linkTo={"/category/women"}>Women</MenuItem>
      <MenuItem linkTo={"/category/kids"}>Kids</MenuItem> */}
      <MenuItem linkTo={"/sale"}>Sale</MenuItem>
      <MenuItem linkTo={"/cart"}>
        <IconButton style={{ marginTop:"-10px",}} aria-label="cart">
          <StyledBadge  badgeContent={props.cartCount}color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </MenuItem>
    </React.Fragment>
  );
};

MenuComponent.propTypes = {
  cartCount: PropTypes.number,
};

export default MenuComponent;
