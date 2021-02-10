const db = require("../model");
const Product = db.product;

exports.create = (req, res) => {
  Product.create({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    img: req.body.img,
    des: req.body.des,
    slug: req.body.slug,
    discount_price: req.body.discount_price,
    category: req.body.category,
    subcategory: req.body.subcategory,
    sale: req.body.sale,
  })
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// FETCH all Customers
exports.findAll = (req, res) => {
  Product.findAll({
    order: [['id', 'DESC'],],
  }).then((products) => {
    // Send all customers to Client

    res.send(products);
  });
};

// Find a Customer by Id
exports.findById = (req, res) => {
  const id = req.params.productId;
  Product.findById({ where: { id: id } }).then((product) => {
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
      img: req.body.img,
      des: req.body.des,
      slug: req.body.slug,
      discount_price: req.body.discount_price,
      category: req.body.category,
      subcategory: req.body.subcategory,
      sale: req.body.sale,
    },
    { where: { id: req.params.productId } }
  ).then(() => {
    res.status(200).send("updated successfully a customer with id = " + id);
  });
};

// Delete a Customer by Id
exports.delete = (req, res) => {
  const id = req.params.productId;
  Product.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).send("deleted successfully a customer with id = " + id);
  });
};
return false;
