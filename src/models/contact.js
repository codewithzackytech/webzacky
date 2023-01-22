import mongoose from "mongoose";

const { Schema } = mongoose;

const Contact = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

export default mongoose.model("Contact", Contact)