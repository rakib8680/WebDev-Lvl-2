import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();

// create student
router.post('/create-student', studentControllers.createStudent);

// get students
router.get('/', studentControllers.getAllStudents);

export const studentRoutes = router;
