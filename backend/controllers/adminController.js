const bcrypt = require("bcrypt");
const User = require('../models/UserModel');

module.exports = {
    registerAdmin: async (req, res) => {
        const { firstName, lastName, email, password ,confirmPassword} = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.status(422).json({ success:true,message: "Please filled the field property." })
        }
        try {
            const existingUser = await User.findOne({ email: email });
            if (existingUser) {
                return res.status(422).json({ success:false,message: 'Email already exists' });
            } else if (password != confirmPassword){
                return res.status(422).json({ success:false,message: 'Password and Confirm Password are not same' });
            }
            const newAdmin = new User({
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                isAdmin: true,
            });

            const data = await newAdmin.save();
            return res.status(201).json({ success:true,message: 'Admin registered successfully', data: data });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success:false,message: 'Internal server error' });
        }
    },


    loginAdmin: async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(422).json({ success:true,message: 'Please filled the all fields.' });
            }
            const adminUser = await User.findOne({ email: email });
            if (adminUser) {

                const isMatch = await bcrypt.compare(password, adminUser.password);

                if (!isMatch) {
                    return res.status(400).json({success:false, message: 'Invalid credentials.' });
                } else {
                    // for token genration
                    const token = await adminUser.generateAuthToken();
                    const result = {
                        adminUser,
                        token
                    }
                    return res.status(200).json({ success:true,message: 'Admin logged in successfully', data: result });

                }
            } else {
                return res.status(404).json({ success:false,message: 'Admin not found.' });
            }

        } catch (error) {
            console.error(error);
            return res.status(500).json({success:false, message: 'Internal server error' });
        }
    },



}

