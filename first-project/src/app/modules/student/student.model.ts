/* eslint-disable @typescript-eslint/no-this-alias */
// create schema and then create model

import { Schema, model } from 'mongoose';
import {
  Guardian,
  Student,
  StudentModelInterface,
  UserName,
} from './student.interface';

// username schema
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
    maxlength: [20, 'FirstName cannot be more that 20 characters'],
    trim: true,
    // validate: {
    //   validator: function (value: string) {
    //     const result = value.charAt(0).toUpperCase() + value.slice(1);
    //     return result === value;
    //   },
    //   message: '{VALUE} is not in capitalize form',
    // },
  },
  middleName: { type: String },
  lastName: {
    type: String,
    required: true,
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: '{VALUE} is not a valid last name',
    // },
  },
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
const studentSchema = new Schema<Student, StudentModelInterface>({
  id: { type: String, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'UserId is required'],
    unique: true,
    ref: 'User',
  },
  name: { type: userNameSchema, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    // validate: {
    //   validator: (value: string) => validator.isEmail(value),
    //   message: '{VALUE} is not a valid email',
    // },
  },
  dateOfBirth: { type: Date },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not supported',
    },
    required: true,
  },
  contactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    required: true,
  },
  presentAddress: { type: String },
  permanentAddress: { type: String, required: true },
  guardian: { type: guardianSchema, required: true },
  profilePicture: { type: String },
  isDeleted: { type: Boolean, default: false },
});


// custom static method
studentSchema.statics.isUserExist = async function (id: string) {
  const existingStudent = await StudentModel.findOne({ id });
  return existingStudent;
};

// create model
export const StudentModel = model<Student, StudentModelInterface>(
  'Student',
  studentSchema,
);
