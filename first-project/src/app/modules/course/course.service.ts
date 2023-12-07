import { TCourse } from './course.interface';
import { Course } from './course.model';

// create course
const createCourseIntoDB = async (payload : TCourse) => {
  const result = await Course.create(payload);
  return result;
};

// get all courses
const getAllCoursesFromDB = async () => {
  const result = await Course.find();
  return result;
};

// get single course
const getSingleCourseFromDB = async (id: string) => {
  const result = await Course.findById(id);
  return result;
};

// update course
// const updateCourseIntoDB = async (id: string, payload: any) => {
//   const result = await Course.findByIdAndUpdate(id, payload, {
//     new: true,
//     runValidators: true,
//   });

//   return result;
// };

// delete course
const deleteCourseFromDB = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true, runValidators: true },
  );
  return result;
};

export const courseServices = {
  createCourseIntoDB,
  getAllCoursesFromDB,
  getSingleCourseFromDB,
  deleteCourseFromDB,
};
