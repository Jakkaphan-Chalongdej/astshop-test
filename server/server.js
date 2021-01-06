const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const server = express();
const PORT = process.env.PORT || 3002;
const mysql = require("mysql");
const dbcon = mysql.createConnection(require("../src/config/db.config"));
dbcon.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});

var corsOptions = {
  origin: ` http://localhost:${PORT}`,
  optionsSuccessStatus: 200,
};
server.use(cors(corsOptions));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(path.resolve(__dirname, "..", "build")));
server.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});
server.get("/user", function (req, res) { 
  dbcon.query("SELECT * FROM user", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
  dbcon.end();
});
// require("../src/route/book.route")(server);

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
