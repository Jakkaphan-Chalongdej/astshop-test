import React from "react";
import PropTypes from "prop-types";

const SideMenuWrapper = (props) => {
  return (
    <div
      className={`side-menu-wrapper ${props.showSideBar ? "show" : "hide"}`}
      onClick={props.toggleSideMenu}
    >
      <div className="side-img">
        <img src="../../../../ast2.png" alt="ast2" width="80px"></img>
      </div>

      {props.children}
    </div>
  );
};

SideMenuWrapper.propTypes = {
  showSideBar: PropTypes.bool.isRequired,
  toggleSideMenu: PropTypes.func.isRequired,
};

export default SideMenuWrapper;
