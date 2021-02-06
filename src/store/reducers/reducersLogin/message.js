import * as actionTypes from "../../actions/actionLogin/types";

const initialState = {};

const Messages=(state = initialState, action)=> {
  switch (action.type) {
    case actionTypes.SET_MESSAGE:
      return { message: action.payload };
    case actionTypes.CLEAR_MESSAGE:
      return { message: "" };
    default:
      return state;
  }
}
export default Messages;