import mongoose from "mongoose";

const { Schema } = mongoose;

const SignUp = new Schema({
    FullName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    Password: {
        type: String,
        required: true
    }

})

export default mongoose.model("SignUp", SignUp)