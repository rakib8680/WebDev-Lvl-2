import QueryBuilder from '../../builder/QueryBuilder';
import { CourseSearchableFields } from './course.constant';
import { TCourse } from './course.interface';
import { Course } from './course.model';



// create course
const createCourseIntoDB = async (payload: TCourse) => {
  const result = await Course.create(payload);
  return result;
};



// get all courses
const getAllCoursesFromDB = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(
    Course.find().populate('preRequisiteCourses.course'),
    query,
  )
    .search(CourseSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await courseQuery.modelQuery;
  return result;
};



// get single course
const getSingleCourseFromDB = async (id: string) => {
  const result = await Course.findById(id).populate('preRequisiteCourses.course');
  return result;
};



// update course
const updateCourseIntoDB = async (id: string, payload: Partial<TCourse>) => {

  const {preRequisiteCourses, ...remainingData} = payload;

  const updatedBasicCourseInfo = await Course.findByIdAndUpdate(
    id,
    remainingData,
    { new: true, runValidators: true },
  )

  return updatedBasicCourseInfo;
};



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
  updateCourseIntoDB,
};
