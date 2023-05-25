import mongoose from "mongoose";
const reservationSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    hotel:{
        type:String,
        required:true
    },
    room:{
        type:String,
        required:true,
    },
    checkIn:{
        type:Date,
        required:true,
    },
    checkOut:{
        type:Date,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
});


export default mongoose.model("Reservation", reservationSchema)