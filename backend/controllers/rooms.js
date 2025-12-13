import Room from '../models/Room.js';
import Booking from '../models/Booking.js';

// @desc    Get all rooms
// @route   GET /api/v1/rooms
// @access  Public
export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    
    res.status(200).json({
      success: true,
      count: rooms.length,
      data: rooms
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Get single room
// @route   GET /api/v1/rooms/:id
// @access  Public
export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Create new room
// @route   POST /api/v1/rooms
// @access  Private/Admin
export const createRoom = async (req, res, next) => {
  try {
    const room = await Room.create(req.body);
    
    res.status(201).json({
      success: true,
      data: room
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update room
// @route   PUT /api/v1/rooms/:id
// @access  Private/Admin
export const updateRoom = async (req, res, next) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Delete room
// @route   DELETE /api/v1/rooms/:id
// @access  Private/Admin
export const deleteRoom = async (req, res, next) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    
    if (!room) {
      return res.status(404).json({
        success: false,
        message: `Room not found with id of ${req.params.id}`
      });
    }
    
    // Also delete any bookings associated with this room
    await Booking.deleteMany({ room: req.params.id });
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Get available rooms
// @route   GET /api/v1/rooms/available
// @access  Public
export const getAvailableRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find({ isAvailable: true });
    
    res.status(200).json({
      success: true,
      count: rooms.length,
      data: rooms
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};