import express from "express";
import {createHotel, deleteHotel, getAllHotels, getOneHotel, updateHotel} from "../controllers/hotelsController.js";
import {authorize, protect} from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route('/').post(protect, authorize, createHotel).get(getAllHotels);
router.route("/:id").put(protect, authorize, updateHotel).delete(protect, authorize, deleteHotel).get(getOneHotel);

export default router;