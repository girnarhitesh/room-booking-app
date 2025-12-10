import express from "express";

const router = express.Router();

// Mock data for testing
let rooms = [
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

// GET all rooms
router.get("/", (req, res) => {
  try {
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific room by ID
router.get("/:id", (req, res) => {
  try {
    const room = rooms.find(r => r._id === req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new room
router.post("/", (req, res) => {
  try {
    const newRoom = {
      _id: String(rooms.length + 1),
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    rooms.push(newRoom);
    res.status(201).json(newRoom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) a room by ID
router.put("/:id", (req, res) => {
  try {
    const roomIndex = rooms.findIndex(r => r._id === req.params.id);
    if (roomIndex === -1) {
      return res.status(404).json({ message: "Room not found" });
    }
    
    rooms[roomIndex] = {
      ...rooms[roomIndex],
      ...req.body,
      updatedAt: new Date()
    };
    
    res.json(rooms[roomIndex]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a room by ID
router.delete("/:id", (req, res) => {
  try {
    const roomIndex = rooms.findIndex(r => r._id === req.params.id);
    if (roomIndex === -1) {
      return res.status(404).json({ message: "Room not found" });
    }
    
    const deletedRoom = rooms.splice(roomIndex, 1);
    res.json({ message: "Room deleted successfully", room: deletedRoom[0] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET rooms by type
router.get("/type/:type", (req, res) => {
  try {
    const filteredRooms = rooms.filter(r => r.type.toLowerCase() === req.params.type.toLowerCase());
    res.json(filteredRooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET available rooms
router.get("/status/:status", (req, res) => {
  try {
    const filteredRooms = rooms.filter(r => r.status.toLowerCase() === req.params.status.toLowerCase());
    res.json(filteredRooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;