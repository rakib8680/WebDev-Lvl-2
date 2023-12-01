import config from '../../config';
import { Student } from '../student/student.interface';
import { TUser } from './user.interface';
import { User } from './user.model';
import { StudentModel } from '../student/student.model';
import { AcademicSemester } from '../academicSemester/academic.Sem.Model';
import { generateStudentId } from './user.utils';
import mongoose from 'mongoose';
import AppError from '../../errors/appError';
import httpStatus from 'http-status';

const createStudentIntoDB = async (password: string, payload: Student) => {
  const userData: Partial<TUser> = {};

  // set user password and role
  userData.password = password || (config.default_password as string);
  userData.role = 'student';

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  // start session
  const session = await mongoose.startSession();
  try {
    // start transaction
    session.startTransaction();

    // set user id
    userData.id = await generateStudentId(admissionSemester!);

    // create a user - transaction-1
    const newUser = await User.create([userData], { session });

    // check if user created or not
    if (!newUser.length)
      throw new AppError(httpStatus.BAD_REQUEST, 'User not created');

    payload.id = newUser[0].id; //embedded id
    payload.user = newUser[0]._id; //reference id

    //   create a student - transaction-2
    const newStudent = await StudentModel.create([payload], { session });

    // check if student created or not
    if (!newStudent.length)
      throw new AppError(httpStatus.BAD_REQUEST, 'Student not created');

    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const userServices = {
  createStudentIntoDB,
};
