const db = require("../model");
const Order_detail = db.order_detail;
const Order = db.order;
const User = db.user;
const Products = db.product;

exports.create = (req, res) => {
  const id_p = req.body.product;

  Order.create({
    price: req.body.price,
    shippingPrice: req.body.shippingPrice,
    vat: req.body.vat,
    currency: req.body.currency,
  })
    .then(async (order) => {
      if (id_p) {
        await id_p.map((product_map) => {
          if (product_map.id) {
            Order_detail.create({
              orderId: order.id,
              userId: req.body.userID,
              productId: product_map.id,
              quantity: product_map.quantity,
            }).then(() => {
              res.send({ message: "User was registered successfully!" });
            });
          }
        });
      }
      res.send(order);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// // FETCH all Customers
exports.findAll = (req, res) => {
 
  Order.findAll({
    order: [["id", "DESC"]],
   
    include: [
      {
        model: Products,
        attributes: ["name", "img_name"],
        through: {
          model: Order_detail,
          attributes: ["quantity"],
        },
      },
      { model: User },
    ],
  }).then((order) => {
    res.send(order);
  });
};

// Find a Order by Id
exports.findById = (req, res) => {
  const id = req.params.orderId;
  Order.findByPk(id, {
    include: [
      {
        model: Products,
        attributes: ["name", "img_name"],
        through: {
          model: Order_detail,
          attributes: ["quantity"],
        },
      },
      { model: User },
    ],
  }).then((product) => {
    res.status(200).send(product);
  });
};

// Update a Order
exports.update = (req, res) => {
  const id = req.params.orderId;
  Order.update(
    {
      userID: req.body.userID,
      img: req.body.img,
      product_name: req.body.product_name,
      price: req.body.price,
      shippingPrice: req.body.shippingPrice,
      vat: req.body.vat,
      currency: req.body.currency,
      quantity: req.body.quantity,
    },
    { where: { id: req.params.productId } }
  ).then(() => {
    res.status(200).send("updated successfully  = " + id);
  });
};
// Find a Order by Id user
exports.findOrder = (req, res) => {
  const userID = req.params.orderId;
  console.log("userID------->>", userID);
  Order.findAll({
    // where: { userID: userID },
    include: [
      {
        model: Products,
        attributes: ["name", "img_name"],
        through: {
          model: Order_detail,
          attributes: ["quantity"],
        },
      },
      {
        model: User,
        where: { id: userID },
      },
    ],
  }).then((order) => {
    res.send(order);
  });
};

// Delete a Order by Id
exports.delete = (req, res) => {
  const id = req.params.productId;
  Order.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).send("deleted successfully id = " + id);
  });
};
return false;
