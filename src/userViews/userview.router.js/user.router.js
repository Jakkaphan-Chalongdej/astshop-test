import React from "react";
import PrivateRoute from "../../route/PrivateRoute";

import Userpage from "../view/userpage";
import Setting from "../view/user.setting";
import PayMethods from "../view/user.payment";
import PayMethodsEdit from "../view/user.payment.edit";
import Shipping from "../view/user.shipping";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../../helpers/history";
function UserRouter(props) {
  var Roles =
    Object.keys(props.Auth.user).length > 0 &&
    props.Auth.user.data.roles.toString();
  console.log(Roles);
  return (
    <div>
      <Route history={history}>
        <Switch>
          <PrivateRoute
            exact
            path={"/user"}
            authed={Roles}
            component={Userpage}
          />

          <PrivateRoute
            path={"/user/edit/profile"}
            authed={Roles}
            component={Setting}
            exact
          />
          <PrivateRoute
            path={"/user/payment"}
            authed={Roles}
            component={PayMethods}
          />
          <PrivateRoute
            exact
            path={"/user/edit/payment"}
            authed={Roles}
            component={PayMethodsEdit}
          />
          <PrivateRoute
            exact
            path={"/user/delivery-addresses"}
            authed={Roles}
            component={Shipping}
          />
        </Switch>
      </Route>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    Auth: state.auth,
  };
};
export default connect(mapStateToProps)(UserRouter);
