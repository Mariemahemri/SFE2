import mongoose from "mongoose";
const flightSchema = new mongoose.Schema({
    origin:{
        type: String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    Airline:{
        type:String,
        required:true,
    },
    checkIn:{
        type:String,
        required:true,
    },
    checkOut:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
});


export default mongoose.model("Flight", flightSchema)