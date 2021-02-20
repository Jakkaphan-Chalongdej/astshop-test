module.exports = function (server) {
  const product = require("../controller/product.controller");
  const upload = require("../middleware/upload");

  // Create
  server.post(
    "/api/product/create",
    upload.single("uploadfile"),
    product.create
  );
  // Retrieve all
  server.get("/api/product", product.findAll);
  // Retrieve a singl  by Id
  server.get("/api/product/:productId", product.findById);
  // Update   Id
  server.put(
    "/api/product/:productId",
    upload.single("uploadfile"),
    product.update
  );

  server.put(
    "/api/update/:productId",
    product.updateQuantity
  );
  // Delete   Id
  server.delete("/api/product/:productId", product.delete);
};
