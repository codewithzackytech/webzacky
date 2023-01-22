import mongoose from "mongoose";

const { Schema } = mongoose;

const Subscriber = new Schema({
    Email: {
        type: String,
        required: true
    }
})

export default mongoose.model("Subscribers", Subscriber)