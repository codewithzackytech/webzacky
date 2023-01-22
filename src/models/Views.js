import mongoose from "mongoose";

const { Schema } = mongoose;

const Views = new Schema({
    TutorialID: {
        type: Number,
    },
    Views: {
        type: Number
    }
})

export default mongoose.model("View", Views)