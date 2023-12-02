import httpStatus from 'http-status';
import mongoose from 'mongoose';
import AppError from '../../errors/appError';
import { User } from '../user/user.model';
import { StudentModel } from './student.model';



// get all student
const getAllStudentFromDB = async () => {
  const result = await StudentModel.find()
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};



// get single student
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findById(id).populate('admissionSemester')
  .populate({
    path: 'academicDepartment',
    populate: {
      path: 'academicFaculty',
    },
  });;
  return result;
};


// delete student/user 
const deleteStudentFromDB = async (id: string) => {
  const session =await mongoose.startSession();
  
  try {
  session.startTransaction( )

    // delete student
  const deletedStudent = await StudentModel.updateOne(
    { id },
     { isDeleted: true },
     {new: true, session}
     );
    if(!deletedStudent) throw new AppError(httpStatus.BAD_REQUEST, 'Student not deleted');


    // DELETE user
    const deletedUser = await User.findOneAndUpdate({ id },
      { isDeleted: true },
      {new: true, session}
      );
     if(!deletedUser) throw new AppError(httpStatus.BAD_REQUEST, 'User not deleted');
 
      await session.commitTransaction();
      await session.endSession();

  return deletedStudent;


}

catch (error) {
  await session.abortTransaction();
  await session.endSession();
}



};

export const studentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
