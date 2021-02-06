import React from "react";
import MainWrapper from "../components/UI/Wrappers/MainPageWrapper";
import SideMenuWrapper from "../components/UI/Wrappers/SideMenuWrapper";
import ContentWrapper from "../components/UI/Wrappers/PageContentWrapper";
import MainMenu from "../components/Menus/MainMenu";
import SideMenu from "../components/Menus/SideMenu";
import Footer from "../components/Footer/Index";
import Modal from "../components/UI/Modal/Modal";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./layout.scss";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  appBar: {
    top: "auto",
    bottom: 0,
    background: "#57aef5",
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -20,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);
const MainLayout = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <MainWrapper>
        <div>
          <SideMenuWrapper
            showSideBar={props.showSideBar}
            toggleSideMenu={props.toggleSideBar}
          >
            <SideMenu
              cartItemNumber={props.storeCartCount}
              showBackDrop={props.showSideBar}
            />
          </SideMenuWrapper>
          <ContentWrapper>
            <header>
              <MainMenu
                cartItemNumber={props.storeCartCount}
                toggleSideBar={props.toggleSideBar}
              />
            </header>
            <main style={{ marginTop: "160px" }}>
              {props.children}
              {props.showModal ? (
                <Modal
                  showModal={props.showModal}
                  closeModalClick={props.closeModalProp}
                >
                  {props.modalMessage}
                </Modal>
              ) : null}
            </main>
            {/* <footer>
              <Footer />
            </footer> */}
            <Footer />
          </ContentWrapper>
        </div>
      </MainWrapper>
      <div className="appbar-bottom">
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              <Link to={"/"}>
                <HomeIcon style={{ color: "#fff" }} />
              </Link>
            </IconButton>
            <Fab
              color="secondary"
              aria-label="add"
              className={classes.fabButton}
            >
              <Link to={"/cart"}>
                <StyledBadge
                  badgeContent={
                    (props.cartTotalProp,
                    console.log("cartTotalProp", props.cartTotalProp))
                  }
                  style={{ color: "#fff" }}
                >
                  <ShoppingCartIcon />
                </StyledBadge>
              </Link>
            </Fab>
            <div className={classes.grow} />
            <IconButton edge="end" color="inherit">
              <Link to={"/"}>
                <PersonIcon style={{ color: "#fff" }} />
              </Link>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
};

MainLayout.propTpes = {
  storeCartCount: PropTypes.number.isRequired,
  showModal: PropTypes.bool,
  closeModalClick: PropTypes.func,
  modalMessage: PropTypes.string,
  showSideBar: PropTypes.bool,
  toggleSideBar: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  return {
    cartTotalProp: state.product.cartTotal,
  };
};

export default connect(mapStateToProps)(MainLayout);
