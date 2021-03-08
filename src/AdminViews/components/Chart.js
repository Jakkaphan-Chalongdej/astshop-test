import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts/umd/Recharts";
import Title from "./Title";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Generate Sales Data

function Chart(props) {
  const theme = useTheme();

  const showprice = () => {
    const num1 = props.OrdersProducts.length;

    let y = [];
    for (let z = 0; z < num1; z++) {
      y.push(props.OrdersProducts[z].price);
    }
    return y;
    // let y = price.price;
  };
  const showcreatedAt = () => {
    const num1 = props.OrdersProducts.length;
    let x = [];
    for (let z = 0; z < num1; z++) {
      x.push(props.OrdersProducts[z].createdAt);
    }
    return x;
  };
  function createData(time, amount) {
    return { time, amount };
  }

  const data = [
    createData(showcreatedAt()[0], showprice()[0]),
    createData(showcreatedAt()[1], showprice()[1]),

    // createData("03:00", 300),
    // createData("06:00", 600),
    // createData("09:00", 800),
    // createData("12:00", 1500),
    // createData("15:00", 2000),
    // createData("18:00", 2400),
    // createData("21:00", 2400),
    // createData("24:00", undefined),
  ];

  return (
    <React.Fragment>
      {/* {order} */}
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
Chart.propTypes = {
  OrdersProducts: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => {
  return {
    OrdersProducts: state.product.orders,
  };
};
export default connect(mapStateToProps)(Chart);
