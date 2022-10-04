const mongoose = require('mongoose');

const cart = new mongoose.Schema(
    {
        product: {type: mongoose.Schema.Types.ObjectId, ref: "Product" , unique: true},
        userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        totalPrice: {type: Number, default: 0}
    }
);

module.exports = mongoose.model("Cart", cart);