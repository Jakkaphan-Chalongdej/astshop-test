import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import App from "./App";
import { getProducts } from "./store/actions/Action.product";
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
store.dispatch(getProducts()).then(() => {
  ReactDOM.render(app, document.getElementById("root"));
});
