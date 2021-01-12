module.exports = (sequelize, Sequelize) => {
	const Image = sequelize.define('image', {
	  image: {
		type: Sequelize.STRING,
	  },
	 
	});
	
	return Image;
}