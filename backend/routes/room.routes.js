import express from "express";
import Room from "../models/Room.js";
import mongoose from "mongoose";

const router = express.Router();

// Mock data for fallback when MongoDB is not available
let mockRooms = [
  {
    _id: "1",
    roomNumber: "101",
    type: "Single",
    price: 100,
    status: "available",
    capacity: 1,
    amenities: ["WiFi", "TV", "AC"],
    description: "Cozy single room with all basic amenities",
    floor: 1,
    bedType: "Single Bed",
    view: "City View",
    smokingAllowed: false,
    petFriendly: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "2",
    roomNumber: "102",
    type: "Double",
    price: 150,
    status: "available",
    capacity: 2,
    amenities: ["WiFi", "TV", "AC", "Mini Bar"],
    description: "Comfortable double room for couples",
    floor: 1,
    bedType: "Queen Bed",
    view: "Garden View",
    smokingAllowed: false,
    petFriendly: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "3",
    roomNumber: "201",
    type: "Suite",
    price: 300,
    status: "available",
    capacity: 4,
    amenities: ["WiFi", "TV", "AC", "Mini Bar", "Jacuzzi", "Balcony"],
    description: "Luxurious suite with premium amenities",
    floor: 2,
    bedType: "King Bed",
    view: "Ocean View",
    smokingAllowed: false,
    petFriendly: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Check if MongoDB is connected
const isMongoConnected = () => {
  return mongoose.connection.readyState === 1;
};

// GET all rooms
router.get("/", async (req, res) => {
  try {
    if (isMongoConnected()) {
      const rooms = await Room.find();
      res.json(rooms);
    } else {
      res.json(mockRooms);
    }
  } catch (err) {
    console.error("Error fetching rooms:", err.message);
    res.status(500).json({ message: "Error fetching rooms", error: err.message });
  }
});

// GET a specific room by ID
router.get("/:id", async (req, res) => {
  try {
    if (isMongoConnected()) {
      const room = await Room.findById(req.params.id);
      if (!room) {
        return res.status(404).json({ message: "Room not found" });
      }
      res.json(room);
    } else {
      const room = mockRooms.find(r => r._id === req.params.id);
      if (!room) {
        return res.status(404).json({ message: "Room not found" });
      }
      res.json(room);
    }
  } catch (err) {
    console.error("Error fetching room:", err.message);
    res.status(500).json({ message: "Error fetching room", error: err.message });
  }
});

// POST a new room
router.post("/", async (req, res) => {
  try {
    if (isMongoConnected()) {
      const room = new Room(req.body);
      const savedRoom = await room.save();
      res.status(201).json(savedRoom);
    } else {
      const newRoom = {
        _id: String(mockRooms.length + 1),
        ...req.body,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      mockRooms.push(newRoom);
      res.status(201).json(newRoom);
    }
  } catch (err) {
    console.error("Error creating room:", err.message);
    res.status(400).json({ message: "Error creating room", error: err.message });
  }
});

// PUT (update) a room by ID
router.put("/:id", async (req, res) => {
  try {
    if (isMongoConnected()) {
      const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (!room) {
        return res.status(404).json({ message: "Room not found" });
      }
      res.json(room);
    } else {
      const roomIndex = mockRooms.findIndex(r => r._id === req.params.id);
      if (roomIndex === -1) {
        return res.status(404).json({ message: "Room not found" });
      }
      
      mockRooms[roomIndex] = {
        ...mockRooms[roomIndex],
        ...req.body,
        updatedAt: new Date().toISOString()
      };
      
      res.json(mockRooms[roomIndex]);
    }
  } catch (err) {
    console.error("Error updating room:", err.message);
    res.status(400).json({ message: "Error updating room", error: err.message });
  }
});

// DELETE a room by ID
router.delete("/:id", async (req, res) => {
  try {
    if (isMongoConnected()) {
      const room = await Room.findByIdAndDelete(req.params.id);
      if (!room) {
        return res.status(404).json({ message: "Room not found" });
      }
      res.json({ message: "Room deleted successfully" });
    } else {
      const roomIndex = mockRooms.findIndex(r => r._id === req.params.id);
      if (roomIndex === -1) {
        return res.status(404).json({ message: "Room not found" });
      }
      
      mockRooms.splice(roomIndex, 1);
      res.json({ message: "Room deleted successfully" });
    }
  } catch (err) {
    console.error("Error deleting room:", err.message);
    res.status(500).json({ message: "Error deleting room", error: err.message });
  }
});

// GET rooms by type
router.get("/type/:type", async (req, res) => {
  try {
    if (isMongoConnected()) {
      const rooms = await Room.find({ type: req.params.type });
      res.json(rooms);
    } else {
      const filteredRooms = mockRooms.filter(r => 
        r.type.toLowerCase() === req.params.type.toLowerCase()
      );
      res.json(filteredRooms);
    }
  } catch (err) {
    console.error("Error fetching rooms by type:", err.message);
    res.status(500).json({ message: "Error fetching rooms by type", error: err.message });
  }
});

// GET available rooms
router.get("/status/:status", async (req, res) => {
  try {
    if (isMongoConnected()) {
      const rooms = await Room.find({ status: req.params.status });
      res.json(rooms);
    } else {
      const filteredRooms = mockRooms.filter(r => 
        r.status.toLowerCase() === req.params.status.toLowerCase()
      );
      res.json(filteredRooms);
    }
  } catch (err) {
    console.error("Error fetching rooms by status:", err.message);
    res.status(500).json({ message: "Error fetching rooms by status", error: err.message });
  }
});

export default router;