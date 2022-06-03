import asyncHandler from "express-async-handler";
import Hotel from "../models/Hotel.js";
import {errorResponse} from "../helpers/errorResponse.js";

/** @desc create a hotel
    @route /api/hotels POST
    @access private
 */
export const createHotel = asyncHandler(async (req, res) => {
    const newHotel = await Hotel.create(req.body);

    res.status(201).json({
        message: "Hotel created successfully",
        data: newHotel
    })
});

/** @desc update a hotel
    @route /api/hotels/:id PUT
    @access private
 */
export const updateHotel = asyncHandler(async (req, res) => {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {new: true});

    res.status(200).json({
        message: "Hotel updated successfully",
        data: updatedHotel
    })
})

/** @desc delete a hotel
    @route /api/hotels/:id DELETE
    @access private
 */
export const deleteHotel = asyncHandler(async (req, res) => {
    await Hotel.findOneAndDelete(req.params.id);

    res.status(200).json({message: "Hotel deleted successfully"})
})

/** @desc fetch all hotels
 @route /api/hotels/ GET
 @access public
 */
export const getAllHotels = asyncHandler(async (req, res, next) => {
    const {minPrice, maxPrice, ...others}  = req.query;
    const hotels = await Hotel.find({...others, cheapestPrice: {$gt: minPrice | 1, $lt: maxPrice || 999}}).limit(req.query.limit);

    res.status(200).json({ count: hotels.length, success: true, hotels})
});

/** @desc fetch all hotels by the city e.g hotels in Dublin.
    @route /api/hotels/ GET
    @access public
 */
export const getAllHotelsByCity = asyncHandler(async (req, res, next) => {
    const cities = req.query.cities.split(',');
    const list = await Promise.all(cities.map((city) => {
        return Hotel.countDocuments({city});
    }));


    res.status(200).json({ success: true, hotels: list})
});

/** @desc fetch all properties by the type e.g apartments, hotels, cabins...
 @route /api/hotels/ GET
 @access public
 */
export const getAllHotelsByType = asyncHandler(async (req, res, next) => {
    const hotelCount = await Hotel.countDocuments({type: "hotel"});
    const apartmentCount = await Hotel.countDocuments({type: "apartment"});
    const resortCount = await Hotel.countDocuments({type: "resort"});
    const villaCount = await Hotel.countDocuments({type: "villa"});
    const cabinCount = await Hotel.countDocuments({type: "cabin"});

    res.status(200).json([
        {type: "hotel", count: hotelCount},
        {type: "apartment", count: apartmentCount},
        {type: "resort", count: resortCount},
        {type: "villa", count: villaCount},
        {type: "cabin", count: cabinCount}
    ])
});

/** @desc fetch a hotel
    @route /api/hotels/:id GET
    @access public
 */
export const getOneHotel = asyncHandler(async (req, res, next) => {
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) return next(errorResponse(404, "Not found!"));

    res.status(200).json({success: true, hotel});
});