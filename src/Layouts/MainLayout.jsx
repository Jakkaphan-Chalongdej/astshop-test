import React from "react";
import MainWrapper from "../components/UI/Wrappers/MainPageWrapper";
import SideMenuWrapper from "../components/UI/Wrappers/SideMenuWrapper";
import ContentWrapper from "../components/UI/Wrappers/PageContentWrapper";
import MainMenu from "../components/Menus/MainMenu";
import SideMenu from "../components/Menus/SideMenu";
import Footer from "../components/Footer/Index";
import Modal from "../components/UI/Modal/Modal";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./layout.scss";
import StorefrontIcon from "@material-ui/icons/Storefront";
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
    top: -10,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: -5,
    border: `2px solid ${theme.palette.background.paper}`,
    backgroundColor: "#f17e0a",
    color: "#fff",
    padding: "0 2px",
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
                <p className="menu-font-bottom">หน้าหลัก</p>
              </Link>
            </IconButton>
            <IconButton edge="end" color="inherit" aria-label="open drawer">
              <Link to={"/all"}>
                <StorefrontIcon style={{ color: "#fff" }} />
                <p className="menu-font-bottom">สินค้า</p>
              </Link>
            </IconButton>

            <Fab
              style={{ backgroundColor: "#fff" }}
              aria-label="add"
              className={classes.fabButton}
            >
              <Link to={"/cart"}>
                <StyledBadge
                  badgeContent={props.storeCartCount}
                  style={{ color: "#6e6e6e" }}
                >
                  <ShoppingCartIcon />
                </StyledBadge>
              </Link>
            </Fab>
            <div className={classes.grow} />
            <IconButton edge="end" color="inherit">
              <Link to={"/"}>
                <PersonIcon style={{ color: "#fff" }} />
                <p className="menu-font-bottom">บัญชี</p>
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

export default MainLayout;
