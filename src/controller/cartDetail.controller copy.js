const db = require("../model");
const Cart = db.cart_detail;
// const fs = require("fs");
exports.create = (req, res) => {
  Cart.create({
    vat: req.body.vat,
    code: req.body.code,
    percentage: req.body.percentage,
  })
    .then(async (product) => {
      res.json({ msg: " uploaded successfully!", file: req.file });
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// FETCH all products
exports.findAll = (req, res) => {
  Cart.findAll({
    order: [["id", "DESC"]],
  }).then((products) => {
    res.send(products);
  });
};

// Find a products by Id
exports.findById = (req, res) => {
  const id = req.params.productId;
  Cart.findByPk(id).then((product) => {
    res.status(200).send(product);
  });
};

// Update products
exports.update = (req, res) => {
  Cart.update(
    {
      vat: req.body.vat,
      code: req.body.code,
      percentage: req.body.percentage,
    },
    { where: { id: id } }
  )
    .then(async (product) => {
      try {
        res.json({ msg: "File uploaded successfully!", file: req.file });
      } catch (e) {
        res.json({ err: "File uploaded" });
      }
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// Delete a products by Id
exports.delete = (req, res) => {
  const id = req.params.productId;
  Cart.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).send("deleted successfullyid = " + id);
  });
};
return false;
