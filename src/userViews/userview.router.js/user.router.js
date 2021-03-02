import React from "react";
import PrivateRoute from "../../route/PrivateRoute";
import Userpage from "../view/userpage";
import Setting from "../view/user.setting";
import Order from "../view/user.order";
import PayMethodsEdit from "../view/user.payment.edit";
import Shipping from "../view/user.shipping";
import { Switch ,Route} from "react-router-dom";
import PrintOrder from "../components/printOrderUser";
import PropTypes from "prop-types";

function UserRouter(props) {
  return (
    <>
      <Switch>
        <PrivateRoute
          exact
          path={"/user"}
          authed={props.authed}
          component={Userpage}
        />
        <Route
          exact
          path={"/user/edit/profile"}
          authed={props.authed}
          component={Setting}
        />
        <PrivateRoute
          exact
          path={"/user/print"}
          authed={props.authed}
          component={PrintOrder}
        />
        <PrivateRoute
          exact
          path={"/user/order"}
          authed={props.authed}
          component={Order}
        />
        <PrivateRoute
          exact
          path={"/user/edit/payment"}
          authed={props.authed}
          component={PayMethodsEdit}
        />
        <PrivateRoute
          exact
          path={"/user/delivery-addresses"}
          authed={props.authed}
          component={Shipping}
        />
      </Switch>
    </>
  );
}

UserRouter.propTpes = {
  Roles: PropTypes.func.isRequired,
};

export default UserRouter;
