import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  closeMaxProductModal,
} from "./store/actions/Action.product";
import MainLayout from "./Layouts/MainLayout";
import * as Maincontainers from "./views";
import AdminRoute from "./AdminViews/routers/admin.roter";
import UserRoute from "./userViews/userview.router.js/user.router";
import "./App.css";
import ScrollToTop from "./Layouts/ScrollToTop";
import PrivateRoute from "./route/PrivateRoute";
function App(props) {
  var Roles =
    Object.keys(props.Auth.user).length > 0 &&
    props.Auth.user.data.roles.toString();
  console.log(Roles);
  return (
    <div className="App">
      <MainLayout
        storeCartCount={props.storeCartItemsCount}
        showModal={props.showModalProp}
        closeModalProp={props.closeModalProp}
        modalMessage={props.modalMessageProp}
        showSideBar={props.showSideNavigationProp}
        toggleSideBar={props.toggleSideBarProp}
      >
        <ScrollToTop />
        <Switch>
          <Route path={"/"} exact component={Maincontainers.HomePage} />
          <Route path={"/all"} exact component={Maincontainers.AllPage} />
          <Route
            path={"/category/:category"}
            exact
            component={Maincontainers.ProductCategoriesPage}
          />
          <Route path={"/sale"} component={Maincontainers.SalesPage} />
          <Route path={"/contact"} component={Maincontainers.ContactPage} />
          <Route path={"/cart"} component={Maincontainers.CartPage} />
          <PrivateRoute
            authed={Roles}
            path={"/checkout"}
            exact
            component={Maincontainers.CheckoutPage}
          />
          <Route
            path={"/product/:productSlug"}
            render={(props) => (
              <Maincontainers.ProductDetailsPage
                key={props.match.params.productSlug}
                {...props}
              />
            )}
          />
          <div>
            <AdminRoute />
            <UserRoute />
          </div>
          {/*always redirect to index*/}
          <Redirect to={"/"} />
        </Switch>
      </MainLayout>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Auth: state.auth,
    storeCartItemsCount: state.product.cartTotal,
    showModalProp: state.product.productMaxShowModal,
    modalMessageProp: state.product.modalMessage,
    showSideNavigationProp: state.product.showSideNavigation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModalProp: () => dispatch(closeMaxProductModal()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
