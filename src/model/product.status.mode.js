module.exports = (sequelize, Sequelize) => {
  const ProductStatus = sequelize.define("product_status", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  });

  return ProductStatus;
};
