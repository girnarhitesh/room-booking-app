import express from "express";
import Room from "../models/Room.js";

const router = express.Router();

// GET all rooms
router.get("/", async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});

// ADD new room
router.post("/", async (req, res) => {
  const room = await Room.create(req.body);
  res.json(room);
});

export default router;