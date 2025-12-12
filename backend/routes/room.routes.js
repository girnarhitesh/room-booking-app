import express from "express";
import Room from "../models/Room.js";

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
    createdAt: new Date(),
    updatedAt: new Date()
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
    createdAt: new Date(),
    updatedAt: new Date()
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
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Flag to check if MongoDB is connected
let isMongoConnected = false;

// Test MongoDB connection
setTimeout(async () => {
  try {
    // This is just to check if the model is properly loaded
    if (Room.db.readyState === 1) {
      isMongoConnected = true;
      console.log("MongoDB is connected for Room operations");
    }
  } catch (err) {
    console.log("Using mock data for Room operations");
  }
}, 1000);

// Helper function to handle database operations
const handleDBOperation = async (mongoOp, mockOp) => {
  if (isMongoConnected) {
    try {
      return await mongoOp();
    } catch (err) {
      // Fallback to mock data if MongoDB operation fails
      console.log("Falling back to mock data due to MongoDB error:", err.message);
      return mockOp();
    }
  } else {
    return mockOp();
  }
};

// GET all rooms
router.get("/", async (req, res) => {
  try {
    const result = await handleDBOperation(
      () => Room.find(),
      () => Promise.resolve(mockRooms)
    );
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific room by ID
router.get("/:id", async (req, res) => {
  try {
    const result = await handleDBOperation(
      () => Room.findById(req.params.id),
      () => {
        const room = mockRooms.find(r => r._id === req.params.id);
        if (!room) {
          throw new Error("Room not found");
        }
        return Promise.resolve(room);
      }
    );
    
    if (!result) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(result);
  } catch (err) {
    if (err.message === "Room not found") {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(500).json({ message: err.message });
  }
});

// POST a new room
router.post("/", async (req, res) => {
  try {
    const result = await handleDBOperation(
      () => {
        const room = new Room(req.body);
        return room.save();
      },
      () => {
        const newRoom = {
          _id: String(mockRooms.length + 1),
          ...req.body,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        mockRooms.push(newRoom);
        return Promise.resolve(newRoom);
      }
    );
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) a room by ID
router.put("/:id", async (req, res) => {
  try {
    const result = await handleDBOperation(
      () => Room.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      }),
      () => {
        const roomIndex = mockRooms.findIndex(r => r._id === req.params.id);
        if (roomIndex === -1) {
          throw new Error("Room not found");
        }
        
        mockRooms[roomIndex] = {
          ...mockRooms[roomIndex],
          ...req.body,
          updatedAt: new Date()
        };
        
        return Promise.resolve(mockRooms[roomIndex]);
      }
    );
    
    if (!result) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(result);
  } catch (err) {
    if (err.message === "Room not found") {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(400).json({ message: err.message });
  }
});

// DELETE a room by ID
router.delete("/:id", async (req, res) => {
  try {
    const result = await handleDBOperation(
      () => Room.findByIdAndDelete(req.params.id),
      () => {
        const roomIndex = mockRooms.findIndex(r => r._id === req.params.id);
        if (roomIndex === -1) {
          throw new Error("Room not found");
        }
        
        const deletedRoom = mockRooms.splice(roomIndex, 1);
        return Promise.resolve({ message: "Room deleted successfully", room: deletedRoom[0] });
      }
    );
    
    if (!result) {
      return res.status(404).json({ message: "Room not found" });
    }
    
    // If MongoDB operation succeeded but didn't return a result, it means it was already deleted
    if (result.message) {
      res.json(result);
    } else {
      res.json({ message: "Room deleted successfully" });
    }
  } catch (err) {
    if (err.message === "Room not found") {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(500).json({ message: err.message });
  }
});

// GET rooms by type
router.get("/type/:type", async (req, res) => {
  try {
    const result = await handleDBOperation(
      () => Room.find({ type: req.params.type }),
      () => {
        const filteredRooms = mockRooms.filter(r => 
          r.type.toLowerCase() === req.params.type.toLowerCase()
        );
        return Promise.resolve(filteredRooms);
      }
    );
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET available rooms
router.get("/status/:status", async (req, res) => {
  try {
    const result = await handleDBOperation(
      () => Room.find({ status: req.params.status }),
      () => {
        const filteredRooms = mockRooms.filter(r => 
          r.status.toLowerCase() === req.params.status.toLowerCase()
        );
        return Promise.resolve(filteredRooms);
      }
    );
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;