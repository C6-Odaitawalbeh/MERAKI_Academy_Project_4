const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const user = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        country: {type: String},
        city: {type: String},
        age: {type: Number},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        confirmPassword: {type: String},
        welcomeUser: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        role: {type: mongoose.Schema.Types.ObjectId, ref: "Role"}
    }
);

// hasing password
user.pre('save', async function () {
    this.email = this.email.toLowerCase();
    this.password = this.password = await bcrypt.hash(this.password, 10);
})

module.exports = mongoose.model("User", user);