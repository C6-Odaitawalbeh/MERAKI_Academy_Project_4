const cartModel = require('../models/cart');

const sendToCart = (req,res) => {
    const { product} = req.body;

    const { userId } = req.token;
    const cart = new cartModel(
        {
            product,
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
        res.status(404);
        res.json(err.message);
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
        res.status(404);
        res.json(err.message);
    })
}

module.exports = { sendToCart, showCart, deleteCart }