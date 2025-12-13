import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: [true, 'Please add a room number'],
    unique: true,
    trim: true,
    maxlength: [10, 'Room number cannot be more than 10 characters']
  },
  type: {
    type: String,
    required: [true, 'Please add a room type'],
    enum: ['Single', 'Double', 'Suite', 'Family', 'Deluxe'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Please add a price'],
    min: [0, 'Price cannot be negative']
  },
  capacity: {
    type: Number,
    required: [true, 'Please add capacity'],
    min: [1, 'Capacity must be at least 1'],
    max: [10, 'Capacity cannot be more than 10']
  },
  amenities: [{
    type: String,
    trim: true
  }],
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  images: [{
    type: String
  }],
  isAvailable: {
    type: Boolean,
    default: true
  },
  floor: {
    type: Number,
    required: [true, 'Please add a floor number']
  },
  bedType: {
    type: String,
    required: [true, 'Please add a bed type'],
    trim: true
  },
  view: {
    type: String,
    trim: true
  },
  smokingAllowed: {
    type: Boolean,
    default: false
  },
  petFriendly: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index for better query performance
roomSchema.index({ roomNumber: 1 });
roomSchema.index({ type: 1 });
roomSchema.index({ isAvailable: 1 });

export default mongoose.model('Room', roomSchema);