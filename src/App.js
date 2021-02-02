import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { closeMaxProductModal, toogleSideBar } from "./store/actions/Action.product";
import MainLayout from "./Layouts/MainLayout";
import * as Maincontainers from "./views";
import AdminRoute from "./AdminViews/routers/admin.roter";
import UserRoute from "./userViews/userview.router.js/user.router";
import "./App.css";
import ScrollToTop from "./Layouts/ScrollToTop";

function App(props){
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
            <Route path={"/"} exact component={Maincontainers.HomePage}></Route>
            <Route
              path={"/all"}
              exact
              component={Maincontainers.AllPage}
            ></Route>
            <Route
              path={"/category/:category"}
              exact
              component={Maincontainers.ProductCategoriesPage}
            ></Route>
            <Route path={"/sale"} component={Maincontainers.SalesPage}></Route>
            <Route
              path={"/contact"}
              component={Maincontainers.ContactPage}
            ></Route>
            <Route path={"/cart"} component={Maincontainers.CartPage}></Route>
            <Route
              path={"/checkout"}
              component={Maincontainers.CheckoutPage}
            ></Route>
            <Route
              path={"/product/:productSlug"}
              render={(props) => (
                <Maincontainers.ProductDetailsPage
                  key={props.match.params.productSlug}
                  {...props}
                />
              )}
            ></Route>
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
    storeCartItemsCount: state.cartTotal,
    showModalProp: state.productMaxShowModal,
    modalMessageProp: state.modalMessage,
    showSideNavigationProp: state.showSideNavigation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModalProp: () => dispatch(closeMaxProductModal()),
    toggleSideBarProp: () => dispatch(toogleSideBar()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
