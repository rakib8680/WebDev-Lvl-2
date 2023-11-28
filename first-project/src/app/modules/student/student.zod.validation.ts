import { z } from 'zod';

// Zod schema for UserName
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20, { message: 'FirstName cannot be more that 20 characters' }),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1)
    .max(20, { message: 'FirstName cannot be more that 20 characters' }),
});

// Zod schema for Guardian
const guardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().optional(),
});

// Zod schema for Student
const CreateStudentValidationSchema = z.object({
  body: z.object({
    password: z.string(),
    student: z.object({
      name: userNameValidationSchema,
      email: z.string().email(),
      dateOfBirth: z.date().optional(),
      gender: z.enum(['male', 'female']),
      contactNo: z.string(),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: guardianValidationSchema,
      profilePicture: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
 CreateStudentValidationSchema,
};
