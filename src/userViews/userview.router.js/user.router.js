import React from "react";
import { Route } from "react-router-dom";
import * as views from "../index";

export default function UserRouter() {
  return (
    <div>
      <Route path={"/user"} exact component={views.userPage}></Route>
      <Route
        path={"/user/edit/profile"}
        exact
        component={views.userSettingPage}
      ></Route>
      <Route
        path={"/user/payment"}
        exact
        component={views.UserPayMethodsPage}
      ></Route>
      <Route
        path={"/user/edit/payment"}
        exact
        component={views.UserPayMethodsEditPage}
      ></Route>
       <Route
        path={"/user/delivery-addresses"}
        exact
        component={views.UserShippingPage}
      ></Route>


    </div>
  );
}
