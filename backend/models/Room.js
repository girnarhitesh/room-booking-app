import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, default: "available", enum: ["available", "booked", "maintenance"] },
  capacity: { type: Number, required: true },
  amenities: [{ type: String }],
  description: { type: String },
  imageUrl: { type: String },
  floor: { type: Number },
  bedType: { type: String },
  view: { type: String },
  smokingAllowed: { type: Boolean, default: false },
  petFriendly: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

// Update the updatedAt field before saving
roomSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model("Room", roomSchema);