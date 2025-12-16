import express from 'express';
import {
    getLessonsByVehicleType,
    getLessonsByCourse,
    getLessonById,
    createLesson,
    updateLesson,
    deleteLesson,
    markLessonComplete,
    getStudentProgress
} from '../controllers/lessonController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Public/Student routes - Get lessons by vehicle type
router.get('/vehicle/:vehicleType', getLessonsByVehicleType);
router.get('/course/:courseId', getLessonsByCourse);
router.get('/:id', getLessonById);

// Student protected routes
router.post('/:lessonId/complete', protect, authorize('student'), markLessonComplete);
router.get('/progress/:vehicleType', protect, authorize('student'), getStudentProgress);

// Protected routes (Admin/Instructor)
router.post('/', protect, authorize('admin', 'instructor'), createLesson);
router.put('/:id', protect, authorize('admin', 'instructor'), updateLesson);
router.delete('/:id', protect, authorize('admin', 'instructor'), deleteLesson);

export default router;
