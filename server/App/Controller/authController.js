let asyncHandler = require('express-async-handler');
let express = require('express');
let mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../Model/UserModel');
const jwt = require('jsonwebtoken');

//User Registration Function using asunc handler
let UserRegister = asyncHandler(async(req,res)=>{
    let {name,email,password,role} = req.body;

    if( !name || !email || !password || !role){
        res.status(400);
        throw new Error("All fields are required");
    }
    
    let userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error("Admin is already registered.Please login");
    }
    
    //Password Hashing
    const hashedPassword = await bcrypt.hash(password,10);
    const userData = await User.create({
        name,
        email,
        password: hashedPassword,
        role
    });

    console.log("User is created");
    if(userData){
        res.status(201).json({
            _id : userData.id,
            email : userData.email
        });
    }
        else{
            res.status(400);
            throw new Error("Admin data is not valid");
        }
});

//Login Admin Function
let UserLogin = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    let loggedUser = await User.findOne({email});
    //compare password with hashed password
    if(loggedUser && (await bcrypt.compare(password,loggedUser.password))){
        const accessToken = jwt.sign({
            loggedUser:{
                id : loggedUser.id,
                email : loggedUser.email,
                role : loggedUser.role
            },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "7d"}
    );
    res.status(200).json({accessToken});
}else{
    res.status(401);
    throw new Error("email or password is not valid");
}
});

//Logout user 
let UserLogout = async(req,res)=>{
    try{
        res.status(200).json({
            message: "User logged out successfully"
        })
    }catch(error){
        console.log(error.message);
    }
}

module.exports = {UserRegister,UserLogin,UserLogout};