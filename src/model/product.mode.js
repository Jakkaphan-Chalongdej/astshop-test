module.exports = (sequelize, Sequelize) => {
	const Product = sequelize.define('products', {
	  name: {
		type: Sequelize.STRING,
	  },
	  price: {
		type: Sequelize.INTEGER,
	  },
	  quantity: {
		type: Sequelize.INTEGER,
	  },
	  img:{
		type: Sequelize.STRING,
	  },
      des: {
		type: Sequelize.STRING,
	  },
      slug: {
		type: Sequelize.STRING,
	  },
      discount_price: {
		type: Sequelize.INTEGER,
	  },
      category: {
		type: Sequelize.STRING,
	  },
      subcategory: {
		type: Sequelize.STRING,
	  },
      sale: {
		type: Sequelize.STRING,
	  },
	  
	});
	
	return Product;
}