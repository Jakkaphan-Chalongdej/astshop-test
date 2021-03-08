const db = require("../model");
const Order_detail = db.order_detail;
const Order = db.order;
const User = db.user;
const Products = db.product;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
  // console.log("req  order ------->>>>>>", req.body.product);
  const id_p = req.body.product;

  Order.create({
    price: req.body.price,
    // quantity: req.body.quantity,
    shippingPrice: req.body.shippingPrice,
    vat: req.body.vat,
    currency: req.body.currency,
    userId: req.body.userID,
  })
    .then(async (order) => {
      if (id_p) {
        await id_p.map((product_map) => {
          if (product_map.id) {
            Order_detail.create({
              orderId: order.id,
              productId: product_map.id,
              quantity: product_map.quantity,
            }).then(() => {
              res.send({ message: "User was registered successfully!" });
            });
            // order
            //   .setProducts(product_map.quantity, {
            //     through: { attributes: "quantity" },
            //   })
            //   .then(() => {
            //     console.log("req  order ------->>>>>>");
            //     res.send({ message: "User was registered successfully!" });
            //   });
            // order.setProducts(product_map.id).then((product) => {
            //   console.log("req  order ------->>>>>>", product);
            //   res.send({ message: "User was registered successfully!" });
            // });
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
    // order: [["id", "DESC"]],
    include: [
      {
        model: Products,
        attributes: ["name", "img_name"],
        through: {
          model: Order_detail,
          attributes: ["quantity"],
        },
      },
    ],
  }).then((order) => {
    var product = [];
    console.log(" <------- Get order product ------->");
    // order.getProducts().then((data) => {
    //   for (let i = 0; i < data.length; i++) {
    //     product.push(order[i].name);
    //   }
    //   console.log("getProducts ---->>>", data);
    //   res.status(200).send({
    //     id: order.id,
    //     price: order.price,
    //     quantity: order.quantity,
    //     shippingPrice: order.shippingPrice,
    //     vat: order.vat,
    //     currency: order.currency,
    //     userId: order.userID,
    //     productId: product,
    //   });
    // });
    res.send(order);
  });
};

// Find a Customer by Id
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
    ],
  }).then((product) => {
    res.status(200).send(product);
  });
};

// Update a Customer
exports.update = (req, res) => {
  const id = req.params.orderId;
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
  Order.findAll({
    where: { userID: userID },
    include: [
      {
        model: Products,
        attributes: ["name", "img_name"],
      },
    ],
  }).then((order) => {
    // order.getProducts().then((data) => {
    //   for (let i = 0; i < data.length; i++) {
    //     product.push(order[i].name);
    //   }
    //   console.log("getProducts ---->>>", product);
    //   res.status(200).send({
    //     id: order.id,
    //     price: order.price,
    //     quantity: order.quantity,
    //     shippingPrice: order.shippingPrice,
    //     vat: order.vat,
    //     currency: order.currency,
    //     userId: order.userID,
    //     productId: order.product,
    //   });
    // });
    res.send(order);
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
