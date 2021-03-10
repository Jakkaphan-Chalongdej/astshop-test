module.exports = (sequelize, Sequelize) => {
  const Order_detail = sequelize.define("order_detail", {
    // id: {
    //   type: Sequelize.INTEGER,

    //   autoIncrement: true,
    // },
    productId: Sequelize.STRING,
    userId: Sequelize.STRING,
    quantity: Sequelize.STRING,
  });
  return Order_detail;
};
