import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import shopReducer from "./reducers/index";
// use this to show redux dev tool
// const store = createStore(
//   shopReducer,
// );

const store = createStore(shopReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
