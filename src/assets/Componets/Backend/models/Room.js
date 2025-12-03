import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  image: String,
  description: String,
  available: Boolean
});

export default mongoose.model("Room", RoomSchema);