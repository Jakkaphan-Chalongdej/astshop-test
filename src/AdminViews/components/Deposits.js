import React from "react";
// import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// function preventDefault(event) {
//   event.preventDefault();
// }

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

function Deposits(props) {
  const classes = useStyles();
  let x = 0;

  const [date, setDate] = React.useState(new Date());
  React.useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  const showprice = () => {
    const num1 = props.OrdersProducts.length;

    for (let z = 0; z < num1; z++) {
      x = x + props.OrdersProducts[z].price;
    }
    return x;
 
  };

  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        {showprice()}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        <ul>
          <li>{`Date : ${date.toLocaleDateString()}`}</li>
          {`Time : ${date.toLocaleTimeString()}`}
        </ul>
      </Typography>
      <div>Order count : {props.OrdersProducts.length}</div>
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
