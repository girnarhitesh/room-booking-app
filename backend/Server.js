import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Load env vars
dotenv.config();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Mock data
let rooms = [
  {
    _id: '1',
    roomNumber: '101',
    type: 'Single',
    price: 100,
    capacity: 1,
    amenities: ['WiFi', 'TV', 'AC'],
    description: 'Cozy single room with all basic amenities',
    images: [],
    isAvailable: true,
    floor: 1,
    bedType: 'Single Bed',
    view: 'City View',
    smokingAllowed: false,
    petFriendly: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '2',
    roomNumber: '102',
    type: 'Double',
    price: 150,
    capacity: 2,
    amenities: ['WiFi', 'TV', 'AC', 'Mini Bar'],
    description: 'Comfortable double room for couples',
    images: [],
    isAvailable: true,
    floor: 1,
    bedType: 'Queen Bed',
    view: 'Garden View',
    smokingAllowed: false,
    petFriendly: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Routes
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Room Booking API',
    version: '1.0.0'
  });
});

app.get('/api/v1/rooms', (req, res) => {
  res.status(200).json({
    success: true,
    count: rooms.length,
    data: rooms
  });
});

app.get('/api/v1/rooms/:id', (req, res) => {
  const room = rooms.find(r => r._id === req.params.id);
  
  if (!room) {
    return res.status(404).json({
      success: false,
      message: `Room not found with id of ${req.params.id}`
    });
  }
  
  res.status(200).json({
    success: true,
    data: room
  });
});

// Handle 404 errors
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

const PORT = process.env.PORT || 5002;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
