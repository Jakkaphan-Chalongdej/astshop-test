import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import { connect } from "react-redux";
import PropTypes from "prop-types";
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

function Deposits(props) {
  const classes = useStyles();
  // const [num, setnum] = React.useState();

  // let order =
  //   props.OrdersProducts.length > 0
  //     ? props.OrdersProducts.map((OrderProduct, i) => {
  //         const num1 = props.OrdersProducts.length;
  //         let y = OrderProduct.price;
  //         let x = 0;
  //         // console.log(numm);
  //         for (let z = 0; z < num1; z++) {
  //           // x = x + y;
  //           // setnum(x);
  //           console.log(z);
  //         }
  //       })
  //     : null;

  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4"></Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
Deposits.propTypes = {
  OrdersProducts: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => {
  return {
    OrdersProducts: state.product.orders,
  };
};
export default connect(mapStateToProps)(Deposits);
