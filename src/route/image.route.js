module.exports = function (server) {
  const image = require("../controller/image.controller");
  router.post("/upload", upload.single("file"), image.uploadFiles);
};
