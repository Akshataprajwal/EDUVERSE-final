import express from 'express';
import {
    processDummyPayment,
    getAllPayments,
    getPaymentStats
} from '../controllers/paymentController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Student routes
router.post('/dummy-payment', protect, authorize('student'), processDummyPayment);

// Admin routes
router.get('/stats', protect, authorize('admin'), getPaymentStats);
router.get('/all', protect, authorize('admin'), getAllPayments);

export default router;
