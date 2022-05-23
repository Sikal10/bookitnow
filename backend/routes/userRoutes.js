import express from "express";
import {getAllUsers, deleteUser, getOneUser, updateUser, getCurrentUser} from "../controllers/usersController.js";
import {protect, authorize} from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route('/').get(protect, authorize, getAllUsers);
router.route("/profile").get(protect, getCurrentUser);
router.route("/:id").put(protect, updateUser).delete(protect, deleteUser).get(protect, getOneUser);

export default router;