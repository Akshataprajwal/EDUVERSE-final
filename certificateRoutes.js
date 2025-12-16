import express from 'express';
import {
    generateCertificate,
    getCertificate,
    getMyCertificates,
    getCourseCertificates,
    downloadCertificate,
    verifyCertificate,
    deleteCertificate
} from '../controllers/certificateController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Public routes
router.get('/verify/:certificateId', verifyCertificate);

// Protected routes - Student
router.get('/student/my-certificates', protect, authorize('student'), getMyCertificates);

// Protected routes - All authenticated users
router.get('/:id', protect, getCertificate);
router.get('/:id/download', protect, downloadCertificate);

// Protected routes - Instructor/Admin
router.get('/course/:courseId', protect, authorize('instructor', 'admin'), getCourseCertificates);

// Protected routes - Admin only
router.post('/generate', protect, authorize('admin', 'student'), generateCertificate);
router.delete('/:id', protect, authorize('admin'), deleteCertificate);

export default router;
