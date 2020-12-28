module.exports = (sequelize, Sequelize) => {
	const Book = sequelize.define('book', {
	  title: {
		type: Sequelize.STRING
	  },
	  author: {
		type: Sequelize.STRING
	  },
	  description: {
		type: Sequelize.STRING
	  },
	  published: {
		  type: Sequelize.INTEGER
	  }
	});
	
	return Book;
}