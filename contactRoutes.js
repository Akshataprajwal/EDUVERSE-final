import express from 'express';
import {
    getContactInfo,
    sendMessage,
    getAllMessages,
    updateMessageStatus
} from '../controllers/contactController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getContactInfo);
router.post('/', sendMessage);

// Admin routes
router.get('/messages', protect, authorize('admin'), getAllMessages);
router.put('/messages/:id', protect, authorize('admin'), updateMessageStatus);

export default router;
