import express from 'express';
import {
    getCourseProgress,
    getMyProgress,
    getCourseStudentsProgress,
    getStudentCourseProgress,
    resetStudentProgress,
    getInstructorProgressStatistics
} from '../controllers/progressController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Protected routes - Student
router.get('/course/:courseId', protect, authorize('student'), getCourseProgress);
router.get('/student/my-progress', protect, authorize('student'), getMyProgress);

// Protected routes - Instructor
router.get('/instructor/statistics', protect, authorize('instructor'), getInstructorProgressStatistics);

// Protected routes - Instructor/Admin
router.get('/course/:courseId/all-students', protect, authorize('instructor', 'admin'), getCourseStudentsProgress);
router.get('/student/:studentId/course/:courseId', protect, authorize('instructor', 'admin'), getStudentCourseProgress);

// Protected routes - Admin
router.delete('/student/:studentId/course/:courseId', protect, authorize('admin'), resetStudentProgress);

export default router;
