import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import PropTypes from "prop-types";
import { getOrder } from "../../store/actions/Action.product";
import { connect } from "react-redux";
import { OrderIDPrintAdmin } from "../../store/actions/Action.product";
import { Button } from "react-bootstrap";
import "../../components/print/formprint.css";

import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));
function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function Orders(props) {
  const classes = useStyles();
  const printOrder = (id) => {
    props.Order(id);
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  let ordershow =
    props.OrdersProducts.length > 0
      ? props.OrdersProducts.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        ).map((OrderProduct, i) => {
          let products_name =
            OrderProduct.products !== undefined &&
            OrderProduct.products.map((productmap, i) => {
              return (
                <ul key={i}>
                  <li>{productmap.name}</li>
                </ul>
              );
            });
          let products_quantity =
            OrderProduct.products !== undefined &&
            OrderProduct.products.map((quantity, i) => {
              return (
                <ul key={i}>
                  <li>{quantity.order_detail.quantity}</li>
                </ul>
              );
            });

          let user_name =
            OrderProduct.users !== undefined &&
            OrderProduct.users.map((user, i) => {
              return (
                <ul key={i}>
                  <li>{user.firstname}</li>
                </ul>
              );
            });
          return (
            <TableRow key={i}>
              <TableCell>{OrderProduct.id}</TableCell>

              <TableCell>{user_name}</TableCell>
              <TableCell>
                <span>{OrderProduct.currency}</span>
                {OrderProduct.price}
              </TableCell>
              <TableCell>{products_name}</TableCell>
              <TableCell>{products_quantity}</TableCell>
              <Link to="/admin/print">
                <Button
                  onClick={() => {
                    printOrder(OrderProduct.id);
                  }}
                >
                  Print
                </Button>
              </Link>
            </TableRow>
          );
        })
      : null;

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Order No.</TableCell>
            <TableCell>user </TableCell>

            <TableCell>price </TableCell>
            <TableCell>products name</TableCell>
            <TableCell>quantity</TableCell>
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
  usersProp: PropTypes.array.isRequired,
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
    usersProp: state.auth.users,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    GetOrder: () => dispatch(getOrder()),
    Order: (id) => dispatch(OrderIDPrintAdmin(id, props)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
