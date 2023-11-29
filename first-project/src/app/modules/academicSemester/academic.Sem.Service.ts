import {
  TAcademicSemester,
} from './academic.Sem.Interface';
import { AcademicSemester } from './academic.Sem.Model';
import { academicSemesterNameCodeMapper } from './academicSem.constant';



// create Academic Semester
const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code)
    throw new Error('Invalid Semester Code');

  const result = await AcademicSemester.create(payload);
  return result;
};




export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
};
