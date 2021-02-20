import React from "react";
import Setting from "../components/setting/setting.layout";
import "./style.payment.scss";
// import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import { currencyToUse } from "../../Utility/currency";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));
function UserPayMethods(props) {
  const classes = useStyles();
  let currencyKeys = currencyToUse(props.usedCurrencyProp);
  let currencyName = currencyKeys.name;

  let ordershow =
    props.orderUser.length > 0
      ? props.orderUser.map((OrderProduct, i) => {
          return (
            <TableRow key={i}>
              <TableCell>{OrderProduct.id}</TableCell>
              <TableCell>{OrderProduct.firstname}</TableCell>
              <TableCell>{OrderProduct.quantity}</TableCell>
              <TableCell>
                <span style={{ textTransform: "lowercase" }}>
                  {currencyName}
                </span>
                {OrderProduct.price}
              </TableCell>
              <TableCell>{OrderProduct.Address}</TableCell>
              <TableCell>{OrderProduct.city}</TableCell>
              <TableCell>{OrderProduct.ZipCode}</TableCell>
              <TableCell>{OrderProduct.Country}</TableCell>
            </TableRow>
          );
        })
      : null;

  return (
    <>
      <Setting
        breadCrumbs={[
          {
            label: "payment",
            to: "/user/payment",
          },
        ]}
      >
        {/* <div className="container-paymant card-paymant"></div> */}

        <React.Fragment>
          <Paper className={classes.paper}>
            <title>Recent Orders</title>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>ID Order</TableCell>
                  <TableCell>firstname</TableCell>
                  <TableCell>quantity</TableCell>
                  <TableCell>price </TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>city </TableCell>
                  <TableCell>ZipCode</TableCell>
                  <TableCell>Country</TableCell>
                </TableRow>
              </TableHead>
              {ordershow}
            </Table>
          </Paper>
        </React.Fragment>
      </Setting>
    </>
  );
}

UserPayMethods.propTypes = {
  // Auth: PropTypes.object.isRequired,
  orderUser: PropTypes.array.isRequired,
  // OrdersProducts: PropTypes.array.isRequired,
  usedCurrencyProp: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return {
    orderUser: state.product.orderUser,
    usedCurrencyProp: state.product.usedCurrency,
    // Auth: state.auth,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     GetOrder: () => dispatch(getOrder()),
//   };
// };

export default connect(mapStateToProps)(UserPayMethods);
