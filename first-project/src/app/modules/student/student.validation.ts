import Joi from "joi";

   // Define Joi validation schema for UserName
   const userNameValidationSchema = Joi.object({
    firstName: Joi.string().required().max(20).uppercase(),
    middleName: Joi.string(),
    lastName: Joi.string().required(),
  });

  // Define Joi validation schema for Guardian
  const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    fatherContactNo: Joi.string().required(),
    motherName: Joi.string().required(),
    motherOccupation: Joi.string(),
    motherContactNo: Joi.string(),
  });

  // Define Joi validation schema for Student
  const studentValidationSchema = Joi.object({
    id: Joi.string().required(),
    name: userNameValidationSchema.required(),
    email: Joi.string().required().email(),
    dateOfBirth: Joi.string(),
    gender: Joi.string().valid('male', 'female').required(),
    contactNo: Joi.string().required(),
    bloodGroup: Joi.string()
      .valid('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-')
      .required(),
    presentAddress: Joi.string(),
    permanentAddress: Joi.string().required(),
    guardian: guardianValidationSchema.required(),
    profilePicture: Joi.string(),
    isActive: Joi.string().valid('active', 'inactive').default('active'),
  });


  export default studentValidationSchema;