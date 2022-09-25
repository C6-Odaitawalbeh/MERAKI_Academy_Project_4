const mongoose = require('mongoose');

const product = new mongoose.Schema(
    {
        title: {type: String, required: true},
        description: {type: String, reuired: true},
        price: {type: String, required: true},
        quantity: {type: Number, required: true},
        date: {type: Date, default: Date.now},
        location: {type: String, required: true},
        shortDescription: {type: String, required: true},
        image: {type: String, default: ""},
        userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
    }
);

module.exports = mongoose.model("Product", product);