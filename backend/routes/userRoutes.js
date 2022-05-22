import express from "express";
import {getAllUsers, deleteUser, getOneUser, updateUser} from "../controllers/usersController.js";

const router = express.Router();

router.route('/').get(getAllUsers)
router.route("/:id").put(updateUser).delete(deleteUser).get(getOneUser);


export default router;