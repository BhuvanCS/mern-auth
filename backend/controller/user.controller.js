import asyncHandler from 'express-async-handler';
//Async handler to custom handle the error
import User from '../models/user.model.js';
// @desc Auth User/Set Token
// route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Auth User"});
});

// @desc Register a new user
// route POST /api/users
// @access Public
const regUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body;
    const userExists = await User.findOne({email: email});
    if(userExists){
        res.status(400);
        throw new Error(`${email} already registred as a user`);
    }
    const user = await User.create({
        name,
        email,
        password
    })
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }
    else{
        res.status(400);
        throw new Error('Invalid username');
    }
    res.status(200).json({message: "Register User"});
});

// @desc Logout user
// route POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Logout User"});
});

// @desc Get user profile
// route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: "User Profile"});
});

// @desc Update user profile
// route PATCH /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Update User Profile"});
});
export {
    authUser,
    regUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};