import React from "react";
import { Route } from "react-router-dom";
import AdminViews from "../../AdminViews";
import Users from "../Users";
import Orders from "../Orders";
import Stock from "../Stock";
import Reports from "../Reports";
export default function AdminRoute() {
  return (
    <div>
      <Route path={"/admin"} exact component={AdminViews}></Route>
      <Route path={"/admin/users"} exact component={Users}></Route>
      <Route path={"/admin/order"} exact component={Orders}></Route>
      <Route path={"/admin/stock"} exact component={Stock}></Route>
      <Route path={"/admin/reports"} exact component={Reports}></Route>
      {/* <Route path={"/admin"} exact component={AdminViews}></Route> */}
    </div>
  );
}
