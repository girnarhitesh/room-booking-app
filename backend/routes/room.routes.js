import express from "express";
import Room from "../models/Room.js";

const router = express.Router();

// GET all rooms
router.get("/", async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific room by ID
router.get("/:id", async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new room
router.post("/", async (req, res) => {
  const room = new Room(req.body);
  try {
    const savedRoom = await room.save();
    res.status(201).json(savedRoom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) a room by ID
router.put("/:id", async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(room);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a room by ID
router.delete("/:id", async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json({ message: "Room deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET rooms by type
router.get("/type/:type", async (req, res) => {
  try {
    const rooms = await Room.find({ type: req.params.type });
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET available rooms
router.get("/status/:status", async (req, res) => {
  try {
    const rooms = await Room.find({ status: req.params.status });
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;