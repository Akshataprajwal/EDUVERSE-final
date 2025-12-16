import express from 'express';
import {
    getAllRoadSignals,
    getCourseRoadSignals,
    getRoadSignal,
    createRoadSignal,
    updateRoadSignal,
    deleteRoadSignal,
    getRoadSignalsByCategory
} from '../controllers/roadSignalController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Protected routes - All authenticated users
router.get('/', protect, getAllRoadSignals);
router.get('/course/:courseId', protect, getCourseRoadSignals);
router.get('/category/:category', protect, getRoadSignalsByCategory);
router.get('/:id', protect, getRoadSignal);

// Protected routes - Admin/Instructor
router.post('/', protect, authorize('admin', 'instructor'), createRoadSignal);
router.put('/:id', protect, authorize('admin', 'instructor'), updateRoadSignal);
router.delete('/:id', protect, authorize('admin', 'instructor'), deleteRoadSignal);

export default router;
