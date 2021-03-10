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
      const d = new Date(props.OrdersProducts[z].createdAt);
      x.push(`${d.getHours()}:${d.getMinutes()}`);
    }
    return x;
  };
  function createData(time, amount) {
    return { time, amount };
  }

  const showdata = () => {
    const num1 = props.OrdersProducts.length;
    const data = [];
    const dataChart = [];
    for (let z = 0; z < num1; z++) {
      dataChart.push(createData(showcreatedAt()[z], showprice()[z]));
    }
    dataChart.push(data);
    return dataChart;
  };
  const d = new Date("2021-03-10T07:23:47.000Z");
  console.log(d.getHours());
  console.log(d.getMinutes()); // Hours

 
  //const data = [
  // createData("03:00", 300),
  // createData("06:00", 600),
  // createData("09:00", 800),
  // createData("12:00", 1500),
  // createData("15:00", 2000),
  // createData("18:00", 2400),
  // createData("21:00", 2400),
  // createData("24:00", undefined),
  //];

  return (
    <React.Fragment>
      {/* {order} */}
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={showdata()}
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
