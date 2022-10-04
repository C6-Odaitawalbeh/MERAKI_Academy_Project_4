const mongoose = require('mongoose');

const order = new mongoose.Schema(
    {
        cart: {type: mongoose.Schema.Types.ObjectId, ref: "Cart"},
        fullName: {type: String, required: true},
        phoneNumber: {type: Number, required: true},
        country: {type: String, required: true},
        city: {type: String, required: true},
        address: {type: String, required: true},
        state: {type: String, required: true},
        zipCode: {type: Number, required: true},
    }
);

module.exports = mongoose.model("Order", order);