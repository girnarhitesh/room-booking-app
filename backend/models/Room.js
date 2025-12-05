import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, default: "available" },
}, { timestamps: true });

export default mongoose.model("Room", roomSchema);