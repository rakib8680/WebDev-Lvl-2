import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterControllers } from './academic.Sem.Controller';
import { createAcademicSemValidationSchema } from './academic.Sem.validation';

const router = express.Router();




router.get('/', academicSemesterControllers.getAllAcademicSemester);
router.post(
  '/create-academic-semester',
  validateRequest(createAcademicSemValidationSchema),
  academicSemesterControllers.createAcademicSemester,
);


export const academicSemesterRoutes = router;
