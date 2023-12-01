import config from '../../config';
import { Student } from '../student/student.interface';
import { TUser } from './user.interface';
import { User } from './user.model';
import { StudentModel } from '../student/student.model';
import { AcademicSemester } from '../academicSemester/academic.Sem.Model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: Student) => {
  const userData: Partial<TUser> = {};

  // set user password and role
  userData.password = password || (config.default_password as string);
  userData.role = 'student';

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );


  // set user id
  userData.id =await generateStudentId(admissionSemester!);

  // create a user
  const newUser = await User.create(userData);

  //   create a student
  if (Object.keys(newUser).length) {
    payload.id = newUser.id; //embedded id
    payload.user = newUser._id; //reference id

    const newStudent = await StudentModel.create(payload);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDB,
};
