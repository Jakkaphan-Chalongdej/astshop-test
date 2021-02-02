module.exports = function (server) {
  const product = require("../controller/product.controller");
  // Create
  server.post("/api/product/create", product.create);
  // Retrieve all
  server.get("/api/product", product.findAll);
  // Retrieve a singl  by Id
  server.get("/api/product/:productId", product.findById);
  // Update   Id
  server.put("/api/product/:productId", product.update);
  // Delete   Id
  server.delete("/api/product/:productId", product.delete);
};
