const orderModel = require('../models/order');

const addOrder = (req,res) => {
    const { cart, fullName, phoneNumber, country, city, address, state, zipCode } = req.body;
    const order = new orderModel(
        {
            cart,
            fullName,
            phoneNumber,
            country,
            city,
            address,
            state,
            zipCode,
        }
    );

    order.save()
    .then((result)=>{
        res.status(201);
        res.json(result);
    })
    .catch((err)=>{
        res.status(500);
        res.json(err.message);
    });
};

const getAllOrder = (req,res) => {
    orderModel.find({})
    .populate({path: "cart", select: "product -_id"})
    .exec()
    .then((result)=>{
        res.status(201);
        res.json(result);
    })
    .catch((err)=>{
        res.status(500);
        res.json(err.message)
    });
};

module.exports = {addOrder, getAllOrder}