module.exports = (sequelize, Sequelize) => {
  const Order_detail = sequelize.define("order_detail", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: Sequelize.STRING,
  });
  return Order_detail;
};
