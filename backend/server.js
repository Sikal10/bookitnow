import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import {errorHandler} from "./middlewares/error.js";

//routes
import authRoute from "./routes/authRoutes.js";
import hotelRoute from "./routes/hotelRoutes.js"
import roomsRoute from "./routes/roomRoutes.js";
import usersRoute from "./routes/userRoutes.js"

dotenv.config();

connectDB();

const app = express();

//middlewares
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

app.use(errorHandler);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})