import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';

// get all student
const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'All students fetched successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// get a single student
const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { studentId } = req.params;

  try {
    const result = await studentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Found the student successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// deleteStudent
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const studentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
