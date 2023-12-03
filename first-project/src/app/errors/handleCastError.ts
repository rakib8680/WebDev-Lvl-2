import mongoose from 'mongoose';
import { TErrorSource, TGenericErrorResponse } from '../interFace/error';

const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
    
  const errorSources: TErrorSource = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handleCastError;
