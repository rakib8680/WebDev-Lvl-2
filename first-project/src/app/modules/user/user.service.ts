import config from '../../config';
import { Student } from '../student/student.interface';
import { newUser } from './user.interface';
import { User } from './user.model';

// create student
const createStudentIntoDB = async (password: string, studentData: Student) => {
  const user: newUser = {
    password: password || (config.default_password as string),
    role: 'student',
    id: '20301001',
  };

  //   set user password and role
  //   user.password = password || (config.default_password as string);
  //   user.role = 'student';
  //   user.id='20301001'

  const result = await User.create(user);

//   create a student 
if(Object.keys(result).length){
    studentData.id=result.id
    studentData.user = result._id;
}

  return result;
};

export const userServices = {
  createStudentIntoDB,
};
