import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import PropTypes from "prop-types";
import CheckoutCartProduct from "../../components/Checkout/CheckoutCartProduct";
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
  let productsPrices = [];
  let currencyKeys = currencyToUse(props.usedCurrencyProp);
  let currencyValue = currencyKeys.value;
  let currencyName = currencyKeys.name;
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>quantity</TableCell>
            <TableCell>price</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment </TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        {Object.keys(props.OrdersProducts).length > 0 &&
          props.OrdersProducts.product.map((OrderProduct, i) => {
            let productFromStore = props.products.find(
              (product) => product.id === OrderProduct.id
            );
            productsPrices.push({
              price:
                productFromStore.quantity > 0
                  ? Math.round(productFromStore.price * currencyValue)
                  : 0,
              count: OrderProduct.quantity,
            });
            return (
              <>
                <TableRow key={i}>
                  <TableCell>{OrderProduct.quantity}</TableCell>
                  <TableCell>
                    <span style={{ textTransform: "lowercase" }}>
                      {currencyName}
                    </span>
                    {productFromStore.price}
                  </TableCell>
                  <TableCell>{props.OrdersProducts.user.firstName}</TableCell>
                  <TableCell>{props.OrdersProducts.user.lastName}</TableCell>
                  <TableCell>{props.OrdersProducts.user.id}</TableCell>
                </TableRow>
              </>
            );
          })}
      </Table>
      <div className={classes.seeMore}>
        <Link to="/admin/order">See more orders</Link>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    OrdersProducts: state.product.orders,
    products: state.product.products,
    usedCurrencyProp: state.product.usedCurrency,
  };
};

Orders.propTypes = {
  products: PropTypes.array.isRequired,
  OrdersProducts: PropTypes.object.isRequired,
  usedCurrencyProp: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Orders);
