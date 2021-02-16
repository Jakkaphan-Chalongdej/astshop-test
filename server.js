const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const server = express();
const PORT = process.env.PORT || 3001;
const db = require("./src/model");
const Role = db.role;
global.__basedir = path.join(__dirname, "/public");
//Gen database
// db.sequelize.sync({ force: true }).then(() => {
//   initial();
//   console.log("Drop and Resync with { force: true }");
//   console.log("Create MySQL.");
//   console.log("Connected to the MySQL server.");
// });
function initial() {
  Role.create({
    id: 1,
    name: "user",
  });
  Role.create({
    id: 2,
    name: "admin",
  });
}
db.sequelize.sync(console.log("Connected to the MySQL server."));

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
// server.use(express.static(path.resolve(__dirname, "..", "build")));
server.use(
  express.static(
    path.join(__dirname, "/public", "/resources/static/assets/uploads/")
  )
);
// server.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
// });

require("./src/route/product_route")(server);
require("./src/route/auth.routes")(server);
require("./src/route/user.route")(server);
require("./src/route/order.route")(server);
server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${PORT}.`);
  console.log("-----------------------------------------");
  console.log(`PLEASE VISIT >> http://localhost:${PORT}. <<`);
  console.log("_________________________________________");
});
// .catch((ex) => {
//   console.error(ex.stack);
//   process.exit(1);
// });
