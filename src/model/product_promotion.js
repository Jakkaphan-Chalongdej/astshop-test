module.exports = (sequelize, Sequelize) => {
  const promotion = sequelize.define("promotion", {
    image: {
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.INTEGER,
    },
    text: {
      type: Sequelize.INTEGER,
    },
    link: {
      type: Sequelize.INTEGER,
    },
    percentage: {
      type: Sequelize.INTEGER,
    },
  });

  return Order;
};
