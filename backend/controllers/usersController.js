import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import {errorResponse} from "../helpers/errorResponse.js";

/**  @desc update user
 @route /api/users/:id PUT
 @access private user || admin
 */
export const updateUser = asyncHandler(async (req, res) => {
    const updatedUser = await User.findById(req.user._id);
    console.log(updatedUser);

    res.status(200).json({
        message: "User updated successfully",
        data: updatedUser
    })
})

/**  @desc delete user
 @route /api/users/:id DELETE
 @access private user || admin
 */
export const deleteUser = asyncHandler(async (req, res) => {
    await User.findOneAndDelete(req.user._id);

    res.status(200).json({message: "User deleted successfully"})
})

/** @desc get all users
 @route /api/users/:id GET
 @access admin
 */
export const getAllUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({count: users.length, success: true, users})
});

/** @desc get a user
 @route /api/users/:id GET
 @access private user || admin
 */
export const getOneUser = asyncHandler(async (req, res, next) => {
    /** format the id of the authenticated user */
    const id = String(req.user._id);

    if (id !== req.params.id && !req.user.isAdmin) {
        return next(errorResponse(403, "You're not authorized!"));
    }

    const user = await User.findById(req.params.id);
    if (!user) return next(errorResponse(404, "user does not exist"));

    res.status(200).json({success: true, data: user});

});

/** @desc get current user
 @route /api/users/:id GET
 @access private user || admin
 */
export const getCurrentUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user._id);

    if (!user) return next(errorResponse(404, "user does not exist"));

    res.status(200).json({success: true, data: user});
});

