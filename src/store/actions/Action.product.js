import * as actionTypes from "./actionTypes";
import axios from "../../config/axios";
import { getUser, getUserId } from "./actionLogin/auth";
const user = JSON.parse(localStorage.getItem("user"));
export const setProductPriceFilter = (price) => {
  return { type: actionTypes.SET_PRODUCT_PRICE_FILTER, price: price };
};

export const getProducts = () => async (dispatch) => {
  await axios
    .get("product")
    .then((res) => {
      const response = res.data;
      console.log("Action get Products", response);
      dispatch({
        type: actionTypes.GET_PRODUCTS,
        product: response,
      });

      if (user.roles.toString() === "ROLE_ADMIN") {
        dispatch(getUser());
        dispatch(getOrder());
      }
      dispatch(getUserId(user.id));
      dispatch(getOrderID(user.id));
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const addProducts = (product) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${user.accessToken}`,
    },
  };
  await axios
    .post("product/create", product, config)
    .then(() => {
      console.log("Action Add Products");
      dispatch(getProducts());
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const deleteProducts = (id) => async (dispatch) => {
  await axios
    .delete(`product/${id}`)
    .then(() => {
      console.log("Action Delete Products");
      dispatch(getProducts());
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const UpdataProducts = (id, update) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${user.accessToken}`,
    },
  };
  console.log("Action Update Products", update, config);
  await axios
    .put(`product/${id}`, update, config)
    .then(() => {
      console.log("Action Update getProducts");
      dispatch(getProducts());
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const UpdataQuantity = (id, update) => async (dispatch) => {
  await axios
    .put(`update/${id}`, update)
    .then(() => {
      console.log("Action Update Products");
      dispatch(getProducts());
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const addToCart = (productDetails) => {
  return {
    type: actionTypes.ADD_TO_CART,
    productDetails: productDetails,
  };
};

// export const addToOrder = (OrderDetails) => {
//   console.log(OrderDetails);
//   return {
//     type: actionTypes.ADD_TO_ORDER,
//     OrderDetails: OrderDetails,
//   };
// };
export const getOrder = () => async (dispatch) => {
  // console.log("action getOrder");
 
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${user.accessToken}`,
    },
  };
  await axios
    .get("order", config)
    .then((res) => {
      console.log("action getOrder",res)
      const response = res;
      dispatch({
        type: actionTypes.GET_ORDER,
        order: response.data,
      });
      return Promise.resolve();
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const getOrderID = (userID) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",

      Authorization: `Bearer ${user.accessToken}`,
    },
  };
  await axios
    .get(`orderuser/${userID}`, config)
    .then((res) => {
      const response = res.data;
      dispatch({
        type: actionTypes.GET_ORDER_ID,
        order: response,
      });
      return Promise.resolve();
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const createOrder = (order) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${user.accessToken}`,
    },
  };
  await axios
    .post("order/create", order, config)
    .then(() => {
      if (user.roles.toString() === "ROLE_ADMIN") {
        dispatch(getOrder());
      }
      dispatch(getOrderID(user.id));

      return Promise.resolve();
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const updateOrder = (id, update) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",

      Authorization: `Bearer ${user.accessToken}`,
    },
  };
  await axios
    .put(`order/${id}`, update, config)
    .then((res) => {
      dispatch({
        type: actionTypes.UPDATE_ORDER,
        order: res,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const removeFromCart = (productDetails) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    productDetails: productDetails,
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};

export const updateCartProductCount = (value, productDetails) => {
  return {
    type: actionTypes.UPDATE_CART_PRODUCT_COUNT,
    newCountValue: value,
    productDetails: productDetails,
  };
};

export const confirmOrder = (order, props) => {
  return (dispatch) => {
    dispatch(createOrder(order));
    dispatch(confirmOrderSuccess());
    setTimeout(() => {
      dispatch(resetOrderSuccess());
    }, 5000);
  };
};
export const OrderIDPrint = (id, props) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",

      Authorization: `Bearer ${user.accessToken}`,
    },
  };
  await axios
    .get(`order/${id}`, config)
    .then((res) => {
      const response = res.data;
      console.log("OrderIDPrint", response);
      dispatch({
        type: actionTypes.PRINT_ORDER,
        print: response,
      });
      props.history.push("/user/print");
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const OrderIDPrintAdmin = (id, props) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",

      Authorization: `Bearer ${user.accessToken}`,
    },
  };
  await axios
    .get(`order/${id}`, config)
    .then((res) => {
      const response = res.data;
      dispatch({
        type: actionTypes.PRINT_ORDER,
        print: response,
      });
      props.history.push("/admin/print");
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const closeMaxProductModal = () => {
  return {
    type: actionTypes.CLOSE_MAX_PRODUCT_MODAL,
  };
};

export const confirmOrderSuccess = () => {
  return {
    type: actionTypes.CONFIRM_ORDER_SUCCESS,
  };
};

export const resetOrderSuccess = () => {
  return {
    type: actionTypes.RESET_ORDER_SUCCESS,
  };
};

export const confirmOrderFailure = () => {
  // todo
  return {
    type: actionTypes.CONFIRM_ORDER_FAILURE,
  };
};

export const toogleSideBar = () => {
  return {
    type: actionTypes.TOGGLE_SIDE_BAR,
  };
};
export const toogleSideLogin = () => {
  return {
    type: actionTypes.TOGGLE_SIDE_LOGIN,
  };
};
export const toogleSideSignup = () => {
  return {
    type: actionTypes.TOGGLE_SIDE_SIGNUP,
  };
};
export const setPromoCode = (promoCodeObject) => {
  return {
    type: actionTypes.SET_PROMO_CODE,
    promoCode: promoCodeObject,
  };
};

export const changeCurrency = (currencyName) => {
  // currency value can be fetched here from an external api and then passes to the store
  return {
    type: actionTypes.CHANGE_CURRENCY,
    currencyName: currencyName,
  };
};

export const toogleItemInWishList = (productId) => {
  return {
    type: actionTypes.TOOLE_ITEM_IN_WISHLIST,
    productId: productId,
  };
};
