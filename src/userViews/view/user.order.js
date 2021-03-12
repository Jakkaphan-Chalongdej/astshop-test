import React from "react";
import Setting from "../components/setting/setting.layout";
import "./style.payment.scss";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { OrderIDPrint } from "../../store/actions/Action.product";
import { Button } from "react-bootstrap";

import TableBody from "@material-ui/core/TableBody";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import { TablePagination } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
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

function UserPayMethods(props) {
  const classes = useStyles();
  const printOrder = (id) => {
    props.Order(id);
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, props.orderUser.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  let ordershow =
    props.orderUser.length > 0
      ? props.orderUser
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((OrderProduct, i) => {
            let products =
              OrderProduct.products !== undefined &&
              OrderProduct.products.map((productmap, i) => {
                return (
                  <ul key={i}>
                    <img src={productmap.img_name} alt={productmap.name} />
                    <li>{productmap.name}</li>
                  </ul>
                );
              });
            let products_quantity =
              OrderProduct.products !== undefined &&
              OrderProduct.products.map((quantity, i) => {
                console.log(quantity.order_detail.quantity);
                return (
                  <ul key={i}>
                    <li>{quantity.order_detail.quantity}</li>
                  </ul>
                );
              });

            return (
              <>
                <TableRow key={i}>
                  <TableCell>{OrderProduct.id}</TableCell>
                  <TableCell>{products}</TableCell>

                  <TableCell>{products_quantity}</TableCell>
                  <TableCell>
                    <span style={{ textTransform: "lowercase" }}>
                      {OrderProduct.currency}
                    </span>
                    {OrderProduct.price.toLocaleString()}
                  </TableCell>
                  <Button
                    onClick={() => {
                      printOrder(OrderProduct.id);
                    }}
                  >
                    Print
                  </Button>
                </TableRow>
              </>
            );
          })
      : null;

  return (
    <>
      <Setting
        breadCrumbs={[
          {
            label: "order",
            to: "/user/order",
          },
        ]}
      >
        <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <title>Recent Orders</title>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Order No.</TableCell>
                      <TableCell>product name</TableCell>
                      <TableCell>quantity </TableCell>
                      <TableCell>price </TableCell>
                      
                    </TableRow>
                  </TableHead>
                  {ordershow}
                  <TableBody>
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                    <TablePagination
                      rowsPerPageOptions={[5, 15, 25, 50, 100]}
                      count={props.orderUser.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: { "aria-label": "rows per page" },
                        native: true,
                      }}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActions}
                    />
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        </React.Fragment>
      </Setting>
    </>
  );
}

UserPayMethods.propTypes = {
  orderUser: PropTypes.array.isRequired,
  usedCurrencyProp: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return {
    orderUser: state.product.orderUser,
    usedCurrencyProp: state.product.usedCurrency,
    usersProp: state.auth.users,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    Order: (id) => dispatch(OrderIDPrint(id, props)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPayMethods);
