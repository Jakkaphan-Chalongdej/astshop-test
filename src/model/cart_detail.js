module.exports = (sequelize, Sequelize) => {
  const Cart_detail = sequelize.define("cart_detail", {
    vat: {
      type: Sequelize.STRING,
    },
    code: {
      type: Sequelize.STRING,
    },
    percentage: {
      type: Sequelize.STRING,
    },
  });

  return Cart_detail;
};
