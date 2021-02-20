import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toogleSideLogin } from "../store/actions/Action.product";
function PrivateRoute( { component: Component, authed, ...children }) {
  const showlogin = () => {
    children.toogleSideLogin();
  };
  if (authed === "ROLE_USER" || authed === "ROLE_ADMIN") {
    return <Route {...children} render={(props) => <Component {...props} />} />;
  }

  return (
    <>
      {showlogin(true)}
      <Redirect to="/login"></Redirect>
    </>
  );
}

PrivateRoute.propTypes = {
  toogleSideLogin: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => {
  return {
    toogleSideLogin: () => dispatch(toogleSideLogin()),
  };
};

export default connect(null,mapDispatchToProps)(PrivateRoute);
