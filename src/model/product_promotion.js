module.exports = (sequelize, Sequelize) => {
  const promotion = sequelize.define("promotion", {
    image: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    text: {
      type: Sequelize.STRING,
    },
    link: {
      type: Sequelize.STRING,
    },
    percentage: {
      type: Sequelize.STRING,
    },
  });

  return Order;
};
