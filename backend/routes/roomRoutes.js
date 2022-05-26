import express from "express";
import {authorize, protect} from "../middlewares/authMiddleware.js";
import {createRoom, deleteRoom, getRooms, getOneRoom, updateRoom} from "../controllers/roomsController.js";

const router = express.Router();

router.route('/').get(getRooms);
router.route("/:id").put(protect, authorize, updateRoom).delete(protect, authorize, deleteRoom).get(getOneRoom);
router.route("/:hotelId").post(protect, authorize, createRoom);

export default router;