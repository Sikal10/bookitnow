import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import {errorResponse} from "../helpers/errorResponse.js";

//@desc update a user
//@route /api/hotels PUT
//@access private
export const updateUser = asyncHandler(async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {new: true});

    res.status(200).json({
        message: "User updated successfully",
        data: updatedUser
    })
})

//@desc delete a user
//@route /api/users/:id DELETE
//@access private
export const deleteUser = asyncHandler(async (req, res) => {
    await User.findOneAndDelete(req.params.id);

    res.status(200).json({message: "User deleted successfully"})
})

//@desc fetch all users
//@route /api/users/ GET
//@access public
export const getAllUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({ count: users.length, success: true, users})
});

//@desc fetch a user
//@route /api/users/:id GET
//@access public
export const getOneUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) return next(errorResponse(404, "Not found!"));

    res.status(200).json({success: true, data:user});
});