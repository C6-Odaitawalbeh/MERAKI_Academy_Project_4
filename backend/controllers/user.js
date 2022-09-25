const userModel = require('../models/user');

const createUser = (req,res) => {
    const { firstName,lastName,country,city,age,email,password,confirmPassword,role } = req.body;

    const newUser = new userModel (
        {
            firstName,
            lastName,
            country,
            city,
            age,
            email,
            password,
            confirmPassword,
            role
        }
    )

    newUser.save()
    .then((result)=>{
        res.status(201);
        res.send(result);
        console.log(result);
    })
    .catch((err)=>{
        res.status(500);
        res.send(err.message);
        console.log(err.message);
    })
}

module.exports = {createUser}