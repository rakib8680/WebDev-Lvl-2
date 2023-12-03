/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler} from 'express';
import { ZodError } from 'zod';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';

  type TErrorSource = {
    path: string | number,
    message : string
  }[]
  const errorSource: TErrorSource = [{
    path: '',
    message: 'Something Went Wrong'
  }];


  if(err instanceof ZodError){
  statusCode = 400;
  message = 'Ami Zod Error';
  }


  return res.status(statusCode).json({
    success: false,
    message,
    err,
    errorSource,
  });
};

export default globalErrorHandler;
