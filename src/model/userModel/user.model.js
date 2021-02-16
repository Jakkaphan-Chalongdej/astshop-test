module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    AddressName: {
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
    password: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
