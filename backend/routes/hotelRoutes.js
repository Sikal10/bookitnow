import express from "express";
import {createHotel, deleteHotel, getAllHotels, getOneHotel, updateHotel} from "../controllers/hotelsController.js";

const router = express.Router();

router.route('/').post(createHotel).get(getAllHotels);
router.route("/:id").put(updateHotel).delete(deleteHotel).get(getOneHotel);

export default router;