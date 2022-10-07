const cartModel = require('../models/cart');

const sendToCart = (req,res) => {
    const { product, totalPrice} = req.body;

    const { userId } = req.token;
    const cart = new cartModel(
        {
            product,
            totalPrice,
            userId: userId
        }
    );

    cart.save()
    .then((result)=>{
        res.status(201);
        res.json(result);
    })
    .catch((err)=>{
        res.status(404);
        res.json(err.message);
    })
};

const showCart = (req,res) => {
    const {userId} = req.token;
    
    cartModel.find({userId: userId})
    .populate({path:"product"})
    .exec()
    .then((result)=>{
        res.status(201);
        res.json(result);
    })
    .catch((err)=>{
        res.status(500);
        res.json(err);
    })
};

const deleteCart = (req,res) => {
    const cartId = req.params.id;

    cartModel.findOneAndDelete({_id: cartId})
    .then((result)=>{
        res.status(201);
        res.json(result);
    })
    .catch((err)=>{
        res.status(500);
        res.json(err.message);
    })
};

const showCartById = (req,res) => {
    const cartId = req.params.id;

    cartModel.find({_id: cartId})
    .populate({path:"product"})
    .exec()
    .then((result)=>{
        res.status(201);
        res.json(result);
    })
    .catch((err)=>{
        res.status(500);
        res.json(err.message);
    });
};

const updateCartById = (req,res) => {
    const cartId = req.params.id;
    const { totalPrice } = req.body;
    cartModel.findOneAndUpdate({_id: cartId}, {totalPrice: totalPrice}, {new: true})
    .then((result)=>{
        res.status(201);
        res.json(result)
    })
    .catch((err)=>{
        res.status(500);
        res.json(err.message);
    });
};

const deleteCartByUserId = (req,res) => {
    const userId = req.params.id;

    cartModel.findOneAndDelete({userId: userId}).
    then((result)=>{
        res.status(201);
        res.json(result);
    })
    .catch((err)=>{
        res.status(500);
        res.json(err.message);
    });
};


module.exports = { sendToCart, showCart, deleteCart, showCartById, updateCartById, deleteCartByUserId }