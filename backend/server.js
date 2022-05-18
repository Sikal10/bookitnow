import express from "express";
import dotenv from "dotenv";
import {properties} from "./data/properties.js";
import connectDB from "./db/db.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
    res.send("API is running");
});

app.get("/api/properties", (req, res) => {
    res.json(properties);
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})