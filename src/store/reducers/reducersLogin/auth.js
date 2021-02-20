import * as actionTypes from "../../actions/actionLogin/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = { users: [], user, userDetail: {}, Orderuser: [] }
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        users: action.user,
      };
    case actionTypes.GET_USER_ID:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actionTypes.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    // case actionTypes.GET_ORDERUSER:
    //   return {
    //     ...state,
    //     Orderuser: action.Orderuser,
    //   };
    default:
      return state;
  }
};
export default Auth;
