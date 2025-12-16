import express from 'express';
import {
    getAllCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse,
    enrollCourse,
    getInstructorCourses,
    getInstructorCourseDetail,
    getStudentCourses
} from '../controllers/courseController.js';
import { seedCourses } from '../controllers/seedController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Auto-seed route (public for easy access)
router.get('/seed', seedCourses);

// Public routes
router.get('/', getAllCourses);
router.get('/:id', getCourse);

// Protected routes - Student
router.post('/:id/enroll', protect, authorize('student'), enrollCourse);
router.get('/student/my-courses', protect, authorize('student'), getStudentCourses);

// Protected routes - Instructor
router.get('/instructor/my-courses', protect, authorize('instructor'), getInstructorCourses);
router.get('/instructor/my-courses/:id', protect, authorize('instructor'), getInstructorCourseDetail);

// Protected routes - Admin
router.post('/', protect, authorize('admin'), createCourse);
router.put('/:id', protect, authorize('admin'), updateCourse);
router.delete('/:id', protect, authorize('admin'), deleteCourse);

export default router;
