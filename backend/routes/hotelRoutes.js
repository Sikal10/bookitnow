import express from "express";
import {createHotel, getAllHotels, updateHotel} from "../controllers/hotelsController.js";

const router = express.Router();

router.route('/').post(createHotel).get(getAllHotels);
router.route("/:id").put(updateHotel)

export default router;