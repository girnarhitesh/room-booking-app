import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  checkInDate: {
    type: Date,
    required: [true, 'Please add a check in date']
  },
  checkOutDate: {
    type: Date,
    required: [true, 'Please add a check out date']
  },
  numberOfNights: {
    type: Number,
    required: true
  },
  numberOfGuests: {
    type: Number,
    required: true,
    min: [1, 'There must be at least 1 guest'],
    max: [10, 'Cannot exceed 10 guests']
  },
  totalPrice: {
    type: Number,
    required: [true, 'Please add a total price'],
    min: [0, 'Total price cannot be negative']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  specialRequests: {
    type: String,
    maxlength: [300, 'Special requests cannot be more than 300 characters']
  }
}, {
  timestamps: true
});

// Index for better query performance
bookingSchema.index({ room: 1 });
bookingSchema.index({ user: 1 });
bookingSchema.index({ status: 1 });
bookingSchema.index({ checkInDate: 1, checkOutDate: 1 });

export default mongoose.model('Booking', bookingSchema);