import mongoose from "mongoose";

const AllCountSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    category: { type: String, required: true },
    count: { type: Number, required: true },
});

const AllCountCollection =
  mongoose.models.AllCount || mongoose.model("AllCount", AllCountSchema, "AllCount");

export default AllCountCollection;