const productModel = require("../models/product");

const createNewProducts = (req, res) => {
  const {
    title,
    description,
    price,
    quantity,
    date,
    location,
    image,
    count,
    shorttitle,
  } = req.body;

  const { userId } = req.token;

  const product = new productModel({
    title,
    description,
    price,
    quantity,
    date,
    location,
    image,
    userId: userId,
    count,
    shorttitle,
  });

  product
    .save()
    .then((result) => {
      res.status(201);
      res.json(result);
    })
    .catch((err) => {
      res.status(404);
      res.json(err.message);
    });
};

const getAllProducts = (req, res) => {
  productModel
    .find({})
    .then((result) => {
      res.status(201);
      res.json(result);
    })
    .catch((err) => {
      res.status(404);
      res.json(err.message);
    });
};

const getProductsById = (req, res) => {
  const id = req.params.id;

  productModel
    .find({ _id: id })
    .then((result) => {
      res.status(201);
      res.json(result);
    })
    .catch((err) => {
      res.status(404);
      res.json(err.message);
    });
};

const getProductByPage = (req, res) => {
  const { page, limit } = req.query;
  const skip = (page - 1) * 15;
  productModel
    .find()
    .skip(skip)
    .limit(limit)
    .then((result) => {
      res.status(201);
      res.json(result);
    })
    .catch((err) => {
      res.status(500);
      res.json(err.message);
    });
};

const searchProduct = async (req, res) => {
  // console.log("test")
  const title = req.query.title;
  console.log(title);
  const regex = new RegExp(title, "gi");

  try {
    const searchProduct = await productModel.find({ title: { $regex: regex } });

    if (searchProduct.length) {
      res.status(201);
      res.json({ searchProduct });
    }
    throw Error;
  } catch (err) {
    res.status(500);
    res.json(err.message);
  }
};

const filterProduct = (req, res) => {
  const asc = req.query.asc;
  const desc = req.query.desc;

  productModel
    .find({ price: { $gt: asc, $lt: desc } })
    .then((result) => {
      res.status(201);
      res.json(result);
    })
    .catch((err) => {
      res.status(404);
      res.json(err.message);
    });
};

const updateProductsById = (req, res) => {
  const id = req.params.id;

  const {
    title,
    description,
    price,
    quantity,
    date,
    location,
    image,
    userId,
    shorttitle,
  } = req.body;

  productModel
    .findOneAndUpdate(
      { _id: id },
      {
        title: title,
        description: description,
        price: price,
        quantity: quantity,
        date: date,
        location: location,
        shorttitle: shorttitle,
      },
      { new: true }
    )
    .then((result) => {
      res.status(201);
      res.json(result);
    })
    .catch((err) => {
      res.status(404);
      res.json(err.message);
    });
};

const deleteProductsById = (req, res) => {
  const id = req.params.id;

  productModel
    .findOneAndDelete({ _id: id })
    .then((result) => {
      res.status(201);
      res.json(result);
    })
    .catch((err) => {
      res.status(404);
      res.json(err.message);
    });
};

const ascendingProduct = (req, res) => {
  productModel
    .find({})
    .sort({ price: 1 })
    .then((result) => {
      res.status(201);
      res.json(result);
    })
    .catch((err) => {
      res.status(404);
      res.json(err.message);
    });
};

const descendingProduct = (req, res) => {
  productModel
    .find({})
    .sort({ price: -1 })
    .then((result) => {
      res.status(201);
      res.json(result);
    })
    .catch((err) => {
      res.status(404);
      res.json(err.message);
    });
};

module.exports = {
  createNewProducts,
  getAllProducts,
  getProductsById,
  searchProduct,
  filterProduct,
  updateProductsById,
  deleteProductsById,
  getProductByPage,
  ascendingProduct,
  descendingProduct,
};
