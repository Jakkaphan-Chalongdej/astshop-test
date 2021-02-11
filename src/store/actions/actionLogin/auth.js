import * as actionTypes from "./types";
import axios from "../../../config/axios";

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
        payload: { user: response },
      });
     
      console.log("signin reducer", response);
      if (response.data.username === "admin") {
        console.log(response.data.roles);
        dispatch(getUser());
      }
      dispatch(getUserId(response.data.id));
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
  await axios.get(`user/${id}`)
    .then((res) => {
      console.log("Get reducer", res);
      // const user = res.data;
      dispatch({
        type: actionTypes.GET_USER_ID,
        user: res,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getUser = () => async (dispatch) => {
  await axios
    .get("user")
    .then((res) => {
      const response = res.data;
      dispatch({
        type: actionTypes.GET_USER,
        user: response,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const logout = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOGOUT,
  });
};
