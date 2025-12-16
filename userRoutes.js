import express from 'express';
import {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    getInstructors,
    getStudents,
    getStudentDashboard,
    getInstructorDashboard,
    getAdminDashboard
} from '../controllers/userController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Admin routes
router.get('/', protect, authorize('admin'), getAllUsers);
router.get('/instructors', protect, authorize('admin', 'instructor'), getInstructors);
router.get('/students', protect, authorize('admin', 'instructor'), getStudents);
router.get('/admin/dashboard', protect, authorize('admin'), getAdminDashboard);

// Instructor routes
router.get('/instructor/dashboard', protect, authorize('instructor'), getInstructorDashboard);

// Student routes
router.get('/student/dashboard', protect, authorize('student'), getStudentDashboard);

// Common routes
router.get('/:id', protect, getUser);
router.put('/:id', protect, updateUser);
router.delete('/:id', protect, authorize('admin'), deleteUser);

export default router;
