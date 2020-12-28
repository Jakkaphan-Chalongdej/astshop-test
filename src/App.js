import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { closeMaxProductModal, toogleSideBar } from "./store/actions";
import MainLayout from "./Layouts/MainLayout";
import * as Maincontainers from "./views";
import "./App.css";
import ScrollToTop from "./Layouts/ScrollToTop";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout
          storeCartCount={this.props.storeCartItemsCount}
          showModal={this.props.showModalProp}
          closeModalProp={this.props.closeModalProp}
          modalMessage={this.props.modalMessageProp}
          showSideBar={this.props.showSideNavigationProp}
          toggleSideBar={this.props.toggleSideBarProp}
        >
          <Switch>
            <Route path={"/"} exact component={Maincontainers.HomePage}>
              <ScrollToTop />
            </Route>
            <Route path={"/all"} exact component={Maincontainers.AllPage}>
              <ScrollToTop />
            </Route>
            <Route
              path={"/category/:category"}
              exact
              component={Maincontainers.ProductCategoriesPage}
            >
              <ScrollToTop />
            </Route>
            <Route path={"/sale"} component={Maincontainers.SalesPage}>
              <ScrollToTop />
            </Route>
            <Route path={"/cart"} component={Maincontainers.CartPage}>
              <ScrollToTop />
            </Route>
            <Route path={"/checkout"} component={Maincontainers.CheckoutPage}>
              <ScrollToTop />
            </Route>
            <Route
              path={"/product/:productSlug"}
              render={(props) => (
                <Maincontainers.ProductDetailsPage
                  key={props.match.params.productSlug}
                  {...props}
                />
              )}
            >
              <ScrollToTop />
            </Route>
            {/*always redirect to index*/}
            <Redirect to={"/"} />
          </Switch>
        </MainLayout>
      </div>
    );
  }
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
