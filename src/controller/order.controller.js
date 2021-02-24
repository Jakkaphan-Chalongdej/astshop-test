const db = require("../model");
const Order = db.order;

exports.create = (req, res) => {
  Order.create({
    userID: req.body.userID,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    img: req.body.img,
    product_name: req.body.product_name,
    price: req.body.price,
    quantity: req.body.quantity,
    shippingPrice: req.body.shippingPrice,
    vat: req.body.vat,
    currency: req.body.currency,
    Address: req.body.Address,
    ZipCode: req.body.ZipCode,
    city: req.body.city,
    Country: req.body.Country,
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
  Order.findAll({
    order: [["id", "DESC"]],
  }).then((products) => {
    // Send all customers to Client
    res.send(products);
  });
};

// Find a Customer by Id
exports.findById = (req, res) => {
  const id = req.params.productId;
  Order.findByPk(id).then((product) => {
    res.status(200).send(product);
  });
};

// Update a Customer
exports.update = (req, res) => {
  const id = req.params.productId;
  Order.update(
    {
      userID: req.body.userID,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      img: req.body.img,
      product_name: req.body.product_name,
      price: req.body.price,
      shippingPrice: req.body.shippingPrice,
      vat: req.body.vat,
      currency: req.body.currency,
      quantity: req.body.quantity,
      Address: req.body.Address,
      ZipCode: req.body.ZipCode,
      city: req.body.city,
      Country: req.body.Country,
    },
    { where: { id: req.params.productId } }
  ).then(() => {
    res.status(200).send("updated successfully  = " + id);
  });
};
exports.findOrder = (req, res) => {
  console.log("username", req);
  const userID = req.params.orderId;
  Order.findAll({ where: { userID: userID } }).then((data) => {
    console.log("Order.findOne", data);
    res.send(data);
  });
};

// Delete a Customer by Id
exports.delete = (req, res) => {
  const id = req.params.productId;
  Order.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).send("deleted successfully id = " + id);
  });
};
return false;
