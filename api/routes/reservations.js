import { createRes , updateRes , deleteRes , getRes , getReservations} from "../Controllers/resController.js";
import express  from "express";


const router=express.Router()

router.post("/",createRes);
router.put("/:id",updateRes);
router.delete(":/id",deleteRes);

router.get("/:id",getRes);
router.get("/",getReservations);

export default router