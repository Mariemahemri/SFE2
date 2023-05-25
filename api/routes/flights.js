import { createFlight , updateFlight , deleteFlight , getflights , getFlight} from "../Controllers/flightController.js";
import express  from "express";


const router=express.Router()

router.post("/",createFlight);
router.put("/:id",updateFlight);
router.delete(":/id",deleteFlight);

router.get("/:id",getFlight);
router.get("/",getflights);

export default router