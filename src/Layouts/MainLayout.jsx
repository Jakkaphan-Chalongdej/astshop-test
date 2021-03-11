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
import { Col, Row } from "react-bootstrap";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { logout } from "../store/actions/actionLogin/auth";
import { connect } from "react-redux";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ViewListIcon from "@material-ui/icons/ViewList";
const useStyles = makeStyles(() => ({
  appBar: {
    top: "auto",
    bottom: 0,
    background: "#57aef5",
    padding: "auto",
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };
  const handleLogout = () => {
    props.Logout();
  };
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
                showMenuLogin={props.showMenuLogin}
                toggleMenuLogin={props.toggleMenuLogin}
              />
            </header>
            <main className="main-top">
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
            <Row style={{ width: "100vw" }}>
              <Col md={5} xs={5} sm={5}>
                <Row className="col-center">
                  <Col md={6} xs={6} sm={6}>
                    <IconButton color="inherit">
                      <Link to={"/"}>
                        <ul>
                          <HomeIcon style={{ color: "#fff" }} />
                          <li
                            className="menu-font-bottom"
                            style={{ width: "36px" }}
                          >
                            หน้าหลัก
                          </li>
                        </ul>
                      </Link>
                    </IconButton>
                  </Col>
                  <Col md={6} xs={6} sm={6}>
                    <IconButton color="inherit" aria-label="open drawer">
                      <Link to={"/all"}>
                        <ul>
                          <StorefrontIcon style={{ color: "#fff" }} />
                          <li className="menu-font-bottom">สินค้า</li>
                        </ul>
                      </Link>
                    </IconButton>
                  </Col>
                </Row>
              </Col>
              <Col md={2} xs={2} sm={2}>
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
              </Col>
              <Col md={5} xs={5} sm={5}>
                <Row className="col-center">
                  <Col md={6} xs={6} sm={6}>
                    <IconButton color="inherit" aria-label="open drawer">
                      {/* <Link to={"/all"}></Link> */}

                      <ul onClick={handleClick2}>
                        <ViewListIcon style={{ color: "#fff" }} />
                        <li
                          className="menu-font-bottom"
                          style={{ width: "38px" }}
                        >
                          หมวดหมู่
                        </li>
                      </ul>

                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl2}
                        keepMounted
                        open={Boolean(anchorEl2)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>
                          <Link to="/category/security">security</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to="/category/home">Home</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to="/category/office">office</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to="/category/other">อื่นๆ</Link>
                        </MenuItem>
                      </Menu>
                    </IconButton>
                  </Col>
                  <Col md={6} xs={6} sm={6}>
                    <IconButton>
                      <ul onClick={handleClick}>
                        <PersonIcon style={{ color: "#fff" }} />
                        <li className="menu-font-bottom">บัญชี</li>
                      </ul>

                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <Link to="/user">
                          <MenuItem onClick={handleClose}>
                            <AccountBoxIcon />
                            บัญชี
                          </MenuItem>{" "}
                        </Link>
                        <Link to="/">
                          <MenuItem onClick={handleLogout}>
                            <ExitToAppIcon />
                            ออกจากระบบ
                          </MenuItem>
                        </Link>
                      </Menu>
                    </IconButton>
                  </Col>
                </Row>
              </Col>
            </Row>
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
const mapDispatchToProps = (dispatch) => {
  return {
    Logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(null, mapDispatchToProps)(MainLayout);
