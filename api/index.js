import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";

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

app.get("/", (req, resp)=>{
    resp.send("hell")
})


app.listen(8800, ()=>{
    connect();
    console.log("backend started")
})