/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../../config';
import { Student } from '../student/student.interface';
import { TUser } from './user.interface';
import { User } from './user.model';
import { StudentModel } from '../student/student.model';
import { AcademicSemester } from '../academicSemester/academic.Sem.Model';
import {
  generateAdminId,
  generateFacultyId,
  generateStudentId,
} from './user.utils';
import mongoose from 'mongoose';
import AppError from '../../errors/appError';
import httpStatus from 'http-status';
import { TFaculty } from '../faculty/faculty.interface';
import { AcademicDepartment } from '../academicDepartment/academicDepartment.model';
import { Faculty } from '../faculty/faculty.model';
import { Admin } from '../admin/admin.model';
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';
import { TAdmin } from '../admin/admin.interface';

// create student
const createStudentIntoDB = async (
  file: any,
  password: string,
  payload: Student,
) => {
  const userData: Partial<TUser> = {};

  // set user password and role
  userData.password = password || (config.default_password as string);

  // set student role
  userData.role = 'student';

  // add email to user object
  userData.email = payload.email;

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  if (!admissionSemester) {
    throw new AppError(400, 'Admission semester not found');
  }

  // find department
  const academicDepartment = await AcademicDepartment.findById(
    payload.academicDepartment,
  );

  if (!academicDepartment) {
    throw new AppError(400, 'Academic department not found');
  }

  payload.academicFaculty = academicDepartment.academicFaculty;

  // start session
  const session = await mongoose.startSession();
  try {
    // start transaction
    session.startTransaction();

    // set user id
    userData.id = await generateStudentId(admissionSemester!);

    if (file) {
      // set image name
      const imageName = `${userData?.id}${payload?.name?.firstName}`;

      // send image to cloudinary
      const response = await sendImageToCloudinary(file?.path, imageName);
      const { secure_url } = response;
      payload.profilePicture = secure_url as string;
    }

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
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

// create faculty
const createFacultyIntoDB = async (
  file: any,
  password: string,
  payload: TFaculty,
) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use default password
  userData.password = password || (config.default_password as string);

  //set faculty role
  userData.role = 'faculty';

  // add email to faculty object
  userData.email = payload.email;

  // find academic department info
  const academicDepartment = await AcademicDepartment.findById(
    payload.academicDepartment,
  );

  if (!academicDepartment) {
    throw new AppError(400, 'Academic department not found');
  }

  payload.academicFaculty = academicDepartment?.academicFaculty;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    //set  generated id
    userData.id = await generateFacultyId();

    if (file) {
      const imageName = `${userData.id}${payload?.name?.firstName}`;
      const path = file?.path;
      //send image to cloudinary
      const { secure_url } = await sendImageToCloudinary(imageName, path);
      payload.profileImg = secure_url as string;
    }

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session }); // array

    //create a faculty
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a faculty (transaction-2)
    const newFaculty = await Faculty.create([payload], { session });

    if (!newFaculty.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create faculty');
    }

    await session.commitTransaction();
    await session.endSession();

    return newFaculty;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

// create admin
const createAdminIntoDB = async (
  file: any,
  password: string,
  payload: TAdmin,
) => {

  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use default password
  userData.password = password || (config.default_password as string);

  //set admin role
  userData.role = 'admin';

  // add email to user object
  userData.email = payload.email;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateAdminId();

    if (file) {
      const imageName = `${userData.id}${payload?.name?.firstName}`;
      const path = file?.path;
      //send image to cloudinary
      const { secure_url } = await sendImageToCloudinary(imageName, path);
      payload.profileImg = secure_url as string;
    }

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session });

    //create an admin
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create an admin (transaction-2)
    const newAdmin = await Admin.create([payload], { session });

    if (!newAdmin.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }

    await session.commitTransaction();
    await session.endSession();

    return newAdmin;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

// get me
const getMe = async (userId: string, role: string) => {
  let result = null;

  if (role === 'student') {
    result = await StudentModel.findOne({ id: userId }).populate('user');
  }
  if (role === 'faculty') {
    result = await Faculty.findOne({ id: userId }).populate('user');
  }
  if (role === 'admin') {
    result = await Admin.findOne({ id: userId }).populate('user');
  }

  return result;
};

// change status
const changeStatus = async (id: string, payload: { status: string }) => {
  const result = await User.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const userServices = {
  createStudentIntoDB,
  createFacultyIntoDB,
  createAdminIntoDB,
  getMe,
  changeStatus,
};
