import config from '../../config';
import { Student } from '../student/student.interface';
import { TUser } from './user.interface';
import { User } from './user.model';
import { StudentModel } from '../student/student.model';

const createStudentIntoDB = async (password: string, studentData: Student) => {
  const userData: Partial<TUser> = {};

  // set user password and role
  userData.password = password || (config.default_password as string);
  userData.role = 'student';
  userData.id = '20301001';

  // create a user
  const newUser = await User.create(userData);

  //   create a student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id; //embedded id
    studentData.user = newUser._id; //reference id

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }

};

export const userServices = {
  createStudentIntoDB,
};
