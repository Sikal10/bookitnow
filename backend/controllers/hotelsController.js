import asyncHandler from "express-async-handler";
import Hotel from "../models/Hotel.js";
import {errorResponse} from "../helpers/errorResponse.js";

//@desc create a hotel
//@route /api/hotels POST
//@access private
export const createHotel = asyncHandler(async (req, res) => {
    const newHotel = await Hotel.create(req.body);

    res.status(201).json({
        message: "Hotel created successfully",
        data: newHotel
    })
});

//@desc update a hotel
//@route /api/hotels PUT
//@access private
export const updateHotel = asyncHandler(async (req, res) => {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {new: true});

    res.status(200).json({
        message: "Hotel updated successfully",
        data: updatedHotel
    })
})

//@desc delete a hotel
//@route /api/hotels/:id DELETE
//@access private
export const deleteHotel = asyncHandler(async (req, res) => {
    await Hotel.findOneAndDelete(req.params.id);

    res.status(200).json({message: "Hotel deleted successfully"})
})

//@desc fetch all hotels
//@route /api/hotels/ GET
//@access public
export const getAllHotels = asyncHandler(async (req, res, next) => {
    const hotels = await Hotel.find();

    res.status(200).json({ count: hotels.length, success: true, hotels})
});

//@desc fetch a hotels
//@route /api/hotels/:id GET
//@access public
export const getOneHotel = asyncHandler(async (req, res, next) => {
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) return next(errorResponse(404, "Not found!"));

    res.status(200).json({success: true, data:hotel});
});