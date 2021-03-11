const db = require("../model");
const Promotion = db.product_promotion;
// const fs = require("fs");
exports.create = (req, res) => {
  let filename = null;
  if (typeof req.file != "undefined") {
    filename = "/resources/static/assets/uploads/" + req.file.filename;
  }

  Promotion.create({
    image: filename,
    title: req.body.title,
    text: req.body.text,
    link: req.body.link,
    percentage: req.body.percentage,
  })
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

// FETCH all products
exports.findAll = (req, res) => {
  Promotion.findAll({
    order: [["id", "DESC"]],
  }).then((products) => {
    res.send(products);
  });
};

// Find a products by Id
exports.findById = (req, res) => {
  const id = req.params.productId;
  Promotion.findByPk(id).then((product) => {
    res.status(200).send(product);
  });
};

// Update products
exports.update = (req, res) => {
  const id = req.params.productId;
  if (typeof req.file !== "undefined") {
    let filename = null;
    filename = "/resources/static/assets/uploads/" + req.file.filename;
    Promotion.update(
      {
        image: filename,
        title: req.body.title,
        text: req.body.text,
        link: req.body.link,
        percentage: req.body.percentage,
      },
      { where: { id: id } }
    );
  }
  Promotion.update(
    {
      title: req.body.title,
      text: req.body.text,
      link: req.body.link,
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
  Promotion.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).send("deleted successfullyid = " + id);
  });
};
return false;
