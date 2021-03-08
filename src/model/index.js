const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./userModel/user.model")(sequelize, Sequelize);
db.role = require("./userModel/role.model")(sequelize, Sequelize);
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.ROLES = ["user", "admin"];
db.order = require("../model/order.model")(sequelize, Sequelize);
db.product = require("../model/product.mode")(sequelize, Sequelize);

// db.product.hasMany(db.order, { as: "order" });
// db.order.belongsTo(db.product, {
//   foreignKey: "productId",
//   as: "products",
// });

// db.user.hasMany(db.order, { as: "user" });
// db.order.belongsTo(db.user, {
//   foreignKey: "userId",
//   as: "user",
// });
db.order_detail = require("../model/order_detail")(sequelize, Sequelize);
db.order.belongsToMany(db.product, {
  through: db.order_detail,
  foreignKey: "orderId",
});
db.product.belongsToMany(db.order, {
  through: db.order_detail,
  foreignKey: "productId",
  otherKey: "orderId",
});

module.exports = db;
