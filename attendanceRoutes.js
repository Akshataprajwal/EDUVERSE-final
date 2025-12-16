import express from 'express';
import {
    markAttendance,
    getBatchAttendanceByDate,
    getStudentCourseAttendance,
    getMyAttendance,
    getBatchAttendanceReport,
    updateAttendance,
    deleteAttendance,
    autoMarkAttendance,
    markLogout,
    getAllStudentsDetails,
    markAllActiveStudents
} from '../controllers/attendanceController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Protected routes - Student
router.get('/my-attendance', protect, authorize('student'), getMyAttendance);
router.post('/auto-mark', protect, authorize('student'), autoMarkAttendance);
router.put('/mark-logout', protect, authorize('student'), markLogout);

// Protected routes - All authenticated users
router.get('/student/:studentId/course/:courseId', protect, getStudentCourseAttendance);

// Protected routes - Instructor/Admin
router.post('/', protect, authorize('instructor', 'admin'), markAttendance);
router.get('/batch/:batchId/date/:date', protect, authorize('instructor', 'admin'), getBatchAttendanceByDate);
router.get('/batch/:batchId/report', protect, authorize('instructor', 'admin'), getBatchAttendanceReport);
router.get('/students-details', protect, authorize('instructor', 'admin'), getAllStudentsDetails);
router.put('/:id', protect, authorize('instructor', 'admin'), updateAttendance);

// Protected routes - Admin only
router.post('/mark-all-active', protect, authorize('admin'), markAllActiveStudents);
router.delete('/:id', protect, authorize('admin'), deleteAttendance);

export default router;
