const loginModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req,res) => {
    const {email, password} = req.body;
    try {
        const user = await loginModel.findOne({email: email}).populate("role").exec();

        if (!user) {
        return res.status(404).json({success: false, message: "The email doesn't exist"});
        }

        const storedPassHash = user.password;
        const validPass = await bcrypt.compare(password, storedPassHash);

        if (validPass) {
            const payload = {
            userId: user._id,
            country: user.country,
            role: user.role,
            };
    
            const options = {
                expiresIn: '60m'
            }
    
            const secretKey = process.env.SECRET;
            const token = jwt.sign(payload,secretKey,options);

            res.status(200);
            res.json({success: true, massage: "Valid login credentials", token: token, userId: user._id, role: user.role});
        }

        res.status(403);
        res.json({success: false, message: "The password you’ve entered is incorrect"});
        
    } catch (err) {
        console.log(err);
        res.status(500);
        res.json(err.massage);
    }
};

module.exports = {login};