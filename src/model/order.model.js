module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("Order", {
    userID: {
      type: Sequelize.STRING,
    },
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    img: {
      type: Sequelize.STRING,
    },
    product_name: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
    shippingPrice: {
      type: Sequelize.STRING,
    },
    vat: {
      type: Sequelize.STRING,
    },
    Address: {
      type: Sequelize.STRING,
    },
    ZipCode: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    Country: {
      type: Sequelize.STRING,
    },
  });

  return Order;
};
