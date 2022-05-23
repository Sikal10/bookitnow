import User from "../models/User.js";
import asyncHandler from "express-async-handler";
import {errorResponse} from "../helpers/errorResponse.js";
import {comparePassword, hashPasswordHandler, validateUserData} from "../helpers/validate.js";
import {signAccessToken} from "../helpers/token.js";

/** @desc Register a user
    @route /api/auth/register POST
    @access public
 */
export const registerUser = asyncHandler(async (req, res, next) => {
    const {username, email, password} = req.body;

    //check if user entered all fields
    validateUserData(username, email, password, res)

    //check if the user email already exists
    const existingUser = await User.findOne({email});
    if (existingUser) return next(errorResponse(404, `user with email ${email} already exists`));
    const existingUsername = await User.findOne({username});
    if (existingUsername) return next(errorResponse(401, `username ${username} is taken`));

    //hash password before saving to the db
    const hashedPassword = await hashPasswordHandler(password);

    const user = await User.create({username, email, password: hashedPassword});

    res.status(201).json({message: "user registered", user});

});

/** @desc login a user
    @route /api/auth/login POST
    @access public
 */
export const loginUser = asyncHandler(async (req, res, next) => {
    const {username, password} = req.body;

    /**check if user already exists*/
    const user = await User.findOne({username});
    if (!user) return next(errorResponse(404, "user not found"));

    /**check if the password is correct*/
    const isPasswordCorrect = await comparePassword(password, user);
    if (!isPasswordCorrect) return next(errorResponse(400, "Invalid credentials"));

    const token = await signAccessToken(user._id);
    res.status(200).json({success: true, token});

});
