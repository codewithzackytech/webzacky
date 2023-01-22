import mongoose from "mongoose";

const { Schema } = mongoose;

const Comments = new Schema({
    FullName: {
        type: String,
        required: true
    },
    Comment: {
        type: String,
        required: true
    },
    TutorialName: {
        type: String,
        required: true
    },
    TutorialID: {
        type: Number,
        required: true
    },
})

export default mongoose.model("Comment", Comments)