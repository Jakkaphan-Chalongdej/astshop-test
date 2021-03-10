const db = require("../model");
const Product = db.product;
// const fs = require("fs");
exports.create = (req, res) => {
  let filename = null;
  if (typeof req.file != "undefined") {
    filename = "/resources/static/assets/uploads/" + req.file.filename;
  }

  Product.create({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    img_name: filename,
    des: req.body.des,
    slug: req.body.slug,
    discount_price: req.body.discount_price,
    category: req.body.category,
    subcategory: req.body.subcategory,
    sale: req.body.sale,
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
  Product.findAll({
    order: [["id", "DESC"]],
  }).then((products) => {
    res.send(products);
  });
};

// Find a products by Id
exports.findById = (req, res) => {
  const id = req.params.productId;
  Product.findByPk(id).then((product) => {
    res.status(200).send(product);
  });
};

// Update products
exports.update = (req, res) => {
  const id = req.params.productId;
  if (typeof req.file !== "undefined") {
    let filename = null;
    filename = "/resources/static/assets/uploads/" + req.file.filename;
    Product.update(
      {
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        img_name: filename,
        des: req.body.des,
        slug: req.body.slug,
        discount_price: req.body.discount_price,
        category: req.body.category,
        subcategory: req.body.subcategory,
        sale: req.body.sale,
      },
      { where: { id: id } }
    );
  }
  Product.update(
    {
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      des: req.body.des,
      slug: req.body.slug,
      discount_price: req.body.discount_price,
      category: req.body.category,
      subcategory: req.body.subcategory,
      sale: req.body.sale,
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
exports.updateQuantity = (req, res) => {
  const id = req.params.productId;
  Product.update(
    {
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      des: req.body.des,
      slug: req.body.slug,
      discount_price: req.body.discount_price,
      category: req.body.category,
      subcategory: req.body.subcategory,
      sale: req.body.sale,
    },
    { where: { id: id } }
  ).then(async (product) => {
    res.status(200).send("updated successfully  id = " + id);
    res.send(product);
  });
};

// Delete a products by Id
exports.delete = (req, res) => {
  const id = req.params.productId;
  Product.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).send("deleted successfullyid = " + id);
  });
};
return false;
