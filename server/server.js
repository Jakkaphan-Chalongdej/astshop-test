const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const server = express();
const PORT = process.env.PORT || 3000;
const db = require("../src/config/db.config");
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync with { force: true }");
// });
var corsOptions = {
  origin: ` http://localhost:${PORT}`,
  optionsSuccessStatus: 200,
};
db.sequelize.sync();
server.use(express.static(path.resolve(__dirname, '..', 'build')));
server.use(cors(corsOptions));
server.use(bodyParser.json());
require("../src/route/book.route")(server);
server.use(bodyParser.urlencoded({ extended: true }));
server.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log("-----------------------------------------");
  console.log(`PLEASE VISIT >> http://localhost:${PORT}. <<`);
  console.log("_________________________________________");
});
// .catch((ex) => {
//   console.error(ex.stack);
//   process.exit(1);
// });
