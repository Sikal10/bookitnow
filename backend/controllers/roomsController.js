import asyncHandler from "express-async-handler";
import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import {errorResponse} from "../helpers/errorResponse.js";

/** @desc create a room
 @route /api/room POST
 @access private
 */
export const createRoom = asyncHandler(async (req, res, next) => {
    const {hotelId} = req.params;
    const newRoom = new Room(req.body);

    const savedRoom = await newRoom.save();
    await Hotel.findByIdAndUpdate(hotelId, {
        $push: {rooms: savedRoom._id}
    });
    res.status(200).json(savedRoom);

});

/** @desc update a room
 @route /api/room POST
 @access private
 */
export const updateRoom = asyncHandler(async (req, res) => {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {new: true});

    res.status(200).json({
        message: "Room updated successfully",
        data: updatedRoom
    })
});

/**
    @desc delete a room
    @route /api/rooms/:id DELETE
    @access private
 */
export const deleteRoom =  asyncHandler(async (req, res) => {
    await Room.findOneAndDelete(req.params.id);

    res.status(200).json({message: "Room deleted successfully"})
});

/**
    @desc get a room
    @route /api/rooms/:id GET
    @access private
 */
export const getOneRoom = asyncHandler(async (req, res, next) => {
    const room = await Room.findById(req.params.id);

    if (!room) return next(errorResponse(404, "Not found!"));

    res.status(200).json({success: true, data:room});
});

/**
 @desc get all rooms
 @route /api/rooms GET
 @access private
 */
export const getRooms = asyncHandler(async (req, res, next) => {
    const rooms = await Room.find();

    res.status(200).json({success: true, data:rooms});
});
