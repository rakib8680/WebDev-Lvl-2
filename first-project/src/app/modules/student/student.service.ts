import { StudentModel } from './student.model';



// get all student
const getAllStudentFromDB = async () => {
  const result = await StudentModel.find()
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};



// get single student
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findById(id).populate('admissionSemester')
  .populate({
    path: 'academicDepartment',
    populate: {
      path: 'academicFaculty',
    },
  });;
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
