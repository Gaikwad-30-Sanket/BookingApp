import express from "express";
import Hotel from "../models/Hotel.js";
import {createError}  from "../utils/error.js"; // when we not write export default then curly braces are imp.
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
const router = express.Router();

// creating hotel
router.post("/", createHotel)

// updating hotel
router.put("/:id", updateHotel)


//deleting hotel
router.delete("/:id", deleteHotel)

//getting perticular hotel
router.get("/:id", getHotel)

//getting all hotels
router.get("/", getHotels)
export default router;   