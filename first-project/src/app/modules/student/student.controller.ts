import { Request, Response } from 'express';
import { studentServices } from './student.service';

// create student
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    // console.log(err);
  }
};

// get all student
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'All students fetched successfully',
      data: result,
    });
  } catch (err) {
    // console.log(err);
  }
};

// get a single student
const getSingleStudent = async (req: Request, res: Response) => {
  const { studentId } = req.params;

  try {
    const result = await studentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Found the student successfully',
      data: result,
    });
  } catch (err) {
    // console.log(err);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
