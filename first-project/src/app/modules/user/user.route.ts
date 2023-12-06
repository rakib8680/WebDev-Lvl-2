import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { studentValidations } from '../student/student.zod.validation';
import { userControllers } from './user.controller';

const router = express.Router();

// create student
router.post(
  '/create-student',
  validateRequest(studentValidations.CreateStudentValidationSchema),
  userControllers.createStudent,
);

router.post(
  '/create-faculty',
  validateRequest(createFacultyValidationSchema),
  UserControllers.createFaculty,
);

router.post(
  '/create-admin',
  validateRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);


export const userRoutes = router;
