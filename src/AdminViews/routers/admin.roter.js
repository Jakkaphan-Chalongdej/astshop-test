import React from "react";
import AdminViews from "../../AdminViews";
import Users from "../Users";
import Orders from "../Orders";
import Stock from "../Stock";
import Reports from "../Reports";
import Print from "../components/printOrderAdmin";
import PrivateRoute from "../../route/PrivateRoute";
import { Switch } from "react-router-dom";
import PropTypes from "prop-types";
import PrintOrderAdmin from "../components/printOrderAdmin";
function AdminRoute(props) {
  return (
    <Switch>
      <PrivateRoute
        authed={props.authed}
        path={"/admin"}
        exact
        component={AdminViews}
      />
      <PrivateRoute
        authed={props.authed}
        path={"/admin/users"}
        exact
        component={Users}
      />
       <PrivateRoute
          exact
          path={"/admin/print"}
          authed={props.authed}
          component={PrintOrderAdmin}
        />
      <PrivateRoute
        authed={props.authed}
        path={"/admin/print"}
        exact
        component={Print}
      />
      <PrivateRoute
        authed={props.authed}
        path={"/admin/order"}
        exact
        component={Orders}
      />
      <PrivateRoute
        authed={props.authed}
        path={"/admin/stock"}
        exact
        component={Stock}
      />
      <PrivateRoute
        authed={props.authed}
        path={"/admin/reports"}
        exact
        component={Reports}
      />
    </Switch>
  );
}

AdminRoute.propTpes = {
  Roles: PropTypes.func.isRequired,
};
export default AdminRoute;
