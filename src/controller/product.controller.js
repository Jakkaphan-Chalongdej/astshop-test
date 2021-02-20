const db = require("../model");
const Product = db.product;
const fs = require("fs");
exports.create = (req, res) => {
  Product.create({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    img_type: req.file.mimetype,
    img_name: req.file.originalname,
    img_data: fs.readFileSync(
      __basedir + "/resources/static/assets/uploads/" + req.file.filename
    ),
    des: req.body.des,
    slug: req.body.slug,
    discount_price: req.body.discount_price,
    category: req.body.category,
    subcategory: req.body.subcategory,
    sale: req.body.sale,
  })
    .then(async (product) => {
      // res.send(product);
      try {
        await fs.writeFileSync(
          __basedir + "/resources/static/assets/tmp/" + product.img_name,
          product.img_data
        );
        res.json({ msg: "File uploaded successfully!", file: req.file });
        // res.send(product);
      } catch (e) {
        console.log(e);
        res.json({ err: "File uploaded" });
      }
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// FETCH all Customers
exports.findAll = (req, res) => {
  Product.findAll({
    order: [["id", "DESC"]],
  }).then((products) => {
    // Send all customers to Client

    res.send(products);
  });
};

// Find a Customer by Id
exports.findById = (req, res) => {
  const id = req.params.productId;
  Product.findByPk(id).then((product) => {
    res.status(200).send(product);
  });
};

// Update a Customer
exports.update = (req, res) => {
  const id = req.params.productId;
  Product.update(
    {
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      img_type: req.file.mimetype,
      img_name: req.file.originalname,
      img_data: fs.readFileSync(
        __basedir + "/resources/static/assets/uploads/" + req.file.filename
      ),
      des: req.body.des,
      slug: req.body.slug,
      discount_price: req.body.discount_price,
      category: req.body.category,
      subcategory: req.body.subcategory,
      sale: req.body.sale,
    },
    { where: { id: id } }
  ).then(async (product) => {
    try {
      await fs.writeFileSync(
        __basedir + "/resources/static/assets/tmp/" + product.img_name,
        product.img_data
      );
      // res.status(200).send("updated successfully  id = " + id);
      res.json({ msg: "File uploaded successfully!", file: req.file });
      // res.send(product);
    } catch (e) {
      console.log(e);
      res.json({ err: "File uploaded" });
    }
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

// Delete a Customer by Id
exports.delete = (req, res) => {
  const id = req.params.productId;
  Product.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).send("deleted successfullyid = " + id);
  });
};
return false;
