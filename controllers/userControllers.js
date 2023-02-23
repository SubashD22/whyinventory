const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
require('dotenv').config();

const registerUser = async(req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(400).send('mssing required details')
    }
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).send('user already exists, try different email');
    }
    const salt  = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    const newUser = await User.create({
        name,
        email,
        password: hashedPassword
    });
    if(newUser){
        return res.send(200).json({
            id : newUser._id,
            name: newUser.name,
            email: newUser.email,
            token: generateToken(newUser._id)
        })
    }

}
const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'})
}