import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import User from "./models/User.js";
import Hotel from "./models/Hotel.js";
import Room from "./models/Room.js";

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


app.get('/api/customers/count', async (req, res) => {
  try {
    // Count the number of documents in the "users" collection
    const customerCount = await User.countDocuments();

    res.json({ count: customerCount });
  } catch (error) {
    console.error('Error fetching customer count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/hotel/count', async (req, res) => {
  try {
    // Count the number of documents in the "users" collection
    const hotelCount = await Hotel.countDocuments();

    res.json({ count: hotelCount });
  } catch (error) {
    console.error('Error fetching customer count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/rooms/countByTitle', async (req, res) => {
  try {
    // Use MongoDB aggregation to count the number of rooms for each title
    const roomCountsByTitle = await Room.aggregate([
      {
        $group: {
          _id: '$title',
          count: { $sum: 1 },
        },
      },
    ]);


    // Convert the result to an object for easier handling in React
    const roomCountsObject = {};
    roomCountsByTitle.forEach((result) => {
      roomCountsObject[result._id] = result.count;
    });

    // Send the room counts to the React app
    res.json(roomCountsObject);
  } catch (error) {
    console.error('Error fetching room counts by title:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


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

  // mongoose.connect(process.env.MONGO,{})
  //   .then(result=> console.log("connected to local"))
  //   .catch(err => console.log(err))
  

app.listen(8800, ()=>{
    connect();
    console.log("backend started")
})