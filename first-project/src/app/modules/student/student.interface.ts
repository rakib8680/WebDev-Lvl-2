// create interface

// username interface
export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

// student interface
export type Student = {
  id: string;
  name: UserName;
  email: string;
  dateOfBirth: string;
  gender: 'male' | 'female';
  contactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  profilePicture?: string;
  isActive: 'active' | 'inactive';
};

// guardian interface
export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation?: string;
  motherContactNo?: string;
};
