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
// one to manny  product and  product status
db.product = require("../model/product.mode")(sequelize, Sequelize);
// db.productStatus = require("../model/product.status.mode")(
//   sequelize,
//   Sequelize
// );
// db.productStatus.hasMany(db.product, { as: "product" });
// db.product.belongsTo(db.productStatus, {
//   foreignKey: "id",
//   as: "product_status",
// });
// // one to manny  product and  image 
// db.image = require("../model/image.mode")(sequelize, Sequelize);
// db.image.hasMany(db.product, { as: "product" });
// db.product.belongsTo(db.image, {
//   foreignKey: "id",
//   as: "image",
// });
// // one to manny  product and  category 
// db.category = require("../model/category.mode")(sequelize, Sequelize);
// db.category.hasMany(db.product, { as: "product" });
// db.product.belongsTo(db.category, {
//   foreignKey: "id",
//   as: "category",
// });


module.exports = db;
