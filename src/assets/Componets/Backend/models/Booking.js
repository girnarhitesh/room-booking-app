import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  roomId: { type: Number, required: true },
  roomName: { type: String, required: true },
  price: { type: String, required: true },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  date: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Booking', BookingSchema);