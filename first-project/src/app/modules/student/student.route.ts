import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();

// create student
router.post('/create-student', studentControllers.createStudent);

// get all students
router.get('/', studentControllers.getAllStudents);

// get single student
router.get('/:studentId', studentControllers.getSingleStudent);

export const studentRoutes = router;
