import express from 'express';
const router = express.Router();

import {
  getRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
  getAvailableRooms
} from '../controllers/rooms.js';

router.route('/')
  .get(getRooms)
  .post(createRoom);

router.route('/available')
  .get(getAvailableRooms);

router.route('/:id')
  .get(getRoom)
  .put(updateRoom)
  .delete(deleteRoom);

export default router;