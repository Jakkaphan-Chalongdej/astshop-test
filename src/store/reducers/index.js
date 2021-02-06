import { combineReducers } from "redux";
import product from "./reducersProducts";
import auth from "./reducersLogin/auth";
import message from "./reducersLogin/message";
export default combineReducers({
  product,
  auth,
  message,
});
