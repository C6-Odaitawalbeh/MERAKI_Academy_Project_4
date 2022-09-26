const cartModel = require('../models/cart');

const sendToCart = (req,res) => {
    const { product,userId } = req.body;

    const { userIdToken } = req.token;
    const cart = new cartModel(
        {
            product,
            userId: userIdToken
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
    cartModel.find({})
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