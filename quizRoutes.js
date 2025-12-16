import express from 'express';
import {
    getAllQuizzes,
    getQuizzesByCategory,
    getCourseQuizzes,
    getQuiz,
    createQuiz,
    updateQuiz,
    deleteQuiz,
    submitQuizAttempt,
    getQuizAttempts
} from '../controllers/quizController.js';
import { checkQuizAnswer, getLessonQuiz } from '../controllers/quizFeedbackController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Protected routes - All authenticated users
router.get('/', protect, getAllQuizzes);
router.get('/category/:category', protect, getQuizzesByCategory);
router.get('/course/:courseId', protect, getCourseQuizzes);
router.get('/lesson/:lessonId', protect, getLessonQuiz);
router.get('/:id', protect, getQuiz);

// Protected routes - Student
router.post('/:id/attempt', protect, authorize('student'), submitQuizAttempt);
router.post('/:id/check-answer', protect, authorize('student'), checkQuizAnswer);
router.get('/:id/attempts', protect, authorize('student'), getQuizAttempts);

// Protected routes - Admin/Instructor
router.post('/', protect, authorize('admin', 'instructor'), createQuiz);
router.put('/:id', protect, authorize('admin', 'instructor'), updateQuiz);
router.delete('/:id', protect, authorize('admin', 'instructor'), deleteQuiz);

export default router;
