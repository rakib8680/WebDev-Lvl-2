import httpStatus from 'http-status';
import mongoose from 'mongoose';
import AppError from '../../errors/appError';
import { User } from '../user/user.model';
import { Student } from './student.interface';
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
  const result = await StudentModel.findOne({id}).populate('admissionSemester')
  .populate({
    path: 'academicDepartment',
    populate: {
      path: 'academicFaculty',
    },
  });;
  return result;
};



// update student 
const updateStudentIntoDB = async(id:string, payload:Partial<Student>)=>{

  const{name, guardian, ...remaining} = payload;

  const modifiedData : Record<string, unknown> = {...remaining};

  if(name && Object.keys(name).length){
    for(const [key, value] of Object.entries(name)){
      modifiedData[`name.${key}`] = value;
    }
  }

  if(guardian && Object.keys(guardian).length){
    for(const [key, value] of Object.entries(guardian)){
      modifiedData[`guardian.${key}`] = value;
    }
  }



  const result = await StudentModel.findOneAndUpdate({id}, modifiedData);


  return result;

}


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
  throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student');
}



};

export const studentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
  updateStudentIntoDB
};
