


const DynamicRoute = ({
  params,
  searchParams,
}: {
  params: { productById: string };
  searchParams: URLSearchParams;
}) => {


  console.log(params);
  console.log(searchParams);
  return (
    <div>
      <h1 className="text-3xl text-slate-500 font-bold text-center">
        This is DynamicRoute component {params.productById}
      </h1>
    </div>
  );
};

export default DynamicRoute;
