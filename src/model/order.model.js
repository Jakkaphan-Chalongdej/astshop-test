module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("Order", {

 
    price: {
      type: Sequelize.INTEGER,
    },
   
    shippingPrice: {
      type: Sequelize.STRING,
    },
    vat: {
      type: Sequelize.STRING,
    },
    currency: {
      type: Sequelize.STRING,
    },
    
    
  });

  return Order;
};
