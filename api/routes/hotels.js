import express from 'express'
import { createHotel, countByCity,countByType, deleteHotel, getHotel, getHotels, getHotelRooms, updateHotel } from '../Controllers/hotelController.js';
import Hotel from '../models/HotelsM.js';
import { verifyAdmin } from '../utils/verifyToken.js';


const router = express.Router();


//ADMIN SECTION
router.post("/", createHotel);
router.put("/:id",updateHotel);
router.delete("/:id", deleteHotel);
//
router.get("/find/:id",getHotel);
//GET ALL
router.get("/",getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);
 



export default router