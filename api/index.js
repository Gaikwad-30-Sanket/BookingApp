import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

const connect = async () =>{
     try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected To MongoDB")
     }
     catch(error){
        console.log("database not connected")
     }
}


// middleswares
app.use(express.json())  // to get the data in the json format
app.use(cookieParser())


app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

app.use((err, req, res, next) => { // this middleware is to handle the error
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

app.listen(8800, ()=>{
    connect();
    console.log("backend started")
})