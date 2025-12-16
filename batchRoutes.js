import express from 'express';
import {
    getAllBatches,
    getBatch,
    createBatch,
    updateBatch,
    deleteBatch,
    addStudentsToBatch,
    removeStudentFromBatch
} from '../controllers/batchController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Protected routes - Instructor/Admin
router.get('/', protect, authorize('instructor', 'admin'), getAllBatches);
router.get('/:id', protect, authorize('instructor', 'admin'), getBatch);

// Protected routes - Admin only
router.post('/', protect, authorize('admin'), createBatch);
router.put('/:id', protect, authorize('admin'), updateBatch);
router.delete('/:id', protect, authorize('admin'), deleteBatch);
router.post('/:id/students', protect, authorize('admin'), addStudentsToBatch);
router.delete('/:id/students/:studentId', protect, authorize('admin'), removeStudentFromBatch);

export default router;
