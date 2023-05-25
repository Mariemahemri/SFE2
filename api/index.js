import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";


import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";
import flightRoute from "./routes/flights.js";
import ResRoute from "./routes/reservations.js";



const app = express()
dotenv.config()

const connect = async ()=>{
try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected")
}catch(e){
    throw e;
}}
const corsOptions ={
    origin :"http://localhost:3000/"
};



//middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

app.use("/auth", authRoute);
app.use("/users",usersRoute);
app.use("/rooms",roomsRoute);
app.use("/hotels",hotelsRoute);
app.use("/flights",flightRoute);
app.use("/reservation",ResRoute);



app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage =err.errorMessage || "Something went wrong"

    return res.status(errorStatus).json({
        success:false,
        status : errorStatus ,
        message :errorMessage,
        stack :err.stack,
    });
});


app.listen(4000,()=>{
    connect();
    console.log("connected to backend.");
});