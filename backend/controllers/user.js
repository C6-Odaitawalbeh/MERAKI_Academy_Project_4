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
            role,
            welcomeUser
        }
    )

    newUser.save()
    .then((result)=>{
        res.status(201);
        res.json(result);
        console.log(result);
    })
    .catch((err)=>{
        res.status(500);
        res.json(err.message);
        console.log(err.message);
    })
};

const getAllUsers = (req,res) => {
    userModel.find({})
    .then((result)=>{
        res.status(201);
        res.json(result);
    })
    .catch((err)=>{
        res.status(404);
        res.json(err.message);
    })
}

const getUserById = (req,res) => {
    const id = req.params.id;
    userModel.find({_id: id})
    .then((result)=>{
        res.status(201);
        res.json(result);
    })
    .catch((err)=>{
        res.status(404);
        res.json(err.message);
    })
};

const editProfile = (req,res) => {
    const id = req.params.id;

    const { password, confirmPassword, firstName, lastName ,country} = req.body;

    // if (password == confirmPassword) //{
        userModel.findOneAndUpdate({_id: id}, {password: password, confirmPassword: confirmPassword, country: country, firstName: firstName, lastName: lastName}, {new: true})
        .then((result)=>{
            res.status(201);
            res.json(result);
        })
        .catch((err)=>{
            res.status(404);
            res.json(err.message);
        })
    // } else {
        
    // }
};

const deleteProfile = (req,res) => {
    const id = req.params.id;

    userModel.findOneAndDelete({_id: id})
    .then((result)=>{
        res.status(201);
        res.json(result)
    })
    .catch((err)=>{
        res.status(404);
        res.json(err.message);
    })
};


module.exports = {createUser, getAllUsers, getUserById, editProfile, deleteProfile}