import { Student } from './student.interface';
import { StudentModel } from './student.model';

// create student
const createStudentIntoDB = async (studentData: Student) => {

  if(await StudentModel.isUserExist(studentData.id)){
    throw new Error('User already exist');
  }

  const result = await StudentModel.create(studentData);

  // const student = new StudentModel(studentData);
  // const result = await student.save();

  return result;
};

// get all student
const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

// get single student
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
