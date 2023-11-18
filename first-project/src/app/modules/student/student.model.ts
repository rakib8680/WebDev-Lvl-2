// create schema and then create model

import { Schema, model } from 'mongoose';
import { Guardian, Student, UserName } from './student.interface';

// username schema
const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

// guardian schema
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String },
  motherContactNo: { type: String },
});

// full studentSchema
const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  email: { type: String, required: true },
  dateOfBirth: { type: String },
  gender: ['male', 'female'],
  contactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  presentAddress: { type: String },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  profilePicture: { type: String },
  isActive: ['active', 'inactive'],
});

// create model
const StudentModel = model<Student>('Student', studentSchema);
