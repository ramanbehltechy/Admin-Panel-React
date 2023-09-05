const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

userSchema.pre("save", async function (next) {
    try {
        if (this.isModified('password')) {
            this.password = await bcrypt.hash(this.password, 12);
            this.confirmPassword= await bcrypt.hash(this.confirmPassword, 12);
        }
        next();
    } catch (error) {
        next(error)
    }
});

// Method to generate an authentication token
userSchema.methods.generateAuthToken = async function () {
    try {
        const expirationTime = '2h';
        const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATEKEY, {
            expiresIn: expirationTime
        });

        // // Save the token to the user's tokens array
        this.tokens = this.tokens?.concat({ token: token });

        // Save the user document
        await this.save();

        return token;
    } catch (error) {
        console.error(error);
        throw error; // You might want to handle this error more gracefully
    }
};








module.exports = mongoose.model('admin', userSchema);
