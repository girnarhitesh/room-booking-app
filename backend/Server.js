import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import roomRoutes from "./routes/room.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
app.use("/api/rooms", roomRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    mongodb: mongoose.connection.readyState === 1 ? "connected" : "disconnected"
  });
});

// Root route
app.get("/", (req, res) => {
  res.send(`
    <h1>Room Booking Backend API</h1>
    <p>Server is running successfully!</p>
    <h2>Available Endpoints:</h2>
    <ul>
      <li>GET /api/rooms - Get all rooms</li>
      <li>GET /api/rooms/:id - Get a specific room</li>
      <li>POST /api/rooms - Create a new room</li>
      <li>PUT /api/rooms/:id - Update a room</li>
      <li>DELETE /api/rooms/:id - Delete a room</li>
      <li>GET /api/rooms/type/:type - Get rooms by type</li>
      <li>GET /api/rooms/status/:status - Get rooms by status</li>
      <li>GET /health - Health check</li>
    </ul>
    <p>Use Postman Desktop App (not web version) to test these endpoints.</p>
    <p>MongoDB Status: ${mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'}</p>
  `);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!", error: err.message });
});

// MongoDB connection with retry logic and better error handling
const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    console.log("Running in mock mode without database connection");
  }
};

// Connect to MongoDB
connectDB();

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("Make sure to use Postman Desktop App for local testing");
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log('Unhandled Promise Rejection:', err.message);
});

// Handle SIGTERM gracefully
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});