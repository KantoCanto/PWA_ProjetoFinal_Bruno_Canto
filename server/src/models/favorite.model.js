import mongoose, { Schema } from "mongoose";
import modelOptions from "./model.options";

export default mongoose.model(
    "Favorite",
    mongoose.Schema({
        user: {
            type: Schema.Typed.ObjectId,
            ref: "User",
            required: true
        },  
        content: {
            type: String,
            required: true
        },
        mediaType: {
            type: String,
            enum: ["movie", "tv"],
            required: true
        },
        mediaId:{
            type: String,
            required: true
        },
        mediaTitle:{
            type: String,
            required: true
        },
        mediaPoster:{
            type: String,
            required: true
        },
        mediaRate:{
            type: Number,
            required: true
        }
    }, modelOptions)
)