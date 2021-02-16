import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import PropTypes from "prop-types";
import { getOrder } from "../../store/actions/Action.product";
import { currencyToUse } from "../../Utility/currency";
import { connect } from "react-redux";

// Generate Order Data

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

function Orders(props) {
  const classes = useStyles();
  let currencyKeys = currencyToUse(props.usedCurrencyProp);
  let currencyName = currencyKeys.name;
  // props.GetOrder();
  let ordershow =
    props.OrdersProducts.length > 0
      ? props.OrdersProducts.map((OrderProduct, i) => {
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
      : props.GetOrder();

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
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
      <div className={classes.seeMore}>
        <Link to="/admin/order">See more orders</Link>
      </div>
    </React.Fragment>
  );
}

Orders.propTypes = {
  Auth: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  OrdersProducts: PropTypes.array.isRequired,
  usedCurrencyProp: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return {
    OrdersProducts: state.product.orders,
    products: state.product.products,
    usedCurrencyProp: state.product.usedCurrency,
    Auth: state.auth.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    GetOrder: () => dispatch(getOrder()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
