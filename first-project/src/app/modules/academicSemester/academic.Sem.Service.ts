import { TAcademicSemester } from './academic.Sem.Interface';
import { AcademicSemester } from './academic.Sem.Model';

// create Academic Semester
const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  const result = await AcademicSemester.create(payload);
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
};
