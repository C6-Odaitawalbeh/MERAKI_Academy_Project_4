const mongoose = require('mongoose');

const product = new mongoose.Schema(
    {
        title: {type: String, required: true},
        description: {type: String, reuired: true},
        price: {type: Number, required: true},
        quantity: {type: Number, required: true},
        date: {type: Date, default: Date.now},
        location: {type: String, required: true},
        shortDescription: {type: String, required: true},
        image: {type: String, default: "https://mobizil.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-Max.jpg"},
        userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
    }
);

module.exports = mongoose.model("Product", product);