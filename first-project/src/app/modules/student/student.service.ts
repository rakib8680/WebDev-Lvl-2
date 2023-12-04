import httpStatus from 'http-status';
import mongoose from 'mongoose';
import AppError from '../../errors/appError';
import { User } from '../user/user.model';
import { Student } from './student.interface';
import { StudentModel } from './student.model';



// get all student
const getAllStudentFromDB = async (query: Record<string, unknown>) => {
  const queryObject = { ...query };
  let searchTerm = '';
  const studentSearchableFields = [
    'email',
    'name.firstName',
    'name.lastName',
    'presentAddress',
  ];

  if (query?.searchTerm) {
    searchTerm = query.searchTerm as string;
  }

  // search partial
  const searchQuery = StudentModel.find({
    $or: studentSearchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  
  // filtering 
  const excludeFields = ['searchTerm', 'sort', 'limit', 'page'];
  excludeFields.forEach(el =>delete queryObject[el])

  const filterQuery = searchQuery
    .find(queryObject)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });



  // sorting
  let sort = '-createdAt';
  if(query.sort){
    sort = query.sort as string;
  };
  const sortQuery = filterQuery.sort(sort);


  // limiting & pagination
  let limit = 1;
  let page = 1;
  let skip = 0;

  if(query.limit){
    limit = query.limit as number;
  };

  if(query.page){
    page = query.page as number;
    skip = (page - 1) * limit;
  };

  const paginateQuery = sortQuery.skip(skip)

 
  const limitQuery = await paginateQuery.limit(limit);

  return limitQuery;

};



// get single student
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id })
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};



// update student
const updateStudentIntoDB = async (id: string, payload: Partial<Student>) => {
  const { name, guardian, ...remaining } = payload;

  const modifiedData: Record<string, unknown> = { ...remaining };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedData[`guardian.${key}`] = value;
    }
  }

  const result = await StudentModel.findOneAndUpdate({ id }, modifiedData);

  return result;
};



// delete student/user
const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // delete student
    const deletedStudent = await StudentModel.updateOne(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedStudent)
      throw new AppError(httpStatus.BAD_REQUEST, 'Student not deleted');

    // DELETE user
    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedUser)
      throw new AppError(httpStatus.BAD_REQUEST, 'User not deleted');

    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student');
  }
};



export const studentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
  updateStudentIntoDB,
};
