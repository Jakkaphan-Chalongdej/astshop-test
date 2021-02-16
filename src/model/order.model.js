module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("Order", {
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
      img:{
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
  