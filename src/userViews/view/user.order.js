import React from "react";
import Setting from "../components/setting/setting.layout";
import "./style.payment.scss";
// import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// import { useReactToPrint } from "react-to-print";
import { OrderIDPrint } from "../../store/actions/Action.product";
// import { ComponentToPrint } from "../../components/print/FormToPrint";
import { Button } from "react-bootstrap";
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
  const printOrder = (id) => {
    console.log("click print");
    props.Order(id);
    
  };

  let ordershow =
    props.orderUser.length > 0
      ? props.orderUser.map((OrderProduct, i) => {
          let products = OrderProduct.products.map((productmap) => {
            console.log(productmap.name);
            return productmap.name;
          });
          return (
            <>
              <TableRow key={i}>
                <TableCell>{OrderProduct.id}</TableCell>
                <TableCell>
                  <span style={{ textTransform: "lowercase" }}>
                    {OrderProduct.currency}
                  </span>
                  {OrderProduct.price}
                </TableCell>
                <TableCell>{products}</TableCell>

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
          <Paper className={classes.paper}>
            <title>Recent Orders</title>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>ID Order</TableCell>

                  <TableCell>price </TableCell>
                  <TableCell>product id</TableCell>
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
  orderUser: PropTypes.array.isRequired,
  usedCurrencyProp: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return {
    orderUser: state.product.orderUser,
    usedCurrencyProp: state.product.usedCurrency,
  };
};
const mapDispatchToProps = (dispatch,props) => {
  return {
    Order: (id) => dispatch(OrderIDPrint(id,props)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPayMethods);
