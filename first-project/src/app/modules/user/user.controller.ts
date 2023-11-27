import { Request, Response } from 'express';
// import studentValidationSchema from '../student/student.zod.validation';
import { userServices } from './user.service';

// create student
const createStudent = async (req: Request, res: Response) => {
  try {
    const {password, student: studentData } = req.body;

    // const zodParsedData = studentValidationSchema.parse(studentData);
    const result = await userServices.createStudentIntoDB(password,studentData);

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      data: err,
    });
  }
};

export const userControllers = {
  createStudent,
};
