module.exports = function (server) {
  const { authJwt } = require("../middleware");
  const order = require("../controller/order.controller");
  // Create
  server.post("/api/order/create", order.create);
  // Retrieve all
  server.get("/api/order", order.findAll);
  // Retrieve a singl  by Id
  server.get("/api/order/:orderId", order.findById);
  // Update   Id
  server.put("/api/order/:orderId", order.update);
  // Delete   Id
  server.delete("/api/order/:orderId", order.delete);

  server.get("/api/orderuser/:orderId", order.findOrder);
};
