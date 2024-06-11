import mongoose from "mongoose";

const CountSchema = new mongoose.Schema({
  positive: { type: Number, required: true },
  neutral: { type: Number, required: true },
  negative: { type: Number, required: true },
});

const CountCollection =
  mongoose.models.Count || mongoose.model("Count", CountSchema, "Count");

export default CountCollection;
