
'use client';

const ErrorPage = ({error, reset}) => {
  console.log(error);
  return (
    <div className="text-center">
      <h1 className="text-4xl text-center text-red-600">Something Went Wrong</h1>
      <p className="text-center text-red-600">{error.message}</p>
      <button className="btn btn-neutral" onClick={()=>reset()}>Refresh</button>
    </div>
  );
};

export default ErrorPage;
