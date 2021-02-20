import * as actionTypes from "./types";
import axios from "../../../config/axios";
import { getOrder, getOrderID } from "../Action.product";

export const register = (data) => (dispatch) => {
  return axios.post("auth/signup", data).then(
    (response) => {
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
      });
      dispatch({
        type: actionTypes.SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: actionTypes.REGISTER_FAIL,
      });

      dispatch({
        type: actionTypes.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (data) => (dispatch) => {
  return axios.post("auth/signin", data).then(
    (response) => {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: { user: response.data },
      });

      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      console.log("signin reducer", response.data);
      if (response.data.roles.toString() === "ROLE_ADMIN") {
        console.log(response.data.roles.toString());
        dispatch(getUser());
        dispatch(getOrder());
      }
      // dispatch(getUserId(response.data.id));
      dispatch(getOrderID(response.data.id));
      console.log("login getOrderID ", response.data.id);

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: actionTypes.LOGIN_FAIL,
      });

      dispatch({
        type: actionTypes.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
export const getUserId = (id) => async (dispatch) => {
  console.log("ID", id);
  await axios
    .get(`user/${id}`)
    .then((res) => {
      console.log("Get reducer", res);
      // const user = res.data;
      // dispatch({
      //   type: actionTypes.GET_USER_ID,
      //   user: res.data,
      // });
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const updateUser = (id, update) => async (dispatch) => {
  console.log("ID", id, update);
  await axios
    .put(`user/${id}`, update)
    .then((res) => {
      console.log("Get reducer", res);
      // const user = res.data;
      dispatch(getUserId(id));
      // dispatch({
      //   type: actionTypes.GET_USER_ID,
      //   user: res,
      // });
    })
    .catch(function (error) {
      console.log(error);
    });
};
// export const getOrderuser = (userID) => (dispatch) => {
//   // console.log(user);
//    axios
//     .get("orderuser",userID)
//     .then((res) => {
//       console.log("Get Orderuser", res.data);
//       // dispatch({
//       //   type: actionTypes.GET_ORDERUSER,
//       //   Orderuser: res.data,
//       // });
//     })
//     .catch(function (error) {
//       console.log(error);
//       return Promise.reject();
//     });
// };

export const getUser = () => async (dispatch) => {
  console.log("getUser");
  await axios
    .get("user")
    .then((res) => {
      const responses = res.data;

      dispatch({
        type: actionTypes.GET_USER,
        user: responses,
      });
      // dispatch(getOrderuser(responses));
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const logout = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOGOUT,
  });
  localStorage.removeItem("user");
};
