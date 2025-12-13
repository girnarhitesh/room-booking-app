import Booking from '../models/Booking.js';
import Room from '../models/Room.js';
import User from '../models/User.js';

// @desc    Get all bookings
// @route   GET /api/v1/bookings
// @access  Private/Admin
export const getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find().populate({
      path: 'room',
      select: 'roomNumber type price'
    }).populate({
      path: 'user',
      select: 'name email'
    });
    
    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Get single booking
// @route   GET /api/v1/bookings/:id
// @access  Private
export const getBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id).populate({
      path: 'room',
      select: 'roomNumber type price description'
    }).populate({
      path: 'user',
      select: 'name email'
    });
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: `Booking not found with id of ${req.params.id}`
      });
    }
    
    res.status(200).json({
      success: true,
      data: booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Create new booking
// @route   POST /api/v1/bookings
// @access  Private
export const createBooking = async (req, res, next) => {
  try {
    const { room, user, checkInDate, checkOutDate, numberOfGuests, specialRequests } = req.body;
    
    // Check if room exists
    const roomExists = await Room.findById(room);
    if (!roomExists) {
      return res.status(404).json({
        success: false,
        message: 'Room not found'
      });
    }
    
    // Check if user exists
    const userExists = await User.findById(user);
    if (!userExists) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    
    // Check if room is available for the given dates
    const existingBooking = await Booking.findOne({
      room,
      $or: [
        {
          checkInDate: { $lte: checkOutDate },
          checkOutDate: { $gte: checkInDate }
        }
      ],
      status: { $ne: 'cancelled' }
    });
    
    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: 'Room is not available for the selected dates'
      });
    }
    
    // Calculate number of nights
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDiff = Math.abs(checkOut.getTime() - checkIn.getTime());
    const numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    // Calculate total price
    const totalPrice = numberOfNights * roomExists.price;
    
    // Create booking
    const booking = await Booking.create({
      room,
      user,
      checkInDate,
      checkOutDate,
      numberOfNights,
      numberOfGuests,
      totalPrice,
      specialRequests
    });
    
    // Populate the response
    await booking.populate({
      path: 'room',
      select: 'roomNumber type price'
    }).populate({
      path: 'user',
      select: 'name email'
    });
    
    res.status(201).json({
      success: true,
      data: booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update booking
// @route   PUT /api/v1/bookings/:id
// @access  Private
export const updateBooking = async (req, res, next) => {
  try {
    let booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: `Booking not found with id of ${req.params.id}`
      });
    }
    
    // Check if room is available for updated dates (if dates are being changed)
    if (req.body.checkInDate || req.body.checkOutDate) {
      const checkInDate = req.body.checkInDate || booking.checkInDate;
      const checkOutDate = req.body.checkOutDate || booking.checkOutDate;
      
      const existingBooking = await Booking.findOne({
        room: booking.room,
        _id: { $ne: booking._id }, // Exclude current booking
        $or: [
          {
            checkInDate: { $lte: checkOutDate },
            checkOutDate: { $gte: checkInDate }
          }
        ],
        status: { $ne: 'cancelled' }
      });
      
      if (existingBooking) {
        return res.status(400).json({
          success: false,
          message: 'Room is not available for the selected dates'
        });
      }
      
      // Recalculate number of nights and total price if dates changed
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);
      const timeDiff = Math.abs(checkOut.getTime() - checkIn.getTime());
      const numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      
      const room = await Room.findById(booking.room);
      const totalPrice = numberOfNights * room.price;
      
      req.body.numberOfNights = numberOfNights;
      req.body.totalPrice = totalPrice;
    }
    
    booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    }).populate({
      path: 'room',
      select: 'roomNumber type price'
    }).populate({
      path: 'user',
      select: 'name email'
    });
    
    res.status(200).json({
      success: true,
      data: booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Delete booking
// @route   DELETE /api/v1/bookings/:id
// @access  Private
export const deleteBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: `Booking not found with id of ${req.params.id}`
      });
    }
    
    await booking.remove();
    
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

// @desc    Get bookings for a user
// @route   GET /api/v1/bookings/user/:userId
// @access  Private
export const getUserBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ user: req.params.userId }).populate({
      path: 'room',
      select: 'roomNumber type price'
    });
    
    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};