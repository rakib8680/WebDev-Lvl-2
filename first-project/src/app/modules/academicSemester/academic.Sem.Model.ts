import { model, Schema } from 'mongoose';
import { TAcademicSemester} from './academic.Sem.Interface';
import { Months, semesterCode, semesterName } from './academicSem.constant';



const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      enum: semesterName,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      enum: semesterCode,
      required: true,
    },
    startMonth: {
      type: String,
      enum: Months,
      required: true,
    },
    endMonth: {
      type: String,
      enum: Months,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
