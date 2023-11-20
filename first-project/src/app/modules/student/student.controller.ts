import { Request, Response } from 'express';
import { studentServices } from './student.service';
import studentValidationSchema from './student.zod.validation';
// import studentValidationSchema from './student.validation';

// create student
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    // data validation using joi
    // const { error, value } = studentValidationSchema.validate(studentData);

    // joi error 
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Somthing went wrong',
    //     error: error.details,
    //   });
    // }


    
    // data validation using zod 
    const zodParsedData = studentValidationSchema.parse(studentData);
    const result = await studentServices.createStudentIntoDB(zodParsedData);


    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Somthing went wrong',
      data: err,
    });
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
    res.status(500).json({
      success: false,
      message: 'Somthing went wrong',
      data: err,
    });
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
    res.status(500).json({
      success: false,
      message: 'Somthing went wrong',
      data: err,
    });
  }
};

export const studentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
