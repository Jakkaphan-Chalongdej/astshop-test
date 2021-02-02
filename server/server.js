const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const server = express();
const PORT = process.env.PORT || 3001;
const db = require("../src/model");

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync with { force: true }");
//   console.log("Create MySQL.");
//   console.log("Connected to the MySQL server.");
// });

db.sequelize.sync(console.log("Connected to the MySQL server."));

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(path.resolve(__dirname, "..", "build")));
server.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

require("../src/route/product_route")(server);
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
