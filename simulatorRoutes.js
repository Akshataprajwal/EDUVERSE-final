import express from 'express';
import {
    saveSimulatorResult,
    getMySimulatorResults,
    getSimulatorStats,
    getAllSimulatorResults,
    getSimulatorAnalytics
} from '../controllers/simulatorController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Student routes
router.post('/results', protect, authorize('student'), saveSimulatorResult);
router.get('/my-results', protect, authorize('student'), getMySimulatorResults);
router.get('/stats', protect, authorize('student'), getSimulatorStats);

// Instructor routes
router.get('/all-results', protect, authorize('instructor', 'admin'), getAllSimulatorResults);
router.get('/analytics', protect, authorize('instructor', 'admin'), getSimulatorAnalytics);

export default router;
