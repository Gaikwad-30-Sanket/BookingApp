import mongoose, { mongo } from "mongoose";

const HotelSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    type:{
        type: String,
        required : true
    },
    city:{
        type: String,
        required : true
    },
    address:{
        type: String,
        required : true
    },
    distance:{
        type: String,
        required : true
    },
    photos:{
        type: [String] // we may have multiple images
    },
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        min : 0,
        max:5
    },
    rooms:{
        type: [String], // it will be contain room id's from rooms schema
    },
    cheapestPrice:{
        type: Number,
        required: true
    },
    featured:{
        type: Boolean,
        default: false
    },
})
export default mongoose.model("Hotel", HotelSchema)
// it will be created as Hotel using HotelSchema