const productModel = require('../models/product');

const createNewProducts = (req,res) => {
    const {
        title,
        description,
        price,
        quantity,
        date,
        location,
        shortDescription,
        image,
        userId
    } = req.body;

    const {userIdToken} = req.token;

    const product = new productModel(
        {
        title,
        description,
        price,
        quantity,
        date,
        location,
        shortDescription,
        image,
        userId: userIdToken
        }
    )

    product.save()
    .then((result)=>{
        res.status(201);
        res.json(result);
    })
    .catch((err)=>{
        res.status(404);
        res.json(err.message);
    })
};

const getAllProducts = (req,res) => {
    productModel.find({})
    .then((result)=>{
        res.status(201);
        res.json(result);
    })
    .catch((err)=>{
        res.status(404);
        res.json(err.message);
    })
};

const getProductsById = (req,res) => {
    const id = req.params.id;

    productModel.find({_id: id})
    .then((result)=>{
        res.status(201);
        res.json(result);
    })
    .catch((err)=>{
        res.status(404);
        res.json(err.message);
    })
};

const searchProduct = (req,res) => {
    console.log("test")
    const title = req.query.title;
        console.log(title)
    productModel.find({title: title})
    .then((result)=>{
        console.log("result : "+ result)
        res.status(201);
        res.json(result);
    })
    .catch((err)=>{
        res.status(404);
        res.json(err.message);
    })
};

const filterProduct = (req,res) => {
    const { price } = req.body;
    
    productModel.find({price: {$lt: price}})
    .then((result)=>{
        res.status(201);
        res.json(result);
    })
    .catch((err)=>{
        res.status(404);
        res.json(err.message);
    })
}

const updateProductsById = (req,res) => {
    const id = req.params.id;
    const {title,description,price,quantity,date,location,shortDescription,image,userId} = req.body;

    productModel.findOneAndUpdate({_id: id}, {title: title, description: description, price: price, quantity: quantity, date: date, location: location, shortDescription: shortDescription}, {new: true})
    .then((result)=>{
        res.status(201);
        res.json(result);
    })
    .catch((err)=>{
        res.status(404);
        res.json(err.message);
    })
};

const deleteProductsById = (req,res) => {
    const id = req.params.id;

    productModel.findOneAndDelete({_id: id})
    .then((result)=>{
        res.status(201);
        res.json(result);
    })
    .catch((err)=>{
        res.status(404);
        res.json(err.message);
    })
};


module.exports = { createNewProducts, getAllProducts, getProductsById , searchProduct, filterProduct ,updateProductsById, deleteProductsById }