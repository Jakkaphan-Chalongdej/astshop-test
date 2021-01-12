const db = require("../model");
const ProductStatus = db.productStatus;


exports.create = (req, res) => {
  
  ProductStatus.create({
    id:req.body.id,
    name: req.body.name,
  })
    .then((productStatus) => {
 
      res.send(productStatus);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};


exports.findAll = (req, res) => {
  ProductStatus.findAll()
    .then((productStatus) => {
      
      res.send(productStatus);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

exports.findById = (req, res) => {
  ProductStatus.findById(req.params.productStatusId)
    .then((productStatus) => {
      res.send(productStatus);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};


exports.update = (req, res) => {
  var productStatus = req.body;
  const id = req.params.productStatusId;
  ProductStatus.update(
    {
      id:req.body.id,
      name: req.body.name,
   
    },
    {
      where: {
        id: req.params.productStatusId,
      },
    }
  )
    .then(() => {
      res.status(200).send(productStatus);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};


exports.delete = (req, res) => {
  const id = req.params.productStatusId;
  ProductStatus.destroy({
    where: { id: id },
  })
    .then(() => {
      res.status(200).send("Product has been deleted!");
    })
    .catch((err) => {
      res.status(500).send("Fail to delete!");
    });
};
