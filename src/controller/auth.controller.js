const db = require("../model");
const config = require("../config/config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token,
          firstname: user.firstname,
          lastname: user.lastname,
          age: user.age,
          AddressName: user.AddressName,
          Address: user.Address,
          ZipCode: user.ZipCode,
          city: user.city,
          Country: user.Country,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.findAll = (req, res) => {
  User.findAll({
    order: [["id", "DESC"]],
  }).then((user) => {
    res.send(user);
  });
};
exports.findById = (req, res) => {
  const id = req.params.userId;
  console.log("findById", id);
  User.findByPk(id)
    .then((user) => {
      console.log(user);
      var authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: user.accessToken,
          firstname: user.firstname,
          lastname: user.lastname,
          age: user.age,
          AddressName: user.AddressName,
          Address: user.Address,
          ZipCode: user.ZipCode,
          city: user.city,
          Country: user.Country,
        });
      });
      // res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.userId;
  User.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
      username: req.body.username,
      email: req.body.email,
      AddressName: req.body.AddressName,
      Address: req.body.Address,
      ZipCode: req.body.ZipCode,
      city: req.body.city,
      Country: req.body.Country,
      // password: bcrypt.hashSync(req.body.password, 8),
    },
    { where: { id: req.params.userId } }
  ).then(async () => {
    await res.status(200).send("updated successfully id = " + id);
  });
};
