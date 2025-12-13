import express from 'express';
const router = express.Router();

import {
  getBookings,
  getBooking,
  createBooking,
  updateBooking,
  deleteBooking,
  getUserBookings
} from '../controllers/bookings.js';

router.route('/')
  .get(getBookings)
  .post(createBooking);

router.route('/user/:userId')
  .get(getUserBookings);

router.route('/:id')
  .get(getBooking)
  .put(updateBooking)
  .delete(deleteBooking);

export default router;